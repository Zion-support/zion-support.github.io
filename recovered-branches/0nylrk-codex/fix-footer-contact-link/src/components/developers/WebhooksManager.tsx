
import {useState, useEffect} from "react";
import {format} from "date-fns";
import {Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X} from "lucide-react";
import {useWebhooks, type, WebhookEventType} from "@/hooks/useWebhooks";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {Badge} from "@/components/ui/badge";
import {Switch} from "@/components/ui/switch";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from "@/components/ui/alert-dialog";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false);
  // Create webhook form state;

  const [webhookName, setWebhookName] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");

  const [webhookSecret, setWebhookSecret] = useState("");
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]);
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application');
  // Load webhooks on mount;
  useEffect(() => {;
    fetchWebhooks();
  }, []);



import { useState, useEffect } from "react",

import { format } from "date-fns",
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from "lucide-react",

import { useWebhooks, type WebhookEventType } from "@/hooks/useWebhooks",
"
import { Button } from "@/components/ui/button","
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card","
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog","
import { Input } from "@/components/ui/input","
import { Checkbox } from "@/components/ui/checkbox","
import { Label } from "@/components/ui/label","
import { Badge } from "@/components/ui/badge","
import { Switch } from "@/components/ui/switch","
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu","
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog","
import { ScrollArea } from "@/components/ui/scroll-area","
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",

