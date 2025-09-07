
import React, { useState, useEffect } from "react";""
import {useParams, useNavigate} from "react-router-dom";""
import {useDisputes} from "@/hooks/useDisputes";""
import {disputeReasonLabels, DisputeMessage, DisputeStatus} from "@/types/disputes";""
import {Button} from "@/components/ui/button";""
import {Textarea} from "@/components/ui/textarea";""
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Badge} from "@/components/ui/badge";""
import {Separator} from "@/components/ui/separator";""
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";""
import {format, formatDistanceToNow} from "date-fns";""
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";""
import {ShieldAlert, ArrowDown, Check, X, MessageSquare, Download} from "lucide-react";""
import {useAuth} from "@/hooks/useAuth";""
import {toast} from "sonner";"
export function DisputeDetail() {;
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { disputeId } = useParams() as { disputeId?: string };
  const navigate = useNavigate();
  const { user } = useAuth();
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes();

"
import React, { useState, useEffect } from "react",""
import { useParams, useNavigate } from "react-router-dom",""
import { useDisputes } from "@/hooks/useDisputes",""
import { disputeReasonLabels, DisputeMessage, DisputeStatus } from "@/types/disputes",""
import { Button } from "@/components/ui/button",""
import { Textarea } from "@/components/ui/textarea",""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",""
import { Badge } from "@/components/ui/badge",""
import { Separator } from "@/components/ui/separator",""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",""
import { format, formatDistanceToNow } from "date-fns",""
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",""
import { ShieldAlert, ArrowDown, Check, X, MessageSquare, Download } from "lucide-react",""
import { useAuth } from "@/hooks/useAuth",""
import { toast } from "sonner";"
export function DisputeDetail() {
  // useParams may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.

  const { disputeId } = useParams() as { disputeId?: string }
  const navigate = useNavigate();
  const { user } = useAuth();
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes();

  const [dispute, setDispute] = useState<any>(null);
</any>
  const [messages, setMessages] = useState<DisputeMessage[]>([]);
</DisputeMessage>
  const [dispute, setDispute] = useState<any>(null),;
</any>
  const [messages, setMessages] = useState<DisputeMessage[]>([]),;
</DisputeMessage>"
      <div className="p-8 text-center">;"
</div>"
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>;"
        <p>Loading dispute details...</p>;
      </div>;"
      <div className="p-8 text-center">"
</div>
        <p>Dispute not found</p>"
        <Button onClick={() => navigate("/dashboard/disputes")} className="mt-4">"
</Button>
        </Button>
      </div>"
    <div className="container mx-auto p-4 space-y-6">"
</div>"
      <div className="flex flex-wrap items-center justify-between gap-4">"
</div>
        <div>
</div>"
          <div className="flex items-center gap-2">"
</div>"
            <h1 className="text-2xl font-bold">Dispute Case</h1>"
            <Badge variant={getStatusBadgeVariant(dispute.status)}>
</Badge>"
      <div className="p-8 text-center">;"
</div>
        <p>Dispute not found</p>;"
        <Button onClick={() => navigate("/dashboard/disputes")} className="mt-4">;"
</Button>
        </Button>;
      </div>;
  const [dispute, set_dispute] = useState < any>(null);
  const [messages, set_messages] = useState < DisputeMessage[]>([]);
  const [is_loading, setIsLoading] = useState (true);"
  const [message, set_message] = useState ("");"
  const [is_sending, setIsSending] = useState (false);
  const [resolution, set_resolution] = useState ({"
    summary: "",")"
    resolution_type: "compromise"}),""
  const [active_tab, setActiveTab] = useState ("overview");"
;
  // Check if user is admin (placeholder - implement proper admin check);"
  const is_admin = user?.user_type === "admin";"
;
  useEffect (() => {
    // Check condition;
if (return) {
  $2;

}
    const loadDisputeData = async () => {
      setIsLoading (true);
      try {

  // TODO: Implement
}
        const dispute_data = await getDisputeById (dispute_id);
        // Check condition;
if ( {) {
  $2;
}"
          toast.error ("Dispute not found");""
          navigate ("/dashboard / disputes");"

          return;
        }
        set_dispute (dispute_data);
;
        const messages_data = await getDisputeMessages (dispute_id);
        set_messages (messages_data);

      } catch (error) {"
        console.error ("Error loading dispute data:", error);""
        toast.error ("Failed to load dispute");"
      } finally {
  // TODO: Implement
}
        setIsLoading (false);

      }
    }
;
    loadDisputeData ();
  }, [dispute_id, navigate, getDisputeById, getDisputeMessages]);
;
  const handleStatusChange = async (status: DisputeStatus) => {
    // Check condition;

if (return, ) {
  $2;
}
    const success = await updateDisputeStatus (dispute_id, status);
    // Check condition;
if ( {) {
  $2;

}
      set_dispute ({ ...dispute, status });
    }
  }
;
  const handleResolveDispute = async () => {
    // Check condition;

if (return) {
  $2;
}
    // Check condition;
if ( {) {
  $2;
}"
      toast.error ("Please provide a resolution summary");"

      return;
    }
    const success = await resolve_dispute (dispute_id, resolution);
    // Check condition;

if ( {) {
  $2;
}
      set_dispute ({
        ...dispute,"
        status: "resolved","
        resolution_summary: resolution.summary,
        resolution_type: resolution.resolution_type,)
        resolved_at: new Date ().toISOString ();

      });
    }
  }
