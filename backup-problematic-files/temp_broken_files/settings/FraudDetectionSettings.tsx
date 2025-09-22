<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx

=======
=======
:temp_broken_files/settings/FraudDetectionSettings.tsx
 export function FraudDetectionSettings () {;
  const { ;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/settings/FraudDetectionSettings.tsx
=======
<<<<<<<< HEAD:src/components/settings/FraudDetectionSettings.tsx
<<<<<<< HEAD
import React, { useState } from 'react',
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',
import { Switch } from '@/components/ui/switch',
import { Button } from '@/components/ui/button',
import { Label } from '@/components/ui/label',
import { ShieldAlert, Info } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger',
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
  
  const handleSavePreferences = async () => {
    if (!user?.id) return,
    
    setIsSaving(true),
    try {
      // In a real implementation, we would save these preferences to the database
      // For now, we'll just simulate a successful save
      await new Promise(resolve => setTimeout(resolve, 1000)),
      
      toast({
        title: "Settings saved",
        description: "Your fraud detection preferences have been updated."})
    } catch (error) {
      logErrorToProduction('Error saving preferences:', { data: error }),
      toast({
        title: "Error",
        description: "Failed to save your preferences. Please try again.",
        variant: "destructive"})
    } finally {
      setIsSaving(false)
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
          Configure privacy settings related to fraud detection and abuse prevention on the platform
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
                  Scan message content for potentially harmful or abusive material
                </p>
              </div>
              <Switch
                id="message-scanning"
                aria-label="Message scanning"
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
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
              <Switch
                id="activity-monitoring"
                aria-label="Activity monitoring"
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
              <Switch
                id="ai-analysis"
                aria-label="AI analysis"
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
                  The Zion AI Marketplace uses automated fraud detection systems to protect our community. This includes:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Pattern detection in messages and job postings</li>
                  <li>AI-powered content analysis</li>
                  <li>Monitoring for suspicious account activities</li>
                </ul>
                <p>
                  You can opt out of some of these protections, but this may limit your ability to use certain platform features. 
                  We prioritize keeping our marketplace safe while respecting your privacy.
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
  )
=======
return (
    <Card className="mb-8">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-amber-500" />
          <CardTitle className="text-xl">Fraud & Abuse Protection</CardTitle>
        </div>
        <CardDescription>
          Configure privacy settings related to fraud detection and abuse prevention on the platform
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
                  Scan message content for potentially harmful or abusive material
                </p>
              </div>
              <Switch
                id="message-scanning"
                aria-label="Message scanning"
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
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
              <Switch
                id="activity-monitoring"
                aria-label="Activity monitoring"
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
              <Switch
                id="ai-analysis"
                aria-label="AI analysis"
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
                  The Zion AI Marketplace uses automated fraud detection systems to protect our community. This includes:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Pattern detection in messages and job postings</li>
                  <li>AI-powered content analysis</li>
                  <li>Monitoring for suspicious account activities</li>
                </ul>
                <p>
                  You can opt out of some of these protections, but this may limit your ability to use certain platform features. 
                  We prioritize keeping our marketplace safe while respecting your privacy.
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
  )



}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
========
:temp_broken_files/settings/FraudDetectionSettings.tsx
 export function FraudDetectionSettings () {;
  const { ;
>>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:backup-problematic-files/temp_broken_files/settings/FraudDetectionSettings.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React, { useState } from 'react',;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',;
import { Switch } from '@/components/ui/switch',;
import { Button } from '@/components/ui/button',;
import { Label } from '@/components/ui/label',;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
import { ShieldAlert, Info } from 'lucide-react',;
=======
import { ShieldAlert, Info } from 'lucide-react';
import {logErrorToProduction} from '@/utils/productionLogger',;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/settings/FraudDetectionSettings.tsx
=======
import { ShieldAlert, Info } from 'lucide-react';
import {logErrorToProduction} from '@/utils/productionLogger',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
:temp_broken_files/settings/FraudDetectionSettings.tsx;
 export function FraudDetectionSettings () {;
  const { ;
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ShieldAlert, Info } from 'lucide-react';
import {logErrorToProduction} from '@/utils/productionLogger';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {;
  Accordion,;
  AccordionContent,;
  AccordionItem,;
  AccordionTrigger} from "@/components/ui/accordion",;""
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
;
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
<<<<<<< HEAD
<<<<<<< HEAD
        title:"Settings saved",;
        description:"Your fraud detection preferences have been updated."}),;
    } catch (error) {;
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
      console.error('Error saving preferences:', error),;
=======
      logErrorToProduction('Error saving preferences:', { data:error }),;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/settings/FraudDetectionSettings.tsx
      toast({;
        title:"Error",;
        description:"Failed to save your preferences. Please try again.",;
=======
        title:"Settings saved",,
  description:"Your fraud detection preferences have been updated."}),;
=======
        title: "Settings saved";,,
  description: "Your fraud detection preferences have been updated.";}),;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    } catch (error) {;
      logErrorToProduction('Error saving preferences: ';, { data: error ;}),;
      toast({;
<<<<<<< HEAD
        title:"Error",,
  description:"Failed to save your preferences. Please try again.",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        variant:"destructive"}),;
=======
        title: "Error";,,
  description: "Failed to save your preferences. Please try again.";,;
        variant: "destructive";}),;
        title: "Settings saved";,;")"
        description: "Your fraud detection preferences have been updated.";}),;"
    } catch (error) {;"
      logErrorToProduction('Error saving preferences: ';, { data: error ;}),;
        title: "Error";,;""
        description: "Failed to save your preferences. Please try again.";,;")"
        variant: "destructive";}),;"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    } finally {;
      setIsSaving(false),;
    }
  },;
