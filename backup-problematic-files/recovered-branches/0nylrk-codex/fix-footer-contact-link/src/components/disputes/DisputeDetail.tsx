
import React, { useState, useEffect } from "react",;""
import { useParams, useNavigate } from "react-router-dom",;""
import { useDisputes } from "@/hooks/useDisputes",;""
import { disputeReasonLabels, DisputeMessage, DisputeStatus } from "@/types/disputes",;""
import { Button } from "@/components/ui/button",;""
import { Textarea } from "@/components/ui/textarea",;""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;""
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;""
import { Badge } from "@/components/ui/badge",;""
import { Separator } from "@/components/ui/separator",;""
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;""
import { format, formatDistanceToNow } from "date-fns",;""
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",;""
import { ShieldAlert, ArrowDown, Check, X, MessageSquare, Download } from "lucide-react",;""
import { useAuth } from "@/hooks/useAuth",;""
import { toast } from "sonner",;"
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">;"
        <div className="lg:col-span-2">;"
          <Tabs value={activeTab} onValueChange={setActiveTab}>;
            <TabsList className="mb-6">;"
              <TabsTrigger value="overview">Overview;""
              <TabsTrigger value="messages">Messages;""
              <TabsTrigger value="attachments">Attachments;""
              {isAdmin && <TabsTrigger value="admin">Admin Notes}"
            <TabsContent value="overview" className="space-y-6">;"

              <Card>;

                <CardHeader>;

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
                      <p className="text-sm">Milestone ID:{dispute.milestone_id}</p>;"
                    <h3 className="font-medium">Timeline</h3>;""
                    <ul className="space-y-2 mt-2">;"
</ul>"
                      <li className="flex gap-2 items-center">;"
</li>"
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1;""
                        <span>Created on {format(new Date(dispute.created_at), "MMM d, yyyy 'at' h:mm a")}</span>;"
                      </li>;"
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2;"
                          <span>Under review</span>;
                        </li>;
                    </ul>;


                    <CardTitle>Resolution;
                  <CardContent>;
                    <p className="whitespace-pre-wrap">{dispute.resolution_summary}</p>;""
                      <div className="mt-4">;"
                        <Badge>;

                      </div>;                    )}
            <TabsContent value="messages" className="space-y-6">;"



                  <CardTitle>Messages;
                  <CardDescription>Communication regarding this dispute;
                  <div className="space-y-6 max-h-[600px] overflow-y-auto p-2">;"
                      <div className="text-center py-12">;"
                        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" />;"
                        <p className="text-muted-foreground">No messages yet</p>;"
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
                                <p className="whitespace-pre-wrap">{msg.message}</p>;"
                <CardFooter>;
                  <div className="w-full space-y-4">;"
                    <Textarea;"
                      placeholder="Type your message here...";"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    <div className="flex justify-end">;"
                      <Button onClick={handleSendMessage} disabled={isSending || !message.trim()}>;

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
                            value={resolution.summary}
                            onChange={(e) => setResolution({ ...resolution, summary:e.target.value })}
                          <div className="grid grid-cols-2 gap-4">;"
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>;"
                              <select ;"
                                className="w-full p-2 border rounded";"
                                value={resolution.resolution_type}
                                onChange={(e) => setResolution({ ...resolution, resolution_type:e.target.value })}
</select>"
                                <option value="client_favor">In Client's Favor</option>;
                                <option value="talent_favor">In Talent's Favor</option>;
                                <option value="compromise">Compromise</option>;""
                                <option value="dismissed">Dismissed</option>;"
                              </select>;
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
}</div> </div> <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900"> <Check className="h-4 w-4" /> <AlertTitle>This dispute has been resolved <AlertDescription> {"

} ) "
}<div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> <div className="lg:col-span-2">  <TabsContent value="overview" className="space-y-6"> <Card> <CardHeader> <CardTitle>Dispute Details <CardDescription>Information about this dispute case  <CardContent className="space-y-4"> <div> <h3 className="font-medium">Reason</h3> <p> {"
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
  msg.id;"
}className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900"> <div className="flex items-center justify-between mb-2"> <div className="flex items-center gap-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {"
}</span> </div> <span className="text-xs opacity-70"> {"
}</span> </div> <p className="whitespace-pre-wrap text-sm"> {"
}</p> </div>) ) "
  !messages.some (msg => msg.is admin note) && (<p className="text-sm text-muted-foreground italic">No admin notes yet</p>)""
}</div> <div className="mt-4 space-y-4" > <Textarea;"
}> Add Admin Note  </div> </div>   ) "
} </div> <div className="space-y-6" > <Card> <CardHeader> <CardTitle>Parties Involved  </p> </div> </div> <div className="flex justify-center" > <ArrowDown className="h-6 w-6 text-muted-foreground" /> </div> </p> </div> </div>   <Card> <CardHeader> <CardTitle>Case Information  </div>   </div> </div> </div>)""`;