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

            <TabsContent value="overview" className="space-y-6">;

              <Card>;

                <CardHeader>;

                  <div>;
                    <h3 className="font-medium">Timeline</h3>;
                    <ul className="space-y-2 mt-2">;
                      <li className="flex gap-2 items-center">;
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1</Badge>;

                        <li className="flex gap-2 items-center">;
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>;

                          <span>Under review</span>;
                        </li>;
                      )}
                      ;
                      {dispute.resolved_at && (;
                        <li className="flex gap-2 items-center">;
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">;
                            {dispute.status !== "open" ? "3" :"2"}
                          </Badge>;
                          <span>Resolved on {format(new Date(dispute.resolved_at), "MMM d, yyyy 'at' h:mm a")}</span>;
                        </li>;
                      )}
                    </ul>;

                <Card>;
                  <CardHeader>;
                    <CardTitle>Resolution</CardTitle>;
                  </CardHeader>;
                  <CardContent>;

                        <Badge>;

                      </div>;                    )}

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

                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    <div className="flex justify-end">;"
                      <Button onClick={handleSendMessage} disabled={isSending || !message.trim()}>;

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

                                <option value="client_favor">In Client's Favor</option>;
                                <option value="talent_favor">In Talent's Favor</option>;
                                <option value="compromise">Compromise</option>;""
                                <option value="dismissed">Dismissed</option>;"
                              </select>;

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
<<<<<<< HEAD


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

=======
    </div>;
  ),export function DisputeDetail() {//useParams may be untyped in this environment, so avoid passing a //type argument and cast the result instead to prevent TS2347 errors. const {disputeId;
}= useParams () as {disputeId?: string;
}const navigate = useNavigate ()const {user;
}= useAuth ()const {getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage;
}= useDisputes ()if (!disputeId) return;
const loadDisputeData = async () => {setIsLoading (true)try {const disputeData = await getDisputeById (disputeId)if (!disputeData) {}setDispute (disputeData)const messagesData = await getDisputeMessages (disputeId)setMessages (messagesData)}catch (error) {}finally {setIsLoading (false)}
}}, [disputeId, navigate, getDisputeById, getDisputeMessages])}
}}const success = await resolveDispute (disputeId, resolution)if (success && dispute) {setDispute ({...dispute;
  ),; export function DisputeDetail() {
  //useParams may be untyped in this environment, so avoid passing a //type argument and cast the result instead to prevent TS2347 errors. const {
  }
  disputeId 
}= useParams () as {
  }
  disputeId?: string 
};
const navigate = useNavigate ();
const {
  }
  user 
}= useAuth ();
  }
  getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage 
}= useDisputes ();
if (!disputeId) return;
const loadDisputeData = async () => {
  }
  setIsLoading (true);
try {
  }
  const disputeData = await getDisputeById (disputeId);
