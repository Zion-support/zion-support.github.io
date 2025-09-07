loading,
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,
    testWebhook,



  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),

  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),

  const [showDeleteConfirm, setShowDeleteConfirm] = useState < string | null>()
    null);
  const [showTestDialog, setShowTestDialog] = useState < string | null>(null);
  const [showTestResult, setShowTestResult] = useState (false);
  // Create webhook form state;
  const [webhook_name, setWebhookName] = useState ();
  const [webhook_url, setWebhookUrl] = useState ();
  const [webhook_secret, setWebhookSecret] = useState ();
  const [selected_events, setSelectedEvents] = useState < WebhookEventType[]>([]);
  const [testEventType, setTestEventType] =;
    useState < WebhookEventType>('new_application');
  // Load webhooks on mount;
  useEffect (() => {
    fetch_webhooks ();
  }, []);
  const handleCreateWebhook = async () => {
    // Check condition;
if (===  ||) {
  $2;
}
      webhook_url.trim () ===  ||;
      selected_events.length === 0);
      return;
    await create_webhook (
      webhook_name,
      webhook_url,
      selected_events,)
      webhook_secret.trim () ===  ? undefined : webhook_secret);
    setShowCreateDialog (false);
    resetWebhookForm ();
  const handleToggleStatus = async (
    webhook_id: string,)
    current_status: boolean) => {
    await toggle_webhook (webhook_id, !current_status) }
  const handleDeleteWebhook = async (webhook_id: string) => {
    await delete_webhook (webhook_id);
    setShowDeleteConfirm (null) }
  const handleTestWebhook = async (webhook_id: string) => {
    await test_webhook (webhook_id, testEventType);
    setShowTestResult (true);  const handleToggleStatus = async (webhook_id: string, current_status: boolean) => {
    await toggle_webhook (webhook_id, !current_status);

    setShowDeleteConfirm (null);    setShowDeleteConfirm (null);

    setShowTestResult (true);
  const handleToggleStatus = async (webhook_id: string, current_status: boolean, ) => {
  },
  const handleDeleteWebhook = async (webhook_id: string, ) => {
    await delete_webhook (webhook_id),
    setShowDeleteConfirm (null);
  const handleTestWebhook = async (webhook_id: string, ) => {
    await test_webhook (webhook_id, testEventType),
  const resetWebhookForm = () =>: any {
  // TODO: Implement
    setWebhookName ();
    setWebhookUrl ();
    setWebhookSecret ();
    setSelectedEvents ([]);

  // Event type options;
  const event_options: {,
  value: WebhookEventType;
    label: string;,
  description: string;
  }[] = [;
    {
      value: 'new_application,
  label: 'New Application
      description: 'When a talent applies to a job
      value: 'quote_received,
  label: 'Quote Received
      description: 'When a quote is received from talent
      value: 'milestone_approved,
  label: 'Milestone Approved
      description: 'When a project milestone is approved

]
  }, []),


  }, [])

    clearTestResult;
  } = useWebhooks(),
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
</string>
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),


    <Card className='bg-zinc-900 border-zinc-800 text-white'>

      <CardHeader>

        <CardTitle className='text-xl flex items-center'>

          <Webhook className='mr-2' size={20} /> Webhooks;

        
        <CardDescription className='text-zinc-400'>

        
      


      


      <CardContent>

        <div className='flex justify-between items-center mb-6'>
</div>
          <p className='text-sm text-zinc-400'>
