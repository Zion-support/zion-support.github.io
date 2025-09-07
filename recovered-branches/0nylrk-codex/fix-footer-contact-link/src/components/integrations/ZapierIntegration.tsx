
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {;
  Card,;
  CardContent,;
  CardFooter,;
<<<<<<< HEAD
  CardHeader,;} from "@/components/ui/card";
=======
} from "@/components/ui/card";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  CardHeader,;
} from "@/components/ui/card";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Input } from "@/components/ui/input";
"
import { toast } from "sonner";"
import { Check, Copy, ExternalLink } from "lucide-react";"
} from "@/components/ui/card";"
import { Input } from "@/components/ui/input";"
import { toast } from "sonner";"
=======

import { toast } from "sonner";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Check, Copy, ExternalLink } from "lucide-react";
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Check, Copy, ExternalLink } from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function ZapierIntegration() {;
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");

<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { toast } from "sonner",
=======
export function ZapierIntegration() { return null; }
import React, { useState } from "react","
import { Badge } from "@/components/ui/badge","
import { Button } from "@/components/ui/button","
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card","
import { Input } from "@/components/ui/input","
import { toast } from "sonner","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Check, Copy, ExternalLink } from "lucide-react",

export function ZapierIntegration() {}
  const [copied, setCopied] = useState(false),"
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R"),
  
  const handleCopyApiKey = () => {}
    navigator.clipboard.writeText(apiKey),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000),"
    toast.success("API key copied to clipboard")
<<<<<<< HEAD
  },
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";
import { Check, Copy, ExternalLink } from "lucide-react";


export function ZapierIntegration() {;

  const [copied, setCopied] = useState(false);
=======
  },;
