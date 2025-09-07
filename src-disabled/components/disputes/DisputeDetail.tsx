
import {
 Dispute, disputeReasonLabels, DisputeMessage, DisputeStatus, ResolutionType
} from "@/types/disputes",

import { Button } from "@/components/ui/button",;
import { Textarea } from "@/components/ui/textarea",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Separator } from "@/components/ui/separator",;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { format, formatDistanceToNow } from "date-fns",;
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert",;
import { ArrowDown, Check, MessageSquare, Download } from 'lucide-react'
import { useAuth } from "@/hooks/useAuth",;
import { toast } from "sonner",;
export function DisputeDetail() {
  const router = useRouter(),
  const { disputeId } = router.query as { disputeId?: string },
  const { user } = useAuth(),
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes(),

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
  useEffect(() => {
    if (!disputeId) return,

    const loadDisputeData = async () => {
      setIsLoading(true),
      try {
        const disputeData = await getDisputeById(disputeId),
        if (!disputeData) {
          toast.error("Dispute not found"),
          router.push("/dashboard/disputes"),
          return
        }
        setDispute(disputeData),
        const messagesData = await getDisputeMessages(disputeId),
        setMessages(messagesData)
      } catch (error) {
        logErrorToProduction('Error loading dispute data:', { data: error }),
        toast.error("Failed to load dispute")
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
    }
    const success = await resolveDispute(disputeId, {
      resolution_type:
        (resolution.resolution_type as ResolutionType) |'compromise'
    })
    if (success && dispute) {
      setDispute({
      })
    } else {
      toast.error('Failed to resolve dispute')
    }
  }
  const handleSendMessage = async () => {
    setIsSending(true)
    try {
      const success = await addDisputeMessage(disputeId, message, isAdmin)
      if (success) {
        // Refresh messages
        const updatedMessages = await getDisputeMessages(disputeId)
        setMessages(updatedMessages)
        setMessage('')
      }
    } catch (error) {
      logErrorToProduction('Error sending message:', { data: error })
    } finally {
      setIsSending(false)
    }
  }
        resolved_at: new Date().toISOString()})
    } else {
      toast.error("Failed to resolve dispute")
    }
  },

    if (!disputeId || !message.trim()) return,
    setIsSending(true),
    try {
      const success = await addDisputeMessage(disputeId, message, isAdmin),
      if (success) {
        // Refresh messages
        const updatedMessages = await getDisputeMessages(disputeId),
        setMessages(updatedMessages),
        setMessage("")
import React, { useState, useEffect } from "react",;
import { useRouter } from 'next/router',;
import { useDisputes } from "@/hooks/useDisputes",;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
 Dispute, disputeReasonLabels, DisputeMessage, DisputeStatus, ResolutionType;
} from "@/types/disputes",;
import { ArrowDown, Check, MessageSquare, Download } from 'lucide-react';
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
}
    const success = await resolve_dispute (dispute_id, {
      summary: resolution.summary,
      resolution_type:;
        (resolution.resolution_type as,  ResolutionType) || 'compromise','
    });
    // Check condition
if ( {) {
  $2
}
      set_dispute ({
        ...dispute,
        resolution_summary: resolution.summary,
        resolution_type: resolution.resolution_type,
        resolved_at: new Date ().toISOString (),
      });
    } else {
      toast.error ('Failed to resolve dispute');
    }
  }
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
        set_message ('');
      }
    } catch (error) {
      logErrorToProduction ('Error sending message:', { data: error });
    } finally {
      setIsSending (false);
    }
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='p - 8 text - center'>;
        <div className='w - 8 h - 8 mx - auto mb - 4 animate - spin border - 4 border - primary border - t-transparent rounded - full'></div>;
        <p > Loading dispute details...</p>;
      </div>);
  }
