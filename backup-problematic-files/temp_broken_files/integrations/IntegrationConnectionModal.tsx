
import React, { useState } from "react",;
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Checkbox } from "@/components/ui/checkbox",;
import { Switch } from "@/components/ui/switch",;
import { toast } from "sonner",;
;
interface Integration {;
  id:string,;
  name:string,;
  description:string,;
  logoUrl?:string,;
  status:"connected" | "warning" | "disconnected",;
  lastSync?:string;}
;
interface IntegrationConnectionModalProps {;
  isOpen:boolean,;
  onClose:() => void,;
  integration:Integration;
}
;
export function IntegrationConnectionModal({ isOpen, onClose, integration } IntegrationConnectionModalProps) {;
  const [isConnecting, setIsConnecting] = useState(false),;
  const [syncSettings, setSyncSettings] = useState({;
    autoCreateContacts:true,;
    pushNotes:false,;
    syncJobDetails:true,;
    syncApplicantData:true;
  }),;
  ;
  const handleConnectOAuth = () => {;
    setIsConnecting(true),;
    ;
    // Simulate OAuth flow ;
    setTimeout(() => {;
      setIsConnecting(false),;
      toast.success(`Connected to ${integration.name} successfully`),;
      onClose(),;
    }, 2000),;
    ;
    // In a real application, this would open a popup for OAuth authentication;
    // window.open(`/api/oauth/${integration.id}`, 'oauthwidth=600,height=600'),;
  },;
  ;
  const handleDisconnect = () => {;
    // In a real application, this would revoke the OAuth token;
    toast.info(`Disconnected from ${integration.name}`),;
    onClose(),;
  },;
  ;
  const handleSaveSettings = () => {;
    // In a real application, this would save the sync settings;
    toast.success("Integration settings saved"),;
    onClose(),;
  },;
  ;
  return (;
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-md">;
        <DialogHeader className="flex flex-row items-center gap-4">;
          <img ;
            src={integration.logoUrl} ;
            alt={`${integration.name} logo`} ;
            className="h-12 w-12 rounded" ;
            onError={(e) => {;
              (e.target as HTMLImageElement).src = "/placeholder.svg",;
            }}
          />;
          <div>;
            <DialogTitle>{integration.name} Integration</DialogTitle>;
            <DialogDescription>;
              {integration.status === "connected" || integration.status === "warning" ;
                ? "Manage your connection settings" ;
                :`Connect your ${integration.name} account`}
            </DialogDescription>;
          </div>;
        </DialogHeader>;
        ;
        {(integration.status === "connected" || integration.status === "warning") ? (;
          <>;
            <div className="grid gap-4 py-4">;
              <div className="space-y-4">;
                <h3 className="text-sm font-medium">Sync Settings</h3>;

                    }
                  />;
                  <Label htmlFor="pushNotes">Push notes and comments</Label>;
                </div>;

                    }
                  />;
                  <Label htmlFor="syncJobDetails">Sync job details</Label>;
                </div>;

                    }
                  />;
                  <Label htmlFor="syncApplicantData">Sync applicant data</Label>;
                </div>;
              </div>;

                Disconnect;
              </Button>;
              <Button onClick={handleSaveSettings} type="button">;
                Save Settings;
              </Button>;
            </DialogFooter>;
          </>;

              <div className="space-y-4">;
                <h3 className="text-sm font-medium">What will be synced:</h3>;
                <ul className="list-disc pl-4 text-sm space-y-1">;
                  <li>Contact information</li>;
                  <li>Job details and descriptions</li>;
                  <li>Applicant data and status</li>;
                  <li>Activity logs and notes</li>;
                </ul>;
              </div>;
            </div>;

              </Button>;
            </DialogFooter>;
          </>;
        )}
      </DialogContent>;
    </Dialog>;

}