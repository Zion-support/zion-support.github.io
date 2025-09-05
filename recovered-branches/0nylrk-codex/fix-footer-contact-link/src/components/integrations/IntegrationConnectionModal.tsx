
<<<<<<< HEAD
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
  lastSync?:string;
=======
import React, { useState } from "react",
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Checkbox } from "@/components/ui/checkbox",
import { Switch } from "@/components/ui/switch",
import { toast } from "sonner",
interface Integration {
  id: string,
  name: string,
  description: string,
  logoUrl?: string,
  status: "connected" | "warning" | "disconnected",
  lastSync?: string,
interface Integration {id: string,
  name: string,
  description: string,
  logoUrl?: string;
  status: &quot;connected&quot; | &quot;warning&quot; | &quot;disconnected&quot;
  lastSync?: string
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
interface IntegrationConnectionModalProps {;
  isOpen:boolean,;
  onClose:() => void,;
  integration:Integration;
}
<<<<<<< HEAD
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
                ;
                <div className="flex items-center space-x-2">;
                  <Checkbox ;
                    id="autoCreateContacts" ;
                    checked={syncSettings.autoCreateContacts} ;
                    onCheckedChange={(checked) => ;
                      setSyncSettings({...syncSettings, autoCreateContacts:checked as boolean});
                    }
                  />;
                  <Label htmlFor="autoCreateContacts">Auto-create contacts in {integration.name}</Label>;
                </div>;
                ;
                <div className="flex items-center space-x-2">;
                  <Checkbox ;
                    id="pushNotes" ;
                    checked={syncSettings.pushNotes} ;
                    onCheckedChange={(checked) => ;
                      setSyncSettings({...syncSettings, pushNotes:checked as boolean});
                    }
                  />;
                  <Label htmlFor="pushNotes">Push notes and comments</Label>;
                </div>;
                ;
                <div className="flex items-center space-x-2">;
                  <Checkbox ;
                    id="syncJobDetails" ;
                    checked={syncSettings.syncJobDetails} ;
                    onCheckedChange={(checked) => ;
                      setSyncSettings({...syncSettings, syncJobDetails:checked as boolean});
                    }
                  />;
                  <Label htmlFor="syncJobDetails">Sync job details</Label>;
                </div>;
                ;
                <div className="flex items-center space-x-2">;
                  <Checkbox ;
                    id="syncApplicantData" ;
                    checked={syncSettings.syncApplicantData} ;
                    onCheckedChange={(checked) => ;
                      setSyncSettings({...syncSettings, syncApplicantData:checked as boolean});
                    }
                  />;
                  <Label htmlFor="syncApplicantData">Sync applicant data</Label>;
                </div>;
              </div>;
              ;
              <div className="space-y-2">;
                <h3 className="text-sm font-medium">API Details</h3>;
                <p className="text-xs text-muted-foreground">;
                  Last synced:{integration.lastSync ;
                    ? new Date(integration.lastSync).toLocaleString() ;
                    :"Never"}
                </p>;
              </div>;
            </div>;
            ;
            <DialogFooter className="flex items-center justify-between">;
              <Button variant="outline" onClick={handleDisconnect} type="button">;
                Disconnect;
              </Button>;
              <Button onClick={handleSaveSettings} type="button">;
                Save Settings;
              </Button>;
            </DialogFooter>;
          </>;
        ) :(;
          <>;
            <div className="space-y-4 py-4">;
              <p className="text-sm">;
                Connect your {integration.name} account to sync job contacts, applicants, and more. ;
                You'll be redirected to {integration.name} to authorize this connection.;
              </p>;
              ;
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
            ;
            <DialogFooter>;
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>;
                {isConnecting ? "Connecting..." :`Connect to ${integration.name}`}
              </Button>;
            </DialogFooter>;
          </>;
        )}
      </DialogContent>;
    </Dialog>;
  ),;
=======

export function IntegrationConnectionModal({ isOpen, onClose, integration }: IntegrationConnectionModalProps) {
  const [isConnecting, setIsConnecting] = useState(false),
  const [syncSettings, setSyncSettings] = useState({
    autoCreateContacts: true,
    pushNotes: false,
    syncJobDetails: true,
    syncApplicantData: true
  }),
  
  const handleConnectOAuth = () => {
    setIsConnecting(true),
    
    // Simulate OAuth flow,
setTimeout(() => {
      setIsConnecting(false),
      toast.success(`Connected to ${integration.name} successfully`),
      onClose()
    }, 2000),
    
    // In a real application, this would open a popup for OAuth authentication
    // window.open(`/api/oauth/${integration.id}`, 'oauthwidth=600,height=600')
  },
  
  const handleDisconnect = () => {
    // In a real application, this would revoke the OAuth token,
toast.info(`Disconnected from ${integration.name}`),
    onClose()
  },
  
  const handleSaveSettings = () => {
    // In a real application, this would save the sync settings,
toast.success("Integration settings saved"),
    onClose()
  },  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=&quot;sm:max-w-md&quot;>
        <DialogHeader className=&quot;flex flex-row items-center gap-4&quot;>
          <img,
src={integration.logoUrl} 
            alt={`${integration.name} logo`} 
            className=&quot;h-12 w-12 rounded&quot; 
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder.svg"            }}
  status: "connected" | "warning" | "disconnected";
  lastSync?: string}

