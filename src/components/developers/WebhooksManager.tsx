
;
loading,testResult,fetchWebhooks,createWebhook,toggleWebhook,deleteWebhook,testWebhook,const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[] />([]),const [testEventType, setTestEventType] = useState<WebhookEventType />('new_application'),// Load webhooks on mount;
  useEffect(() => {}
fetchWebhooks()import { useState, useEffect  } from 'react';
import { format  } from 'date - fns';
import { useState, useEffect } from "react",import { format } from "date-fns",import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X  } from 'lucide-react';"
import { useWebhooks, type WebhookEventType } from "@/hooks/useWebhooks",import { Button } from "@/components/ui/button",import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog",import { Input } from "@/components/ui/input",import { Checkbox } from "@/components/ui/checkbox",import { Label } from "@/components/ui/label",import { Badge } from "@/components/ui/badge",import { Switch } from "@/components/ui/switch",import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu",import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog",import { ScrollArea  } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select';

export function WebhooksManager() {const {webhooks;
    loading;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;
    testWebhook;}
    clearTestResult;}
  } = useWebhooks()const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null />(null),const [showTestDialog, setShowTestDialog] = useState<string | null />(null),const [showTestResult, setShowTestResult] = useState(false)import { format  } from 'date-fns';
import { Globe,MoreVertical,PlayCircle,Plus,RefreshCw,Webhook} from 'lucide-react';
import { useWebhooks, type WebhookEventType  } from '@/hooks/useWebhooks';
import { Button  } from '@/components/ui/button';
  Card;
  CardContent;
  CardDescription;
  CardFooter;
  CardHeader;
  CardTitle;
} from '@/components/ui/card';
  Dialog;
  DialogContent;
  DialogDescription;
  DialogFooter;
  DialogHeader;
  DialogTitle;
  DialogTrigger;
} from '@/components/ui/dialog';
import { Input  } from '@/components/ui/input';
import { Checkbox  } from '@/components/ui/checkbox';
import { Label  } from '@/components/ui/label';
import { Badge  } from '@/components/ui/badge';
import { Switch  } from '@/components/ui/switch';
  DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger;
} from '@/components/ui/dropdown-menu';
  AlertDialog;
  AlertDialogAction;
  AlertDialogCancel;
  AlertDialogContent;
  AlertDialogDescription;
  AlertDialogFooter;
  AlertDialogHeader;
  AlertDialogTitle;
} from '@/components/ui/alert-dialog';
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue;
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger  } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger  } from '@/components/ui/dropdown-menu';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle  } from '@/components/ui/alert-dialog';


  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),
</WebhookEventType>
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),'
</WebhookEventType>
  const [showDeleteConfirm, setShowDeleteConfirm] = useState < string | null>()
    null);
  const [showTestDialog, setShowTestDialog] = useState < string | null>(null);
  const [showTestResult, setShowTestResult] = useState (false);
  // Create webhook form state;'
  const [webhook_name, setWebhookName] = useState ('');''
  const [webhook_url, setWebhookUrl] = useState ('');''
  const [webhook_secret, setWebhookSecret] = useState ('');'
  const [selected_events, setSelectedEvents] = useState < WebhookEventType[]>([]);
  const [testEventType, setTestEventType] =;'
    useState < WebhookEventType>('new_application');'
  // Load webhooks on mount;
  useEffect (() => {
    fetch_webhooks ();
  }, []);
  const handleCreateWebhook = async () => {
    // Check condition;'
if (=== '' ||) {'
  $2;
}'
      webhook_url.trim () === '' ||;'
      selected_events.length === 0);
      return;
    await create_webhook (
      webhook_name,
      webhook_url,
      selected_events,)'
      webhook_secret.trim () === '' ? undefined : webhook_secret);'
    setShowCreateDialog (false);
    resetWebhookForm ();
  }
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


const handleToggleStatus = async (webhook_id: string,current_status: boolean) => {await toggle_webhook (webhook_id, !current_status) }


  const handleTestWebhook = async (webhook_id: string) => {
    await test_webhook (webhook_id, testEventType);
    setShowTestResult (true);
  const handleToggleStatus = async (webhook_id: string, current_status: boolean, ) => {
    await toggle_webhook (webhook_id, !current_status);
  },
  const handleDeleteWebhook = async (webhook_id: string, ) => {
    await delete_webhook (webhook_id),
    setShowDeleteConfirm (null);
  },
  const handleTestWebhook = async (webhook_id: string, ) => {
    await test_webhook (webhook_id, testEventType),
    setShowTestResult (true);
  },
  const resetWebhookForm = () =>: any {
  // TODO: Implement
}'
    setWebhookName ('');''
    setWebhookUrl ('');''
    setWebhookSecret ('');'
    setSelectedEvents ([]);


const handleTestWebhook = async (webhook_id: string) => {await test_webhook (webhook_id, testEventType)setShowTestResult (true)const handleToggleStatus = async (webhook_id: string, current_status: boolean) => {await toggle_webhook (webhook_id, !current_status)}

const handleDeleteWebhook = async (webhook_id: string) => {await delete_webhook (webhook_id)setShowDeleteConfirm (null)setShowDeleteConfirm (null}
}

const handleTestWebhook = async (webhook_id: string) => {await test_webhook (webhook_id, testEventType)setShowTestResult (true)const handleToggleStatus = async (webhook_id: string, current_status: boolean, ) => {await toggle_webhook (webhook_id, !current_status)},const handleDeleteWebhook = async (webhook_id: string, ) => {await delete_webhook (webhook_id),setShowDeleteConfirm (null)},const handleTestWebhook = async (webhook_id: string, ) => {await test_webhook (webhook_id, testEventType),setShowTestResult (true)},const resetWebhookForm = () =>: any {setWebhookName ('')setWebhookUrl ('')setWebhookSecret ('')setSelectedEvents ([])}

const handleDeleteWebhook = async (webhookId: string,) => {await deleteWebhook(webhookId)setShowDeleteConfirm(null;}
}

const handleTestWebhook = async (webhookId: string,) => {await testWebhook(webhookId, testEventType)setShowTestResult(true)}
;
  const {    webhooks,    webhooks;
    loading;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;
    testWebhook;
    clearTestResult;

const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null />(null;}
  )const [showTestDialog, setShowTestDialog] = useState<string | null />(null)const [showTestResult, setShowTestResult] = useState(false)// Create webhook form state;}
  }, []),const handleCreateWebhook  = null;

const resetWebhookForm = (setWebhookName('')setWebhookUrl('')setWebhookSecret('')setSelectedEvents([])) => {
  return $3;}
}
  // Event type options;

  const event_options: {,
  value: WebhookEventType;
    label: string;,
  description: string;
  }[] = [;
    {'
      value: 'new_application'','
  label: 'New Application'''
      description: 'When a talent applies to a job''
    }
    {'
      value: 'quote_received'','
  label: 'Quote Received'''
      description: 'When a quote is received from talent''
    }
    {'
      value: 'milestone_approved'','
  label: 'Milestone Approved'''
      description: 'When a project milestone is approved''
    }
    {

]
  }, []),


  }, [])
  const handleCreateWebhook = async () => {

    clearTestResult;
  } = useWebhooks(),
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
</string>
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
</string>
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),
</WebhookEventType>'
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),'
</WebhookEventType>'
    <Card className='bg-zinc-900 border-zinc-800 text-white'>'