if (!disputeData) {
}setDispute (disputeData);
const messagesData = await getDisputeMessages (disputeId);
setMessages (messagesData) 
}catch (error) {
}finally {
  }
  setIsLoading (false) 
}
};
}, [disputeId, navigate, getDisputeById, getDisputeMessages]);
}
};
}const success = await resolveDispute (disputeId, resolution);
if (success && dispute) {
  }
  setDispute ({
  ...dispute;
}
"status": "resolved";"
resolution "summary": resolution.summary;
resolution "type": resolution.resolution type;
resolved "at": new Date () .toISOString ()})}
}setIsSending (true)try {}finally {setIsSending (false)}
}return (<div className="p-8 text-center"> <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div> <p>Loading dispute details...</p> </div> <p>Dispute not found</p> <Button onClick= {() => navigate ("/dashboard/disputes")}className="mt-4" > Back to Disputes </Button> </div>)}"
}
}formatDistanceToNow (new Date (dispute.created at), {"addSuffix": true;
})}</p> </div> Start Review </Button>)}</div> </div> <Alert className="bg-green-50 border-green-200 "dark":bg-green-900/20 "dark":border-green-900"> <Check className="h-4 w-4" /> <AlertTitle>This dispute has been resolved</AlertTitle> <AlertDescription> {dispute.resolution summary;"
}</AlertDescription> </Alert>)}<div className="grid grid-cols-1 "lg":grid-cols-3 gap-6"> <div className=""lg":col-span-2"> </TabsList> <TabsContent value="overview" className="space-y-6"> <Card> <CardHeader> <CardTitle>Dispute Details</CardTitle> <CardDescription>Information about this dispute case</CardDescription> </CardHeader> <CardContent className="space-y-4"> <div> <h3 className="font-medium">Reason</h3> <p> {disputeReasonLabels[dispute.reason code as any] || dispute.reason code;"
}</p> </div> <div> <h3 className="font-medium">Description</h3> <p className="whitespace-pre-wrap"> {dispute.description;"
}</p> </div> <div> </div> {dispute.milestone id && (<div> <h3 className="font-medium">Related Milestone</h3> <p className="text-sm">Milestone "ID": {dispute.milestone id;"
}</p> </div>)}<div> <h3 className="font-medium">Timeline</h3> <ul className="space-y-2 mt-2"> <span>Under review</span> </li>)}</li>)}</ul> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Resolution</CardTitle> </CardHeader> <CardContent> <p className="whitespace-pre-wrap"> {dispute.resolution summary;"
}</p> </Badge> </div>)}</CardContent> </Card>)}</TabsContent> <TabsContent value="messages" className="space-y-6"> <Card> <CardHeader> <CardTitle>Messages</CardTitle> <CardDescription>Communication regarding this dispute</CardDescription> </CardHeader> <CardContent> <div className="space-y-6 max-h-[600px] overflow-y-auto p-2"> {messages.length === 0 ? (<div className="text-center py-12"> <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground">No messages yet</p> </div>) : (messages .filter (msg => !msg.is admin note) return (<div key= {msg.id;"
}className= {`flex $ {isCurrentUser ? 'justify-end' : 'justify-start';'
}`;`}> <div className= {`max-w-[80%] $ {isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-muted';'
}p-4 rounded-lg`;`
}> <div className="flex items-center gap-2 mb-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {msg.user profile?.avatar url;"
} /> <AvatarFallback> {msg.user profile?.display name?.[0] || '?';'
}</AvatarFallback> </Avatar> <span className="text-sm font-medium"> {msg.user profile?.display name || 'Unknown User';'
}</span> <span className="text-xs opacity-70"> {format (new Date (msg.created at), 'MMM d, "h":mm a')}</span> </div> <p className="whitespace-pre-wrap"> {msg.message;"
}</p> </div> </div>)}) )}</div> </CardContent> <CardFooter> <div className="w-full space-y-4" > <Textarea className="min-h-[100px]" disabled= {isSending;"
} /> </Button> </div> </div> </CardFooter> </Card> </TabsContent> <TabsContent value="attachments"> <Card> <CardHeader> <CardTitle>Attachments</CardTitle> <CardDescription>Files related to this dispute</CardDescription> </CardHeader> <CardContent> <div className="text-center py-12"> <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground" >No attachments available</p> </div> </CardContent> </Card> </TabsContent> <Card> <CardHeader> <CardTitle>Admin Actions</CardTitle> <CardDescription>Handle this dispute as an administrator</CardDescription> </CardHeader> <CardContent className="space-y-6"> <div> <h3 className="font-medium mb-2">Change Status</h3> <div className="flex gap-2" > <Button > Mark as Open </Button> <Button > Mark as Under Review </Button> <Button > Close Dispute </Button> </div> </div> <h3 className="font-medium mb-2">Resolve Dispute</h3> <div className="space-y-4" > <Textarea placeholder="Enter resolution summary..." value= {resolution.summary;"
}onChange= {(e) => setResolution ({...resolution, "summary": e.target.value;
})}className="min-h-[100px]" /> <div className="grid grid-cols-2 gap-4"> <div> <label className="text-sm font-medium mb-1 block">Resolution Type</label> <select > <option value="client favor" >In Client's Favor</option> <option value="talent favor" >In Talent's Favor</option> <option value="compromise" >Compromise</option> <option value="dismissed">Dismissed</option> </select> </div> </div> <Button onClick= {handleResolveDispute;"
}>Resolve Dispute</Button> </div> </div>)}<div> <h3 className="font-medium mb-2">Admin Notes</h3> <div className="space-y-4 max-h-[300px] overflow-y-auto p-2"> {messages .filter (msg => msg.is admin note) .map ( (msg) => (<div key= {msg.id;"
}className="bg-yellow-50 border-l-4 border-yellow-200 p-4 "dark":bg-yellow-900/20 "dark":border-yellow-900"> <div className="flex items-center justify-between mb-2"> <div className="flex items-center gap-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {msg.user profile?.avatar url;"
} /> <AvatarFallback> {msg.user profile?.display name?.[0] || 'A';'
}</AvatarFallback> </Avatar> <span className="text-sm font-medium"> {msg.user profile?.display name || 'Admin';'
}</span> </div> <span className="text-xs opacity-70"> {format (new Date (msg.created at), 'MMM d, "h":mm a')}</span> </div> <p className="whitespace-pre-wrap text-sm"> {msg.message;"
}</p> </div>) )}{!messages.some (msg => { return msg.is admin note) && (<p className="text-sm text-muted-foreground italic">No admin notes yet</p>)}</div> <div className="mt-4 space-y-4" > <Textarea; }"
};
setIsSending (true);
try {
}finally {
  }
  setIsSending (false) 
}
};
return (<div className="p-8 text-center"> <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div> <p>Loading dispute details...</p> </div> <p>Dispute not found</p> <Button onClick= {"
  () => navigate ("/dashboard/disputes") "
}className="mt-4" > Back to Disputes </Button> </div>) "
}
}
}> Add Admin Note </Button> </div> </div> </CardContent> </Card> </TabsContent>)}</Tabs> </div> <div className="space-y-6" > <Card> <CardHeader> <CardTitle>Parties Involved</CardTitle> </CardHeader> </p> </div> </div> <div className="flex justify-center" > <ArrowDown className="h-6 w-6 text-muted-foreground" /> </div> </p> </div> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Case Information</CardTitle> </CardHeader> </div> </CardContent> </Card> </div> </div> </div>)}"
>>>>>>> origin/cursor/delete-old-data-records-6bba
