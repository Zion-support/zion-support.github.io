import React, { useState } from 'react';
import { useState, useEffect } from 'react';
export default function Page() {
 from '@/components/ui/button';"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';"
import { Input } from '@/components/ui/input';"
import { Checkbox } from '@/components/ui/checkbox';"
import { Label } from '@/components/ui/label';"
import { Badge } from '@/components/ui/badge';"
import { Switch } from '@/components/ui/switch';"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';"
import { ScrollArea } from '@/components/ui/scroll-area';"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
export default function Page() {
;
    const handleTestWebhook = async(webhookId) => {

        await testWebhook(webhookId, testEventType);
        setShowTestResult(true)};
    const resetWebhookForm = () => {
"
        setWebhookName("");"
        setWebhookUrl("");"
        setWebhookSecret("");
        setSelectedEvents([])};
    // Event type options
    const eventOptions = ['
        { value: 'new_application', label: 'New Application', description: 'When a talent applies to a job' },
        { value: 'quote_received', label: 'Quote Received', description: 'When a quote is received from talent' },
        { value: 'milestone_approved', label: 'Milestone Approved', description: 'When a project milestone is approved' },
        { value: 'talent_hired', label: 'Talent Hired', description: 'When talent is hired for a project' },
    ];
    // Toggle an event selection
    const toggleEvent = (event) => {

        setSelectedEvents(prev => prev.includes(event)
            ? prev.filter(e => e !== event)
            [...prev, event])};"
    return (<Card className="bg-zinc-900 border-zinc-800 text-white">
      <CardHeader>"
        <CardTitle className="text-xl flex items-center">"
          <Webhook className="mr-2" size={20}/> Webhooks
        </CardTitle>"
        <CardDescription className="text-zinc-400">
          Set up webhooks to get notified when events happen in your Zion account.</CardDescription>
      </CardHeader>

      <CardContent>"
        <div className="flex justify-between items-center mb-6">"
          <p className="text-sm text-zinc-400">
            You have {webhooks.length} {webhooks.length === 1 ? 'webhook' : 'webhooks'}
          </p>

          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>"
              <Button variant="default">"
                <Plus size={16} className="mr-1"/> Add Webhook
              </Button>
            </DialogTrigger>"
            <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
              <DialogHeader>
                <DialogTitle>Create Webhook</DialogTitle>"
                <DialogDescription className="text-zinc-400">
                  Add a webhook endpoint to receive event notifications.</DialogDescription>
              </DialogHeader>
"
              <div className="space-y-4 py-4">"
                <div className="space-y-2">"
                  <Label htmlFor="webhook-name">Webhook Name</Label>"
                  <Input id="webhook-name" value={webhookName} onChange={(e) => setWebhookName(e.target.value)} placeholder="e.g. Application Notifications" className="bg-zinc-800 border-zinc-700"/>
                </div>
"
                <div className="space-y-2">"
                  <Label htmlFor="webhook-url">Endpoint URL</Label>"
                  <Input id="webhook-url" value={webhookUrl} onChange={(e) => setWebhookUrl(e.target.value)} placeholder="https://example.com/webhook" className="bg-zinc-800 border-zinc-700"/>"
                  <p className="text-xs text-zinc-500">
                    The URL where webhook payloads will be sent when events occur.</p>
                </div>
"
                <div className="space-y-2">"
                  <Label htmlFor="webhook-secret">Secret Key(Optional)</Label>"
                  <Input id="webhook-secret" type="password" value={webhookSecret} onChange={(e) => setWebhookSecret(e.target.value)} placeholder="Enter secret key"  className="bg-zinc-800 border-zinc-700"/>"
                  <p className="text-xs text-zinc-500">
                    Used to verify webhook payload signatures.Keep it secret and secure.</p>
                </div>
"
                <div className="space-y-2">
                  <Label>Event Types</Label>"
                  <div className="grid gap-2 pt-2">"
                    {eventOptions.map((event) => (<div key={event.value} className="flex items-center space-x-2">
                        <Checkbox id={event.value} checked={selectedEvents.includes(event.value)} onCheckedChange={() => toggleEvent(event.value)}/>"
                        <Label htmlFor={event.value} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {event.label}"
                          <span className="block text-xs text-zinc-400 mt-1">{event.description}</span>
                        </Label>
                      </div>))}
                  </div>
                </div>
              </div>

              <DialogFooter>"
                <Button variant="outline" onClick={() => {
            setShowCreateDialog(false);
            resetWebhookForm()}}>
                  Cancel
                </Button>"
                <Button onClick={handleCreateWebhook} disabled={webhookName.trim() === "" ||"
            webhookUrl.trim() === "" ||
            selectedEvents.length === 0}>
                  Create Webhook
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Webhooks List */}"
        <div className="space-y-4">"
          {loading ? (<div className="text-center py-8 text-zinc-500">Loading webhooks...</div>) : webhooks.length === 0 ? (<div className="text-center py-8 text-zinc-500">"
              <Webhook className="mx-auto mb-2 opacity-30" size={24}/>
              <p>No webhooks found.</p>"
              <p className="text-sm mt-1">Create one to receive event notifications.</p>"
            </div>) : (webhooks.map((webhook) => (<div key={webhook.id} className="p-4 border border-zinc-800 rounded-lg">"
                <div className="flex items-center justify-between">
                  <div>"
                    <h3 className="font-medium">{webhook.name}</h3>"
                    <div className="flex items-center text-sm text-zinc-400 mt-1">"
                      <Globe size={14} className="mr-1"/>"
                      <span className="max-w-md truncate">{webhook.url}</span>
                    </div>
                  </div>
"
                  <div className="flex items-center space-x-2">"
                    <div className="flex items-center mr-2">"
                      <Switch  checked={webhook.is_active} onCheckedChange = {

  () => handleToggleStatus(webhook.id,
  webhook.is_active)

}/>
                      <span className="ml-2 text-sm">