</Card>
      <CardHeader>
</CardHeader>'
        <CardTitle className='text-xl flex items-center'>'
</CardTitle>'
          <Webhook className='mr-2' size={20} /> Webhooks;'
</Webhook>
        </CardTitle>'
        <CardDescription className='text-zinc-400'>'
</CardDescription>
        </CardDescription>
      </CardHeader>


      


      <CardContent>
</CardContent>'
        <div className='flex justify-between items-center mb-6'>'
</div>'
          <p className='text-sm text-zinc-400'>'
</p>
          </p>


          


          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
</Dialog>
            <DialogTrigger asChild>
</DialogTrigger>'
              <Button variant='default'>'
</Button>'
                <Plus size={16} className='mr-1' /> Add Webhook;'
</Plus>
              </Button>
            </DialogTrigger>'
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>'
</DialogContent>
              <DialogHeader>
</DialogHeader>
                <DialogTitle>Create Webhook</DialogTitle>'
                <DialogDescription className='text-zinc-400'>'
</DialogDescription>
                </DialogDescription>
              </DialogHeader>
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(;
</string>)
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null);
</string>
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);
</WebhookEventType>'
    useState<WebhookEventType>('new_application');'
</WebhookEventType>'
    <Card className='bg-zinc-900 border-zinc-800 text-white'>;'
</Card>
      <CardHeader>;
</CardHeader>'
        <CardTitle className='text-xl flex items-center'>;'
</CardTitle>'
          <Webhook className='mr-2' size={20} /> Webhooks;'
</Webhook>
        </CardTitle>;'
        <CardDescription className='text-zinc-400'>;'
</CardDescription>
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
</CardContent>'
        <div className='flex justify-between items-center mb-6'>;'
</div>'
          <p className='text-sm text-zinc-400'>;'
</p>
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
</Dialog>
            <DialogTrigger asChild>;
</DialogTrigger>'
              <Button variant='default'>;'
</Button>'
                <Plus size={16} className='mr-1' /> Add Webhook;'
</Plus>
              </Button>;
            </DialogTrigger>;'
            <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;'
</DialogContent>
              <DialogHeader>;
</DialogHeader>
                <DialogTitle>Create Webhook</DialogTitle>;'
                <DialogDescription className='text-zinc-400'>;'
</DialogDescription>
                </DialogDescription>;
              </DialogHeader>;'
              <div className='space-y-4 py-4'>;'
</div>'
                <div className='space-y-2'>;'
</div>'
                  <Label htmlFor='webhook-name'>Webhook Name</Label>;'
                  <Input;'
                    id='webhook-name''
                    value={webhookName}
                    onChange={e => setWebhookName(e && e.target.value)}
</Input>
                </div>;'
                <div className='space-y-2'>;'
</div>'
                  <Label htmlFor='webhook-url'>Endpoint URL</Label>;'
                  <Input;'
                    id='webhook-url''
                    value={webhookUrl}
                    onChange={e => setWebhookUrl(e && e.target.value)}
</Input>'
                  <p className='text-xs text-zinc-500'>;'
</p>'
    <Card className='bg - zinc - 900 border - zinc - 800 text - white'>;'
</Card>
      <CardHeader>;
</CardHeader>'
        <CardTitle className='text - xl flex items - center'>;'
</CardTitle>'
          <Webhook className='mr - 2' size={20} /> Webhooks;'
</Webhook>
        </CardTitle>;'
        <CardDescription className='text - zinc - 400'>;'
</CardDescription>
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
</CardContent>'
        <div className='flex justify - between items - center mb - 6'>;'
</div>'
          <p className='text - sm text - zinc - 400'>;'
</p>
          </p>;
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>;
</Dialog>
            <DialogTrigger as_child>;
</DialogTrigger>'
              <Button variant='default'>;'
</Button>'
                <Plus size={16} className='mr - 1' /> Add Webhook;'
</Plus>
              </Button>;
            </DialogTrigger>;'
            <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;'
</DialogContent>
              <DialogHeader>;
</DialogHeader>
                <DialogTitle > Create Webhook</DialogTitle>;'
                <DialogDescription className='text - zinc - 400'>;'
</DialogDescription>
                </DialogDescription>;
              </DialogHeader>;'
              <div className='space - y-4 py - 4'>;'
</div>'
                <div className='space - y-2'>;'
</div>'
                  <Label html_for='webhook - name'>Webhook Name</Label>;'
                  <Input;'
                    id='webhook - name';'
                    value={webhook_name}
                    on_change={e => setWebhookName (e.target.value)}
</Input>
                </div>;'
                <div className='space - y-2'>;'
</div>'
                  <Label html_for='webhook - url'>Endpoint URL</Label>;'
                  <Input;'
                    id='webhook - url';'
                    value={webhook_url}
                    on_change={e => setWebhookUrl (e.target.value)}
</Input>'
                  <p className='text - xs text - zinc - 500'>;'
</p>
                  </p>;
                </div>;'
                  <p className='text-xs text-zinc-500'>;'
</p>'
                <div className='space - y-2'>;'
</div>'
                  <Label html_for='webhook - secret'>Secret Key (Optional)</Label>;'
                  <Input;'
                    id='webhook - secret';''
                    type='password';'
                    value={webhook_secret}
                    on_change={e => setWebhookSecret (e.target.value)}
</Input>'
                  <p className='text - xs text - zinc - 500'>;'
</p>
                  </p>;
                </div>;'
                          id={event && event.value}                          checked={selectedEvents && selectedEvents.includes(event && event.value)}                  <div className="grid gap-2 pt-2">;"
</div>"
                      <div key={event && event.value} className="flex items-center space-x-2">;"
</div>
                        <Checkbox;
                          id={event && event.value} 
                          onCheckedChange={() => toggleEvent(event && event.value)}