</p>


          


          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>

            <DialogTrigger asChild>

              <Button variant='default'>

                <Plus size={16} className='mr-1' /> Add Webhook;

              
            
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>

              <DialogHeader>

                <DialogTitle>Create Webhook
                <DialogDescription className='text-zinc-400'>

                
              
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(;
</string>)
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null);
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);

    useState<WebhookEventType>('new_application');

    <Card className='bg-zinc-900 border-zinc-800 text-white'>;

      <CardHeader>;

        <CardTitle className='text-xl flex items-center'>;


        ;
        <CardDescription className='text-zinc-400'>;

      <CardContent>;

        <div className='flex justify-between items-center mb-6'>;
          <p className='text-sm text-zinc-400'>;
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;

            <DialogTrigger asChild>;

              <Button variant='default'>;


            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;

              <DialogHeader>;

                <DialogTitle>Create Webhook;
                <DialogDescription className='text-zinc-400'>;

              <div className='space-y-4 py-4'>;
                <div className='space-y-2'>;
                  <Label htmlFor='webhook-name'>Webhook Name;
                  <Input;
                    id='webhook-name
                    value={webhookName}
                    onChange={e => setWebhookName(e && e.target.value)}

                </div>;
                  <Label htmlFor='webhook-url'>Endpoint URL;
                    id='webhook-url
                    value={webhookUrl}
                    onChange={e => setWebhookUrl(e && e.target.value)}

                  <p className='text-xs text-zinc-500'>;
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;


        <CardTitle className='text - xl flex items - center'>;

          <Webhook className='mr - 2' size={20} /> Webhooks;

        <CardDescription className='text - zinc - 400'>;


        <div className='flex justify - between items - center mb - 6'>;
          <p className='text - sm text - zinc - 400'>;

            <DialogTrigger as_child>;


                <Plus size={16} className='mr - 1' /> Add Webhook;

            <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;


                <DialogTitle > Create Webhook;
                <DialogDescription className='text - zinc - 400'>;

              <div className='space - y-4 py - 4'>;
                <div className='space - y-2'>;
                  <Label html_for='webhook - name'>Webhook Name;
                    id='webhook - name';
                    value={webhook_name}
                    on_change={e => setWebhookName (e.target.value)}

                  <Label html_for='webhook - url'>Endpoint URL;
                    id='webhook - url';
                    value={webhook_url}
                    on_change={e => setWebhookUrl (e.target.value)}

                  <p className='text - xs text - zinc - 500'>;
                  <Label html_for='webhook - secret'>Secret Key (Optional);
                    id='webhook - secret';
                    type='password';
                    value={webhook_secret}
                    on_change={e => setWebhookSecret (e.target.value)}

                          id={event && event.value}                          checked={selectedEvents && selectedEvents.includes(event && event.value)}                  <div className="grid gap-2 pt-2">;"
</div>"
                      <div key={event && event.value} className="flex items-center space-x-2">;"
                        <Checkbox;
                          id={event && event.value} 
                          onCheckedChange={() => toggleEvent(event && event.value)}

                        <Label;
                          htmlFor={event && event.value}"
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>;

                          <span className='block text-xs text-zinc-400 mt-1'>;
</span>
                          </span>                                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";""
                          <span className="block text-xs text-zinc-400 mt-1">{event && event.description}</span>;"
                      </div>;"
    <Card className="bg-zinc-900 border-zinc-800 text-white">"