;
  const handleSendMessage = async () => {

    if () return) {
  $2;

}
    setIsSending (true);
    try {
  // TODO: Implement
}
      const success = await addDisputeMessage (dispute_id, message, is_admin);
      // Check condition;

if ( {) {
  $2;
}
        // Refresh messages;
        const updated_messages = await getDisputeMessages (dispute_id);
        set_messages (updated_messages);"
        set_message ("");"
      }
    } catch (error) {"
      console.error ("Error sending message:", error);"
    } finally {
  // TODO: Implement
}
      setIsSending (false);

    }
  }
;
  // Check condition;

if ( {) {
  $2;
}
    return ("
      <div className="p - 8 text - center">;"
</div>"
        <div className="w - 8 h - 8 mx - auto mb - 4 animate - spin border - 4 border - primary border - t-transparent rounded - full"></div>;"
        <p > Loading dispute details...</p>;)
      </div>);"
      <div className="p - 8 text - center">;"
</div>
        <p > Dispute not found</p>;"
        <Button on_click={() => navigate ("/dashboard / disputes")} className="mt - 4">;"
</Button>
        </Button>;
      </div>);
  const [dispute, setDispute] = useState<any>(null),;
</any>
  const [messages, setMessages] = useState<DisputeMessage[]>([]),;
</DisputeMessage>"
      <div className="p-8 text-center">;"
</div>"
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>;"
        <p>Loading dispute details...</p>;
      </div>;"
    <div className="container mx-auto p-4 space-y-6">;"
</div>"
      <div className="flex flex-wrap items-center justify-between gap-4">;"
</div>
        <div>;
</div>"
          <div className="flex items-center gap-2">;"
</div>"
            <h1 className="text-2xl font-bold">Dispute Case</h1>;"
            <Badge variant={getStatusBadgeVariant(dispute.status)}>;
</Badge>
            </Badge>
          </div>"
          <p className="text-muted-foreground">"
</p>
          </p>
        </div>"
        <div className="flex gap-2">"
</div>"
          <Button variant="outline" onClick={() => navigate("/dashboard/disputes")}>"
</Button>
          </Button>"
            <Button onClick={() => handleStatusChange("under_review")}>"
</Button>
            </Button>
        </div>
      </div>"
    <div className="container mx - auto p - 4 space - y-6">;"
</div>"
      <div className="flex flex - wrap items - center justify - between gap - 4">;"
</div>
        <div>;
</div>"
          <div className="flex items - center gap - 2">;"
</div>"
            <h1 className="text - 2xl font - bold">Dispute Case</h1>;"
            <Badge variant={getStatusBadgeVariant (dispute.status)}>;
</Badge>
            </Badge>;
          </div>;"
          <p className="text - muted - foreground">;"
</p>
          </p>;
        </div>;"
        <div className="flex gap - 2">;"
</div>"
          <Button variant="outline" on_click={() => navigate ("/dashboard / disputes")}>;"
</Button>
          </Button>;"
            <Button on_click={() => handleStatusChange ("under_review")}>;"
</Button>
            </Button>)}
        </div>;
      </div>;"
        <Alert className="bg - green - 50 border - green - 200 dark:bg - green - 900 / 20 dark:border - green - 900">;"
</Alert>"
          <Check className="h - 4 w - 4" />;"
</Check>
          <AlertTitle > This dispute has been resolved</AlertTitle>;
          <AlertDescription>;
</AlertDescription>"
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">"
</div>"
        <div className="lg:col-span-2">"
</div>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
</Tabs>"
            <TabsList className="mb-6">"
</TabsList>"
              <TabsTrigger value="overview">Overview</TabsTrigger>""
              <TabsTrigger value="messages">Messages</TabsTrigger>""
              <TabsTrigger value="attachments">Attachments</TabsTrigger>""
              {isAdmin && <TabsTrigger value="admin">Admin Notes</TabsTrigger>}"
            </TabsList>"
            <TabsContent value="overview" className="space-y-6">"
</TabsContent>
              <Card>
</Card>
                <CardHeader>
</CardHeader>
                  <CardTitle>Dispute Details</CardTitle>
                  <CardDescription>Information about this dispute case</CardDescription>
                </CardHeader>"
                <CardContent className="space-y-4">"
</CardContent>
                  <div>
</div>"
                    <h3 className="font-medium">Reason</h3>"
                    <p>{disputeReasonLabels[dispute.reason_code as any] |dispute.reason_code}</p>
                  </div>
                  <div>
</div>"
                    <h3 className="font-medium">Description</h3>""
                    <p className="whitespace-pre-wrap">{dispute.description}</p>"
                  </div>
                  <div>
</div>"
                    <h3 className="font-medium">Project</h3>""
                    <p>{dispute.project?.title |"Unknown Project"}</p>""
                    <p className="text-sm text-muted-foreground">{dispute.project?.scope_summary}</p>"
                  </div>
                    <div>
</div>"
                      <h3 className="font-medium">Related Milestone</h3>""
                      <p className="text-sm">Milestone ID: {dispute.milestone_id}</p>"
                    </div>
                  <div>
</div>"
                    <h3 className="font-medium">Timeline</h3>""
                    <ul className="space-y-2 mt-2">"
</ul>"
                      <li className="flex gap-2 items-center">"
</li>"
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1</Badge>""
                        <span>Created on {format(new Date(dispute.created_at), "MMM d, yyyy 'at' h:mm a")}</span>"
                      </li>"
                        <li className="flex gap-2 items-center">"
</li>"
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>"
                          <span>Under review</span>
                        </li>
          </AlertDescription>;
        </Alert>)}"
      <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 6">;"
</div>"
        <div className="lg:col - span - 2">;"
