<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function ZapierIntegration() {
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState('zap_live_KztCaFieDu4VBnp8eMJZ9x73R');

import React, { useState } from "react",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { toast } from "sonner",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { Check, Copy, ExternalLink } from 'lucide-react'
=======
>>>>>>> import { Check, Copy, ExternalLink } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Check, Copy, ExternalLink } from 'lucide-react'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }

  },
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Connect Zion with 3,000+ apps via Zapier. Use your API key below to set up integrations.
            </p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div className='space-y-4'>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Your Zion API Key</label>
                <div className='flex gap-2'>
                  <Input
                    value={apiKey}
                    readOnly
                    className='font-mono text-sm'                  />
                  <Button
                    size='sm'
                    variant='outline'
                    onClick={handleCopyApiKey}
                  >
                    {copied ? (
                      <Check className='h-4 w-4' />
                    ) : (
                      <Copy className='h-4 w-4' />
                    )}                  </Button>                  <Button size="sm" variant="outline" onClick={handleCopyApiKey}>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                     {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
ursor/fix-website-loading-errors-and-merge-6662
  },
  return (
    <div className='space - y-6'>;
      <div className='grid md:grid - cols - 3 gap - 6'>;
        <Card className='md:col - span - 2'>;
          <CardHeader>;
            <div className='flex items - center justify - between'>;
              <h3 className='text - lg font - semibold'>Zapier Connection</h3>;
              <Badge variant='outline' className='bg - blue - 100 text - blue - 800'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                Active;
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>                   </Button>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </div>
              </div>
            </div>
          </CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <CardFooter className='flex flex-col items-start'>
            <Button variant='outline' className='gap-2'>
              <ExternalLink className='h-4 w-4' />              Open Zapier Dashboard
            </Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           <CardFooter className="flex flex-col items-start">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <CardFooter className="flex flex-col items-start">
>>>>>>>             <Button variant="outline" className="gap-2">
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <CardFooter className="flex flex-col items-start">
            <Button variant="outline" className="gap-2">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <ExternalLink className="h-4 w-4" />
              Open Zapier Dashboard
            </Button>
          </CardFooter>
        </Card>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                <Check className="h-4 w-4 text-green-500" />
                <span>Create calendar events for interviews</span>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <Card>
          <CardHeader>
            <h3 className='text-lg font-semibold'>Popular Zaps</h3>
          </CardHeader>
          <CardContent>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-center gap-2'>
                <Check className='h-4 w-4 text-green-500' />                <span>Add new Zion contacts to Mailchimp</span>
              </li>
              <li className='flex items-center gap-2'>
                <Check className='h-4 w-4 text-green-500' />
                <span>Create Slack notifications for new jobs</span>
              </li>
              <li className='flex items-center gap-2'>
                <Check className='h-4 w-4 text-green-500' />
                <span>Sync completed projects to accounting</span>
              </li>
              <li className='flex items-center gap-2'>
                <Check className='h-4 w-4 text-green-500' />                <span>Create calendar events for interviews</span>              <li className="flex items-center gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 <Check className="h-4 w-4 text-green-500" />
ursor/fix-website-loading-errors-and-merge-6662
                <Check className="h-4 w-4 text-green-500" />
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>>                 <span>Create calendar events for interviews</span>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </li>
            </ul>
          </CardContent>
          <CardFooter>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
            <Button variant='outline' className='w-full gap-1'>
              <ExternalLink className='h-4 w-4' />              <span>Explore Zion Zaps</span>            <Button variant="outline" className="w-full gap-1">
>>>>>>>               <ExternalLink className="h-4 w-4" />
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <ExternalLink className="h-4 w-4" />
>>>>>>>               <span>Explore Zion Zaps</span>
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Button variant='outline' className='w-full gap-1'>
              <ExternalLink className='h-4 w-4' />              <span>Explore Zion Zaps</span>            <Button variant="outline" className="w-full gap-1">
            <Button variant="outline" className="w-full gap-1">
              <ExternalLink className="h-4 w-4" />
              <span>Explore Zion Zaps</span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Button>
          </CardFooter>
        </Card>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       <Card>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <Card>
        <CardHeader>
          <h3 className='text-lg font-semibold'>Zapier Webhook Triggers</h3>
        </CardHeader>
        <CardContent>
          <p className='text-sm text-muted-foreground mb-4'>
            Use these webhook triggers to start Zaps when events happen in your
            Zion account.
          </p>

      
      <Card>
>>>>>>>         <CardHeader>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      
      <Card>
        <CardHeader>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <h3 className="text-lg font-semibold">Zapier Webhook Triggers</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Use these webhook triggers to start Zaps when events happen in your Zion account.
          </p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='grid md:grid-cols-3 gap-4'>
            <div className='border rounded-md p-4'>
              <h4 className='font-medium mb-2'>New Job Posted</h4>
              <p className='text-xs text-muted-foreground mb-3'>
                Triggers when a new job is published on your account.
              </p>
              <Button size='sm' variant='outline'>
                Set Up Trigger
              </Button>            </div>
            <div className='border rounded-md p-4'>
              <h4 className='font-medium mb-2'>New Application</h4>
              <p className='text-xs text-muted-foreground mb-3'>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 Triggers when a talent applies to your job.
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          
          <div className="grid md: grid-cols-3 gap-4">
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">New Job Posted</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a new job is published on your account.
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </p>
              <Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
            
            <div className="border rounded-md p-4">
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
              <h4 className="font-medium mb-2">New Application</h4>
              <p className="text-xs text-muted-foreground mb-3">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                Triggers when a talent applies to your job.
              </p>
              <Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div className='border rounded-md p-4'>
              <h4 className='font-medium mb-2'>Contract Signed</h4>
              <p className='text-xs text-muted-foreground mb-3'>
                Triggers when a contract is signed by all parties.
              </p>
              <Button size='sm' variant='outline'>
                Set Up Trigger
              </Button>            </div>              <Button size="sm" variant="outline">Set Up Trigger</Button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <div className="border rounded-md p-4">
>>>>>>>               <h4 className="font-medium mb-2">Contract Signed</h4>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Contract Signed</h4>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a contract is signed by all parties.
              </p>
              <Button size="sm" variant="outline">Set Up Trigger</Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

            </p>;
            <div className='space - y-4'>;
              <div className='space - y-2'>;
                <label className='text - sm font - medium'>Your Zion API Key</label>;
                <div className='flex gap - 2'>;
                  <Input;
                    value={api_key}
                    read_only;
                    className='font - mono text - sm'                  />;
                  <Button;
                    size='sm';
                    variant='outline';
                    on_click={handleCopyApiKey}
                  >;
                    {copied ? (
                      <Check className='h - 4 w - 4' />) : (
                      <Copy className='h - 4 w - 4' />)}                  </Button>                  <Button size="sm" variant="outline" on_click={handleCopyApiKey}>;
                    {copied ? <Check className="h - 4 w - 4" /> : <Copy className="h - 4 w - 4" />}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </Button>;
                </div>;
              </div>;
            </div>;
          </CardContent>;
<<<<<<< HEAD

          <CardFooter className='flex flex - col items - start'>;
            <Button variant='outline' className='gap - 2'>;
              <ExternalLink className='h - 4 w - 4' />              Open Zapier Dashboard;
            </Button>;
          </CardFooter>;
        </Card>;
          <CardFooter className="flex flex - col items - start">;
            <Button variant="outline" className="gap - 2">;
              <ExternalLink className="h - 4 w - 4" />;

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

        <Card>;
          <CardHeader>;
            <h3 className='text - lg font - semibold'>Popular Zaps</h3>;
          </CardHeader>;
          <CardContent>;
            <ul className='space - y-2 text - sm'>;
              <li className='flex items - center gap - 2'>;
                <Check className='h - 4 w - 4 text - green - 500' />                <span > Add new Zion contacts to Mailchimp</span>;
              </li>;
              <li className='flex items - center gap - 2'>;
                <Check className='h - 4 w - 4 text - green - 500' />;
                <span > Create Slack notifications for new jobs</span>;
              </li>;
              <li className='flex items - center gap - 2'>;
                <Check className='h - 4 w - 4 text - green - 500' />;
                <span > Sync completed projects to accounting</span>;
              </li>;
              <li className='flex items - center gap - 2'>;
                <Check className='h - 4 w - 4 text - green - 500' />                <span > Create calendar events for interviews</span>              <li className="flex items - center gap - 2">;
                <Check className="h - 4 w - 4 text - green - 500" />;
                <span > Create calendar events for interviews</span>;

>>>>>>>               </li>;
            </ul>;
          </CardContent>;
          <CardFooter>;


=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;
<<<<<<< HEAD


                Triggers when a new job is published on your account.;
              </p>;
              <Button size='sm' variant='outline'>;
                Set Up Trigger;
              </Button>            </div>;


                Triggers when a talent applies to your job.;
              </p>;
              <Button size='sm' variant='outline'>;
                Set Up Trigger;
              </Button>;
            </div>;


                Triggers when a contract is signed by all parties.;
              </p>;
              <Button size='sm' variant='outline'>;
                Set Up Trigger;
              </Button>            </div>              <Button size="sm" variant="outline">Set Up Trigger</Button>;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>;
          </div>;
        </CardContent>;
      </Card>;
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