</Checkbox>
                        <Label;
                          htmlFor={event && event.value}"
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>;'
</Label>'
                          <span className='block text-xs text-zinc-400 mt-1'>;'
</span>'
                          </span>                        </Label>                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";""
                          <span className="block text-xs text-zinc-400 mt-1">{event && event.description}</span>;"
                      </div>;"
    <Card className="bg-zinc-900 border-zinc-800 text-white">"
</Card>
      <CardHeader>
</CardHeader>"
        <CardTitle className="text-xl flex items-center">"
</CardTitle>"
          <Webhook className="mr-2" size={20} /> Webhooks;"
</Webhook>
        </CardTitle>"
        <CardDescription className="text-zinc-400">"
</CardDescription>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
</CardContent>"
        <div className="flex justify-between items-center mb-6">"
</div>"
          <p className="text-sm text-zinc-400">"
</p>
          </p>
          
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
</Dialog>
            <DialogTrigger asChild>
</DialogTrigger>"
              <Button variant="default">"
</Button>"
                <Plus size={16} className="mr-1" /> Add Webhook;"
</Plus>
              </Button>
            </DialogTrigger>"
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">"
</DialogContent>
              <DialogHeader>
</DialogHeader>
                <DialogTitle>Create Webhook</DialogTitle>"
                <DialogDescription className="text-zinc-400">"
</DialogDescription>
                </DialogDescription>
              </DialogHeader>


              "
              <div className="space-y-4 py-4">"
</div>"
                <div className="space-y-2">"
</div>"
                  <Label htmlFor="webhook-name">Webhook Name</Label>"
                  <Input;"
                    id="webhook-name""
                    value={webhookName}
                    onChange={(e) => setWebhookName(e.target.value)}
</Input>
                </div>
                "
                <div className="space-y-2">"
</div>"
                  <Label htmlFor="webhook-url">Endpoint URL</Label>"
                  <Input;"
                    id="webhook-url""
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
</Input>"
                  <p className="text-xs text-zinc-500">"
</p>
                  </p>
                </div>
"
                <div className="space-y-2">"
</div>"
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>"
                  <Input;"
                    id="webhook-secret"""
                    type="password""
                    value={webhookSecret}
                    onChange={(e) => setWebhookSecret(e.target.value)}
</Input>"
                  <p className="text-xs text-zinc-500">"
</p>
                  </p>
                </div>
                "
                <div className="space-y-2">"
</div>
                  <Label>Event Types</Label>"
                  <div className="grid gap-2 pt-2">"
</div>"
                      <div key={event.value} className="flex items-center space-x-2">"
</div>
                        <Checkbox;
                          id={event.value} 


                          onCheckedChange={() => toggleEvent(event.value)}
</Checkbox>
                        <Label;
                          htmlFor={event.value}"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70""
                        >
