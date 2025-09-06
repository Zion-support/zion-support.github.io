<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import React, { useState } from "react";
import {
  Dialog
  DialogContent
  DialogDescription
  DialogFooter
  DialogHeader
  DialogTitle
=======
<<<<<<< HEAD
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;

>>>>>>> main
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
<<<<<<< HEAD
interface Integration {
  id: string;
  name: string;
  description: string;
  logoUrl?: string;
  status: "connected" | "warning" | "disconnected";
  lastSync?: string
}
interface IntegrationConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
<<<<<<< HEAD
  integration: Integration
}
=======
  integration: Integration;
}

export function IntegrationConnectionModal({
  isOpen,
  onClose,
  integration,
}: IntegrationConnectionModalProps) {;
  const [isConnecting, setIsConnecting] = useState(false);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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
  const handleConnectOAuth = () => {
    setIsConnecting(true);
    // Simulate OAuth flow
    setTimeout(() => {
      setIsConnecting(false);
      toast.success(`Connected to ${integration.name} successfully`);
      onClose();
    }, 2000);
    // In a real application, this would open a popup for OAuth authentication
    // window.open(`/api/oauth/${integration.id}`, 'oauthwidth=600,height=600')
  }
  const handleDisconnect = () => {
    // In a real application, this would revoke the OAuth token
    toast.info(`Disconnected from ${integration.name}`);
    onClose();
  }
  const handleSaveSettings = () => {
    // In a real application, this would save the sync settings
    toast.success("Integration settings saved");
=======
interface Integration {;
=======
import React, { useState } from './react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components / ui / dialog';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Label  } from '@/components / ui / label';
import { Checkbox  } from '@/components / ui / checkbox';
import { Switch  } from '@/components / ui / switch';
import { toast  } from './sonner';
interface Integration {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
  const [syncSettings, setSyncSettings] = useState({;
    autoCreateContacts: true,;
    pushNotes: false,;
    syncJobDetails: true,;
    syncApplicantData: true,;
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

>>>>>>> main
    onClose();
  }

=======
<<<<<<< HEAD
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
  integration: Integration;
}

export function IntegrationConnectionModal({ isOpen, onClose, integration }: IntegrationConnectionModalProps) {
  const [isConnecting, setIsConnecting] = useState(false),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======

>>>>>>> main
  const [syncSettings, setSyncSettings] = useState({
    autoCreateContacts: true,
    pushNotes: false,
    syncJobDetails: true,
    syncApplicantData: true
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
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center gap-4">
          <img 
            src={integration.logoUrl} 
            alt={`${integration.name} logo`} 
            className="h-12 w-12 rounded" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder.svg"
            }}
          />
          <div>
            <DialogTitle>{integration.name} Integration</DialogTitle>
            <DialogDescription>
<<<<<<< HEAD
              {integration.status === "connected" |
              integration.status === "warning"
                ? "Manage your connection settings"
=======
              {integration.status === "connected" || integration.status === "warning" 
                ? "Manage your connection settings" 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
            }}


              {integration.status === "connected" || integration.status === "warning" 
                ? "Manage your connection settings" 


>>>>>>> main
                : `Connect your ${integration.name} account`}
            </DialogDescription>
          </div>
        </DialogHeader>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {integration.status === "connected" |
=======
        {integration.status === "connected" ||
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


        {integration.status === "connected" ||

>>>>>>> main
        integration.status === "warning" ? (
=======
        
        {(integration.status === "connected" || integration.status === "warning") ? (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
          <>
            <div className="grid gap-4 py-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Sync Settings</h3>
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======



=======
                

>>>>>>> main
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="autoCreateContacts" 
                    checked={syncSettings.autoCreateContacts} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, autoCreateContacts: checked as boolean})
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
                    }
                  />
                  <Label htmlFor="autoCreateContacts">Auto-create contacts in {integration.name}</Label>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    }
                  />
                  <Label htmlFor="autoCreateContacts">
                    Auto-create contacts in {integration.name}
                  </Label>
                </div>



=======
                

>>>>>>> main
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="pushNotes" 
                    checked={syncSettings.pushNotes} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, pushNotes: checked as boolean})
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
                    }
                  />
                  <Label htmlFor="pushNotes">Push notes and comments</Label>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======



=======
                

>>>>>>> main
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="syncJobDetails" 
                    checked={syncSettings.syncJobDetails} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, syncJobDetails: checked as boolean})
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
                    }
                  />
                  <Label htmlFor="syncJobDetails">Sync job details</Label>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======



