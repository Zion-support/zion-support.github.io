
<<<<<<< HEAD






import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


} from "@/components/ui/dialog";
=======
import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
>>>>>>> origin/auto/autonomy-17186719616
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
<<<<<<< HEAD

import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
interface Integration {;


  id: string;
  name: string;
  description: string;
  logo_url?: string;
  status: "connected" | "warning" | "disconnected";


interface IntegrationConnectionModalProps {;

  isOpen: boolean;
  onClose: () => void;



  integration: Integration
}





export function IntegrationConnectionModal(): any ({;
  isOpen,;
  onClose,;
  integration,;
}: IntegrationConnectionModalProps) {;
  const [isConnecting, setIsConnecting] = useState(false);



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



export function IntegrationConnectionModal({
  isOpen
  onClose
  integration
}: IntegrationConnectionModalProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [syncSettings, setSyncSettings] = useState({
    autoCreateContacts: true
    pushNotes: false
    syncJobDetails: true
    syncApplicantData: true

  });

  const handleConnectOAuth = () => {;
    setIsConnecting(true);

    // Simulate OAuth flow;
    setTimeout(() => {;

      setIsConnecting(false);
      toast && toast.success(`Connected to ${integration && integration.name} successfully`);
      onClose();
    }, 2000);


    // In a real application, this would open a popup for OAuth authentication;
    // window && window.open(`/api/oauth/${integration && integration.id}`, 'oauthwidth=600,height=600');
  };

  const handleDisconnect = () => {;
    // In a real application, this would revoke the OAuth token;
    toast && toast.info(`Disconnected from ${integration && integration.name}`);
    onClose();
  };

  const handleSaveSettings = () => {;
    // In a real application, this would save the sync settings;
    toast && toast.success("Integration settings saved");

    onClose();
  }

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
  lastSync?: string
import React, { useState } from "react",;
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Checkbox } from "@/components/ui/checkbox",;
import { Switch } from "@/components/ui/switch",;
import { toast } from "sonner",;
interface Integration {;
  id: string,;
  name: string,;
  description: string,;
  logoUrl?: string,;
  status: "connected" | "warning" | "disconnected",;
  lastSync?: string;
}
;
interface IntegrationConnectionModalProps {;
  isOpen: boolean,;
  onClose: () => void,;
=======
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

interface Integration {
  id: string;
  name: string;
  description: string;
  logoUrl?: string;
  status: "connected" | "warning" | "disconnected";
  lastSync?: string;
}

interface IntegrationConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
>>>>>>> origin/auto/autonomy-17186719616
  integration: Integration;
}

export function IntegrationConnectionModal({ isOpen, onClose, integration }: IntegrationConnectionModalProps) {
<<<<<<< HEAD
  const [isConnecting, setIsConnecting] = useState(false),


=======
  const [isConnecting, setIsConnecting] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616
  const [syncSettings, setSyncSettings] = useState({
    autoCreateContacts: true,
    pushNotes: false,
    syncJobDetails: true,
    syncApplicantData: true
<<<<<<< HEAD
  }),
  
  const handleConnectOAuth = () => {
    setIsConnecting(true),
    
    // Simulate OAuth flow 
    setTimeout(() => {
      setIsConnecting(false),
      toast.success(`Connected to ${integration.name} successfully`),
      onClose()
    }, 2000),
    
    // In a real application, this would open a popup for OAuth authentication
    // window.open(`/api/oauth/${integration.id}`, 'oauthwidth=600,height=600')
  },
  
  const handleDisconnect = () => {
    // In a real application, this would revoke the OAuth token
    toast.info(`Disconnected from ${integration.name}`),
    onClose()
  },
  
  const handleSaveSettings = () => {
    // In a real application, this would save the sync settings
    toast.success("Integration settings saved"),
    onClose()
  },

  

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-md">;
        <DialogHeader className="flex flex-row items-center gap-4">;
          <img
            src={integration && integration.logoUrl}
            alt={`${integration && integration.name} logo`}
            className="h-12 w-12 rounded"
            onError={(e) => {;
              (e && e.target as HTMLImageElement).src = "/placeholder && placeholder.svg";
=======
  });
  
  const handleConnectOAuth = () => {
    setIsConnecting(true);
    
    // Simulate OAuth flow 
    setTimeout(() => {
      setIsConnecting(false);
      toast.success(`Connected to ${integration.name} successfully`);
      onClose();
    }, 2000);
    
    // In a real application, this would open a popup for OAuth authentication
    // window.open(`/api/oauth/${integration.id}`, 'oauth', 'width=600,height=600');
  };
  
  const handleDisconnect = () => {
    // In a real application, this would revoke the OAuth token
    toast.info(`Disconnected from ${integration.name}`);
    onClose();
  };
  
  const handleSaveSettings = () => {
    // In a real application, this would save the sync settings
    toast.success("Integration settings saved");
    onClose();
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center gap-4">
          <img 
            src={integration.logoUrl} 
            alt={`${integration.name} logo`} 
            className="h-12 w-12 rounded" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder.svg";
>>>>>>> origin/auto/autonomy-17186719616
            }}
          />
          <div>
            <DialogTitle>{integration.name} Integration</DialogTitle>
            <DialogDescription>
<<<<<<< HEAD

              {integration.status === "connected" |
              integration.status === "warning"
                ? "Manage your connection settings"
              {integration.status === "connected" || integration.status === "warning" 
                ? "Manage your connection settings" 

=======
              {integration.status === "connected" || integration.status === "warning" 
                ? "Manage your connection settings" 
>>>>>>> origin/auto/autonomy-17186719616
                : `Connect your ${integration.name} account`}
            </DialogDescription>
          </div>
        </DialogHeader>
<<<<<<< HEAD







        integration.status === "warning" ? (
        
        {(integration.status === "connected" || integration.status === "warning") ? (


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



=======
        
        {(integration.status === "connected" || integration.status === "warning") ? (
>>>>>>> origin/auto/autonomy-17186719616
          <>
            <div className="grid gap-4 py-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Sync Settings</h3>
<<<<<<< HEAD

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="autoCreateContacts"
                    checked={syncSettings.autoCreateContacts}
                    onCheckedChange={(checked) =>
                      setSyncSettings({
                        ...syncSettings
                        autoCreateContacts: checked as boolean
                      })

                

=======
                
>>>>>>> origin/auto/autonomy-17186719616
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="autoCreateContacts" 
                    checked={syncSettings.autoCreateContacts} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, autoCreateContacts: checked as boolean})
<<<<<<< HEAD


                    }
                  />
                  <Label htmlFor="autoCreateContacts">
                    Auto-create contacts in {integration.name}
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="pushNotes"
                    checked={syncSettings.pushNotes}
                    onCheckedChange={(checked) =>
                      setSyncSettings({
                        ...syncSettings
                        pushNotes: checked as boolean
                      })

                

=======
                    }
                  />
                  <Label htmlFor="autoCreateContacts">Auto-create contacts in {integration.name}</Label>
                </div>
                
>>>>>>> origin/auto/autonomy-17186719616
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="pushNotes" 
                    checked={syncSettings.pushNotes} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, pushNotes: checked as boolean})
<<<<<<< HEAD


=======
>>>>>>> origin/auto/autonomy-17186719616
                    }
                  />
                  <Label htmlFor="pushNotes">Push notes and comments</Label>
                </div>
<<<<<<< HEAD

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="syncJobDetails"
                    checked={syncSettings.syncJobDetails}
                    onCheckedChange={(checked) =>
                      setSyncSettings({
                        ...syncSettings
                        syncJobDetails: checked as boolean
                      })

                

=======
                
>>>>>>> origin/auto/autonomy-17186719616
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="syncJobDetails" 
                    checked={syncSettings.syncJobDetails} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, syncJobDetails: checked as boolean})
<<<<<<< HEAD


=======
>>>>>>> origin/auto/autonomy-17186719616
                    }
                  />
                  <Label htmlFor="syncJobDetails">Sync job details</Label>
                </div>
<<<<<<< HEAD

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="syncApplicantData"
                    checked={syncSettings.syncApplicantData}
                    onCheckedChange={(checked) =>
                      setSyncSettings({
                        ...syncSettings
                        syncApplicantData: checked as boolean
                      })

                

=======
                
>>>>>>> origin/auto/autonomy-17186719616
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="syncApplicantData" 
                    checked={syncSettings.syncApplicantData} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, syncApplicantData: checked as boolean})
<<<<<<< HEAD


=======
>>>>>>> origin/auto/autonomy-17186719616
                    }
                  />
                  <Label htmlFor="syncApplicantData">Sync applicant data</Label>
                </div>
              </div>
