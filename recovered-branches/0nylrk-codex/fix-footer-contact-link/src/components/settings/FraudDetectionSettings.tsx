
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Switch  } from '@/components/ui/switch';
import { Button  } from '@/components/ui/button';
import { Label  } from '@/components/ui/label';
import { ShieldAlert, Info } from 'lucide-react';
import {

export function FraudDetectionSettings() {
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
import React, { useState } from "react";
import {}
import React, { useState } from "react";
import {
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
import {
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
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ShieldAlert, Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,";
} from "@/components/ui/accordion";"
import { toast } from "@/hooks/use-toast";"
import { supabase } from "@/integrations/supabase/client";"
import { useAuth } from "@/hooks/useAuth";
export function FraudDetectionSettings() {

  const { user } = useAuth();
  const [messageScanningEnabled, setMessageScanningEnabled] = useState(true);
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState(true);
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const handleSavePreferences = async () => {
    if (!user?.id) return;
    setIsSaving(true);
    try {
      // In a real implementation, we would save these preferences to the database
      // For now, we'll just simulate a successful save
await new Promise((resolve) => setTimeout(resolve, 1000));
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
  const handleSavePreferences = async () => {
    const handleSavePreferences = async () => {
    if (!user?.id) return;
    setIsSaving(true);
    try {
      // In a real implementation, we would save these preferences to the database
      // For now, we'll just simulate a successful save
  const handleSavePreferences = async () => {}
    if (!user?.id) return;
    setIsSaving(true);
    try {}
      // In a real implementation, we would save these preferences to the database;
      // For now, we'll just simulate a successful save;
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({"
        title: "Settings saved","
        description: "Your fraud detection preferences have been updated.",
      });
} catch (error) {

      console.error('Error saving preferences:', error),

      toast({
        title: "Error"
        description: "Failed to save your preferences. Please try again."
        variant: "destructive"
      });
    } finally {
      console.error("Error saving preferences:", error);
      toast({
      console.error("Error saving preferences:", error);
      toast({
        title: "Error",
        description: "Failed to save your preferences. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
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

  },

  return (
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

              <Switch
                id="message-scanning"
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}

              />;
            </div>;
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
              <Switch
                id="message-scanning"
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
              />
            </div>
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
                onCheckedChange={setAiAnalysisEnabled}

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
                onCheckedChange={setAiAnalysisEnabled}
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

            </Button>
                onCheckedChange={setAiAnalysisEnabled}            </Button>
                onCheckedChange={setAiAnalysisEnabled}            </Button>

            </Button>
</Button>

            </Button>

          </div>
        </div>
      </CardContent>
    </Card>
  );
}

    setIsSaving(true);
    try {;
      // In a real implementation, we would save these preferences to the database;
      // For now, we'll just simulate a successful save;
      await new Promise(resolve => setTimeout(resolve, 1000));
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
  // TODO: Implement
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
      // In a real implementation, we would save these preferences to the database;"
      // For now, we'll just simulate a successful save;
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Settings saved",""
        description: "Your fraud detection preferences have been updated.",")
      });
    } catch (error) {"
      console.error("Error saving preferences:", error);"
      toast({"
        title: "Error",""
        description: "Failed to save your preferences. Please try again.",""
        variant: "destructive",")
    } finally {
  // TODO: Implement
      setIsSaving(false);

  },

  return ("
    <Card className="mb-8">"
"
      <CardHeader className="space-y-1">"
        <div className="flex items-center gap-2">"
</div>"
          <ShieldAlert className="h-5 w-5 text-amber-500" />"
          <CardTitle className="text-xl">Fraud & Abuse Protection"
        </div>
        <CardDescription>

      <CardContent>
        <div className="space-y-6">"
          <div className="space-y-4">"
            <div className="flex items-center justify-between">"
              <div>
                <Label className="font-medium" htmlFor="message-scanning">"

                <p className="text-sm text-muted-foreground">"
</p>
              <Switch;"
                id="message-scanning""
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
              />

                <Label className="font-medium" htmlFor="activity-monitoring">"

                id="activity-monitoring""
                checked={activityMonitoringEnabled}
                onCheckedChange={setActivityMonitoringEnabled}

                <Label className="font-medium" htmlFor="ai-analysis">"

                id="ai-analysis""
                checked={aiAnalysisEnabled}
                onCheckedChange={setAiAnalysisEnabled}

          <Accordion type="single" collapsible className="w-full">"
            <AccordionItem value="item-1">"
              <AccordionTrigger className="text-sm font-medium">"
                  <Info className="h-4 w-4" />"

              <AccordionContent className="text-sm text-muted-foreground">"
                <p className="mb-2">"
                </p>"
                <ul className="list-disc pl-5 space-y-1 mb-2">"
</ul>
                  <li>Pattern detection in messages and job postings</li>
                  <li>AI-powered content analysis</li>
                  <li>Monitoring for suspicious account activities</li>
                <p>
          <div className="pt-2">"
            <Button;
              onClick={handleSavePreferences}
              disabled={isSaving}"
              className="bg-zion-purple hover:bg-zion-purple-light""
            >

    ;)"
mb-8"> <CardHeader className=" space-y-1"> <div className=" flex items-center gap-2"> <ShieldAlert className=" h-5 w-5 text-amber-500"/> <CardTitle className=" text-xl">Fraud & Abuse Protection </div> <CardDescription> Configure privacy settings related to fraud detection and abuse prevention on the platform   <CardContent> <div className=" space-y-6"> <div className=" space-y-4"> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" message-scanning"> Message Content Scanning  <p className=" text-sm text-muted-foreground"> Scan message content for potentially harmful or abusive material </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" activity-monitoring"> Activity Monitoring  <p className=" text-sm text-muted-foreground"> Monitor account activity for suspicious patterns </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" ai-analysis"> AI-powered Analysis  <p className=" text-sm text-muted-foreground"> Use AI to analyze content and behavior for potential fraud </p> </div> <Switch /> </div> </div> <Accordion type=" single"collapsible className=" w-full"> <AccordionItem value=" item-1"> <AccordionTrigger className=" text-sm font-medium"> <div className=" flex items-center gap-2"> <Info className=" h-4 w-4"/> About Fraud Detection </div>  <AccordionContent className=" text-sm text-muted-foreground"> <p className=" mb-2"> The Zion AI Marketplace uses automated fraud detection systems to protect our community. This includes: </p> <ul className=" list-disc pl-5 space-y-1 mb-2"> <li>Pattern detection in messages and job postings</li> <li>AI-powered content analysis</li> <li>Monitoring for suspicious account activities</li> </ul> <p> You can opt out of some of these protections, but this may limit your ability to use certain platform features. We prioritize keeping our marketplace safe while respecting your privacy. </p>    <div className=" pt-2" > <Button  </div> </div>  )""
pr-12325

    </Card>;)"
mb-8"> <CardHeader className=" space-y-1"> <div className=" flex items-center gap-2"> <ShieldAlert className=" h-5 w-5 text-amber-500"/> <CardTitle className=" text-xl">Fraud & Abuse Protection</CardTitle> </div> <CardDescription> Configure privacy settings related to fraud detection and abuse prevention on the platform </CardDescription> </CardHeader> <CardContent> <div className=" space-y-6"> <div className=" space-y-4"> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" message-scanning"> Message Content Scanning </Label> <p className=" text-sm text-muted-foreground"> Scan message content for potentially harmful or abusive material </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" activity-monitoring"> Activity Monitoring </Label> <p className=" text-sm text-muted-foreground"> Monitor account activity for suspicious patterns </p> </div> <Switch /> </div> <div className=" flex items-center justify-between"> <div> <Label className=" font-medium"htmlFor=" ai-analysis"> AI-powered Analysis </Label> <p className=" text-sm text-muted-foreground"> Use AI to analyze content and behavior for potential fraud </p> </div> <Switch /> </div> </div> <Accordion type=" single"collapsible className=" w-full"> <AccordionItem value=" item-1"> <AccordionTrigger className=" text-sm font-medium"> <div className=" flex items-center gap-2"> <Info className=" h-4 w-4"/> About Fraud Detection </div> </AccordionTrigger> <AccordionContent className=" text-sm text-muted-foreground"> <p className=" mb-2"> The Zion AI Marketplace uses automated fraud detection systems to protect our community. This includes: </p> <ul className=" list-disc pl-5 space-y-1 mb-2"> <li>Pattern detection in messages and job postings</li> <li>AI-powered content analysis</li> <li>Monitoring for suspicious account activities</li> </ul> <p> You can opt out of some of these protections, but this may limit your ability to use certain platform features. We prioritize keeping our marketplace safe while respecting your privacy. </p> </AccordionContent> </AccordionItem> </Accordion> <div className=" pt-2" > <Button </Button> </div> </div> </CardContent> </Card>)""

