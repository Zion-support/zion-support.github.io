

        </Button>
      </div>
    )
  }



  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Dispute Case</h1>
            <Badge variant={getStatusBadgeVariant(dispute.status)}>
              {dispute.status.replace('_ ')}
            </Badge>
          </div>


          <p className="text-muted-foreground">
            Reported {formatDistanceToNow(new Date(dispute?.created_at || ""), { addSuffix: true })}
          </p>
        </div>



      {dispute.status === "resolved" && dispute.resolution_summary && (
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <Check className="h-4 w-4" />
          <AlertTitle>This dispute has been resolved</AlertTitle>


            
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dispute Details</CardTitle>
                  <CardDescription>Information about this dispute case</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Reason</h3>
                    <p>{
                      disputeReasonLabels[
                        dispute.reason_code
                      ] ?? dispute.reason_code
                    }</p>
                  </div>
                  

                  

                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="whitespace-pre-wrap">{dispute.description}</p>
                  </div>

                    <h3 className="font-medium">Description</h3>
                    <p className="whitespace-pre-wrap">{dispute.description}</p>
                  </div>
                  <div>
                    <h3 className='font-medium'>Project</h3>
                    <p>{dispute.project?.title |'Unknown Project'}</p>
                    <p className='text-sm text-muted-foreground'>
                      {dispute.project?.scope_summary}
                    </p>
                  </div>


                  


                  <div>
                    <h3 className='font-medium'>Description</h3>
                    <p className='whitespace-pre-wrap'>{dispute.description}</p>
                  </div>

    }
  }
  return (
    <div className='container mx - auto p - 4 space - y-6'>;
      <div className='flex flex - wrap items - center justify - between gap - 4'>;
        <div>;
          <div className='flex items - center gap - 2'>;
            <h1 className='text - 2xl font - bold'>Dispute Case</h1>;
            <Badge variant={getStatusBadgeVariant (dispute.status)}>;
              {dispute.status.replace ('_', ' ')}
            </Badge>;
          </div>;
          <p className='text - muted - foreground'>;
            Reported{' '}
            {formatDistanceToNow (new Date (dispute?.created_at || ''), {
              add_suffix: true,
            })}
          </p>;
        </div>;
        <div className='flex gap - 2'>;
          <Button;
            variant='outline';
            on_click={() => router.push ('/dashboard / disputes')}
          >;
            Back to List;
          </Button>;
          {is_admin && dispute?.status === 'open' && (
            <Button on_click={() => handleStatusChange ('under_review')}>              Start Review;
            </Button>)}
        </div>;
      </div>;
      {dispute.status === 'resolved' && dispute.resolution_summary && (
        <Alert className='bg - green - 50 border - green - 200 dark:bg - green - 900 / 20 dark:border - green - 900'>;
          <Check className='h - 4 w - 4' />;
          <AlertTitle > This dispute has been resolved</AlertTitle>;
          <AlertDescription>{dispute.resolution_summary}</AlertDescription>;
        </Alert>)}
      <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 6'>;
        <div className='lg:col - span - 2'>;
          <Tabs value={active_tab} onValueChange={setActiveTab}>;
            <TabsList className='mb - 6'>;
              <TabsTrigger value='overview'>Overview</TabsTrigger>;
              <TabsTrigger value='messages'>Messages</TabsTrigger>;
              <TabsTrigger value='attachments'>Attachments</TabsTrigger>;
              {is_admin && <TabsTrigger value='admin'>Admin Notes</TabsTrigger>}
            </TabsList>;
            <TabsContent value='overview' className='space - y-6'>;
              <Card>;
                <CardHeader>;
                  <CardTitle > Dispute Details</CardTitle>;
                  <CardDescription>;
                    Information about this dispute case;
                  </CardDescription>;
                </CardHeader>;
                <CardContent className='space - y-4'>;
                  <div>;
                    <h3 className='font - medium'>Reason</h3>;
                    <p>;
                      {disputeReasonLabels[dispute.reason_code] ??;
                        dispute.reason_code}
                    </p>;
                  </div>;
                  <div>;
                    <h3 className='font - medium'>Description</h3>;
                    <p className='whitespace - pre - wrap'>{dispute.description}</p>;
                  </div>;
                  <div>;
                    <h3 className='font - medium'>Project</h3>;
                    <p>{dispute.project?.title || 'Unknown Project'}</p>;
                    <p className='text - sm text - muted - foreground'>;
                      {dispute.project?.scope_summary}
                    </p>;
                  </div>;


                  
                  <div>
                    <h3 className="font-medium">Project</h3>
                    <p>{dispute.project?.title || "Unknown Project"}</p>
                    <p className="text-sm text-muted-foreground">{dispute.project?.scope_summary}</p>
                  </div>


                  
                  <div>
                    <h3 className="font-medium">Timeline</h3>
                    <ul className="space-y-2 mt-2">
                      <li className="flex gap-2 items-center">
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1</Badge>
                        <span>Created on {format(new Date(dispute.created_at), "MMM d, yyyy 'at' h:mm a")}</span>
                      </li>


                      {dispute.resolved_at && (
                        <li className="flex gap-2 items-center">
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
                            {dispute.status !== "open" ? "3" : "2"}
                          </Badge>


                      </div>
                    ) : (
                      messages
                        .filter(msg => !msg.is_admin_note)


                              <div
                                className={`max-w-[80%] ${
                                  isCurrentUser
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted'


                      disabled={isSending}
                    />
                    <div className="flex justify-end">
                      <Button onClick={handleSendMessage} disabled={isSending || !message.trim()}>
                        {isSending ? "Sending..." : "Send Message"}


                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>


                  </div>
                </CardContent>
              </Card>
            </TabsContent>


                    <div>
                      <h3 className="font-medium mb-2">Admin Notes</h3>
                      <div className="space-y-4 max-h-[300px] overflow-y-auto p-2">
                        {messages
                          .filter(msg => msg.is_admin_note)

                          .map(msg => (
                            <div
                              key={msg.id}
                              className='bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900'
                            >
                              <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center gap-2'>
                                  <Avatar className='h-6 w-6'>
                                    <AvatarImage
                                      src={msg.user_profile?.avatar_url}
                                      alt={
                                        msg.user_profile?.display_name |
                                        'Admin avatar'
                                      }
                                    />
                                    <AvatarFallback>
                                      {msg.user_profile?.display_name?.[0] |
                                        'A'}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className='text-sm font-medium'>
                                    {msg.user_profile?.display_name |'Admin'}
                                  </span>
                                </div>
                                <span className='text-xs opacity-70'>
                                  {format(
                                    new Date(msg.created_at)
                                    'MMM d, h:mm a'
                                  )}                                </span>
                      onChange={e => setMessage(e && e.target.value)}
                      className='min-h-[100px]';
                      disabled={isSending}                    />;
                    <div className='flex justify-end'>;
                      <Button
                        onClick={handleSendMessage}
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
                  <div className="w-full space-y-4">;
                    <Textarea;
                      placeholder="Type your message here...";
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[100px]";
                      disabled={isSending}
                    />;
                    <div className="flex justify-end">;
                      <Button onClick={handleSendMessage} disabled={isSending || !message.trim()}>;
                        {isSending ? "Sending..." :"Send Message"}
                      </Button>;
                    </div>;
                  </div>;
                </CardFooter>;
              </Card>;
            </TabsContent>;
            ;
            <TabsContent value="attachments">;
              <Card>;
                <CardHeader>;
                  <CardTitle>Attachments</CardTitle>;
                  <CardDescription>Files related to this dispute</CardDescription>;
                </CardHeader>;
                <CardContent>;
                  <div className="text-center py-12">;
                    <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" />;
                    <p className="text-muted-foreground">No attachments available</p>;
                  </div>;
                </CardContent>;
              </Card>;
            </TabsContent>;



                          .map((msg) => (
                          <div key={msg.id} className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage src={msg.user_profile?.avatar_url} alt={msg.user_profile?.display_name || "Admin avatar"} />
                                  <AvatarFallback>
                                    {msg.user_profile?.display_name?.[0] || 'A'}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-medium">
                                  {msg.user_profile?.display_name || 'Admin'}
                                </span>


                            <p className="whitespace-pre-wrap text-sm">{msg.message}</p>
                          </div>
                        ))}
                        


                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-4">
                        <Textarea
                          placeholder="Add an admin note (only visible to administrators)..."
                          value={adminNote}
                          onChange={(e) => setAdminNote(e.target.value)}
                        />
                        <Button
                          variant="outline"
                          onClick={() => {
                            if (adminNote.trim()) {

                              addDisputeMessage(
                                disputeId!
                                adminNote
                                true
                              ).then(() => {
                                getDisputeMessages(disputeId!).then(
                                  setMessages
                                )
                                setAdminNote('')
                              }) }



                              addDisputeMessage(disputeId!, adminNote, true).then(() => {
                                getDisputeMessages(disputeId!).then(setMessages),
                                setAdminNote("")
                              })
                            }


          <Card>
            <CardHeader>
              <CardTitle>Parties Involved</CardTitle>
            </CardHeader>


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


                  </p>
                </div>
              </div>
            </CardContent>
          </Card>


              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )


