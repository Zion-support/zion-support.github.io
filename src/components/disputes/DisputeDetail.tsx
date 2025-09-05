
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
  const [resolution, setResolution] = useState<{ summary: string; resolution_type: ResolutionType }>({
  summary: "&quot;,
  resolution_type: &quot;compromise&quot;});
   
  const [activeTab, setActiveTab] = useState(&quot;overview&quot;);

  // Check if user is admin (placeholder - implement proper admin check)
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
    
    loadDisputeData()
  }, [disputeId, getDisputeById, getDisputeMessages, router]),

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
    
    setIsSending(true),
    try {
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
=======
import React, { useState, useEffect } from "react",;
import { useRouter } from 'next/router',;
import { useDisputes } from "@/hooks/useDisputes",;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
 Dispute, disputeReasonLabels, DisputeMessage, DisputeStatus, ResolutionType;
} from "@/types/disputes",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Separator } from "@/components/ui/separator",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { format, formatDistanceToNow } from "date-fns",;
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",;
import { ArrowDown, Check, MessageSquare, Download } from 'lucide-react';
import { useAuth } from "@/hooks/useAuth",;
import { toast } from "sonner",;
export function DisputeDetail() {;
  const router = useRouter(),;
  const { disputeId } = router.query as { disputeId?: string },;
  const { user } = useAuth(),;
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes(),;
  const [dispute, setDispute] = useState<Dispute | null>(null),;
  const [messages, setMessages] = useState<DisputeMessage[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [message, setMessage] = useState(""),;
  const [adminNote, setAdminNote] = useState(""),;
  const [isSending, setIsSending] = useState(false),;
  const [resolution, setResolution] = useState<{ summary: string, resolution_type: ResolutionType }>({;
  summary: "",;
  resolution_type: "compromise"}),;
  const [activeTab, setActiveTab] = useState("overview"),;
  // Check if user is admin (placeholder - implement proper admin check);
  const isAdmin = user?.userType === "admin",;
  useEffect(() => {;
    if (!disputeId) return,;
    const loadDisputeData = async () => {;
      setIsLoading(true),;
      try {;
        const disputeData = await getDisputeById(disputeId),;
        if (!disputeData) {;
          toast.error("Dispute not found"),;
          router.push("/dashboard/disputes"),;
          return;
        }
        setDispute(disputeData),;
        const messagesData = await getDisputeMessages(disputeId),;
        setMessages(messagesData);
      } catch (error) {;
        logErrorToProduction('Error loading dispute data:', { data: error }),;
        toast.error("Failed to load dispute");
      } finally {;
        setIsLoading(false);
      }
    },;
    loadDisputeData();
  }, [disputeId, getDisputeById, getDisputeMessages, router]),;
  const handleStatusChange = async (status: DisputeStatus) => {;
    if (!disputeId) return,;
    const success = await updateDisputeStatus(disputeId, status),;
    if (success) {;
      // Update the dispute object with the new status;
      setDispute({ ...dispute!, status: status });
    } else {;
      toast.error("Failed to update dispute status");
    }
  },;
  const handleResolveDispute = async () => {;
    if (!disputeId) return,;
    if (!resolution.summary) {;
      toast.error("Please provide a resolution summary"),;
      return;
    }
;
    const success = await resolveDispute(disputeId, {;
      summary: resolution.summary,;
      resolution_type: (resolution.resolution_type as ResolutionType) || "compromise"}),;
    if (success && dispute) {;
      setDispute({;
        ...dispute,;
        resolution_summary: resolution.summary,;
        resolution_type: resolution.resolution_type,;
        resolved_at: new Date().toISOString()});
    } else {;
      toast.error("Failed to resolve dispute");
    }
  },;
  const handleSendMessage = async () => {;
    if (!disputeId || !message.trim()) return,;
    setIsSending(true),;
    try {;
      const success = await addDisputeMessage(disputeId, message, isAdmin),;
      if (success) {;
        // Refresh messages;
        const updatedMessages = await getDisputeMessages(disputeId),;
        setMessages(updatedMessages),;
        setMessage("");
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
    } catch (error) {;
      logErrorToProduction('Error sending message:', { data: error });
    } finally {;
      setIsSending(false);
    }
<<<<<<< HEAD
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
        <p>Dispute not found</p>
        <Button onClick={() => router.push(&quot;/dashboard/disputes&quot;)} className=&quot;mt-4&quot;>
          Back to Disputes
        </Button>
      </div>
    )
  }

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
            Reported {formatDistanceToNow(new Date(dispute?.created_at || ""), { addSuffix: true })}
          </p>
        </div>
        
        <div className="flex gap-2&quot;>
          <Button variant=&quot;outline&quot; onClick={() => router.push(&quot;/dashboard/disputes&quot;)}>
            Back to List
          </Button>
          {isAdmin && dispute?.status === &quot;open&quot; && (
            <Button onClick={() => handleStatusChange(&quot;under_review&quot;)}>
              Start Review
            </Button>
          )}
        </div>
      </div>

      {dispute.status === &quot;resolved" && dispute.resolution_summary && (
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <Check className="h-4 w-4" />
          <AlertTitle>This dispute has been resolved</AlertTitle>
          <AlertDescription>
=======
  },;
  if (isLoading) {;
    return (;
      <div className="p-8 text-center">;
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>;
        <p>Loading dispute details...</p>;
      </div>;
    );
  }
;
  if (!dispute) {;
    return (;
      <div className="p-8 text-center">;
        <p>Dispute not found</p>;
        <Button onClick={() => router.push("/dashboard/disputes")} className="mt-4">;
          Back to Disputes;
        </Button>;
      </div>;
    );
  }
;
  const getStatusBadgeVariant = (status: DisputeStatus) => {;
    switch (status) {;
      case "open": return "default",;
      case "under_review": return "secondary",;
      case "resolved": return "outline", // Changed from "success" to "outline";
      case "closed": return "outline",;
      default: return "default";
    }
  },;
  return (;
    <div className="container mx-auto p-4 space-y-6">;
      <div className="flex flex-wrap items-center justify-between gap-4">;
        <div>;
          <div className="flex items-center gap-2">;
            <h1 className="text-2xl font-bold">Dispute Case</h1>;
            <Badge variant={getStatusBadgeVariant(dispute.status)}>;
              {dispute.status.replace('_ ')}
            </Badge>;
          </div>;
          <p className="text-muted-foreground">;
            Reported {formatDistanceToNow(new Date(dispute?.created_at || ""), { addSuffix: true })}
          </p>;
        </div>;
        <div className="flex gap-2">;
          <Button variant="outline" onClick={() => router.push("/dashboard/disputes")}>;
            Back to List;
          </Button>;
          {isAdmin && dispute?.status === "open" && (;
            <Button onClick={() => handleStatusChange("under_review")}>;
              Start Review;
            </Button>;
          )}
        </div>;
      </div>;
      {dispute.status === "resolved" && dispute.resolution_summary && (;
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">;
          <Check className="h-4 w-4" />;
          <AlertTitle>This dispute has been resolved</AlertTitle>;
          <AlertDescription>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            {dispute.resolution_summary}
          </AlertDescription>;
        </Alert>;
      )}
<<<<<<< HEAD
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6&quot;>
              <TabsTrigger value=&quot;overview&quot;>Overview</TabsTrigger>
              <TabsTrigger value=&quot;messages&quot;>Messages</TabsTrigger>
              <TabsTrigger value=&quot;attachments&quot;>Attachments</TabsTrigger>
              {isAdmin && <TabsTrigger value=&quot;admin&quot;>Admin Notes</TabsTrigger>}
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
                    <p>{
                      disputeReasonLabels[
                        dispute.reason_code
                      ] ?? dispute.reason_code
                    }</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="whitespace-pre-wrap">{dispute.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium&quot;>Project</h3>
                    <p>{dispute.project?.title || &quot;Unknown Project"}</p>
                    <p className="text-sm text-muted-foreground">{dispute.project?.scope_summary}</p>
                  </div>
                  
                  {dispute.milestone_id && (
                    <div>
                      <h3 className="font-medium">Related Milestone</h3>
                      <p className="text-sm">Milestone ID: {dispute.milestone_id}</p>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="font-medium">Timeline</h3>
                    <ul className="space-y-2 mt-2">
                      <li className="flex gap-2 items-center&quot;>
                        <Badge variant=&quot;outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center&quot;>1</Badge>
                        <span>Created on {format(new Date(dispute.created_at), &quot;MMM d, yyyy 'at' h:mm a&quot;)}</span>
                      </li>
                      
                      {dispute.status !== &quot;open" && (
                        <li className="flex gap-2 items-center&quot;>
                          <Badge variant=&quot;outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>
                          <span>Under review</span>
                        </li>
                      )}
                      
                      {dispute.resolved_at && (
                        <li className="flex gap-2 items-center&quot;>
                          <Badge variant=&quot;outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center&quot;>
                            {dispute.status !== &quot;open&quot; ? &quot;3&quot; : &quot;2&quot;}
                          </Badge>
                          <span>Resolved on {format(new Date(dispute.resolved_at), &quot;MMM d, yyyy 'at' h:mm a&quot;)}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              {dispute.status === &quot;resolved" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Resolution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{dispute.resolution_summary}</p>
                    
                    {dispute.resolution_type && (
                      <div className="mt-4&quot;>
                        <Badge>
=======
;
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
        <div className="lg:col-span-2">;
          <Tabs value={activeTab} onValueChange={setActiveTab}>;
            <TabsList className="mb-6">;
              <TabsTrigger value="overview">Overview</TabsTrigger>;
              <TabsTrigger value="messages">Messages</TabsTrigger>;
              <TabsTrigger value="attachments">Attachments</TabsTrigger>;
              {isAdmin && <TabsTrigger value="admin">Admin Notes</TabsTrigger>}
            </TabsList>;
            <TabsContent value="overview" className="space-y-6">;
              <Card>;
                <CardHeader>;
                  <CardTitle>Dispute Details</CardTitle>;
                  <CardDescription>Information about this dispute case</CardDescription>;
                </CardHeader>;
                <CardContent className="space-y-4">;
                  <div>;
                    <h3 className="font-medium">Reason</h3>;
                    <p>{;
                      disputeReasonLabels[;
                        dispute.reason_code;
                      ] ?? dispute.reason_code;
                    }</p>;
                  </div>;
                  <div>;
                    <h3 className="font-medium">Description</h3>;
                    <p className="whitespace-pre-wrap">{dispute.description}</p>;
                  </div>;
                  <div>;
                    <h3 className="font-medium">Project</h3>;
                    <p>{dispute.project?.title || "Unknown Project"}</p>;
                    <p className="text-sm text-muted-foreground">{dispute.project?.scope_summary}</p>;
                  </div>;
                  {dispute.milestone_id && (;
                    <div>;
                      <h3 className="font-medium">Related Milestone</h3>;
                      <p className="text-sm">Milestone ID: {dispute.milestone_id}</p>;
                    </div>;
                  )}
;
                  <div>;
                    <h3 className="font-medium">Timeline</h3>;
                    <ul className="space-y-2 mt-2">;
                      <li className="flex gap-2 items-center">;
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1</Badge>;
                        <span>Created on {format(new Date(dispute.created_at), "MMM d, yyyy 'at' h:mm a")}</span>;
                      </li>;
                      {dispute.status !== "open" && (;
                        <li className="flex gap-2 items-center">;
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>;
                          <span>Under review</span>;
                        </li>;
                      )}
;
                      {dispute.resolved_at && (;
                        <li className="flex gap-2 items-center">;
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">;
                            {dispute.status !== "open" ? "3" : "2"}
                          </Badge>;
                          <span>Resolved on {format(new Date(dispute.resolved_at), "MMM d, yyyy 'at' h:mm a")}</span>;
                        </li>;
                      )}
                    </ul>;
                  </div>;
                </CardContent>;
              </Card>;
              {dispute.status === "resolved" && (;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Resolution</CardTitle>;
                  </CardHeader>;
                  <CardContent>;
                    <p className="whitespace-pre-wrap">{dispute.resolution_summary}</p>;
                    {dispute.resolution_type && (;
                      <div className="mt-4">;
                        <Badge>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                          Resolution: {dispute.resolution_type.replace('_ ')}
                        </Badge>;
                      </div>;
                    )}
                  </CardContent>;
                </Card>;
              )}
<<<<<<< HEAD
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
                        .filter(msg => !msg.is_admin_note)
                        .map((msg) => {
                          const isCurrentUser = user?.id === msg.user_id,
                          return (
                            <div
=======
            </TabsContent>;
            <TabsContent value="messages" className="space-y-6">;
              <Card>;
                <CardHeader>;
                  <CardTitle>Messages</CardTitle>;
                  <CardDescription>Communication regarding this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <div className="space-y-6 max-h-[600px] overflow-y-auto p-2">;
                    {messages.length === 0 ? (;
                      <div className="text-center py-12">;
                        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" />;
                        <p className="text-muted-foreground">No messages yet</p>;
                      </div>;
                    ) : (;
                      messages;
                        .filter(msg => !msg.is_admin_note);
                        .map((msg) => {;
                          const isCurrentUser = user?.id === msg.user_id;
                          return (;
                            <div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                              key={msg.id}
                              className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                            >;
                              <div;
                                className={`max-w-[80%] ${;
                                  isCurrentUser;
                                    ? 'bg-primary text-primary-foreground';
                                    : 'bg-muted';
                                } p-4 rounded-lg`}
                              >;
                                <div className="flex items-center gap-2 mb-2">;
                                  <Avatar className="h-6 w-6">;
                                    <AvatarImage src={msg.user_profile?.avatar_url} alt={msg.user_profile?.display_name || "User avatar"} />;
                                    <AvatarFallback>;
                                      {msg.user_profile?.display_name?.[0] || '?'}
                                    </AvatarFallback>;
                                  </Avatar>;
                                  <span className="text-sm font-medium">;
                                    {msg.user_profile?.display_name || 'Unknown User'}
                                  </span>;
                                  <span className="text-xs opacity-70">;
                                    {format(new Date(msg.created_at), 'MMM d, h:mm a')}
                                  </span>;
                                </div>;
                                <p className="whitespace-pre-wrap">{msg.message}</p>;
                              </div>;
                            </div>;
                          );
                        });
                    )}
<<<<<<< HEAD
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full space-y-4&quot;>
                    <Textarea
                      placeholder=&quot;Type your message here..."
=======
                  </div>;
                </CardContent>;
                <CardFooter>;
                  <div className="w-full space-y-4">;
                    <Textarea;
                      placeholder="Type your message here...";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[100px]";
                      disabled={isSending}
<<<<<<< HEAD
                    />
                    <div className="flex justify-end&quot;>
                      <Button onClick={handleSendMessage} disabled={isSending || !message.trim()}>
                        {isSending ? &quot;Sending...&quot; : &quot;Send Message&quot;}
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
            
            {isAdmin && (
              <TabsContent value=&quot;admin" className="space-y-6">
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
                          variant=&quot;outline&quot; 
                          onClick={() => handleStatusChange(&quot;open&quot;)}
                          disabled={dispute.status === &quot;open&quot;}
                        >
                          Mark as Open
                        </Button>
                        <Button 
                          variant=&quot;outline&quot; 
                          onClick={() => handleStatusChange(&quot;under_review&quot;)}
                          disabled={dispute.status === &quot;under_review&quot;}
                        >
                          Mark as Under Review
                        </Button>
                        <Button 
                          variant=&quot;outline&quot; 
                          onClick={() => handleStatusChange(&quot;closed&quot;)}
                          disabled={dispute.status === &quot;closed&quot;}
                        >
                          Close Dispute
                        </Button>
                      </div>
                    </div>
                    
                    {dispute.status !== &quot;resolved" && (
                      <div>
                        <h3 className="font-medium mb-2">Resolve Dispute</h3>
                        <div className="space-y-4&quot;>
                          <Textarea
                            placeholder=&quot;Enter resolution summary..."
                            value={resolution.summary}
                            onChange={(e) => setResolution({ ...resolution, summary: e.target.value })}
                            className="min-h-[100px]"
                          />
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>
                              <select
                                className="w-full p-2 border rounded&quot;
                                value={resolution.resolution_type || "&quot;}
                                onChange={(e) => setResolution({ ...resolution, resolution_type: e.target.value as ResolutionType })}
                              >
                                <option value=&quot;client_favor&quot;>In Client's Favor</option>
                                <option value=&quot;talent_favor&quot;>In Talent's Favor</option>
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
                          .filter(msg => msg.is_admin_note)
                          .map((msg) => (
                          <div key={msg.id} className=&quot;bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900&quot;>
                            <div className=&quot;flex items-center justify-between mb-2&quot;>
                              <div className=&quot;flex items-center gap-2&quot;>
                                <Avatar className=&quot;h-6 w-6&quot;>
                                  <AvatarImage src={msg.user_profile?.avatar_url} alt={msg.user_profile?.display_name || &quot;Admin avatar&quot;} />
                                  <AvatarFallback>
                                    {msg.user_profile?.display_name?.[0] || 'A'}
                                  </AvatarFallback>
                                </Avatar>
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
                        )}
                      </div>
                      
                      <Separator className=&quot;my-4&quot; />
                      
                      <div className=&quot;space-y-4&quot;>
                        <Textarea
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
                    />;
                    <div className="flex justify-end">;
                      <Button onClick={handleSendMessage} disabled={isSending || !message.trim()}>;
                        {isSending ? "Sending..." : "Send Message"}
                      </Button>;
                    </div>;
                  </div>;
                </CardFooter>;
              </Card>;
            </TabsContent>;
            <TabsContent value="attachments">;
              <Card>;
                <CardHeader>;
                  <CardTitle>Attachments</CardTitle>;
                  <CardDescription>Files related to this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <div className="text-center py-12">;
                    <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" />;
                    <p className="text-muted-foreground">No attachments available</p>;
                  </div>;
                </CardContent>;
              </Card>;
            </TabsContent>;
            {isAdmin && (;
              <TabsContent value="admin" className="space-y-6">;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Admin Actions</CardTitle>;
                    <CardDescription>Handle this dispute as an administrator</CardDescription>;
                  </CardHeader>;
                  <CardContent className="space-y-6">;
                    <div>;
                      <h3 className="font-medium mb-2">Change Status</h3>;
                      <div className="flex gap-2">;
                        <Button;
                          variant="outline";
                          onClick={() => handleStatusChange("open")}
                          disabled={dispute.status === "open"}
                        >;
                          Mark as Open;
                        </Button>;
                        <Button;
                          variant="outline";
                          onClick={() => handleStatusChange("under_review")}
                          disabled={dispute.status === "under_review"}
                        >;
                          Mark as Under Review;
                        </Button>;
                        <Button;
                          variant="outline";
                          onClick={() => handleStatusChange("closed")}
                          disabled={dispute.status === "closed"}
                        >;
                          Close Dispute;
                        </Button>;
                      </div>;
                    </div>;
                    {dispute.status !== "resolved" && (;
                      <div>;
                        <h3 className="font-medium mb-2">Resolve Dispute</h3>;
                        <div className="space-y-4">;
                          <Textarea;
                            placeholder="Enter resolution summary...";
                            value={resolution.summary}
                            onChange={(e) => setResolution({ ...resolution, summary: e.target.value })}
                            className="min-h-[100px]";
                          />;
                          <div className="grid grid-cols-2 gap-4">;
                            <div>;
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>;
                              <select;
                                className="w-full p-2 border rounded";
                                value={resolution.resolution_type || ""}
                                onChange={(e) => setResolution({ ...resolution, resolution_type: e.target.value as ResolutionType })}
                              >;
                                <option value="client_favor">In Client's Favor</option>;
                                <option value="talent_favor">In Talent's Favor</option>;
                                <option value="compromise">Compromise</option>;
                                <option value="dismissed">Dismissed</option>;
                              </select>;
                            </div>;
                          </div>;
                          <Button onClick={handleResolveDispute}>Resolve Dispute</Button>;
                        </div>;
                      </div>;
                    )}
;
                    <div>;
                      <h3 className="font-medium mb-2">Admin Notes</h3>;
                      <div className="space-y-4 max-h-[300px] overflow-y-auto p-2">;
                        {messages;
                          .filter(msg => msg.is_admin_note);
                          .map((msg) => (;
                          <div key={msg.id} className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900">;
                            <div className="flex items-center justify-between mb-2">;
                              <div className="flex items-center gap-2">;
                                <Avatar className="h-6 w-6">;
                                  <AvatarImage src={msg.user_profile?.avatar_url} alt={msg.user_profile?.display_name || "Admin avatar"} />;
                                  <AvatarFallback>;
                                    {msg.user_profile?.display_name?.[0] || 'A'}
                                  </AvatarFallback>;
                                </Avatar>;
                                <span className="text-sm font-medium">;
                                  {msg.user_profile?.display_name || 'Admin'}
                                </span>;
                              </div>;
                              <span className="text-xs opacity-70">;
                                {format(new Date(msg.created_at), 'MMM d, h:mm a')}
                              </span>;
                            </div>;
                            <p className="whitespace-pre-wrap text-sm">{msg.message}</p>;
                          </div>;
                        ))}
;
                        {!messages.some(msg => msg.is_admin_note) && (;
                          <p className="text-sm text-muted-foreground italic">No admin notes yet</p>;
                        )}
                      </div>;
                      <Separator className="my-4" />;
                      <div className="space-y-4">;
                        <Textarea;
                          placeholder="Add an admin note (only visible to administrators)...";
                          value={adminNote}
                          onChange={(e) => setAdminNote(e.target.value)}
                        />;
                        <Button;
                          variant="outline";
                          onClick={() => {;
                            if (adminNote.trim()) {;
                              addDisputeMessage(disputeId!, adminNote, true).then(() => {;
                                getDisputeMessages(disputeId!).then(setMessages);
                                setAdminNote("");
                              });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                            }
                          }}
                        >;
                          Add Admin Note;
                        </Button>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
              </TabsContent>;
            )}
<<<<<<< HEAD
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
                  <AvatarImage src={dispute.client_profile?.avatar_url} alt={dispute.client_profile?.display_name || "Client avatar"} />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Client</p>
                  <p className="text-sm text-muted-foreground&quot;>
                    {dispute.client_profile?.display_name || &quot;Unknown Client"}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
              </div>
              
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={dispute.talent_profile?.avatar_url} alt={dispute.talent_profile?.display_name || "Talent avatar"} />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Talent</p>
                  <p className="text-sm text-muted-foreground&quot;>
                    {dispute.talent_profile?.display_name || &quot;Unknown Talent"}
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
                <span className="font-mono">{dispute.id}</span>
              </div>
              <div className="flex justify-between">
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
=======
          </Tabs>;
        </div>;
        <div className="space-y-6">;
          <Card>;
            <CardHeader>;
              <CardTitle>Parties Involved</CardTitle>;
            </CardHeader>;
            <CardContent className="space-y-6">;
              <div className="flex items-start gap-4">;
                <Avatar className="h-10 w-10">;
                  <AvatarImage src={dispute.client_profile?.avatar_url} alt={dispute.client_profile?.display_name || "Client avatar"} />;
                  <AvatarFallback>C</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className="font-medium">Client</p>;
                  <p className="text-sm text-muted-foreground">;
                    {dispute.client_profile?.display_name || "Unknown Client"}
                  </p>;
                </div>;
              </div>;
              <div className="flex justify-center">;
                <ArrowDown className="h-6 w-6 text-muted-foreground" />;
              </div>;
              <div className="flex items-start gap-4">;
                <Avatar className="h-10 w-10">;
                  <AvatarImage src={dispute.talent_profile?.avatar_url} alt={dispute.talent_profile?.display_name || "Talent avatar"} />;
                  <AvatarFallback>T</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className="font-medium">Talent</p>;
                  <p className="text-sm text-muted-foreground">;
                    {dispute.talent_profile?.display_name || "Unknown Talent"}
                  </p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
          <Card>;
            <CardHeader>;
              <CardTitle>Case Information</CardTitle>;
            </CardHeader>;
            <CardContent className="space-y-4 text-sm">;
              <div className="flex justify-between">;
                <span className="font-medium">Case ID:</span>;
                <span className="font-mono">{dispute.id}</span>;
              </div>;
              <div className="flex justify-between">;
                <span className="font-medium">Created:</span>;
                <span>{format(new Date(dispute.created_at), "MMM d, yyyy")}</span>;
              </div>;
              <div className="flex justify-between">;
                <span className="font-medium">Status:</span>;
                <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                  {dispute.status.replace('_ ')}
                </Badge>;
              </div>;
              <div className="flex justify-between">;
                <span className="font-medium">Raised by:</span>;
                <span>{dispute.client_profile && dispute.talent_profile && dispute.raised_by === (dispute.client_profile as any).id ? "Client" : dispute.talent_profile && dispute.raised_by === (dispute.talent_profile as any).id ? "Talent" : "Unknown"}</span>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </div>;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;