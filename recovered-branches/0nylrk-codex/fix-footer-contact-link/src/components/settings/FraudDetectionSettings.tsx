<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======



<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Switch  } from '@/components/ui/switch';
import { Button  } from '@/components/ui/button';
import { Label  } from '@/components/ui/label';
import { ShieldAlert, Info } from 'lucide-react';
import {
<<<<<<< HEAD
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger} from "@/components/ui/accordion",
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
export function FraudDetectionSettings() {
  const { user } = useAuth($2);
  const [messageScanningEnabled, setMessageScanningEnabled] = useState($2);
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState($2);
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState($2);
  const [isSaving, setIsSaving] = useState($2);
  const handleSavePreferences = $2;
    setIsSaving($2);
    try {
      // In a real implementation, we would save these preferences to the database
      // For now, we'll just simulate a successful save
      await new Promise(resolve => setTimeout(resolve, 1000)),
      

=======

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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import React, { useState } from "react";
import {}

  Card,
  CardContent,
  CardDescription,
  CardHeader,

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

  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,";
} from "@/components/ui/accordion";"
import { toast } from "@/hooks/use-toast";"
import { supabase } from "@/integrations/supabase/client";"
import { useAuth } from "@/hooks/useAuth";

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const { user } = useAuth();
  const [messageScanningEnabled, setMessageScanningEnabled] = useState(true);
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState(true);
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  const handleSavePreferences = async () => {
    if (!user?.id) return;

    setIsSaving(true);
    try {
      // In a real implementation, we would save these preferences to the database
      // For now, we'll just simulate a successful save
      await new Promise((resolve) => setTimeout(resolve, 1000));
<<<<<<< HEAD

      toast({
        title: "Settings saved",
        description: "Your fraud detection preferences have been updated."})
    } catch (error) {
      console.error($2);
      toast({
        title: "Error",
        description: "Failed to save your preferences. Please try again.",
        variant: "destructive"})
    } finally {
      setIsSaving(false)
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

  const handleSavePreferences = async () => {

=======
<<<<<<< HEAD
  
import React, { useState } from 'react';

<<<<<<< HEAD
=======
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    if (!user?.id) return;
    setIsSaving(true);
    try {
      // In a real implementation, we would save these preferences to the database
      // For now, we'll just simulate a successful save
<<<<<<< HEAD

      await new Promise((resolve) => setTimeout(resolve, 1000));
=======
      await new Promise((resolve) => setTimeout(resolve, 1000));
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleSavePreferences = async () => {

    if (!user?.id) return;
    setIsSaving(true);
    try {
      // In a real implementation, we would save these preferences to the database
      // For now, we'll just simulate a successful save
<<<<<<< HEAD

      await new Promise((resolve) => setTimeout(resolve, 1000));
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      toast({"
        title: "Settings saved","
        description: "Your fraud detection preferences have been updated.",
      });

      console.error("Error saving preferences:", error);
      toast({

        title: "Error",
        description: "Failed to save your preferences. Please try again.",
        variant: "destructive",
      });
    } finally {

      setIsSaving(false);
>>>>>>> merged-prs-20250907-203621
    }

  },

  return (
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
<<<<<<< HEAD
              <Switch
                id="message-scanning"
=======

=======
      await new Promise(resolve => setTimeout(resolve, 1000)),
      
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Settings saved"
        description: "Your fraud detection preferences have been updated."
      });
    } catch (error) {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      console.error('Error saving preferences:', error),


<<<<<<< HEAD
console.error("Error saving preferences:", error);
      console.error("Error saving preferences:", error);
      console.error('Error saving preferences:', error),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      toast({
        title: "Error"
        description: "Failed to save your preferences. Please try again."
        variant: "destructive"
<<<<<<< HEAD

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
  }
  },

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
=======
      });
    } finally {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleSavePreferences = async () => {;
    if (!user?.id) return;
    setIsSaving(true);
    try {;
      // In a real implementation, we would save these preferences to the database;
      // For now, we'll just simulate a successful save;
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({;
<<<<<<< HEAD

        title: "Settings saved",,
  description: "Your fraud detection preferences have been updated."});
    } catch (error) {;
      console && console.error('Error saving preferences:', error);
      toast({;
        title: "Error",,
  description: "Failed to save your preferences. Please try again.",;

=======
        title: "Settings saved",;
        description: "Your fraud detection preferences have been updated."});
    } catch (error) {;
      console && console.error('Error saving preferences:', error);
      toast({;
        title: "Error",;
        description: "Failed to save your preferences. Please try again.",;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        variant: "destructive"});
    } finally {;
      setIsSaving(false);
    }

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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
              <Switch;
                id="message-scanning";
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Switch
                id="message-scanning"
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
<<<<<<< HEAD
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium" htmlFor="activity-monitoring">
                  Activity Monitoring
                </Label>
                <p className="text-sm text-muted-foreground">
                  Monitor account activity for suspicious patterns
                </p>
              </div>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              />;
            </div>;
            ;
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
              <Switch;
                id="activity-monitoring";
                checked={activityMonitoringEnabled}
                onCheckedChange={setActivityMonitoringEnabled}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Switch
                id="activity-monitoring"
                checked={activityMonitoringEnabled}
                onCheckedChange={setActivityMonitoringEnabled}
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
              <Switch;
                id="ai-analysis";
                checked={aiAnalysisEnabled}
                onCheckedChange={setAiAnalysisEnabled}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Switch
                id="ai-analysis"
                checked={aiAnalysisEnabled}
                onCheckedChange={setAiAnalysisEnabled}
<<<<<<< HEAD
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
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
  )
  )
}
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleSavePreferences = async () => {;
    if (!user?.id) return;
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              <Switch;
                id="message-scanning";
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}

              <Switch
                id="message-scanning"
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
<<<<<<< HEAD
  }
  ;
    }