export function WebhooksManager() {}
  const {}

    webhooks,
    loading,
    testResult,
    fetchWebhooks,
    createWebhook,
    toggleWebhook,
    deleteWebhook,

    testWebhook,


    clearTestResult



  } = useWebhooks(),
  
  const [showCreateDialog, setShowCreateDialog] = useState(false),
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),
  const [showTestDialog, setShowTestDialog] = useState<string | null>(null),
  const [showTestResult, setShowTestResult] = useState(false),


  // Create webhook form state
  const [webhookName, setWebhookName] = useState(""),
  const [webhookUrl, setWebhookUrl] = useState(""),
  const [webhookSecret, setWebhookSecret] = useState(""),
  const [selectedEvents, setSelectedEvents] = useState<WebhookEventType[]>([]),
  const [testEventType, setTestEventType] = useState<WebhookEventType>('new_application'),


    await createWebhook(
      webhookName
      webhookUrl
      selectedEvents
      webhookSecret.trim() === "" ? undefined : webhookSecret


    resetWebhookForm()
  }
  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {}
    await toggleWebhook(webhookId, !currentStatus)


    ),
    

    setShowCreateDialog(false),
    resetWebhookForm()
  },

  const handleToggleStatus = async (webhookId: string, currentStatus: boolean) => {
    await toggleWebhook(webhookId, !currentStatus)
  },




  const handleDeleteWebhook = async (webhookId: string) => {
    await deleteWebhook($2);
    setShowDeleteConfirm(null)
  },

  const handleTestWebhook = async (webhookId: string) => {

    await testWebhook(webhookId, testEventType);
    setShowTestResult(true)


  },

  const resetWebhookForm = () => {
    setWebhookName("");
    setWebhookUrl("");

    setWebhookSecret("");



  // Event type options
  const eventOptions: { value: WebhookEventType, label: string, description: string }[] = [
    { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' }
    { value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' }
    { value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' }

    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }]
  // Toggle an event selection;
  const toggleEvent = (event: WebhookEventType) => {}


    setSelectedEvents(prev =>
      prev.includes(event)
        ? prev.filter(e => e !== event)
        : [...prev, event]
    )


  },


  return (

    <Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>"
        <CardTitle className="text-xl flex items-center">"
          <Webhook className="mr-2" size={20} /> Webhooks;
        </CardTitle>"

        <CardDescription className="text-zinc-400">
          Set up webhooks to get notified when events happen in your Zion account.
        </CardDescription>
      </CardHeader>

      <CardContent>"
        <div className="flex justify-between items-center mb-6">"
          <p className="text-sm text-zinc-400">'
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>"
              <Button variant="default">"
                <Plus size={16} className="mr-1" /> Add Webhook;
              </Button>
            </DialogTrigger>"
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
              <DialogHeader>
                <DialogTitle>Create Webhook</DialogTitle>"
                <DialogDescription className="text-zinc-400">
                  Add a webhook endpoint to receive event notifications.
                </DialogDescription>
              </DialogHeader>"
              <div className="space-y-4 py-4">"
                <div className="space-y-2">"
                  <Label htmlFor="webhook-name">Webhook Name</Label>
                  <Input"
                    id="webhook-name"
                    value={webhookName}
                    onChange={(e) => setWebhookName(e.target.value)}"
                    placeholder="e.g. Application Notifications""
                    className="bg-zinc-800 border-zinc-700"
                  />
                </div>"
                <div className="space-y-2">"
                  <Label htmlFor="webhook-url">Endpoint URL</Label>
                  <Input"
                    id="webhook-url"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}"
                    placeholder="https://example.com/webhook""
                    className="bg-zinc-800 border-zinc-700"
                  />"
                  <p className="text-xs text-zinc-500">
                    The URL where webhook payloads will be sent when events occur.
                  </p>
                </div>"
                <div className="space-y-2">"
                  <Label htmlFor="webhook-secret">Secret Key (Optional)</Label>

    { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' }],;


  // Toggle an event selection;
  const toggleEvent = (event: WebhookEventType) => {;

    setSelectedEvents(prev => ;
      prev && prev.includes(event) ;
        ? prev && prev.filter(e => e !== event) ;
        : [...prev, event];
    );
  };

  return (

        <CardDescription className="text-zinc-400">;
          Set up webhooks to get notified when events happen in your Zion account.;
        </CardDescription>;
      </CardHeader>;



                <DialogDescription className="text-zinc-400">;
                  Add a webhook endpoint to receive event notifications.;
                </DialogDescription>;
              </DialogHeader>;



                  <p className="text-xs text-zinc-500">;
                    The URL where webhook payloads will be sent when events occur.;
                  </p>;
                </div>;




                  <Input

                    id="webhook-secret"
                    type="password"
                    value={webhookSecret}


                    onChange={(e) => setWebhookSecret(e.target.value)}
                    placeholder="••••••••••••••••"
                    className="bg-zinc-800 border-zinc-700"
                  />
                  <p className="text-xs text-zinc-500">
                    Used to verify webhook payload signatures. Keep it secret and secure.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label>Event Types</Label>
                  <div className="grid gap-2 pt-2">
                    {eventOptions.map((event) => (
                      <div key={event.value} className="flex items-center space-x-2">

                    onChange={(e) => setWebhookSecret(e && e.target.value)}

                    placeholder="••••••••••••••••";

                    className="bg-zinc-800 border-zinc-700";
                  />;"

                  <p className="text-xs text-zinc-500">;
                    Used to verify webhook payload signatures. Keep it secret and secure.;
                  </p>;
                </div>;



                        <Label
                          checked={selectedEvents.includes(event.value)}
                          onCheckedChange={() => toggleEvent(event.value)}
                        />

                        <Label
                          htmlFor={event.value}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >

                          {event.label}
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>
                        </Label>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
              <DialogFooter>

                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">;
                          {event && event.label}"

                          <span className="block text-xs text-zinc-400 mt-1">{event && event.description}</span>;
                        </Label>;
                      </div>;
                    ))}

import { useState, useEffect } from './react';
import { format } from './date - fns';
import { Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X } from './lucide-react';
import { use_webhooks, type, WebhookEventType } from '@/hooks / use_webhooks';
;
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components / ui / dialog';
import { Input } from '@/components / ui / input';
import { Checkbox } from '@/components / ui / checkbox';
import { Label } from '@/components / ui / label';
import { Badge } from '@/components / ui / badge';
import { Switch } from '@/components / ui / switch';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components / ui / dropdown - menu';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components / ui / alert - dialog';
import { ScrollArea } from '@/components / ui / scroll - area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
export /**
 * WebhooksManager - Function description
 */
function WebhooksManager() {
  const {

    webhooks;
    loading;
    test_result;
    fetch_webhooks;
    create_webhook;
    toggle_webhook;
    delete_webhook;
    test_webhook;
    clearTestResult;
  } = use_webhooks ();
;
  const [showCreateDialog, setShowCreateDialog] = useState (false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState < string | null>(null);
  const [showTestDialog, setShowTestDialog] = useState < string | null>(null);
  const [showTestResult, setShowTestResult] = useState (false);
;

}
    await create_webhook (
      webhook_name,
      webhook_url,

      webhook_secret.trim () === "" ? undefined : webhook_secret);
;
    setShowCreateDialog (false);
    resetWebhookForm ();
  }
;

    await delete_webhook (webhook_id),
    setShowDeleteConfirm (null);
  }
;

    await test_webhook (webhook_id, testEventType);
    setShowTestResult (true);
  }
;

    setWebhookSecret ("");
    setSelectedEvents ([]);
  }
;
  // Event type options;

    setSelectedEvents (prev =>;
      prev.includes (event);
        ? prev.filter (e => e !== event);
        : [...prev, event]);
  }