interface IntegrationConnectionModalProps {isOpen: boolean,
  onClose: () => void;
  integration: Integration}

export function IntegrationConnectionModal(_{isOpen, onClose, integration}: IntegrationConnectionModalProps) {const [isConnecting, setIsConnecting] = useState(false);
  const [syncSettings, setSyncSettings] = useState({
    autoCreateContacts: true, pushNotes: false, syncJobDetails: true, syncApplicantData: true});
  
  const handleConnectOAuth = () => {setIsConnecting(true);
    
    // Simulate OAuth flow,
setTimeout_(() => {
      setIsConnecting(false);
      toast.success(`Connected to ${integration.name} successfully`);
      onClose()
    }, 2000);
    
    // In a real application, this would open a popup for OAuth authentication
    // window.open(`/api/oauth/${integration.id}`, 'oauth', 'width=600,height=600')
  };
  
  const handleDisconnect = () => {_// In a real application, this would revoke the OAuth token,
toast.info(`Disconnected from ${integration.name}`);
    onClose()
  };
  
  const handleSaveSettings = () => {_// In a real application, this would save the sync settings,
toast.success("Integration settings saved");
    onClose()};
  
  return (_<Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center gap-4">
          <img,
src={integration.logoUrl} 
            alt={_`${integration.name} logo`} 
            className="h-12 w-12 rounded" 
            onError={_(e) => {
              (e.target as HTMLImageElement).src = "/placeholder.svg"}}
          />
          <div>
            <DialogTitle>{integration.name} Integration</DialogTitle>
            <DialogDescription>
              {integration.status === &quot;connected&quot; || integration.status === &quot;warning&quot; 
                ? &quot;Manage your connection settings&quot;                 : `Connect your ${integration.name} account`}
            </DialogDescription>
          </div>
        </DialogHeader>
        
        {(integration.status === &quot;connected&quot; || integration.status === &quot;warning&quot;) ? (
          <>
            <div className=&quot;grid gap-4 py-4&quot;>
              <div className=&quot;space-y-4&quot;>
                <h3 className=&quot;text-sm font-medium&quot;>Sync Settings</h3>                
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Checkbox,
id=&quot;autoCreateContacts&quot; 
                    checked={syncSettings.autoCreateContacts} 
                    onCheckedChange={_(checked) => 
                      setSyncSettings({...syncSettings, autoCreateContacts: checked as boolean})
                    }
                  />
                  <Label htmlFor=&quot;autoCreateContacts&quot;>Auto-create contacts in {integration.name}</Label>                </div>
                
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Checkbox,
id=&quot;pushNotes&quot; 
                    checked={syncSettings.pushNotes} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, pushNotes: checked as boolean})                    }
                  />
                  <Label htmlFor=&quot;pushNotes&quot;>Push notes and comments</Label>
                </div>
                
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Checkbox,
id=&quot;syncJobDetails&quot; 
                    checked={syncSettings.syncJobDetails} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, syncJobDetails: checked as boolean})                    }
                  />
                  <Label htmlFor=&quot;syncJobDetails&quot;>Sync job details</Label>
                </div>
                
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Checkbox,
id=&quot;syncApplicantData&quot; 
                    checked={syncSettings.syncApplicantData} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, syncApplicantData: checked as boolean})                    }
                  />
                  <Label htmlFor=&quot;syncApplicantData&quot;>Sync applicant data</Label>
                </div>
              </div>
              
              <div className=&quot;space-y-2&quot;>
                <h3 className=&quot;text-sm font-medium&quot;>API Details</h3>
                <p className=&quot;text-xs text-muted-foreground&quot;>
                  Last synced: {integration.lastSync                     ? new Date(integration.lastSync).toLocaleString() 
                    : &quot;Never&quot}
                </p>
              </div>
            </div>
            
            <DialogFooter className=&quot;flex items-center justify-between&quot;>
              <Button variant=&quot;outline&quot; onClick={handleDisconnect} type=&quot;button&quot;>
                Disconnect
              </Button>
              <Button onClick={handleSaveSettings} type=&quot;button&quot;>                Save Settings
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <div className=&quot;space-y-4 py-4&quot;>
              <p className=&quot;text-sm&quot;>
                Connect your {integration.name} account to sync job contacts, applicants, and more. 
                You'll be redirected to {integration.name} to authorize this connection.              </p>
              
              <div className=&quot;space-y-4&quot;>
                <h3 className=&quot;text-sm font-medium&quot;>What will be synced:</h3>
                <ul className=&quot;list-disc pl-4 text-sm space-y-1&quot;>
                  <li>Contact information</li>
                  <li>Job details and descriptions</li>
                  <li>Applicant data and status</li>
                  <li>Activity logs and notes</li>
                </ul>
              </div>
            </div>
            
            <DialogFooter>
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>
                {isConnecting ? &quot;Connecting...&quot; : `Connect to ${integration.name}`}              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