</div>
          <Tabs value={active_tab} onValueChange={setActiveTab}>;
</Tabs>"
            <TabsList className="mb - 6">;"
</TabsList>"
              <TabsTrigger value="overview">Overview</TabsTrigger>;""
              <TabsTrigger value="messages">Messages</TabsTrigger>;""
              <TabsTrigger value="attachments">Attachments</TabsTrigger>;""
              {is_admin && <TabsTrigger value="admin">Admin Notes</TabsTrigger>}"
            </TabsList>;"
            <TabsContent value="overview" className="space - y-6">;"
</TabsContent>
              <Card>;
</Card>
                <CardHeader>;
</CardHeader>
                  <CardTitle > Dispute Details</CardTitle>;
                  <CardDescription > Information about this dispute case</CardDescription>;
                </CardHeader>;"
                <CardContent className="space - y-4">;"
</CardContent>
                  <div>;
</div>"
                    <h3 className="font - medium">Reason</h3>;"
                    <p>{disputeReasonLabels[dispute.reason_code as any] || dispute.reason_code}</p>;
                  </div>;
                  <div>;
</div>"
                    <h3 className="font - medium">Description</h3>;""
                    <p className="whitespace - pre - wrap">{dispute.description}</p>;"
                  </div>;
                  <div>;
</div>"
                    <h3 className="font - medium">Project</h3>;""
                    <p>{dispute.project?.title || "Unknown Project"}</p>;""
                    <p className="text - sm text - muted - foreground">{dispute.project?.scope_summary}</p>;"
                  </div>;
                    <div>;
</div>"
                      <h3 className="font - medium">Related Milestone</h3>;""
                      <p className="text - sm">Milestone ID: {dispute.milestone_id}</p>;"
                    </div>)}
                  <div>;
</div>"
                    <h3 className="font - medium">Timeline</h3>;""
                    <ul className="space - y-2 mt - 2">;"
</ul>"
                      <li className="flex gap - 2 items - center">;"
</li>"
                        <Badge variant="outline" className="h - 6 w - 6 rounded - full p - 0 flex items - center justify - center">1</Badge>;""
                        <span > Created on {format (new Date (dispute.created_at), "MMM d, yyyy 'at' h:mm a")}</span>;"
                      </li>;"
                        <li className="flex gap - 2 items - center">;"
</li>"
                          <Badge variant="outline" className="h - 6 w - 6 rounded - full p - 0 flex items - center justify - center">2</Badge>;"
                          <span > Under review</span>;
                        </li>)}"
                        <li className="flex gap - 2 items - center">;"
</li>"
                          <Badge variant="outline" className="h - 6 w - 6 rounded - full p - 0 flex items - center justify - center">;"
</Badge>"
    <div className="container mx-auto p-4 space-y-6">;"
</div>"
      <div className="flex flex-wrap items-center justify-between gap-4">;"
</div>
        <div>;
</div>"
          <div className="flex items-center gap-2">;"
</div>"
            <h1 className="text-2xl font-bold">Dispute Case</h1>;"
            <Badge variant={getStatusBadgeVariant(dispute && dispute.status)}>;
</Badge>
            </Badge>;
          </div>;"
          <p className="text-muted-foreground">;"
</p>
          </p>;
        </div>;"
        <div className="flex gap-2">;"
</div>"
          <Button variant="outline" onClick={() => navigate("/dashboard/disputes")}>;"
</Button>
          </Button>;"
            <Button onClick={() => handleStatusChange("under_review")}>;"
</Button>

            </Button>;
        </div>;

      </div>;"
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">;"
</Alert>"
          <Check className="h-4 w-4" />;"
</Check>
          <AlertTitle>This dispute has been resolved</AlertTitle>;
          <AlertDescription>;
</AlertDescription>
          </AlertDescription>;
        </Alert>;"
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;"
</div>"
        <div className="lg:col-span-2">;"
</div>
          <Tabs value={activeTab} onValueChange={setActiveTab}>;
</Tabs>"
            <TabsList className="mb-6">;"
</TabsList>"
              <TabsTrigger value="overview">Overview</TabsTrigger>;""
              <TabsTrigger value="messages">Messages</TabsTrigger>;""
              <TabsTrigger value="attachments">Attachments</TabsTrigger>;""
              {isAdmin && <TabsTrigger value="admin">Admin Notes</TabsTrigger>}"
            </TabsList>;"
            <TabsContent value="overview" className="space-y-6">;"
</TabsContent>
              <Card>;
</Card>
                <CardHeader>;
</CardHeader>
                  <CardTitle>Dispute Details</CardTitle>;
                  <CardDescription>Information about this dispute case</CardDescription>;
                </CardHeader>;"
                <CardContent className="space-y-4">;"
</CardContent>
                  <div>;
</div>"
                    <h3 className="font-medium">Reason</h3>;"
                    <p>{disputeReasonLabels[dispute && dispute.reason_code as any] || dispute && dispute.reason_code}</p>;
                  </div>;
                  <div>;
</div>"
                    <h3 className="font-medium">Description</h3>;""
                    <p className="whitespace-pre-wrap">{dispute && dispute.description}</p>;"
                  </div>;
                  <div>;
</div>"
                    <h3 className="font-medium">Project</h3>;""
                    <p>{dispute && dispute.project?.title || "Unknown Project"}</p>;""
                    <p className="text-sm text-muted-foreground">{dispute && dispute.project?.scope_summary}</p>;"
                  </div>;
                    <div>;
