
<<<<<<< HEAD
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
=======
import React, { useState } from &quot;react&quot;;
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from &quot;@/components/ui/dialog&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Checkbox } from &quot;@/components/ui/checkbox&quot;;
import { Switch } from &quot;@/components/ui/switch&quot;;
import { toast } from &quot;sonner&quot;;
=======
import React, {_useState} from "react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

interface Integration {_id: string;
  name: string;
  description: string;
  logoUrl?: string;
<<<<<<< HEAD
  status: &quot;connected&quot; | &quot;warning&quot; | &quot;disconnected&quot;;
  lastSync?: string;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}

interface IntegrationConnectionModalProps {
  isOpen: boolean,
  onClose: () => void,
  integration: Integration
}

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
<<<<<<< HEAD
    toast.success("Integration settings saved"),
    onClose()
  },
=======
    toast.success(&quot;Integration settings saved&quot;);
    onClose();
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=&quot;sm:max-w-md&quot;>
        <DialogHeader className=&quot;flex flex-row items-center gap-4&quot;>
          <img 
            src={integration.logoUrl} 
            alt={`${integration.name} logo`} 
            className=&quot;h-12 w-12 rounded&quot; 
            onError={(e) => {
<<<<<<< HEAD
              (e.target as HTMLImageElement).src = "/placeholder.svg"
=======
              (e.target as HTMLImageElement).src = &quot;/placeholder.svg&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            }}
=======
  status: "connected" | "warning" | "disconnected";
  lastSync?: string;}

interface IntegrationConnectionModalProps {_isOpen: boolean;
  onClose: () => void;
  integration: Integration;}

