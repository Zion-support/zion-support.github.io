
import React, { useEffect, useState } from "react",;
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { ClickableBadge } from "@/components/ui/clickable-badge",;
import { PlusCircle, Save, Trash } from 'lucide-react';
import { useWebhooks, WebhookEventType } from "@/hooks/useWebhooks",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { toast } from "sonner",;
;
export function WebhookManager() {;
  const { ;
    webhooks,;
    loading, ;
    error,;
    testResult,;
    fetchWebhooks,;
    createWebhook,;
    toggleWebhook,;
    deleteWebhook,;
    testWebhook;
  } = useWebhooks(),;
  ;
  const [newWebhook, setNewWebhook] = useState({;
    name:"",;
    url:"",;
    selectedEvent:"" as WebhookEventType,;
    eventTypes:[] as WebhookEventType[],;
    secret:"";
  }),;
  ;
  const eventOptions:{ value:WebhookEventType, label:string }[] = [;
    { value:"new_application", label:"New Application Received" },;
    { value:"quote_received", label:"Quote Request Received" },;
    { value:"milestone_approved", label:"Milestone Approved" },;
    { value:"talent_hired", label:"Talent Hired" }
  ],;
  ;
  useEffect(() => {;
    fetchWebhooks(),;
  }, []),;
  ;
  const handleAddEvent = () => {;
    if (!newWebhook.selectedEvent) return,;
    ;
    if (newWebhook.eventTypes.includes(newWebhook.selectedEvent)) {;
      toast.error("This event is already added"),;
      return,;
    }
    ;
    setNewWebhook({;
      ...newWebhook,;
      eventTypes:[...newWebhook.eventTypes, newWebhook.selectedEvent],;
      selectedEvent:"" as WebhookEventType;
    }),;
  },;
  ;
  const handleRemoveEvent = (event:WebhookEventType) => {;
    setNewWebhook({;
      ...newWebhook,;
      eventTypes:newWebhook.eventTypes.filter(e => e !== event);
    }),;
  },;
  ;
  const handleCreateWebhook = async () => {;
    if (!newWebhook.name || !newWebhook.url || newWebhook.eventTypes.length === 0) {;
      toast.error("Please fill in all required fields"),;
      return,;
    }
    ;
    await createWebhook(;
      newWebhook.name, ;
      newWebhook.url, ;
      newWebhook.eventTypes, ;
      newWebhook.secret || undefined;
    ),;
    ;
    // Reset form;
    setNewWebhook({;
      name:"",;
      url:"",;
      selectedEvent:"" as WebhookEventType,;
      eventTypes:[],;
      secret:"";
    }),;
  },;
  ;
  const handleTestWebhook = async (webhookId:string, eventType:WebhookEventType) => {;
    await testWebhook(webhookId, eventType),;
  },;
  ;
  return (;
    <div className="space-y-8">;
      <Card>;
        <CardHeader>;
          <CardTitle>Create Webhook</CardTitle>;
          <CardDescription>;
            Define webhooks to notify external systems when events occur in Zion.;
          </CardDescription>;
        </CardHeader>;
        <CardContent className="space-y-4">;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <div className="space-y-2">;
              <Label htmlFor="webhook-name">Webhook Name</Label>;
              <Input ;
                id="webhook-name" ;
                placeholder="e.g., Job Postings Webhook";
                value={newWebhook.name}
                onChange={(e) => setNewWebhook({...newWebhook, name:e.target.value})}
              />;
            </div>;
            ;
            <div className="space-y-2">;
              <Label htmlFor="webhook-url">URL</Label>;
              <Input ;
                id="webhook-url" ;
                placeholder="https://example.com/webhook";
                value={newWebhook.url}
                onChange={(e) => setNewWebhook({...newWebhook, url:e.target.value})}
              />;
            </div>;
          </div>;
          ;
          <div className="space-y-2">;
            <Label>Events</Label>;
            <div className="flex flex-wrap gap-2 mb-2">;
              {newWebhook.eventTypes.map(event => (;
                <ClickableBadge ;
                  key={event} ;
                  onRemove={() => handleRemoveEvent(event)}
                >;                  {eventOptions.find(e => e.value === event)?.label || event}
                </ClickableBadge>;
              ))}
            </div>;
            <div className="flex space-x-2">;
              <Select;
                value={newWebhook.selectedEvent}
                onValueChange={(value) => setNewWebhook({...newWebhook, selectedEvent:value as WebhookEventType})}
              >;
                <SelectTrigger className="w-full">;
                  <SelectValue placeholder="Select event" />;
                </SelectTrigger>;
                <SelectContent>;
                  {eventOptions.map(option => (;
                    <SelectItem key={option.value} value={option.value}>;                      {option.label}
                    </SelectItem>;
                  ))}
                </SelectContent>;
              </Select>;

          </div>;
        </CardContent>;
        <CardFooter>;
          <Button onClick={handleCreateWebhook}>;
            <Save className="h-4 w-4 mr-2" /> Create Webhook;
          </Button>;
        </CardFooter>;
      </Card>;

                        </Button>;
                      </div>;
                    </div>;
                  </div>;
                </CardHeader>;

                  >;
                    <SelectTrigger className="w-[180px]">;
                      <SelectValue placeholder="Test webhook" />;
                    </SelectTrigger>;
                    <SelectContent>;

                  </pre>;
                </div>;
              </div>;
            </CardContent>;
          </Card>;
        )}
      </div>;
    </div>;

  (value) => setNewWebhook ({;
  ...newWebhook, selectedEvent: value as WebhookEventType ;
}) ";
}> <SelectTrigger className="w-full"> <SelectValue placeholder=" Select event"/> </SelectTrigger> <SelectContent> {;

}> <SelectTrigger className="w-[180px]"> <SelectValue placeholder=" Test webhook"/> </SelectTrigger> <SelectContent> </SelectItem>) ) ;
}</SelectContent> </Select> </CardFooter> </Card>) ) ;
}</div>) ;
}{";