<<<<<<< HEAD
;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/settings/FraudDetectionSettings.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <Card className="mb-8">;
      <CardHeader className="space-y-1">;
        <div className="flex items-center gap-2">;
          <ShieldAlert className="h-5 w-5 text-amber-500" />;
          <CardTitle className="text-xl">Fraud & Abuse Protection</CardTitle>;
=======
  return (;"
    <Card className="mb-8">;"
"
      <CardHeader className="space-y-1">;"
        <div className="flex items-center gap-2">;"
</div>"
          <ShieldAlert className="h-5 w-5 text-amber-500" />;"
          <CardTitle className="text-xl">Fraud & Abuse Protection;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        </div>;
        <CardDescription>;

      <CardContent>;
        <div className="space-y-6">;"
          <div className="space-y-4">;"
            <div className="flex items-center justify-between">;"
</div>
              <div>;
                <Label className="font-medium" htmlFor="message-scanning">;"

                ;"
                <p className="text-sm text-muted-foreground">;"
</p>
                </p>;
<<<<<<< HEAD
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx

=======
              <Switch;
                id="message-scanning";
                aria-label="Message scanning";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
              />;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx

=======
            ;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/settings/FraudDetectionSettings.tsx
=======
            ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx

=======
              <Switch;
                id="activity-monitoring";
                aria-label="Activity monitoring";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/settings/FraudDetectionSettings.tsx
=======
              <Switch;
                id="activity-monitoring";
                aria-label="Activity monitoring";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                checked={activityMonitoringEnabled}
                onCheckedChange={setActivityMonitoringEnabled}
              />;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx

=======
            ;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/settings/FraudDetectionSettings.tsx
=======
            ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx

=======
              <Switch;
                id="ai-analysis";
                aria-label="AI analysis";
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/settings/FraudDetectionSettings.tsx
=======
              <Switch;
                id="ai-analysis";
                aria-label="AI analysis";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                checked={aiAnalysisEnabled}
                onCheckedChange={setAiAnalysisEnabled}
              />;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx

=======
          ;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/settings/FraudDetectionSettings.tsx
=======
          ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
=======
              <Switch;"
                id="message-scanning";""
                aria-label="Message scanning";"
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
              />;

            </div>;"
                <Label className="font-medium" htmlFor="activity-monitoring">;"

                id="activity-monitoring";""
                aria-label="Activity monitoring";"
                checked={activityMonitoringEnabled}
                onCheckedChange={setActivityMonitoringEnabled}

                <Label className="font-medium" htmlFor="ai-analysis">;"

                id="ai-analysis";""
                aria-label="AI analysis";"
                checked={aiAnalysisEnabled}
                onCheckedChange={setAiAnalysisEnabled}

          <Accordion type="single" collapsible className="w-full">;"
            <AccordionItem value="item-1">;"
              <AccordionTrigger className="text-sm font-medium">;"
                  <Info className="h-4 w-4" />;"

              <AccordionContent className="text-sm text-muted-foreground">;"
                <p className="mb-2">;"
                </p>;"
                <ul className="list-disc pl-5 space-y-1 mb-2">;"
</ul>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <li>Pattern detection in messages and job postings</li>;
                  <li>AI-powered content analysis</li>;
                  <li>Monitoring for suspicious account activities</li>;
                </ul>;
                <p>;
<<<<<<< HEAD
                  You can opt out of some of these protections, but this may limit your ability to use certain platform features. ;
                  We prioritize keeping our marketplace safe while respecting your privacy.;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                </p>;
              </AccordionContent>;
            </AccordionItem>;
          </Accordion>;
          ;
          <div className="pt-2">;
=======
          <div className="pt-2">;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <Button ;
              onClick={handleSavePreferences}
              disabled={isSaving}"
              className="bg-zion-purple hover:bg-zion-purple-light";"
            >;
<<<<<<< HEAD
              {isSaving ? "Saving..." :"Save Preferences"}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/settings/FraudDetectionSettings.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </Button>;
          </div>;
        </div>;
      </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/settings/FraudDetectionSettings.tsx

}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </Card>;
  ),; export function FraudDetectionSettings () {;
  const {;
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/settings/FraudDetectionSettings.tsx
  user ;
 } = useAuth ();
const [messageScanningEnabled, setMessageScanningEnabled] = useState (true);
const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState (true);
const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState (true);
const [isSaving, setIsSaving] = useState (false);
const handleSavePreferences = async () => {;
  if (!user?.id) return;
try {;
  ;
}catch (error) {;
  logErrorToProduction ('Error saving preferences:', {;
  data: error ;
});
toast ({;
  ;
}finally {;
  setIsSaving (false) ;
}
};
<<<<<<< HEAD
mb-8"> <CardHeader className=" space-y-1"> <div className=" flex items-center gap-2"> <ShieldAlert className=" h-5 w-5 text-amber-500"/> <CardTitle className=" text-xl">Fraud & Abuse Protection</CardTitle> </div> <CardDescription> Configure privacy settings related to fraud detection and abuse prevention on the platform </CardDescription> </CardHeader> <CardContent> <div className=" space-y-6"> <div className=" space-y-4"> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" message-scanning"> Message Content Scanning </Label> <p className=" text-sm text-muted-foreground"> Scan message content for potentially harmful or abusive material </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" activity-monitoring"> Activity Monitoring </Label> <p className=" text-sm text-muted-foreground"> Monitor account activity for suspicious patterns </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" ai-analysis"> AI-powered Analysis </Label> <p className=" text-sm text-muted-foreground"> Use AI to analyze content and behavior for potential fraud </p> </div> <Switch /> </div> </div> <Accordion type=" single"collapsible className=" w-full"> <AccordionItem value=" item-1"> <AccordionTrigger className=" text-sm font-medium"> <div className=" flex items-center gap-2"> <Info className=" h-4 w-4"/> About Fraud Detection </div> </AccordionTrigger> <AccordionContent className=" text-sm text-muted-foreground"> <p className=" mb-2"> The Zion AI Marketplace uses automated fraud detection systems to protect our community. This includes: </p> <ul className=" list-disc pl-5 space-y-1 mb-2"> <li>Pattern detection in messages and job postings</li> <li>AI-powered content analysis</li> <li>Monitoring for suspicious account activities</li> </ul> <p> You can opt out of some of these protections, but this may limit your ability to use certain platform features. We prioritize keeping our marketplace safe while respecting your privacy. </p> </AccordionContent> </AccordionItem> </Accordion> <div className=" pt-2" > <Button </Button> </div> </div> </CardContent> </Card>) ;"}'"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/settings/FraudDetectionSettings.tsx
=======
mb-8"> <CardHeader className=" space-y-1"> <div className=" flex items-center gap-2"> <ShieldAlert className=" h-5 w-5 text-amber-500"/> <CardTitle className=" text-xl">Fraud & Abuse Protection</CardTitle> </div> <CardDescription> Configure privacy settings related to fraud detection and abuse prevention on the platform </CardDescription> </CardHeader> <CardContent> <div className=" space-y-6"> <div className=" space-y-4"> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" message-scanning"> Message Content Scanning </Label> <p className=" text-sm text-muted-foreground"> Scan message content for potentially harmful or abusive material </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" activity-monitoring"> Activity Monitoring </Label> <p className=" text-sm text-muted-foreground"> Monitor account activity for suspicious patterns </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" ai-analysis"> AI-powered Analysis </Label> <p className=" text-sm text-muted-foreground"> Use AI to analyze content and behavior for potential fraud </p> </div> <Switch /> </div> </div> <Accordion type=" single"collapsible className=" w-full"> <AccordionItem value=" item-1"> <AccordionTrigger className=" text-sm font-medium"> <div className=" flex items-center gap-2"> <Info className=" h-4 w-4"/> About Fraud Detection </div> </AccordionTrigger> <AccordionContent className=" text-sm text-muted-foreground"> <p className=" mb-2"> The Zion AI Marketplace uses automated fraud detection systems to protect our community. This includes: </p> <ul className=" list-disc pl-5 space-y-1 mb-2"> <li>Pattern detection in messages and job postings</li> <li>AI-powered content analysis</li> <li>Monitoring for suspicious account activities</li> </ul> <p> You can opt out of some of these protections, but this may limit your ability to use certain platform features. We prioritize keeping our marketplace safe while respecting your privacy. </p> </AccordionContent> </AccordionItem> </Accordion> <div className=" pt-2" > <Button </Button> </div> </div> </CardContent> </Card>) ;"}'"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    ;)"
mb-8"> <CardHeader className=" space-y-1"> <div className=" flex items-center gap-2"> <ShieldAlert className=" h-5 w-5 text-amber-500"/> <CardTitle className=" text-xl">Fraud & Abuse Protection </div> <CardDescription> Configure privacy settings related to fraud detection and abuse prevention on the platform   <CardContent> <div className=" space-y-6"> <div className=" space-y-4"> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" message-scanning"> Message Content Scanning  <p className=" text-sm text-muted-foreground"> Scan message content for potentially harmful or abusive material </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" activity-monitoring"> Activity Monitoring  <p className=" text-sm text-muted-foreground"> Monitor account activity for suspicious patterns </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" ai-analysis"> AI-powered Analysis  <p className=" text-sm text-muted-foreground"> Use AI to analyze content and behavior for potential fraud </p> </div> <Switch /> </div> </div> <Accordion type=" single"collapsible className=" w-full"> <AccordionItem value=" item-1"> <AccordionTrigger className=" text-sm font-medium"> <div className=" flex items-center gap-2"> <Info className=" h-4 w-4"/> About Fraud Detection </div>  <AccordionContent className=" text-sm text-muted-foreground"> <p className=" mb-2"> The Zion AI Marketplace uses automated fraud detection systems to protect our community. This includes: </p> <ul className=" list-disc pl-5 space-y-1 mb-2"> <li>Pattern detection in messages and job postings</li> <li>AI-powered content analysis</li> <li>Monitoring for suspicious account activities</li> </ul> <p> You can opt out of some of these protections;, but this may limit your ability to use certain platform features. We prioritize keeping our marketplace safe while respecting your privacy. </p>    <div className=" pt-2" > <Button  </div> </div>  ) ;"}'"""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
