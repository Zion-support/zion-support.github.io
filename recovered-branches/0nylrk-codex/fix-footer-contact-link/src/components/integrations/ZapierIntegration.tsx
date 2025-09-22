
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

import { toast } from "sonner";
import { Check, Copy, ExternalLink } from "lucide-react";
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Check, Copy, ExternalLink } from "lucide-react";

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
export function ZapierIntegration() {;
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");

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


              Connect Zion with 3,000+ apps via Zapier. Use your API key below to set up integrations.
            </p>

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
    <div className="space-y-6">;
  CardFooter,            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Zion API Key</label>
                <div className="flex gap-2">
      <div className="grid md:grid-cols-3 gap-6">;

"
            <div className="space-y-4">"
              <div className="space-y-2">"
                <label className="text-sm font-medium">Your Zion API Key</label>"
                <div className="flex gap-2">
"
    <div className="space-y-6">;"
      <div className="grid md:grid-cols-3 gap-6">;"
        <Card className="md:col-span-2">;
          <CardHeader>;"
            <div className="flex items-center justify-between">;"
              <h3 className="text-lg font-semibold">Zapier Connection</h3>;
              <Badge variant="outline" className="bg-blue-100 text-blue-800">;
                Active;
              <Badge variant="outline" className="bg-blue-100 text-blue-800">;                Active;
              <Badge variant="outline" className="bg-blue-100 text-blue-800">;                Active;
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;
        <Card>

          <CardHeader>

        <Card>
          <CardHeader>"
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


      <Card>
        <CardHeader>

      <Card>
        <CardHeader>"
          <h3 className="text-lg font-semibold">Zapier Webhook Triggers</h3>
        </CardHeader>
        <CardContent>"
          <p className="text-sm text-muted-foreground mb-4">
Use these webhook triggers to start Zaps when events happen in your
            Zion account.
          </p>


          <div className="grid md: grid-cols-3 gap-4">
          </p>          <div className="grid md: grid-cols-3 gap-4">
          </p>          <div className="grid md: grid-cols-3 gap-4">
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">New Job Posted</h4>

"
          <div className="grid md: grid-cols-3 gap-4">"
            <div className="border rounded-md p-4">"
              <h4 className="font-medium mb-2">New Job Posted</h4>"
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a new job is published on your account.
</p>
              <Button size="sm" variant="outline">
                Set Up Trigger
              </Button>
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


            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Contract Signed</h4>

"
            <div className="border rounded-md p-4">"
              <h4 className="font-medium mb-2">Contract Signed</h4>"
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a contract is signed by all parties.
              </p>

"
              <Button size="sm" variant="outline">Set Up Trigger</Button>

            </div>
              </p>            </div>
              </p>            </div>
          </div>
        </CardContent>
      </Card>
    </div>

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

            <p className="text - sm text - muted - foreground mb - 4">;
            <p className="text - sm text - muted - foreground mb-4">;
              Connect Zion with 3, 000+ apps via Zapier. Use your API key below;
              to set up integrations.;
            </p>;
            <div className="space-y-4">;
              <div className="space-y-2">;
                <label className="text - sm font-medium">Your Zion API Key</label>;
                <div className="flex gap-2">;
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
                  </Button>;
                </div>;
                    className="font - mono text-sm";                </div>;
                    className="font - mono text-sm";                </div>;
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
          </div>;
        </CardContent>;
      </Card>;

</div>;
  );
}
  );

}


  );
</div>);
}

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

"
  );
}
;

    </div>);
return (<div className="space-y-6" > <div className="grid md:grid-cols-3 gap-6" > <Card className="md:col-span-2" > <CardHeader> <div className="flex items-center justify-between" > <h3 className="text-lg font-semibold" >Zapier Connection</h3> <Badge variant="outline" className="bg-blue-100 text-blue-800" >Active </div>  <CardContent> <p className="text-sm text-muted-foreground mb-4" > Connect Zion with 3, 000+ apps via Zapier. Use your API key below to set up integrations. </p> <div className="space-y-4" > <div className="space-y-2" > <label className="text-sm font-medium" >Your Zion API Key</label> <div className="flex gap-2" > <Input value= {"
  apiKey;)"
}readOnly className="font-mono text-sm" />  </div> </div> </div>  <CardFooter className="flex flex-col items-start" > <Button variant="outline" className="gap-2" > <ExternalLink className="h-4 w-4" /> Open Zapier Dashboard    <Card> <CardHeader> <h3 className="text-lg font-semibold" >Popular Zaps</h3>  <CardContent> <ul className="space-y-2 text-sm" > <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Add new Zion contacts to Mailchimp</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create Slack notifications for new jobs</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Sync completed projects to accounting</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create calendar events for interviews</span> </li> </ul>  <CardFooter> <Button variant="outline" className="w-full gap-1" > <ExternalLink className="h-4 w-4" /> <span>Explore Zion Zaps</span>    </div> <Card> <CardHeader> <h3 className="text-lg font-semibold" >Zapier Webhook Triggers</h3>  <CardContent> <p className="text-sm text-muted-foreground mb-4" > Use these webhook triggers to start Zaps when events happen in your Zion account. </p> Triggers when a new job is published on your account. </p> <Button size="sm" variant="outline" >Set Up Trigger </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >New Application</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a talent applies to your job. </p> <Button size="sm" variant="outline" >Set Up Trigger </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >Contract Signed</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a contract is signed by all parties. </p> <Button size="sm" variant="outline" >Set Up Trigger </div> </div>   </div>)"
pr-12325
}readOnly className="font-mono text-sm" /> </Button> </div> </div> </div> </CardContent> <CardFooter className="flex flex-col items-start" > <Button variant="outline" className="gap-2" > <ExternalLink className="h-4 w-4" /> Open Zapier Dashboard </Button> </CardFooter> </Card> <Card> <CardHeader> <h3 className="text-lg font-semibold" >Popular Zaps</h3> </CardHeader> <CardContent> <ul className="space-y-2 text-sm" > <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Add new Zion contacts to Mailchimp</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create Slack notifications for new jobs</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Sync completed projects to accounting</span> </li> <li className="flex items-center gap-2" > <Check className="h-4 w-4 text-green-500" /> <span>Create calendar events for interviews</span> </li> </ul> </CardContent> <CardFooter> <Button variant="outline" className="w-full gap-1" > <ExternalLink className="h-4 w-4" /> <span>Explore Zion Zaps</span> </Button> </CardFooter> </Card> </div> <Card> <CardHeader> <h3 className="text-lg font-semibold" >Zapier Webhook Triggers</h3> </CardHeader> <CardContent> <p className="text-sm text-muted-foreground mb-4" > Use these webhook triggers to start Zaps when events happen in your Zion account. </p> Triggers when a new job is published on your account. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >New Application</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a talent applies to your job. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> <div className="border rounded-md p-4" > <h4 className="font-medium mb-2" >Contract Signed</h4> <p className="text-xs text-muted-foreground mb-3" > Triggers when a contract is signed by all parties. </p> <Button size="sm" variant="outline" >Set Up Trigger</Button> </div> </div> </CardContent> </Card> </div>)"
    </div>;"

