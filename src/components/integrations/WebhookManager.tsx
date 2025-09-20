interface Service {
  
id: string;
name: string;
}
}
}

import React from "react";
import { Card,;
CardContent;
, CardDescription;
CardFooter;
, CardHeader,;
CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ClickableBadge } from "@/components/ui/clickable-badge";
import { PlusCircle, Save, Trash } from "lucide-react";
                <ClickableBadge
//Reset form return (<div className="space-y-8"> <Card> <CardHeader> <CardTitle>Create Webhook</CardTitle> <CardDescription> Define webhooks to notify external systems when events occur in Zion. </CardDescription> </CardHeader> <CardContent className="space-y-4"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div className="space-y-2"> <Label htmlFor=" webhook-name">Webhook Name</Label> <Input /> </div> </div> <div className="space-y-2"> <Label>Events</Label> <div className="flex flex-wrap gap-2 mb-2"> {newWebhook.eventTypes.map (event => (<ClickableBadge key= {
  event}onRemove= {
  () => handleRemoveEvent (event)
}> {eventOptions.find (e => e.value === event) ?.label |event}</ClickableBadge>) ) "
}</div> <div className="flex space-x-2"> <Select value= {newWebhook.selectedEvent}onValueChange= {(value) => setNewWebhook ({
  ...newWebhook selectedEvent: value as WebhookEventType}) "
}> <SelectTrigger className="w-full"> <SelectValue placeholder=" Select event"/> </SelectTrigger> <SelectContent> {eventOptions.map (option => (<SelectItem key= {
  option.value}value= {option.value}> {option.label}</SelectItem>) ) "
}> {testResult.status}{