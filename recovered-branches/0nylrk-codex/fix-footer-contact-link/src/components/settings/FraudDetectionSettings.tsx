<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Switch  } from '@/components/ui/switch';
import { Button  } from '@/components/ui/button';
import { Label  } from '@/components/ui/label';
import { ShieldAlert, Info } from 'lucide-react';
import {


export function FraudDetectionSettings() {
=======
<<<<<<< HEAD
<<<<<<< HEAD




=======
<<<<<<< HEAD




>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React, { useState } from "react";
import {}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,";
} from "@/components/ui/card";"
import { Switch } from "@/components/ui/switch";"
import { Button } from "@/components/ui/button";"
import { Label } from "@/components/ui/label";"
import { ShieldAlert, Info } from "lucide-react";
<<<<<<< HEAD
import {
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const { user } = useAuth();
  const [messageScanningEnabled, setMessageScanningEnabled] = useState(true);
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState(true);
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
import React, { useState } from 'react',
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',
import { Switch } from '@/components/ui/switch',
import { Button } from '@/components/ui/button',
import { Label } from '@/components/ui/label',
import { ShieldAlert, Info } from 'lucide-react',import {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,";
} from "@/components/ui/accordion";"
import { toast } from "@/hooks/use-toast";"
import { supabase } from "@/integrations/supabase/client";"
import { useAuth } from "@/hooks/useAuth";
<<<<<<< HEAD
export function FraudDetectionSettings() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
export function FraudDetectionSettings() {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { user } = useAuth();
  const [messageScanningEnabled, setMessageScanningEnabled] = useState(true);
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] =
    useState(true);
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
  const handleSavePreferences = async () => {
=======
  const { user } = useAuth(),
  const [messageScanningEnabled, setMessageScanningEnabled] = useState(true),
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState(true),
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(true),
  const [isSaving, setIsSaving] = useState(false),
    const handleSavePreferences = async () => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    if (!user?.id) return;
    setIsSaving(true);
    try {
      // In a real implementation, we would save these preferences to the database
      // For now, we'll just simulate a successful save
<<<<<<< HEAD
      await new Promise((resolve) => setTimeout(resolve, 1000));
=======


=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const { user } = useAuth(),
  const [messageScanningEnabled, setMessageScanningEnabled] = useState(true),
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState(true),
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(true),
  const [isSaving, setIsSaving] = useState(false),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  const handleSavePreferences = async () => {
=======
    const handleSavePreferences = async () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    if (!user?.id) return;
    setIsSaving(true);
    try {
      // In a real implementation, we would save these preferences to the database
      // For now, we'll just simulate a successful save
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const handleSavePreferences = async () => {}
    if (!user?.id) return;
    setIsSaving(true);
    try {}
      // In a real implementation, we would save these preferences to the database;
      // For now, we'll just simulate a successful save;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({"
        title: "Settings saved","
        description: "Your fraud detection preferences have been updated.",
      });
<<<<<<< HEAD
    } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


      console.error('Error saving preferences:', error),


      toast({
        title: "Error"
        description: "Failed to save your preferences. Please try again."
        variant: "destructive"
      });
    } finally {
<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
      console.error('Error saving preferences:', error),
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      console.error("Error saving preferences:", error);
      toast({
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        title: "Error",
        description: "Failed to save your preferences. Please try again.",
        variant: "destructive",
      });
    } finally {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      setIsSaving(false);
    }

  },

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const handleSavePreferences = async () => {;
    if (!user?.id) return;
    setIsSaving(true);
    try {;
      // In a real implementation, we would save these preferences to the database;
      // For now, we'll just simulate a successful save;
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({;
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Settings saved",;
        description: "Your fraud detection preferences have been updated."});
    } catch (error) {;
      console && console.error('Error saving preferences:', error);
      toast({;
        title: "Error",;
        description: "Failed to save your preferences. Please try again.",;
=======
        title: "Settings saved",,
  description: "Your fraud detection preferences have been updated."});
    } catch (error) {;
      console && console.error('Error saving preferences:', error);
      toast({;
        title: "Error",,
  description: "Failed to save your preferences. Please try again.",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        title: "Settings saved",,
  description: "Your fraud detection preferences have been updated."});
    } catch (error) {;
      console && console.error('Error saving preferences:', error);
      toast({;
        title: "Error",,
  description: "Failed to save your preferences. Please try again.",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        variant: "destructive"});
    } finally {;
      setIsSaving(false);
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


  },



  return (

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
  return (

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
<<<<<<< HEAD
=======
  ;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

              <Switch
                id="message-scanning"
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}

              />;
            </div>;

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <Switch;
                id="message-scanning";
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              <Switch
                id="message-scanning"
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
              />
            </div>
=======
  }
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

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
<<<<<<< HEAD
<<<<<<< HEAD
                onCheckedChange={setAiAnalysisEnabled}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              />;
            </div>;
          </div>;

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
=======
=======
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

                </p>;
              </AccordionContent>;
            </AccordionItem>;
          </Accordion>;

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              />
            </div>
          </div>

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

          <div className="pt-2">
            <Button
              onClick={handleSavePreferences}
              disabled={isSaving}
              className="bg-zion-purple hover:bg-zion-purple-light"
            >
              {isSaving ? "Saving..." : "Save Preferences"}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
    } catch (error) {"
      console.error("Error saving preferences:", error);
      toast({"
        title: "Error","
        description: "Failed to save your preferences. Please try again.","
        variant: "destructive",
      });
    } finally {}
      setIsSaving(false);
    }



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </Button>
=======
                onCheckedChange={setAiAnalysisEnabled}            </Button>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                onCheckedChange={setAiAnalysisEnabled}            </Button>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

