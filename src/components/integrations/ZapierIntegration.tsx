
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

                <Check className="h-4 w-4 text-green-500" />
                <span>Create calendar events for interviews</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>

              <ExternalLink className="h-4 w-4" />
              <span>Explore Zion Zaps</span>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Zapier Webhook Triggers</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Use these webhook triggers to start Zaps when events happen in your Zion account.
          </p>

                Triggers when a talent applies to your job.
              </p>
              <Button size="sm" variant="outline">Set Up Trigger</Button>
            </div>
<<<<<<< HEAD
=======
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

                  </Button>
          <CardFooter className='flex flex-col items-start'>
            <Button variant='outline' className='gap-2'>
              <ExternalLink className='h-4 w-4' />              Open Zapier Dashboard
            </Button>
          </CardFooter>
        </Card>
              <li className='flex items-center gap-2'>
                <Check className='h-4 w-4 text-green-500' />                <span>Create calendar events for interviews</span>              <li className="flex items-center gap-2">
            <Button variant='outline' className='w-full gap-1'>
              <ExternalLink className='h-4 w-4' />              <span>Explore Zion Zaps</span>            <Button variant="outline" className="w-full gap-1">


          
          <div className="grid md: grid-cols-3 gap-4">
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">New Job Posted</h4>
              <p className="text-xs text-muted-foreground mb-3">
              <h4 className="font-medium mb-2">New Application</h4>
              <p className="text-xs text-muted-foreground mb-3">




            <p className='text - sm text - muted - foreground mb - 4'>;
              Connect Zion with 3, 000+ apps via Zapier. Use your API key below;
              to set up integrations.;


              </li>;
    </div>;
  );
}
;
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