</Label>"
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>"
                        </Label>


                      </div>
                  </div>;
                </div>;
              </div>;
                <Button;"
                  variant='outline''
                  onClick={() => {;
</Button>'
                <div className='space - y-2'>;'
</div>
                  <Label > Event Types</Label>;'
                  <div className='grid gap - 2 pt - 2'>;'
</div>
                      <div;
                        key={event.value}'
                        className='flex items - center space - x-2';'
                      >;
</div>
                        <Checkbox;'
                          id={event.value}                          checked={selected_events.includes (event.value)}                  <div className="grid gap - 2 pt - 2">;"
</Checkbox>"
                      <div key={event.value} className="flex items - center space - x-2">;"
</div>
                        <Checkbox;
                          id={event.value}
                          onCheckedChange={() => toggle_event (event.value)}
</Checkbox>
                        <Label;
                          html_for={event.value}"
                          className='text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70';'
                        >;
</Label>'
                          <span className='block text - xs text - zinc - 400 mt - 1'>;'
</span>'
                          </span>                        </Label>                          className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70";""
                          <span className="block text - xs text - zinc - 400 mt - 1">{event.description}</span>;"

                      </div>))}
                  </div>;
                </div>;
              </div>;

                <Button;"
                  variant='outline';'
                  on_click={() => {
</Button>
                </Button>;
              <DialogFooter>
</DialogFooter>'
                <Button variant="outline" onClick={() => {"
</Button>
                </Button>
                <Button onClick={handleCreateWebhook} disabled={"
                  webhookName.trim() === "" ||""
                  webhookUrl.trim() === "" ||"
                  selectedEvents.length === 0;
                }>
</Button>




                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
                  }>                  Create Webhook                <ButtononClick={handleCreateWebhook} disabled={"
                  webhookName && webhookName.trim() === "" ||""
                  webhookUrl && webhookUrl.trim() === "" ||"
                  selectedEvents && selectedEvents.length === 0;
                <Button;
                  on_click={handleCreateWebhook}
                  disabled={"
                    webhook_name.trim () === '' ||;''
                    webhook_url.trim () === '' ||;'
                    selected_events.length === 0;
                  }
                >                  Create Webhook                <Button on_click={handleCreateWebhook} disabled={
</ButtononClick>
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;'
        <div className='space - y-4'>;'
</div>'
            <div className='text - center py - 8 text - zinc - 500'>;'
</div>
            </div>) : webhooks.length === 0 ? ('
            <div className='text - center py - 8 text - zinc - 500'>;'
</div>'
              <Webhook className='mx - auto mb - 2 opacity - 30' size={24} />;'
</Webhook>
              <p > No webhooks found.</p>;'
              <p className='text - sm mt - 1'>;'
</p>
              </p>;)
            </div>) : (
              <div;
                key={webhook.id}'
                className='p - 4 border border - zinc - 800 rounded - lg';'
              >;
</div>'
                <div className='flex items - center justify - between'>              <div key={webhook.id} className="p - 4 border border - zinc - 800 rounded - lg">;"
</div>"
                <div className="flex items - center justify - between">;"
</div>
                  <div>;
</div>"
                    <h3 className='font - medium'>{webhook.name}</h3>;''
                    <div className='flex items - center text - sm text - zinc - 400 mt - 1'>;'
</div>'
                      <Globe size={14} className='mr - 1' />;'
</Globe>'
                      <span className='max - w-md truncate'>{webhook.url}</span>;'
                    </div>;
                  </div>;'
                  <div className='flex items - center space - x-2'>;'
</div>'
                    <div className='flex items - center mr - 2'>;'
</div>
                      <Switch;'
                        aria - label='Toggle webhook';'
                        checked={webhook.is_active})
                        onCheckedChange={() =>;
</Switch>'
                      <span className='ml - 2 text - sm'>;'
</span>'
                <div className='flex items-center justify-between'>              <div key={webhook && webhook.id} className="p-4 border border-zinc-800 rounded-lg">;"
</div>"
                <div className="flex items-center justify-between">;"
</div>
                  <div>;
</div>"
                    <h3 className='font-medium'>{webhook && webhook.name}</h3>;''
                    <div className='flex items-center text-sm text-zinc-400 mt-1'>;'
</div>'
                      <Globe size={14} className='mr-1' />;'
</Globe>'
                      <span className='max-w-md truncate'>{webhook && webhook.url}</span>;'
                    </div>;
                  </div>;'
                  <div className='flex items-center space-x-2'>;'
</div>'
                    <div className='flex items-center mr-2'>;'
</div>
                      <Switch;'
                        aria-label='Toggle webhook''
                        checked={webhook && webhook.is_active}
                        onCheckedChange={() =>;
</Switch>'
                      <span className='ml-2 text-sm'>;'
</span>
                      </span>;
                    </div>;
                    <DropdownMenu>;
</DropdownMenu>
                      <DropdownMenuTrigger asChild>;
</DropdownMenuTrigger>


                        <Button;'
                          variant='ghost'''
                          size='icon'''
                          aria-label='More options'>;'
</Button>
                          <MoreVertical size={16} />;
</MoreVertical>
                        </Button>;
                      </DropdownMenuTrigger>;
                      <DropdownMenuContent;'
                        align='end'''
                        className='bg-zinc-900 border-zinc-800 text-white'>;'
</DropdownMenuContent>
                        <DropdownMenuItem;
                          onClick={() => setShowTestDialog(webhook && webhook.id)}
</DropdownMenuItem>'
                          <PlayCircle size={14} className='mr-2' /> Test;'
</PlayCircle>
                        </DropdownMenuItem>;
                        <DropdownMenuItem;
        {/* Webhooks List */}'
        <div className="space-y-4">"
</DropdownMenuItem>"
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>""
            <div className="text-center py-8 text-zinc-500">"
</div>"
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />"
</Webhook>
              <p>No webhooks found.</p>"
              <p className="text-sm mt-1">Create one to receive event notifications.</p>"
            </div>"
              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">"
</div>"
                <div className="flex items-center justify-between">"
</div>
                  <div>
</div>"
                    <h3 className="font-medium">{webhook.name}</h3>""
                    <div className="flex items-center text-sm text-zinc-400 mt-1">"
</div>"
                      <Globe size={14} className="mr-1" />"
</Globe>"
                      <span className="max-w-md truncate">{webhook.url}</span>"
                    </div>
                  </div>



                  "
                  <div className="flex items-center space-x-2">"
</div>"
                    <div className="flex items-center mr-2">"
</div>
                      <Switch;"
                        aria-label="Toggle webhook""
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus(webhook.id, webhook.is_active)}
</Switch>"
                      <span className="ml-2 text-sm">"
</span>
                      </span>
                    </div>
                    
                      <DropdownMenu>
</DropdownMenu>



                      <DropdownMenuTrigger asChild>
</DropdownMenuTrigger>"
                        <Button variant="ghost" size="icon" aria-label="More options">"
</Button>
                          <MoreVertical size={16} />
</MoreVertical>
                        </Button>
                      </DropdownMenuTrigger>"
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">"
</DropdownMenuContent>
                        <DropdownMenuItem;"
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>;"
</DropdownMenuItem>
                        </Label>;
                      </div>;
                  </div>;
                </div>;
              </div>;
              <DialogFooter>;
</DialogFooter>"
                <Button variant="outline" onClick={() => {;"
</Button>
                </Button>;
                <Button onClick={handleCreateWebhook} disabled={;"
                  webhookName.trim() === "" ||;""
                  webhookUrl.trim() === "" ||;"
                  selectedEvents.length === 0;
                }>;
</Button>

                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;

        </div>;"
        <div className="space-y-4">;"
</div>"
            <div className="text-center py-8 text-zinc-500">Loading webhooks...</div>;""
            <div className="text-center py-8 text-zinc-500">;"
</div>"
              <Webhook className="mx-auto mb-2 opacity-30" size={24} />;"
</Webhook>
              <p>No webhooks found.</p>;"
              <p className="text-sm mt-1">Create one to receive event notifications.</p>;"
            </div>;"
              <div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">;"
</div>"
                <div className="flex items-center justify-between">;"
</div>
                  <div>;
</div>"
                    <h3 className="font-medium">{webhook.name}</h3>;""
                    <div className="flex items-center text-sm text-zinc-400 mt-1">;"
</div>"
                      <Globe size={14} className="mr-1" />;"
</Globe>"
                      <span className="max-w-md truncate">{webhook.url}</span>;"
                    </div>;
                  </div>;"
                  <div className="flex items-center space-x-2">;"
</div>"
                    <div className="flex items-center mr-2">;"
</div>
                      <Switch;"
                        aria-label="Toggle webhook";"
                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus(webhook.id, webhook.is_active)}
</Switch>"
                      <span className="ml-2 text-sm">;"
</span>
                      </span>;
                    </div>;
                      <DropdownMenu>;
</DropdownMenu>
                      <DropdownMenuTrigger asChild>;
</DropdownMenuTrigger>"
                        <Button variant="ghost" size="icon" aria-label="More options">;"
</Button>
                          <MoreVertical size={16} />;
</MoreVertical>
                        </Button>;
                      </DropdownMenuTrigger>;"
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800 text-white">;"
</DropdownMenuContent>
                        <DropdownMenuItem;
                          onClick={() => setShowTestDialog(webhook.id)}
</DropdownMenuItem>"
                          <PlayCircle size={14} className="mr-2" /> Test;"
</PlayCircle>
                        </DropdownMenuItem>;
                        <DropdownMenuItem;

                          onClick={() => setShowDeleteConfirm(webhook.id)}
</DropdownMenuItem>"
                          <X size={14} className="mr-2" /> Delete;"
</X>
                        </DropdownMenuItem>



                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>"
                          <X size={14} className='mr-2' /> Delete                        </DropdownMenuItem>                          <X size={14} className="mr-2" /> Delete;"
</X>
                        </DropdownMenuItem>;
                      </DropdownMenuContent>;
                    </DropdownMenu>;
                  </div>;
                </div>;"
                <div className='mt-3 flex flex-wrap gap-2'>;'
</div>
                    <Badge;
                      key={event}'
                      variant='secondary'''
                      className='bg-zinc-800 text-zinc-300 hover:bg-zinc-800'>                    <Badge;'
</Badge>'
                <div className="mt-3 flex flex-wrap gap-2">"
</div>
                    <Badge;
                      key={event} "
                      variant="secondary"""
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-800""
                    >
</Badge>
                    </Badge>;
                </div>;"
                <div className='mt-3 text-xs text-zinc-500 flex items-center space-x-4'>;'
</div>
                  <span>;
</span>
                  </span>;
                    <span>;
</span>
                </div>
                
'
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">"
</div>"
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>''
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>'
                </div>
              </div>
        </div>
      </CardContent>

                      </span>;
                    </div>;
                    <DropdownMenu>;
</DropdownMenu>
                      <DropdownMenuTrigger as_child>;
</DropdownMenuTrigger>
                        <Button;'
                          variant='ghost';''
                          size='icon';''
                          aria - label='More options';'
                        >;
</Button>

                          <MoreVertical size={16} />;
</MoreVertical>
                        </Button>;
                      </DropdownMenuTrigger>;

                      <DropdownMenuContent;'
                        align='end';''
                        className='bg - zinc - 900 border - zinc - 800 text - white';'
                      >;
</DropdownMenuContent>
                        <DropdownMenuItem;
                          on_click={() => setShowTestDialog (webhook.id)}
</DropdownMenuItem>'
                          <PlayCircle size={14} className='mr - 2' /> Test;'
</PlayCircle>
                        </DropdownMenuItem>;
                        <DropdownMenuItem;
                          on_click={() => setShowDeleteConfirm (webhook.id)}
</DropdownMenuItem>'
                          <X size={14} className='mr - 2' /> Delete                        </DropdownMenuItem>                          <X size={14} className="mr - 2" /> Delete;"
</X>

                        </DropdownMenuItem>;
                      </DropdownMenuContent>;
                    </DropdownMenu>;
                  </div>;

                </div>;"
                <div className='mt - 3 flex flex - wrap gap - 2'>;'
</div>
                    <Badge;
                      key={event}'
                      variant='secondary';''
                      className='bg - zinc - 800 text - zinc - 300 hover:bg - zinc - 800'                    >                    <Badge;'
</Badge>
                    </Badge>))}
                </div>;'
                <div className='mt - 3 text - xs text - zinc - 500 flex items - center space - x-4'>;'
</div>
                  <span>;
</span>
                  </span>;
                    <span>;
</span>
                    </span>                  )}'
                <div className="mt - 3 text - xs text - zinc - 500 flex items - center space - x-4">;"