;
  const [copied, setCopied] = useState(false);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");

  const handleCopyApiKey = () => {;
    navigator && navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
<<<<<<< HEAD

  Card,
  CardContent,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  CardFooter,
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  

  return ("
    <div className="space-y-6">"
      <div className="grid md:grid-cols-3 gap-6">"
        <Card className="md:col-span-2">
          <CardHeader>"
            <div className="flex items-center justify-between">"
              <h3 className="text-lg font-semibold">Zapier Connection</h3>

"
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>

            </div>
          </CardHeader>
          <CardContent>"
            <p className="text-sm text-muted-foreground mb-4">

<<<<<<< HEAD
<<<<<<< HEAD
            
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  CardFooter,


  
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Zapier Connection</h3>
              <Badge variant="outline" className="bg-blue-100 text-blue-800">
                Active
              </Badge>
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Connect Zion with 3,000+ apps via Zapier. Use your API key below
              to set up integrations.
            </p>

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

            


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
              Connect Zion with 3,000+ apps via Zapier. Use your API key below to set up integrations.
            </p>
            
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              Connect Zion with 3,000+ apps via Zapier. Use your API key below to set up integrations.
            </p>
            
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Zion API Key</label>
                <div className="flex gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
                  <Input
                    value={apiKey}
                    readOnly
                    className="font-mono text-sm"
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    toast && toast.success("API key copied to clipboard");
  };

  return (
=======
                  <Input 
                    value={apiKey} 
                    readOnly 
                    className="font-mono text-sm" 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  />
                  <Button size="sm" variant="outline" onClick={handleCopyApiKey}>
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
=======
    <div className="space-y-6">;
=======
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Zion API Key</label>
                <div className="flex gap-2">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div className="grid md:grid-cols-3 gap-6">;
        <Card className="md:col-span-2">;
          <CardHeader>;
            <div className="flex items-center justify-between">;
              <h3 className="text-lg font-semibold">Zapier Connection</h3>;
              <Badge variant="outline" className="bg-blue-100 text-blue-800">;
import React, { useState } from './react';
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import {
  Card,
  CardContent,
              <Badge variant="outline" className="bg-blue-100 text-blue-800">;                Active;

  CardFooter,


  return ("
    <div className="space-y-6">"
</div>"
      <div className="grid md:grid-cols-3 gap-6">"
</div>"
        <Card className="md:col-span-2">"
</Card>
          <CardHeader>
</CardHeader>"
            <div className="flex items-center justify-between">"
</div>"
              <h3 className="text-lg font-semibold">Zapier Connection</h3>""
              <Badge variant="outline" className="bg-blue-100 text-blue-800">"
</Badge>
              </Badge>"
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>"
            </div>
          </CardHeader>
          <CardContent>
</CardContent>"
            <p className="text-sm text-muted-foreground mb-4">"
</p>
            </p>
            </p>
            "
            <div className="space-y-4">"
</div>"
              <div className="space-y-2">"
</div>"
                <label className="text-sm font-medium">Your Zion API Key</label>""
                <div className="flex gap-2">"
</div>"
    <div className="space-y-6">;"
</div>"
      <div className="grid md:grid-cols-3 gap-6">;"
</div>"
        <Card className="md:col-span-2">;"
</Card>
          <CardHeader>;
            <div className="flex items - center justify - between">;
              <h3 className="text - lg font - semibold">Zapier Connection</h3>;
              <Badge variant="outline" className="bg - blue - 100 text - blue - 800">;
                Active;
</CardHeader>"
            <div className="flex items-center justify-between">;"
</div>"
              <h3 className="text-lg font-semibold">Zapier Connection</h3>;""
              <Badge variant="outline" className="bg-blue-100 text-blue-800">;"
</Badge>
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;


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
</CardContent>




        <Card>
</Card>
          <CardHeader>
</CardHeader>"
            <h3 className="text-lg font-semibold">Popular Zaps</h3>"
          </CardHeader>
          <CardContent>
</CardContent>"
            <ul className="space-y-2 text-sm">"
</ul>"
              <li className="flex items-center gap-2">"
</li>"
                <Check className="h-4 w-4 text-green-500" />"
</Check>
                <span>Add new Zion contacts to Mailchimp</span>
              </li>"
              <li className="flex items-center gap-2">"
</li>"
                <Check className="h-4 w-4 text-green-500" />"
</Check>
                <span>Create Slack notifications for new jobs</span>
              </li>"
              <li className="flex items-center gap-2">"
</li>"
                <Check className="h-4 w-4 text-green-500" />"
</Check>
                <span>Sync completed projects to accounting</span>
              </li>"
              <li className="flex items-center gap-2">"
</li>"
                <Check className="h-4 w-4 text-green-500" />"
</Check>
                <span>Create calendar events for interviews</span>
              </li>
            </ul>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <Button variant="outline" className="gap-2">
              <ExternalLink className="h-4 w-4" />
<<<<<<< HEAD
              Open Zapier Dashboard
=======
</CardFooter>"
            <Button variant="outline" className="w-full gap-1">"
</Button>"
              <ExternalLink className="h-4 w-4" />"
</ExternalLink>
              <span>Explore Zion Zaps</span>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD
<<<<<<< HEAD

=======
    toast && toast.success("API key copied to clipboard");
  };
  return (

=======
      </div>


      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Zapier Webhook Triggers</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Use these webhook triggers to start Zaps when events happen in your
            Zion account.
          </p>

Use these webhook triggers to start Zaps when events happen in your Zion account.
          </p>
          <div className="grid md: grid-cols-3 gap-4">
          </p>          <div className="grid md: grid-cols-3 gap-4">
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">New Job Posted</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a new job is published on your account.
              </p>
              <Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
            </div>

<Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">New Application</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a talent applies to your job.
              </p>
              <Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
            </div>

<Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Contract Signed</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a contract is signed by all parties.
              </p>
              <Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
              <Button size="sm" variant="outline">Set Up Trigger</Button>
<Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
              </p>            </div>
          </div>
        </CardContent>
      </Card>
    </div>

  );
}
  )
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="space-y-6">;
=======
  CardFooter,            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Zion API Key</label>
                <div className="flex gap-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  CardFooter,            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Zion API Key</label>
                <div className="flex gap-2">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <div className="grid md:grid-cols-3 gap-6">;
=======


"
            <div className="space-y-4">"
              <div className="space-y-2">"
                <label className="text-sm font-medium">Your Zion API Key</label>"
                <div className="flex gap-2">
"
    <div className="space-y-6">;"
      <div className="grid md:grid-cols-3 gap-6">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <Card className="md:col-span-2">;
          <CardHeader>;"
            <div className="flex items-center justify-between">;"
              <h3 className="text-lg font-semibold">Zapier Connection</h3>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <Badge variant="outline" className="bg-blue-100 text-blue-800">;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                Active;
=======
              <Badge variant="outline" className="bg-blue-100 text-blue-800">;                Active;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              <Badge variant="outline" className="bg-blue-100 text-blue-800">;                Active;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

        

<<<<<<< HEAD



        
        
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <Card>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <CardHeader>
=======



        <Card>
          <CardHeader>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <h3 className="text-lg font-semibold">Popular Zaps</h3>
          </CardHeader>
          <CardContent>"
            <ul className="space-y-2 text-sm">"
              <li className="flex items-center gap-2">"
                <Check className="h-4 w-4 text-green-500" />
                <span>Add new Zion contacts to Mailchimp</span>
              </li>"
              <li className="flex items-center gap-2">"
                <Check className="h-4 w-4 text-green-500" />
                <span>Create Slack notifications for new jobs</span>
              </li>"
              <li className="flex items-center gap-2">"
                <Check className="h-4 w-4 text-green-500" />
                <span>Sync completed projects to accounting</span>
              </li>"
              <li className="flex items-center gap-2">"
                <Check className="h-4 w-4 text-green-500" />
                <span>Create calendar events for interviews</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>"
            <Button variant="outline" className="w-full gap-1">"
              <ExternalLink className="h-4 w-4" />
              <span>Explore Zion Zaps</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


      


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <Card>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <CardHeader>
=======



      <Card>
        <CardHeader>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <h3 className="text-lg font-semibold">Zapier Webhook Triggers</h3>
        </CardHeader>
        <CardContent>"
          <p className="text-sm text-muted-foreground mb-4">
<<<<<<< HEAD
            Use these webhook triggers to start Zaps when events happen in your
            Zion account.
<<<<<<< HEAD
<<<<<<< HEAD
          </p>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


          


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            Use these webhook triggers to start Zaps when events happen in your Zion account.
          </p>
          
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <div className="grid md: grid-cols-3 gap-4">
=======
          </p>          <div className="grid md: grid-cols-3 gap-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          </p>          <div className="grid md: grid-cols-3 gap-4">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">New Job Posted</h4>
=======


"
          <div className="grid md: grid-cols-3 gap-4">"
            <div className="border rounded-md p-4">"
              <h4 className="font-medium mb-2">New Job Posted</h4>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a new job is published on your account.
<<<<<<< HEAD
<<<<<<< HEAD
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
            </div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


            


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
              <Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
            
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">New Application</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a talent applies to your job.
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
              <Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
            </div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======


"
            <div className="border rounded-md p-4">"
              <h4 className="font-medium mb-2">New Application</h4>"
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a talent applies to your job.
              </p>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


            


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
              <Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
            
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Contract Signed</h4>
=======


"
            <div className="border rounded-md p-4">"
              <h4 className="font-medium mb-2">Contract Signed</h4>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a contract is signed by all parties.
              </p>

"
              <Button size="sm" variant="outline">Set Up Trigger</Button>

            </div>
=======
              </p>            </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
              </p>            </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </div>
        </CardContent>
      </Card>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======



=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  );
}
  )"