<<<<<<< HEAD

              

              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Details</h3>
                <p className="text-xs text-muted-foreground">
          />;
          <div>;
            <DialogTitle>{integration && integration.name} Integration</DialogTitle>;
            <DialogDescription>;
              {integration && integration.status === "connected" ||;
              integration && integration.status === "warning";
                ? "Manage your connection settings";
                : `Connect your ${integration && integration.name} account`}
            </DialogDescription>;
          </div>;
        </DialogHeader>;

        {integration && integration.status === "connected" ||;
        integration && integration.status === "warning" ? (;
          <>;
            <div className="grid gap-4 py-4">;
              <div className="space-y-4">;
                <h3 className="text-sm font-medium">Sync Settings</h3>;

                <div className="flex items-center space-x-2">;
                  <Checkbox
                    id="autoCreateContacts"
                    checked={syncSettings && syncSettings.autoCreateContacts}
                    onCheckedChange={(checked) =>;
                      setSyncSettings({;
                        ...syncSettings,;
                        autoCreateContacts: checked as boolean,;
                      });
                    }
                  />;
                  <Label htmlFor="autoCreateContacts">;
                    Auto-create contacts in {integration && integration.name}
                  </Label>;
                </div>;

                <div className="flex items-center space-x-2">;
                  <Checkbox
                    id="pushNotes"
                    checked={syncSettings && syncSettings.pushNotes}
                    onCheckedChange={(checked) =>;
                      setSyncSettings({;
                        ...syncSettings,;
                        pushNotes: checked as boolean,;
                      });
                    }
                  />;
                  <Label htmlFor="pushNotes">Push notes and comments</Label>;
                </div>;

                <div className="flex items-center space-x-2">;
                  <Checkbox
                    id="syncJobDetails"
                    checked={syncSettings && syncSettings.syncJobDetails}
                    onCheckedChange={(checked) =>;
                      setSyncSettings({;
                        ...syncSettings,;
                        syncJobDetails: checked as boolean,;
                      });
                    }
                  />;
                  <Label htmlFor="syncJobDetails">Sync job details</Label>;
                </div>;

                <div className="flex items-center space-x-2">;
                  <Checkbox
                    id="syncApplicantData"
                    checked={syncSettings && syncSettings.syncApplicantData}
                    onCheckedChange={(checked) =>;
                      setSyncSettings({;
                        ...syncSettings,;
                        syncApplicantData: checked as boolean,;
                      });
                    }
                  />;
                  <Label htmlFor="syncApplicantData">Sync applicant data</Label>;
                </div>;
              </div>;

              <div className="space-y-2">;
                <h3 className="text-sm font-medium">API Details</h3>;
                <p className="text-xs text-muted-foreground">;

                  Last synced:{" "}
                  {integration && integration.lastSync;
                    ? new Date(integration && integration.lastSync).toLocaleString();
=======
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Details</h3>
                <p className="text-xs text-muted-foreground">
                  Last synced: {integration.lastSync 
                    ? new Date(integration.lastSync).toLocaleString() 
>>>>>>> origin/auto/autonomy-17186719616
                    : "Never"}
                </p>
              </div>
            </div>
<<<<<<< HEAD

            






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


            <DialogFooter className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={handleDisconnect}
                type="button"
              >
=======
            
            <DialogFooter className="flex items-center justify-between">
              <Button variant="outline" onClick={handleDisconnect} type="button">
>>>>>>> origin/auto/autonomy-17186719616
                Disconnect
              </Button>
              <Button onClick={handleSaveSettings} type="button">
                Save Settings
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <div className="space-y-4 py-4">
              <p className="text-sm">
<<<<<<< HEAD

                Connect your {integration.name} account to sync job contacts
                applicants, and more. You'll be redirected to {integration.name}{" "}
                to authorize this connection.
              </p>
                Connect your {integration.name} account to sync job contacts, applicants, and more. 
                You'll be redirected to {integration.name} to authorize this connection.
              </p>




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



=======
                Connect your {integration.name} account to sync job contacts, applicants, and more. 
                You'll be redirected to {integration.name} to authorize this connection.
              </p>
              
>>>>>>> origin/auto/autonomy-17186719616
              <div className="space-y-4">
                <h3 className="text-sm font-medium">What will be synced:</h3>
                <ul className="list-disc pl-4 text-sm space-y-1">
                  <li>Contact information</li>
                  <li>Job details and descriptions</li>
                  <li>Applicant data and status</li>
                  <li>Activity logs and notes</li>
                </ul>
              </div>
            </div>
<<<<<<< HEAD

            






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


            <DialogFooter>
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>
                {isConnecting
                  ? "Connecting..."
                  : `Connect to ${integration.name}`}
              </Button>
            </DialogFooter>
          </>

=======
            
            <DialogFooter>
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>
                {isConnecting ? "Connecting..." : `Connect to ${integration.name}`}
              </Button>
            </DialogFooter>
          </>
>>>>>>> origin/auto/autonomy-17186719616
        )}
      </DialogContent>
    </Dialog>
  );
}
<<<<<<< HEAD
;
export function IntegrationConnectionModal({ isOpen, onClose, integration }: IntegrationConnectionModalProps) {;
  const [isConnecting, setIsConnecting] = useState(false),;
  const [syncSettings, setSyncSettings] = useState({;
    autoCreateContacts: true,;
    pushNotes: false,;
    syncJobDetails: true,;
    syncApplicantData: true;
  }),;
  const handleConnectOAuth = () => {;
    setIsConnecting(true),;
    // Simulate OAuth flow;
    setTimeout(() => {;
      setIsConnecting(false),;
      toast.success(`Connected to ${integration.name} successfully`),;
      onClose();
    }, 2000),;
    // In a real application, this would open a popup for OAuth authentication;
    // window.open(`/api/oauth/${integration.id}`, 'oauthwidth=600,height=600');
  },;
  const handleDisconnect = () => {;
    // In a real application, this would revoke the OAuth token;
    toast.info(`Disconnected from ${integration.name}`),;
    onClose();
  },;
  const handleSaveSettings = () => {;
    // In a real application, this would save the sync settings;
    toast.success("Integration settings saved");
    onClose();
  };
  return (;
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-md">;
        <DialogHeader className="flex flex-row items-center gap-4">;
          <img;
            src={integration.logoUrl} ;
            alt={`${integration.name} logo`} ;
            className="h-12 w-12 rounded";
            onError={(e) => {;
              (e.target as HTMLImageElement).src = "/placeholder.svg";
            }}
          />;
          <div>;
            <DialogTitle>{integration.name} Integration</DialogTitle>;
            <DialogDescription>;
              {integration.status === "connected" || integration.status === "warning";
                ? "Manage your connection settings";
                : `Connect your ${integration.name} account`}
            </DialogDescription>;
          </div>;
        </DialogHeader>;
        {(integration.status === "connected" || integration.status === "warning") ? (;
          <>;
            <div className="grid gap-4 py-4">;
              <div className="space-y-4">;
                <h3 className="text-sm font-medium">Sync Settings</h3>;
                <div className="flex items-center space-x-2">;
                  <Checkbox;
                    id="autoCreateContacts";
                    checked={syncSettings.autoCreateContacts} ;
                    onCheckedChange={(checked) =>;
                      setSyncSettings({...syncSettings, autoCreateContacts: checked as boolean});
                    }
                  />;
                  <Label htmlFor="autoCreateContacts">Auto-create contacts in {integration.name}</Label>;
                </div>;
                <div className="flex items-center space-x-2">;
                  <Checkbox;
                    id="pushNotes";
                    checked={syncSettings.pushNotes} ;
                    onCheckedChange={(checked) =>;
                      setSyncSettings({...syncSettings, pushNotes: checked as boolean});
                    }
                  />;
                  <Label htmlFor="pushNotes">Push notes and comments</Label>;
                </div>;
                <div className="flex items-center space-x-2">;
                  <Checkbox;
                    id="syncJobDetails";
                    checked={syncSettings.syncJobDetails} ;
                    onCheckedChange={(checked) =>;
                      setSyncSettings({...syncSettings, syncJobDetails: checked as boolean});
                    }
                  />;
                  <Label htmlFor="syncJobDetails">Sync job details</Label>;
                </div>;
                <div className="flex items-center space-x-2">;
                  <Checkbox;
                    id="syncApplicantData";
                    checked={syncSettings.syncApplicantData} ;
                    onCheckedChange={(checked) =>;
                      setSyncSettings({...syncSettings, syncApplicantData: checked as boolean});
                    }
                  />;
                  <Label htmlFor="syncApplicantData">Sync applicant data</Label>;
                </div>;
              </div>;
              <div className="space-y-2">;
                <h3 className="text-sm font-medium">API Details</h3>;
                <p className="text-xs text-muted-foreground">;
                  Last synced: {integration.lastSync;
                    ? new Date(integration.lastSync).toLocaleString();
                    : "Never"}

                </p>;
              </div>;
            </div>;

            <DialogFooter className="flex items-center justify-between">;
              <Button
                variant="outline"
                onClick={handleDisconnect}
                type="button">;
                Disconnect;
              </Button>;
              <Button onClick={handleSaveSettings} type="button">;
                Save Settings;
              </Button>;
            </DialogFooter>;
          </>;
        ) : (;
          <>;
            <div className="space-y-4 py-4">;
              <p className="text-sm">;
                Connect your {integration && integration.name} account to sync job contacts,;
                applicants, and more. You'll be redirected to {integration && integration.name}{" "}
                to authorize this connection.;
              </p>;

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

            <DialogFooter>;
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>;
                {isConnecting;
                  ? "Connecting...";
                  : `Connect to ${integration && integration.name}`}
              </Button>;
            </DialogFooter>;
          </>;
        )}
      </DialogContent>;
    </Dialog>;
  );

  last_sync?: string;
}
interface IntegrationConnectionModalProps {
  is_open: boolean;
  on_close: () => void;
  integration: Integration;
}
export /**
 * IntegrationConnectionModal - Function description
 */
