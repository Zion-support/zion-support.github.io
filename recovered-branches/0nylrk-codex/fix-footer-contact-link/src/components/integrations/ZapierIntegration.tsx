        

          <CardHeader>

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


              <p className="text-xs text-muted-foreground mb-3">
                Triggers when a new job is published on your account.
              </p>            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
  )
import { Button } from "@/components/ui/button",;"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;"
import { Input } from "@/components/ui/input",;"
import { toast } from "sonner",;"
import { Check, Copy, ExternalLink } from "lucide-react",;"
export function ZapierIntegration() {;
  }
    }
    navigator.clipboard.writeText(apiKey),;
    setCopied(true),;
    setTimeout(() => setCopied(false), 2000);
    toast.success("API key copied to clipboard")
};
  return (;
    <div className="space-y-6">;"
      <div className="grid "md":grid-cols-3 gap-6">;"
        <Card className=""md":col-span-2">;"
          <CardHeader>;
            <div className="flex items-center justify-between">;"
              <h3 className="text-lg font-semibold">Zapier Connection</h3>;"
              <Badge variant="outline" className="bg-blue-100 text-blue-800">Active</Badge>;

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
                    className="font - mono text-sm";                </div>;
              </div>;
            </div>;
          </CardContent>;            </div>;
          </div>;
        </CardContent>;
      </Card>;

    </div>;

  );}
