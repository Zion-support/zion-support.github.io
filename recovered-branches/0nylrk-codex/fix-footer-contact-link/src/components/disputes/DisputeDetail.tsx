  const [dispute, setDispute] = useState<any>(null);
  const [messages, setMessages] = useState<DisputeMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
      setIsLoading(true);
      try {;
        const disputeData = await getDisputeById(disputeId);
        if (!disputeData) {;
          toast && toast.error("Dispute not found");
          navigate("/dashboard/disputes");
          return;
        }
        setDispute(disputeData);
        const messagesData = await getDisputeMessages(disputeId);
        setMessages(messagesData);
      } catch (error) {;
        console && console.error("Error loading dispute data:", error);
        toast && toast.error("Failed to load dispute");
      } finally {;
        setIsLoading(false);
      }
    const success = await updateDisputeStatus(disputeId, status);
    if (success && dispute) {;
      setDispute({ ...dispute, status });
    }
    setIsSending(true);
    try {;
      const success = await addDisputeMessage(disputeId, message, isAdmin);
      if (success) {;
        // Refresh messages;
        const updatedMessages = await getDisputeMessages(disputeId);
        setMessages(updatedMessages);
        setMessage("");
      }
    } catch (error) {;
      console && console.error("Error sending message:", error);
    } finally {;
      setIsSending(false);
    }
    return (
      <div className="p-8 text-center">;
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>;
        <p>Loading dispute details...</p>;
      </div>;
    );
  }
    return (
      <div className="p-8 text-center">;
        <p>Dispute not found</p>;
        <Button onClick={() => navigate("/dashboard/disputes")} className="mt-4">;
          Back to Disputes;
        </Button>;
      </div>;
    );
  }
=======
import React, { useState, useEffect } from './react';
import { use_params, use_navigate } from './react-router-dom';
import { use_disputes } from '@/hooks / use_disputes';
import { disputeReasonLabels, DisputeMessage, DisputeStatus } from '@/types / disputes';
import { Button } from '@/components / ui / button';
import { Textarea } from '@/components / ui / textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Separator } from '@/components / ui / separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { format, formatDistanceToNow } from './date - fns';
import { Alert, AlertDescription, AlertTitle } from '@/components / ui / alert';
import { ShieldAlert, ArrowDown, Check, X, MessageSquare, Download } from './lucide-react';
import { use_auth } from '@/hooks / use_auth';
import { toast } from './sonner';
export /**
 * DisputeDetail - Function description
 */
function DisputeDetail() {
  // use_params may be untyped in this environment, so avoid passing a;
  // type argument and cast the result instead to prevent TS2347 errors.;
  const { dispute_id } = use_params () as { dispute_id?: string }
  const navigate = use_navigate ();
  const { user } = use_auth ();
  const { getDisputeById, updateDisputeStatus, resolve_dispute, getDisputeMessages, addDisputeMessage } = use_disputes ();
;
  const [dispute, set_dispute] = useState < any>(null);
  const [messages, set_messages] = useState < DisputeMessage[]>([]);
  const [is_loading, setIsLoading] = useState (true);
  const [message, set_message] = useState ("");
  const [is_sending, setIsSending] = useState (false);
  const [resolution, set_resolution] = useState ({
    summary: "",
    resolution_type: "compromise"}),
  const [active_tab, setActiveTab] = useState ("overview");
;
  // Check if user is admin (placeholder - implement proper admin check);
  const is_admin = user?.user_type === "admin";
;
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
    const loadDisputeData = async () => {
      setIsLoading (true);
      try {
        const dispute_data = await getDisputeById (dispute_id);
        // Check condition
if ( {) {
  $2
}
          toast.error ("Dispute not found");
          navigate ("/dashboard / disputes");
          return;
        }
        set_dispute (dispute_data);
;
        const messages_data = await getDisputeMessages (dispute_id);
        set_messages (messages_data);
      } catch (error) {
        console.error ("Error loading dispute data:", error);
        toast.error ("Failed to load dispute");
      } finally {
        setIsLoading (false);
      }
    }
;
    loadDisputeData ();
  }, [dispute_id, navigate, getDisputeById, getDisputeMessages]);
;
  const handleStatusChange = async (status: DisputeStatus) => {
    // Check condition
if (return, ) {
  $2
}
    const success = await updateDisputeStatus (dispute_id, status);
    // Check condition
if ( {) {
  $2
}
      set_dispute ({ ...dispute, status });
    }
  }
;
  const handleResolveDispute = async () => {
    // Check condition
if (return) {
  $2
}
    // Check condition
if ( {) {
  $2
}
      toast.error ("Please provide a resolution summary");
      return;
    }
    const success = await resolve_dispute (dispute_id, resolution);
    // Check condition
if ( {) {
  $2
}
      set_dispute ({
        ...dispute,
        status: "resolved",
        resolution_summary: resolution.summary,
        resolution_type: resolution.resolution_type,
        resolved_at: new Date ().toISOString ();
      });
    }
  }
