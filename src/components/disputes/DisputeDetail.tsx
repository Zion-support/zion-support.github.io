
import React { useState useEffect } from "react";
import { useRouter } from "next/router";
import { useDisputes } from "@/hooks/useDisputes";
import { logErrorToProduction } from "@/utils/productionLogger";
import { Dispute;
disputeReasonLabels;
, DisputeMessage;
DisputeStatus;
, ResolutionType } from "@/types/disputes";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
CardTitle
} from '@/components/ui/card'
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format, formatDistanceToNow } from "date-fns";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowDown, Check, MessageSquare, Download } from "lucide-react";
}</div> </div> <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900"> <Check className="h-4 w-4" /> <AlertTitle>This dispute has been resolved</AlertTitle> <AlertDescription> {dispute.resolution summary}</AlertDescription> </Alert>) "
}<div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> <div className="lg:col-span-2"> </TabsList> <TabsContent value="overview" className="space-y-6"> <Card> <CardHeader> <CardTitle>Dispute Details</CardTitle> <CardDescription>Information about this dispute case</CardDescription> </CardHeader> <CardContent className="space-y-4"> <div> <h3 className="font-medium">Reason</h3> <p> {
  disputeReasonLabels[ dispute.reason code ] ?? dispute.reason code "
}</p> </div> <div> <h3 className="font-medium">Description</h3> <p className="whitespace-pre-wrap"> {dispute.description}</p> </div> <div> </div> {"
}</ul> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Resolution</CardTitle> </CardHeader> <CardContent> <p className="whitespace-pre-wrap"> {dispute.resolution summary}</p> </Badge> </div>)
}> <div className="flex items-center gap-2 mb-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {msg.user profile?.avatar url}alt= {"
}</span> </div> <p className="whitespace-pre-wrap"> {msg.message}</p> </div> </div>)
}) ) "
}</div> </CardContent> <CardFooter> <div className="w-full space-y-4" > <Textarea className="min-h-[100px]" disabled= {
  isSending "
}/> </Button> </div> </div> </CardFooter> </Card> </TabsContent> <TabsContent value="attachments"> <Card> <CardHeader> <CardTitle>Attachments</CardTitle> <CardDescription>Files related to this dispute</CardDescription> </CardHeader> <CardContent> <div className="text-center py-12"> <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground" >No attachments available</p> </div> </CardContent> </Card> </TabsContent> <Card> <CardHeader> <CardTitle>Admin Actions</CardTitle> <CardDescription>Handle this dispute as an administrator</CardDescription> </CardHeader> <CardContent className="space-y-6"> <div> <h3 className="font-medium mb-2">Change Status</h3> <div className="flex gap-2" > <Button > Mark as Open </Button> <Button > Mark as Under Review </Button> <Button > Close Dispute </Button> </div> </div> <h3 className="font-medium mb-2">Resolve Dispute</h3> <div className="space-y-4" > <Textarea placeholder="Enter resolution summary..." value= {resolution.summary}onChange= {(e) => setResolution ({
  ...resolution summary: e.target.value}) '"
}className="min-h-[100px]" /> <div className="grid grid-cols-2 gap-4"> <div> <label className="text-sm font-medium mb-1 block">Resolution Type</label> <select > <option value="client favor" >In Client's Favor</option> <option value="talent favor" >In Talent's Favor</option> <option value="compromise" >Compromise</option> <option value="dismissed" >Dismissed</option> </select> </div> </div> <Button onClick={handleResolveDispute}>Resolve Dispute</Button> </div> </div>)
}</Tabs> </div> <div className="space-y-6"> <Card> <CardHeader> <CardTitle>Parties Involved</CardTitle> </CardHeader> <CardContent className="space-y-6"> <div className="flex items-start gap-4"> <Avatar className="h-10 w-10"> <AvatarImage src= {dispute.client profile?.avatar url}alt= {"
  dispute.client profile?.display name |"Client avatar" "
}/> <AvatarFallback>C</AvatarFallback> </Avatar> <div> <p className="font-medium">Client</p> </p> </div> </div> <div className="flex justify-center"> <ArrowDown className="h-6 w-6 text-muted-foreground" /> </div> <div className="flex items-start gap-4"> <Avatar className="h-10 w-10"> <AvatarImage src= {dispute.talent profile?.avatar url}alt= {"