=======
  const { user } = useAuth(),;
  const [messageScanningEnabled, setMessageScanningEnabled] = useState(true),;
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState(true),;
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(true),;
  const [isSaving, setIsSaving] = useState(false),;
  ;
  const handleSavePreferences = async () => {;
>>>>>>> origin/chore/fix-lint-and-merge
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

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
              />
            </div>

<<<<<<< HEAD
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
                onCheckedChange={setAiAnalysisEnabled}            </Button>

import React, { useState } from "react";"

import {
  // TODO: Implement
}
  Card,
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,"
} from "@/components/ui/card";""
import { Switch } from "@/components/ui/switch";""
import { Button } from "@/components/ui/button";""
import { Label } from "@/components/ui/label";""
import { ShieldAlert, Info } from "lucide-react";"
import {
  // TODO: Implement
}
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,"
} from "@/components/ui/accordion";""
import { toast } from "@/hooks/use-toast";""
import { supabase } from "@/integrations/supabase/client";""
import { useAuth } from "@/hooks/useAuth";"
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
  // TODO: Implement
}
      // In a real implementation, we would save these preferences to the database;"
      // For now, we'll just simulate a successful save;'
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({'
        title: "Settings saved",""
        description: "Your fraud detection preferences have been updated.",")
      });
    } catch (error) {"
      console.error("Error saving preferences:", error);"
      toast({"
        title: "Error",""
        description: "Failed to save your preferences. Please try again.",""
        variant: "destructive",")
      });
    } finally {
  // TODO: Implement
}
      setIsSaving(false);

    }

  };

  return ("
    <Card className="mb-8">"
</Card>"
      <CardHeader className="space-y-1">"
</CardHeader>"
        <div className="flex items-center gap-2">"
</div>"
          <ShieldAlert className="h-5 w-5 text-amber-500" />"
</ShieldAlert>"
          <CardTitle className="text-xl">Fraud & Abuse Protection</CardTitle>"
        </div>
        <CardDescription>
</CardDescription>
        </CardDescription>
      </CardHeader>
      <CardContent>
</CardContent>"
        <div className="space-y-6">"
</div>"
          <div className="space-y-4">"
</div>"
            <div className="flex items-center justify-between">"
</div>
              <div>
</div>"
                <Label className="font-medium" htmlFor="message-scanning">"
</Label>
                </Label>"
                <p className="text-sm text-muted-foreground">"
</p>
                </p>
              </div>
              <Switch;"
                id="message-scanning""

                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
              />
</Switch>
            </div>

"
            <div className="flex items-center justify-between">"
</div>
              <div>
</div>"
                <Label className="font-medium" htmlFor="activity-monitoring">"
</Label>
                </Label>"
                <p className="text-sm text-muted-foreground">"
</p>
                </p>
              </div>
              <Switch;"
                id="activity-monitoring""

                checked={activityMonitoringEnabled}
                onCheckedChange={setActivityMonitoringEnabled}
              />
</Switch>
            </div>

"
            <div className="flex items-center justify-between">"
</div>
              <div>
</div>"
                <Label className="font-medium" htmlFor="ai-analysis">"
</Label>
                </Label>"
                <p className="text-sm text-muted-foreground">"
</p>
                </p>
              </div>
              <Switch;"
                id="ai-analysis""

                checked={aiAnalysisEnabled}

              />
</Switch>
            </div>
          </div>

"
          <Accordion type="single" collapsible className="w-full">"
</Accordion>"
            <AccordionItem value="item-1">"
</AccordionItem>"
              <AccordionTrigger className="text-sm font-medium">"
</AccordionTrigger>"
                <div className="flex items-center gap-2">"
</div>"
                  <Info className="h-4 w-4" />"
</Info>
                </div>
              </AccordionTrigger>"
              <AccordionContent className="text-sm text-muted-foreground">"
</AccordionContent>"
                <p className="mb-2">"
</p>
                </p>"
                <ul className="list-disc pl-5 space-y-1 mb-2">"
</ul>
=======
<<<<<<< HEAD
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium" htmlFor="activity-monitoring">
                  Activity Monitoring
                </Label>
                <p className="text-sm text-muted-foreground">
                  Monitor account activity for suspicious patterns
                </p>
              </div>
              <Switch
                id="activity-monitoring"
                checked={activityMonitoringEnabled}
                onCheckedChange={setActivityMonitoringEnabled}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
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
>>>>>>> merged-prs-20250907-203621
                <Label className="font-medium" htmlFor="ai-analysis">
                  AI-powered Analysis
                </Label>
                <p className="text-sm text-muted-foreground">
                  Use AI to analyze content and behavior for potential fraud
                </p>
              </div>
<<<<<<< HEAD
              <Switch
                id="ai-analysis"
                checked={aiAnalysisEnabled}
                onCheckedChange={setAiAnalysisEnabled}
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <li>Pattern detection in messages and job postings</li>
                  <li>AI-powered content analysis</li>
                  <li>Monitoring for suspicious account activities</li>
                </ul>
                <p>
<<<<<<< HEAD
</p>

=======
                  You can opt out of some of these protections, but this may
                  limit your ability to use certain platform features. We
                  prioritize keeping our marketplace safe while respecting your
                  privacy.
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
<<<<<<< HEAD

"
          <div className="pt-2">"
</div>
            <Button;
              onClick={handleSavePreferences}
              disabled={isSaving}"
              className="bg-zion-purple hover:bg-zion-purple-light""
            >
              {isSaving ? "Saving..." : "Save Preferences"}

            </Button>

=======
          <div className="pt-2">
            <Button
              onClick={handleSavePreferences}
              disabled={isSaving}
              className="bg-zion-purple hover:bg-zion-purple-light"
            >
              {isSaving ? "Saving..." : "Save Preferences"}
            </Button>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
<<<<<<< HEAD

  )
  )

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

  )
  )

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
export function FraudDetectionSettings() {;
  const { user } = useAuth(),;
  const [messageScanningEnabled, setMessageScanningEnabled] = useState(true),;
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState(true),;
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(true),;
  const [isSaving, setIsSaving] = useState(false),;
  const handleSavePreferences = async () => {;
    if (!user?.id) return,;
    setIsSaving(true),;
    try {;
      // In a real implementation, we would save these preferences to the database;
      // For now, we'll just simulate a successful save;
      await new Promise(resolve => setTimeout(resolve, 1000)),;
      toast({;
        title: "Settings saved",;
        description: "Your fraud detection preferences have been updated."});
    } catch (error) {;
      console.error('Error saving preferences:', error),;
      toast({;
        title: "Error",;
        description: "Failed to save your preferences. Please try again.";
        variant: "destructive"});
    } finally {;
=======
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
                onCheckedChange={setAiAnalysisEnabled}            </Button>

import React, { useState } from "react";"

import {
  // TODO: Implement
}
  Card,
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,"
} from "@/components/ui/card";""
import { Switch } from "@/components/ui/switch";""
import { Button } from "@/components/ui/button";""
import { Label } from "@/components/ui/label";""
import { ShieldAlert, Info } from "lucide-react";"
import {
  // TODO: Implement
}
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,"
} from "@/components/ui/accordion";""
import { toast } from "@/hooks/use-toast";""
import { supabase } from "@/integrations/supabase/client";""
import { useAuth } from "@/hooks/useAuth";"
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
  // TODO: Implement
}
      // In a real implementation, we would save these preferences to the database;"
      // For now, we'll just simulate a successful save;'
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({'
        title: "Settings saved",""
        description: "Your fraud detection preferences have been updated.",")
      });
    } catch (error) {"
      console.error("Error saving preferences:", error);"
      toast({"
        title: "Error",""
        description: "Failed to save your preferences. Please try again.",""
        variant: "destructive",")
      });
    } finally {
  // TODO: Implement
}
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      setIsSaving(false);

    }
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
  };
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
              <Switch;
                id="activity-monitoring";
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
              <Switch;
                id="ai-analysis";
