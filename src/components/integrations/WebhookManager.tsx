export function WebhookManager() {
  const { 
    webhooks,
    loading,     error,

import React, { useEffect, useState } from 'react';
import {;
  Card,;
  CardContent,;
  CardDescription,;
  CardFooter,;
  CardHeader,;
  CardTitle,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ClickableBadge } from '@/components/ui/clickable-badge';
import { PlusCircle, Save, Trash } from 'lucide-react';
import { useWebhooks, WebhookEventType } from '@/hooks/useWebhooks';
import {;
  Select,;
  SelectContent,;
  SelectItem,;
  SelectTrigger,;
  SelectValue,;
} from '@/components/ui/select';
import { toast } from 'sonner';
export function WebhookManager() {;
  const {;
    webhooks,;
    loading,;
    error,;
    testResult,;
    fetchWebhooks,;
    createWebhook,;
    toggleWebhook,;
    deleteWebhook,;
    testWebhook,;
  } = useWebhooks();
  const [newWebhook, setNewWebhook] = useState({
    name: "";
    url: "";
    selectedEvent: "" as WebhookEventType;
    eventTypes: [] as WebhookEventType[];
    secret: ""
  });
  const eventOptions: { value: WebhookEventType, label: string }[] = [
    { value: "new_application", label: "New Application Received" },
    { value: "quote_received", label: "Quote Request Received" },
    { value: "milestone_approved", label: "Milestone Approved" },
    { value: "talent_hired", label: "Talent Hired" }
  ],
  
  useEffect(() => {
    fetchWebhooks()
  }, []),
  
  const handleAddEvent = null;