import React, { useState } from "react",;"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;"
import { Input } from "@/components/ui/input",;"
import { toast } from "sonner",;"
import { Check, Copy, ExternalLink } from "lucide-react",;
<<<<<<< HEAD
export function ZapierIntegration() {;
  const [copied, setCopied] = useState(false),;
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R"),;
  const handleCopyApiKey = () => {;
    navigator.clipboard.writeText(apiKey),;
    setCopied(true),;
    setTimeout(() => setCopied(false), 2000);
    toast.success("API key copied to clipboard")
};
  return (;
    <div className="space-y-6">;
      <div className="grid md:grid-cols-3 gap-6">;
=======
export function ZapierIntegration() { return null; }
  };
  return (;"
    <div className="space-y-6">;"
      <div className="grid md:grid-cols-3 gap-6">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <Card className="md:col-span-2">;
          <CardHeader>;"
            <div className="flex items-center justify-between">;"
              <h3 className="text-lg font-semibold">Zapier Connection</h3>;"
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;"
            <p className="text-sm text-muted-foreground mb-4">;
              Connect Zion with 3,000+ apps via Zapier. Use your API key below to set up integrations.;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

            <p className="text - sm text - muted - foreground mb - 4">;
            <p className="text - sm text - muted - foreground mb-4">;
              Connect Zion with 3, 000+ apps via Zapier. Use your API key below;
              to set up integrations.;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </p>;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <label className="text - sm font-medium">Your Zion API Key</label>;
                <div className="flex gap-2">;
                  <Input;
                    value={api_key}
                    read_only;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    className="font - mono text - sm";
<<<<<<< HEAD
=======
                    className="font - mono text - sm";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>;
=======
                Active;
              </Badge>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======



"
            <p className="text - sm text - muted - foreground mb - 4">;
              Connect Zion with 3, 000+ apps via Zapier. Use your API key below;
              to set up integrations.;
            </p>;"
            <div className="space - y-4">;"
              <div className="space - y-2">;"
                <label className="text - sm font - medium">Your Zion API Key</label>;"
                <div className="flex gap - 2">;
                  <Input;
                    value={api_key}
                    read_only;"
                    className="font - mono text - sm";

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </div>;
          </CardHeader>;
          <CardContent>;
                  <Input;
                    value={apiKey}
                    readOnly"
                    className="font-mono text-sm"
                  />;
<<<<<<< HEAD
<<<<<<< HEAD
                  <Button size="sm" variant="outline" onClick={handleCopyApiKey}>;
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  </Button>;
                </div>;
=======
                    className="font - mono text-sm";                </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    className="font - mono text-sm";                </div>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </div>;
            </div>;
<<<<<<< HEAD
          </CardContent>;            </div>;
=======
          </CardContent>;


=======
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>;
=======
<Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                Active;
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;
                  <Input
                    value={apiKey}
                    readOnly
                    className="font-mono text-sm"
                  />;
                  <Button size="sm" variant="outline" onClick={handleCopyApiKey}>;
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>;
                </div>;
              </div>;
            </div>;
          </CardContent>;

          <CardFooter className="flex flex - col items - start">;
            <Button variant="outline" className="gap - 2">;
              <ExternalLink className="h - 4 w - 4" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<CardFooter className="flex flex-col items-start">;
            <Button variant="outline" className="gap-2">;
              <ExternalLink className="h-4 w-4" />;
          <CardFooter className="flex flex-col items-start">;
            <Button variant="outline" className="gap-2">;
              <ExternalLink className="h-4 w-4" />;
              Open Zapier Dashboard;
            </Button>;
          </CardFooter>;
        </Card>;

<<<<<<< HEAD

=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
              </li>;
            </ul>;
          </CardContent>;
          <CardFooter>;

<<<<<<< HEAD

=======
            <Button variant="outline" className="w - full gap - 1">;
              <ExternalLink className="h - 4 w - 4" />;
              <span > Explore Zion Zaps</span>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<Button variant="outline" className="w-full gap-1">;
              <ExternalLink className="h-4 w-4" />;
              <span>Explore Zion Zaps</span>;
            <Button variant="outline" className="w-full gap-1">;
              <ExternalLink className="h-4 w-4" />;
              <span>Explore Zion Zaps</span>;
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;

<<<<<<< HEAD
                Triggers when a new job is published on your account.;
              </p>;

"
=======
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

                Triggers when a new job is published on your account.;
              </p>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;
            </div>;

<<<<<<< HEAD
                Triggers when a talent applies to your job.;
              </p>;"
=======
            <div className="border rounded - md p - 4">;
              <h4 className="font - medium mb - 2">New Application</h4>;
              <p className="text - xs text - muted - foreground mb - 3">;

<div className="border rounded - md p - 4">;
              <h4 className="font - medium mb - 2">New Application</h4>;
              <p className="text - xs text - muted - foreground mb - 3">;
                Triggers when a talent applies to your job.;
              </p>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;
            </div>;

<<<<<<< HEAD
                Triggers when a contract is signed by all parties.;
              </p>;"
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;

            </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <div className="border rounded - md p - 4">;
              <h4 className="font - medium mb - 2">Contract Signed</h4>;
              <p className="text - xs text - muted - foreground mb - 3">;

<div className="border rounded - md p - 4">;
              <h4 className="font - medium mb - 2">Contract Signed</h4>;
              <p className="text - xs text - muted - foreground mb - 3">;
                Triggers when a contract is signed by all parties.;
              </p>;
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
            </div>;
                    className="font - mono text-sm";                </div>;
              </div>;
            </div>;
          </CardContent>;            </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </div>;
        </CardContent>;
      </Card>;

<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  );
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
    </div>;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
=======
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}


