<<<<<<< HEAD

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

<<<<<<< HEAD
<<<<<<< HEAD

import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
interface Integration {;
<<<<<<< HEAD
=======
=======
import React, { useState } from './react';
<<<<<<< HEAD
=======

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from "react";
import {
  Dialog
  DialogContent
  DialogDescription
  DialogFooter
  DialogHeader
  DialogTitle
import React, { useState } from "react";
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
<<<<<<< HEAD
<<<<<<< HEAD
  DialogTitle,
} from '@/components / ui / dialog';
import { Button  } from '@/components / ui / button';
import { Input  } from '@/components / ui / input';
import { Label  } from '@/components / ui / label';
import { Checkbox  } from '@/components / ui / checkbox';
import { Switch  } from '@/components / ui / switch';
import { toast  } from './sonner';
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  DialogTitle,;


import {;
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;

} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface Integration {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
  name: string;
  description: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  logo_url?: string;
  status: "connected" | "warning" | "disconnected";


<<<<<<< HEAD
interface IntegrationConnectionModalProps {;

=======
  logoUrl?: string;
  status: "connected" | "warning" | "disconnected";
  lastSync?: string
}
interface IntegrationConnectionModalProps {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  isOpen: boolean;
  onClose: () => void;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  integration: Integration
}
<<<<<<< HEAD


=======
  integration: Integration;
}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

export function IntegrationConnectionModal({
  isOpen,
  onClose,
  integration,
}: IntegrationConnectionModalProps) {;
  const [isConnecting, setIsConnecting] = useState(false);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
  isOpen: boolean;
  onClose: () => void;
  integration: Integration
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function IntegrationConnectionModal(): any ({;
  isOpen,;
  onClose,;
  integration,;
}: IntegrationConnectionModalProps) {;
  const [isConnecting, setIsConnecting] = useState(false);

  });
<<<<<<< HEAD
<<<<<<< HEAD