export function IntegrationConnectionModal(_{_isOpen, _onClose, _integration}: IntegrationConnectionModalProps) {_const [isConnecting, _setIsConnecting] = useState(false);
  const [syncSettings, _setSyncSettings] = useState({
    autoCreateContacts: true, _pushNotes: false, _syncJobDetails: true, _syncApplicantData: true});
  
  const _handleConnectOAuth = () => {_setIsConnecting(true);
    
    // Simulate OAuth flow 
    setTimeout__(() => {
      setIsConnecting(false);
      toast.success(`Connected to ${integration.name} successfully`);
      onClose();
    }, 2000);
    
    // In a real application, this would open a popup for OAuth authentication
    // window.open(`/api/oauth/${_integration.id}`, 'oauth', 'width=600,height=600');
  };
  
  const _handleDisconnect = () => {_// In a real application, _this would revoke the OAuth token
    toast.info(`Disconnected from ${integration.name}`);
    onClose();
  };
  
  const _handleSaveSettings = () => {_// In a real application, _this would save the sync settings
    toast.success("Integration settings saved");
    onClose();};
  
  return (_<Dialog open={_isOpen} onOpenChange={_onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center gap-4">
          <img 
            src={_integration.logoUrl} 
            alt={_`${integration.name} logo`} 
            className="h-12 w-12 rounded" 
            onError={_(e) => {
              (e.target as HTMLImageElement).src = "/placeholder.svg";}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
          <div>
            <DialogTitle>{_integration.name} Integration</DialogTitle>
            <DialogDescription>
<<<<<<< HEAD
              {integration.status === &quot;connected&quot; || integration.status === &quot;warning&quot; 
                ? &quot;Manage your connection settings&quot; 
=======
              {_integration.status === "connected" || integration.status === "warning" 
                ? "Manage your connection settings" 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                : `Connect your ${integration.name} account`}
            </DialogDescription>
          </div>
        </DialogHeader>
        
<<<<<<< HEAD
        {(integration.status === &quot;connected&quot; || integration.status === &quot;warning&quot;) ? (
          <>
            <div className=&quot;grid gap-4 py-4&quot;>
              <div className=&quot;space-y-4&quot;>
                <h3 className=&quot;text-sm font-medium&quot;>Sync Settings</h3>
=======
        {_(integration.status === "connected" || integration.status === "warning") ? (_<>
            <div className="grid gap-4 py-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Sync Settings</h3>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Checkbox 
                    id=&quot;autoCreateContacts&quot; 
                    checked={syncSettings.autoCreateContacts} 
                    onCheckedChange={_(checked) => 
                      setSyncSettings({...syncSettings, _autoCreateContacts: checked as boolean})
                    }
                  />
<<<<<<< HEAD
                  <Label htmlFor=&quot;autoCreateContacts&quot;>Auto-create contacts in {integration.name}</Label>
=======
                  <Label htmlFor="autoCreateContacts">Auto-create contacts in {_integration.name}</Label>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
                
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Checkbox 
<<<<<<< HEAD
                    id=&quot;pushNotes&quot; 
                    checked={syncSettings.pushNotes} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, pushNotes: checked as boolean})
=======
                    id="pushNotes" 
                    checked={_syncSettings.pushNotes} 
                    onCheckedChange={_(_checked) => 
                      setSyncSettings({...syncSettings, _pushNotes: checked as boolean})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    }
                  />
                  <Label htmlFor=&quot;pushNotes&quot;>Push notes and comments</Label>
                </div>
                
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Checkbox 
<<<<<<< HEAD
                    id=&quot;syncJobDetails&quot; 
                    checked={syncSettings.syncJobDetails} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, syncJobDetails: checked as boolean})
=======
                    id="syncJobDetails" 
                    checked={_syncSettings.syncJobDetails} 
                    onCheckedChange={_(_checked) => 
                      setSyncSettings({...syncSettings, _syncJobDetails: checked as boolean})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    }
                  />
                  <Label htmlFor=&quot;syncJobDetails&quot;>Sync job details</Label>
                </div>
                
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Checkbox 
<<<<<<< HEAD
                    id=&quot;syncApplicantData&quot; 
                    checked={syncSettings.syncApplicantData} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, syncApplicantData: checked as boolean})
=======
                    id="syncApplicantData" 
                    checked={_syncSettings.syncApplicantData} 
                    onCheckedChange={_(_checked) => 
                      setSyncSettings({...syncSettings, _syncApplicantData: checked as boolean})
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    }
                  />
                  <Label htmlFor=&quot;syncApplicantData&quot;>Sync applicant data</Label>
                </div>
              </div>
              
<<<<<<< HEAD
              <div className=&quot;space-y-2&quot;>
                <h3 className=&quot;text-sm font-medium&quot;>API Details</h3>
                <p className=&quot;text-xs text-muted-foreground&quot;>
                  Last synced: {integration.lastSync 
=======
              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Details</h3>
                <p className="text-xs text-muted-foreground">
                  Last synced: {_integration.lastSync 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    ? new Date(integration.lastSync).toLocaleString() 
                    : &quot;Never&quot;}
                </p>
              </div>
            </div>
            
<<<<<<< HEAD
            <DialogFooter className=&quot;flex items-center justify-between&quot;>
              <Button variant=&quot;outline&quot; onClick={handleDisconnect} type=&quot;button&quot;>
                Disconnect
              </Button>
              <Button onClick={handleSaveSettings} type=&quot;button&quot;>
=======
            <DialogFooter className="flex items-center justify-between">
              <Button variant="outline" onClick={_handleDisconnect} type="button">
                Disconnect
              </Button>
              <Button onClick={_handleSaveSettings} type="button">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Save Settings
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
<<<<<<< HEAD
            <div className=&quot;space-y-4 py-4&quot;>
              <p className=&quot;text-sm&quot;>
                Connect your {integration.name} account to sync job contacts, applicants, and more. 
                You'll be redirected to {integration.name} to authorize this connection.
=======
            <div className="space-y-4 py-4">
              <p className="text-sm">
                Connect your {_integration.name} account to sync job contacts, applicants, and more. 
                You'll be redirected to {_integration.name} to authorize this connection.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
              
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
<<<<<<< HEAD
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>
                {isConnecting ? &quot;Connecting...&quot; : `Connect to ${integration.name}`}
=======
              <Button onClick={_handleConnectOAuth} disabled={_isConnecting}>
                {_isConnecting ? "Connecting..." : `Connect to ${integration.name}`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
