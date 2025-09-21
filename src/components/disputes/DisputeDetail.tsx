import React, { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import { useDisputes } from "@/hooks/useDisputes",
import { logErrorToProduction } from '@/utils/productionLogger',
import { Dispute, disputeReasonLabels, DisputeMessage, DisputeStatus, ResolutionType } from '@/types/disputes',
import { Button } from '@/components/ui/button',
import { Textarea } from '@/components/ui/textarea',
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card',
import { Badge } from '@/components/ui/badge',
import { Separator } from '@/components/ui/separator',
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',
import { format, formatDistanceToNow } from 'date-fns',
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',
import { ArrowDown, Check, MessageSquare, Download } from 'lucide-react',
import { useAuth } from "@/hooks/useAuth",
import { toast } from "sonner",
export function DisputeDetail() {
  const router = useRouter();
  const { disputeId } = router.query;
  const { user } = useAuth();
  const { getDisputeById, getDisputeMessages, resolveDispute } = useDisputes();
  
  const [dispute, setDispute] = useState<Dispute | null>(null);
  const [messages, setMessages] = useState<DisputeMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');
  const [resolution, setResolution] = useState({
    summary: '',
    resolution_type: 'compromise' as ResolutionType});

  useEffect(() => {
    if (disputeId) {
      loadDispute();
  }, [disputeId, getDisputeById, getDisputeMessages, router]);

  const loadDispute = async () => {
    if (!disputeId) return;
    
    try {
      setIsLoading(true);
      const disputeData = await getDisputeById(disputeId as string);
      const messagesData = await getDisputeMessages(disputeId as string);
      
      setDispute(disputeData);
      setMessages(messagesData); catch (error) {
      logErrorToProduction('Error loading dispute:', { error, disputeId });
      toast.error('Failed to load dispute details'); finally {
      setIsLoading(false);
  };

  const handleResolveDispute = async () => {
    if (!disputeId) return;
    if (!resolution.summary) {
      toast.error('Please enter a resolution summary');
      return, }

    const success = await resolveDispute(disputeId as string, {
      summary: resolution.summary,
      resolution_type: resolution.resolution_type});

    if (success && dispute) {
      setDispute({
        ...dispute;
        resolution_summary: resolution.summary,
        resolution_type: resolution.resolution_type,
        resolved_at: new Date().toISOString()});
      toast.success('Dispute resolved successfully');
    } else {
      toast.error('Failed to resolve dispute');
  };

  const handleSendMessage = async () => {
    if (!disputeId || !message.trim()) return;
    
    try {
      setIsSending(true);
      // Simulate sending message
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newMessage: DisputeMessage = {
        id: Date.now().toString(),
        dispute_id: disputeId as string,
        user_id: user?.id || '',
        message: message.trim(),
        created_at: new Date().toISOString(),
        is_admin_note: false,
        user_profile: {
          display_name: user?.name || 'You',
          avatar_url: user?.avatar || ''};
      };
      
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
      toast.success('Message sent'); catch (error) {
      logErrorToProduction('Error sending message:', { error, disputeId });
      toast.error('Failed to send message'); finally {
      setIsSending(false);
  };

  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case 'open':
        return 'default',
      case 'under_review':
        return 'secondary',
      case 'resolved':
        return 'outline',
      case 'closed':
        return 'destructive';
      default: return 'default'}
  };
  const isCurrentUser = (userId: string) => {
    return user?.id === userId};
  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>
        <p>Loading dispute details...</p>
      </div>
    );

  if (!dispute) {
    return (
      <div className="p-8 text-center">
        <p>Dispute not found</p>
        <Button
          onClick={() => router.push('/dashboard/disputes')}
          className="mt-4"
        >
          Back to Disputes
        </Button>
      </div>
    );

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Dispute Details</h1>
          <p className="text-muted-foreground">
            Case ID: {dispute.id}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => router.push('/dashboard/disputes')}
            
          >
            Back to Disputes
          </Button>
          {dispute.status === 'open' && (
            <Button
              onClick={() => {
                // Handle start review
                toast.info('Review started')}}
            >
              Start Review
            </Button>
          )}
        </div>
      </div>

      {dispute.status === 'resolved' && (
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <Check className="h-4 w-4" />
          <AlertTitle>This dispute has been resolved</AlertTitle>
          <AlertDescription>
            {dispute.resolution_summary}
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="attachments">Attachments</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dispute Details</CardTitle>
                  <CardDescription>Information about this dispute case</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Reason</h3>
                    <p>{disputeReasonLabels[dispute.reason_code] ?? dispute.reason_code}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="whitespace-pre-wrap">{dispute.description}</p>
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
                      <li className="flex justify-between">
                        <span>Dispute created</span>
                        <span className="text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date(dispute.created_at))} ago
                        </span>
                      </li>
                      {dispute.status === 'under_review' && (
                        <li className="flex justify-between">
                          <span>Under review</span>
                          <span className="text-sm text-muted-foreground">Now</span>
                        </li>
                      )}
                      {dispute.resolved_at && (
                        <li className="flex justify-between">
                          <span>Resolved</span>
                          <span className="text-sm text-muted-foreground">
                            {formatDistanceToNow(new Date(dispute.resolved_at))} ago
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {dispute.resolution_summary && (
                <Card>
                  <CardHeader>
                    <CardTitle>Resolution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{dispute.resolution_summary}</p>
                    <div className="mt-4">
                      <Badge >
                        {dispute.resolution_type?.replace('_', ' ')}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="messages" className="space-y-6">
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
                        .map((msg) => (
                          <div
                            key={msg.id}
                            className={`max-w-[80%] ${
                              isCurrentUser(msg.user_id) ? 'bg-primary text-primary-foreground' : 'bg-muted'
                            } p-4 rounded-lg`}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage
                                  src={msg.user_profile?.avatar_url}
                                  alt={msg.user_profile?.display_name || 'User avatar'}
                                />
                                <AvatarFallback>
                                  {msg.user_profile?.display_name?.[0] || '?'}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium">
                                {msg.user_profile?.display_name || 'Unknown User'}
                              </span>
                              <span className="text-xs opacity-70">
                                {format(new Date(msg.created_at), 'MMM d h:mm a')}
                              </span>
                            </div>
                            <p className="whitespace-pre-wrap">{msg.message}</p>
                          </div>
                        ))
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full space-y-4">
                    <Textarea
                      className="min-h-[100px]"
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={isSending}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!message.trim() || isSending}
                    >
                      {isSending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="attachments">
              <Card>
                <CardHeader>
                  <CardTitle>Attachments</CardTitle>
                  <CardDescription>Files related to this dispute</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">No attachments available</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Parties Involved</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={dispute.client_profile?.avatar_url}
                    alt={dispute.client_profile?.display_name || 'Client avatar'}
                  />
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Client</p>
                  <p className="text-sm text-muted-foreground">
                    {dispute.client_profile?.display_name || 'Unknown Client'}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={dispute.talent_profile?.avatar_url}
                    alt={dispute.talent_profile?.display_name || 'Talent avatar'}
                  />
                  <AvatarFallback>T</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Talent</p>
                  <p className="text-sm text-muted-foreground">
                    {dispute.talent_profile?.display_name || 'Unknown Talent'}
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
                <span>
                  {format(new Date(dispute.created_at), 'MMM d yyyy')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status:</span>
                <Badge>
                  {dispute.status.replace('_', ' ')}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Raised by: </span>
                <span>
                  {dispute.client_profile &&
                  dispute.talent_profile &&
                  dispute.raised_by === (dispute.client_profile as any).id
                    ? 'Client'
                    : dispute.talent_profile &&
                        dispute.raised_by === (dispute.talent_profile as any).id
                      ? 'Talent'
                      : 'Unknown'}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )}