import {logErrorToProduction} from '@/utils/productionLogger';
  Dispute,;
  disputeReasonLabels,;
  DisputeMessage,;
  DisputeStatus,;
  ResolutionType,;
} from '@/types/disputes';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format, formatDistanceToNow } from 'date-fns';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

                          }}
                        >
                          Add Admin Note
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </div>
                        >;
                          Add Admin Note;
                        </Button>;
                      </div>;
                    </div>;
                  </CardContent>;
                </Card>;

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Parties Involved</CardTitle>
            </CardHeader>
                </Avatar>
                <div>
                  <p className="font-medium">Talent</p>
                  <p className="text-sm text-muted-foreground">

          </Tabs>;
        </div>;

        <div className='space-y-6'>;
          <Card>;
            <CardHeader>;
              <CardTitle>Parties Involved</CardTitle>;
            </CardHeader>;
            <CardContent className='space-y-6'>;
              <div className='flex items-start gap-4'>;
                <Avatar className='h-10 w-10'>;

                  <AvatarImage
                    src={dispute && dispute.client_profile?.avatar_url}
                    alt={

                      dispute && dispute.client_profile?.display_name || 'Client avatar'
                    }
                  />;
                  <AvatarFallback>C</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className='font-medium'>Client</p>;
                  <p className='text-sm text-muted-foreground'>;
                    {dispute && dispute.client_profile?.display_name || 'Unknown Client'}
                  </p>;
                </div>;
              </div>;

              <div className='flex justify-center'>;
                <ArrowDown className='h-6 w-6 text-muted-foreground' />;
              </div>;

              <div className='flex items-start gap-4'>;
                <Avatar className='h-10 w-10'>;

                  <AvatarImage
                    src={dispute && dispute.talent_profile?.avatar_url}
                    alt={


            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={dispute.client_profile?.avatar_url} alt={dispute.client_profile?.display_name || "Client avatar"} />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Client</p>
                  <p className="text-sm text-muted-foreground">
                    {dispute.client_profile?.display_name || "Unknown Client"}
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
                  <p className="text-sm text-muted-foreground">
                    {dispute.talent_profile?.display_name || "Unknown Talent"}
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
                <span className="font-medium">Created:</span>
                <span>{format(new Date(dispute.created_at), "MMM d, yyyy")}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status:</span>
                <Badge variant={getStatusBadgeVariant(dispute.status)}>
                  {dispute.status.replace('_ ')}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Raised by:</span>
                <span>{dispute.client_profile && dispute.talent_profile && dispute.raised_by === (dispute.client_profile as any).id ? "Client" : dispute.talent_profile && dispute.raised_by === (dispute.talent_profile as any).id ? "Talent" : "Unknown"}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

try {
}catch (error) {
  logErrorToProduction ('Error sending message:', {
  data: error
})
}finally {
  setIsSending (false)
}
if (isLoading) {"
  return (<div className=" p-8 text-center"> <div className=" w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div> <p>Loading dispute details...</p> </div>)
}if (!dispute) {"
  return (<div className=" p-8 text-center"> () => router.push (" /dashboard/disputes") "
}className=" mt-4"> Back to Disputes </Button> </div>)
};"
container mx-auto p-4 space-y-6" > <div className="flex flex-wrap items-center justify-between gap-4" > <div> Start Review </Button>) "
}</div> </div> <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900"> <Check className="h-4 w-4" /> <AlertTitle>This dispute has been resolved</AlertTitle> <AlertDescription> {
  dispute.resolution summary
}</AlertDescription> </Alert>) "
}<div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> <div className="lg:col-span-2"> </TabsList> <TabsContent value="overview" className="space-y-6"> <Card> <CardHeader> <CardTitle>Dispute Details</CardTitle> <CardDescription>Information about this dispute case</CardDescription> </CardHeader> <CardContent className="space-y-4"> <div> <h3 className="font-medium">Reason</h3> <p> {
  disputeReasonLabels[ dispute.reason code ] ?? dispute.reason code "
}</p> </div> <div> <h3 className="font-medium">Description</h3> <p className="whitespace-pre-wrap"> {
  dispute.description
}</p> </div> <div> </div> {"
  dispute.milestone id && (<div> <h3 className="font-medium">Related Milestone</h3> <p className="text-sm">Milestone ID: {
  dispute.milestone id
}</p> </div>) "
}<div> <h3 className="font-medium">Timeline</h3> <ul className="space-y-2 mt-2"> <span>Under review</span> </li>)
}</li>) "
}</ul> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Resolution</CardTitle> </CardHeader> <CardContent> <p className="whitespace-pre-wrap"> {
  dispute.resolution summary
}</p> </Badge> </div>)
}</CardContent> </Card>) "
}</TabsContent> <TabsContent value="messages" className="space-y-6"> <Card> <CardHeader> <CardTitle>Messages</CardTitle> <CardDescription>Communication regarding this dispute</CardDescription> </CardHeader> <CardContent> <div className="space-y-6 max-h-[600px] overflow-y-auto p-2"> {"
  messages.length === 0 ? (<div className="text-center py-12"> <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground">No messages yet</p> </div>) : (messages .filter (msg => !msg.is admin note)
}> <div className= {
  `max-w-[80%] $ {'
  isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-muted'
}p-4 rounded-lg` "
}> <div className="flex items-center gap-2 mb-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {
  msg.user profile?.avatar url
}alt= {"
  msg.user profile?.display name |"User avatar"
}/> <AvatarFallback> {'
  msg.user profile?.display name?.[0] |'?' "
}</AvatarFallback> </Avatar> <span className="text-sm font-medium"> {'
  msg.user profile?.display name |'Unknown User' "
}</span> <span className="text-xs opacity-70"> {'
  format (new Date (msg.created at),  'MMM d, h:mm a') "
}</span> </div> <p className="whitespace-pre-wrap"> {
  msg.message
}</p> </div> </div>)
}) ) "
}</div> </CardContent> <CardFooter> <div className="w-full space-y-4" > <Textarea className="min-h-[100px]" disabled= {
  isSending "
}/> </Button> </div> </div> </CardFooter> </Card> </TabsContent> <TabsContent value="attachments"> <Card> <CardHeader> <CardTitle>Attachments</CardTitle> <CardDescription>Files related to this dispute</CardDescription> </CardHeader> <CardContent> <div className="text-center py-12"> <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground" >No attachments available</p> </div> </CardContent> </Card> </TabsContent> <Card> <CardHeader> <CardTitle>Admin Actions</CardTitle> <CardDescription>Handle this dispute as an administrator</CardDescription> </CardHeader> <CardContent className="space-y-6"> <div> <h3 className="font-medium mb-2">Change Status</h3> <div className="flex gap-2" > <Button > Mark as Open </Button> <Button > Mark as Under Review </Button> <Button > Close Dispute </Button> </div> </div> <h3 className="font-medium mb-2">Resolve Dispute</h3> <div className="space-y-4" > <Textarea placeholder="Enter resolution summary..." value= {
  resolution.summary
}onChange= {
  (e) => setResolution ({
  ...resolution, summary: e.target.value
}) '"
}className="min-h-[100px]" /> <div className="grid grid-cols-2 gap-4"> <div> <label className="text-sm font-medium mb-1 block">Resolution Type</label> <select > <option value="client favor" >In Client's Favor</option> <option value="talent favor" >In Talent's Favor</option> <option value="compromise" >Compromise</option> <option value="dismissed" >Dismissed</option> </select> </div> </div> <Button onClick={
  handleResolveDispute
}>Resolve Dispute</Button> </div> </div>)
}<div> <AvatarFallback> {'
  msg.user profile?.display name?.[0] |'A'
}</AvatarFallback> </Avatar>) "
}</div> <Separator className="my-4" /> <div className="space-y-4" > <Textarea
}> Add Admin Note </Button> </div> </div> </CardContent> </Card> </TabsContent>) "
}</Tabs> </div> <div className="space-y-6"> <Card> <CardHeader> <CardTitle>Parties Involved</CardTitle> </CardHeader> <CardContent className="space-y-6"> <div className="flex items-start gap-4"> <Avatar className="h-10 w-10"> <AvatarImage src= {
  dispute.client profile?.avatar url
}alt= {"
  dispute.client profile?.display name |"Client avatar" "
}/> <AvatarFallback>C</AvatarFallback> </Avatar> <div> <p className="font-medium">Client</p> </p> </div> </div> <div className="flex justify-center"> <ArrowDown className="h-6 w-6 text-muted-foreground" /> </div> <div className="flex items-start gap-4"> <Avatar className="h-10 w-10"> <AvatarImage src= {
  dispute.talent profile?.avatar url
}alt= {"
  dispute.talent profile?.display name |"Talent avatar" "
}/> <AvatarFallback>T</AvatarFallback> </Avatar> <div> <p className="font-medium">Talent</p> </p> </div> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Case Information</CardTitle> </CardHeader> <CardContent className="space-y-4 text-sm"> <div className="flex justify-between"> <span className="font-medium">Case ID:</span> <span className="font-mono"> {
  dispute.id "
}</span> </div> <div className="flex justify-between"> </div> </CardContent> </Card> </div> </div> </div>)
}'"  )
}
;
;
                      dispute && dispute.talent_profile?.display_name || 'Talent avatar'
                    }
                  />;
                  <AvatarFallback>T</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className='font-medium'>Talent</p>;
                  <p className='text-sm text-muted-foreground'>;
                    {dispute && dispute.talent_profile?.display_name || 'Unknown Talent'}
                  </p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;

          <Card>;
            <CardHeader>;
              <CardTitle>Case Information</CardTitle>;
            </CardHeader>;
            <CardContent className='space-y-4 text-sm'>;
              <div className='flex justify-between'>;
                <span className='font-medium'>Case ID:</span>;
                <span className='font-mono'>{dispute && dispute.id}</span>;
              </div>;
              <div className='flex justify-between'>;
                <span className='font-medium'>Created:</span>;
                <span>;
                  {format(new Date(dispute && dispute.created_at), 'MMM d, yyyy')}
                </span>;
              </div>;
              <div className='flex justify-between'>;
                <span className='font-medium'>Status:</span>;
                <Badge variant={getStatusBadgeVariant(dispute && dispute.status)}>;
                  {dispute && dispute.status.replace('_', ' ')}
                </Badge>;
              </div>;
              <div className='flex justify-between'>;
                <span className='font-medium'>Raised by:</span>;
                <span>;
                  {dispute && dispute.client_profile &&;
                  dispute && dispute.talent_profile &&;
                  dispute && dispute.raised_by === (dispute && dispute.client_profile as any).id;
                    ? 'Client';
                    : dispute && dispute.talent_profile &&;
                        dispute && dispute.raised_by === (dispute && dispute.talent_profile as any).id;
                      ? 'Talent';
                      : 'Unknown'}
              </TabsContent>)}
          </Tabs>;
        </div>;
        <div className='space - y-6'>;
          <Card>;
            <CardHeader>;
              <CardTitle > Parties Involved</CardTitle>;
            </CardHeader>;
            <CardContent className='space - y-6'>;
              <div className='flex items - start gap - 4'>;
                <Avatar className='h - 10 w - 10'>;
                  <AvatarImage;
                    src={dispute.client_profile?.avatar_url}
                    alt={
                      dispute.client_profile?.display_name || 'Client avatar';
                    }
                  />;
                  <AvatarFallback > C</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className='font - medium'>Client</p>;
                  <p className='text - sm text - muted - foreground'>;
                    {dispute.client_profile?.display_name || 'Unknown Client'}
                  </p>;
                </div>;
              </div>;
              <div className='flex justify - center'>;
                <ArrowDown className='h - 6 w - 6 text - muted - foreground' />;
              </div>;
              <div className='flex items - start gap - 4'>;
                <Avatar className='h - 10 w - 10'>;
                  <AvatarImage;
                    src={dispute.talent_profile?.avatar_url}
                    alt={
                      dispute.talent_profile?.display_name || 'Talent avatar';
                    }
                  />;
                  <AvatarFallback > T</AvatarFallback>;
                </Avatar>;
                <div>;
                  <p className='font - medium'>Talent</p>;
                  <p className='text - sm text - muted - foreground'>;
                    {dispute.talent_profile?.display_name || 'Unknown Talent'}
                  </p>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
          <Card>;
            <CardHeader>;
              <CardTitle > Case Information</CardTitle>;
            </CardHeader>;
            <CardContent className='space - y-4 text - sm'>;
              <div className='flex justify - between'>;
                <span className='font - medium'>Case ID:</span>;
                <span className='font - mono'>{dispute.id}</span>;
              </div>;
              <div className='flex justify - between'>;
                <span className='font - medium'>Created:</span>;
                <span>;
                  {format (new Date (dispute.created_at), 'MMM d, yyyy')}
                </span>;
              </div>;
              <div className='flex justify - between'>;
                <span className='font - medium'>Status:</span>;
                <Badge variant={getStatusBadgeVariant (dispute.status)}>;
                  {dispute.status.replace ('_', ' ')}
                </Badge>;
              </div>;
              <div className='flex justify - between'>;
                <span className='font - medium'>Raised by:</span>;
                <span>;
                  {dispute.client_profile &&;
                  dispute.talent_profile &&;
                  dispute.raised_by === (dispute.client_profile as any).id;
                    ? 'Client';
                    : dispute.talent_profile &&;
                        dispute.raised_by === (dispute.talent_profile as any).id;
                      ? 'Talent';
                      : 'Unknown'}
                </span>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </div>;

    </div>);

}
;

