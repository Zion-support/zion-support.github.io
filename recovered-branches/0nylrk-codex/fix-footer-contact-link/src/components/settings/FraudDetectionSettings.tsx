





import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Switch  } from '@/components/ui/switch';
import { Button  } from '@/components/ui/button';
import { Label  } from '@/components/ui/label';
import { ShieldAlert, Info } from 'lucide-react';
import {

  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ShieldAlert, Info } from "lucide-react";
import {
Accordion
  AccordionContent
  AccordionItem
  AccordionTrigger
} from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
export function FraudDetectionSettings() {
  const { user } = useAuth();
  const [messageScanningEnabled, setMessageScanningEnabled] = useState(true);
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] =
    useState(true);
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
const handleSavePreferences = async () => {
    if (!user?.id) return;
    setIsSaving(true);
    try {
      // In a real implementation, we would save these preferences to the database
      // For now, we'll just simulate a successful save
      await new Promise((resolve) => setTimeout(resolve, 1000));





      toast({
        title: "Settings saved"
        description: "Your fraud detection preferences have been updated."
      });
    } catch (error) {




      console.error('Error saving preferences:', error),




      toast({
        title: "Error"
        description: "Failed to save your preferences. Please try again."
        variant: "destructive"

      });
    } finally {

                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
              />
            </div>


import React, { useState } from 'react',;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',;
import { Switch } from '@/components/ui/switch',;
import { Button } from '@/components/ui/button',;
import { Label } from '@/components/ui/label',;
import { ShieldAlert, Info } from 'lucide-react',;
import {;
  Accordion,;
  AccordionContent,;
  AccordionItem,;
  AccordionTrigger} from "@/components/ui/accordion",;
import { toast } from '@/hooks/use-toast',;
import { supabase } from '@/integrations/supabase/client',;
import { useAuth } from '@/hooks/useAuth',;
;
export function FraudDetectionSettings() {;
  const { user } = useAuth(),;
  const [messageScanningEnabled, setMessageScanningEnabled] = useState(true),;
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState(true),;
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(true),;
  const [isSaving, setIsSaving] = useState(false),;
  ;
  const handleSavePreferences = async () => {;
    if (!user?.id) return,;
    ;
    setIsSaving(true),;
    try {;
      // In a real implementation, we would save these preferences to the database;
      // For now, we'll just simulate a successful save;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      ;
      toast({;
        title:"Settings saved",,
  description:"Your fraud detection preferences have been updated."}),;
    } catch (error) {;
      console.error('Error saving preferences:', error),;
      toast({;
        title:"Error",,
  description:"Failed to save your preferences. Please try again.",;
        variant:"destructive"}),;
    } finally {;
      setIsSaving(false),;
    }
  },;
;
  return (;
    <Card className="mb-8">;
      <CardHeader className="space-y-1">;
        <div className="flex items-center gap-2">;
          <ShieldAlert className="h-5 w-5 text-amber-500" />;
          <CardTitle className="text-xl">Fraud & Abuse Protection</CardTitle>;
        </div>;
        <CardDescription>;
          Configure privacy settings related to fraud detection and abuse prevention on the platform;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space-y-6">;
          <div className="space-y-4">;
            <div className="flex items-center justify-between">;
              <div>;
                <Label className="font-medium" htmlFor="message-scanning">;
                  Message Content Scanning;
                </Label>;
                <p className="text-sm text-muted-foreground">;
                  Scan message content for potentially harmful or abusive material;
                </p>;
              </div>;
              <Switch;
                id="message-scanning";
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}              <Switch
                id="activity-monitoring"
                checked={activityMonitoringEnabled}
                onCheckedChange={setActivityMonitoringEnabled}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>

                <Label className="font-medium" htmlFor="ai-analysis">
                  AI-powered Analysis
                </Label>
                <p className="text-sm text-muted-foreground">
                  Use AI to analyze content and behavior for potential fraud
                </p>
              </div>

              />;
            </div>;
            ;
            <div className="flex items-center justify-between">;
              <div>;
                <Label className="font-medium" htmlFor="ai-analysis">;
                  AI-powered Analysis;
                </Label>;
                <p className="text-sm text-muted-foreground">;
                  Use AI to analyze content and behavior for potential fraud;
                </p>;
              </div>;
              <Switch;
                id="ai-analysis";
                checked={aiAnalysisEnabled}