  const handleConnectOAuth = () => {;
    setIsConnecting(true);

    // Simulate OAuth flow;
    setTimeout(() => {;

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleConnectOAuth = () => {;
    setIsConnecting(true);
    // Simulate OAuth flow;
    setTimeout(() => {;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      setIsConnecting(false);
      toast && toast.success(`Connected to ${integration && integration.name} successfully`);
      onClose();
    }, 2000);
<<<<<<< HEAD
<<<<<<< HEAD


    // In a real application, this would open a popup for OAuth authentication;
    // window && window.open(`/api/oauth/${integration && integration.id}`, 'oauthwidth=600,height=600');
  };

=======
    // In a real application, this would open a popup for OAuth authentication;
    // window && window.open(`/api/oauth/${integration && integration.id}`, 'oauthwidth=600,height=600');
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const handleDisconnect = () => {;
    // In a real application, this would revoke the OAuth token;
    toast && toast.info(`Disconnected from ${integration && integration.name}`);
    onClose();
  };
<<<<<<< HEAD

  const handleSaveSettings = () => {;
    // In a real application, this would save the sync settings;
    toast && toast.success("Integration settings saved");

    onClose();
  }

<<<<<<< HEAD
=======
=======

=======
  const handleSaveSettings = () => {;
    // In a real application, this would save the sync settings;
    toast && toast.success("Integration settings saved");
  });
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const handleConnectOAuth = () => {
    setIsConnecting(true);
    // Simulate OAuth flow
    setTimeout(() => {
<<<<<<< HEAD
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
  integration: Integration;
}

export function IntegrationConnectionModal({ isOpen, onClose, integration }: IntegrationConnectionModalProps) {
  const [isConnecting, setIsConnecting] = useState(false),

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    onClose();
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


              {integration.status === "connected" || integration.status === "warning" 
                ? "Manage your connection settings" 


<<<<<<< HEAD
=======
              {integration.status === "connected" |
              integration.status === "warning"
                ? "Manage your connection settings"
              {integration.status === "connected" || integration.status === "warning" 
                ? "Manage your connection settings" 
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

        integration.status === "warning" ? (
        
        {(integration.status === "connected" || integration.status === "warning") ? (
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                : `Connect your ${integration.name} account`}
            </DialogDescription>
          </div>
        </DialogHeader>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

        {integration.status === "connected" ||

        integration.status === "warning" ? (
<<<<<<< HEAD

        {(integration.status === "connected" || integration.status === "warning") ? (



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        {integration.status === "connected" |
        {integration.status === "connected" ||
        integration.status === "warning" ? (
        
        {(integration.status === "connected" || integration.status === "warning") ? (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        
        {(integration.status === "connected" || integration.status === "warning") ? (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <>
            <div className="grid gap-4 py-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Sync Settings</h3>
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD

=======
                

=======
                

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="autoCreateContacts"
                    checked={syncSettings.autoCreateContacts}
                    onCheckedChange={(checked) =>
                      setSyncSettings({
                        ...syncSettings
                        autoCreateContacts: checked as boolean
                      })
                
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="autoCreateContacts"
                    checked={syncSettings.autoCreateContacts}
                    onCheckedChange={(checked) =>
                      setSyncSettings({...syncSettings, autoCreateContacts: checked as boolean})
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    }
                  />
                  <Label htmlFor="autoCreateContacts">
                    Auto-create contacts in {integration.name}
                  </Label>
                </div>
<<<<<<< HEAD



                

<<<<<<< HEAD
=======
                    }
                  />
                  <Label htmlFor="autoCreateContacts">Auto-create contacts in {integration.name}</Label>
                </div>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="pushNotes"
                    checked={syncSettings.pushNotes}
                    onCheckedChange={(checked) =>
<<<<<<< HEAD
                      setSyncSettings({...syncSettings, pushNotes: checked as boolean})

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                      setSyncSettings({
                        ...syncSettings
                        pushNotes: checked as boolean
                      })
                
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="pushNotes" 
                    checked={syncSettings.pushNotes} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, pushNotes: checked as boolean})
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    }
                  />
                  <Label htmlFor="pushNotes">Push notes and comments</Label>
                </div>
<<<<<<< HEAD


<<<<<<< HEAD

=======
                

=======
                

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="syncJobDetails"
                    checked={syncSettings.syncJobDetails}
                    onCheckedChange={(checked) =>
<<<<<<< HEAD
                      setSyncSettings({...syncSettings, syncJobDetails: checked as boolean})

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                      setSyncSettings({
                        ...syncSettings
                        syncJobDetails: checked as boolean
                      })
                
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="syncJobDetails" 
                    checked={syncSettings.syncJobDetails} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, syncJobDetails: checked as boolean})
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    }
                  />
                  <Label htmlFor="syncJobDetails">Sync job details</Label>
                </div>
<<<<<<< HEAD


<<<<<<< HEAD

=======
                

=======
                

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="syncApplicantData"
                    checked={syncSettings.syncApplicantData}
                    onCheckedChange={(checked) =>
<<<<<<< HEAD
                      setSyncSettings({...syncSettings, syncApplicantData: checked as boolean})

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Details</h3>
                <p className="text-xs text-muted-foreground">
=======
                      setSyncSettings({
                        ...syncSettings
                        syncApplicantData: checked as boolean
                      })
                
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="syncApplicantData" 
                    checked={syncSettings.syncApplicantData} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, syncApplicantData: checked as boolean})
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    }
                  />
                  <Label htmlFor="syncApplicantData">Sync applicant data</Label>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

              


              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Details</h3>
                <p className="text-xs text-muted-foreground">
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Details</h3>
                <p className="text-xs text-muted-foreground">
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <>;
            <div className="grid gap-4 py-4">;
              <div className="space-y-4">;
                <h3 className="text-sm font-medium">Sync Settings</h3>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    }
                  />;
                  <Label htmlFor="pushNotes">Push notes and comments</Label>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                <div className="flex items-center space-x-2">;
                  <Checkbox
                    id="syncJobDetails"
                    checked={syncSettings && syncSettings.syncJobDetails}
                    onCheckedChange={(checked) =>;
                      setSyncSettings({;
                        ...syncSettings,;
                        syncJobDetails: checked as boolean,;
                      });
<<<<<<< HEAD
=======
                ;
                <div className="flex items-center space-x-2">;
                  <Checkbox ;
                    id="syncJobDetails" ;
                    checked={syncSettings.syncJobDetails} ;
                    onCheckedChange={(checked) => ;
                      setSyncSettings({...syncSettings, syncJobDetails:checked as boolean});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    }
                  />;
                  <Label htmlFor="syncJobDetails">Sync job details</Label>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

                <div className="flex items-center space-x-2">;
                  <Checkbox
                    id="syncApplicantData"
                    checked={syncSettings && syncSettings.syncApplicantData}
                    onCheckedChange={(checked) =>;
                      setSyncSettings({;
                        ...syncSettings,;
                        syncApplicantData: checked as boolean,;
                      });
<<<<<<< HEAD
=======
                ;
                <div className="flex items-center space-x-2">;
                  <Checkbox ;
                    id="syncApplicantData" ;
                    checked={syncSettings.syncApplicantData} ;
                    onCheckedChange={(checked) => ;
                      setSyncSettings({...syncSettings, syncApplicantData:checked as boolean});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    }
                  />;
                  <Label htmlFor="syncApplicantData">Sync applicant data</Label>;
                </div>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

              <div className="space-y-2">;
                <h3 className="text-sm font-medium">API Details</h3>;
                <p className="text-xs text-muted-foreground">;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  Last synced:{" "}
                  {integration && integration.lastSync;
                    ? new Date(integration && integration.lastSync).toLocaleString();
                    : "Never"}
<<<<<<< HEAD
                </p>
              </div>
            </div>
            
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
            


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <DialogFooter className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={handleDisconnect}
                type="button"
              >
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Details</h3>
                <p className="text-xs text-muted-foreground">
                  Last synced: {integration.lastSync 
                    ? new Date(integration.lastSync).toLocaleString() 
                    : "Never"}
                </p>
              </div>
            </div>
            
            <DialogFooter className="flex items-center justify-between">
              <Button variant="outline" onClick={handleDisconnect} type="button">
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                Connect your {integration.name} account to sync job contacts, applicants, and more. 
                You'll be redirected to {integration.name} to authorize this connection.
              </p>


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                Connect your {integration.name} account to sync job contacts
                applicants, and more. You'll be redirected to {integration.name}{" "}
                to authorize this connection.
              </p>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                Connect your {integration.name} account to sync job contacts, applicants, and more. 
                You'll be redirected to {integration.name} to authorize this connection.
              </p>
              
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

            


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <DialogFooter>
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>
                {isConnecting
                  ? "Connecting..."
                  : `Connect to ${integration.name}`}
              </Button>
            </DialogFooter>
          </>
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
            
            <DialogFooter>
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>
                {isConnecting ? "Connecting..." : `Connect to ${integration.name}`}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                </p>;
              </div>;
            </div>;

            <DialogFooter className="flex items-center justify-between">;
<<<<<<< HEAD
              <Button
                variant="outline"
                onClick={handleDisconnect}
                type="button">;
=======
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
              <Button variant="outline" onClick={handleDisconnect} type="button">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
                Connect your {integration && integration.name} account to sync job contacts,;
                applicants, and more. You'll be redirected to {integration && integration.name}{" "}
                to authorize this connection.;
              </p>;

=======
        ) :(;
          <>;
            <div className="space-y-4 py-4">;
              <p className="text-sm">;
                Connect your {integration.name} account to sync job contacts, applicants, and more. ;
                You'll be redirected to {integration.name} to authorize this connection.;
              </p>;
              ;
                Connect your {integration.name} account to sync job contacts, applicants, and more.;
                You'll be redirected to {integration.name} to authorize this connection.;
              </p>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
                {isConnecting;
                  ? "Connecting...";
                  : `Connect to ${integration && integration.name}`}
=======
            ;
            <DialogFooter>;
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>;
                {isConnecting ? "Connecting..." :`Connect to ${integration.name}`}
            <DialogFooter>;
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>;
                {isConnecting ? "Connecting..." : `Connect to ${integration.name}`}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              </Button>;
            </DialogFooter>;
          </>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        )}
      </DialogContent>;
    </Dialog>;
<<<<<<< HEAD
  );

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        )}
      </DialogContent>;
    </Dialog>;
  );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
}
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
;

  ),; interface Integration {
  id: string;
name: string;
description: string;
logoUrl?: string;
return (<Dialog open= {
  isOpen 
}onOpenChange= {
  onClose 
}> <DialogContent className="sm:max-w-md" > <DialogHeader className="flex flex-row items-center gap-4" > <img src= {
  integration.logoUrl 
}alt= {
  `$ {
  integration.name 
}logo` 
}className="h-12 w-12 rounded" onError= {
  (e) => {
  
}
}integration.name 
}Integration</DialogTitle> <DialogDescription> : `Connect your $ {
  integration.name 
}account` 
}</DialogDescription> </div> </DialogHeader> <div className="flex items-center space-x-2" > <Checkbox id="autoCreateContacts" checked= {
  syncSettings.autoCreateContacts 
}onCheckedChange= {
  (checked) => setSyncSettings ({
  ...syncSettings, autoCreateContacts: checked as boolean 
}) 
}/> </div> <div className="flex items-center space-x-2" > <Checkbox 
}/> <Label htmlFor="pushNotes" >Push notes and comments</Label> </div> <div className="flex items-center space-x-2" > <Checkbox 
}/> <Label htmlFor="syncJobDetails" >Sync job details</Label> </div> <div className="flex items-center space-x-2" > <Checkbox 
}/> <Label htmlFor="syncApplicantData" >Sync applicant data</Label> </div> </div> ? new Date (integration.lastSync) .toLocaleString () : "Never" 
}</p> </div> </div> Save Settings </Button> </DialogFooter> </>) : (<> </p> <div className="space-y-4" > <h3 className="text-sm font-medium" >What will be synced:</h3> <ul className="list-disc pl-4 text-sm space-y-1" > <li>Contact information</li> <li>Job details and descriptions</li> <li>Applicant data and status</li> <li>Activity logs and notes</li> </ul> </div> </div> <DialogFooter> </Button> </DialogFooter> </>) 
}</DialogContent> </Dialog>) 
}
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