</div>"
                      <h3 className="font-medium">Related Milestone</h3>;""
                      <p className="text-sm">Milestone ID: {dispute && dispute.milestone_id}</p>;"
                    </div>;
                  <div>;
</div>"
                    <h3 className="font-medium">Timeline</h3>;""
                    <ul className="space-y-2 mt-2">;"
</ul>"
                      <li className="flex gap-2 items-center">;"
</li>"
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1</Badge>;""
                        <span>Created on {format(new Date(dispute && dispute.created_at), "MMM d, yyyy 'at' h:mm a")}</span>;"
                      </li>;"
                        <li className="flex gap-2 items-center">;"
</li>"
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>;"
                          <span>Under review</span>;
                        </li>;"
                        <li className="flex gap-2 items-center">;"
</li>"
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">;"
</Badge>
                          </Badge>;"
                          <span>Resolved on {format(new Date(dispute && dispute.resolved_at), "MMM d, yyyy 'at' h:mm a")}</span>;"
                        </li>;

                    </ul>;
                  </div>;
                </CardContent>;
              </Card>;

                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle>Resolution</CardTitle>;
                  </CardHeader>;
                  <CardContent>;
</CardContent>"
                    <p className="whitespace-pre-wrap">{dispute && dispute.resolution_summary}</p>;""
                      <div className="mt-4">;"
</div>
                        <Badge>;
</Badge>
                        </Badge>;
                      </div>;
                  </CardContent>;
                </Card>;
                          </Badge>;"
                          <span > Resolved on {format (new Date (dispute.resolved_at), "MMM d, yyyy 'at' h:mm a")}</span>;"
                        </li>)}
                    </ul>;
                  </div>;
                </CardContent>;
              </Card>;
                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle > Resolution</CardTitle>;
                  </CardHeader>;
                  <CardContent>;
</CardContent>"
                    <p className="whitespace - pre - wrap">{dispute.resolution_summary}</p>;""
                      <div className="mt - 4">;"
</div>
                        <Badge>;
</Badge>
                        </Badge>;
                      </div>)}
                  </CardContent>;
                </Card>)}
            </TabsContent>;"
            <TabsContent value="messages" className="space - y-6">;"
</TabsContent>
              <Card>;
</Card>
                <CardHeader>;
</CardHeader>
                  <CardTitle > Messages</CardTitle>;
                  <CardDescription > Communication regarding this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;
</CardContent>"
                  <div className="space - y-6 max - h-[600px] overflow - y-auto p - 2">;"
</div>"
                      <div className="text - center py - 12">;"
</div>"
                        <MessageSquare className="mx - auto h - 12 w - 12 text - muted - foreground mb - 2" />;"
</MessageSquare>"
                        <p className="text - muted - foreground">No messages yet</p>;"
                      </div>) : ("
            <TabsContent value="messages" className="space-y-6">;"
</TabsContent>
              <Card>;
</Card>
                <CardHeader>;
</CardHeader>
                  <CardTitle>Messages</CardTitle>;
                  <CardDescription>Communication regarding this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;
</CardContent>"
                  <div className="space-y-6 max-h-[600px] overflow-y-auto p-2">;"
</div>"
                      <div className="text-center py-12">;"
</div>"
                        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" />;"
</MessageSquare>"
                        <p className="text-muted-foreground">No messages yet</p>;"
                      </div>;"
                                <div className="flex items-center gap-2 mb-2">;"
</div>"
                                  <Avatar className="h-6 w-6">;"
</Avatar>
                                    <AvatarImage src={msg && msg.user_profile?.avatar_url} />;
</AvatarImage>
                                    <AvatarFallback>;
</AvatarFallback>
                                    </AvatarFallback>;
                                  </Avatar>;"
                                  <span className="text-sm font-medium">;"
</span>
                                  </span>;"
                                  <span className="text-xs opacity-70">;"
</span>
                                  </span>;
                                </div>;"
                                <p className="whitespace-pre-wrap">{msg && msg.message}</p>;"
                              </div>;
                            </div>;
                  </div>;
                </CardContent>;
                <CardFooter>;
</CardFooter>"
                  <div className="w-full space-y-4">;"
</div>
                    <Textarea;"
                      placeholder="Type your message here...""
                      value={message})
                      onChange={(e) => setMessage(e && e.target.value)}
</Textarea>
                            <div;
                              key={msg.id}"
                              className={`flex ${isCurrentUser ? 'justify - end' : 'justify - start'}`}'

                            >;
</div>
                              <div;
                                className={`max - w-[80%] ${

                                  isCurrentUser;'
                                    ? 'bg - primary text - primary - foreground';''
                                    : 'bg - muted';'
                                } p - 4 rounded - lg`}
                              >;
</div>'
                                <div className="flex items - center gap - 2 mb - 2">;"
</div>"
                                  <Avatar className="h - 6 w - 6">;"
</Avatar>
                                    <AvatarImage src={msg.user_profile?.avatar_url} />;
</AvatarImage>
                                    <AvatarFallback>;
</AvatarFallback>
                                    </AvatarFallback>;
                                  </Avatar>;"
                                  <span className="text - sm font - medium">;"
</span>
                                  </span>;"
                                  <span className="text - xs opacity - 70">;"
</span>
                                  </span>;
                                </div>;"
                                <p className="whitespace - pre - wrap">{msg.message}</p>;"

                              </div>;
                            </div>);
                  </div>;
                </CardContent>;

                <CardFooter>;
</CardFooter>"
                  <div className="w - full space - y-4">;"
</div>
                    <Textarea;"
                      placeholder="Type your message here...";"
                      value={message}
                      on_change={(e) => set_message (e.target.value)}
