
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {;
  Card,;
  CardContent,;
  CardFooter,;
CardHeader,;} from "@/components/ui/card";
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Check, Copy, ExternalLink } from "lucide-react";
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function ZapierIntegration() {;
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { toast } from "sonner",
import { Check, Copy, ExternalLink } from "lucide-react",

export function ZapierIntegration() {}
  const [copied, setCopied] = useState(false),"
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R"),

  const handleCopyApiKey = () => {}
    navigator.clipboard.writeText(apiKey),
    setCopied(true),
    setTimeout(() => setCopied(false), 2000),"
    toast.success("API key copied to clipboard")
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
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");

  const handleCopyApiKey = () => {;
    navigator && navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
Card,
  CardContent,
<<<<<<< HEAD
<<<<<<< HEAD
  CardFooter,

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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              Connect Zion with 3,000+ apps via Zapier. Use your API key below to set up integrations.
            </p>

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Zion API Key</label>
                <div className="flex gap-2">
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
Open Zapier Dashboard
            </Button>
          </CardFooter>
        </Card>
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
              <Badge variant="outline" className="bg-blue-100 text-blue-800">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
Use these webhook triggers to start Zaps when events happen in your
            Zion account.
<<<<<<< HEAD
          </p>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">New Application</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a talent applies to your job.
              </p>
<Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
            </div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
                    className="font - mono text - sm";
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            </div>;
          </CardHeader>;
          <CardContent>;
                  <Input;
                    value={apiKey}
                    readOnly"
                    className="font-mono text-sm"
                  />;
<Button size="sm" variant="outline" onClick={handleCopyApiKey}>;
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
</CardContent>;            </div>;
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

Triggers when a new job is published on your account.;
              </p>;

"
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;
            </div>;

Triggers when a talent applies to your job.;
              </p>;"
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;
            </div>;

Triggers when a contract is signed by all parties.;
              </p>;"
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;

            </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

</div>;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  );
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
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
const handleCopyApiKey = () => {}
  navigator.clipboard.writeText (apiKey);
setCopied (true);"
return (<div className="space-y-6" > <div className="grid md:grid-cols-3 gap-6" > <Card className="md:col-span-2" > <CardHeader> <div className="flex items-center justify-between" > <h3 className="text-lg font-semibold" >Zapier Connection</h3> <Badge variant="outline" className="bg-blue-100 text-blue-800" >Active</Badge> </div> </CardHeader> <CardContent> <p className="text-sm text-muted-foreground mb-4" > Connect Zion with 3, 000+ apps via Zapier. Use your API key below to set up integrations. </p> <div className="space-y-4" > <div className="space-y-2" > <label className="text-sm font-medium" >Your Zion API Key</label> <div className="flex gap-2" > <Input value= {}
  apiKey "
}readOnly className="font-mono text-sm" /> </Button> </div> </div> </div> </CardContent> <CardFooter className="flex flex-col items-start" > <Button variant="outline" className="gap-2" > <ExternalLink className="h-4 w-4" /> Open Zapier Dashboard </Button> </CardFooter> </Card> <Card> <CardHeader> <h3 className="text-lg font-semibold" >Popular Zaps</h3> </CardHeader> <CardContent> <ul className="space-y-2 text-sm" > <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Add new Zion contacts to Mailchimp</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create Slack notifications for new jobs</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Sync completed projects to accounting</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create calendar events for interviews</span> </li> </ul> </CardContent> <CardFooter> <Button variant="outline" className="w-full gap-1" > <ExternalLink className="h-4 w-4" /> <span>Explore Zion Zaps</span> </Button> </CardFooter> </Card> </div> <Card> <CardHeader> <h3 className="text-lg font-semibold" >Zapier Webhook Triggers</h3> </CardHeader> <CardContent> <p className="text-sm text-muted-foreground mb-4" > Use these webhook triggers to start Zaps when events happen in your Zion account. </p> Triggers when a new job is published on your account. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >New Application</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a talent applies to your job. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >Contract Signed</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a contract is signed by all parties. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> </div> </CardContent> </Card> </div>) 
}
    </div>;
  );
}
;
);
}
;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
