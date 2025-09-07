import { Check, Copy, ExternalLink } from 'lucide-react
export function ZapierIntegration() {


import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Check, Copy, ExternalLink } from 'lucide-react';
export function ZapierIntegration() {;
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState('zap_live_KztCaFieDu4VBnp8eMJZ9x73R');
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");""
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Zap } from 'lucide-react';
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");"
  const handleCopyApiKey = () => {;
    navigator && navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);"
    toast && toast.success('API key copied to clipboard');
    navigator && navigator.clipboard.writeText(apiKey),;
    setCopied(true),;
    setTimeout((,) => setCopied(false), 2000),;
    toast && toast.success("API key copied to clipboard");"
  },;

  return ("
    <div className='space-y-6'>;
</div>
      <div className='grid md:grid-cols-3 gap-6'>;
        <Card className='md:col-span-2'>;

          <CardHeader>;

            <div className='flex items-center justify-between'>;
              <h3 className='text-lg font-semibold'>Zapier Connection</h3>;
              <Badge variant='outline' className='bg-blue-100 text-blue-800'>;

    <div className='space - y-6'>;
      <div className='grid md:grid - cols - 3 gap - 6'>;
        <Card className='md:col - span - 2'>;


            <div className='flex items - center justify - between'>;
              <h3 className='text - lg font - semibold'>Zapier Connection</h3>;
              <Badge variant='outline' className='bg - blue - 100 text - blue - 800'>;

              ;
            </div>;
          <CardContent>;




                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}"

                  
          



"
          <CardFooter className="flex flex-col items-start">"
            <Button variant="outline" className="gap-2">"
              <ExternalLink className="h-4 w-4" />"

            
          
        



        
        <Card>

          <CardHeader>
            <h3 className="text-lg font-semibold">Popular Zaps</h3>"
          
          <CardContent>
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

              <span>Explore Zion Zaps</span>
            
          
        


      



          <h3 className='text-lg font-semibold'>Zapier Webhook Triggers</h3>
        

          <p className='text-sm text-muted-foreground mb-4'>
</p>

      


          <h3 className="text-lg font-semibold">Zapier Webhook Triggers</h3>"
        
          <p className="text-sm text-muted-foreground mb-4">"


          <div className="grid md: grid-cols-3 gap-4">"
</div>"
            <div className="border rounded-md p-4">"
              <h4 className="font-medium mb-2">New Job Posted</h4>""
              <p className="text-xs text-muted-foreground mb-3">"
              </p>"
              <Button size="sm" variant="outline">Set Up Trigger"
              <h4 className="font-medium mb-2">New Application</h4>""


        
    </div>;"
              <h4 className="font-medium mb-2">Contract Signed</h4>""
        
      
            <p className='text - sm text - muted - foreground mb - 4'>;
    <div className="space-y-6">;"
      <div className="grid md:grid-cols-3 gap-6">;"
        <Card className="md:col-span-2">;"

            <div className="flex items-center justify-between">;"
              <h3 className="text-lg font-semibold">Zapier Connection</h3>;""
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active;"
            <p className="text-sm text-muted-foreground mb-4">;"
            </p>;"
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
)
                      <Check className='h - 4 w - 4' />) : (
                      <Copy className='h - 4 w - 4' />)}                                    <Button size="sm" variant="outline" on_click={handleCopyApiKey}>;"
                    {copied ? <Check className="h - 4 w - 4" /> : <Copy className="h - 4 w - 4" />}"

          ;"
          <CardFooter className='flex flex - col items - start'>;

            <Button variant='outline' className='gap - 2'>;

              <ExternalLink className='h - 4 w - 4' />              Open Zapier Dashboard;

          <CardFooter className="flex flex - col items - start">;"
            <Button variant="outline" className="gap - 2">;"
              <ExternalLink className="h - 4 w - 4" />;"

        <Card>;

            <h3 className='text - lg font - semibold'>Popular Zaps</h3>;

            <ul className='space - y-2 text - sm'>;
              <li className='flex items - center gap - 2'>;
                <Check className='h - 4 w - 4 text - green - 500' />                <span > Add new Zion contacts to Mailchimp</span>;

              </li>;
                <Check className='h - 4 w - 4 text - green - 500' />;

                <span > Create Slack notifications for new jobs</span>;

                <span > Sync completed projects to accounting</span>;
                <Check className='h - 4 w - 4 text - green - 500' />                <span > Create calendar events for interviews</span>              <li className="flex items - center gap - 2">;"
                <Check className="h - 4 w - 4 text - green - 500" />;"

                <span > Create calendar events for interviews</span>;
            </ul>;
          <CardFooter>;



              <Button size='sm' variant='outline'>;

              </p>;


                          </div>              <Button size="sm" variant="outline">Set Up Trigger;"