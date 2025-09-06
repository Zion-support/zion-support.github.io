<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx

=======



========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
=======
import React, { useState } from 'react';
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Switch} from '@/components/ui/switch';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import {ShieldAlert, Info} from 'lucide-react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {toast} from '@/hooks/use-toast';
import {supabase} from '@/integrations/supabase/client';
import {useAuth} from '@/hooks/useAuth';
export function FraudDetectionSettings() {;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const { user } = useAuth();
  const [messageScanningEnabled, setMessageScanningEnabled] = useState(true);
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState(true);
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

  const handleSavePreferences = async () => {
    if (!user?.id) return;
    setIsSaving(true);
    try {
      // In a real implementation, we would save these preferences to the database
      // For now, we'll just simulate a successful save
      await new Promise((resolve) => setTimeout(resolve, 1000));
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from 'react',
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',
import { Switch } from '@/components/ui/switch',
import { Button } from '@/components/ui/button',
import { Label } from '@/components/ui/label',
import { ShieldAlert, Info } from 'lucide-react',
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger} from "@/components/ui/accordion",
import { toast } from '@/hooks/use-toast',
import { supabase } from '@/integrations/supabase/client',
import { useAuth } from '@/hooks/useAuth',
export function FraudDetectionSettings() {
  const { user } = useAuth(),
  const [messageScanningEnabled, setMessageScanningEnabled] = useState(true),
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState(true),
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(true),
  const [isSaving, setIsSaving] = useState(false),
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React, { useState } from 'react';

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
  
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const handleSavePreferences = async () => {
    if (!user?.id) return,
    
    setIsSaving(true),
    try {
      // In a real implementation, we would save these preferences to the database
      // For now, we'll just simulate a successful save
      await new Promise(resolve => setTimeout(resolve, 1000)),
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      toast({
        title: "Settings saved"
        description: "Your fraud detection preferences have been updated."
      });
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

      console.error('Error saving preferences:', error),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
console.error("Error saving preferences:", error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      console.error("Error saving preferences:", error);
      console.error('Error saving preferences:', error),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      toast({
        title: "Error"
        description: "Failed to save your preferences. Please try again."
        variant: "destructive"
<<<<<<< HEAD
      });
    } finally {
<<<<<<< HEAD
      setIsSaving(false);
    }
=======

      toast({
        title: "Settings saved",
        description: "Your fraud detection preferences have been updated.",
      });
    } catch (error) {
      console.error("Error saving preferences:", error);
      toast({
        title: "Error",
        description: "Failed to save your preferences. Please try again.",
        variant: "destructive",

      });
    } finally {
      setIsSaving(false);
    }
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
  },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
    <Card className="mb-8">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-amber-500" />
          <CardTitle className="text-xl">Fraud & Abuse Protection</CardTitle>
        </div>
        <CardDescription>
          Configure privacy settings related to fraud detection and abuse
          prevention on the platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium" htmlFor="message-scanning">
                  Message Content Scanning
                </Label>
                <p className="text-sm text-muted-foreground">
                  Scan message content for potentially harmful or abusive
                  material
                </p>
              </div>
<<<<<<< HEAD
========
  const handleSavePreferences = async () => {;
    if (!user?.id) return;
    setIsSaving(true);
    try {;
      // In a real implementation, we would save these preferences to the database;
      // For now, we'll just simulate a successful save;
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({;
        title: "Settings saved",;
        description: "Your fraud detection preferences have been updated."});
    } catch (error) {;
      console && console.error('Error saving preferences:', error);
      toast({;
        title: "Error",;
        description: "Failed to save your preferences. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsSaving(false);
    }
  }
  return (
=======

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
        title:"Settings saved",;
        description:"Your fraud detection preferences have been updated."}),;
    } catch (error) {;
      console.error('Error saving preferences:', error),;
      toast({;
        title:"Error",;
        description:"Failed to save your preferences. Please try again.",;
        variant:"destructive"}),;
    } finally {;
      setIsSaving(false),;
    }
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
              <Switch
                id="message-scanning"
=======
              <Switch;
                id="message-scanning";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
              />
            </div>
=======
              <Switch
                id="message-scanning"
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
              />
            </div>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium" htmlFor="activity-monitoring">
                  Activity Monitoring
                </Label>
                <p className="text-sm text-muted-foreground">
                  Monitor account activity for suspicious patterns
                </p>
              </div>
<<<<<<< HEAD
========
              />;
            </div>;
<<<<<<< HEAD
=======
            ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <div className="flex items-center justify-between">;
              <div>;
                <Label className="font-medium" htmlFor="activity-monitoring">;
                  Activity Monitoring;
                </Label>;
                <p className="text-sm text-muted-foreground">;
                  Monitor account activity for suspicious patterns;
                </p>;
              </div>;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
              <Switch
                id="activity-monitoring"
=======
              <Switch;
                id="activity-monitoring";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                checked={activityMonitoringEnabled}
                onCheckedChange={setActivityMonitoringEnabled}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
              />
            </div>
=======
              <Switch
                id="activity-monitoring"
                checked={activityMonitoringEnabled}
                onCheckedChange={setActivityMonitoringEnabled}
              />
            </div>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium" htmlFor="ai-analysis">
                  AI-powered Analysis
                </Label>
                <p className="text-sm text-muted-foreground">
                  Use AI to analyze content and behavior for potential fraud
                </p>
              </div>
<<<<<<< HEAD
========
              />;
            </div>;
<<<<<<< HEAD
=======
            ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <div className="flex items-center justify-between">;
              <div>;
                <Label className="font-medium" htmlFor="ai-analysis">;
                  AI-powered Analysis;
                </Label>;
                <p className="text-sm text-muted-foreground">;
                  Use AI to analyze content and behavior for potential fraud;
                </p>;
              </div>;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
              <Switch
                id="ai-analysis"
=======
              <Switch;
                id="ai-analysis";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                checked={aiAnalysisEnabled}
                onCheckedChange={setAiAnalysisEnabled}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
              />
            </div>
          </div>
=======
              <Switch
                id="ai-analysis"
                checked={aiAnalysisEnabled}
                onCheckedChange={setAiAnalysisEnabled}
              />
            </div>
          </div>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  About Fraud Detection
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                <p className="mb-2">
                  The Zion AI Marketplace uses automated fraud detection systems
                  to protect our community. This includes:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Pattern detection in messages and job postings</li>
                  <li>AI-powered content analysis</li>
                  <li>Monitoring for suspicious account activities</li>
                </ul>
                <p>
                  You can opt out of some of these protections, but this may
                  limit your ability to use certain platform features. We
                  prioritize keeping our marketplace safe while respecting your
                  privacy.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="pt-2">
            <Button
              onClick={handleSavePreferences}
              disabled={isSaving}
              className="bg-zion-purple hover:bg-zion-purple-light"
            >
              {isSaving ? "Saving..." : "Save Preferences"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
<<<<<<< HEAD

<<<<<<< HEAD
=======
  );
}
  )
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
export function FraudDetectionSettings() {;
  const { user } = useAuth(),;
  const [messageScanningEnabled, setMessageScanningEnabled] = useState(true),;
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState(true),;
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(true),;
  const [isSaving, setIsSaving] = useState(false),;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleSavePreferences = async () => {;
    if (!user?.id) return;

    setIsSaving(true);
    try {;
      // In a real implementation, we would save these preferences to the database;
      // For now, we'll just simulate a successful save;
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({;
        title: "Settings saved",;
        description: "Your fraud detection preferences have been updated."});
    } catch (error) {;
      console && console.error('Error saving preferences:', error);
      toast({;
        title: "Error",;
        description: "Failed to save your preferences. Please try again.",;
        variant: "destructive"});
    } finally {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setIsSaving(false);
    }


  },



  return (

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

              <Switch
                id="message-scanning"
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}

              />;
            </div>;

            <div className="flex items-center justify-between">;
              <div>;
                <Label className="font-medium" htmlFor="activity-monitoring">;
                  Activity Monitoring;
                </Label>;
                <p className="text-sm text-muted-foreground">;
                  Monitor account activity for suspicious patterns;
                </p>;
              </div>;

              <Switch
                id="activity-monitoring"
                checked={activityMonitoringEnabled}
                onCheckedChange={setActivityMonitoringEnabled}

              />;
            </div>;

            <div className="flex items-center justify-between">;
              <div>;
                <Label className="font-medium" htmlFor="ai-analysis">;
                  AI-powered Analysis;
                </Label>;
                <p className="text-sm text-muted-foreground">;
                  Use AI to analyze content and behavior for potential fraud;
                </p>;
              </div>;

              <Switch
                id="ai-analysis"
                checked={aiAnalysisEnabled}
                onCheckedChange={setAiAnalysisEnabled}

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
              />;
            </div>;
          </div>;
<<<<<<< HEAD
=======
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <Accordion type="single" collapsible className="w-full">;
            <AccordionItem value="item-1">;
              <AccordionTrigger className="text-sm font-medium">;
                <div className="flex items-center gap-2">;
                  <Info className="h-4 w-4" />;
                  About Fraud Detection;
                </div>;
              </AccordionTrigger>;
              <AccordionContent className="text-sm text-muted-foreground">;
                <p className="mb-2">;
                  The Zion AI Marketplace uses automated fraud detection systems to protect our community. This includes:;
                </p>;
                <ul className="list-disc pl-5 space-y-1 mb-2">;
                  <li>Pattern detection in messages and job postings</li>;
                  <li>AI-powered content analysis</li>;
                  <li>Monitoring for suspicious account activities</li>;
                </ul>;
                <p>;
                  You can opt out of some of these protections, but this may limit your ability to use certain platform features. ;
                  We prioritize keeping our marketplace safe while respecting your privacy.;
<<<<<<< HEAD
import React, { useState } from './react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';
import { Switch  } from '@/components / ui / switch';
import { Button  } from '@/components / ui / button';
import { Label  } from '@/components / ui / label';
import { ShieldAlert, Info  } from './lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components / ui / accordion';
import { toast  } from '@/hooks / use - toast';
import { supabase  } from '@/integrations / supabase / client';
import { use_auth  } from '@/hooks / use_auth';
export /**
 * FraudDetectionSettings - Function description
 */
function FraudDetectionSettings() {
  const { user } = use_auth ();
  const [messageScanningEnabled, setMessageScanningEnabled] = useState (true);
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] =;
    useState (true);
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState (true);
  const [is_saving, setIsSaving] = useState (false);
;
  const handleSavePreferences = async () => {
    // Check condition
if (return) {
  $2
}
    setIsSaving (true);
    try {
      // In a real implementation, we would save these preferences to the database;
      // For now, we'll just simulate a successful save;
      await new Promise ((resolve) => set_timeout (resolve, 1000));
;
      toast ({
        title: "Settings saved",
        description: "Your fraud detection preferences have been updated.",
      });
    } catch (error) {
      console.error ("Error saving preferences:", error);
      toast ({
        title: "Error",
        description: "Failed to save your preferences. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving (false);
    }
  }
;
  return (
    <Card className="mb - 8">;
      <CardHeader className="space - y-1">;
        <div className="flex items - center gap - 2">;
          <ShieldAlert className="h - 5 w - 5 text - amber - 500" />;
          <CardTitle className="text - xl">Fraud & Abuse Protection</CardTitle>;
        </div>;
        <CardDescription>;
          Configure privacy settings related to fraud detection and abuse;
          prevention on the platform;
        </CardDescription>;
      </CardHeader>;
      <CardContent>;
        <div className="space - y-6">;
          <div className="space - y-4">;
            <div className="flex items - center justify - between">;
              <div>;
                <Label className="font - medium" html_for="message - scanning">;
                  Message Content Scanning;
                </Label>;
                <p className="text - sm text - muted - foreground">;
                  Scan message content for potentially harmful or abusive;
                  material;
                </p>;
              </div>;
              <Switch;
                id="message - scanning";
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
              />;
            </div>;
            <div className="flex items - center justify - between">;
              <div>;
                <Label className="font - medium" html_for="activity - monitoring">;
                  Activity Monitoring;
                </Label>;
                <p className="text - sm text - muted - foreground">;
                  Monitor account activity for suspicious patterns;
                </p>;
              </div>;
              <Switch;
                id="activity - monitoring";
                checked={activityMonitoringEnabled}
                onCheckedChange={setActivityMonitoringEnabled}
              />;
            </div>;
            <div className="flex items - center justify - between">;
              <div>;
                <Label className="font - medium" html_for="ai - analysis">;
                  AI - powered Analysis;
                </Label>;
                <p className="text - sm text - muted - foreground">;
                  Use AI to analyze content and behavior for potential fraud;
                </p>;
              </div>;
              <Switch;
                id="ai - analysis";
                checked={aiAnalysisEnabled}
                onCheckedChange={setAiAnalysisEnabled}
              />;
            </div>;
          </div>;
          <Accordion type="single" collapsible className="w - full">;
            <AccordionItem value="item - 1">;
              <AccordionTrigger className="text - sm font - medium">;
                <div className="flex items - center gap - 2">;
                  <Info className="h - 4 w - 4" />;
                  About Fraud Detection;
                </div>;
              </AccordionTrigger>;
              <AccordionContent className="text - sm text - muted - foreground">;
                <p className="mb - 2">;
                  The Zion AI Marketplace uses automated fraud detection systems;
                  to protect our community. This includes:;
                </p>;
                <ul className="list - disc pl - 5 space - y-1 mb - 2">;
                  <li > Pattern detection in messages and job postings</li>;
                  <li > AI - powered content analysis</li>;
                  <li > Monitoring for suspicious account activities</li>;
                </ul>;
                <p>;
                  You can opt out of some of these protections, but this may;
                  limit your ability to use certain platform features. We;
                  prioritize keeping our marketplace safe while respecting your;
                  privacy.;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx

========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
                </p>;
              </AccordionContent>;
            </AccordionItem>;
          </Accordion>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx

            <Button
              onClick={handleSavePreferences}
              disabled={isSaving}
              className="bg-zion-purple hover:bg-zion-purple-light"
            >
              {isSaving ? "Saving..." : "Save Preferences"}

            </Button>
          </div>
        </div>
      </CardContent>
    </Card>

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
          <div className="pt - 2">;
            <Button;
              on_click={handleSavePreferences}
              disabled={is_saving}
              className="bg - zion - purple hover:bg - zion - purple - light";
            >;
              {is_saving ? "Saving..." : "Save Preferences"}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx

========
=======
          ;
          <div className="pt-2">;
            <Button ;
              onClick={handleSavePreferences}
              disabled={isSaving}
              className="bg-zion-purple hover:bg-zion-purple-light";
            >;
              {isSaving ? "Saving..." :"Save Preferences"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
            </Button>;
          </div>;
        </div>;
      </CardContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
    </Card>);
=======
    </Card>;
  ),; export function FraudDetectionSettings () {
  const {
  user 
}= useAuth ();
const [messageScanningEnabled, setMessageScanningEnabled] = useState (true);
const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState (true);
const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState (true);
const [isSaving, setIsSaving] = useState (false);
const handleSavePreferences = async () => {
  if (!user?.id) return;
try {
  
}catch (error) {
  console.error ('Error saving preferences:', error);
toast ({
  
}finally {
  setIsSaving (false) 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
<<<<<<< HEAD
;

=======

=======

  )
=======
  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
mb-8"> <CardHeader className=" space-y-1"> <div className=" flex items-center gap-2"> <ShieldAlert className=" h-5 w-5 text-amber-500"/> <CardTitle className=" text-xl">Fraud & Abuse Protection</CardTitle> </div> <CardDescription> Configure privacy settings related to fraud detection and abuse prevention on the platform </CardDescription> </CardHeader> <CardContent> <div className=" space-y-6"> <div className=" space-y-4"> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" message-scanning"> Message Content Scanning </Label> <p className=" text-sm text-muted-foreground"> Scan message content for potentially harmful or abusive material </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" activity-monitoring"> Activity Monitoring </Label> <p className=" text-sm text-muted-foreground"> Monitor account activity for suspicious patterns </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" ai-analysis"> AI-powered Analysis </Label> <p className=" text-sm text-muted-foreground"> Use AI to analyze content and behavior for potential fraud </p> </div> <Switch /> </div> </div> <Accordion type=" single"collapsible className=" w-full"> <AccordionItem value=" item-1"> <AccordionTrigger className=" text-sm font-medium"> <div className=" flex items-center gap-2"> <Info className=" h-4 w-4"/> About Fraud Detection </div> </AccordionTrigger> <AccordionContent className=" text-sm text-muted-foreground"> <p className=" mb-2"> The Zion AI Marketplace uses automated fraud detection systems to protect our community. This includes: </p> <ul className=" list-disc pl-5 space-y-1 mb-2"> <li>Pattern detection in messages and job postings</li> <li>AI-powered content analysis</li> <li>Monitoring for suspicious account activities</li> </ul> <p> You can opt out of some of these protections, but this may limit your ability to use certain platform features. We prioritize keeping our marketplace safe while respecting your privacy. </p> </AccordionContent> </AccordionItem> </Accordion> <div className=" pt-2" > <Button </Button> </div> </div> </CardContent> </Card>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
=======
  );
}
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