</Textarea>"
                    <div className="flex justify - end">;"
</div>
                      <Button on_click={handleSendMessage} disabled={is_sending || !message.trim ()}>;
</Button>
                      </Button>;

                    </div>;
                  </div>;
                </CardFooter>;
              </Card>;

            </TabsContent>;"
            <TabsContent value="attachments">;"
</TabsContent>
              <Card>;
</Card>
                <CardHeader>;
</CardHeader>
                  <CardTitle > Attachments</CardTitle>;
                  <CardDescription > Files related to this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;
</CardContent>"
                  <div className="text - center py - 12">;"
</div>"
                    <Download className="mx - auto h - 12 w - 12 text - muted - foreground mb - 2" />;"
</Download>"
                    <p className="text - muted - foreground">No attachments available</p>;"
                  </div>;
                </CardContent>;
              </Card>;
            </TabsContent>;"
              <TabsContent value="admin" className="space - y-6">;"
</TabsContent>
                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle > Admin Actions</CardTitle>;
                    <CardDescription > Handle this dispute as an administrator</CardDescription>;
                  </CardHeader>;"
                  <CardContent className="space - y-6">;"
</CardContent>
                    <div>;
</div>"
                      <h3 className="font - medium mb - 2">Change Status</h3>;""
                      <div className="flex gap - 2">;"
</div>
                        <Button;"
                          variant="outline";""
                          on_click={() => handleStatusChange ("open")}"
</Button>
                        </Button>;
                        <Button;"
                          variant="outline";""
                          on_click={() => handleStatusChange ("under_review")}"
</Button>
                        </Button>;
                        <Button;"
                          variant="outline";""
                          on_click={() => handleStatusChange ("closed")}"
</Button>
                        </Button>;
                      </div>;
                    </div>;
                      <div>;
</div>"
                        <h3 className="font - medium mb - 2">Resolve Dispute</h3>;""
                        <div className="space - y-4">;"
</div>
                          <Textarea;"
                            placeholder="Enter resolution summary...";"
                            value={resolution.summary}


;
                    <div>;
</Textarea>"
                      <h3 className="font-medium mb-2">Admin Notes</h3>;""
                      <div className="space-y-4 max-h-[300px] overflow-y-auto p-2">;"
</div>"
                          <div key={msg.id} className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900">;"
</div>"
                            <div className="flex items-center justify-between mb-2">;"
</div>"
                              <div className="flex items-center gap-2">;"
</div>"
                                <Avatar className="h-6 w-6">;"
</Avatar>
                                  <AvatarImage src={msg.user_profile?.avatar_url} />;
</AvatarImage>
                                  <AvatarFallback>;
</AvatarFallback>
                                  </AvatarFallback>
                                </Avatar>"
                                <span className="text-sm font-medium">"
</span>
                                </span>
                              </div>"
                              <span className="text-xs opacity-70">"
</span>
                              </span>
                            </div>"
                            <p className="whitespace-pre-wrap text-sm">{msg.message}</p>"
                          </div>"
                          <p className="text-sm text-muted-foreground italic">No admin notes yet</p>"
                      </div>"
                      <div className="mt-4 space-y-4">"
