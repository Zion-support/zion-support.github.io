
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
} from '@/components/ui/card'
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format, formatDistanceToNow } from "date-fns";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
}</span> </div> <p className="whitespace-pre-wrap"> {msg.message}</p> </div> </div>)
}) ) "
}</div> </CardContent> <CardFooter> <div className="w-full space-y-4" > <Textarea className="min-h-[100px]" disabled= {
  isSending "
}/> </Button> </div> </div> </CardFooter> </Card> </TabsContent> <TabsContent value="attachments"> <Card> <CardHeader> <CardTitle>Attachments</CardTitle> <CardDescription>Files related to this dispute</CardDescription> </CardHeader> <CardContent> <div className="text-center py-12"> <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground" >No attachments available</p> </div> </CardContent> </Card> </TabsContent> <Card> <CardHeader> <CardTitle>Admin Actions</CardTitle> <CardDescription>Handle this dispute as an administrator</CardDescription> </CardHeader> <CardContent className="space-y-6"> <div> <h3 className="font-medium mb-2">Change Status</h3> <div className="flex gap-2" > <Button > Mark as Open </Button> <Button > Mark as Under Review </Button> <Button > Close Dispute </Button> </div> </div> <h3 className="font-medium mb-2">Resolve Dispute</h3> <div className="space-y-4" > <Textarea placeholder="Enter resolution summary..." value= {resolution.summary}onChange= {(e) => setResolution ({
  ...resolution summary: e.target.value}) '"