=======

  };

  return ("
    <Card className="mb-8">"
</Card>"
      <CardHeader className="space-y-1">"
</CardHeader>"
        <div className="flex items-center gap-2">"
</div>"
          <ShieldAlert className="h-5 w-5 text-amber-500" />"
</ShieldAlert>"
          <CardTitle className="text-xl">Fraud & Abuse Protection</CardTitle>"
        </div>
        <CardDescription>
</CardDescription>
        </CardDescription>
      </CardHeader>
      <CardContent>
</CardContent>"
        <div className="space-y-6">"
</div>"
          <div className="space-y-4">"
</div>"
            <div className="flex items-center justify-between">"
</div>
              <div>
</div>"
                <Label className="font-medium" htmlFor="message-scanning">"
</Label>
                </Label>"
                <p className="text-sm text-muted-foreground">"
</p>
                </p>
              </div>
              <Switch;"
                id="message-scanning""

                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
              />
</Switch>
            </div>

"
            <div className="flex items-center justify-between">"
</div>
              <div>
</div>"
                <Label className="font-medium" htmlFor="activity-monitoring">"
</Label>
                </Label>"
                <p className="text-sm text-muted-foreground">"
</p>
                </p>
              </div>
              <Switch;"
                id="activity-monitoring""

                checked={activityMonitoringEnabled}
                onCheckedChange={setActivityMonitoringEnabled}
              />
</Switch>
            </div>

"
            <div className="flex items-center justify-between">"
</div>
              <div>
</div>"
                <Label className="font-medium" htmlFor="ai-analysis">"
</Label>
                </Label>"
                <p className="text-sm text-muted-foreground">"
</p>
                </p>
              </div>
              <Switch;"
                id="ai-analysis""

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                checked={aiAnalysisEnabled}

              />
</Switch>
            </div>
          </div>
=======
                onCheckedChange={setAiAnalysisEnabled}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              />;
            </div>;
          </div>;
          ;
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                </p>;
              </AccordionContent>;
            </AccordionItem>;
          </Accordion>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          ;
          <div className="pt-2">;
            <Button ;
              onClick={handleSavePreferences}
              disabled={isSaving}
              className="bg-zion-purple hover:bg-zion-purple-light";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

"
          <Accordion type="single" collapsible className="w-full">"
</Accordion>"
            <AccordionItem value="item-1">"
</AccordionItem>"
              <AccordionTrigger className="text-sm font-medium">"
</AccordionTrigger>"
                <div className="flex items-center gap-2">"
</div>"
                  <Info className="h-4 w-4" />"
</Info>
                </div>
              </AccordionTrigger>"
              <AccordionContent className="text-sm text-muted-foreground">"
</AccordionContent>"
                <p className="mb-2">"
</p>
                </p>"
                <ul className="list-disc pl-5 space-y-1 mb-2">"
</ul>
                  <li>Pattern detection in messages and job postings</li>
                  <li>AI-powered content analysis</li>
                  <li>Monitoring for suspicious account activities</li>
                </ul>
                <p>
</p>

                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

"
          <div className="pt-2">"
</div>
            <Button;
              onClick={handleSavePreferences}
              disabled={isSaving}"
              className="bg-zion-purple hover:bg-zion-purple-light""
            >
              {isSaving ? "Saving..." : "Save Preferences"}

            </Button>

          </div>
        </div>
      </CardContent>
    </Card>
  );
}