=======
                

>>>>>>> main
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="syncApplicantData" 
                    checked={syncSettings.syncApplicantData} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, syncApplicantData: checked as boolean})
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
                    }
                  />
                  <Label htmlFor="syncApplicantData">Sync applicant data</Label>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
              
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Details</h3>
                <p className="text-xs text-muted-foreground">
                  Last synced: {integration.lastSync 
                    ? new Date(integration.lastSync).toLocaleString() 
                    : "Never"}
                </p>
              </div>
            </div>
<<<<<<< HEAD
=======
            
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <DialogFooter className="flex items-center justify-between">
              <Button variant="outline" onClick={handleDisconnect} type="button">
=======


              


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Details</h3>
                <p className="text-xs text-muted-foreground">
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  Last synced:{" "}
                  {integration && integration.lastSync;
                    ? new Date(integration && integration.lastSync).toLocaleString();
                    : "Never"}


            


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <DialogFooter className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={handleDisconnect}
                type="button"
              >
>>>>>>> main
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
<<<<<<< HEAD
                Connect your {integration.name} account to sync job contacts
                applicants, and more. You'll be redirected to {integration.name}{" "}
                to authorize this connection.
              </p>
=======
                Connect your {integration.name} account to sync job contacts, applicants, and more. 
                You'll be redirected to {integration.name} to authorize this connection.
              </p>
<<<<<<< HEAD
=======
              
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


                Connect your {integration.name} account to sync job contacts, applicants, and more. 
                You'll be redirected to {integration.name} to authorize this connection.
              </p>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
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
<<<<<<< HEAD
=======
            
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <DialogFooter>
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>
                {isConnecting ? "Connecting..." : `Connect to ${integration.name}`}
              </Button>
            </DialogFooter>
          </>
<<<<<<< HEAD
        )}
      </DialogContent>
    </Dialog>
  );
}
=======
=======


            


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <DialogFooter>
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>
                {isConnecting
                  ? "Connecting..."
                  : `Connect to ${integration.name}`}
              </Button>
            </DialogFooter>
          </>

=======

>>>>>>> main
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
<<<<<<< HEAD
                </p>;
              </div>;
            </div>;
            <DialogFooter className="flex items-center justify-between">;
              <Button variant="outline" onClick={handleDisconnect} type="button">;
=======

                </p>;
              </div>;
            </div>;

            <DialogFooter className="flex items-center justify-between">;
              <Button
                variant="outline"
                onClick={handleDisconnect}
                type="button">;
>>>>>>> main
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
<<<<<<< HEAD
                Connect your {integration.name} account to sync job contacts, applicants, and more.;
                You'll be redirected to {integration.name} to authorize this connection.;
              </p>;
=======
                Connect your {integration && integration.name} account to sync job contacts,;
                applicants, and more. You'll be redirected to {integration && integration.name}{" "}
                to authorize this connection.;
              </p>;

>>>>>>> main
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
<<<<<<< HEAD
            <DialogFooter>;
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>;
                {isConnecting ? "Connecting..." : `Connect to ${integration.name}`}
              </Button>;
            </DialogFooter>;
          </>;
=======

            <DialogFooter>;
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>;
                {isConnecting;
                  ? "Connecting...";
                  : `Connect to ${integration && integration.name}`}
              </Button>;
            </DialogFooter>;
          </>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> main
        )}
      </DialogContent>;
    </Dialog>;
  );
<<<<<<< HEAD
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

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
=======
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
