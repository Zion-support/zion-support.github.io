
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
{dispute.resolution_summary}
          </AlertDescription>;
        </Alert>;
      )}
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
<div>;
                    <h3 className="font-medium">Timeline</h3>;
                    <ul className="space-y-2 mt-2">;
                      <li className="flex gap-2 items-center">;
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1</Badge>;

                        <li className="flex gap-2 items-center">;
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>;
                          <span>Under review</span>;
                        </li>;

                    </ul>;
</div>;
                </CardContent>;
              </Card>;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Resolution</CardTitle>;
                  </CardHeader>;
                  <CardContent>;

                        <Badge>;

                      </div>;                    )}
</CardContent>;
                </Card>;
              )}
            </TabsContent>;
            ;
            <TabsContent value="messages" className="space-y-6">;
              <Card>;
                <CardHeader>;
                  <CardTitle>Messages</CardTitle>;
                  <CardDescription>Communication regarding this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <div className="space-y-6 max-h-[600px] overflow-y-auto p-2">;
                      <div className="text-center py-12">;
                        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" />;
                        <p className="text-muted-foreground">No messages yet</p>;
                      </div>;

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
<span className="text-xs opacity-70">;
                                    {format(new Date(msg.created_at), 'MMM d, h:mm a')}
                                  </span>;
                                </div>;
                                <p className="whitespace-pre-wrap">{msg.message}</p>;
                              </div>;
                            </div>;
                          ),;
                        });
                    )}
                  </div>;
                </CardContent>;
                <CardFooter>;
                  <div className="w-full space-y-4">;
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    <div className="flex justify-end">;"
                      <Button onClick={handleSendMessage} disabled={isSending || !message.trim()}>;
{isSending ? "Sending..." :"Send Message"}
                      </Button>;
                    </div>;
                  </div>;
                </CardFooter>;
              </Card>;
            </TabsContent>;
                  </div>;
                </CardContent>;
              </Card>;
            </TabsContent>;

                          disabled={dispute.status === "open"}
                        >;
                          Mark as Open;
                        </Button>;

                          disabled={dispute.status === "under_review"}
                        >;
                          Mark as Under Review;
                        </Button>;

                          disabled={dispute.status === "closed"}
                        >;
                          Close Dispute;
                        </Button>;
                      </div>;
                    </div>;

                            value={resolution.summary}
                            onChange={(e) => setResolution({ ...resolution, summary: e.target.value ;})}
                          <div className="grid grid-cols-2 gap-4">;"
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>;"
                              <select ;"
                                className="w-full p-2 border rounded";"
                                value={resolution.resolution_type}
onChange={(e) => setResolution({ ...resolution, resolution_type:e.target.value })}
                              >;
                                <option value="client_favor">In Client's Favor</option>;
                                <option value="talent_favor">In Talent's Favor</option>;
                                <option value="compromise">Compromise</option>;""
                                <option value="dismissed">Dismissed</option>;"
                              </select>;
</div>;
                          </div>;
                          <Button onClick={handleResolveDispute}>Resolve Dispute</Button>;
                        </div>;
                      </div>;
                    )}

                    <div>;
                      <h3 className="font-medium mb-2">Admin Notes</h3>;
                      <div className="space-y-4 max-h-[300px] overflow-y-auto p-2">;
                        {messages;

                          }}
                        >;
                          Add Admin Note;
                        </Button>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;

        <div className="space-y-6">;
          <Card>;
            <CardHeader>;
              <CardTitle>Parties Involved</CardTitle>;
            </CardHeader>;
            <CardContent className="space-y-6">;
              <div className="flex items-start gap-4">;
                <Avatar className="h-10 w-10">;

                  <AvatarFallback>C</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className="font-medium">Client</p>;
                  <p className="text-sm text-muted-foreground">;

                  <AvatarFallback>T</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className="font-medium">Talent</p>;
                  <p className="text-sm text-muted-foreground">;

              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </div>;

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
}
