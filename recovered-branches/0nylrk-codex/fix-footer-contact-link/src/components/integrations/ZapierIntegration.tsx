
import React, { useState } from &quot;react&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardFooter, CardHeader } from &quot;@/components/ui/card&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { toast } from &quot;sonner&quot;;
import { Check, Copy, ExternalLink } from &quot;lucide-react&quot;;

export function ZapierIntegration() {
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState(&quot;zap_live_KztCaFieDu4VBnp8eMJZ9x73R&quot;);
  
  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success(&quot;API key copied to clipboard&quot;);
  };
  
  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
        <Card className=&quot;md:col-span-2&quot;>
          <CardHeader>
            <div className=&quot;flex items-center justify-between&quot;>
              <h3 className=&quot;text-lg font-semibold&quot;>Zapier Connection</h3>
              <Badge variant=&quot;outline&quot; className=&quot;bg-blue-100 text-blue-800&quot;>Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className=&quot;text-sm text-muted-foreground mb-4&quot;>
              Connect Zion with 3,000+ apps via Zapier. Use your API key below to set up integrations.
            </p>
            
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;space-y-2&quot;>
                <label className=&quot;text-sm font-medium&quot;>Your Zion API Key</label>
                <div className=&quot;flex gap-2&quot;>
                  <Input 
                    value={apiKey} 
                    readOnly 
                    className=&quot;font-mono text-sm&quot; 
                  />
                  <Button size=&quot;sm&quot; variant=&quot;outline&quot; onClick={handleCopyApiKey}>
                    {copied ? <Check className=&quot;h-4 w-4&quot; /> : <Copy className=&quot;h-4 w-4&quot; />}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className=&quot;flex flex-col items-start&quot;>
            <Button variant=&quot;outline&quot; className=&quot;gap-2&quot;>
              <ExternalLink className=&quot;h-4 w-4&quot; />
              Open Zapier Dashboard
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <h3 className=&quot;text-lg font-semibold&quot;>Popular Zaps</h3>
          </CardHeader>
          <CardContent>
            <ul className=&quot;space-y-2 text-sm&quot;>
              <li className=&quot;flex items-center gap-2&quot;>
                <Check className=&quot;h-4 w-4 text-green-500&quot; />
                <span>Add new Zion contacts to Mailchimp</span>
              </li>
              <li className=&quot;flex items-center gap-2&quot;>
                <Check className=&quot;h-4 w-4 text-green-500&quot; />
                <span>Create Slack notifications for new jobs</span>
              </li>
              <li className=&quot;flex items-center gap-2&quot;>
                <Check className=&quot;h-4 w-4 text-green-500&quot; />
                <span>Sync completed projects to accounting</span>
              </li>
              <li className=&quot;flex items-center gap-2&quot;>
                <Check className=&quot;h-4 w-4 text-green-500&quot; />
                <span>Create calendar events for interviews</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant=&quot;outline&quot; className=&quot;w-full gap-1&quot;>
              <ExternalLink className=&quot;h-4 w-4&quot; />
              <span>Explore Zion Zaps</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <h3 className=&quot;text-lg font-semibold&quot;>Zapier Webhook Triggers</h3>
        </CardHeader>
        <CardContent>
          <p className=&quot;text-sm text-muted-foreground mb-4&quot;>
            Use these webhook triggers to start Zaps when events happen in your Zion account.
          </p>
          
          <div className=&quot;grid md:grid-cols-3 gap-4&quot;>
            <div className=&quot;border rounded-md p-4&quot;>
              <h4 className=&quot;font-medium mb-2&quot;>New Job Posted</h4>
              <p className=&quot;text-xs text-muted-foreground mb-3&quot;>
                Triggers when a new job is published on your account.
              </p>
              <Button size=&quot;sm&quot; variant=&quot;outline&quot;>Set Up Trigger</Button>
            </div>
            
            <div className=&quot;border rounded-md p-4&quot;>
              <h4 className=&quot;font-medium mb-2&quot;>New Application</h4>
              <p className=&quot;text-xs text-muted-foreground mb-3&quot;>
                Triggers when a talent applies to your job.
              </p>
              <Button size=&quot;sm&quot; variant=&quot;outline&quot;>Set Up Trigger</Button>
            </div>
            
            <div className=&quot;border rounded-md p-4&quot;>
              <h4 className=&quot;font-medium mb-2&quot;>Contract Signed</h4>
              <p className=&quot;text-xs text-muted-foreground mb-3&quot;>
                Triggers when a contract is signed by all parties.
              </p>
              <Button size=&quot;sm&quot; variant=&quot;outline&quot;>Set Up Trigger</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