"
        <CardTitle className="text-xl flex items-center">"
          <Webhook className="mr-2" size={20} /> Webhooks;"

        <CardDescription className="text-zinc-400">"

        
      
      
        <div className="flex justify-between items-center mb-6">"
          <p className="text-sm text-zinc-400">"
          

              <Button variant="default">"
                <Plus size={16} className="mr-1" /> Add Webhook;"

              
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">"


                <DialogTitle>Create Webhook"
                <DialogDescription className="text-zinc-400">"

                
              


              <div className="space-y-4 py-4">"
                <div className="space-y-2">"
                  <Label htmlFor="webhook-name">Webhook Name"
                  <Input;"
                    id="webhook-name""
                    onChange={(e) => setWebhookName(e.target.value)}

                  <Label htmlFor="webhook-url">Endpoint URL"
                    id="webhook-url""
                    onChange={(e) => setWebhookUrl(e.target.value)}
                  <p className="text-xs text-zinc-500">"
                  <Label htmlFor="webhook-secret">Secret Key (Optional)"
                    id="webhook-secret"""
                    type="password""
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}
                  <Label>Event Types"
                  <div className="grid gap-2 pt-2">"
                      <div key={event.value} className="flex items-center space-x-2">"
                          id={event.value} 


                          onCheckedChange={() => toggleEvent(event.value)}

                          htmlFor={event.value}"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70""
                        >
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>"
                        


                <Button;"
                  variant='outline
                  onClick={() => {;

                  <Label > Event Types;
                  <div className='grid gap - 2 pt - 2'>;
                      <div;
                        key={event.value}
                        className='flex items - center space - x-2';
                      >;
                          id={event.value}                          checked={selected_events.includes (event.value)}                  <div className="grid gap - 2 pt - 2">;"
                      <div key={event.value} className="flex items - center space - x-2">;"
                          onCheckedChange={() => toggle_event (event.value)}

                          html_for={event.value}"
                          className='text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70';

                          <span className='block text - xs text - zinc - 400 mt - 1'>;
                          </span>                                                  className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70";""
                          <span className="block text - xs text - zinc - 400 mt - 1">{event.description}</span>;"
                      </div>))}
                  variant='outline';
                  on_click={() => {

              <DialogFooter>

                <Button variant="outline" onClick={() => {"

                
                <Button onClick={handleCreateWebhook} disabled={"
                  webhookName.trim() === "" ||""
                  webhookUrl.trim() === "" ||"
                  selectedEvents.length === 0;
                }>





                
              
            
          
                  }>                  Create Webhook                <ButtononClick={handleCreateWebhook} disabled={"
                  webhookName && webhookName.trim() === "" ||""
                  webhookUrl && webhookUrl.trim() === "" ||"
                  selectedEvents && selectedEvents.length === 0;
                <Button;
                  on_click={handleCreateWebhook}
                  disabled={"
                    webhook_name.trim () ===  ||;
                    selected_events.length === 0;
                >                  Create Webhook                <Button on_click={handleCreateWebhook} disabled={

        <div className='space - y-4'>;
            <div className='text - center py - 8 text - zinc - 500'>;
            </div>) : webhooks.length === 0 ? (
              <Webhook className='mx - auto mb - 2 opacity - 30' size={24} />;

              <p > No webhooks found.</p>;
              <p className='text - sm mt - 1'>;
              </p>;)
            </div>) : (
                key={webhook.id}
                className='p - 4 border border - zinc - 800 rounded - lg';
                <div className='flex items - center justify - between'>              <div key={webhook.id} className="p - 4 border border - zinc - 800 rounded - lg">;"
                <div className="flex items - center justify - between">;"
                  <div>;
                    <h3 className='font - medium'>{webhook.name}</h3>;
                    <div className='flex items - center text - sm text - zinc - 400 mt - 1'>;
                      <Globe size={14} className='mr - 1' />;

                      <span className='max - w-md truncate'>{webhook.url}</span>;
                  <div className='flex items - center space - x-2'>;
                    <div className='flex items - center mr - 2'>;
                      <Switch;
                        aria - label='Toggle webhook';
                        checked={webhook.is_active})
                        onCheckedChange={() =>;

                      <span className='ml - 2 text - sm'>;
                <div className='flex items-center justify-between'>              <div key={webhook && webhook.id} className="p-4 border border-zinc-800 rounded-lg">;"
                <div className="flex items-center justify-between">;"
                    <h3 className='font-medium'>{webhook && webhook.name}</h3>;
                    <div className='flex items-center text-sm text-zinc-400 mt-1'>;
                      <Globe size={14} className='mr-1' />;

                      <span className='max-w-md truncate'>{webhook && webhook.url}</span>;
                  <div className='flex items-center space-x-2'>;
                    <div className='flex items-center mr-2'>;
                        aria-label='Toggle webhook
                        checked={webhook && webhook.is_active}

                      <span className='ml-2 text-sm'>;
                      </span>;
                    <DropdownMenu>;

                      <DropdownMenuTrigger asChild>;



                          variant='ghost
                          size='icon
                          aria-label='More options'>;

                          <MoreVertical size={16} />;

                      <DropdownMenuContent;
                        align='end
                        className='bg-zinc-900 border-zinc-800 text-white'>;

                        <DropdownMenuItem;
                          onClick={() => setShowTestDialog(webhook && webhook.id)}

                          <PlayCircle size={14} className='mr-2' /> Test;

        {/* Webhooks List */}
        <div className="space-y-4">"
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>""
            <div className="text-center py-8 text-zinc-500">"
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />"

              <p>No webhooks found.</p>"
              <p className="text-sm mt-1">Create one to receive event notifications.</p>"
              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">"
                <div className="flex items-center justify-between">"
                  <div>
                    <h3 className="font-medium">{webhook.name}</h3>""
                    <div className="flex items-center text-sm text-zinc-400 mt-1">"
                      <Globe size={14} className="mr-1" />"
                      <span className="max-w-md truncate">{webhook.url}</span>"



                  <div className="flex items-center space-x-2">"
                    <div className="flex items-center mr-2">"
                      <Switch;"
                        aria-label="Toggle webhook""
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus(webhook.id, webhook.is_active)}
                      <span className="ml-2 text-sm">"
                    
                      <DropdownMenu>




                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="More options">"

                          <MoreVertical size={16} />

                        
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">"

                        <DropdownMenuItem;"
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>;"

              <DialogFooter>;
                <Button variant="outline" onClick={() => {;"

                <Button onClick={handleCreateWebhook} disabled={;"
                  webhookName.trim() === "" ||;""
                  webhookUrl.trim() === "" ||;"
                }>;

        <div className="space-y-4">;"
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>;""
            <div className="text-center py-8 text-zinc-500">;"
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />;"

              <p>No webhooks found.</p>;"
              <p className="text-sm mt-1">Create one to receive event notifications.</p>;"
              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">;"
                    <h3 className="font-medium">{webhook.name}</h3>;""
                    <div className="flex items-center text-sm text-zinc-400 mt-1">;"
                      <Globe size={14} className="mr-1" />;"
                      <span className="max-w-md truncate">{webhook.url}</span>;"
                  <div className="flex items-center space-x-2">;"
                    <div className="flex items-center mr-2">;"
                        aria-label="Toggle webhook";"
                      <span className="ml-2 text-sm">;"

                        <Button variant="ghost" size="icon" aria-label="More options">;"


                      ;"
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">;"

                          onClick={() => setShowTestDialog(webhook.id)}
                          <PlayCircle size={14} className="mr-2" /> Test;"


                          onClick={() => setShowDeleteConfirm(webhook.id)}
                          <X size={14} className="mr-2" /> Delete;"

                        



                      
                    
                          <X size={14} className='mr-2' /> Delete                                                  <X size={14} className="mr-2" /> Delete;"

                <div className='mt-3 flex flex-wrap gap-2'>;
                    <Badge;
                      key={event}
                      variant='secondary
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'>                    <Badge;

                <div className="mt-3 flex flex-wrap gap-2">"
                      key={event} "
                      variant="secondary"""
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800""

                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;
                  <span>;
                

                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">"
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>
      


                      <DropdownMenuTrigger as_child>;

                          variant='ghost';
                          size='icon';
                          aria - label='More options';


                        align='end';
                        className='bg - zinc - 900 border - zinc - 800 text - white';

                          on_click={() => setShowTestDialog (webhook.id)}

                          <PlayCircle size={14} className='mr - 2' /> Test;

                          on_click={() => setShowDeleteConfirm (webhook.id)}

                          <X size={14} className='mr - 2' /> Delete                                                  <X size={14} className="mr - 2" /> Delete;"

                <div className='mt - 3 flex flex - wrap gap - 2'>;
                      variant='secondary';
                      className='bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800'                    >                    <Badge;

                    ))}
                <div className='mt - 3 text - xs text - zinc - 500 flex items - center space - x-4'>;
                    </span>                  )}
                <div className="mt - 3 text - xs text - zinc - 500 flex items - center space - x-4">;"
                  <span > Created: {format (new Date (webhook.created_at), 'MMM d, yyyy')}</span>;
                    <span > Last triggered: {format (new Date (webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>;
              </div>)))}
      <CardFooter className='justify - between border - t border - zinc - 800 py - 4'>;

        <div className='text - xs text - zinc - 500'>;
        <Button variant='outline' size='sm' on_click={fetch_webhooks}>;

          <RefreshCw size={14} className='mr - 1' /> Refresh        ;

      <Dialog;
        open={showTestDialog !== null}

      



                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;"
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>;
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH:mm')}</span>;
      
      
      <CardFooter className="justify-between border-t border-zinc-800 py-4">"
        <div className="text-xs text-zinc-500">"
        <Button variant="outline" size="sm" onClick={fetchWebhooks}>"
          <RefreshCw size={14} className="mr-1" /> Refresh;"

        

      
                    </span>                  )}                ;"
                  <span>Created: {format(new Date(webhook && webhook.created_at), 'MMM d, yyyy')}</span>;
                    <span>Last triggered: {format(new Date(webhook && webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>;
      <CardFooter className='justify-between border-t border-zinc-800 py-4'>;

        <div className='text-xs text-zinc-500'>;
        <Button variant='outline' size='sm' onClick={fetchWebhooks}>;

          <RefreshCw size={14} className='mr-1' /> Refresh        ;

      <CardFooter className="justify - between border - t border - zinc - 800 py - 4">;"
        <div className="text - xs text - zinc - 500">;"
        <Button variant="outline" size="sm" on_click={fetch_webhooks}>;"
          <RefreshCw size={14} className="mr - 1" /> Refresh;"

        onOpenChange={open => {        open = {showTestDialog !== null, }



        onOpenChange={(open) => {

        

      
        open={showTestDialog !== null} ;
        onOpenChange={(open) => {;
        <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>              clearTestResult ();



            <DialogTitle>Test Webhook"

            
          
            <>



            <DialogTitle>Test Webhook;

            <>;
                  <Label htmlFor='test-event-type'>Event Type;
                  <Label htmlFor="test-event-type">Event Type"
                  <Select;
                    value={testEventType}
                    onValueChange={value =>;



            
          
            <>"
                    onValueChange={(value) => setTestEventType(value as WebhookEventType)}
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">"
                      <SelectValue placeholder="Select an event type" />"

                    <SelectContent className="bg-zinc-900 border-zinc-800">"

                        <SelectItem key={option.value} value={option.value}>

                        


            <DialogTitle > Test Webhook;

                  <Label html_for='test - event - type'>Event Type;

                    <SelectTrigger className='bg - zinc - 800 border - zinc - 700'>;

                      <SelectValue placeholder='Select an event type' />;

                    <SelectContent className='bg - zinc - 900 border - zinc - 800'>;

                      {event_options.map (option => (                        <SelectItem key={option.value} value={option.value}>                      {event_options.map ((option, ) => (

                    <SelectContent className="bg - zinc - 900 border - zinc - 800">;"

                        <SelectItem key={option.value} value={option.value}>;
)
                  onClick={() => setShowTestDialog(null)}

                  onClick={() =>;


                <Button variant="outline" onClick={() => setShowTestDialog(null)}>"

                




                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>

                
              
            </>
          ) : (


                >                  Send Test                  </p>;
)"
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>;"

                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>;

            </>;
          ) : (;
            <>;"
                  <div className='flex items-center justify-between'>;
                    <Label>Response Status;
                      className={
                        testResult &&
                        testResult.status>= 200 &&;

                        testResult.status < 300;
                          ? 'bg-green-700';
                          : 'bg-red-700'                      }              <div className="space-y-4 py-4">;"
                <div className="space-y-2">;"
                      className = {
                        testResult && testResult.status>= 200 && testResult.status < 300;
                    <Label>Response Status

                      {testResult?.status} {testResult?.statusText}

                  

                  

                  <div className="space-y-2 mt-4">"

                    <Label>Response Body"
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">"
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">"
</pre>
                    


                  <div className='space-y-2 mt-4'>;
                    <Label>Response Body;
                    <ScrollArea className='h-[200px] rounded border border-zinc-800 bg-black p-4'>;

                      <pre className='text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all'>;
                        {testResult?.responseBody || 'No response body'}                      </pre>                  ;
                  <div className="space-y-2 mt-4">;"
                    <Label>Response Body;"
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;"
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;"

                  variant='outline';')
                  on_click={() => setShowTestDialog (null)}

                  on_click={() =>;


                <Button variant="outline" on_click={() => setShowTestDialog (null)}>;"

                <Button on_click={() => showTestDialog && handleTestWebhook (showTestDialog)}>;

            </>) : (
                  <div className='flex items - center justify - between'>;
                    <Label > Response Status;
                        test_result &&;
                        test_result.status >= 200 &&;

                        test_result.status < 300;
                          ? 'bg - green - 700';
                          : 'bg - red - 700'                      }              <div className="space - y-4 py - 4">;"
                <div className="space - y-2">;"
                      class_name = {
                        test_result && test_result.status >= 200 && test_result.status < 300;

                  <div className='space - y-2 mt - 4'>;
                    <Label > Response Body;
                    <ScrollArea className='h-[200px] rounded border border - zinc - 800 bg - black p - 4'>;

                      <pre className='text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all'>;
                        {test_result?.response_body || 'No response body'}                      </pre>;
                  <div className="space - y-2 mt - 4">;"
                    <Label > Response Body;"
                    <ScrollArea className="h-[200px] rounded border border - zinc - 800 bg - black p - 4">;"
                      <pre className="text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all">;"
                
              

                      </pre>;
                <Button variant="default" onClick={() => {;"




          )}
        
                >                  Test Another Event                <Button variant="outline" onClick={() => {;"

          <AlertDialogFooter>;



            <AlertDialogAction;
              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm),}

      <AlertDialog;
        open={showDeleteConfirm !== null} 
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">"

          <AlertDialogHeader>

            <AlertDialogTitle>Delete Webhook?"
            <AlertDialogDescription className="text-zinc-400">"

            
          
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">"

            


              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}

            
          
        
      
    
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;"

          <AlertDialogHeader>;

            <AlertDialogTitle>Delete Webhook?;"
            <AlertDialogDescription className="text-zinc-400">;"

            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;"


setSelectedEvents (prev => prev && prev.includes (event) ? prev && prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <WebhookclassName="mr-2" size= {"
}/> Webhooks  <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account.   <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialogopen= {"
  showCreateDialog;
}onOpenChange= {"
  setShowCreateDialog "")"
}> <DialogTrigger asChild>   <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications.   <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window && window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional)  <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types <div className="grid gap-2 pt-2"> {;"
  eventOptions && eventOptions.map ( (event) => (<divkey= {"
  event && event.value """
}className="flex items-center space-x-2"> <Checkboxid= {"
</divkey>
}/> <LabelhtmlFor= {"
  event && event.value "")"
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">  </div>) ) ;"

}</div> </div> </div> <DialogFooter> ;


}> Cancel  <ButtononClick={
  handleCreateWebhook;"
}disabled= {"""
  webhookName && webhookName.trim () === ""||"
}> Create Webhook     </div> {;
}<div className="space-y-4"> {";"
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks && webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <WebhookclassName="mx-auto mb-2 opacity-30"size= {""
  24 "")"
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks && webhooks.map ( (webhook) => (<divkey= {""
  webhook && webhook.id """
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {;"
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globesize= {"
}className="mr-1"/> <span className="max-w-md truncate"> {;"
</span>"
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild>   <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItemonClick={")"
  () => setShowTestDialog (webhook && webhook.id) ";""
}className="cursor-pointer"> <PlayCirclesize= {""
  14 """
}className="mr-2"/> Test  <DropdownMenuItemonClick={"
}className="cursor-pointer text-red-500"> <Xsize= {""
}className="mr-2"/> Delete    </div> </div> <Badgekey= {"
}) ) ";""
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {';
}</span> {;
  webhook && webhook.last triggered at && (<span>Last triggered: {';
</span>)
}</span>) ;
}</div> </div>) ) ) ";""
}</div>  <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div>   {;"
}<Dialogopen= {
  showTestDialog !== null;
}onOpenChange= {
  (open) => {;
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint.   {";"
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type <Selectvalue= {"
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/>  <SelectContent className="bg-zinc-900 border-zinc-800"> {;")
  eventOptions && eventOptions.map ( (option) => (<SelectItemkey= {
  option && option.value;
}value= {
}> {;
}  <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel  <ButtononClick={""
  () => showTestDialog && handleTestWebhook (showTestDialog) ";""
}> Send Test   </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status <Badge > {;"
</div>)"
} </div> <div className="space-y-2 mt-4"> <Label>Response Body <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre>  </div> </div> </div> <DialogFooter> setShowTestDialog (null);"
setShowTestResult (false);
clearTestResult ();

}> Close  Test Another Event   </>) ;
}  {;
}<AlertDialogopen= {
  showDeleteConfirm !== null;
  (open) => !open && setShowDeleteConfirm (null) ";"
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook? <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint.   <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel  <AlertDialogAction > Delete     ) ;""
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <Webhook className="mr-2" size= {"
}/> Webhooks  <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account.   <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialog open= {"
}> <DialogTrigger asChild>   <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications.   <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional)  <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types <div className="grid gap-2 pt-2"> {"
  eventOptions.map ( (event) => (<div key= {"
  event.value """
}className="flex items-center space-x-2"> <Checkbox id= {"
}/> <Label htmlFor= {"
  event.value "")"
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >  </div>) )"
}</div> </div> </div> <DialogFooter>

}> Cancel  <Button onClick={
  webhookName.trim () === ""||"
}> Create Webhook     </div> {"
}<div className="space-y-4"> {""
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Webhook className="mx-auto mb-2 opacity-30"size= {""
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {""
  webhook.id """
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {"
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globe size= {"
}className="mr-1"/> <span className="max-w-md truncate"> {"
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild>   <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick={")"
  () => setShowTestDialog (webhook.id) """
}className="cursor-pointer"> <PlayCircle size= {""
}className="mr-2"/> Test  <DropdownMenuItem onClick={"
}className="cursor-pointer text-red-500"> <X size= {""
}className="mr-2"/> Delete    </div> </div> <Badge key= {"
}) ) """
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {
}</span> {
  webhook.last triggered at && (<span>Last triggered: {
}</span>) 
}</div> </div>) ) ) """
}</div>  <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div>   {"
}<Dialog open= {
  (open) => {
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint.   {""
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type <Select value= {"
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/>  <SelectContent className="bg-zinc-900 border-zinc-800"> {")
  eventOptions.map ( (option) => (<SelectItem key= {


  option.value;
}> {
}  <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel  <Button onClick={""
  () => showTestDialog && handleTestWebhook (showTestDialog) """
}> Send Test   </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status <Badge > {"
} </div> <div className="space-y-2 mt-4"> <Label>Response Body <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre>  </div> </div> </div> <DialogFooter> setShowTestDialog (null)"
setShowTestResult (false)
clearTestResult ()



}> Close  Test Another Event   </>) 
}  {
}<AlertDialog open= {
  (open) => !open && setShowDeleteConfirm (null) ""
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook? <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint.   <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel  <AlertDialogAction > Delete     )""
            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;


              on_click = {() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm), }

        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;"


            <AlertDialogTitle > Delete Webhook?;"
            <AlertDialogDescription className="text - zinc - 400">;"

            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;"

              on_click={() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm)}

    );"