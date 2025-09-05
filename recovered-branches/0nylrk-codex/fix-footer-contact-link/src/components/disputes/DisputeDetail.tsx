
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from "react",
import { useParams, useNavigate } from "react-router-dom",
import { useDisputes } from "@/hooks/useDisputes",
import { disputeReasonLabels, DisputeMessage, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Textarea } from "@/components/ui/textarea",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Separator } from "@/components/ui/separator",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { format, formatDistanceToNow } from "date-fns",
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",
import { ShieldAlert, ArrowDown, Check, X, MessageSquare, Download } from "lucide-react",
import { useAuth } from "@/hooks/useAuth",
import { toast } from "sonner",
=======
import React, { useState, useEffect } from &quot;react&quot;;
import { useParams, useNavigate } from &quot;react-router-dom&quot;;
import { useDisputes } from &quot;@/hooks/useDisputes&quot;;
import { disputeReasonLabels, DisputeMessage, DisputeStatus } from &quot;@/types/disputes&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Textarea } from &quot;@/components/ui/textarea&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Separator } from &quot;@/components/ui/separator&quot;;
import { Avatar, AvatarFallback, AvatarImage } from &quot;@/components/ui/avatar&quot;;
import { format, formatDistanceToNow } from &quot;date-fns&quot;;
import { Alert, AlertDescription, AlertTitle } from &quot;@/components/ui/alert&quot;;
import { ShieldAlert, ArrowDown, Check, X, MessageSquare, Download } from &quot;lucide-react&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { toast } from &quot;sonner&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function DisputeDetail() {
  // useParams may be untyped in this environment, so avoid passing a
  // type argument and cast the result instead to prevent TS2347 errors.
  const { disputeId } = useParams() as { disputeId?: string },
  const navigate = useNavigate(),
  const { user } = useAuth(),
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes(),
  
<<<<<<< HEAD
  const [dispute, setDispute] = useState<any>(null),
  const [messages, setMessages] = useState<DisputeMessage[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const [message, setMessage] = useState(""),
  const [isSending, setIsSending] = useState(false),
  const [resolution, setResolution] = useState({
    summary: "",
    resolution_type: "compromise"}),
  const [activeTab, setActiveTab] = useState("overview"),

  // Check if user is admin (placeholder - implement proper admin check)
  const isAdmin = user?.userType === "admin",
=======
  const [dispute, setDispute] = useState<any>(null);
  const [messages, setMessages] = useState<DisputeMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("&quot;);
  const [isSending, setIsSending] = useState(false);
  const [resolution, setResolution] = useState({
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
          navigate("/dashboard/disputes"),
          return
=======
          toast.error(&quot;Dispute not found&quot;);
          navigate(&quot;/dashboard/disputes&quot;);
          return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
        setDispute(disputeData),
        
        const messagesData = await getDisputeMessages(disputeId),
        setMessages(messagesData)
      } catch (error) {
<<<<<<< HEAD
        console.error("Error loading dispute data:", error),
        toast.error("Failed to load dispute")
=======
        console.error(&quot;Error loading dispute data:&quot;, error);
        toast.error(&quot;Failed to load dispute&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } finally {
        setIsLoading(false)
=======
import React, { useState, useEffect } from "react",;
import { useParams, useNavigate } from "react-router-dom",;
import { useDisputes } from "@/hooks/useDisputes",;
import { disputeReasonLabels, DisputeMessage, DisputeStatus } from "@/types/disputes",;
import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Separator } from "@/components/ui/separator",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { format, formatDistanceToNow } from "date-fns",;
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",;
import { ShieldAlert, ArrowDown, Check, X, MessageSquare, Download } from "lucide-react",;
import { useAuth } from "@/hooks/useAuth",;
import { toast } from "sonner",;
export function DisputeDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { disputeId } = useParams() as { disputeId?: string },;
  const navigate = useNavigate(),;
  const { user } = useAuth(),;
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes(),;
  const [dispute, setDispute] = useState<any>(null),;
  const [messages, setMessages] = useState<DisputeMessage[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const [message, setMessage] = useState(""),;
  const [isSending, setIsSending] = useState(false),;
  const [resolution, setResolution] = useState({;
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
          navigate("/dashboard/disputes"),;
          return;
        }
        setDispute(disputeData),;
        const messagesData = await getDisputeMessages(disputeId),;
        setMessages(messagesData);
      } catch (error) {;
        console.error("Error loading dispute data:", error),;
        toast.error("Failed to load dispute");
      } finally {;
        setIsLoading(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
    },;
    loadDisputeData();
  }, [disputeId, navigate, getDisputeById, getDisputeMessages]),;
  const handleStatusChange = async (status: DisputeStatus) => {;
    if (!disputeId) return,;
    const success = await updateDisputeStatus(disputeId, status),;
    if (success && dispute) {;
      setDispute({ ...dispute, status });
    }
<<<<<<< HEAD
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
    
    const success = await resolveDispute(disputeId, resolution),
    if (success && dispute) {
      setDispute({ 
        ...dispute, 
        status: &quot;resolved&quot;, 
        resolution_summary: resolution.summary,
        resolution_type: resolution.resolution_type,
        resolved_at: new Date().toISOString()
      })
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
      }
    } catch (error) {
      console.error("Error sending message:", error)
=======
        const updatedMessages = await getDisputeMessages(disputeId);
        setMessages(updatedMessages);
        setMessage("&quot;);
      }
    } catch (error) {
      console.error(&quot;Error sending message:", error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsSending(false)
=======
  },;
  const handleResolveDispute = async () => {;
    if (!disputeId) return,;
    if (!resolution.summary) {;
      toast.error("Please provide a resolution summary"),;
      return;
    }
;
    const success = await resolveDispute(disputeId, resolution),;
    if (success && dispute) {;
      setDispute({;
        ...dispute,;
        status: "resolved",;
        resolution_summary: resolution.summary,;
        resolution_type: resolution.resolution_type,;
        resolved_at: new Date().toISOString();
      });
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
      }
    } catch (error) {;
      console.error("Error sending message:", error);
    } finally {;
      setIsSending(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  },;
  if (isLoading) {;
    return (;
      <div className="p-8 text-center">;
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>;
        <p>Loading dispute details...</p>;
      </div>;
    );
  }
<<<<<<< HEAD

  if (!dispute) {
    return (
      <div className="p-8 text-center&quot;>
        <p>Dispute not found</p>
        <Button onClick={() => navigate(&quot;/dashboard/disputes")} className="mt-4&quot;>
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
      default: return &quot;default";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
  if (!dispute) {;
    return (;
      <div className="p-8 text-center">;
        <p>Dispute not found</p>;
        <Button onClick={() => navigate("/dashboard/disputes")} className="mt-4">;
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
            Reported {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
<<<<<<< HEAD
          </p>
        </div>
        
        <div className="flex gap-2&quot;>
          <Button variant=&quot;outline&quot; onClick={() => navigate(&quot;/dashboard/disputes&quot;)}>
            Back to List
          </Button>
          {isAdmin && dispute.status === &quot;open&quot; && (
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
          </p>;
        </div>;
        <div className="flex gap-2">;
          <Button variant="outline" onClick={() => navigate("/dashboard/disputes")}>;
            Back to List;
          </Button>;
          {isAdmin && dispute.status === "open" && (;
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
                    <p>{disputeReasonLabels[dispute.reason_code as any] || dispute.reason_code}</p>
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
                    <p>{disputeReasonLabels[dispute.reason_code as any] || dispute.reason_code}</p>;
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
                                    <AvatarImage src={msg.user_profile?.avatar_url} />;
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
                                value={resolution.resolution_type}
                                onChange={(e) => setResolution({ ...resolution, resolution_type: e.target.value })}
                              >
                                <option value=&quot;client_favor&quot;>In Client's Favor</option>
                                <option value=&quot;talent_favor&quot;>In Talent's Favor</option>
                                <option value=&quot;compromise&quot;>Compromise</option>
                                <option value=&quot;dismissed">Dismissed</option>
                              </select>
                            </div>
                          </div>
                          
                          <Button onClick={handleResolveDispute}>Resolve Dispute</Button>
                        </div>
                      </div>
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
                                value={resolution.resolution_type}
                                onChange={(e) => setResolution({ ...resolution, resolution_type: e.target.value })}
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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
                                  <AvatarImage src={msg.user_profile?.avatar_url} />;
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
<<<<<<< HEAD
                      </div>
                      
                      <div className="mt-4 space-y-4&quot;>
                        <Textarea
                          placeholder=&quot;Add an admin note (only visible to administrators)...&quot;
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button 
                          variant=&quot;outline&quot; 
                          onClick={() => {
                            if (message.trim()) {
                              addDisputeMessage(disputeId!, message, true).then(() => {
<<<<<<< HEAD
                                getDisputeMessages(disputeId!).then(setMessages),
                                setMessage("")
                              })
=======
                                getDisputeMessages(disputeId!).then(setMessages);
                                setMessage("&quot;);
                              });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                      </div>;
                      <div className="mt-4 space-y-4">;
                        <Textarea;
                          placeholder="Add an admin note (only visible to administrators)...";
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />;
                        <Button;
                          variant="outline";
                          onClick={() => {;
                            if (message.trim()) {;
                              addDisputeMessage(disputeId!, message, true).then(() => {;
                                getDisputeMessages(disputeId!).then(setMessages);
                                setMessage("");
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
        
        <div className=&quot;space-y-6&quot;>
          <Card>
            <CardHeader>
              <CardTitle>Parties Involved</CardTitle>
            </CardHeader>
            <CardContent className=&quot;space-y-6&quot;>
              <div className=&quot;flex items-start gap-4&quot;>
                <Avatar className=&quot;h-10 w-10&quot;>
                  <AvatarImage src={dispute.client_profile?.avatar_url} />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <div>
                  <p className=&quot;font-medium&quot;>Client</p>
                  <p className=&quot;text-sm text-muted-foreground&quot;>
                    {dispute.client_profile?.display_name || &quot;Unknown Client&quot;}
                  </p>
                </div>
              </div>
              
              <div className=&quot;flex justify-center&quot;>
                <ArrowDown className=&quot;h-6 w-6 text-muted-foreground&quot; />
              </div>
              
              <div className=&quot;flex items-start gap-4&quot;>
                <Avatar className=&quot;h-10 w-10&quot;>
                  <AvatarImage src={dispute.talent_profile?.avatar_url} />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div>
                  <p className=&quot;font-medium&quot;>Talent</p>
                  <p className=&quot;text-sm text-muted-foreground&quot;>
                    {dispute.talent_profile?.display_name || &quot;Unknown Talent&quot;}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Case Information</CardTitle>
            </CardHeader>
            <CardContent className=&quot;space-y-4 text-sm&quot;>
              <div className=&quot;flex justify-between&quot;>
                <span className=&quot;font-medium&quot;>Case ID:</span>
                <span className=&quot;font-mono&quot;>{dispute.id}</span>
              </div>
              <div className=&quot;flex justify-between&quot;>
                <span className=&quot;font-medium&quot;>Created:</span>
                <span>{format(new Date(dispute.created_at), &quot;MMM d, yyyy&quot;)}</span>
              </div>
              <div className=&quot;flex justify-between&quot;>
                <span className=&quot;font-medium&quot;>Status:</span>
                <Badge variant={getStatusBadgeVariant(dispute.status)}>
                  {dispute.status.replace('_ ')}
                </Badge>
              </div>
              <div className=&quot;flex justify-between&quot;>
                <span className=&quot;font-medium&quot;>Raised by:</span>
                <span>{dispute.raised_by === dispute.client_profile?.id ? &quot;Client&quot; : &quot;Talent&quot;}</span>
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
                  <AvatarImage src={dispute.client_profile?.avatar_url} />;
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
                  <AvatarImage src={dispute.talent_profile?.avatar_url} />;
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
                <span>{dispute.raised_by === dispute.client_profile?.id ? "Client" : "Talent"}</span>;
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