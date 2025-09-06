<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card
  CardContent
  CardFooter
  CardHeader
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";
import { Check, Copy, ExternalLink } from "lucide-react";
export function ZapierIntegration() {
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("API key copied to clipboard");
  }

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,;
  CardHeader,
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Check, Copy, ExternalLink } from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function ZapierIntegration() {;
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("API key copied to clipboard");
  };

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

import React, { useState } from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { toast } from "sonner",
import { Check, Copy, ExternalLink } from "lucide-react",

export function ZapierIntegration() {
  const [copied, setCopied] = useState(false),
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R"),
  
  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000),
    toast.success("API key copied to clipboard")
  },
<<<<<<< HEAD
=======
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Check, Copy, ExternalLink } from "lucide-react";
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx


export function ZapierIntegration() {;

========
export function ZapierIntegration() {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");
  const handleCopyApiKey = () => {;
    navigator && navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx

  Card,
  CardContent,
  CardFooter,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Zapier Connection</h3>
<<<<<<< HEAD
              <Badge variant="outline" className="bg-blue-100 text-blue-800">
                Active
              </Badge>
=======
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
<<<<<<< HEAD
              Connect Zion with 3,000+ apps via Zapier. Use your API key below
              to set up integrations.
            </p>

<<<<<<< HEAD
=======

            


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              Connect Zion with 3,000+ apps via Zapier. Use your API key below to set up integrations.
            </p>
            
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Zion API Key</label>
                <div className="flex gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <Input 
                    value={apiKey} 
                    readOnly 
                    className="font-mono text-sm" 
                  />
                  <Button size="sm" variant="outline" onClick={handleCopyApiKey}>
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <Button variant="outline" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Open Zapier Dashboard
            </Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx
    toast && toast.success("API key copied to clipboard");
  };
  return (
=======

import React, { useState } from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { toast } from "sonner",;
import { Check, Copy, ExternalLink } from "lucide-react",;
;
export function ZapierIntegration() {;
  const [copied, setCopied] = useState(false),;
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R"),;
  ;
  const handleCopyApiKey = () => {;
    navigator.clipboard.writeText(apiKey),;
    setCopied(true),;
    setTimeout(() => setCopied(false), 2000),;
    toast.success("API key copied to clipboard"),;
  },;
  ;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="space-y-6">;
      <div className="grid md:grid-cols-3 gap-6">;
        <Card className="md:col-span-2">;
          <CardHeader>;
            <div className="flex items-center justify-between">;
              <h3 className="text-lg font-semibold">Zapier Connection</h3>;
<<<<<<< HEAD
              <Badge variant="outline" className="bg-blue-100 text-blue-800">;
import React, { useState } from './react';
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components / ui / card';
import { Input  } from '@/components / ui / input';
import { toast  } from './sonner';
import { Check, Copy, ExternalLink  } from './lucide-react';
export /**
 * ZapierIntegration - Function description
 */
function ZapierIntegration() {
  const [copied, set_copied] = useState (false);
  const [api_key] = useState ("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");
;
  const handleCopyApiKey = () =>: any {
    navigator.clipboard.write_text (api_key);
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);
    toast.success ("API key copied to clipboard");
  }
;
  return (
    <div className="space - y-6">;
      <div className="grid md:grid - cols - 3 gap - 6">;
        <Card className="md:col - span - 2">;
          <CardHeader>;
            <div className="flex items - center justify - between">;
              <h3 className="text - lg font - semibold">Zapier Connection</h3>;
              <Badge variant="outline" className="bg - blue - 100 text - blue - 800">;
                Active;
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx


        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
        
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Popular Zaps</h3>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Add new Zion contacts to Mailchimp</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Create Slack notifications for new jobs</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Sync completed projects to accounting</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Create calendar events for interviews</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full gap-1">
              <ExternalLink className="h-4 w-4" />
              <span>Explore Zion Zaps</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Zapier Webhook Triggers</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
<<<<<<< HEAD
            Use these webhook triggers to start Zaps when events happen in your
            Zion account.
          </p>

<<<<<<< HEAD
=======

          


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            Use these webhook triggers to start Zaps when events happen in your Zion account.
          </p>
          
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className="grid md: grid-cols-3 gap-4">
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">New Job Posted</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a new job is published on your account.
              </p>
<<<<<<< HEAD
              <Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
            </div>

<<<<<<< HEAD
=======

            


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              <Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
            
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">New Application</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a talent applies to your job.
              </p>
<<<<<<< HEAD
              <Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
            </div>

<<<<<<< HEAD
=======

            


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              <Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
            
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Contract Signed</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a contract is signed by all parties.
              </p>
<<<<<<< HEAD
              <Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
=======
              <Button size="sm" variant="outline">Set Up Trigger</Button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  )
import React, { useState } from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { toast } from "sonner",;
import { Check, Copy, ExternalLink } from "lucide-react",;
export function ZapierIntegration() {;
  const [copied, setCopied] = useState(false),;
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R"),;
  const handleCopyApiKey = () => {;
    navigator.clipboard.writeText(apiKey),;
    setCopied(true),;
    setTimeout(() => setCopied(false), 2000);
    toast.success("API key copied to clipboard");
  };
  return (;
    <div className="space-y-6">;
      <div className="grid md:grid-cols-3 gap-6">;
        <Card className="md:col-span-2">;
          <CardHeader>;
            <div className="flex items-center justify-between">;
              <h3 className="text-lg font-semibold">Zapier Connection</h3>;
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;
            <p className="text-sm text-muted-foreground mb-4">;
              Connect Zion with 3,000+ apps via Zapier. Use your API key below to set up integrations.;
<<<<<<< HEAD
=======
=======



=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx
            <p className="text - sm text - muted - foreground mb - 4">;
              Connect Zion with 3, 000+ apps via Zapier. Use your API key below;
              to set up integrations.;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            </p>;
            <div className="space - y-4">;
              <div className="space - y-2">;
                <label className="text - sm font - medium">Your Zion API Key</label>;
                <div className="flex gap - 2">;
                  <Input;
                    value={api_key}
                    read_only;
                    className="font - mono text - sm";
                  />;
                  <Button;
                    size="sm";
                    variant="outline";
                    on_click={handleCopyApiKey}
                  >;
                    {copied ? (
                      <Check className="h - 4 w - 4" />) : (
                      <Copy className="h - 4 w - 4" />)}
=======
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;
            <p className="text-sm text-muted-foreground mb-4">;
              Connect Zion with 3,000+ apps via Zapier. Use your API key below to set up integrations.;
            </p>;
            ;
=======
            </p>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="space-y-4">;
              <div className="space-y-2">;
                <label className="text-sm font-medium">Your Zion API Key</label>;
                <div className="flex gap-2">;
<<<<<<< HEAD
                  <Input ;
                    value={apiKey} ;
                    readOnly ;
                    className="font-mono text-sm" ;
                  />;
                  <Button size="sm" variant="outline" onClick={handleCopyApiKey}>;
                    {copied ? <Check className="h-4 w-4" /> :<Copy className="h-4 w-4" />}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                  <Input;
                    value={apiKey} ;
                    readOnly;
                    className="font-mono text-sm";
                  />;
                  <Button size="sm" variant="outline" onClick={handleCopyApiKey}>;
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </Button>;
                </div>;
              </div>;
            </div>;
          </CardContent>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx

          <CardFooter className="flex flex - col items - start">;
            <Button variant="outline" className="gap - 2">;
              <ExternalLink className="h - 4 w - 4" />;

========
<<<<<<< HEAD
          <CardFooter className="flex flex - col items - start">;
            <Button variant="outline" className="gap - 2">;
              <ExternalLink className="h - 4 w - 4" />;
=======
          <CardFooter className="flex flex-col items-start">;
            <Button variant="outline" className="gap-2">;
              <ExternalLink className="h-4 w-4" />;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx
=======
          <CardFooter className="flex flex-col items-start">;
            <Button variant="outline" className="gap-2">;
              <ExternalLink className="h-4 w-4" />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Open Zapier Dashboard;
            </Button>;
          </CardFooter>;
        </Card>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx
        <Card>;
          <CardHeader>;
            <h3 className="text - lg font - semibold">Popular Zaps</h3>;
          </CardHeader>;
          <CardContent>;
            <ul className="space - y-2 text - sm">;
              <li className="flex items - center gap - 2">;
                <Check className="h - 4 w - 4 text - green - 500" />;
                <span > Add new Zion contacts to Mailchimp</span>;
              </li>;
              <li className="flex items - center gap - 2">;
                <Check className="h - 4 w - 4 text - green - 500" />;
                <span > Create Slack notifications for new jobs</span>;
              </li>;
              <li className="flex items - center gap - 2">;
                <Check className="h - 4 w - 4 text - green - 500" />;
                <span > Sync completed projects to accounting</span>;
              </li>;
              <li className="flex items - center gap - 2">;
                <Check className="h - 4 w - 4 text - green - 500" />;
                <span > Create calendar events for interviews</span>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx

========
=======
        ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <Card>;
          <CardHeader>;
            <h3 className="text-lg font-semibold">Popular Zaps</h3>;
          </CardHeader>;
          <CardContent>;
            <ul className="space-y-2 text-sm">;
              <li className="flex items-center gap-2">;
                <Check className="h-4 w-4 text-green-500" />;
                <span>Add new Zion contacts to Mailchimp</span>;
              </li>;
              <li className="flex items-center gap-2">;
                <Check className="h-4 w-4 text-green-500" />;
                <span>Create Slack notifications for new jobs</span>;
              </li>;
              <li className="flex items-center gap-2">;
                <Check className="h-4 w-4 text-green-500" />;
                <span>Sync completed projects to accounting</span>;
              </li>;
              <li className="flex items-center gap-2">;
                <Check className="h-4 w-4 text-green-500" />;
                <span>Create calendar events for interviews</span>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </li>;
            </ul>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx

            <Button variant="outline" className="w - full gap - 1">;
              <ExternalLink className="h - 4 w - 4" />;
              <span > Explore Zion Zaps</span>;

========
<<<<<<< HEAD
            <Button variant="outline" className="w - full gap - 1">;
              <ExternalLink className="h - 4 w - 4" />;
              <span > Explore Zion Zaps</span>;
=======
            <Button variant="outline" className="w-full gap-1">;
              <ExternalLink className="h-4 w-4" />;
              <span>Explore Zion Zaps</span>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx
=======
            <Button variant="outline" className="w-full gap-1">;
              <ExternalLink className="h-4 w-4" />;
              <span>Explore Zion Zaps</span>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx
      <Card>;
        <CardHeader>;
          <h3 className="text - lg font - semibold">Zapier Webhook Triggers</h3>;
        </CardHeader>;
        <CardContent>;
          <p className="text - sm text - muted - foreground mb - 4">;
            Use these webhook triggers to start Zaps when events happen in your;
            Zion account.;
          </p>;
          <div className="grid md: grid - cols - 3 gap - 4">;
            <div className="border rounded - md p - 4">;
              <h4 className="font - medium mb - 2">New Job Posted</h4>;
              <p className="text - xs text - muted - foreground mb - 3">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx
                Triggers when a new job is published on your account.;
              </p>;
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;
            </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx

            <div className="border rounded - md p - 4">;
              <h4 className="font - medium mb - 2">New Application</h4>;
              <p className="text - xs text - muted - foreground mb - 3">;

========
            <div className="border rounded - md p - 4">;
              <h4 className="font - medium mb - 2">New Application</h4>;
              <p className="text - xs text - muted - foreground mb - 3">;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx
                Triggers when a talent applies to your job.;
              </p>;
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;
            </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx

            <div className="border rounded - md p - 4">;
              <h4 className="font - medium mb - 2">Contract Signed</h4>;
              <p className="text - xs text - muted - foreground mb - 3">;

========
            <div className="border rounded - md p - 4">;
              <h4 className="font - medium mb - 2">Contract Signed</h4>;
              <p className="text - xs text - muted - foreground mb - 3">;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx
                Triggers when a contract is signed by all parties.;
              </p>;
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;
=======
      ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Card>;
        <CardHeader>;
          <h3 className="text-lg font-semibold">Zapier Webhook Triggers</h3>;
        </CardHeader>;
        <CardContent>;
          <p className="text-sm text-muted-foreground mb-4">;
            Use these webhook triggers to start Zaps when events happen in your Zion account.;
          </p>;
<<<<<<< HEAD
          ;
          <div className="grid md:grid-cols-3 gap-4">;
=======
          <div className="grid md: grid-cols-3 gap-4">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="border rounded-md p-4">;
              <h4 className="font-medium mb-2">New Job Posted</h4>;
              <p className="text-xs text-muted-foreground mb-3">;
                Triggers when a new job is published on your account.;
              </p>;
              <Button size="sm" variant="outline">Set Up Trigger</Button>;
            </div>;
<<<<<<< HEAD
            ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="border rounded-md p-4">;
              <h4 className="font-medium mb-2">New Application</h4>;
              <p className="text-xs text-muted-foreground mb-3">;
                Triggers when a talent applies to your job.;
              </p>;
              <Button size="sm" variant="outline">Set Up Trigger</Button>;
            </div>;
<<<<<<< HEAD
            ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="border rounded-md p-4">;
              <h4 className="font-medium mb-2">Contract Signed</h4>;
              <p className="text-xs text-muted-foreground mb-3">;
                Triggers when a contract is signed by all parties.;
              </p>;
              <Button size="sm" variant="outline">Set Up Trigger</Button>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx

    </div>;

<<<<<<< HEAD
  );
}
;

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
=======
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
    </div>);
}
=======
    </div>;
  );}
 const handleCopyApiKey = () => {
  navigator.clipboard.writeText (apiKey);
setCopied (true);
return (<div className="space-y-6" > <div className="grid md:grid-cols-3 gap-6" > <Card className="md:col-span-2" > <CardHeader> <div className="flex items-center justify-between" > <h3 className="text-lg font-semibold" >Zapier Connection</h3> <Badge variant="outline" className="bg-blue-100 text-blue-800" >Active</Badge> </div> </CardHeader> <CardContent> <p className="text-sm text-muted-foreground mb-4" > Connect Zion with 3, 000+ apps via Zapier. Use your API key below to set up integrations. </p> <div className="space-y-4" > <div className="space-y-2" > <label className="text-sm font-medium" >Your Zion API Key</label> <div className="flex gap-2" > <Input value= {
  apiKey 
}readOnly className="font-mono text-sm" /> </Button> </div> </div> </div> </CardContent> <CardFooter className="flex flex-col items-start" > <Button variant="outline" className="gap-2" > <ExternalLink className="h-4 w-4" /> Open Zapier Dashboard </Button> </CardFooter> </Card> <Card> <CardHeader> <h3 className="text-lg font-semibold" >Popular Zaps</h3> </CardHeader> <CardContent> <ul className="space-y-2 text-sm" > <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Add new Zion contacts to Mailchimp</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create Slack notifications for new jobs</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Sync completed projects to accounting</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create calendar events for interviews</span> </li> </ul> </CardContent> <CardFooter> <Button variant="outline" className="w-full gap-1" > <ExternalLink className="h-4 w-4" /> <span>Explore Zion Zaps</span> </Button> </CardFooter> </Card> </div> <Card> <CardHeader> <h3 className="text-lg font-semibold" >Zapier Webhook Triggers</h3> </CardHeader> <CardContent> <p className="text-sm text-muted-foreground mb-4" > Use these webhook triggers to start Zaps when events happen in your Zion account. </p> Triggers when a new job is published on your account. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >New Application</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a talent applies to your job. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >Contract Signed</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a contract is signed by all parties. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> </div> </CardContent> </Card> </div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/integrations/ZapierIntegration.tsx
=======
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