</div>
                        <Textarea;"
                          placeholder="Add an admin note (only visible to administrators)...""
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
</Textarea>
                        <Button;"
                          variant="outline""
                          onClick={() => {
</Button>"
                    <div className="flex justify-end">;"
</div>
                      <Button onClick={handleSendMessage} disabled={isSending || !message && message.trim()}>;
</Button>

                      </Button>;
                    </div>;
                  </div>;
                </CardFooter>;
              </Card>;

            </TabsContent>;"
            <TabsContent value="attachments">;"
</TabsContent>
              <Card>;
</Card>
                <CardHeader>;
</CardHeader>
                  <CardTitle>Attachments</CardTitle>;
                  <CardDescription>Files related to this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;
</CardContent>"
                  <div className="text-center py-12">;"
</div>"
                    <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" />;"
</Download>"
                    <p className="text-muted-foreground">No attachments available</p>;"
                  </div>;
                </CardContent>;
              </Card>;
            </TabsContent>;"
              <TabsContent value="admin" className="space-y-6">;"
</TabsContent>
                <Card>;
</Card>
                  <CardHeader>;
</CardHeader>
                    <CardTitle>Admin Actions</CardTitle>;
                    <CardDescription>Handle this dispute as an administrator</CardDescription>;
                  </CardHeader>;"
                  <CardContent className="space-y-6">;"
</CardContent>
                    <div>;
</div>"
                      <h3 className="font-medium mb-2">Change Status</h3>;""
                      <div className="flex gap-2">;"
</div>
                        <Button;"
                          variant="outline"""
                          onClick={() => handleStatusChange("open")}"
</Button>
                        </Button>;
                        <Button;"
                          variant="outline"""
                          onClick={() => handleStatusChange("under_review")}"
</Button>
                        </Button>;
                        <Button;"
                          variant="outline"""
                          onClick={() => handleStatusChange("closed")}"
</Button>
                        </Button>;
                      </div>;
                    </div>;
                      <div>;
</div>"
                        <h3 className="font-medium mb-2">Resolve Dispute</h3>;""
                        <div className="space-y-4">;"
</div>
                          <Textarea;"
                            placeholder="Enter resolution summary...""
                            value={resolution && resolution.summary}
                            onChange={(e) => setResolution({ ...resolution, summary: e && e.target.value })}
</Textarea>"
                          <div className="grid grid-cols-2 gap-4">;"
</div>
                            <div>;
</div>"
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>;"
                              <select;"
                                className="w-full p-2 border rounded""
                                value={resolution && resolution.resolution_type}
                                onChange={(e) => setResolution({ ...resolution, resolution_type: e && e.target.value })}
</select>"
                                <option value="client_favor">In Client's Favor</option>;''
                                <option value="talent_favor">In Talent's Favor</option>;''
                                <option value="compromise">Compromise</option>;""
                                <option value="dismissed">Dismissed</option>;"
                              </select>;
                            </div>;
                          </div>;
                          <Button onClick={handleResolveDispute}>Resolve Dispute</Button>;
                        </div>;
                      </div>;
                    <div>;
</div>"
                      <h3 className="font-medium mb-2">Admin Notes</h3>;""
                      <div className="space-y-4 max-h-[300px] overflow-y-auto p-2">;"
</div>"
                          <div key={msg && msg.id} className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900">;"
</div>"
                            <div className="flex items-center justify-between mb-2">;"
</div>"
                              <div className="flex items-center gap-2">;"
</div>"
                                <Avatar className="h-6 w-6">;"
</Avatar>
                                  <AvatarImage src={msg && msg.user_profile?.avatar_url} />;
</AvatarImage>
                                  <AvatarFallback>;
</AvatarFallback>
                                  </AvatarFallback>;
                                </Avatar>;"
                                <span className="text-sm font-medium">;"
</span>
                                </span>;
                              </div>;"
                              <span className="text-xs opacity-70">;"
</span>
                              </span>;
                            </div>;"
                            <p className="whitespace-pre-wrap text-sm">{msg && msg.message}</p>;"
                          </div>;
                      </div>;"
                      <div className="mt-4 space-y-4">;"
</div>
                        <Textarea;"
                          placeholder="Add an admin note (only visible to administrators)...";"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
</Textarea>
                        <Button;"
                          variant="outline";"
                          onClick={() => {;
</Button>"
                          <div className="grid grid - cols - 2 gap - 4">;"
</div>
                            <div>;
</div>"
                              <label className="text - sm font - medium mb - 1 block">Resolution Type</label>;"
                              <select;"
                                className="w - full p - 2 border rounded";"
                                value={resolution.resolution_type}
                                on_change={(e) => set_resolution ({ ...resolution, resolution_type: e.target.value })}
</select>"
                                <option value="client_favor">In Client's Favor</option>;''
                                <option value="talent_favor">In Talent's Favor</option>;''
                                <option value="compromise">Compromise</option>;""
                                <option value="dismissed">Dismissed</option>;"
                              </select>;
                            </div>;
                          </div>;
                          <Button on_click={handleResolveDispute}>Resolve Dispute</Button>;
                        </div>;
                      </div>)}
                    <div>;
</div>"
                      <h3 className="font - medium mb - 2">Admin Notes</h3>;""
                      <div className="space - y-4 max - h-[300px] overflow - y-auto p - 2">;"
</div>"
                          <div key={msg.id} className="bg - yellow - 50 border - l-4 border - yellow - 200 p - 4 dark:bg - yellow - 900 / 20 dark:border - yellow - 900">;"
</div>"
                            <div className="flex items - center justify - between mb - 2">;"
</div>"
                              <div className="flex items - center gap - 2">;"
</div>"
                                <Avatar className="h - 6 w - 6">;"
</Avatar>
                                  <AvatarImage src={msg.user_profile?.avatar_url} />;
</AvatarImage>
                                  <AvatarFallback>;
</AvatarFallback>
                                  </AvatarFallback>;
                                </Avatar>;"
                                <span className="text-sm font-medium">;"
</span>
                                </span>;
                              </div>;"
                              <span className="text-xs opacity-70">;"
</span>
                              </span>;
                            </div>;"
                            <p className="whitespace - pre - wrap text - sm">{msg.message}</p>;"
                          </div>))}"
                          <p className="text - sm text - muted - foreground italic">No admin notes yet</p>)}"
                      </div>;"
                      <div className="mt - 4 space - y-4">;"
</div>
                        <Textarea;"
                          placeholder="Add an admin note (only visible to administrators)...";"
                          value={message}
                          on_change={(e) => set_message (e.target.value)}
