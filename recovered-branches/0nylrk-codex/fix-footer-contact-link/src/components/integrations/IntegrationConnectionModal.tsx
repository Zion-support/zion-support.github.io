
import React, { useState } from "react";
import {
  Dialog
  DialogContent
  DialogDescription
  DialogFooter
  DialogHeader
  DialogTitle
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,;
=======
=======
import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;

import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
export function IntegrationConnectionModal({
  isOpen,
  onClose,
  integration,
}: IntegrationConnectionModalProps) {;
  const [isConnecting, setIsConnecting] = useState(false);

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
  integration: Integration
}


interface IntegrationConnectionModalProps {;
=======
=======interface Integration {;
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
interface Integration {  id: string;
  name: string;
  description: string;
  logo_url?: string;
  status: "connected" | "warning" | "disconnected";


interface IntegrationConnectionModalProps {;

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function IntegrationConnectionModal(): any ({;
  isOpen,;
  onClose,;
  integration,;
}: IntegrationConnectionModalProps) {;
  const [isConnecting, setIsConnecting] = useState(false);
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


    // In a real application, this would open a popup for OAuth authentication;
    // window && window.open(`/api/oauth/${integration && integration.id}`, 'oauthwidth=600,height=600');
  };

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
  const handleSaveSettings = () => {;
    // In a real application, this would save the sync settings;
    toast && toast.success("Integration settings saved");

    onClose();
  }

=======
=======  const [syncSettings, setSyncSettings] = useState({
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
  

              {integration.status === "connected" || integration.status === "warning" 
                ? "Manage your connection settings" 


        {integration.status === "connected" ||

        integration.status === "warning" ? (


        {integration.status === "connected" |
        {integration.status === "connected" ||
        integration.status === "warning" ? (
        
        {(integration.status === "connected" || integration.status === "warning") ? (

              


              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Details</h3>
                <p className="text-xs text-muted-foreground">
=======
              

              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Details</h3>
                <p className="text-xs text-muted-foreground">
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

        {integration && integration.status === "connected" ||;
        integration && integration.status === "warning" ? (;          <>;
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
                      });                    }
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
                      });                    }
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
                      });                    }
                  />;
                  <Label htmlFor="syncApplicantData">Sync applicant data</Label>;
                </div>;
              </div>;


=======
              <div className="space-y-2">;
                <h3 className="text-sm font-medium">API Details</h3>;
                <p className="text-xs text-muted-foreground">;                  Last synced:{" "}
                  {integration && integration.lastSync;
                    ? new Date(integration && integration.lastSync).toLocaleString();
                    : "Never"}
                </p>
              </div>
            </div>
            


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <DialogFooter className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={handleDisconnect}
                type="button"
              >
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            


=======
            

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <DialogFooter>
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>
                {isConnecting
                  ? "Connecting..."
                  : `Connect to ${integration.name}`}
              </Button>
            </DialogFooter>
          </>
            <DialogFooter className="flex items-center justify-between">;
              <Button
                variant="outline"
                onClick={handleDisconnect}
                type="button">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
