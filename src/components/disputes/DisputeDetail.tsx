
<<<<<<< HEAD
<<<<<<< HEAD
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
import { toast } from "sonner",
=======
import React, { useState, useEffect } from &quot;react&quot;;
import { useRouter } from 'next/router';
import { useDisputes } from &quot;@/hooks/useDisputes&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';
import {
 Dispute, disputeReasonLabels, DisputeMessage, DisputeStatus, ResolutionType
} from &quot;@/types/disputes&quot;;

import { Button } from &quot;@/components/ui/button&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Separator } from &quot;@/components/ui/separator&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { format, formatDistanceToNow } from &quot;date-fns&quot;;
import { Alert, AlertDescription, AlertTitle } from &quot;@/components/ui/alert&quot;;
import { ArrowDown, Check, MessageSquare, Download } from 'lucide-react'
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { toast } from &quot;sonner&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function DisputeDetail() {
  const router = useRouter(),
  const { disputeId } = router.query as { disputeId?: string },
  const { user } = useAuth(),
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes(),
=======
import React, {_useState, _useEffect} from "react";
import {_Dispute, _disputeReasonLabels, _DisputeMessage, _DisputeStatus, _ResolutionType} from "@/types/disputes";


export function DisputeDetail() {_const _router = useRouter();
  const { disputeId} = router.query as {_disputeId?: string};
  const {_user} = useAuth();
  const {_getDisputeById, _updateDisputeStatus, _resolveDispute, _getDisputeMessages, _addDisputeMessage} = useDisputes();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

<<<<<<< HEAD
  const [dispute, setDispute] = useState<Dispute | null>(null),
  const [messages, setMessages] = useState<DisputeMessage[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [message, setMessage] = useState(""),
  const [adminNote, setAdminNote] = useState(""),
  const [isSending, setIsSending] = useState(false),
  const [resolution, setResolution] = useState<{ summary: string, resolution_type: ResolutionType }>({
  summary: "",
  resolution_type: "compromise"}),
   
  const [activeTab, setActiveTab] = useState("overview"),

  // Check if user is admin (placeholder - implement proper admin check)
  const isAdmin = user?.userType === "admin",
=======
  const [dispute, setDispute] = useState<Dispute | null>(null);
  const [messages, setMessages] = useState<DisputeMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("&quot;);
  const [adminNote, setAdminNote] = useState("&quot;);
  const [isSending, setIsSending] = useState(false);
<<<<<<< HEAD
  const [resolution, setResolution] = useState<{ summary: string; resolution_type: ResolutionType }>({
  summary: "&quot;,
  resolution_type: &quot;compromise&quot;});
=======
  const [resolution, setResolution] = useState<{_summary: string; resolution_type: ResolutionType}>({_summary: "", _resolution_type: "compromise"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
   
  const [activeTab, setActiveTab] = useState(&quot;overview&quot;);

  // Check if user is admin (placeholder - implement proper admin check)
<<<<<<< HEAD
  const isAdmin = user?.userType === &quot;admin&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  useEffect(() => {
    if (!disputeId) return,

    const loadDisputeData = async () => {
      setIsLoading(true),
      try {
        const disputeData = await getDisputeById(disputeId),
        if (!disputeData) {
<<<<<<< HEAD
          toast.error("Dispute not found"),
          router.push("/dashboard/disputes"),
          return
=======
          toast.error(&quot;Dispute not found&quot;);
          router.push(&quot;/dashboard/disputes&quot;);
          return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
        setDispute(disputeData),
        
        const messagesData = await getDisputeMessages(disputeId),
        setMessages(messagesData)
      } catch (error) {
<<<<<<< HEAD
        logErrorToProduction('Error loading dispute data:', { data: error }),
        toast.error("Failed to load dispute")
=======
        logErrorToProduction('Error loading dispute data:', { data: error });
        toast.error(&quot;Failed to load dispute&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } finally {
        setIsLoading(false)
      }
    },
=======
  const _isAdmin = user?.userType === "admin";
  
  useEffect__(() => {_if (!disputeId) return;

    const _loadDisputeData = async () => {
      setIsLoading(true);
      try {
        const _disputeData = await getDisputeById(disputeId);
        if (!disputeData) {
          toast.error("Dispute not found");
          router.push("/dashboard/disputes");
          return;}
        setDispute(disputeData);
        
        const _messagesData = await getDisputeMessages(disputeId);
        setMessages(messagesData);
      } catch (error) {_logErrorToProduction('Error loading dispute data:', _{ data: error});
        toast.error("Failed to load dispute");
      } finally {_setIsLoading(false);}
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    loadDisputeData()
  }, [disputeId, getDisputeById, getDisputeMessages, router]),

<<<<<<< HEAD
  const handleStatusChange = async (status: DisputeStatus) => {
    if (!disputeId) return,

    const success = await updateDisputeStatus(disputeId, status),
    if (success) {
      // Update the dispute object with the new status
      setDispute({ ...dispute!, status: status })
    } else {
<<<<<<< HEAD
      toast.error("Failed to update dispute status")
=======
      toast.error(&quot;Failed to update dispute status&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const handleResolveDispute = async () => {
    if (!disputeId) return,
    
    if (!resolution.summary) {
<<<<<<< HEAD
      toast.error("Please provide a resolution summary"),
      return
=======
      toast.error(&quot;Please provide a resolution summary&quot;);
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    const success = await resolveDispute(disputeId, {
      summary: resolution.summary,
<<<<<<< HEAD
      resolution_type: (resolution.resolution_type as ResolutionType) || "compromise"}),
=======
      resolution_type: (resolution.resolution_type as ResolutionType) || &quot;compromise&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    if (success && dispute) {
      setDispute({
        ...dispute,
        resolution_summary: resolution.summary,
        resolution_type: resolution.resolution_type,
        resolved_at: new Date().toISOString()})
    } else {
<<<<<<< HEAD
      toast.error("Failed to resolve dispute")
=======
      toast.error(&quot;Failed to resolve dispute&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  const handleSendMessage = async () => {
    if (!disputeId || !message.trim()) return,
=======
  const _handleStatusChange = async (_status: DisputeStatus) => {_if (!disputeId) return;

    const _success = await updateDisputeStatus(disputeId, _status);
    if (success) {
      // Update the dispute object with the new status
      setDispute({ ...dispute!, _status: status});
    } else {_toast.error("Failed to update dispute status");}
  };

  const _handleResolveDispute = async () => {_if (!disputeId) return;
    
    if (!resolution.summary) {
      toast.error("Please provide a resolution summary");
      return;}
    
    const _success = await resolveDispute(disputeId, {_summary: resolution.summary, _resolution_type: (resolution.resolution_type as ResolutionType) || "compromise"});
    if (success && dispute) {_setDispute({
        ...dispute, _resolution_summary: resolution.summary, _resolution_type: resolution.resolution_type, _resolved_at: new Date().toISOString()});
    } else {_toast.error("Failed to resolve dispute");}
  };

  const _handleSendMessage = async () => {_if (!disputeId || !message.trim()) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsSending(true),
    try {
<<<<<<< HEAD
      const success = await addDisputeMessage(disputeId, message, isAdmin),
      if (success) {
        // Refresh messages
<<<<<<< HEAD
        const updatedMessages = await getDisputeMessages(disputeId),
        setMessages(updatedMessages),
        setMessage("")
=======
        const updatedMessages = await getDisputeMessages(disputeId);
        setMessages(updatedMessages);
        setMessage("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
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
=======
      const _success = await addDisputeMessage(disputeId, _message, _isAdmin);
      if (success) {
        // Refresh messages
        const _updatedMessages = await getDisputeMessages(disputeId);
        setMessages(updatedMessages);
        setMessage("");}
    } catch (error) {_logErrorToProduction('Error sending message:', _{ data: error});
    } finally {_setIsSending(false);}
  };

  if (isLoading) {_return (
      <div className="p-8 text-center">
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>
        <p>Loading dispute details...</p>
      </div>
    );}

  if (!dispute) {_return (_<div className="p-8 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <p>Dispute not found</p>
        <Button onClick={() => router.push(&quot;/dashboard/disputes&quot;)} className=&quot;mt-4&quot;>
          Back to Disputes
        </Button>
      </div>
    )
  }

<<<<<<< HEAD
  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
<<<<<<< HEAD
      case "open": return "default",
      case "under_review": return "secondary",
      case "resolved": return "outline", // Changed from "success" to "outline"
      case "closed": return "outline",
      default: return "default"
=======
      case &quot;open&quot;: return &quot;default&quot;;
      case &quot;under_review&quot;: return &quot;secondary&quot;;
      case &quot;resolved&quot;: return &quot;outline&quot;; // Changed from &quot;success&quot; to &quot;outline&quot;
      case &quot;closed&quot;: return &quot;outline&quot;;
      default: return &quot;default&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
=======
  const _getStatusBadgeVariant = (_status: DisputeStatus) => {_switch (status) {
      case "open": return "default";
      case "under_review": return "secondary";
      case "resolved": return "outline"; // Changed from "success" to "outline"
      case "closed": return "outline";
      default: return "default";}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;container mx-auto p-4 space-y-6&quot;>
      <div className=&quot;flex flex-wrap items-center justify-between gap-4&quot;>
        <div>
<<<<<<< HEAD
          <div className=&quot;flex items-center gap-2&quot;>
            <h1 className=&quot;text-2xl font-bold&quot;>Dispute Case</h1>
            <Badge variant={getStatusBadgeVariant(dispute.status)}>
              {dispute.status.replace('_ ')}
            </Badge>
          </div>
          <p className=&quot;text-muted-foreground&quot;>
            Reported {formatDistanceToNow(new Date(dispute?.created_at || ""), { addSuffix: true })}
          </p>
        </div>
        
        <div className="flex gap-2&quot;>
          <Button variant=&quot;outline&quot; onClick={() => router.push(&quot;/dashboard/disputes&quot;)}>
            Back to List
          </Button>
          {isAdmin && dispute?.status === &quot;open&quot; && (
            <Button onClick={() => handleStatusChange(&quot;under_review&quot;)}>
=======
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Dispute Case</h1>
            <Badge variant={_getStatusBadgeVariant(dispute.status)}>
              {_dispute.status.replace('_', _' ')}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Reported {_formatDistanceToNow(new Date(dispute?.created_at || ""), _{ addSuffix: true})}
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" onClick={_() => router.push("/dashboard/disputes")}>
            Back to List
          </Button>
          {_isAdmin && dispute?.status === "open" && (_<Button onClick={() => handleStatusChange("under_review")}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Start Review
            </Button>
          )}
        </div>
      </div>

<<<<<<< HEAD
      {dispute.status === &quot;resolved" && dispute.resolution_summary && (
=======
      {_dispute.status === "resolved" && dispute.resolution_summary && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <Check className="h-4 w-4" />
          <AlertTitle>This dispute has been resolved</AlertTitle>
          <AlertDescription>
            {dispute.resolution_summary}
          </AlertDescription>
        </Alert>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
<<<<<<< HEAD
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6&quot;>
              <TabsTrigger value=&quot;overview&quot;>Overview</TabsTrigger>
              <TabsTrigger value=&quot;messages&quot;>Messages</TabsTrigger>
              <TabsTrigger value=&quot;attachments&quot;>Attachments</TabsTrigger>
              {isAdmin && <TabsTrigger value=&quot;admin&quot;>Admin Notes</TabsTrigger>}
=======
          <Tabs value={_activeTab} onValueChange={_setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="attachments">Attachments</TabsTrigger>
              {_isAdmin && <TabsTrigger value="admin">Admin Notes</TabsTrigger>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </TabsList>
            
            <TabsContent value=&quot;overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dispute Details</CardTitle>
                  <CardDescription>Information about this dispute case</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Reason</h3>
                    <p>{_disputeReasonLabels[
                        dispute.reason_code
                      ] ?? dispute.reason_code}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="whitespace-pre-wrap">{_dispute.description}</p>
                  </div>
                  
                  <div>
<<<<<<< HEAD
                    <h3 className="font-medium&quot;>Project</h3>
                    <p>{dispute.project?.title || &quot;Unknown Project"}</p>
                    <p className="text-sm text-muted-foreground">{dispute.project?.scope_summary}</p>
=======
                    <h3 className="font-medium">Project</h3>
                    <p>{_dispute.project?.title || "Unknown Project"}</p>
                    <p className="text-sm text-muted-foreground">{_dispute.project?.scope_summary}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                  
                  {_dispute.milestone_id && (
                    <div>
                      <h3 className="font-medium">Related Milestone</h3>
                      <p className="text-sm">Milestone ID: {dispute.milestone_id}</p>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="font-medium">Timeline</h3>
                    <ul className="space-y-2 mt-2">
<<<<<<< HEAD
                      <li className="flex gap-2 items-center&quot;>
                        <Badge variant=&quot;outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center&quot;>1</Badge>
                        <span>Created on {format(new Date(dispute.created_at), &quot;MMM d, yyyy 'at' h:mm a&quot;)}</span>
                      </li>
                      
                      {dispute.status !== &quot;open" && (
                        <li className="flex gap-2 items-center&quot;>
                          <Badge variant=&quot;outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>
=======
                      <li className="flex gap-2 items-center">
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1</Badge>
                        <span>Created on {_format(new Date(dispute.created_at), _"MMM d, _yyyy 'at' h:mm a")}</span>
                      </li>
                      
                      {_dispute.status !== "open" && (
                        <li className="flex gap-2 items-center">
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          <span>Under review</span>
                        </li>
                      )}
                      
<<<<<<< HEAD
                      {dispute.resolved_at && (
                        <li className="flex gap-2 items-center&quot;>
                          <Badge variant=&quot;outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center&quot;>
                            {dispute.status !== &quot;open&quot; ? &quot;3&quot; : &quot;2&quot;}
                          </Badge>
                          <span>Resolved on {format(new Date(dispute.resolved_at), &quot;MMM d, yyyy 'at' h:mm a&quot;)}</span>
=======
                      {_dispute.resolved_at && (
                        <li className="flex gap-2 items-center">
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
                            {dispute.status !== "open" ? "3" : "2"}
                          </Badge>
                          <span>Resolved on {_format(new Date(dispute.resolved_at), _"MMM d, _yyyy 'at' h:mm a")}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
<<<<<<< HEAD
              {dispute.status === &quot;resolved" && (
=======
              {_dispute.status === "resolved" && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Card>
                  <CardHeader>
                    <CardTitle>Resolution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{dispute.resolution_summary}</p>
                    
<<<<<<< HEAD
                    {dispute.resolution_type && (
                      <div className="mt-4&quot;>
                        <Badge>
                          Resolution: {dispute.resolution_type.replace('_ ')}
=======
                    {_dispute.resolution_type && (
                      <div className="mt-4">
                        <Badge>
                          Resolution: {dispute.resolution_type.replace('_', _' ')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </Badge>
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
                    {_messages.length === 0 ? (
                      <div className="text-center py-12">
                        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">No messages yet</p>
                      </div>
                    ) : (
                      messages
                        .filter(msg => !msg.is_admin_note)
<<<<<<< HEAD
                        .map((msg) => {
                          const isCurrentUser = user?.id === msg.user_id,
=======
                        .map(_(msg) => {
                          const _isCurrentUser = user?.id === msg.user_id;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          return (
                            <div
                              key={msg.id}
                              className={_`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                            >
                              <div
                                className={_`max-w-[80%] ${
                                  isCurrentUser
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted'} p-4 rounded-lg`}
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage src={_msg.user_profile?.avatar_url} alt={_msg.user_profile?.display_name || "User avatar"} />
                                    <AvatarFallback>
                                      {_msg.user_profile?.display_name?.[0] || '?'}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm font-medium">
                                    {_msg.user_profile?.display_name || 'Unknown User'}
                                  </span>
                                  <span className="text-xs opacity-70">
                                    {_format(new Date(msg.created_at), _'MMM d, _h:mm a')}
                                  </span>
                                </div>
                                <p className="whitespace-pre-wrap">{_msg.message}</p>
                              </div>
                            </div>
                          )
                        })
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full space-y-4&quot;>
                    <Textarea
<<<<<<< HEAD
                      placeholder=&quot;Type your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
=======
                      placeholder="Type your message here..."
                      value={_message}
                      onChange={_(_e) => setMessage(e.target.value)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      className="min-h-[100px]"
                      disabled={_isSending}
                    />
<<<<<<< HEAD
                    <div className="flex justify-end&quot;>
                      <Button onClick={handleSendMessage} disabled={isSending || !message.trim()}>
                        {isSending ? &quot;Sending...&quot; : &quot;Send Message&quot;}
=======
                    <div className="flex justify-end">
                      <Button onClick={_handleSendMessage} disabled={_isSending || !message.trim()}>
                        {_isSending ? "Sending..." : "Send Message"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </Button>
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
            
<<<<<<< HEAD
            {isAdmin && (
              <TabsContent value=&quot;admin" className="space-y-6">
=======
            {_isAdmin && (_<TabsContent value="admin" className="space-y-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Card>
                  <CardHeader>
                    <CardTitle>Admin Actions</CardTitle>
                    <CardDescription>Handle this dispute as an administrator</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Change Status</h3>
                      <div className="flex gap-2&quot;>
                        <Button 
<<<<<<< HEAD
                          variant=&quot;outline&quot; 
                          onClick={() => handleStatusChange(&quot;open&quot;)}
                          disabled={dispute.status === &quot;open&quot;}
=======
                          variant="outline" 
                          onClick={() => handleStatusChange("open")}
                          disabled={_dispute.status === "open"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        >
                          Mark as Open
                        </Button>
                        <Button 
<<<<<<< HEAD
                          variant=&quot;outline&quot; 
                          onClick={() => handleStatusChange(&quot;under_review&quot;)}
                          disabled={dispute.status === &quot;under_review&quot;}
=======
                          variant="outline" 
                          onClick={_() => handleStatusChange("under_review")}
                          disabled={_dispute.status === "under_review"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        >
                          Mark as Under Review
                        </Button>
                        <Button 
<<<<<<< HEAD
                          variant=&quot;outline&quot; 
                          onClick={() => handleStatusChange(&quot;closed&quot;)}
                          disabled={dispute.status === &quot;closed&quot;}
=======
                          variant="outline" 
                          onClick={_() => handleStatusChange("closed")}
                          disabled={_dispute.status === "closed"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        >
                          Close Dispute
                        </Button>
                      </div>
                    </div>
                    
<<<<<<< HEAD
                    {dispute.status !== &quot;resolved" && (
                      <div>
=======
                    {_dispute.status !== "resolved" && (_<div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <h3 className="font-medium mb-2">Resolve Dispute</h3>
                        <div className="space-y-4&quot;>
                          <Textarea
                            placeholder=&quot;Enter resolution summary..."
                            value={resolution.summary}
                            onChange={_(e) => setResolution({ ...resolution, _summary: e.target.value})}
                            className="min-h-[100px]"
                          />
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>
                              <select
<<<<<<< HEAD
                                className="w-full p-2 border rounded&quot;
                                value={resolution.resolution_type || "&quot;}
                                onChange={(e) => setResolution({ ...resolution, resolution_type: e.target.value as ResolutionType })}
=======
                                className="w-full p-2 border rounded"
                                value={_resolution.resolution_type || ""}
                                onChange={_(_e) => setResolution({ ...resolution, _resolution_type: e.target.value as ResolutionType})}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              >
                                <option value=&quot;client_favor&quot;>In Client's Favor</option>
                                <option value=&quot;talent_favor&quot;>In Talent's Favor</option>
                                <option value=&quot;compromise&quot;>Compromise</option>
                                <option value=&quot;dismissed&quot;>Dismissed</option>
                              </select>
                            </div>
                          </div>
                          
                          <Button onClick={_handleResolveDispute}>Resolve Dispute</Button>
                        </div>
                      </div>
                    )}
                    
                    <div>
<<<<<<< HEAD
                      <h3 className=&quot;font-medium mb-2&quot;>Admin Notes</h3>
                      <div className=&quot;space-y-4 max-h-[300px] overflow-y-auto p-2&quot;>
                        {messages
                          .filter(msg => msg.is_admin_note)
                          .map((msg) => (
                          <div key={msg.id} className=&quot;bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900&quot;>
                            <div className=&quot;flex items-center justify-between mb-2&quot;>
                              <div className=&quot;flex items-center gap-2&quot;>
                                <Avatar className=&quot;h-6 w-6&quot;>
                                  <AvatarImage src={msg.user_profile?.avatar_url} alt={msg.user_profile?.display_name || &quot;Admin avatar&quot;} />
=======
                      <h3 className="font-medium mb-2">Admin Notes</h3>
                      <div className="space-y-4 max-h-[300px] overflow-y-auto p-2">
                        {_messages
                          .filter(msg => msg.is_admin_note)
                          .map(_(msg) => (
                          <div key={msg.id} className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage src={_msg.user_profile?.avatar_url} alt={_msg.user_profile?.display_name || "Admin avatar"} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                                  <AvatarFallback>
                                    {_msg.user_profile?.display_name?.[0] || 'A'}
                                  </AvatarFallback>
                                </Avatar>
<<<<<<< HEAD
                                <span className=&quot;text-sm font-medium&quot;>
                                  {msg.user_profile?.display_name || 'Admin'}
                                </span>
                              </div>
                              <span className=&quot;text-xs opacity-70&quot;>
                                {format(new Date(msg.created_at), 'MMM d, h:mm a')}
                              </span>
                            </div>
                            <p className=&quot;whitespace-pre-wrap text-sm&quot;>{msg.message}</p>
                          </div>
                        ))}
                        
                        {!messages.some(msg => msg.is_admin_note) && (
                          <p className=&quot;text-sm text-muted-foreground italic&quot;>No admin notes yet</p>
=======
                                <span className="text-sm font-medium">
                                  {_msg.user_profile?.display_name || 'Admin'}
                                </span>
                              </div>
                              <span className="text-xs opacity-70">
                                {_format(new Date(msg.created_at), _'MMM d, _h:mm a')}
                              </span>
                            </div>
                            <p className="whitespace-pre-wrap text-sm">{_msg.message}</p>
                          </div>
                        ))}
                        
                        {_!messages.some(msg => msg.is_admin_note) && (
                          <p className="text-sm text-muted-foreground italic">No admin notes yet</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        )}
                      </div>
                      
                      <Separator className=&quot;my-4&quot; />
                      
                      <div className=&quot;space-y-4&quot;>
                        <Textarea
<<<<<<< HEAD
                          placeholder=&quot;Add an admin note (only visible to administrators)...&quot;
                          value={adminNote}
                          onChange={(e) => setAdminNote(e.target.value)}
                        />
                        <Button
                          variant=&quot;outline&quot;
                          onClick={() => {
                            if (adminNote.trim()) {
                              addDisputeMessage(disputeId!, adminNote, true).then(() => {
                                getDisputeMessages(disputeId!).then(setMessages),
                                setAdminNote("")
                              })
=======
                          placeholder="Add an admin note (only visible to administrators)..."
                          value={_adminNote}
                          onChange={_(_e) => setAdminNote(e.target.value)}
                        />
                        <Button
                          variant="outline"
                          onClick={_() => {
                            if (adminNote.trim()) {
                              addDisputeMessage(disputeId!, _adminNote, _true).then__(() => {
                                getDisputeMessages(disputeId!).then(setMessages);
                                setAdminNote("");});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            }
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
                  <AvatarImage src={_dispute.client_profile?.avatar_url} alt={_dispute.client_profile?.display_name || "Client avatar"} />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Client</p>
<<<<<<< HEAD
                  <p className="text-sm text-muted-foreground&quot;>
                    {dispute.client_profile?.display_name || &quot;Unknown Client"}
=======
                  <p className="text-sm text-muted-foreground">
                    {_dispute.client_profile?.display_name || "Unknown Client"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
              </div>
              
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={_dispute.talent_profile?.avatar_url} alt={_dispute.talent_profile?.display_name || "Talent avatar"} />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Talent</p>
<<<<<<< HEAD
                  <p className="text-sm text-muted-foreground&quot;>
                    {dispute.talent_profile?.display_name || &quot;Unknown Talent"}
=======
                  <p className="text-sm text-muted-foreground">
                    {_dispute.talent_profile?.display_name || "Unknown Talent"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </p>
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
                <span className="font-mono">{_dispute.id}</span>
              </div>
              <div className="flex justify-between">
<<<<<<< HEAD
                <span className="font-medium&quot;>Created:</span>
                <span>{format(new Date(dispute.created_at), &quot;MMM d, yyyy")}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status:</span>
                <Badge variant={getStatusBadgeVariant(dispute.status)}>
                  {dispute.status.replace('_ ')}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="font-medium&quot;>Raised by:</span>
                <span>{dispute.client_profile && dispute.talent_profile && dispute.raised_by === (dispute.client_profile as any).id ? &quot;Client&quot; : dispute.talent_profile && dispute.raised_by === (dispute.talent_profile as any).id ? &quot;Talent&quot; : &quot;Unknown"}</span>
=======
                <span className="font-medium">Created:</span>
                <span>{_format(new Date(dispute.created_at), _"MMM d, _yyyy")}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status:</span>
                <Badge variant={_getStatusBadgeVariant(dispute.status)}>
                  {_dispute.status.replace('_', _' ')}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Raised by:</span>
                <span>{_dispute.client_profile && dispute.talent_profile && dispute.raised_by === (dispute.client_profile as any).id ? "Client" : dispute.talent_profile && dispute.raised_by === (dispute.talent_profile as any).id ? "Talent" : "Unknown"}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