;

        <CardDescription className="text - zinc - 400">;
          Set up webhooks to get notified when events happen in your Zion account.;
        </CardDescription>;
      </CardHeader>;

                      <div key={event.value} className="flex items - center space - x-2">;
                        <Checkbox;
                          id={event.value}
                          checked={selected_events.includes (event.value)}
                          onCheckedChange={() => toggle_event (event.value)}
                        />;
                        <Label;

                          html_for={event.value}
                          className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70";
                        >;
                          {event.label}
                          <span className="block text - xs text - zinc - 400 mt - 1">{event.description}</span>;


                          <span className="block text - xs text - zinc - 400 mt - 1">{event.description}</span>;

        "

                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>;

                        </Label>;
                      </div>))}
                  </div>;
                </div>;
              </div>;

                  setShowCreateDialog (false);
                  resetWebhookForm ();
                }}>;
                  Cancel;
                </Button>;

                <Button on_click={handleCreateWebhook} disabled={
                  webhook_name.trim () === "" ||;
                  webhook_url.trim () === "" ||;
                  selected_events.length === 0;

                }>;
                  Create Webhook;
                </Button>;
              </DialogFooter>;
            </DialogContent>;
          </Dialog>;
        </div>;


        <div className="space - y-4">;
          {loading ? (


                        checked={webhook.is_active}
                        onCheckedChange={() => handleToggleStatus (webhook.id, webhook.is_active)}
                      />;"
                      <span className="ml - 2 text - sm">;"
                        {webhook.is_active ? "Active" : "Inactive"}

      {/* Test Webhook Dialog */}
      <Dialog
        open={showTestDialog !== null}
      <Dialog 
        open={showTestDialog !== null} 
        onOpenChange={(open) => {
          if (!open) {
            setShowTestDialog(null);
            setTestEventType('new_application');
            if (showTestResult) {
              setShowTestResult(false);
              clearTestResult()

            }

          }
        }}



          {!showTestResult ? (;
            <>;"
              <div className="space-y-4 py-4">;"
                <div className="space-y-2">;"
                  <Label htmlFor="test-event-type">Event Type</Label>;


          }
        }}
                  <Select

                    value={testEventType}
                    onValueChange={(value) => setTestEventType(value as WebhookEventType)}
                  >;"
                    <SelectTrigger className="bg-zinc-800 border-zinc-700">;"
                      <SelectValue placeholder="Select an event type" />;
                    </SelectTrigger>;"
                    <SelectContent className="bg-zinc-900 border-zinc-800">;


                    The event type will determine the structure of the test payload.;
                  </p>;
                </div>;
              </div>;                  clearTestResult()

              </div>;

                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Response Status</Label>
                    <Badge
                      className={
                        testResult && testResult.status >= 200 && testResult.status < 300
                          ? "bg-green-700"
                          : "bg-red-700"
                      }
                    >
                      {testResult?.status} {testResult?.statusText}
                    </Badge>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label>Response Body</Label>
                    <ScrollArea className="h-[200px] rounded border border-zinc-800 bg-black p-4">
                      <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap break-all">
                        {testResult?.responseBody |"No response body"}
                      </pre>
                    </ScrollArea>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="default" onClick={() => {


                      </pre>;
                    </ScrollArea>;
                  </div>;
                </div>;
              </div>;




          )}
        </DialogContent>
      </Dialog>
      {/* Delete Webhook Confirmation Dialog */}
      <AlertDialog
        open={showDeleteConfirm !== null}
        onOpenChange={(open) => !open && setShowDeleteConfirm(null)}
      >
        <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Webhook?</AlertDialogTitle>
            <AlertDialogDescription className="text-zinc-400">
              This action will permanently remove this webhook.
              You will no longer receive events at this endpoint.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction

              onClick={() => showDeleteConfirm && handleDeleteWebhook(showDeleteConfirm)}


            >;
              Delete;

import {useState, useEffect} from "react";""
import {format} from "date-fns";""
import {Globe, MoreVertical, PlayCircle, Plus, RefreshCw, Webhook, X} from "lucide-react";""
import {useWebhooks, type, WebhookEventType} from "@/hooks/useWebhooks";""
import {Button} from "@/components/ui/button";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";""
import {Input} from "@/components/ui/input";""
import {Checkbox} from "@/components/ui/checkbox";""
import {Label} from "@/components/ui/label";""
import {Badge} from "@/components/ui/badge";""
import {Switch} from "@/components/ui/switch";""
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";""
import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from "@/components/ui/alert-dialog";""
import {ScrollArea} from "@/components/ui/scroll-area";""
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";"
export function WebhooksManager() {

  const {;
    webhooks;
    loading;
    testResult;
    fetchWebhooks;
    createWebhook;
    toggleWebhook;
    deleteWebhook;
    testWebhook;

  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null),

            </AlertDialogAction>;
          </AlertDialogFooter>;
        </AlertDialogContent>;
      </AlertDialog>;


    </Card>;
  ); export function WebhooksManager () {}
  const {};

}> <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Delete Webhook?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will permanently remove this webhook. You will no longer receive events at this endpoint. </AlertDialogDescription> </AlertDialogHeader> <AlertDialogFooter> <AlertDialogCancel className="bg-transparent text-white hover:bg-zinc-800 border-zinc-700"> Cancel </AlertDialogCancel> <AlertDialogAction > Delete </AlertDialogAction> </AlertDialogFooter> </AlertDialogContent> </AlertDialog> </Card>) 
}