</Textarea>
                        <Button;"
                          variant="outline";"
                          on_click={() => {
</Button>"
                            <p className="whitespace-pre-wrap text-sm">{msg.message}</p>;"
                          </div>;"
                          <p className="text-sm text-muted-foreground italic">No admin notes yet</p>;"
                      </div>;"
                      <div className="mt-4 space-y-4">;"
</div>
                        <Textarea;"
                          placeholder="Add an admin note (only visible to administrators)...";"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
</Textarea>

                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
          </Tabs>

        </div>"
        <div className="space-y-6">"
</div>
          <Card>
</Card>
            <CardHeader>
</CardHeader>
              <CardTitle>Parties Involved</CardTitle>
            </CardHeader>"
            <CardContent className="space-y-6">"
</CardContent>"
              <div className="flex items-start gap-4">"
</div>"
                <Avatar className="h-10 w-10">"
</Avatar>
                  <AvatarImage src={dispute.client_profile?.avatar_url} />
</AvatarImage>
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <div>
</div>"
                  <p className="font-medium">Client</p>""
                  <p className="text-sm text-muted-foreground">"
</p>
                  </p>
                </div>
              </div>"
              <div className="flex justify-center">"
</div>"
                <ArrowDown className="h-6 w-6 text-muted-foreground" />"
</ArrowDown>
              </div>"
              <div className="flex items-start gap-4">"
</div>"
                <Avatar className="h-10 w-10">"
</Avatar>
                  <AvatarImage src={dispute.talent_profile?.avatar_url} />
</AvatarImage>
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div>
</div>"
                  <p className="font-medium">Talent</p>""
                  <p className="text-sm text-muted-foreground">"
</p>

                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
</Card>
            <CardHeader>
</CardHeader>
              <CardTitle>Case Information</CardTitle>
            </CardHeader>"
            <CardContent className="space-y-4 text-sm">"
</CardContent>"
              <div className="flex justify-between">"
</div>"
                <span className="font-medium">Case ID:</span>""
                <span className="font-mono">{dispute.id}</span>"
              </div>"
              <div className="flex justify-between">"
</div>"
                <span className="font-medium">Created:</span>""
                <span>{format(new Date(dispute.created_at), "MMM d, yyyy")}</span>"
              </div>"
              <div className="flex justify-between">"
</div>"
                <span className="font-medium">Status:</span>"
                <Badge variant={getStatusBadgeVariant(dispute.status)}>
</Badge>
                </Badge>
              </div>"
              <div className="flex justify-between">"
</div>"
                <span className="font-medium">Raised by:</span>""
                <span>{dispute.raised_by === dispute.client_profile?.id ? "Client" : "Talent"}</span>"

              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>"
                          <div key={msg.id} className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900">;"
</div>"
                            <div className="flex items-center justify-between mb-2">;"
</div>"
                              <div className="flex items-center gap-2">;"
</div>"
                                <Avatar className="h-6 w-6">;"
</Avatar>
                                  <AvatarImage src={msg.user_profile?.avatar_url} />;
</AvatarImage>
                                  <AvatarFallback>;
</AvatarFallback>
                                  </AvatarFallback>;
                                </Avatar>;"
                                <span className="text-sm font-medium">;"
</span>
                                </span>;
                              </div>;"
                              <span className="text-xs opacity-70">;"
</span>
                              </span>;
                            </div>;"
                            <p className="whitespace-pre-wrap text-sm">{msg.message}</p>;"
                          </div>;"
                          <p className="text-sm text-muted-foreground italic">No admin notes yet</p>;"
                      </div>;"
                      <div className="mt-4 space-y-4">;"
</div>
                        <Textarea;"
                          placeholder="Add an admin note (only visible to administrators)...";"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
</Textarea>
                        <Button ;"
                          variant="outline" ;"
                          onClick={() => {;
</Button>
                        </Button>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
          </Tabs>;
        </div>;"
        <div className="space-y-6">;"
</div>
          <Card>;
</Card>
            <CardHeader>;
</CardHeader>
              <CardTitle>Parties Involved</CardTitle>;
            </CardHeader>;"
            <CardContent className="space-y-6">;"
</CardContent>"
              <div className="flex items-start gap-4">;"
</div>"
                <Avatar className="h-10 w-10">;"
</Avatar>
                  <AvatarImage src={dispute && dispute.client_profile?.avatar_url} />;
</AvatarImage>
                  <AvatarFallback>C</AvatarFallback>;
                </Avatar>;
                <div>;
</div>"
                  <p className="font-medium">Client</p>;""
                  <p className="text-sm text-muted-foreground">;"
</p>
                  </p>;
                </div>;
              </div>;"
              <div className="flex justify-center">;"
</div>"
                <ArrowDown className="h-6 w-6 text-muted-foreground" />;"
</ArrowDown>
              </div>;"
              <div className="flex items-start gap-4">;"
</div>"
                <Avatar className="h-10 w-10">;"
</Avatar>
                  <AvatarImage src={dispute && dispute.talent_profile?.avatar_url} />;
</AvatarImage>
                  <AvatarFallback>T</AvatarFallback>;
                </Avatar>;
                <div>;
</div>"
                  <p className="font-medium">Talent</p>;""
                  <p className="text-sm text-muted-foreground">;"
</p>
                  </p>;

                </div>;
              </div>;
            </CardContent>;
          </Card>;

          <Card>;
</Card>
            <CardHeader>;
</CardHeader>
              <CardTitle > Case Information</CardTitle>;
            </CardHeader>;"
            <CardContent className="space - y-4 text - sm">;"
</CardContent>"
              <div className="flex justify - between">;"
</div>"
                <span className="font - medium">Case ID:</span>;""
                <span className="font - mono">{dispute.id}</span>;"
              </div>;"
              <div className="flex justify - between">;"
</div>"
                <span className="font - medium">Created:</span>;""
                <span>{format (new Date (dispute.created_at), "MMM d, yyyy")}</span>;"
              </div>;"
              <div className="flex justify - between">;"
</div>"
                <span className="font - medium">Status:</span>;"
                <Badge variant={getStatusBadgeVariant (dispute.status)}>;
</Badge>
                </Badge>;
              </div>;"
              <div className="flex justify - between">;"
</div>"
                <span className="font - medium">Raised by:</span>;""
                <span>{dispute.raised_by === dispute.client_profile?.id ? "Client" : "Talent"}</span>;"
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </div>;
    </div>);
    </div>;"
return (<div className="p-8 text-center"> <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div> <p>Loading dispute details...</p> </div> <p>Dispute not found</p> <Button onClick= {")"
  () => navigate ("/dashboard/disputes")""
}className="mt-4" > Back to Disputes </Button> </div>)"
}</p> </div> Start Review </Button>) "
}</div> </div> <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900"> <Check className="h-4 w-4" /> <AlertTitle>This dispute has been resolved</AlertTitle> <AlertDescription> {"
</Alert>
}</AlertDescription> </Alert>) "
}<div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> <div className="lg:col-span-2"> </TabsList> <TabsContent value="overview" className="space-y-6"> <Card> <CardHeader> <CardTitle>Dispute Details</CardTitle> <CardDescription>Information about this dispute case</CardDescription> </CardHeader> <CardContent className="space-y-4"> <div> <h3 className="font-medium">Reason</h3> <p> {"
</div>"
}</p> </div> <div> <h3 className="font-medium">Description</h3> <p className="whitespace-pre-wrap"> {"
</div>
}</p> </div> <div> </div> {"
  dispute.milestone id && (<div> <h3 className="font-medium">Related Milestone</h3> <p className="text-sm">Milestone ID: {"
</div>)
}</p> </div>) "
}<div> <h3 className="font-medium">Timeline</h3> <ul className="space-y-2 mt-2"> <span>Under review</span> </li>)"
</div>
}</li>) "
}</ul> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Resolution</CardTitle> </CardHeader> <CardContent> <p className="whitespace-pre-wrap"> {"
</Card>
}</p> </Badge> </div>) 
}</CardContent> </Card>) "
}</TabsContent> <TabsContent value="messages" className="space-y-6"> <Card> <CardHeader> <CardTitle>Messages</CardTitle> <CardDescription>Communication regarding this dispute</CardDescription> </CardHeader> <CardContent> <div className="space-y-6 max-h-[600px] overflow-y-auto p-2"> {"
</TabsContent>"
  messages.length === 0 ? (<div className="text-center py-12"> <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground">No messages yet</p> </div>) : (messages .filter (msg => !msg.is admin note) return (<div key= {"
  msg.id;
}className= {
  `flex $ {"
  isCurrentUser ? 'justify-end' : 'justify-start''
}` 
}> <div className= {
  `max-w-[80%] $ {'
  isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-muted''
}p-4 rounded-lg` '
}> <div className="flex items-center gap-2 mb-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {"
</div>
}/> <AvatarFallback> {
</AvatarFallback>"
}</AvatarFallback> </Avatar> <span className="text-sm font-medium"> {"
</span>"
}</span> <span className="text-xs opacity-70"> {"
</span>"
}</span> </div> <p className="whitespace-pre-wrap"> {"
</p>)
}</p> </div> </div>) "
}</div> </CardContent> <CardFooter> <div className="w-full space-y-4" > <Textarea className="min-h-[100px]" disabled= {"
</CardFooter>"
}/> </Button> </div> </div> </CardFooter> </Card> </TabsContent> <TabsContent value="attachments"> <Card> <CardHeader> <CardTitle>Attachments</CardTitle> <CardDescription>Files related to this dispute</CardDescription> </CardHeader> <CardContent> <div className="text-center py-12"> <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground" >No attachments available</p> </div> </CardContent> </Card> </TabsContent> <Card> <CardHeader> <CardTitle>Admin Actions</CardTitle> <CardDescription>Handle this dispute as an administrator</CardDescription> </CardHeader> <CardContent className="space-y-6"> <div> <h3 className="font-medium mb-2">Change Status</h3> <div className="flex gap-2" > <Button > Mark as Open </Button> <Button > Mark as Under Review </Button> <Button > Close Dispute </Button> </div> </div> <h3 className="font-medium mb-2">Resolve Dispute</h3> <div className="space-y-4" > <Textarea placeholder="Enter resolution summary..." value= {"
  resolution.summary;
}onChange= {
  (e) => setResolution ({
  ...resolution, summary: e.target.value;)
}) "
}className="min-h-[100px]" /> <div className="grid grid-cols-2 gap-4"> <div> <label className="text-sm font-medium mb-1 block">Resolution Type</label> <select > <option value="client favor" >In Client's Favor</option> <option value="talent favor" >In Talent's Favor</option> <option value="compromise" >Compromise</option> <option value="dismissed">Dismissed</option> </select> </div> </div> <Button onClick= {"
  handleResolveDispute;
}>Resolve Dispute</Button> </div> </div>) "
}<div> <h3 className="font-medium mb-2">Admin Notes</h3> <div className="space-y-4 max-h-[300px] overflow-y-auto p-2"> {"
</div>
  messages .filter (msg => msg.is admin note) .map ( (msg) => (<div key= {
  msg.id;"
}className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900"> <div className="flex items-center justify-between mb-2"> <div className="flex items-center gap-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {"
</div>
}/> <AvatarFallback> {
</AvatarFallback>"
}</AvatarFallback> </Avatar> <span className="text-sm font-medium"> {"
</span>"
}</span> </div> <span className="text-xs opacity-70"> {"
</span>"
}</span> </div> <p className="whitespace-pre-wrap text-sm"> {"
</p>)
}</p> </div>) ) "
  !messages.some (msg => msg.is admin note) && (<p className="text-sm text-muted-foreground italic">No admin notes yet</p>)""
}</div> <div className="mt-4 space-y-4" > <Textarea;"
</div>
}> Add Admin Note </Button> </div> </div> </CardContent> </Card> </TabsContent>) "
}</Tabs> </div> <div className="space-y-6" > <Card> <CardHeader> <CardTitle>Parties Involved</CardTitle> </CardHeader> </p> </div> </div> <div className="flex justify-center" > <ArrowDown className="h-6 w-6 text-muted-foreground" /> </div> </p> </div> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Case Information</CardTitle> </CardHeader> </div> </CardContent> </Card> </div> </div> </div>)""

