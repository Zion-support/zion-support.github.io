
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;

import { toast } from "sonner";
import { Check, Copy, ExternalLink } from "lucide-react";
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
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
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
  Card,
  CardContent,
  CardFooter,

=======

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Zapier Connection</h3>
            


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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
        
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Zapier Webhook Triggers</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
          


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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            


              <Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
            
=======
=======              <Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
            </div>
=======            


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            


              <Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
            
=======
=======              <Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
            </div>
=======            


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


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
          <CardFooter className="flex flex - col items - start">;
            <Button variant="outline" className="gap - 2">;
              <ExternalLink className="h - 4 w - 4" />;

}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