<<<<<<< HEAD
    setIsSaving(true);
    try {;
      // In a real implementation, we would save these preferences to the database;
      // For now, we'll just simulate a successful save;
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({;
        title: "Settings saved",,
  description: "Your fraud detection preferences have been updated."});
    } catch (error) {;
      console && console.error('Error saving preferences:', error);
      toast({;
        title: "Error",,
  description: "Failed to save your preferences. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsSaving(false);
    }
              <Switch
                id="message-scanning"
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
              <Switch
                id="activity-monitoring"
                checked={activityMonitoringEnabled}
                onCheckedChange={setActivityMonitoringEnabled}
              <Switch
                id="ai-analysis"
                checked={aiAnalysisEnabled}
                onCheckedChange={setAiAnalysisEnabled}
                </p>;
              </AccordionContent>;
            </AccordionItem>;
          </Accordion>;
            </Button>;
          </div>;
        </div>;
      </CardContent>;
  )  )
  )

};
mb-8"> <CardHeader className=" space-y-1"> <div className=" flex items-center gap-2"> <ShieldAlert className=" h-5 w-5 text-amber-500"/> <CardTitle className=" text-xl">Fraud & Abuse Protection</CardTitle> </div> <CardDescription> Configure privacy settings related to fraud detection and abuse prevention on the platform </CardDescription> </CardHeader> <CardContent> <div className=" space-y-6"> <div className=" space-y-4"> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" message-scanning"> Message Content Scanning </Label> <p className=" text-sm text-muted-foreground"> Scan message content for potentially harmful or abusive material </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" activity-monitoring"> Activity Monitoring </Label> <p className=" text-sm text-muted-foreground"> Monitor account activity for suspicious patterns </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" ai-analysis"> AI-powered Analysis </Label> <p className=" text-sm text-muted-foreground"> Use AI to analyze content and behavior for potential fraud </p> </div> <Switch /> </div> </div> <Accordion type=" single"collapsible className=" w-full"> <AccordionItem value=" item-1"> <AccordionTrigger className=" text-sm font-medium"> <div className=" flex items-center gap-2"> <Info className=" h-4 w-4"/> About Fraud Detection </div> </AccordionTrigger> <AccordionContent className=" text-sm text-muted-foreground"> <p className=" mb-2"> The Zion AI Marketplace uses automated fraud detection systems to protect our community. This includes: </p> <ul className=" list-disc pl-5 space-y-1 mb-2"> <li>Pattern detection in messages and job postings</li> <li>AI-powered content analysis</li> <li>Monitoring for suspicious account activities</li> </ul> <p> You can opt out of some of these protections, but this may limit your ability to use certain platform features. We prioritize keeping our marketplace safe while respecting your privacy. </p> </AccordionContent> </AccordionItem> </Accordion> <div className=" pt-2" > <Button </Button> </div> </div> </CardContent> </Card>) 
}
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


  )

  )



    </Card>;
  ),; export function FraudDetectionSettings () {}
  const {};
  user;
}= useAuth ();
const [messageScanningEnabled, setMessageScanningEnabled] = useState (true);
const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState (true);
const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState (true);
const [isSaving, setIsSaving] = useState (false);
const handleSavePreferences = async () => {}
  if (!user?.id) return;
try {}
}catch (error) {'
  console.error ('Error saving preferences:', error);
toast ({}
}finally {}
  setIsSaving (false) 
}




  )
  )


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
