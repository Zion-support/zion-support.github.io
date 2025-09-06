}

    const success = await resolve_dispute (dispute_id, {
      summary: resolution.summary,
      resolution_type:;
        (resolution.resolution_type as ResolutionType) || 'compromise',
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
import {;
  Dispute,;
  disputeReasonLabels,;
  DisputeMessage,;
  DisputeStatus,;
  if (isLoading) {;

      summary: resolution.summary,

  if (isLoading) {

        <Button
          onClick={() => router.push('/dashboard/disputes')}
          className='mt-4'
        >          Back to Disputes
      case 'closed':;
        return 'outline';
      default:;
        return 'default';

            {formatDistanceToNow(new Date(dispute?.created_at || ''), {;
              addSuffix: true,;
            })}
          </p>;
        </div>;

        <div className='flex gap-2'>;

          <Button
            variant='outline'
            onClick={() => router && router.push('/dashboard/disputes')}
          >;
            Back to List;
          </Button>;
          {isAdmin && dispute?.status === 'open' && (;
            <Button onClick={() => handleStatusChange('under_review')}>              Start Review;
            </Button>;


  return (
        <div className='flex gap-2'>
          <Button
            variant='outline'
            onClick={() => router.push('/dashboard/disputes')}
          >
            Back to List
          </Button>
          {isAdmin && dispute?.status === 'open' && (
            <Button onClick={() => handleStatusChange('under_review')}>              Start Review
        <div className='flex gap-2'>
          <Button
            variant='outline'
            onClick={() => router.push('/dashboard/disputes')}
          >
            Back to List
          </Button>
          {isAdmin && dispute?.status === 'open' && (
            <Button onClick={() => handleStatusChange('under_review')}>              Start Review

          <AlertTitle>This dispute has been resolved</AlertTitle>

      {dispute.status === "resolved" && dispute.resolution_summary && (
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <Check className="h-4 w-4" />
          <AlertTitle>This dispute has been resolved</AlertTitle>

ursor/fix-website-loading-errors-and-merge-6662

                  
                  <div>
                            className='h-6 w-6 rounded-full p-0 flex items-center justify-center'>;
                            {dispute && dispute.status !== 'open' ? '3' : '2'}
                          </Badge>;
                          <span>;
                            Resolved on{' '}

                            {format(;
                              new Date(dispute && dispute.resolved_at),;
                              "MMM d, yyyy 'at' h:mm a";

                            )}
                          </span>;
                        </li>;

                  
                  <div>
                    <h3 className="font-medium">Timeline</h3>
                    <ul className="space-y-2 mt-2">
                      <li className="flex gap-2 items-center">
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1</Badge>
                        <span>Created on {format(new Date(dispute.created_at), "MMM d, yyyy 'at' h:mm a")}</span>
                      </li>

                      {dispute.resolved_at && (

                          <span>Resolved on {format(new Date(dispute.resolved_at), "MMM d, yyyy 'at' h:mm a")}</span>

                        </li>
                      )}

                          {format (
                            new Date (dispute.created_at),
                            "MMM d, yyyy 'at' h:mm a")}
                        </span>;
                      </li>;
                      {dispute.status !== 'open' && (
                        <li className='flex gap - 2 items - center'>;
                          <Badge;
                            variant='outline';
                            className='h - 6 w - 6 rounded - full p - 0 flex items - center justify - center';
                          >;
                            2;
                          </Badge>;
                          <span > Under review</span>;
                        </li>)}
                      {dispute.resolved_at && (
                        <li className='flex gap - 2 items - center'>;
                          <Badge;
                            variant='outline';
                            className='h - 6 w - 6 rounded - full p - 0 flex items - center justify - center';
                          >;
                            {dispute.status !== 'open' ? '3' : '2'}
                          </Badge>;
                          <span>;
                    <p className='whitespace-pre-wrap'>
                      {dispute.resolution_summary}
                    </p>
                                    />;

                        .map((msg) => {
                          const isCurrentUser = user?.id === msg.user_id,
                          return (
                            <div
                              key={msg.id}
                              className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                            >;
                              <div;
                                className={`max-w-[80%] ${;
                                  isCurrentUser;
                                    ? 'bg-primary text-primary-foreground';
                                    : 'bg-muted';
                                } p-4 rounded-lg`}
                              >;
                                <div className="flex items-center gap-2 mb-2">;
                                  <Avatar className="h-6 w-6">;
                                    <AvatarImage src={msg.user_profile?.avatar_url} alt={msg.user_profile?.display_name || "User avatar"} />;

                                    <AvatarFallback>;
                                      {msg && msg.user_profile?.display_name?.[0] ||;
                                  </span>;
                                </div>;
                                <p className='whitespace-pre-wrap'>;
                                  {msg && msg.message}
                                </p>;
                              </div>;
                            </div>;
                          );
                        });



            <TabsContent value='attachments'>

                        disabled={isSending || !message && message.trim()}>;
                        {isSending ? 'Sending...' : 'Send Message'}
                    </p>;
                    {dispute.resolution_type && (
                      <div className='mt - 4'>;
                        <Badge>;
                          Resolution:{' '}
                          {dispute.resolution_type.replace ('_', ' ')}
                        </Badge>;
                      </div>)}
                  </CardContent>;
                </Card>)}
            </TabsContent>;
            <TabsContent value='messages' className='space - y-6'>;
              <Card>;
                <CardHeader>;
                  <CardTitle > Messages</CardTitle>;
                  <CardDescription>;
                    Communication regarding this dispute;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <div className='space - y-6 max - h-[600px] overflow - y-auto p - 2'>;
                    {messages.length === 0 ? (
                      <div className='text - center py - 12'>;
                        <MessageSquare className='mx - auto h - 12 w - 12 text - muted - foreground mb - 2' />;
                        <p className='text - muted - foreground'>No messages yet</p>;
                      </div>) : (
                      messages;
                        .filter (msg => !msg.is_admin_note);
                        .map (msg => {
                          const isCurrentUser = user?.id === msg.user_id;
                                                      >;
                              <div;
                                className={`max - w-[80%] ${
                                  isCurrentUser;
                                    ? 'bg - primary text - primary - foreground';
                                    : 'bg - muted';
                                } p - 4 rounded - lg`}
                              >;
                                <div className='flex items - center gap - 2 mb - 2'>;
                                  <Avatar className='h - 6 w - 6'>;
                                    <AvatarImage;
                                      src={msg.user_profile?.avatar_url}
                                      alt={
                                        msg.user_profile?.display_name ||;
                                        'User avatar';
                                      }
                                    />;
                                    <AvatarFallback>;
                                      {msg.user_profile?.display_name?.[0] ||;
                                        '?'}
                                    </AvatarFallback>;
                                  </Avatar>;
                                  <span className='text - sm font - medium'>;
                                    {msg.user_profile?.display_name ||;
                                      'Unknown User'}
                                  </span>;
                                  <span className='text - xs opacity - 70'>;
                                    {format (
                                      new Date (msg.created_at),
                                      'MMM d, h:mm a')}
                                  </span>;
                                </div>;
                                <p className='whitespace - pre - wrap'>;
                                  {msg.message}
                                </p>;
                              </div>;
                            </div>);
                        }))}
                  </div>;
                </CardContent>;
                <CardFooter>;
                  <div className='w - full space - y-4'>;
                    <Textarea;
                      placeholder='Type your message here...';
                      value={message}
                      on_change={e => set_message (e.target.value)}
                      className='min - h-[100px]';
                      disabled={is_sending}                    />;
                    <div className='flex justify - end'>;
                      <Button;
                        on_click={handleSendMessage}
                        disabled={is_sending || !message.trim ()}
                      >;
                        {is_sending ? 'Sending...' : 'Send Message'}

                      </Button>;
                    </div>;
                  </div>;
                </CardFooter>;
              </Card>;
            </TabsContent>;

            <TabsContent value='attachments'>;
              <Card>;
                <CardHeader>;
                  <CardTitle > Attachments</CardTitle>;

                  <CardDescription>;
                    Files related to this dispute;
                  </CardDescription>;
                </CardHeader>;
                <CardContent>;

                  <div className='text - center py - 12'>;
                    <Download className='mx - auto h - 12 w - 12 text - muted - foreground mb - 2' />;
                    <p className='text - muted - foreground'>;

                      No attachments available;
                    </p>;
                  </div>;
                </CardContent>;
              </Card>;
            </TabsContent>;

            {is_admin && (
              <TabsContent value='admin' className='space - y-6'>;
                <Card>;
                  <CardHeader>;
                    <CardTitle > Admin Actions</CardTitle>;

                    <CardDescription>;
                      Handle this dispute as an administrator;
                    </CardDescription>;
                  </CardHeader>;


                      <h3 className="font-medium mb-2">Change Status</h3>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          onClick={() => handleStatusChange("open")}
                          disabled={dispute.status === "open"}
                        >
                          Mark as Open
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => handleStatusChange("under_review")}
                          disabled={dispute.status === "under_review"}
                        >
                          Mark as Under Review
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => handleStatusChange("closed")}
                          disabled={dispute.status === "closed"}


                        >
                          Mark as Open
                        </Button>
                            onChange={e =>
                              setResolution({
                                ...resolution
                                summary: e.target.value
                              })
                            }
                            className='min-h-[100px]'                          />
                          <div className='grid grid-cols-2 gap-4'>
                                className="w-full p-2 border rounded"
                          onChange={e => setAdminNote(e && e.target.value)}                        />;

                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-4">
                        <Textarea
                          placeholder="Add an admin note (only visible to administrators)..."
                          value={adminNote}
                          onChange={(e) => setAdminNote(e.target.value)}
                        />



                              addDisputeMessage(disputeId!, adminNote, true).then(() => {
const handleResolveDispute = async () => {

;

;