=======


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  );
</div>);
}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  );
    </div>);
}
    </div>;
  );}
<<<<<<< HEAD
<<<<<<< HEAD
 const handleCopyApiKey = () => {}
  navigator.clipboard.writeText (apiKey);
setCopied (true);"
return (<div className="space-y-6" > <div className="grid md:grid-cols-3 gap-6" > <Card className="md:col-span-2" > <CardHeader> <div className="flex items-center justify-between" > <h3 className="text-lg font-semibold" >Zapier Connection</h3> <Badge variant="outline" className="bg-blue-100 text-blue-800" >Active</Badge> </div> </CardHeader> <CardContent> <p className="text-sm text-muted-foreground mb-4" > Connect Zion with 3, 000+ apps via Zapier. Use your API key below to set up integrations. </p> <div className="space-y-4" > <div className="space-y-2" > <label className="text-sm font-medium" >Your Zion API Key</label> <div className="flex gap-2" > <Input value= {}
  apiKey "
=======
 const handleCopyApiKey = () => {
  navigator.clipboard.writeText (apiKey);
setCopied (true);
return (<div className="space-y-6" > <div className="grid md:grid-cols-3 gap-6" > <Card className="md:col-span-2" > <CardHeader> <div className="flex items-center justify-between" > <h3 className="text-lg font-semibold" >Zapier Connection</h3> <Badge variant="outline" className="bg-blue-100 text-blue-800" >Active</Badge> </div> </CardHeader> <CardContent> <p className="text-sm text-muted-foreground mb-4" > Connect Zion with 3, 000+ apps via Zapier. Use your API key below to set up integrations. </p> <div className="space-y-4" > <div className="space-y-2" > <label className="text-sm font-medium" >Your Zion API Key</label> <div className="flex gap-2" > <Input value= {
  apiKey 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}readOnly className="font-mono text-sm" /> </Button> </div> </div> </div> </CardContent> <CardFooter className="flex flex-col items-start" > <Button variant="outline" className="gap-2" > <ExternalLink className="h-4 w-4" /> Open Zapier Dashboard </Button> </CardFooter> </Card> <Card> <CardHeader> <h3 className="text-lg font-semibold" >Popular Zaps</h3> </CardHeader> <CardContent> <ul className="space-y-2 text-sm" > <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Add new Zion contacts to Mailchimp</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create Slack notifications for new jobs</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Sync completed projects to accounting</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create calendar events for interviews</span> </li> </ul> </CardContent> <CardFooter> <Button variant="outline" className="w-full gap-1" > <ExternalLink className="h-4 w-4" /> <span>Explore Zion Zaps</span> </Button> </CardFooter> </Card> </div> <Card> <CardHeader> <h3 className="text-lg font-semibold" >Zapier Webhook Triggers</h3> </CardHeader> <CardContent> <p className="text-sm text-muted-foreground mb-4" > Use these webhook triggers to start Zaps when events happen in your Zion account. </p> Triggers when a new job is published on your account. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >New Application</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a talent applies to your job. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >Contract Signed</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a contract is signed by all parties. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> </div> </CardContent> </Card> </div>) 
}
=======
  CardFooter,



  return ("
    <div className="space-y-6">"
</div>"
      <div className="grid md:grid-cols-3 gap-6">"
        <Card className="md:col-span-2">"

          <CardHeader>
"
            <div className="flex items-center justify-between">"
              <h3 className="text-lg font-semibold">Zapier Connection</h3>""
              <Badge variant="outline" className="bg-blue-100 text-blue-800">"

              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active"
            </div>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">"
</p>
            <div className="space-y-4">"
              <div className="space-y-2">"
                <label className="text-sm font-medium">Your Zion API Key</label>""
                <div className="flex gap-2">"
    <div className="space-y-6">;"
      <div className="grid md:grid-cols-3 gap-6">;"
        <Card className="md:col-span-2">;"

          <CardHeader>;
            <div className="flex items-center justify-between">;"
              <h3 className="text-lg font-semibold">Zapier Connection</h3>;""
              <Badge variant="outline" className="bg-blue-100 text-blue-800">;"

              ;
            </div>;
          <CardContent>;





        <Card>

            <h3 className="text-lg font-semibold">Popular Zaps</h3>"
            <ul className="space-y-2 text-sm">"
</ul>"
              <li className="flex items-center gap-2">"
</li>"
                <Check className="h-4 w-4 text-green-500" />"

                <span>Add new Zion contacts to Mailchimp</span>

                <span>Create Slack notifications for new jobs</span>

                <span>Sync completed projects to accounting</span>

                <span>Create calendar events for interviews</span>
              </li>
            </ul>
          <CardFooter>
            <Button variant="outline" className="w-full gap-1">"
              <ExternalLink className="h-4 w-4" />"

              <span>Explore Zion Zaps</span>





          <h3 className="text-lg font-semibold">Zapier Webhook Triggers</h3>"
          <div className="grid md: grid-cols-3 gap-4">"
            <div className="border rounded-md p-4">"
              <h4 className="font-medium mb-2">New Job Posted</h4>""
              <p className="text-xs text-muted-foreground mb-3">"
              </p>"
              <Button size="sm" variant="outline">"




              <Button size="sm" variant="outline">Set Up Trigger"
              <h4 className="font-medium mb-2">New Application</h4>""




              <h4 className="font-medium mb-2">Contract Signed</h4>""


              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active;"
            <p className="text-sm text-muted-foreground mb-4">;"
            <p className="text - sm text - muted - foreground mb - 4">;"
            </p>;"
            <div className="space - y-4">;"
              <div className="space - y-2">;"
                <label className="text - sm font - medium">Your Zion API Key</label>;""
                <div className="flex gap - 2">;"
                  <Input;
                    value={api_key}
                    read_only;"
                    className="font - mono text - sm";"
                  />;

                  <Button;"
                    size="sm";""
                    variant="outline";"
                    on_click={handleCopyApiKey}
                  >;
)"
                      <Check className="h - 4 w - 4" />) : ("
                      <Copy className="h - 4 w - 4" />)}"

                    value={apiKey}
                    readOnly;"
                    className="font-mono text-sm""
                  <Button size="sm" variant="outline" onClick={handleCopyApiKey}>;"
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}"

          ;"
          <CardFooter className="flex flex - col items - start">;"
            <Button variant="outline" className="gap - 2">;"
              <ExternalLink className="h - 4 w - 4" />;"

        <Card>;

            <h3 className="text - lg font - semibold">Popular Zaps</h3>;"
            <ul className="space - y-2 text - sm">;"
              <li className="flex items - center gap - 2">;"
                <Check className="h - 4 w - 4 text - green - 500" />;"

                <span > Add new Zion contacts to Mailchimp</span>;
              </li>;"

                <span > Create Slack notifications for new jobs</span>;

                <span > Sync completed projects to accounting</span>;

                <span > Create calendar events for interviews</span>;
              </li>;
            </ul>;
          <CardFooter>;

            <Button variant="outline" className="w - full gap - 1">;"

              <span > Explore Zion Zaps</span>;

          <h3 className="text - lg font - semibold">Zapier Webhook Triggers</h3>;"
          <div className="grid md: grid - cols - 3 gap - 4">;"
            <div className="border rounded - md p - 4">;"
              <h4 className="font - medium mb - 2">New Job Posted</h4>;""
              <p className="text - xs text - muted - foreground mb - 3">;"
              <Button size="sm" variant="outline">;"

            </div>;"
              <h4 className="font - medium mb - 2">New Application</h4>;""

              <h4 className="font - medium mb - 2">Contract Signed</h4>;""
              <p className="text - xs text - muted - foreground mb - 3">;"