</div>"
                  <span > Created: {format (new Date (webhook.created_at), 'MMM d, yyyy')}</span>;''
                    <span > Last triggered: {format (new Date (webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>;'
                </div>;
              </div>)))}
        </div>;
      </CardContent>;'
      <CardFooter className='justify - between border - t border - zinc - 800 py - 4'>;'
</CardFooter>'
        <div className='text - xs text - zinc - 500'>;'
</div>
        </div>;'
        <Button variant='outline' size='sm' on_click={fetch_webhooks}>;'
</Button>'
          <RefreshCw size={14} className='mr - 1' /> Refresh        </Button>;'
</RefreshCw>
      </CardFooter>;
      <Dialog;
        open={showTestDialog !== null}

      


                </div>;
</Dialog>'
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;"
</div>"
                  <span>Created: {format(new Date(webhook.created_at), 'MMM d, yyyy')}</span>;''
                    <span>Last triggered: {format(new Date(webhook.last_triggered_at), 'MMM d, yyyy HH:mm')}</span>;'
                </div>;
              </div>;
        </div>
      </CardContent>
      '
      <CardFooter className="justify-between border-t border-zinc-800 py-4">"
</CardFooter>"
        <div className="text-xs text-zinc-500">"
</div>
        </div>"
        <Button variant="outline" size="sm" onClick={fetchWebhooks}>"
</Button>"
          <RefreshCw size={14} className="mr-1" /> Refresh;"
</RefreshCw>
        </Button>

      </CardFooter>
                    </span>                  )}                ;"
                <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4">;"
</div>"
                  <span>Created: {format(new Date(webhook && webhook.created_at), 'MMM d, yyyy')}</span>;''
                    <span>Last triggered: {format(new Date(webhook && webhook.last_triggered_at), 'MMM d, yyyy HH: mm')}</span>;'
                </div>;
              </div>;
        </div>;
      </CardContent>;'
      <CardFooter className='justify-between border-t border-zinc-800 py-4'>;'
</CardFooter>'
        <div className='text-xs text-zinc-500'>;'
</div>
        </div>;'
        <Button variant='outline' size='sm' onClick={fetchWebhooks}>;'
</Button>'
          <RefreshCw size={14} className='mr-1' /> Refresh        </Button>;'
</RefreshCw>
      </CardFooter>;'
      <CardFooter className="justify - between border - t border - zinc - 800 py - 4">;"
</CardFooter>"
        <div className="text - xs text - zinc - 500">;"
</div>
        </div>;"
        <Button variant="outline" size="sm" on_click={fetch_webhooks}>;"
</Button>"
          <RefreshCw size={14} className="mr - 1" /> Refresh;"
