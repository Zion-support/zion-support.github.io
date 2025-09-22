
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
=======
import React, { useState, useEffect } from "react";""
import { useParams, useNavigate } from "react-router-dom";""
import { useDisputes } from "@/hooks/useDisputes";""
import { disputeReasonLabels, DisputeMessage, DisputeStatus } from "@/types/disputes";""
import { Button } from "@/components/ui/button";""
import { Textarea } from "@/components/ui/textarea";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";""
import { Badge } from "@/components/ui/badge";""
import { Separator } from "@/components/ui/separator";""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";""
import { format, formatDistanceToNow } from "date-fns";""
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";""
import { ShieldAlert, ArrowDown, Check, X, MessageSquare, Download } from "lucide-react";""
import { useAuth } from "@/hooks/useAuth";""
import { toast } from "sonner";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
export function DisputeDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { disputeId } = useParams() as { disputeId?:string },;
  const navigate = useNavigate(),;
  const { user } = useAuth(),;
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes(),;
  const [dispute, setDispute] = useState<any>(null),;
</any>
  const [messages, setMessages] = useState<DisputeMessage[]>([]),;
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true),;
  const [message, setMessage] = useState(""),;
  const [isSending, setIsSending] = useState(false),;
  const [resolution, setResolution] = useState({;
    summary:"",;
    resolution_type:"compromise"}),;
  const [activeTab, setActiveTab] = useState("overview"),;
;
  // Check if user is admin (placeholder - implement proper admin check);
  const isAdmin = user?.userType === "admin",;
  ;
  useEffect(() => {;
    if (!disputeId) return,;
;
    const loadDisputeData = async () => {;
      setIsLoading(true),;
      try {;
        const disputeData = await getDisputeById(disputeId),;
        if (!disputeData) {;
          toast.error("Dispute not found"),;
          navigate("/dashboard/disputes"),;
          return,;
        }
        setDispute(disputeData),;
        ;
        const messagesData = await getDisputeMessages(disputeId),;
        setMessages(messagesData),;
      } catch (error) {;
        console.error("Error loading dispute data:", error),;
        toast.error("Failed to load dispute"),;
      } finally {;
        setIsLoading(false),;
      }
    },;
    ;
    loadDisputeData(),;
  }, [disputeId, navigate, getDisputeById, getDisputeMessages]),;
;
  const handleStatusChange = async (status:DisputeStatus) => {;
    if (!disputeId) return,;
    ;
    const success = await updateDisputeStatus(disputeId, status),;
    if (success && dispute) {;
      setDispute({ ...dispute, status }),;
    }
  },;
;
  const handleResolveDispute = async () => {;
    if (!disputeId) return,;
    ;
    if (!resolution.summary) {;
      toast.error("Please provide a resolution summary"),;
      return,;
    }
    ;
    const success = await resolveDispute(disputeId, resolution),;
    if (success && dispute) {;
      setDispute({ ;
        ...dispute, ;
        status:"resolved", ;
        resolution_summary:resolution.summary,;
        resolution_type:resolution.resolution_type,;
        resolved_at:new Date().toISOString();
      }),;
    }
  },;
;
  const handleSendMessage = async () => {;
    if (!disputeId || !message.trim()) return,;
    ;
    setIsSending(true),;
    try {;
      const success = await addDisputeMessage(disputeId, message, isAdmin),;
      if (success) {;
        // Refresh messages;
        const updatedMessages = await getDisputeMessages(disputeId),;
        setMessages(updatedMessages),;
        setMessage(""),;
      }
    } catch (error) {;
      console.error("Error sending message:", error),;
    } finally {;
      setIsSending(false),;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    }
  },;
;
  if (isLoading) {;
    return (;
      <div className="p-8 text-center">;
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>;
        <p>Loading dispute details...</p>;
      </div>;
    ),;
  }
;
<<<<<<< HEAD

