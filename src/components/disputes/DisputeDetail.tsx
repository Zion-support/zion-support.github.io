
import React, { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import { useDisputes } from "@/hooks/useDisputes",
import {logErrorToProduction} from '@/utils/productionLogger',
import {
 Dispute, disputeReasonLabels, DisputeMessage, DisputeStatus, ResolutionType
} from "@/types/disputes",

import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Separator } from "@/components/ui/separator",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { format, formatDistanceToNow } from "date-fns",
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",
import { ArrowDown, Check, MessageSquare, Download } from 'lucide-react'
import { useAuth } from "@/hooks/useAuth",
import { toast } from "sonner",export function DisputeDetail() {
  const router = useRouter(),
  const { disputeId } = router.query as { disputeId?: string },
  const { user } = useAuth(),
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes(),
import React, {useState, useEffect} from "react";
import {Dispute, disputeReasonLabels, DisputeMessage, DisputeStatus, ResolutionType} from "@/types/disputes";

export function DisputeDetail() {const router = useRouter();
  const { disputeId} = router.query as {disputeId?: string};
  const {user} = useAuth();
  const {getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage} = useDisputes();

  const [dispute, setDispute] = useState<Dispute | null>(null),
  const [messages, setMessages] = useState<DisputeMessage[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [message, setMessage] = useState(""),
  const [adminNote, setAdminNote] = useState(""),
  const [isSending, setIsSending] = useState(false),
  const [resolution, setResolution] = useState<{ summary: string, resolutiontype: ResolutionType }>({
  summary: "",
  resolutiontype: "compromise"}),
   
  const [activeTab, setActiveTab] = useState("overview"),

  // Check if user is admin (placeholder - implement proper admin check)
  const isAdmin = user?.userType === "admin",   
  const [activeTab, setActiveTab] = useState(&quot;overview&quot;);

  // Check if user is admin (placeholder - implement proper admin check)
  const isAdmin = user?.userType === &quot;admin&quot;
  
  useEffect(() => {
    if (!disputeId) return,

    const loadDisputeData = async () => {
      setIsLoading(true),
      try {
        const disputeData = await getDisputeById(disputeId),
        if (!disputeData) {
          toast.error("Dispute not found"),
          router.push("/dashboard/disputes"),
          return        }
        setDispute(disputeData),
        
        const messagesData = await getDisputeMessages(disputeId),
        setMessages(messagesData)
      } catch (error) {
        logErrorToProduction('Error loading dispute data:', { data: error }),
        toast.error("Failed to load dispute")      } finally {
        setIsLoading(false)
      }
    },
  const isAdmin = user?.userType === "admin";
  
  useEffect_(() => {if (!disputeId) return;

    const loadDisputeData = async () => {
      setIsLoading(true);
      try {
        const disputeData = await getDisputeById(disputeId);
        if (!disputeData) {
          toast.error("Dispute not found");
          router.push("/dashboard/disputes");
          return}
        setDispute(disputeData);
        
        const messagesData = await getDisputeMessages(disputeId);
        setMessages(messagesData)
      } catch (error) {logErrorToProduction('Error loading dispute data:', _{ data: error});
        toast.error("Failed to load dispute")
      } finally {setIsLoading(false)}
    };
    
    loadDisputeData()
  }, [disputeId, getDisputeById, getDisputeMessages, router]),

  const handleStatusChange = async (status: DisputeStatus) => {
    if (!disputeId) return,

    const success = await updateDisputeStatus(disputeId, status),
    if (success) {
      // Update the dispute object with the new status,
setDispute({ ...dispute!, status: status })
    } else {
      toast.error("Failed to update dispute status")    }
  },

  const handleResolveDispute = async () => {
    if (!disputeId) return,
    
    if (!resolution.summary) {
      toast.error("Please provide a resolution summary"),
      return    }
    
    const success = await resolveDispute(disputeId, {
      summary: resolution.summary,
      resolutiontype: (resolution.resolutiontype as ResolutionType) || "compromise"}),    if (success && dispute) {
      setDispute({
        ...dispute,
        resolutionsummary: resolution.summary,
        resolutiontype: resolution.resolutiontype,
        resolvedat: new Date().toISOString()})
    } else {
      toast.error("Failed to resolve dispute")    }
  },

  const handleSendMessage = async () => {
    if (!disputeId || !message.trim()) return,
  const handleStatusChange = async (status: DisputeStatus) => {if (!disputeId) return;

    const success = await updateDisputeStatus(disputeId, status);
    if (success) {
      // Update the dispute object with the new status,
setDispute({ ...dispute!, status: status})
    } else {toast.error("Failed to update dispute status")}
  };

  const handleResolveDispute = async () => {if (!disputeId) return;
    
    if (!resolution.summary) {
      toast.error("Please provide a resolution summary");
      return}
    
    const success = await resolveDispute(disputeId, {summary: resolution.summary, resolution_type: (resolution.resolutiontype as ResolutionType) || "compromise"});
    if (success && dispute) {setDispute({
        ...dispute, resolution_summary: resolution.summary, resolution_type: resolution.resolutiontype, resolved_at: new Date().toISOString()})
    } else {toast.error("Failed to resolve dispute")}
  };

  const handleSendMessage = async () => {if (!disputeId || !message.trim()) return;
    
    setIsSending(true),
    try {
      const success = await addDisputeMessage(disputeId, message, isAdmin),
      if (success) {
        // Refresh messages,
const updatedMessages = await getDisputeMessages(disputeId),
        setMessages(updatedMessages),
        setMessage("")      }
    } catch (error) {
      logErrorToProduction('Error sending message:', { data: error })
    } finally {
      setIsSending(false)
    }
  },

  if (isLoading) {
    return (
      <div className=&quot;p-8 text-center&quot;>
        <div className=&quot;w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full&quot;></div>
        <p>Loading dispute details...</p>
      </div>
    )
  }

  if (!dispute) {
    return (
      <div className=&quot;p-8 text-center&quot;>
      const success = await addDisputeMessage(disputeId, message, isAdmin);
      if (success) {
        // Refresh messages,
const updatedMessages = await getDisputeMessages(disputeId);
        setMessages(updatedMessages);
        setMessage("")}
    } catch (error) {logErrorToProduction('Error sending message:', _{ data: error})
    } finally {setIsSending(false)}
  };

  if (isLoading) {return (
      <div className="p-8 text-center">
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>
        <p>Loading dispute details...</p>
      </div>
    )}

  if (!dispute) {return (_<div className="p-8 text-center">
        <p>Dispute not found</p>
        <Button onClick={() => router.push(&quot;/dashboard/disputes&quot;)} className=&quot;mt-4&quot;>
          Back to Disputes
        </Button>
      </div>
    )
  }

  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case "open": return "default",
      case "underreview": return "secondary",
      case "resolved": return "outline", // Changed from "success" to "outline"
      case "closed": return "outline",
      default: return "default"    }
  },
  const getStatusBadgeVariant = (status: DisputeStatus) => {switch (status) {
      case "open": return "default";
      case "underreview": return "secondary";
      case "resolved": return "outline"; // Changed from "success" to "outline"
      case "closed": return "outline";
      default: return "default"}
  };

  return (
    <div className=&quot;container mx-auto p-4 space-y-6&quot;>
      <div className=&quot;flex flex-wrap items-center justify-between gap-4&quot;>
        <div>
          <div className=&quot;flex items-center gap-2&quot;>
            <h1 className=&quot;text-2xl font-bold&quot;>Dispute Case</h1>
            <Badge variant={getStatusBadgeVariant(dispute.status)}>
              {dispute.status.replace('_ ')}
            </Badge>
          </div>
          <p className=&quot;text-muted-foreground&quot;>
            Reported {formatDistanceToNow(new Date(dispute?.createdat || ""), { addSuffix: true })}
          </p>
        </div>
        
        <div className="flex gap-2&quot;>
          <Button variant=&quot;outline&quot; onClick={() => router.push(&quot;/dashboard/disputes&quot;)}>
            Back to List
          </Button>
          {isAdmin && dispute?.status === &quot;open&quot; && (
            <Button onClick={() => handleStatusChange(&quot;underreview&quot;)}>              Start Review
            </Button>
          )}
        </div>
      </div>

      {dispute.status === &quot;resolved" && dispute.resolutionsummary && (        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <Check className="h-4 w-4" />
          <AlertTitle>This dispute has been resolved</AlertTitle>
          <AlertDescription>
            {dispute.resolutionsummary}
          </AlertDescription>
        </Alert>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6&quot;>
              <TabsTrigger value=&quot;overview&quot;>Overview</TabsTrigger>
              <TabsTrigger value=&quot;messages&quot;>Messages</TabsTrigger>
              <TabsTrigger value=&quot;attachments&quot;>Attachments</TabsTrigger>
              {isAdmin && <TabsTrigger value=&quot;admin&quot;>Admin Notes</TabsTrigger>}            </TabsList>
            
            <TabsContent value=&quot;overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dispute Details</CardTitle>
                  <CardDescription>Information about this dispute case</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Reason</h3>
                    <p>{disputeReasonLabels[
                        dispute.reasoncode
                      ] ?? dispute.reasoncode}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="whitespace-pre-wrap">{dispute.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium&quot;>Project</h3>
                    <p>{dispute.project?.title || &quot;Unknown Project"}</p>
                    <p className="text-sm text-muted-foreground">{dispute.project?.scopesummary}</p>                  </div>
                  
                  {dispute.milestoneid && (
                    <div>
                      <h3 className="font-medium">Related Milestone</h3>
                      <p className="text-sm">Milestone ID: {dispute.milestoneid}</p>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="font-medium">Timeline</h3>
                    <ul className="space-y-2 mt-2">
                      <li className="flex gap-2 items-center&quot;>
                        <Badge variant=&quot;outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center&quot;>1</Badge>
                        <span>Created on {format(new Date(dispute.createdat), &quot;MMM d, yyyy 'at' h:mm a&quot;)}</span>
                      </li>
                      
                      {dispute.status !== &quot;open" && (
                        <li className="flex gap-2 items-center&quot;>
                          <Badge variant=&quot;outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>                          <span>Under review</span>
                        </li>
                      )}
                      
                      {dispute.resolvedat && (
                        <li className="flex gap-2 items-center&quot;>
                          <Badge variant=&quot;outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center&quot;>
                            {dispute.status !== &quot;open&quot; ? &quot;3&quot; : &quot;2&quot}
                          </Badge>
                          <span>Resolved on {format(new Date(dispute.resolvedat), &quot;MMM d, yyyy 'at' h:mm a&quot;)}</span>                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              {dispute.status === &quot;resolved" && (                <Card>
                  <CardHeader>
                    <CardTitle>Resolution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{dispute.resolutionsummary}</p>
                    
                    {dispute.resolutiontype && (
                      <div className="mt-4&quot;>
                        <Badge>
                          Resolution: {dispute.resolutiontype.replace('_ ')}                        </Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value=&quot;messages" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>Communication regarding this dispute</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 max-h-[600px] overflow-y-auto p-2">
                    {messages.length === 0 ? (
                      <div className="text-center py-12">
                        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">No messages yet</p>
                      </div>
                    ) : (
                      messages
                        .filter(msg => !msg.isadmin_note)
                        .map((msg) => {
                          const isCurrentUser = user?.id === msg.userid,                          return (
                            <div,
key={msg.id}
                              className={_`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                            >
                              <div,
className={_`max-w-[80%] ${
                                  isCurrentUser
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted'} p-4 rounded-lg`}
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage src={msg.userprofile?.avatarurl} alt={msg.userprofile?.displayname || "User avatar"} />
                                    <AvatarFallback>
                                      {msg.userprofile?.displayname?.[0] || '?'}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm font-medium">
                                    {msg.userprofile?.displayname || 'Unknown User'}
                                  </span>
                                  <span className="text-xs opacity-70">
                                    {format(new Date(msg.createdat), _'MMM d, h:mm a')}
                                  </span>
                                </div>
                                <p className="whitespace-pre-wrap">{msg.message}</p>
                              </div>
                            </div>
                          )
                        })
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full space-y-4&quot;>
                    <Textarea,
placeholder=&quot;Type your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}                      className="min-h-[100px]"
                      disabled={isSending}
                    />
                    <div className="flex justify-end&quot;>
                      <Button onClick={handleSendMessage} disabled={isSending || !message.trim()}>
                        {isSending ? &quot;Sending...&quot; : &quot;Send Message&quot}                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value=&quot;attachments">
              <Card>
                <CardHeader>
                  <CardTitle>Attachments</CardTitle>
                  <CardDescription>Files related to this dispute</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground&quot;>No attachments available</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {isAdmin && (
              <TabsContent value=&quot;admin" className="space-y-6">                <Card>
                  <CardHeader>
                    <CardTitle>Admin Actions</CardTitle>
                    <CardDescription>Handle this dispute as an administrator</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Change Status</h3>
                      <div className="flex gap-2&quot;>
                        <Button,
variant=&quot;outline&quot; 
                          onClick={() => handleStatusChange(&quot;open&quot;)}
                          disabled={dispute.status === &quot;open&quot}                        >
                          Mark as Open
                        </Button>
                        <Button,
variant=&quot;outline&quot; 
                          onClick={() => handleStatusChange(&quot;underreview&quot;)}
                          disabled={dispute.status === &quot;underreview&quot}                        >
                          Mark as Under Review
                        </Button>
                        <Button,
variant=&quot;outline&quot; 
                          onClick={() => handleStatusChange(&quot;closed&quot;)}
                          disabled={dispute.status === &quot;closed&quot}                        >
                          Close Dispute
                        </Button>
                      </div>
                    </div>
                    
                    {dispute.status !== &quot;resolved" && (
                      <div>                        <h3 className="font-medium mb-2">Resolve Dispute</h3>
                        <div className="space-y-4&quot;>
                          <Textarea,
placeholder=&quot;Enter resolution summary..."
                            value={resolution.summary}
                            onChange={_(e) => setResolution({ ...resolution, summary: e.target.value})}
                            className="min-h-[100px]"
                          />
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>
                              <select,
className="w-full p-2 border rounded&quot;
                                value={resolution.resolutiontype || "&quot}
                                onChange={(e) => setResolution({ ...resolution, resolutiontype: e.target.value as ResolutionType })}                              >
                                <option value=&quot;clientfavor&quot;>In Client's Favor</option>
                                <option value=&quot;talentfavor&quot;>In Talent's Favor</option>
                                <option value=&quot;compromise&quot;>Compromise</option>
                                <option value=&quot;dismissed&quot;>Dismissed</option>
                              </select>
                            </div>
                          </div>
                          
                          <Button onClick={handleResolveDispute}>Resolve Dispute</Button>
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h3 className=&quot;font-medium mb-2&quot;>Admin Notes</h3>
                      <div className=&quot;space-y-4 max-h-[300px] overflow-y-auto p-2&quot;>
                        {messages
                          .filter(msg => msg.isadmin_note)
                          .map((msg) => (
                          <div key={msg.id} className=&quot;bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900&quot;>
                            <div className=&quot;flex items-center justify-between mb-2&quot;>
                              <div className=&quot;flex items-center gap-2&quot;>
                                <Avatar className=&quot;h-6 w-6&quot;>
                                  <AvatarImage src={msg.userprofile?.avatarurl} alt={msg.userprofile?.displayname || &quot;Admin avatar&quot} />                                  <AvatarFallback>
                                    {msg.userprofile?.displayname?.[0] || 'A'}
                                  </AvatarFallback>
                                </Avatar>
                                <span className=&quot;text-sm font-medium&quot;>
                                  {msg.userprofile?.displayname || 'Admin'}
                                </span>
                              </div>
                              <span className=&quot;text-xs opacity-70&quot;>
                                {format(new Date(msg.createdat), 'MMM d, h:mm a')}
                              </span>
                            </div>
                            <p className=&quot;whitespace-pre-wrap text-sm&quot;>{msg.message}</p>
                          </div>
                        ))}
                        
                        {!messages.some(msg => msg.isadmin_note) && (
                          <p className=&quot;text-sm text-muted-foreground italic&quot;>No admin notes yet</p>                        )}
                      </div>
                      
                      <Separator className=&quot;my-4&quot; />
                      
                      <div className=&quot;space-y-4&quot;>
                        <Textarea,
placeholder=&quot;Add an admin note (only visible to administrators)...&quot;
                          value={adminNote}
                          onChange={(e) => setAdminNote(e.target.value)}
                        />
                        <Button,
variant=&quot;outline&quot;
                          onClick={() => {
                            if (adminNote.trim()) {
                              addDisputeMessage(disputeId!, adminNote, true).then(() => {
                                getDisputeMessages(disputeId!).then(setMessages),
                                setAdminNote("")
                              })                            }
                          }}
                        >
                          Add Admin Note
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Parties Involved</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={dispute.clientprofile?.avatarurl} alt={dispute.clientprofile?.displayname || "Client avatar"} />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Client</p>
                  <p className="text-sm text-muted-foreground&quot;>
                    {dispute.clientprofile?.displayname || &quot;Unknown Client"}                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
              </div>
              
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={dispute.talentprofile?.avatarurl} alt={dispute.talentprofile?.displayname || "Talent avatar"} />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Talent</p>
                  <p className="text-sm text-muted-foreground&quot;>
                    {dispute.talentprofile?.displayname || &quot;Unknown Talent"}                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Case Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Case ID:</span>
                <span className="font-mono">{dispute.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium&quot;>Created:</span>
                <span>{format(new Date(dispute.createdat), &quot;MMM d, yyyy")}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status:</span>
                <Badge variant={getStatusBadgeVariant(dispute.status)}>
                  {dispute.status.replace('_ ')}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="font-medium&quot;>Raised by:</span>
                <span>{dispute.clientprofile && dispute.talentprofile && dispute.raisedby === (dispute.clientprofile as any).id ? &quot;Client&quot; : dispute.talentprofile && dispute.raisedby === (dispute.talentprofile as any).id ? &quot;Talent&quot; : &quot;Unknown"}</span>              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