;
  const handleSendMessage = async () => {
    if () return) {
  $2
}
    setIsSending (true);
    try {
      const success = await addDisputeMessage (dispute_id, message, is_admin);
      // Check condition
if ( {) {
  $2
}
        // Refresh messages;
        const updated_messages = await getDisputeMessages (dispute_id);
        set_messages (updated_messages);
        set_message ("");
      }
    } catch (error) {
      console.error ("Error sending message:", error);
    } finally {
      setIsSending (false);
    }
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="p - 8 text - center">;
        <div className="w - 8 h - 8 mx - auto mb - 4 animate - spin border - 4 border - primary border - t-transparent rounded - full"></div>;
        <p > Loading dispute details...</p>;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="p - 8 text - center">;
        <p > Dispute not found</p>;
        <Button on_click={() => navigate ("/dashboard / disputes")} className="mt - 4">;
          Back to Disputes;
        </Button>;
      </div>);
  }
  const getStatusBadgeVariant = (status: DisputeStatus) =>: any {
    switch (status) {
      case "open": return "default";
      case "under_review": return "secondary",
      case "resolved": return "outline", // Changed from './success'; to "outline";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      case "closed": return "outline";
      default: return "default";
    }
  }
      {dispute.status === "resolved" && dispute.resolution_summary && (
        <Alert className="bg - green - 50 border - green - 200 dark:bg - green - 900 / 20 dark:border - green - 900">;
          <Check className="h - 4 w - 4" />;
          <AlertTitle > This dispute has been resolved</AlertTitle>;
          <AlertDescription>;
            {dispute.resolution_summary}
                      {dispute.resolved_at && (
                        <li className="flex gap - 2 items - center">;
                          <Badge variant="outline" className="h - 6 w - 6 rounded - full p - 0 flex items - center justify - center">;
                            {dispute.status !== "open" ? "3" : "2"}
                    )}
                  </CardContent>;
                </Card>;
              )}
                    {messages.length === 0 ? (
                      <div className="text - center py - 12">;
                        <MessageSquare className="mx - auto h - 12 w - 12 text - muted - foreground mb - 2" />;
                        <p className="text - muted - foreground">No messages yet</p>;
                      </div>) : (
                      messages;
                        .filter (msg => !msg.is_admin_note);
                        .map ((msg) => {
                          const isCurrentUser = user?.id === msg.user_id;
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
                    {messages && messages.length === 0 ? (;
                      <div className="text-center py-12">;
                        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" />;
                        <p className="text-muted-foreground">No messages yet</p>;
                      </div>;
                    ) : (;
                      messages;
                        .filter(msg => !msg && msg.is_admin_note);
                        .map((msg) => {;
                          const isCurrentUser = user?.id === msg && msg.user_id;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                          return (
                    )}
                  </div>;
                </CardContent>;
                <CardFooter>;
                  <div className="w-full space-y-4">;
                    <Textarea
                      placeholder="Type your message here..."
                      value={message}
                      onChange={(e) => setMessage(e && e.target.value)}
                      className="min-h-[100px]";
                      disabled={isSending}
                    {dispute.status !== "resolved" && (
                      <div>;
                        <h3 className="font - medium mb - 2">Resolve Dispute</h3>;
                        <div className="space - y-4">;
                          <Textarea;
                            placeholder="Enter resolution summary...";
                            value={resolution.summary}
=======
                            on_change={(e) => set_resolution ({ ...resolution, summary: e.target.value })}
                            className="min - h-[100px]";
                          />;
                          <div className="grid grid - cols - 2 gap - 4">;
                            <div>;
                              <label className="text - sm font - medium mb - 1 block">Resolution Type</label>;
                              <select;
                                className="w - full p - 2 border rounded";
                                value={resolution.resolution_type}
                                on_change={(e) => set_resolution ({ ...resolution, resolution_type: e.target.value })}
                              >;
                                <option value="client_favor">In Client's Favor</option>;
                                <option value="talent_favor">In Talent's Favor</option>;
                                <option value="compromise">Compromise</option>;
                                <option value="dismissed">Dismissed</option>;
                              </select>;
                            </div>;
                          </div>;
                          <Button on_click={handleResolveDispute}>Resolve Dispute</Button>;
                        </div>;
                      </div>)}
                    <div>;
                      <h3 className="font - medium mb - 2">Admin Notes</h3>;
                      <div className="space - y-4 max - h-[300px] overflow - y-auto p - 2">;
                        {messages;
                          .filter (msg => msg.is_admin_note);
                          .map ((msg) => (
                          <div key={msg.id} className="bg - yellow - 50 border - l-4 border - yellow - 200 p - 4 dark:bg - yellow - 900 / 20 dark:border - yellow - 900">;
                            <div className="flex items - center justify - between mb - 2">;
                              <div className="flex items - center gap - 2">;
                                <Avatar className="h - 6 w - 6">;
                                  <AvatarImage src={msg.user_profile?.avatar_url} />;
                                  <AvatarFallback>;
                                    {msg.user_profile?.display_name?.[0] || 'A'}
                                  </AvatarFallback>;
                                </Avatar>;
                                <span className="text - sm font - medium">;
                                  {msg.user_profile?.display_name || 'Admin'}
                                </span>;
                              </div>;
                              <span className="text - xs opacity - 70">;
                                {format (new Date (msg.created_at), 'MMM d, h:mm a')}
                              </span>;
                            </div>;
                            <p className="whitespace - pre - wrap text - sm">{msg.message}</p>;
                          </div>))}
                        {!messages.some (msg => msg.is_admin_note) && (
                          <p className="text - sm text - muted - foreground italic">No admin notes yet</p>)}
                      </div>;
                      <div className="mt - 4 space - y-4">;
                        <Textarea;
                          placeholder="Add an admin note (only visible to administrators)...";
                          value={message}
                          on_change={(e) => set_message (e.target.value)}
                        />;
                        <Button;
                          variant="outline";
                          on_click={() => {
                            if () {) {
  $2
}
                              addDisputeMessage (dispute_id!, message, true).then (() => {
                                getDisputeMessages (dispute_id!).then (set_messages);
                                set_message ("");
                              });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                            }
                          }}
                        >;
                          Add Admin Note;
                        </Button>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;
                  </p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </div>;
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