<<<<<<< HEAD
  )
  )

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

  )
  )

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
=======
=======
          <div className="pt - 2">;
            <Button;
              on_click={handleSavePreferences}
              disabled={is_saving}
              className="bg - zion - purple hover:bg - zion - purple - light";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >;
              {isSaving ? "Saving..." :"Save Preferences"}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            </Button>;
          </div>;
        </div>;
      </CardContent>;
<<<<<<< HEAD
    </Card>;
=======
<<<<<<< HEAD
  )  )
  )

};
mb-8"> <CardHeader className=" space-y-1"> <div className=" flex items-center gap-2"> <ShieldAlert className=" h-5 w-5 text-amber-500"/> <CardTitle className=" text-xl">Fraud & Abuse Protection</CardTitle> </div> <CardDescription> Configure privacy settings related to fraud detection and abuse prevention on the platform </CardDescription> </CardHeader> <CardContent> <div className=" space-y-6"> <div className=" space-y-4"> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" message-scanning"> Message Content Scanning </Label> <p className=" text-sm text-muted-foreground"> Scan message content for potentially harmful or abusive material </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" activity-monitoring"> Activity Monitoring </Label> <p className=" text-sm text-muted-foreground"> Monitor account activity for suspicious patterns </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" ai-analysis"> AI-powered Analysis </Label> <p className=" text-sm text-muted-foreground"> Use AI to analyze content and behavior for potential fraud </p> </div> <Switch /> </div> </div> <Accordion type=" single"collapsible className=" w-full"> <AccordionItem value=" item-1"> <AccordionTrigger className=" text-sm font-medium"> <div className=" flex items-center gap-2"> <Info className=" h-4 w-4"/> About Fraud Detection </div> </AccordionTrigger> <AccordionContent className=" text-sm text-muted-foreground"> <p className=" mb-2"> The Zion AI Marketplace uses automated fraud detection systems to protect our community. This includes: </p> <ul className=" list-disc pl-5 space-y-1 mb-2"> <li>Pattern detection in messages and job postings</li> <li>AI-powered content analysis</li> <li>Monitoring for suspicious account activities</li> </ul> <p> You can opt out of some of these protections, but this may limit your ability to use certain platform features. We prioritize keeping our marketplace safe while respecting your privacy. </p> </AccordionContent> </AccordionItem> </Accordion> <div className=" pt-2" > <Button </Button> </div> </div> </CardContent> </Card>) 
});
<<<<<<< HEAD
=======
}
;
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


  )
  )