</p>
              </p>;"
              <Button size="sm" variant="outline">;"
</Button>
              </Button>;
            </div>;

          </div>;
        </CardContent>;
      </Card>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    </div>;
  );
}
;
<<<<<<< HEAD


  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  );}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>;

  );}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  );
}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

    </div>);
return (<div className="space-y-6" > <div className="grid md:grid-cols-3 gap-6" > <Card className="md:col-span-2" > <CardHeader> <div className="flex items-center justify-between" > <h3 className="text-lg font-semibold" >Zapier Connection</h3> <Badge variant="outline" className="bg-blue-100 text-blue-800" >Active </div>  <CardContent> <p className="text-sm text-muted-foreground mb-4" > Connect Zion with 3, 000+ apps via Zapier. Use your API key below to set up integrations. </p> <div className="space-y-4" > <div className="space-y-2" > <label className="text-sm font-medium" >Your Zion API Key</label> <div className="flex gap-2" > <Input value= {"
  apiKey;)"
}readOnly className="font-mono text-sm" />  </div> </div> </div>  <CardFooter className="flex flex-col items-start" > <Button variant="outline" className="gap-2" > <ExternalLink className="h-4 w-4" /> Open Zapier Dashboard    <Card> <CardHeader> <h3 className="text-lg font-semibold" >Popular Zaps</h3>  <CardContent> <ul className="space-y-2 text-sm" > <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Add new Zion contacts to Mailchimp</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create Slack notifications for new jobs</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Sync completed projects to accounting</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create calendar events for interviews</span> </li> </ul>  <CardFooter> <Button variant="outline" className="w-full gap-1" > <ExternalLink className="h-4 w-4" /> <span>Explore Zion Zaps</span>    </div> <Card> <CardHeader> <h3 className="text-lg font-semibold" >Zapier Webhook Triggers</h3>  <CardContent> <p className="text-sm text-muted-foreground mb-4" > Use these webhook triggers to start Zaps when events happen in your Zion account. </p> Triggers when a new job is published on your account. </p> <Button size="sm" variant="outline" >Set Up Trigger </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >New Application</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a talent applies to your job. </p> <Button size="sm" variant="outline" >Set Up Trigger </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >Contract Signed</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a contract is signed by all parties. </p> <Button size="sm" variant="outline" >Set Up Trigger </div> </div>   </div>)"
pr-12325
}readOnly className="font-mono text-sm" /> </Button> </div> </div> </div> </CardContent> <CardFooter className="flex flex-col items-start" > <Button variant="outline" className="gap-2" > <ExternalLink className="h-4 w-4" /> Open Zapier Dashboard </Button> </CardFooter> </Card> <Card> <CardHeader> <h3 className="text-lg font-semibold" >Popular Zaps</h3> </CardHeader> <CardContent> <ul className="space-y-2 text-sm" > <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Add new Zion contacts to Mailchimp</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create Slack notifications for new jobs</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Sync completed projects to accounting</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create calendar events for interviews</span> </li> </ul> </CardContent> <CardFooter> <Button variant="outline" className="w-full gap-1" > <ExternalLink className="h-4 w-4" /> <span>Explore Zion Zaps</span> </Button> </CardFooter> </Card> </div> <Card> <CardHeader> <h3 className="text-lg font-semibold" >Zapier Webhook Triggers</h3> </CardHeader> <CardContent> <p className="text-sm text-muted-foreground mb-4" > Use these webhook triggers to start Zaps when events happen in your Zion account. </p> Triggers when a new job is published on your account. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >New Application</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a talent applies to your job. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >Contract Signed</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a contract is signed by all parties. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> </div> </CardContent> </Card> </div>)"
    </div>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