</RefreshCw>
      </CardFooter>;
      <Dialog;
        open={showTestDialog !== null}
        onOpenChange={open => {        open = {showTestDialog !== null, }
</Dialog>
      <Dialog;
        open={showTestDialog !== null}

      <Dialog;
        open={showTestDialog !== null} 

        onOpenChange={(open) => {
</Dialog>
      <Dialog;
        open={showTestDialog !== null} 
        </Button>
</Dialog>
      </CardFooter>
      <Dialog;
        open={showTestDialog !== null} ;
        onOpenChange={(open) => {;
</Dialog>"
        <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>              clearTestResult ();'
</DialogContent>'
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">"
</DialogContent>
          <DialogHeader>
</DialogHeader>
            <DialogTitle>Test Webhook</DialogTitle>"
            <DialogDescription className='text-zinc-400'>'
</DialogDescription>
            </DialogDescription>
          </DialogHeader>
            <>

      >;'
        <DialogContent className='bg-zinc-900 border-zinc-800 text-white'>;'
</DialogContent>
          <DialogHeader>;
</DialogHeader>
            <DialogTitle>Test Webhook</DialogTitle>;'
            <DialogDescription className='text-zinc-400'>;'
</DialogDescription>
            </DialogDescription>;
          </DialogHeader>;
            <>;'
              <div className='space-y-4 py-4'>;'
</div>'
                <div className='space-y-2'>;'
</div>'
                  <Label htmlFor='test-event-type'>Event Type</Label>;''
              <div className="space-y-4 py-4">"
</div>"
                <div className="space-y-2">"
</div>"
                  <Label htmlFor="test-event-type">Event Type</Label>"
                  <Select;
                    value={testEventType}
                    onValueChange={value =>;
</Select>"
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">"
</DialogContent>
          <DialogHeader>
</DialogHeader>
            <DialogTitle>Test Webhook</DialogTitle>"
            <DialogDescription className="text-zinc-400">"
</DialogDescription>
            </DialogDescription>
          </DialogHeader>
            <>"
              <div className="space-y-4 py-4">"
</div>"
                <div className="space-y-2">"
</div>"
                  <Label htmlFor="test-event-type">Event Type</Label>"
                  <Select;
                    value={testEventType}
                    onValueChange={(value) => setTestEventType(value as WebhookEventType)}
</Select>"
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">"
</SelectTrigger>"
                      <SelectValue placeholder="Select an event type" />"
</SelectValue>"
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">"
</SelectTrigger>"
                      <SelectValue placeholder="Select an event type" />"
</SelectValue>
                    </SelectTrigger>"
                    <SelectContent className="bg-zinc-900 border-zinc-800">"
</SelectContent>
                        <SelectItem key={option.value} value={option.value}>
</SelectItem>
                        </SelectItem>
                    </SelectContent>;
                  </Select>;"
                  <p className='text-xs text-zinc-500'>;'
</p>'
        <DialogContent className='bg - zinc - 900 border - zinc - 800 text - white'>;'
</DialogContent>
          <DialogHeader>;
</DialogHeader>
            <DialogTitle > Test Webhook</DialogTitle>;'
            <DialogDescription className='text - zinc - 400'>;'
</DialogDescription>
            </DialogDescription>;
          </DialogHeader>;
            <>;'
              <div className='space - y-4 py - 4'>;'
</div>'
                <div className='space - y-2'>;'
</div>'
                  <Label html_for='test - event - type'>Event Type</Label>;'
                  <Select;
                    value={testEventType}
                    onValueChange={value =>;
</Select>'
                    <SelectTrigger className='bg - zinc - 800 border - zinc - 700'>;'
</SelectTrigger>'
                      <SelectValue placeholder='Select an event type' />;'
</SelectValue>
                    </SelectTrigger>;'
                    <SelectContent className='bg - zinc - 900 border - zinc - 800'>;'
</SelectContent>
                      {event_options.map (option => (                        <SelectItem key={option.value} value={option.value}>                      {event_options.map ((option, ) => (
</SelectItem>'
                    <SelectContent className="bg - zinc - 900 border - zinc - 800">;"
</SelectContent>
                        <SelectItem key={option.value} value={option.value}>;
</SelectItem>)
                        </SelectItem>))}
                    </SelectContent>;
                  </Select>;"
                  <p className='text - xs text - zinc - 500'>;'
</p>
                  </p>;
                </div>;
              </div>;
                <Button;'
                  variant='outline''
                  onClick={() => setShowTestDialog(null)}
</Button>
                </Button>;
                <Button;
                  onClick={() =>;
</Button>
              <DialogFooter>
</DialogFooter>'
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>"
</Button>
                </Button>




                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>
</Button>
                </Button>
              </DialogFooter>
            </>
          ) : (
            <>


                >                  Send Test                  </p>;
                </div>;
              </div>;
              <DialogFooter>;
</DialogFooter>)"
                <Button variant="outline" onClick={() => setShowTestDialog(null)}>;"
</Button>
                </Button>;
                <Button onClick={() => showTestDialog && handleTestWebhook(showTestDialog)}>;
</Button>
                </Button>;
              </DialogFooter>;
            </>;
          ) : (;
            <>;"
              <div className='space-y-4 py-4'>;'
</div>'
                <div className='space-y-2'>;'
</div>'
                  <div className='flex items-center justify-between'>;'
</div>
                    <Label>Response Status</Label>;
                    <Badge;
                      className={
                        testResult &&
                        testResult.status>= 200 &&;
</Badge>
                        testResult.status < 300;'
                          ? 'bg-green-700';''
                          : 'bg-red-700'                      }              <div className="space-y-4 py-4">;"
</div>"
                <div className="space-y-2">;"
</div>"
                  <div className="flex items-center justify-between">;"
</div>
                    <Label>Response Status</Label>;
                    <Badge;
                      className = {
                        testResult && testResult.status>= 200 && testResult.status < 300;
</Badge>"
              <div className="space-y-4 py-4">"
</div>"
                <div className="space-y-2">"
</div>"
                  <div className="flex items-center justify-between">"
</div>
                    <Label>Response Status</Label>
                    <Badge;
                      className={

                      {testResult?.status} {testResult?.statusText}

                  

                  

"
                  <div className="space-y-2 mt-4">"
</Badge>
                    <Label>Response Body</Label>"
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">"
</ScrollArea>"
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">"
</pre>
                    </ScrollArea>
                  </div>
                </div>
              </div>


                    </Badge>;
                  </div>;"
                  <div className='space-y-2 mt-4'>;'
</div>
                    <Label>Response Body</Label>;'
                    <ScrollArea className='h-[200px] rounded border border-zinc-800 bg-black p-4'>;'
</ScrollArea>'
                      <pre className='text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all'>;'
</pre>'
                        {testResult?.responseBody || 'No response body'}                      </pre>                  ;''
                  <div className="space-y-2 mt-4">;"
</div>
                    <Label>Response Body</Label>;"
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;"
</ScrollArea>"
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;"
</pre>
              <DialogFooter>;
</DialogFooter>
                <Button;"
                  variant='outline';')
                  on_click={() => setShowTestDialog (null)}
</Button>
                </Button>;
                <Button;
                  on_click={() =>;
</Button>
                >                  Send Test                  </p>;
                </div>;
              </div>;
              <DialogFooter>;
</DialogFooter>'
                <Button variant="outline" on_click={() => setShowTestDialog (null)}>;"
</Button>
                </Button>;
                <Button on_click={() => showTestDialog && handleTestWebhook (showTestDialog)}>;
</Button>
                </Button>;
              </DialogFooter>;
            </>) : (
            <>;"
              <div className='space - y-4 py - 4'>;'
</div>'
                <div className='space - y-2'>;'
</div>'
                  <div className='flex items - center justify - between'>;'
</div>
                    <Label > Response Status</Label>;
                    <Badge;
                      className={
                        test_result &&;
                        test_result.status >= 200 &&;
</Badge>
                        test_result.status < 300;'
                          ? 'bg - green - 700';''
                          : 'bg - red - 700'                      }              <div className="space - y-4 py - 4">;"
</div>"
                <div className="space - y-2">;"
</div>"
                  <div className="flex items - center justify - between">;"
</div>
                    <Label > Response Status</Label>;
                    <Badge;
                      class_name = {
                        test_result && test_result.status >= 200 && test_result.status < 300;
</Badge>
                    </Badge>;
                  </div>;"
                  <div className='space - y-2 mt - 4'>;'
</div>
                    <Label > Response Body</Label>;'
                    <ScrollArea className='h-[200px] rounded border border - zinc - 800 bg - black p - 4'>;'
</ScrollArea>'
                      <pre className='text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all'>;'
</pre>'
                        {test_result?.response_body || 'No response body'}                      </pre>;''
                  <div className="space - y-2 mt - 4">;"
</div>
                    <Label > Response Body</Label>;"
                    <ScrollArea className="h-[200px] rounded border border - zinc - 800 bg - black p - 4">;"
</ScrollArea>"
                      <pre className="text - xs font - mono text - zinc - 300 whitespace - pre - wrap break - all">;"
</pre>
                    </ScrollArea>;
                  </div>;
                </div>;
              </div>;
                </Button>;
                <Button;"
                  variant='outline''
                </Button>
              </DialogFooter>
            </>

                    </Badge>;
                  </div>;'
                  <div className="space-y-2 mt-4">;"
</div>
                    <Label>Response Body</Label>;"
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">;"
</ScrollArea>"
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">;"
</pre>

                      </pre>;
                    </ScrollArea>;
                  </div>;
                </div>;
              </div>;

              <DialogFooter>;
</DialogFooter>)"
                <Button variant="default" onClick={() => {;"
</Button>
                </Button>;"
                <Button variant="outline" onClick={() => {;"
</Button>
                </Button>;
              </DialogFooter>;
            </>;


          )}
        </DialogContent>
      </Dialog>"
                >                  Test Another Event                <Button variant="outline" onClick={() => {;"
</Button>

                </Button>;
              </DialogFooter>;
            </>;
          )}
        </DialogContent>;

      </Dialog>;
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
</AlertDialogFooter>


            <AlertDialogAction;
              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm),}
</AlertDialogAction>
      <AlertDialog;
        open={showDeleteConfirm !== null} 
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
</AlertDialog>"
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">"
</AlertDialogContent>
          <AlertDialogHeader>
</AlertDialogHeader>
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>"
            <AlertDialogDescription className="text-zinc-400">"
</AlertDialogDescription>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
</AlertDialogFooter>"
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">"
</AlertDialogCancel>
            </AlertDialogCancel>


            <AlertDialogAction;
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
</AlertDialogAction>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
            <AlertDialogAction;
              onClick = {() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm),}
</AlertDialogAction>"
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">;"
</AlertDialogContent>
          <AlertDialogHeader>;
</AlertDialogHeader>
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>;"
            <AlertDialogDescription className="text-zinc-400">;"
</AlertDialogDescription>
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
</AlertDialogFooter>"
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">;"
</AlertDialogCancel>
            </AlertDialogCancel>;
            <AlertDialogAction;
              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}
</AlertDialogAction>

            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

    </Card>;"
setSelectedEvents (prev => prev && prev.includes (event) ? prev && prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <WebhookclassName="mr-2" size= {"
</Card>"
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialogopen= {"
  showCreateDialog;
}onOpenChange= {"
  setShowCreateDialog "")"
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window && window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {;"
  eventOptions && eventOptions.map ( (event) => (<divkey= {"
  event && event.value """
}className="flex items-center space-x-2"> <Checkboxid= {"
</divkey>
}/> <LabelhtmlFor= {"
  event && event.value "")"
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> </Label> </div>) ) ;"
</LabelhtmlFor>
}</div> </div> </div> <DialogFooter> ;
</DialogFooter>

}> Cancel </Button> <ButtononClick={
  handleCreateWebhook;"
}disabled= {"""
  webhookName && webhookName.trim () === ""||"
}> Create Webhook </Button> </DialogFooter> </DialogContent> </Dialog> </div> {;
</ButtononClick>"
}<div className="space-y-4"> {";"
</div>"
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks && webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <WebhookclassName="mx-auto mb-2 opacity-30"size= {""
  24 "")"
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks && webhooks.map ( (webhook) => (<divkey= {""
  webhook && webhook.id """
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {;"
</div>"
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globesize= {"
</div>"
}className="mr-1"/> <span className="max-w-md truncate"> {;"
</span>"
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItemonClick={")"
  () => setShowTestDialog (webhook && webhook.id) ";""
}className="cursor-pointer"> <PlayCirclesize= {""
  14 """
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItemonClick={"
</PlayCirclesize>"
}className="cursor-pointer text-red-500"> <Xsize= {""
  14 """
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badgekey= {"
</Xsize>"
}</Badge>) ) ";""
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {';'
</div>
}</span> {;'
  webhook && webhook.last triggered at && (<span>Last triggered: {';'
</span>)
}</span>) ;'
}</div> </div>) ) ) ";""
}</div> </CardContent> <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div> </Button> </CardFooter> {;"
}<Dialogopen= {
  showTestDialog !== null;
}onOpenChange= {
  (open) => {;
</Dialogopen>"
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {";"
</DialogContent>"
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type</Label> <Selectvalue= {"
</div>"
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {;")
  eventOptions && eventOptions.map ( (option) => (<SelectItemkey= {
  option && option.value;
}value= {
  option && option.value;
}> {;
</SelectItemkey>)"
}</SelectItem>) ) ";""
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <ButtononClick={""
  () => showTestDialog && handleTestWebhook (showTestDialog) ";""
}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status</Label> <Badge > {;"
</div>)"
}</Badge> </div> <div className="space-y-2 mt-4"> <Label>Response Body</Label> <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre> </ScrollArea> </div> </div> </div> <DialogFooter> setShowTestDialog (null);"
setShowTestResult (false);
clearTestResult ();

}> Close </Button> Test Another Event </Button> </DialogFooter> </>) ;
}</DialogContent> </Dialog> {;
}<AlertDialogopen= {
  showDeleteConfirm !== null;
}onOpenChange= {"
  (open) => !open && setShowDeleteConfirm (null) ";"
</AlertDialogopen>"
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) ;""
setSelectedEvents (prev => prev.includes (event) ? prev.filter (e => e !== event) return (<Card className="bg-zinc-900 border-zinc-800 text-white"> <CardHeader> <CardTitle className="text-xl flex items-center"> <Webhook className="mr-2" size= {"
</Card>"
}/> Webhooks </CardTitle> <CardDescription className="text-zinc-400"> Set up webhooks to get notified when events happen in your Zion account. </CardDescription> </CardHeader> <CardContent> <div className="flex justify-between items-center mb-6"> </p> <Dialog open= {"
  showCreateDialog;
}onOpenChange= {"
  setShowCreateDialog "")"
}> <DialogTrigger asChild> </Button> </DialogTrigger> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Add a webhook endpoint to receive event notifications. </DialogDescription> </DialogHeader> <div className="space-y-4 py-4"> <div className="space-y-2" > <Label htmlFor="webhook-name" >Webhook Name</Label> <Input className="bg-zinc-800 border-zinc-700" /> </div> className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> The window.URL where webhook payloads will be sent when events occur. </p> </div> <div className="space-y-2" > <Label htmlFor="webhook-secret" >Secret Key (Optional) </Label> <Input className="bg-zinc-800 border-zinc-700" /> <p className="text-xs text-zinc-500"> Used to verify webhook payload signatures. Keep it secret and secure. </p> </div> <div className="space-y-2"> <Label>Event Types</Label> <div className="grid gap-2 pt-2"> {"
  eventOptions.map ( (event) => (<div key= {"
  event.value """
}className="flex items-center space-x-2"> <Checkbox id= {"
</div>
}/> <Label htmlFor= {"
  event.value "")"
}className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > </Label> </div>) )"
}</div> </div> </div> <DialogFooter>
</DialogFooter>
}> Cancel </Button> <Button onClick={
  handleCreateWebhook;"
}disabled= {"""
  webhookName.trim () === ""||"
}> Create Webhook </Button> </DialogFooter> </DialogContent> </Dialog> </div> {"
}<div className="space-y-4"> {""
</div>"
  loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500"> <Webhook className="mx-auto mb-2 opacity-30"size= {""
  24 "")"
}/> <p>No webhooks found.</p> <p className="text-sm mt-1">Create one to receive event notifications.</p> </div>) : (webhooks.map ( (webhook) => (<div key= {""
  webhook.id """
}className="p-4 border border-zinc-800 rounded-lg"> <div className="flex items-center justify-between"> <div> <h3 className="font-medium"> {"
</div>"
}</h3> <div className="flex items-center text-sm text-zinc-400 mt-1"> <Globe size= {"
</div>"
}className="mr-1"/> <span className="max-w-md truncate"> {"
</span>"
}</span> </div> </div> <div className="flex items-center space-x-2"> <div className="flex items-center mr-2"> <Switch </span> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className="bg-zinc-900 border-zinc-800 text-white"> <DropdownMenuItem onClick={")"
  () => setShowTestDialog (webhook.id) """
}className="cursor-pointer"> <PlayCircle size= {""
  14 """
}className="mr-2"/> Test </DropdownMenuItem> <DropdownMenuItem onClick={"
</PlayCircle>"
}className="cursor-pointer text-red-500"> <X size= {""
  14 """
}className="mr-2"/> Delete </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </div> </div> <Badge key= {"
</X>"
}</Badge>) ) """
}</div> <div className="mt-3 text-xs text-zinc-500 flex items-center space-x-4"> <span>Created: {''
</div>
}</span> {'
  webhook.last triggered at && (<span>Last triggered: {''
</span>)
}</span>) '
}</div> </div>) ) ) """
}</div> </CardContent> <CardFooter className="justify-between border-t border-zinc-800 py-4"> <div className="text-xs text-zinc-500"> Webhooks will be sent with HTTPS POST requests to your endpoint. </div> </Button> </CardFooter> {"
}<Dialog open= {
  showTestDialog !== null;
}onOpenChange= {
  (open) => {
</Dialog>"
}> <DialogContent className="bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Test Webhook</DialogTitle> <DialogDescription className="text-zinc-400"> Send a test webhook to your endpoint. </DialogDescription> </DialogHeader> {""
</DialogContent>"
  !showTestResult ? (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <Label htmlFor=" test-event-type">Event Type</Label> <Select value= {"
</div>"
}> <SelectTrigger className="bg-zinc-800 border-zinc-700"> <SelectValue placeholder=" Select an event type"/> </SelectTrigger> <SelectContent className="bg-zinc-900 border-zinc-800"> {")
  eventOptions.map ( (option) => (<SelectItem key= {


  option.value;
}value= {
  option.value;
}> {
</SelectItem>)"
}</SelectItem>) ) """
}</SelectContent> </Select> <p className="text-xs text-zinc-500"> The event type will determine the structure of the test payload. </p> </div> </div> <DialogFooter> Cancel </Button> <Button onClick={""
  () => showTestDialog && handleTestWebhook (showTestDialog) """
}> Send Test </Button> </DialogFooter> </>) : (<> <div className="space-y-4 py-4"> <div className="space-y-2"> <div className="flex items-center justify-between"> <Label>Response Status</Label> <Badge > {"
</div>)"
}</Badge> </div> <div className="space-y-2 mt-4"> <Label>Response Body</Label> <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4"> </pre> </ScrollArea> </div> </div> </div> <DialogFooter> setShowTestDialog (null)"
setShowTestResult (false)
clearTestResult ()

}


}> Close </Button> Test Another Event </Button> </DialogFooter> </>) 
}</DialogContent> </Dialog> {
}<AlertDialog open= {
  showDeleteConfirm !== null;
}onOpenChange= {"
  (open) => !open && setShowDeleteConfirm (null) ""
</AlertDialog>"
}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>)""
            <AlertDialogCancel className='bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700'>;'
</AlertDialogCancel>
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() =>;
</AlertDialogAction>
            <AlertDialogAction;
              on_click = {() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm), }
</AlertDialogAction>'
        <AlertDialogContent className="bg - zinc - 900 border - zinc - 800 text - white">;"
</AlertDialogContent>
          <AlertDialogHeader>;
</AlertDialogHeader>
            <AlertDialogTitle > Delete Webhook?</AlertDialogTitle>;"
            <AlertDialogDescription className="text - zinc - 400">;"
</AlertDialogDescription>
            </AlertDialogDescription>;
          </AlertDialogHeader>;
          <AlertDialogFooter>;
</AlertDialogFooter>"
            <AlertDialogCancel className="bg - transparent text - white hover:bg - zinc - 800 border - zinc - 700">;"
</AlertDialogCancel>
            </AlertDialogCancel>;
            <AlertDialogAction;
              on_click={() => showDeleteConfirm && handleDeleteWebhook (showDeleteConfirm)}
</AlertDialogAction>

            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;

    </Card>);"