;
  );

};
}, [disputeId, getDisputeById, getDisputeMessages, router]);

};
const handleResolveDispute = async () => {;
  if (!disputeId) return;
if (!resolution.summary) {;
  ;
}const success = await resolveDispute (disputeId, {;
  summary: resolution.summary;
if (success && dispute) {;
  setDispute ({;
  ...dispute;
resolution summary: resolution.summary;
resolution type: resolution.resolution type;
resolved at: new Date () .toISOString () ;
}) ;
}else {;
  ;

};
const handleSendMessage = async () => {;
  if (!disputeId || !message.trim () ) return;
try {;
  ;

}catch (error) {;
  logErrorToProduction ('Error sending message:', {;
  data: error ;
}) ;
}finally {;
  setIsSending (false) ;

};
if (isLoading) {";
  return (<div className=" p-8 text-center"> <div className=" w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div> <p>Loading dispute details...</p> </div>) ;
}if (!dispute) {";
  return (<div className=" p-8 text-center"> () => router.push (" /dashboard/disputes") ";
}className=" mt-4"> Back to Disputes </Button> </div>) ;


};";
container mx-auto p-4 space-y-6" > <div className="flex flex-wrap items-center justify-between gap-4" > <div> Start Review </Button>) ";
}</div> </div> <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900"> <Check className="h-4 w-4" /> <AlertTitle>This dispute has been resolved</AlertTitle> <AlertDescription> {;
  dispute.resolution summary ;
}</AlertDescription> </Alert>) ";
}<div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> <div className="lg:col-span-2"> </TabsList> <TabsContent value="overview" className="space-y-6"> <Card> <CardHeader> <CardTitle>Dispute Details</CardTitle> <CardDescription>Information about this dispute case</CardDescription> </CardHeader> <CardContent className="space-y-4"> <div> <h3 className="font-medium">Reason</h3> <p> {;
  disputeReasonLabels[ dispute.reason code ] ?? dispute.reason code ";
}</p> </div> <div> <h3 className="font-medium">Description</h3> <p className="whitespace-pre-wrap"> {;
  dispute.description ;
}</p> </div> <div> </div> {";
  dispute.milestone id && (<div> <h3 className="font-medium">Related Milestone</h3> <p className="text-sm">Milestone ID: {;
  dispute.milestone id ;
}</p> </div>) ";
}<div> <h3 className="font-medium">Timeline</h3> <ul className="space-y-2 mt-2"> <span>Under review</span> </li>) ;
}</li>) ";
}</ul> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Resolution</CardTitle> </CardHeader> <CardContent> <p className="whitespace-pre-wrap"> {;
  dispute.resolution summary ;
}</p> </Badge> </div>) ;
}</CardContent> </Card>) ";
}</TabsContent> <TabsContent value="messages" className="space-y-6"> <Card> <CardHeader> <CardTitle>Messages</CardTitle> <CardDescription>Communication regarding this dispute</CardDescription> </CardHeader> <CardContent> <div className="space-y-6 max-h-[600px] overflow-y-auto p-2"> {";
  messages.length === 0 ? (<div className="text-center py-12"> <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground">No messages yet</p> </div>) : (messages .filter (msg => !msg.is admin note) 
}> <div className= {;
  `max-w-[80%] $ {';
  isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-muted' ;
}p-4 rounded-lg` ";
}> <div className="flex items-center gap-2 mb-2"> <Avatar className="h-6 w-6"> <AvatarImage src= {;
  msg.user profile?.avatar url ;
}alt= {";
  msg.user profile?.display name || "User avatar" ;
}/> <AvatarFallback> {';
  msg.user profile?.display name?.[0] || '?' ";
}</AvatarFallback> </Avatar> <span className="text-sm font-medium"> {';
  msg.user profile?.display name || 'Unknown User' ";
}</span> <span className="text-xs opacity-70"> {';
  format (new Date (msg.created at),  'MMM d, h:mm a') ";
}</span> </div> <p className="whitespace-pre-wrap"> {;
  msg.message ;
}</p> </div> </div>) ;
}) ) ";
}</div> </CardContent> <CardFooter> <div className="w-full space-y-4" > <Textarea className="min-h-[100px]" disabled= {;
  isSending ";
}/> </Button> </div> </div> </CardFooter> </Card> </TabsContent> <TabsContent value="attachments"> <Card> <CardHeader> <CardTitle>Attachments</CardTitle> <CardDescription>Files related to this dispute</CardDescription> </CardHeader> <CardContent> <div className="text-center py-12"> <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" /> <p className="text-muted-foreground" >No attachments available</p> </div> </CardContent> </Card> </TabsContent> <Card> <CardHeader> <CardTitle>Admin Actions</CardTitle> <CardDescription>Handle this dispute as an administrator</CardDescription> </CardHeader> <CardContent className="space-y-6"> <div> <h3 className="font-medium mb-2">Change Status</h3> <div className="flex gap-2" > <Button > Mark as Open </Button> <Button > Mark as Under Review </Button> <Button > Close Dispute </Button> </div> </div> <h3 className="font-medium mb-2">Resolve Dispute</h3> <div className="space-y-4" > <Textarea placeholder="Enter resolution summary..." value= {;
  resolution.summary ;
}onChange= {;
  (e) => setResolution ({;
  ...resolution, summary: e.target.value ;
}) '";
}className="min-h-[100px]" /> <div className="grid grid-cols-2 gap-4"> <div> <label className="text-sm font-medium mb-1 block">Resolution Type</label> <select > <option value="client favor" >In Client's Favor</option> <option value="talent favor" >In Talent's Favor</option> <option value="compromise" >Compromise</option> <option value="dismissed" >Dismissed</option> </select> </div> </div> <Button onClick={;
  handleResolveDispute ;
}>Resolve Dispute</Button> </div> </div>) ;
}<div> <AvatarFallback> {';
  msg.user profile?.display name?.[0] || 'A' ;
}</AvatarFallback> </Avatar>) ";
}</div> <Separator className="my-4" /> <div className="space-y-4" > <Textarea ;


}> Add Admin Note </Button> </div> </div> </CardContent> </Card> </TabsContent>) ";
}</Tabs> </div> <div className="space-y-6"> <Card> <CardHeader> <CardTitle>Parties Involved</CardTitle> </CardHeader> <CardContent className="space-y-6"> <div className="flex items-start gap-4"> <Avatar className="h-10 w-10"> <AvatarImage src= {;
  dispute.client profile?.avatar url ;
}alt= {";
  dispute.client profile?.display name || "Client avatar" ";
}/> <AvatarFallback>C</AvatarFallback> </Avatar> <div> <p className="font-medium">Client</p> </p> </div> </div> <div className="flex justify-center"> <ArrowDown className="h-6 w-6 text-muted-foreground" /> </div> <div className="flex items-start gap-4"> <Avatar className="h-10 w-10"> <AvatarImage src= {;
  dispute.talent profile?.avatar url ;
}alt= {";
  dispute.talent profile?.display name || "Talent avatar" ";
}/> <AvatarFallback>T</AvatarFallback> </Avatar> <div> <p className="font-medium">Talent</p> </p> </div> </div> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Case Information</CardTitle> </CardHeader> <CardContent className="space-y-4 text-sm"> <div className="flex justify-between"> <span className="font-medium">Case ID:</span> <span className="font-mono"> {;
  dispute.id ";
}</span> </div> <div className="flex justify-between"> </div> </CardContent> </Card> </div> </div> </div>) ;
}'"
origin/cursor/automate-test-improve-and-merge-code-2533
