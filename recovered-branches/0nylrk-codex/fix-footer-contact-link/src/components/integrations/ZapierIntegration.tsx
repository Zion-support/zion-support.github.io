
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Card
  CardContent
  CardFooter
  CardHeader
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";
import { Check, Copy, ExternalLink } from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
export function ZapierIntegration() {
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("API key copied to clipboard");
  }
=======


export function ZapierIntegration() {;

  const [copied, setCopied] = useState(false);
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");

  const handleCopyApiKey = () => {;
    navigator && navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
<<<<<<< HEAD
  CardHeader,;
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Check, Copy, ExternalLink } from "lucide-react";
export function ZapierIntegration() {;
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("API key copied to clipboard");
  };


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
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Check, Copy, ExternalLink } from "lucide-react";
export function ZapierIntegration() {;
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");
  const handleCopyApiKey = () => {;
    navigator && navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
<<<<<<< HEAD
  
=======

  Card,
  CardContent,
  CardFooter,


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Zapier Connection</h3>
<<<<<<< HEAD
<<<<<<< HEAD
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>
=======
              <Badge variant="outline" className="bg-blue-100 text-blue-800">
                Active
              </Badge>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <Badge variant="outline" className="bg-blue-100 text-blue-800">
                Active
              </Badge>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
<<<<<<< HEAD
<<<<<<< HEAD

            


              Connect Zion with 3,000+ apps via Zapier. Use your API key below to set up integrations.
            </p>
            
=======
              Connect Zion with 3,000+ apps via Zapier. Use your API key below
              to set up integrations.
            </p>


=======
              Connect Zion with 3,000+ apps via Zapier. Use your API key below
              to set up integrations.
            </p>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Zion API Key</label>
                <div className="flex gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    toast && toast.success("API key copied to clipboard");
  };
  return (

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
    <div className="space-y-6">;
      <div className="grid md:grid-cols-3 gap-6">;
        <Card className="md:col-span-2">;
          <CardHeader>;
            <div className="flex items-center justify-between">;
              <h3 className="text-lg font-semibold">Zapier Connection</h3>;
        
<<<<<<< HEAD
        
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


<<<<<<< HEAD
      
      
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Zapier Webhook Triggers</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
<<<<<<< HEAD
<<<<<<< HEAD

          


            Use these webhook triggers to start Zaps when events happen in your Zion account.
          </p>
          
=======
            Use these webhook triggers to start Zaps when events happen in your
            Zion account.
          </p>


=======
            Use these webhook triggers to start Zaps when events happen in your
            Zion account.
          </p>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="grid md: grid-cols-3 gap-4">
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">New Job Posted</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a new job is published on your account.
              </p>
<<<<<<< HEAD
<<<<<<< HEAD

            


              <Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
            
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
            </div>
<<<<<<< HEAD


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">New Application</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a talent applies to your job.
              </p>
<<<<<<< HEAD
<<<<<<< HEAD

            


              <Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
            
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
            </div>
<<<<<<< HEAD


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Contract Signed</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a contract is signed by all parties.
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
              <Button size="sm" variant="outline">Set Up Trigger</Button>
=======
              <Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
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
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



=======

=======



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <p className="text - sm text - muted - foreground mb - 4">;
              Connect Zion with 3, 000+ apps via Zapier. Use your API key below;
              to set up integrations.;
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
<<<<<<< HEAD
<<<<<<< HEAD
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;
            <p className="text-sm text-muted-foreground mb-4">;
              Connect Zion with 3,000+ apps via Zapier. Use your API key below to set up integrations.;
            </p>;
            ;
            </p>;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <label className="text-sm font-medium">Your Zion API Key</label>;
                <div className="flex gap-2">;
                  <Input;
                    value={apiKey} ;
                    readOnly;
                    className="font-mono text-sm";
                  />;
                  <Button size="sm" variant="outline" onClick={handleCopyApiKey}>;
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </Button>;
                </div>;
              </div>;
            </div>;
          </CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
          <CardFooter className="flex flex-col items-start">;
            <Button variant="outline" className="gap-2">;
              <ExternalLink className="h-4 w-4" />;
          <CardFooter className="flex flex-col items-start">;
            <Button variant="outline" className="gap-2">;
              <ExternalLink className="h-4 w-4" />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <CardFooter className="flex flex - col items - start">;
            <Button variant="outline" className="gap - 2">;
              <ExternalLink className="h - 4 w - 4" />;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Open Zapier Dashboard;
            </Button>;
          </CardFooter>;
        </Card>;
<<<<<<< HEAD
<<<<<<< HEAD
        ;
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </li>;
            </ul>;
          </CardContent>;
          <CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD
            <Button variant="outline" className="w-full gap-1">;
              <ExternalLink className="h-4 w-4" />;
              <span>Explore Zion Zaps</span>;
            <Button variant="outline" className="w-full gap-1">;
              <ExternalLink className="h-4 w-4" />;
              <span>Explore Zion Zaps</span>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <Button variant="outline" className="w - full gap - 1">;
              <ExternalLink className="h - 4 w - 4" />;
              <span > Explore Zion Zaps</span>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Triggers when a new job is published on your account.;
              </p>;
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="border rounded - md p - 4">;
              <h4 className="font - medium mb - 2">New Application</h4>;
              <p className="text - xs text - muted - foreground mb - 3">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <div className="border rounded - md p - 4">;
              <h4 className="font - medium mb - 2">New Application</h4>;
              <p className="text - xs text - muted - foreground mb - 3">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Triggers when a talent applies to your job.;
              </p>;
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="border rounded - md p - 4">;
              <h4 className="font - medium mb - 2">Contract Signed</h4>;
              <p className="text - xs text - muted - foreground mb - 3">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <div className="border rounded - md p - 4">;
              <h4 className="font - medium mb - 2">Contract Signed</h4>;
              <p className="text - xs text - muted - foreground mb - 3">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Triggers when a contract is signed by all parties.;
              </p>;
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
      ;
      <Card>;
        <CardHeader>;
          <h3 className="text-lg font-semibold">Zapier Webhook Triggers</h3>;
        </CardHeader>;
        <CardContent>;
          <p className="text-sm text-muted-foreground mb-4">;
            Use these webhook triggers to start Zaps when events happen in your Zion account.;
          </p>;
          <div className="grid md: grid-cols-3 gap-4">;
            <div className="border rounded-md p-4">;
              <h4 className="font-medium mb-2">New Job Posted</h4>;
              <p className="text-xs text-muted-foreground mb-3">;
                Triggers when a new job is published on your account.;
              </p>;
              <Button size="sm" variant="outline">Set Up Trigger</Button>;
            </div>;
            <div className="border rounded-md p-4">;
              <h4 className="font-medium mb-2">New Application</h4>;
              <p className="text-xs text-muted-foreground mb-3">;
                Triggers when a talent applies to your job.;
              </p>;
              <Button size="sm" variant="outline">Set Up Trigger</Button>;
            </div>;
            <div className="border rounded-md p-4">;
              <h4 className="font-medium mb-2">Contract Signed</h4>;
              <p className="text-xs text-muted-foreground mb-3">;
                Triggers when a contract is signed by all parties.;
              </p>;
              <Button size="sm" variant="outline">Set Up Trigger</Button>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          </div>;
        </CardContent>;
      </Card>;

<<<<<<< HEAD
<<<<<<< HEAD

  );
    </div>);
}
    </div>;
  );}
 const handleCopyApiKey = () => {
  navigator.clipboard.writeText (apiKey);
setCopied (true);
return (<div className="space-y-6" > <div className="grid md:grid-cols-3 gap-6" > <Card className="md:col-span-2" > <CardHeader> <div className="flex items-center justify-between" > <h3 className="text-lg font-semibold" >Zapier Connection</h3> <Badge variant="outline" className="bg-blue-100 text-blue-800" >Active</Badge> </div> </CardHeader> <CardContent> <p className="text-sm text-muted-foreground mb-4" > Connect Zion with 3, 000+ apps via Zapier. Use your API key below to set up integrations. </p> <div className="space-y-4" > <div className="space-y-2" > <label className="text-sm font-medium" >Your Zion API Key</label> <div className="flex gap-2" > <Input value= {
  apiKey 
}readOnly className="font-mono text-sm" /> </Button> </div> </div> </div> </CardContent> <CardFooter className="flex flex-col items-start" > <Button variant="outline" className="gap-2" > <ExternalLink className="h-4 w-4" /> Open Zapier Dashboard </Button> </CardFooter> </Card> <Card> <CardHeader> <h3 className="text-lg font-semibold" >Popular Zaps</h3> </CardHeader> <CardContent> <ul className="space-y-2 text-sm" > <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Add new Zion contacts to Mailchimp</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create Slack notifications for new jobs</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Sync completed projects to accounting</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create calendar events for interviews</span> </li> </ul> </CardContent> <CardFooter> <Button variant="outline" className="w-full gap-1" > <ExternalLink className="h-4 w-4" /> <span>Explore Zion Zaps</span> </Button> </CardFooter> </Card> </div> <Card> <CardHeader> <h3 className="text-lg font-semibold" >Zapier Webhook Triggers</h3> </CardHeader> <CardContent> <p className="text-sm text-muted-foreground mb-4" > Use these webhook triggers to start Zaps when events happen in your Zion account. </p> Triggers when a new job is published on your account. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >New Application</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a talent applies to your job. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >Contract Signed</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a contract is signed by all parties. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> </div> </CardContent> </Card> </div>) 
}
    </div>;
  );
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
<<<<<<< HEAD
=======
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