function IntegrationConnectionModal() {
  const [is_connecting, setIsConnecting] = useState (false);
  const [sync_settings, setSyncSettings] = useState ({
    autoCreateContacts: true,
    push_notes: false,
    syncJobDetails: true,
    syncApplicantData: true,
  });
;
  const handleConnectOAuth = () =>: any {
    setIsConnecting (true);
;
    // Simulate OAuth flow;
    set_timeout (() => {
      setIsConnecting (false);
      toast.success (`Connected to ${integration.name} successfully`);
      on_close ();
    }, 2000);
;
    // In a real application, this would open a popup for OAuth authentication;
    // window.open (`/api / oauth/${integration.id}`, 'oauthwidth = 600, height = 600');
  }
;
  const handle_disconnect = () =>: any {
    // In a real application, this would revoke the OAuth token;
    toast.info (`Disconnected from ${integration.name}`);
    on_close ();
  }
;
  const handleSaveSettings = () =>: any {
    // In a real application, this would save the sync settings;
    toast.success ("Integration settings saved");
    on_close ();
  }
;
  return (
    <Dialog open={is_open} onOpenChange={on_close}>;
      <DialogContent className="sm:max - w-md">;
        <DialogHeader className="flex flex - row items - center gap - 4">;
          <img;
            src={integration.logo_url}
            alt={`${integration.name} logo`}
            className="h - 12 w - 12 rounded";
            on_error={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder.svg";
            }}
          />;
          <div>;
            <DialogTitle>{integration.name} Integration</DialogTitle>;
            <DialogDescription>;
              {integration.status === "connected" ||;
              integration.status === "warning";
                ? "Manage your connection settings";
                : `Connect your ${integration.name} account`}
            </DialogDescription>;
          </div>;
        </DialogHeader>;
        {integration.status === "connected" ||;
        integration.status === "warning" ? (
          <>;
            <div className="grid gap - 4 py - 4">;
              <div className="space - y-4">;
                <h3 className="text - sm font - medium">Sync Settings</h3>;
                <div className="flex items - center space - x-2">;
                  <Checkbox;
                    id="autoCreateContacts";
                    checked={sync_settings.autoCreateContacts}
                    onCheckedChange={(checked) =>;
                      setSyncSettings ({
                        ...sync_settings,
                        autoCreateContacts: checked as boolean,
                      });
                    }
                  />;
                  <Label html_for="autoCreateContacts">;
                    Auto - create contacts in {integration.name}
                  </Label>;
                </div>;
                <div className="flex items - center space - x-2">;
                  <Checkbox;
                    id="push_notes";
                    checked={sync_settings.push_notes}
                    onCheckedChange={(checked) =>;
                      setSyncSettings ({
                        ...sync_settings,
                        push_notes: checked as boolean,
                      });
                    }
                  />;
                  <Label html_for="push_notes">Push notes and comments</Label>;
                </div>;
                <div className="flex items - center space - x-2">;
                  <Checkbox;
                    id="syncJobDetails";
                    checked={sync_settings.syncJobDetails}
                    onCheckedChange={(checked) =>;
                      setSyncSettings ({
                        ...sync_settings,
                        syncJobDetails: checked as boolean,
                      });
                    }
                  />;
                  <Label html_for="syncJobDetails">Sync job details</Label>;
                </div>;
                <div className="flex items - center space - x-2">;
                  <Checkbox;
                    id="syncApplicantData";
                    checked={sync_settings.syncApplicantData}
                    onCheckedChange={(checked) =>;
                      setSyncSettings ({
                        ...sync_settings,
                        syncApplicantData: checked as boolean,
                      });
                    }
                  />;
                  <Label html_for="syncApplicantData">Sync applicant data</Label>;
                </div>;
              </div>;
              <div className="space - y-2">;
                <h3 className="text - sm font - medium">API Details</h3>;
                <p className="text - xs text - muted - foreground">;
                  Last synced:{" "}
                  {integration.last_sync;
                    ? new Date (integration.last_sync).toLocaleString ();
                    : "Never"}
                </p>;
              </div>;
            </div>;
            <DialogFooter className="flex items - center justify - between">;
              <Button;
                variant="outline";
                on_click={handle_disconnect}
                type="button";
              >;
                Disconnect;
              </Button>;
              <Button on_click={handleSaveSettings} type="button">;
                Save Settings;
              </Button>;
            </DialogFooter>;
          </>) : (
          <>;
            <div className="space - y-4 py - 4">;
              <p className="text - sm">;
                Connect your {integration.name} account to sync job contacts,
                applicants, and more. You'll be redirected to {integration.name}{" "}
                to authorize this connection.;
              </p>;
              <div className="space - y-4">;
                <h3 className="text - sm font - medium">What will be synced:</h3>;
                <ul className="list - disc pl - 4 text - sm space - y-1">;
                  <li > Contact information</li>;
                  <li > Job details and descriptions</li>;
                  <li > Applicant data and status</li>;
                  <li > Activity logs and notes</li>;
                </ul>;
              </div>;
            </div>;
            <DialogFooter>;
              <Button on_click={handleConnectOAuth} disabled={is_connecting}>;
                {is_connecting;
                  ? "Connecting...";
                  : `Connect to ${integration.name}`}
              </Button>;
            </DialogFooter>;
          </>)}
      </DialogContent>;
    </Dialog>);

}

}
;

=======
>>>>>>> origin/auto/autonomy-17186719616
