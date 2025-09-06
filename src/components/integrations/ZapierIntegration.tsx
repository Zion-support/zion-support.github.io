<<<<<<< HEAD
<<<<<<< HEAD
import { Check, Copy, ExternalLink } from 'lucide-react'
export function ZapierIntegration() {
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState('zap_live_KztCaFieDu4VBnp8eMJZ9x73R');

import React, { useState } from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { toast } from "sonner",
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { Check, Copy, ExternalLink } from 'lucide-react'
export function ZapierIntegration() {
  const [copied, setCopied] = useState(false)
  const [apiKey] = useState('zap_live_KztCaFieDu4VBnp8eMJZ9x73R')
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R")
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Zap } from 'lucide-react'
export function ZapierIntegration() {
  const [copied, setCopied] = useState(false)
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R")
  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast.success('API key copied to clipboard')
    navigator.clipboard.writeText(apiKey)
    setCopied(true)
    setTimeout((,) => setCopied(false), 2000)
    toast.success("API key copied to clipboard")
  }

export function ZapierIntegration() {;
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");

  const handleCopyApiKey = () => {;
    navigator && navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast && toast.success('API key copied to clipboard');

    navigator && navigator.clipboard.writeText(apiKey),;
    setCopied(true),;
    setTimeout((,) => setCopied(false), 2000),;
    toast && toast.success("API key copied to clipboard");
  },;
=======
import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card
  CardContent
  CardFooter
  CardHeader
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
=======
export function ZapierIntegration() {
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState('zap_live_KztCaFieDu4VBnp8eMJZ9x73R');
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

import React, { useState } from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { toast } from "sonner",
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Check, Copy, ExternalLink } from 'lucide-react'
export function ZapierIntegration() {
  const [copied, setCopied] = useState(false)
  const [apiKey] = useState('zap_live_KztCaFieDu4VBnp8eMJZ9x73R')
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R")
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Zap } from 'lucide-react'
export function ZapierIntegration() {
  const [copied, setCopied] = useState(false)
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R")
  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast.success('API key copied to clipboard')
    navigator.clipboard.writeText(apiKey)
    setCopied(true)
    setTimeout((,) => setCopied(false), 2000)
    toast.success("API key copied to clipboard")
  return (
<<<<<<< HEAD
    <div className='space-y-6'>;
      <div className='grid md:grid-cols-3 gap-6'>;
        <Card className='md:col-span-2'>;
          <CardHeader>;
            <div className='flex items-center justify-between'>;
              <h3 className='text-lg font-semibold'>Zapier Connection</h3>;
              <Badge variant='outline' className='bg-blue-100 text-blue-800'>;
import React, { useState } from 'react';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import { toast } from 'sonner';
import { Check, Copy, ExternalLink } from 'lucide-react';
export /**
 * ZapierIntegration - Function description
 */
function ZapierIntegration() {
  const [copied, set_copied] = useState (false);
  const [api_key] = useState ('zap_live_KztCaFieDu4VBnp8eMJZ9x73R');
  const [api_key] = useState ("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components / ui / card';
import { Zap } from 'lucide-react';
export /**
 * ZapierIntegration - Function description
 */
function ZapierIntegration() {
  const [copied, set_copied] = useState (false);
  const [api_key] = useState ("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");
  const handleCopyApiKey = () =>: any {
    navigator.clipboard.write_text (api_key);
    set_copied (true);
    set_timeout (() => set_copied (false), 2000);
    toast.success ('API key copied to clipboard');
    navigator.clipboard.write_text (api_key),
    set_copied (true),
    set_timeout ((, ) => set_copied (false), 2000),
    toast.success ("API key copied to clipboard");

  },
  
  return (
    <div className='space - y-6'>;
      <div className='grid md:grid - cols - 3 gap - 6'>;
        <Card className='md:col - span - 2'>;
          <CardHeader>;
            <div className='flex items - center justify - between'>;
              <h3 className='text - lg font - semibold'>Zapier Connection</h3>;
              <Badge variant='outline' className='bg - blue - 100 text - blue - 800'>;
                Active;
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;



<<<<<<< HEAD
=======
            
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Zapier Connection</h3>
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Connect Zion with 3,000+ apps via Zapier. Use your API key below to set up integrations.
            </p>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <CardFooter className="flex flex-col items-start">
            <Button variant="outline" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Open Zapier Dashboard
            </Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD



        
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                <Check className="h-4 w-4 text-green-500" />
                <span>Create calendar events for interviews</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
            <Button variant='outline' className='w-full gap-1'>
              <ExternalLink className='h-4 w-4' />              <span>Explore Zion Zaps</span>            <Button variant="outline" className="w-full gap-1">
            <Button variant="outline" className="w-full gap-1">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              <ExternalLink className="h-4 w-4" />
              <span>Explore Zion Zaps</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
<<<<<<< HEAD


      


      <Card>
        <CardHeader>
          <h3 className='text-lg font-semibold'>Zapier Webhook Triggers</h3>
        </CardHeader>
        <CardContent>
          <p className='text-sm text-muted-foreground mb-4'>
            Use these webhook triggers to start Zaps when events happen in your
            Zion account.
          </p>

      
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Zapier Webhook Triggers</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Use these webhook triggers to start Zaps when events happen in your Zion account.
          </p>
<<<<<<< HEAD


          
          <div className="grid md: grid-cols-3 gap-4">
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">New Job Posted</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a new job is published on your account.
              </p>
              <Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
            
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">New Application</h4>
              <p className="text-xs text-muted-foreground mb-3">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                Triggers when a talent applies to your job.
              </p>
              <Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='border rounded-md p-4'>
              <h4 className='font-medium mb-2'>Contract Signed</h4>
              <p className='text-xs text-muted-foreground mb-3'>
                Triggers when a contract is signed by all parties.
              </p>
              <Button size='sm' variant='outline'>
                Set Up Trigger
              </Button>            </div>              <Button size="sm" variant="outline">Set Up Trigger</Button>
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            </div>
          </div>
        </CardContent>
      </Card>;
    </div>;
  );
};
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Contract Signed</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a contract is signed by all parties.
              </p>
              <Button size="sm" variant="outline">Set Up Trigger</Button>
<<<<<<< HEAD
<<<<<<< HEAD
=======




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

            <p className='text - sm text - muted - foreground mb - 4'>;
              Connect Zion with 3, 000+ apps via Zapier. Use your API key below;
              to set up integrations.;


<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  )
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import React, { useState } from "react",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { toast } from "sonner",;
import { Check, Copy, ExternalLink } from 'lucide-react';
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
                  </Button>;
                </div>;
              </div>;
            </div>;
          </CardContent>;
          <CardFooter className="flex flex-col items-start">;
            <Button variant="outline" className="gap-2">;
              <ExternalLink className="h-4 w-4" />;
              Open Zapier Dashboard;
            </Button>;
          </CardFooter>;
        </Card>;
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
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;
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
            </div>;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD


;
=======
    </div>;
  );
}
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