<<<<<<< HEAD
};
mb-8"> <CardHeader className=" space-y-1"> <div className=" flex items-center gap-2"> <ShieldAlert className=" h-5 w-5 text-amber-500"/> <CardTitle className=" text-xl">Fraud & Abuse Protection</CardTitle> </div> <CardDescription> Configure privacy settings related to fraud detection and abuse prevention on the platform </CardDescription> </CardHeader> <CardContent> <div className=" space-y-6"> <div className=" space-y-4"> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" message-scanning"> Message Content Scanning </Label> <p className=" text-sm text-muted-foreground"> Scan message content for potentially harmful or abusive material </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" activity-monitoring"> Activity Monitoring </Label> <p className=" text-sm text-muted-foreground"> Monitor account activity for suspicious patterns </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" ai-analysis"> AI-powered Analysis </Label> <p className=" text-sm text-muted-foreground"> Use AI to analyze content and behavior for potential fraud </p> </div> <Switch /> </div> </div> <Accordion type=" single"collapsible className=" w-full"> <AccordionItem value=" item-1"> <AccordionTrigger className=" text-sm font-medium"> <div className=" flex items-center gap-2"> <Info className=" h-4 w-4"/> About Fraud Detection </div> </AccordionTrigger> <AccordionContent className=" text-sm text-muted-foreground"> <p className=" mb-2"> The Zion AI Marketplace uses automated fraud detection systems to protect our community. This includes: </p> <ul className=" list-disc pl-5 space-y-1 mb-2"> <li>Pattern detection in messages and job postings</li> <li>AI-powered content analysis</li> <li>Monitoring for suspicious account activities</li> </ul> <p> You can opt out of some of these protections, but this may limit your ability to use certain platform features. We prioritize keeping our marketplace safe while respecting your privacy. </p> </AccordionContent> </AccordionItem> </Accordion> <div className=" pt-2" > <Button </Button> </div> </div> </CardContent> </Card>) 
}
>>>>>>> merged-prs-20250907-203621
  );
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
