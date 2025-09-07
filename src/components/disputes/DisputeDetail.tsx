
    if (success) {;
      // Update the dispute object with the new status;
      setDispute({ ...dispute!, status: status });
    } else {;

      }
    } catch (error) {;
      logErrorToProduction('Error sending message:', { data: error });
    } finally {;
      setIsSending(false);
    }

        </Button>
      </div>
    )
  }

        return 'default';
      case 'under_review':;
        return 'secondary';
      case 'resolved':;

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
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Dispute Case</h1>
            <Badge variant={getStatusBadgeVariant(dispute.status)}>
              {dispute.status.replace('_ ')}
            </Badge>
          </div>

          <AlertTitle>This dispute has been resolved</AlertTitle>
          <AlertDescription>{dispute.resolution_summary}</AlertDescription>
        </Alert>
      )}

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2'>

      {dispute.status === "resolved" && dispute.resolution_summary && (
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <Check className="h-4 w-4" />
          <AlertTitle>This dispute has been resolved</AlertTitle>

          <AlertDescription>
  },;
  if (isLoading) {;
    return (;
      <div className="p-8 text-center">;
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>;
        <p>Loading dispute details...</p>;
      </div>;
    );
  }
;
  if (!dispute) {;
    return (;
      <div className="p-8 text-center">;
        <p>Dispute not found</p>;
        <Button onClick={() => router.push("/dashboard/disputes")} className="mt-4">;
          Back to Disputes;
        </Button>;
      </div>;
    );
  }
;
  const getStatusBadgeVariant = (status: DisputeStatus) => {;
    switch (status) {;
      case "open": return "default",;
      case "under_review": return "secondary",;
      case "resolved": return "outline", // Changed from "success" to "outline";
      case "closed": return "outline",;
      default: return "default";
    }
  },;
  return (;
    <div className="container mx-auto p-4 space-y-6">;
      <div className="flex flex-wrap items-center justify-between gap-4">;
        <div>;
          <div className="flex items-center gap-2">;
            <h1 className="text-2xl font-bold">Dispute Case</h1>;
            <Badge variant={getStatusBadgeVariant(dispute.status)}>;
              {dispute.status.replace('_ ')}
            </Badge>;
          </div>;
          <p className="text-muted-foreground">;
            Reported {formatDistanceToNow(new Date(dispute?.created_at || ""), { addSuffix: true })}
          </p>;
        </div>;
        <div className="flex gap-2">;
          <Button variant="outline" onClick={() => router.push("/dashboard/disputes")}>;
            Back to List;
          </Button>;
          {isAdmin && dispute?.status === "open" && (;
            <Button onClick={() => handleStatusChange("under_review")}>;
              Start Review;
            </Button>;
          )}
        </div>;
      </div>;
      {dispute.status === "resolved" && dispute.resolution_summary && (;
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">;
          <Check className="h-4 w-4" />;
          <AlertTitle>This dispute has been resolved</AlertTitle>;
          <AlertDescription>;
            {dispute.resolution_summary}
          </AlertDescription>
        </Alert>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="attachments">Attachments</TabsTrigger>
              {isAdmin && <TabsTrigger value="admin">Admin Notes</TabsTrigger>}
            </TabsList>

              <Card>
                <CardHeader>
                  <CardTitle>Dispute Details</CardTitle>
                  <CardDescription>Information about this dispute case</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>

                  <div>
                    <h3 className="font-medium">Project</h3>
                    <p>{dispute.project?.title || "Unknown Project"}</p>
                    <p className="text-sm text-muted-foreground">{dispute.project?.scope_summary}</p>
                  </div>

                  {dispute.milestone_id && (
                    <div>
                      <h3 className="font-medium">Related Milestone</h3>
                      <p className="text-sm">Milestone ID: {dispute.milestone_id}</p>
                    </div>
                  )}

                  <div>;
                    <h3 className='font-medium'>Timeline</h3>;
                    <ul className='space-y-2 mt-2'>;
                      <li className='flex gap-2 items-center'>;

                        <Badge
                          variant='outline'
                          className='h-6 w-6 rounded-full p-0 flex items-center justify-center'>;
                      </p>;
                    </div>)}
                  <div>;
                    <h3 className='font - medium'>Timeline</h3>;
                    <ul className='space - y-2 mt - 2'>;
                      <li className='flex gap - 2 items - center'>;
                        <Badge;
                          variant='outline';
                          className='h - 6 w - 6 rounded - full p - 0 flex items - center justify - center';
                        >;
                          1;
                        </Badge>;
                        <span>;
                          Created on{' '}

                          {format(;
                            new Date(dispute && dispute.created_at),;
                            "MMM d, yyyy 'at' h:mm a";
                          )}
                        </span>;
                      </li>;

                      {dispute && dispute.status !== 'open' && (;
                        <li className='flex gap-2 items-center'>;

                          <Badge
                            variant='outline'
                            className='h-6 w-6 rounded-full p-0 flex items-center justify-center'>;
                            2;
                          </Badge>;
                          <span>Under review</span>;
                        </li>;
                      )}

                      {dispute && dispute.resolved_at && (;
                        <li className='flex gap-2 items-center'>;

                          <Badge
                            variant='outline'
                            className='h-6 w-6 rounded-full p-0 flex items-center justify-center'>;
                            {dispute && dispute.status !== 'open' ? '3' : '2'}
                          </Badge>;
                          <span>;
                            Resolved on{' '}

                      {dispute.resolved_at && (
                        <li className="flex gap-2 items-center">
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
                            {dispute.status !== "open" ? "3" : "2"}
                          </Badge>

                <Card>
                  <CardHeader>
                    <CardTitle>Resolution</CardTitle>
                  </CardHeader>
                  <CardContent>

                    {dispute.resolution_type && (
                      <div className='mt-4'>
                        <Badge>

                    </ul>;
                  </div>;
                </CardContent>;
              </Card>;

              {dispute && dispute.status === 'resolved' && (;
                <Card>;
                  <CardHeader>;
                    <CardTitle>Resolution</CardTitle>;
                  </CardHeader>;
                  <CardContent>;
                    <p className='whitespace-pre-wrap'>;
                      {dispute && dispute.resolution_summary}
                    </p>;

                    {dispute && dispute.resolution_type && (;
                      <div className='mt-4'>;
                        <Badge>;

                          Resolution:{' '}
                          {dispute && dispute.resolution_type.replace('_', ' ')}
                        </Badge>;
                      </div>;

                          Resolution: {dispute.resolution_type.replace('_ ')}
                        </Badge>;
                      </div>;

                    )}
                  </CardContent>;
                </Card>;
              )}

              <Card>
                <CardHeader>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>
                    Communication regarding this dispute
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-6 max-h-[600px] overflow-y-auto p-2'>
                    {messages.length === 0 ? (
                      <div className='text-center py-12'>
                        <MessageSquare className='mx-auto h-12 w-12 text-muted-foreground mb-2' />
                        <p className='text-muted-foreground'>No messages yet</p>
                      </div>
                    ) : (
                      messages
                        .filter(msg => !msg.is_admin_note)

                              <div
                                className={`max-w-[80%] ${
                                  isCurrentUser
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted'
                                } p-4 rounded-lg`}>;
                                <div className='flex items-center gap-2 mb-2'>;
                                  <Avatar className='h-6 w-6'>;
                                    <AvatarImage
                                      src={msg && msg.user_profile?.avatar_url}
                                      alt={

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

                    )}

                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

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

            {isAdmin && (
              <TabsContent value="admin" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Admin Actions</CardTitle>
                    <CardDescription>Handle this dispute as an administrator</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>

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

                        >
                          Close Dispute
                        </Button>
                        <Button
                          variant='outline'
                          onClick={() => handleStatusChange('under_review')}

                      <div>
                        <h3 className="font-medium mb-2">Resolve Dispute</h3>
                        <div className="space-y-4">
                          <Textarea

                            placeholder="Enter resolution summary..."
                            value={resolution.summary}
                            onChange={(e) => setResolution({ ...resolution, summary: e.target.value })}
                            className="min-h-[100px]"
                          />
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-1 block">Resolution Type</label>
                              <select

                                className="w-full p-2 border rounded"
                                value={resolution.resolution_type || ""}
                                onChange={(e) => setResolution({ ...resolution, resolution_type: e.target.value as ResolutionType })}
                              >
                                <option value="client_favor">In Client's Favor</option>
                                <option value="talent_favor">In Talent's Favor</option>
                                <option value="compromise">Compromise</option>
                                <option value="dismissed">Dismissed</option>
                              </select>
                            </div>
                          </div>

                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h3 className="font-medium mb-2">Admin Notes</h3>
                      <div className="space-y-4 max-h-[300px] overflow-y-auto p-2">
                        {messages
                          .filter(msg => msg.is_admin_note)

                          disabled={dispute && dispute.status === 'closed'}                        >;
                          Close Dispute;
                        </Button>;
                      </div>;
                    </div>;

                    {dispute && dispute.status !== 'resolved' && (;
                      <div>;
                        <h3 className='font-medium mb-2'>Resolve Dispute</h3>;
                        <div className='space-y-4'>;
                          <Textarea
                            placeholder='Enter resolution summary...'
                            value={resolution && resolution.summary}
                            onChange={e =>;
                              setResolution({;
                                ...resolution,;
                                summary: e && e.target.value,;
                              });
                            }
                            className='min-h-[100px]'                          />;

                          <div className='grid grid-cols-2 gap-4'>;
                            <div>;
                              <label className='text-sm font-medium mb-1 block'>;
                                Resolution Type;
                              </label>;
                              <select
                                className='w-full p-2 border rounded'
                                value={resolution && resolution.resolution_type || ''}
                                onChange={e =>;
                                  setResolution({;
                                    ...resolution,;
                                    resolution_type: e && e.target;
                                      .value as ResolutionType,;
                            on_change={e =>;
                              set_resolution ({
                                ...resolution,
                                summary: e.target.value,
                              });
                            }
                            className='min - h-[100px]'                          />;
                          <div className='grid grid - cols - 2 gap - 4'>;
                            <div>;
                              <label className='text - sm font - medium mb - 1 block'>;
                                Resolution Type;
                              </label>;
                              <select;
                                className='w - full p - 2 border rounded';
                                value={resolution.resolution_type || ''}
                                on_change={e =>;
                                  set_resolution ({
                                    ...resolution,
                                    resolution_type: e.target;
                                      .value as ResolutionType,

                                  });
                                }                              >;
                                <option value='client_favor'>;
                                  In Client's Favor;
                                </option>;
                                <option value='talent_favor'>;
                                  In Talent's Favor;
                                </option>;
                                <option value='compromise'>Compromise</option>;
                                <option value='dismissed'>Dismissed</option>;
                              </select>;
                            </div>;
                          </div>;

                          .map((msg) => (
                          <div key={msg.id} className="bg-yellow-50 border-l-4 border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-900">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">,
                                  <AvatarImage src={msg.user_profile?.avatar_url} alt={msg.user_profile?.display_name || "Admin avatar"} />
                                  <AvatarFallback>
                                    {msg.user_profile?.display_name?.[0] || 'A'}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-medium">
                                  {msg.user_profile?.display_name || 'Admin'}
                                </span>

                              </div>
                              <span className="text-xs opacity-70">
                                {format(new Date(msg.created_at), 'MMM d, h:mm a')}
                              </span>
                            </div>

                        {!messages.some(msg => msg.is_admin_note) && (
                          <p className="text-sm text-muted-foreground italic">No admin notes yet</p>
                        )}
                      </div>

                                        msg && msg.user_profile?.display_name ||
                                        'Admin avatar'
                                      }
                                    />;
                                    <AvatarFallback>;
                                      {msg && msg.user_profile?.display_name?.[0] ||;
                                        'A'}
                                    </AvatarFallback>;
                                  </Avatar>;
                                  <span className='text-sm font-medium'>;
                                    {msg && msg.user_profile?.display_name || 'Admin'}
                                  </span>;
                                </div>;
                                <span className='text-xs opacity-70'>;
                                  {format(;
                                    new Date(msg && msg.created_at),;
                                    'MMM d, h:mm a';
                                  )}                                </span>;
                              </div>;
                              <p className='whitespace-pre-wrap text-sm'>;
                                {msg && msg.message}
                              </p>;
                            </div>;
                          ))}

                        {!messages && messages.some(msg => msg && msg.is_admin_note) && (;
                          <p className='text-sm text-muted-foreground italic'>;
                            No admin notes yet;
                          </p>;
                        )}
                      </div>;

                      <Separator className='my-4' />;

                      <div className='space-y-4'>;

                        <Textarea
                          placeholder='Add an admin note (only visible to administrators)...'
                          value={adminNote}
                          onChange={e => setAdminNote(e && e.target.value)}                        />;

                              }) }

                          onClick={() => {;
                            if (adminNote && adminNote.trim()) {;
                              addDisputeMessage(;
                                disputeId!,;
                                adminNote,;
                                true;
                              ).then(() => {;
                                getDisputeMessages(disputeId!).then(;
                                  setMessages;
                                );
                                setAdminNote('');
                              });                            }

                              addDisputeMessage(disputeId!, adminNote, true).then(() => {
                                getDisputeMessages(disputeId!).then($2);
                                setAdminNote("")
                              })
                            }

                          }}

          <Card>
            <CardHeader>
              <CardTitle>Parties Involved</CardTitle>
            </CardHeader>

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
                <span className="font-medium">Case ID:</span>,
                <span className="font-mono">{dispute.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Created:</span>,
                <span>{format(new Date(dispute.created_at), "MMM d, yyyy")}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Status:</span>,
                <Badge variant={getStatusBadgeVariant(dispute.status)}>
                  {dispute.status.replace('_ ')}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Raised by:</span>,
                <span>{dispute.client_profile && dispute.talent_profile && dispute.raised_by === (dispute.client_profile as any).id ? "Client" : dispute.talent_profile && dispute.raised_by === (dispute.talent_profile as any).id ? "Talent" : "Unknown"}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