=======
  if (!dispute) {;
    return (;
      <div className="p-8 text-center">;
        <p>Dispute not found</p>;
        <Button onClick={() => navigate("/dashboard/disputes")} className="mt-4">;
          Back to Disputes;
        </Button>;
      </div>;
    ),;
  }
;
  const getStatusBadgeVariant = (status:DisputeStatus) => {;
    switch (status) {;
      case "open":return "default",;
      case "under_review":return "secondary",;
      case "resolved":return "outline", // Changed from "success" to "outline";
      case "closed":return "outline",;
      default:return "default";
    }
  },;
;
  return (;
    <div className="container mx-auto p-4 space-y-6">;
      <div className="flex flex-wrap items-center justify-between gap-4">;
=======
"
      <div className="p-8 text-center">;"
</div>"
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>;"
        <p>Loading dispute details...</p>;
      </div>;"
</div>
        <p>Dispute not found</p>;"
        <Button onClick={() => navigate("/dashboard/disputes")} className="mt-4">;"

    <div className="container mx-auto p-4 space-y-6">;"
      <div className="flex flex-wrap items-center justify-between gap-4">;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <div>;
          <div className="flex items-center gap-2">;"
            <h1 className="text-2xl font-bold">Dispute Case</h1>;"
            <Badge variant={getStatusBadgeVariant(dispute.status)}>;

          <p className="text-muted-foreground">;"
</p>
          </p>;
        <div className="flex gap-2">;"
          <Button variant="outline" onClick={() => navigate("/dashboard/disputes")}>;"

          ;"
            <Button onClick={() => handleStatusChange("under_review")}>;"

        </div>;
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">;"
          <Check className="h-4 w-4" />;"

          <AlertTitle>This dispute has been resolved;
          <AlertDescription>;
<<<<<<< HEAD
            {dispute.resolution_summary}
          </AlertDescription>;
        </Alert>;
      )}
      ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;
        <div className="lg:col-span-2">;
          <Tabs value={activeTab} onValueChange={setActiveTab}>;
            <TabsList className="mb-6">;
              <TabsTrigger value="overview">Overview</TabsTrigger>;
              <TabsTrigger value="messages">Messages</TabsTrigger>;
              <TabsTrigger value="attachments">Attachments</TabsTrigger>;
              {isAdmin && <TabsTrigger value="admin">Admin Notes</TabsTrigger>}
            </TabsList>;
<<<<<<< HEAD

=======
            ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <TabsContent value="overview" className="space-y-6">;
=======

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;"
        <div className="lg:col-span-2">;"
          <Tabs value={activeTab} onValueChange={setActiveTab}>;
            <TabsList className="mb-6">;"
              <TabsTrigger value="overview">Overview;""
              <TabsTrigger value="messages">Messages;""
              <TabsTrigger value="attachments">Attachments;""
              {isAdmin && <TabsTrigger value="admin">Admin Notes}"
            <TabsContent value="overview" className="space-y-6">;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <Card>;

                <CardHeader>;
<<<<<<< HEAD
                  <CardTitle>Dispute Details</CardTitle>;
                  <CardDescription>Information about this dispute case</CardDescription>;
                </CardHeader>;
                <CardContent className="space-y-4">;
                  <div>;
                    <h3 className="font-medium">Reason</h3>;
<<<<<<< HEAD

=======
                    <p>{disputeReasonLabels[dispute.reason_code as any] || dispute.reason_code}</p>;
                  </div>;
                  ;
                  <div>;
                    <h3 className="font-medium">Description</h3>;
                    <p className="whitespace-pre-wrap">{dispute.description}</p>;
                  </div>;
                  ;
                  <div>;
                    <h3 className="font-medium">Project</h3>;
                    <p>{dispute.project?.title || "Unknown Project"}</p>;
                    <p className="text-sm text-muted-foreground">{dispute.project?.scope_summary}</p>;
                  </div>;
                  ;
                  {dispute.milestone_id && (;
                    <div>;
                      <h3 className="font-medium">Related Milestone</h3>;
                      <p className="text-sm">Milestone ID:{dispute.milestone_id}</p>;
                    </div>;
                  )}
                  ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  <div>;
                    <h3 className="font-medium">Timeline</h3>;
                    <ul className="space-y-2 mt-2">;
                      <li className="flex gap-2 items-center">;
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1</Badge>;
<<<<<<< HEAD

=======
                        <span>Created on {format(new Date(dispute.created_at), "MMM d, yyyy 'at' h:mm a")}</span>;
                      </li>;
                      ;
                      {dispute.status !== "open" && (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                        <li className="flex gap-2 items-center">;
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>;
=======

                  <CardTitle>Dispute Details;
                  <CardDescription>Information about this dispute case;
                <CardContent className="space-y-4">;"

                    <h3 className="font-medium">Reason</h3>;"
                    <p>{disputeReasonLabels[dispute.reason_code as any] || dispute.reason_code}</p>;
                    <h3 className="font-medium">Description</h3>;""
                    <p className="whitespace-pre-wrap">{dispute.description}</p>;"
                    <h3 className="font-medium">Project</h3>;""
                    <p>{dispute.project?.title || "Unknown Project"}</p>;""
                    <p className="text-sm text-muted-foreground">{dispute.project?.scope_summary}</p>;"
                      <h3 className="font-medium">Related Milestone</h3>;""
                      <p className="text-sm">Milestone ID: {dispute.milestone_id;}</p>;"
                    <h3 className="font-medium">Timeline</h3>;""
                    <ul className="space-y-2 mt-2">;"
</ul>"
                      <li className="flex gap-2 items-center">;"
</li>"
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1;""
                        <span>Created on {format(new Date(dispute.created_at), "MMM d, yyyy 'at' h: mm a");}</span>;"
                      </li>;"
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                          <span>Under review</span>;
                        </li>;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    </ul>;
<<<<<<< HEAD
                  </div>;
                </CardContent>;
              </Card>;
<<<<<<< HEAD

=======
              ;
              {dispute.status === "resolved" && (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <Card>;
                  <CardHeader>;
                    <CardTitle>Resolution</CardTitle>;
                  </CardHeader>;
                  <CardContent>;
<<<<<<< HEAD

=======
                    <p className="whitespace-pre-wrap">{dispute.resolution_summary}</p>;
                    ;
                    {dispute.resolution_type && (;
                      <div className="mt-4">;
=======


                    <CardTitle>Resolution;
                  <CardContent>;
                    <p className="whitespace-pre-wrap">{dispute.resolution_summary}</p>;""
                      <div className="mt-4">;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                        <Badge>;

                      </div>;                    )}
<<<<<<< HEAD
                  </CardContent>;
                </Card>;
              )}
            </TabsContent>;
            ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <TabsContent value="messages" className="space-y-6">;
              <Card>;
                <CardHeader>;
                  <CardTitle>Messages</CardTitle>;
                  <CardDescription>Communication regarding this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <div className="space-y-6 max-h-[600px] overflow-y-auto p-2">;
<<<<<<< HEAD

=======
                    {messages.length === 0 ? (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      <div className="text-center py-12">;
                        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" />;
                        <p className="text-muted-foreground">No messages yet</p>;
                      </div>;
<<<<<<< HEAD

=======
                    ) :(;
                      messages;
                        .filter(msg => !msg.is_admin_note);
                        .map((msg) => {;
                          const isCurrentUser = user?.id === msg.user_id,;
                          return (;
=======
            <TabsContent value="messages" className="space-y-6">;"



                  <CardTitle>Messages;
                  <CardDescription>Communication regarding this dispute;
                  <div className="space-y-6 max-h-[600px] overflow-y-auto p-2">;"
                      <div className="text-center py-12">;"
                        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" />;"
                        <p className="text-muted-foreground">No messages yet</p>;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                            <div;
                              key={msg.id}"
                              className={`flex ${isCurrentUser ? 'justify-end' :'justify-start'}`}
                            >;
                              <div;`;
                                className={`max-w-[80%] ${;
                                  isCurrentUser;
                                    ? 'bg-primary text-primary-foreground';
                                    :'bg-muted';`;
                                } p-4 rounded-lg`}
                                <div className="flex items-center gap-2 mb-2">;"
                                  <Avatar className="h-6 w-6">;"

                                    <AvatarImage src={msg.user_profile?.avatar_url} />;

                                    <AvatarFallback>;

                                  <span className="text-sm font-medium">;"
</span>
                                  </span>;"
                                  <span className="text-xs opacity-70">;"
                                  </span>;
<<<<<<< HEAD
                                  <span className="text-xs opacity-70">;
                                    {format(new Date(msg.created_at), 'MMM d, h:mm a')}
                                  </span>;
                                </div>;
                                <p className="whitespace-pre-wrap">{msg.message}</p>;
                              </div>;
                            </div>;
                          ),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                        });
                    )}
                  </div>;
                </CardContent>;
                <CardFooter>;
                  <div className="w-full space-y-4">;
<<<<<<< HEAD

=======
                    <Textarea;
                      placeholder="Type your message here...";
=======
                                <p className="whitespace-pre-wrap">{msg.message}</p>;"
                <CardFooter>;
                  <div className="w-full space-y-4">;"
                    <Textarea;"
                      placeholder="Type your message here...";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    <div className="flex justify-end">;"
                      <Button onClick={handleSendMessage} disabled={isSending || !message.trim()}>;
<<<<<<< HEAD
                        {isSending ? "Sending..." :"Send Message"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      </Button>;
                    </div>;
                  </div>;
                </CardFooter>;
              </Card>;
            </TabsContent>;
<<<<<<< HEAD

=======
            ;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  </div>;
                </CardContent>;
              </Card>;
            </TabsContent>;
<<<<<<< HEAD

=======
            ;
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
                        <Button ;
                          variant="outline" ;
                          onClick={() => handleStatusChange("open")}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                          disabled={dispute.status === "open"}
                        >;
                          Mark as Open;
                        </Button>;
<<<<<<< HEAD

=======
                        <Button ;
                          variant="outline" ;
                          onClick={() => handleStatusChange("under_review")}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                          disabled={dispute.status === "under_review"}
                        >;
                          Mark as Under Review;
                        </Button>;
<<<<<<< HEAD

=======
                        <Button ;
                          variant="outline" ;
                          onClick={() => handleStatusChange("closed")}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                          disabled={dispute.status === "closed"}
                        >;
                          Close Dispute;
                        </Button>;
                      </div>;
                    </div>;
<<<<<<< HEAD

=======
                    ;
                    {dispute.status !== "resolved" && (;
                      <div>;
                        <h3 className="font-medium mb-2">Resolve Dispute</h3>;
                        <div className="space-y-4">;
                          <Textarea;
                            placeholder="Enter resolution summary...";
=======

            <TabsContent value="attachments">;"



                  <CardTitle>Attachments;
                  <CardDescription>Files related to this dispute;
                    <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" />;"
                    <p className="text-muted-foreground">No attachments available</p>;"
              <TabsContent value="admin" className="space-y-6">;"



                    <CardTitle>Admin Actions;
                    <CardDescription>Handle this dispute as an administrator;
                  <CardContent className="space-y-6">;"

                      <h3 className="font-medium mb-2">Change Status</h3>;""
                        <Button ;"
                          variant="outline" ;""
                          onClick={() => handleStatusChange("open")}"

                          onClick={() => handleStatusChange("under_review")}"

                          onClick={() => handleStatusChange("closed")}"

                        <h3 className="font-medium mb-2">Resolve Dispute</h3>;""
                        <div className="space-y-4">;"
                            placeholder="Enter resolution summary...";"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                            value={resolution.summary}
                            onChange={(e) => setResolution({ ...resolution, summary: e.target.value ;})}
                          <div className="grid grid-cols-2 gap-4">;"
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>;"
                              <select ;"
                                className="w-full p-2 border rounded";"
                                value={resolution.resolution_type}
<<<<<<< HEAD
                                onChange={(e) => setResolution({ ...resolution, resolution_type:e.target.value })}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                              >;
=======
                                onChange={(e) => setResolution({ ...resolution, resolution_type: e.target.value ;})}
</select>"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                                <option value="client_favor">In Client's Favor</option>;
                                <option value="talent_favor">In Talent's Favor</option>;
                                <option value="compromise">Compromise</option>;""
                                <option value="dismissed">Dismissed</option>;"
                              </select>;
<<<<<<< HEAD
                            </div>;
                          </div>;
<<<<<<< HEAD

=======
                          ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                          <Button onClick={handleResolveDispute}>Resolve Dispute</Button>;
                        </div>;
                      </div>;
                    )}
<<<<<<< HEAD

=======
                    ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    <div>;
                      <h3 className="font-medium mb-2">Admin Notes</h3>;
                      <div className="space-y-4 max-h-[300px] overflow-y-auto p-2">;
                        {messages;
<<<<<<< HEAD

=======
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
                      </div>;
                      ;
                      <div className="mt-4 space-y-4">;
                        <Textarea;
                          placeholder="Add an admin note (only visible to administrators)...";
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />;
                        <Button ;
                          variant="outline" ;
                          onClick={() => {;
                            if (message.trim()) {;
                              addDisputeMessage(disputeId!, message, true).then(() => {;
                                getDisputeMessages(disputeId!).then(setMessages),;
                                setMessage(""),;
                              }),;                            }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                          }}
                        >;
                          Add Admin Note;
                        </Button>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
<<<<<<< HEAD

=======
              </TabsContent>;
            )}
          </Tabs>;
        </div>;
        ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <div className="space-y-6">;
          <Card>;
            <CardHeader>;
              <CardTitle>Parties Involved</CardTitle>;
            </CardHeader>;
            <CardContent className="space-y-6">;
              <div className="flex items-start gap-4">;
                <Avatar className="h-10 w-10">;
<<<<<<< HEAD

=======
                  <AvatarImage src={dispute.client_profile?.avatar_url} />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  <AvatarFallback>C</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className="font-medium">Client</p>;
                  <p className="text-sm text-muted-foreground">;
<<<<<<< HEAD

=======
                    {dispute.client_profile?.display_name || "Unknown Client"}
                  </p>;
                </div>;
              </div>;
              ;
              <div className="flex justify-center">;
                <ArrowDown className="h-6 w-6 text-muted-foreground" />;
              </div>;
              ;
              <div className="flex items-start gap-4">;
                <Avatar className="h-10 w-10">;
                  <AvatarImage src={dispute.talent_profile?.avatar_url} />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  <AvatarFallback>T</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className="font-medium">Talent</p>;
                  <p className="text-sm text-muted-foreground">;
<<<<<<< HEAD

=======
                    {dispute.talent_profile?.display_name || "Unknown Talent"}
                  </p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
          ;
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
                <span>{dispute.raised_by === dispute.client_profile?.id ? "Client" :"Talent"}</span>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </div>;
<<<<<<< HEAD

=======
    </div>;
  ),; export function DisputeDetail () {
  //useParams may be untyped in this environment, so avoid passing a //type argument and cast the result instead to prevent TS2347 errors. const {
  disputeId 
}= useParams () as {
  disputeId?: string 
};
const navigate = useNavigate ();
const {
  user 
}= useAuth ();
const {
  getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage 
}= useDisputes ();
if (!disputeId) return;
const loadDisputeData = async () => {
  setIsLoading (true);
try {
  const disputeData = await getDisputeById (disputeId);
if (!disputeData) {
  
}setDispute (disputeData);
const messagesData = await getDisputeMessages (disputeId);
setMessages (messagesData) 
}catch (error) {
  
}finally {
  setIsLoading (false) 
}
};
}, [disputeId, navigate, getDisputeById, getDisputeMessages]);
}
};
}const success = await resolveDispute (disputeId, resolution);
if (success && dispute) {
  setDispute ({
  ...dispute;
status: "resolved";
resolution summary: resolution.summary;
resolution type: resolution.resolution type;
resolved at: new Date () .toISOString () 
}) 
}
};
setIsSending (true);
try {
  
}finally {
  setIsSending (false) 
}
};
return (<div className="p-8 text-center"> <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div> <p>Loading dispute details...</p> </div> <p>Dispute not found</p> <Button onClick= {
  () => navigate ("/dashboard/disputes") 
}className="mt-4" > Back to Disputes </Button> </div>) 
}
}
};
formatDistanceToNow (new Date (dispute.created at), {
  addSuffix: true 
}) 
}</p> </div> Start Review </Button>) 
}</div> </div> <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900"> <Check className="h-4 w-4" /> <AlertTitle>This dispute has been resolved</AlertTitle> <AlertDescription> {
  dispute.resolution summary 
}</AlertDescription> </Alert>) 
}<div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> <div className="lg:col-span-2"> </TabsList> <TabsContent value="overview" className="space-y-6"> <Card> <CardHeader> <CardTitle>Dispute Details</CardTitle> <CardDescription>Information about this dispute case</CardDescription> </CardHeader> <CardContent className="space-y-4"> <div> <h3 className="font-medium">Reason</h3> <p> {
  disputeReasonLabels[dispute.reason code as any] || dispute.reason code 
}</p> </div> <div> <h3 className="font-medium">Description</h3> <p className="whitespace-pre-wrap"> {
  dispute.description 
}</p> </div> <div> </div> {
  dispute.milestone id && (<div> <h3 className="font-medium">Related Milestone</h3> <p className="text-sm">Milestone ID: {
  dispute.milestone id 
}</p> </div>) 
}<div> <h3 className="font-medium">Timeline</h3> <ul className="space-y-2 mt-2"> <span>Under review</span> </li>) 
}</li>) 
}</ul> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Resolution</CardTitle> </CardHeader> <CardContent> <p className="whitespace-pre-wrap"> {
  dispute.resolution summary 
}</p> </Badge> </div>) 
}</CardContent> </Card>) 
}</TabsContent> <TabsContent value="messages" className="space-y-6"> <Card> <CardHeader> <CardTitle>Messages</CardTitle> <CardDescription>Communication regarding this dispute</CardDescription> </CardHeader> <CardContent> <div className="space-y-6 max-h-[600px] overflow-y-auto p-2"> {
  messages.length === 0 ? (<div className="text-center py-12"> <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground">No messages yet</p> </div>) : (messages .filter (msg => !msg.is admin note) return (<div key= {
  msg.id 
}className= {
  `flex $ {
  isCurrentUser ? 'justify-end' : 'justify-start' 
=======
                          <Button onClick={handleResolveDispute}>Resolve Dispute;
                      <h3 className="font-medium mb-2">Admin Notes</h3>;""
                      <div className="space-y-4 max-h-[300px] overflow-y-auto p-2">;"
                          <div key={msg.id} className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900">;"
                            <div className="flex items-center justify-between mb-2">;"



                            <p className="whitespace-pre-wrap text-sm">{msg.message}</p>;"
                          <p className="text-sm text-muted-foreground italic">No admin notes yet</p>;"
                      <div className="mt-4 space-y-4">;"
                          placeholder="Add an admin note (only visible to administrators)...";"

                          variant="outline" ;"
                          onClick={() => {;

        <div className="space-y-6">;"


              <CardTitle>Parties Involved;
              <div className="flex items-start gap-4">;"
                <Avatar className="h-10 w-10">;"

                  <AvatarImage src={dispute.client_profile?.avatar_url} />;

                  <AvatarFallback>C;
                  <p className="font-medium">Client</p>;""
                  <p className="text-sm text-muted-foreground">;"
              <div className="flex justify-center">;"
                <ArrowDown className="h-6 w-6 text-muted-foreground" />;"


                  <AvatarImage src={dispute.talent_profile?.avatar_url} />;

                  <AvatarFallback>T;
                  <p className="font-medium">Talent</p>;""


              <CardTitle>Case Information;
            <CardContent className="space-y-4 text-sm">;"
              <div className="flex justify-between">;"
                <span className="font-medium">Case ID:</span>;""
                <span className="font-mono">{dispute.id}</span>;"
                <span className="font-medium">Created:</span>;""
                <span>{format(new Date(dispute.created_at), "MMM d, yyyy")}</span>;"
                <span className="font-medium">Status:</span>;"

                <span className="font-medium">Raised by:</span>;""
                <span>{dispute.raised_by === dispute.client_profile?.id ? "Client" :"Talent"}</span>;"
return (<div className="p-8 text-center"> <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div> <p>Loading dispute details...</p> </div> <p>Dispute not found</p> <Button onClick= {")"
  () => navigate ("/dashboard/disputes")""
}className="mt-4" > Back to Disputes  </div>)"
}</p> </div> Start Review ) "
}</div> </div> <Alert className="bg-green-50 border-green-200 dark: bg-green-900/20 dark:border-green-900"> <Check className="h-4 w-4" /> <AlertTitle>This dispute has been resolved <AlertDescription> {";

} ) "
}<div className="grid grid-cols-1 lg: grid-cols-3 gap-6"> <div className="lg:col-span-2">  <TabsContent value="overview" className="space-y-6"> <Card> <CardHeader> <CardTitle>Dispute Details <CardDescription>Information about this dispute case  <CardContent className="space-y-4"> <div> <h3 className="font-medium">Reason</h3> <p> {";
}</p> </div> <div> <h3 className="font-medium">Description</h3> <p className="whitespace-pre-wrap"> {"
}</p> </div> <div> </div> {"
  dispute.milestone id && (<div> <h3 className="font-medium">Related Milestone</h3> <p className="text-sm">Milestone ID: {"
</div>)
}</p> </div>) "
}<div> <h3 className="font-medium">Timeline</h3> <ul className="space-y-2 mt-2"> <span>Under review</span> </li>)"
}</li>) "
}</ul> </div>   <Card> <CardHeader> <CardTitle>Resolution  <CardContent> <p className="whitespace-pre-wrap"> {"

}</p>  </div>) 
} <TabsContent value="messages" className="space-y-6"> <Card> <CardHeader> <CardTitle>Messages <CardDescription>Communication regarding this dispute  <CardContent> <div className="space-y-6 max-h-[600px] overflow-y-auto p-2"> {"
  messages.length === 0 ? (<div className="text-center py-12"> <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground">No messages yet</p> </div>) : (messages .filter (msg => !msg.is admin note) return (<div key= {"
  msg.id;
}className= {`;
  `flex $ {"
  isCurrentUser ? 'justify-end' : 'justify-start`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}` 
}> <div className= {`;
  `max-w-[80%] $ {
  isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-muted`;
}p-4 rounded-lg` 
}> <div className="flex items-center gap-2 mb-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {"
}/> <AvatarFallback> {
}  <span className="text-sm font-medium"> {"
</span>"
}</span> <span className="text-xs opacity-70"> {"
}</span> </div> <p className="whitespace-pre-wrap"> {"
</p>)
}</p> </div> </div>) "
}</div>  <CardFooter> <div className="w-full space-y-4" > <Textarea className="min-h-[100px]" disabled= {"
}/>  </div> </div>    <TabsContent value="attachments"> <Card> <CardHeader> <CardTitle>Attachments <CardDescription>Files related to this dispute  <CardContent> <div className="text-center py-12"> <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground" >No attachments available</p> </div>    <Card> <CardHeader> <CardTitle>Admin Actions <CardDescription>Handle this dispute as an administrator  <CardContent className="space-y-6"> <div> <h3 className="font-medium mb-2">Change Status</h3> <div className="flex gap-2" > <Button > Mark as Open  <Button > Mark as Under Review  <Button > Close Dispute  </div> </div> <h3 className="font-medium mb-2">Resolve Dispute</h3> <div className="space-y-4" > <Textarea placeholder="Enter resolution summary..." value= {"
  resolution.summary;
}onChange= {
  (e) => setResolution ({
  ...resolution, summary: e.target.value;)
}) "
}className="min-h-[100px]" /> <div className="grid grid-cols-2 gap-4"> <div> <label className="text-sm font-medium mb-1 block">Resolution Type</label> <select > <option value="client favor" >In Client's Favor</option> <option value="talent favor" >In Talent's Favor</option> <option value="compromise" >Compromise</option> <option value="dismissed">Dismissed</option> </select> </div> </div> <Button onClick= {"
  handleResolveDispute;
}>Resolve Dispute </div> </div>) "
}<div> <h3 className="font-medium mb-2">Admin Notes</h3> <div className="space-y-4 max-h-[300px] overflow-y-auto p-2"> {"
  messages .filter (msg => msg.is admin note) .map ( (msg) => (<div key= {
<<<<<<< HEAD
  msg.id 
}className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900"> <div className="flex items-center justify-between mb-2"> <div className="flex items-center gap-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {
  msg.user profile?.avatar url 
}/> <AvatarFallback> {
  msg.user profile?.display name?.[0] || 'A' 
}</AvatarFallback> </Avatar> <span className="text-sm font-medium"> {
  msg.user profile?.display name || 'Admin' 
}</span> </div> <span className="text-xs opacity-70"> {
  format (new Date (msg.created at), 'MMM d, h:mm a') 
}</span> </div> <p className="whitespace-pre-wrap text-sm"> {
  msg.message 
}</p> </div>) ) 
}{
  !messages.some (msg => msg.is admin note) && (<p className="text-sm text-muted-foreground italic">No admin notes yet</p>) 
}</div> <div className="mt-4 space-y-4" > <Textarea 
}
}
}> Add Admin Note </Button> </div> </div> </CardContent> </Card> </TabsContent>) 
}</Tabs> </div> <div className="space-y-6" > <Card> <CardHeader> <CardTitle>Parties Involved</CardTitle> </CardHeader> </p> </div> </div> <div className="flex justify-center" > <ArrowDown className="h-6 w-6 text-muted-foreground" /> </div> </p> </div> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Case Information</CardTitle> </CardHeader> </div> </CardContent> </Card> </div> </div> </div>) 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
=======
  msg.id;"
}className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark: bg-yellow-900/20 dark:border-yellow-900"> <div className="flex items-center justify-between mb-2"> <div className="flex items-center gap-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {";
}</span> </div> <span className="text-xs opacity-70"> {"
}</span> </div> <p className="whitespace-pre-wrap text-sm"> {"
}</p> </div>) ) "
  !messages.some (msg => msg.is admin note) && (<p className="text-sm text-muted-foreground italic">No admin notes yet</p>)""
}</div> <div className="mt-4 space-y-4" > <Textarea;"
}> Add Admin Note  </div> </div>   ) "
} </div> <div className="space-y-6" > <Card> <CardHeader> <CardTitle>Parties Involved  </p> </div> </div> <div className="flex justify-center" > <ArrowDown className="h-6 w-6 text-muted-foreground" /> </div> </p> </div> </div>   <Card> <CardHeader> <CardTitle>Case Information  </div>   </div> </div> </div>)""`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
