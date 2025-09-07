import React, { useState } from "react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {};
  Dialog;
  DialogContent;
  DialogDescription;
  DialogFooter;
  DialogHeader;
  DialogTitle"
import React, { useState } from "react";

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
<<<<<<< HEAD
DialogTitle
  }
=======

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
<<<<<<< HEAD

import React, { useState } from "react";
=======
<<<<<<< HEAD
=======
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
interface Integration {;
import React, { useState } from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import React, { useState } from "react";
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {
  Dialog
  DialogContent
  DialogDescription
  DialogFooter
  DialogHeader
  DialogTitle
<<<<<<< HEAD
import React, { useState } from "react";
=======
<<<<<<< HEAD
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
=======
import React, { useState } from "react";
<<<<<<< HEAD
=======
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

import {;
>>>>>>> origin/chore/fix-lint-and-merge
  Dialog,;
  DialogContent,;
  DialogDescription,;
  DialogFooter,;
  DialogHeader,;
  DialogTitle,;
"
} from "@/components/ui/dialog";"
import { Button } from "@/components/ui/button";"
import { Input } from "@/components/ui/input";"
import { Label } from "@/components/ui/label";"
<<<<<<< HEAD

import { Checkbox } from "@/components/ui/checkbox";

interface Integration {

  id: string;
  name: string;
  description: string;

  logo_url?: string;"
  status: "connected" | "warning" | "disconnected";

  isOpen: boolean;
  onClose: () => void;

  integration: Integration
}

  integration: Integration;
}

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

integration: Integration;
}

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

  });

  const handleConnectOAuth = () => {;
    setIsConnecting(true);

      setIsConnecting(false);
      toast && toast.success(`Connected to ${integration && integration.name} successfully`);
      onClose();
    }, 2000);

    // In a real application, this would open a popup for OAuth authentication;
    // window && window.open(`/api/oauth/${integration && integration.id}`, 'oauthwidth=600,height=600');
  };

// In a real application, this would open a popup for OAuth authentication;
    // window && window.open(`/api/oauth/${integration && integration.id}`, 'oauthwidth=600,height=600');
  };
  const handleDisconnect = () => {;
    // In a real application, this would revoke the OAuth token;

    toast && toast.info(`Disconnected from ${integration && integration.name}`);
    onClose();
  };
import { toast } from "sonner";    // In a real application, this would revoke the OAuth token;
    toast && toast.info(`Disconnected from ${integration && integration.name}`);
    onClose()
};
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
import { Checkbox } from "@/components/ui/checkbox";

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  integration: Integration
}
  integration: Integration;
}

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface Integration {

  id: string;
  name: string;
  description: string;

  logo_url?: string;"
  status: "connected" | "warning" | "disconnected";

  isOpen: boolean;
  onClose: () => void;

  integration: Integration
}

  integration: Integration;
}

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

integration: Integration;
}

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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  isOpen: boolean;
  onClose: () => void;
  integration: Integration
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function IntegrationConnectionModal(): any ({;
  isOpen,;
  onClose,;
  integration,;
}: IntegrationConnectionModalProps) {;
  const [isConnecting, setIsConnecting] = useState(false);

  });
<<<<<<< HEAD
  const handleConnectOAuth = () => {;
    setIsConnecting(true);
    // Simulate OAuth flow;
    setTimeout(() => {;
=======

  const handleConnectOAuth = () => {;
    setIsConnecting(true);

<<<<<<< HEAD
=======
    // Simulate OAuth flow;
    setTimeout(() => {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      setIsConnecting(false);
      toast && toast.success(`Connected to ${integration && integration.name} successfully`);
      onClose();
    }, 2000);
<<<<<<< HEAD
    // In a real application, this would open a popup for OAuth authentication;
    // window && window.open(`/api/oauth/${integration && integration.id}`, 'oauthwidth=600,height=600');
  };
=======

    // In a real application, this would open a popup for OAuth authentication;
    // window && window.open(`/api/oauth/${integration && integration.id}`, 'oauthwidth=600,height=600');
  };

<<<<<<< HEAD
// In a real application, this would open a popup for OAuth authentication;
    // window && window.open(`/api/oauth/${integration && integration.id}`, 'oauthwidth=600,height=600');
  };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const handleDisconnect = () => {;
    // In a real application, this would revoke the OAuth token;

    toast && toast.info(`Disconnected from ${integration && integration.name}`);
    onClose();
  };
<<<<<<< HEAD
import { toast } from "sonner";    // In a real application, this would revoke the OAuth token;
    toast && toast.info(`Disconnected from ${integration && integration.name}`);
    onClose()
};
=======
<<<<<<< HEAD
  const handleSaveSettings = () => {;
    // In a real application, this would save the sync settings;
    toast && toast.success("Integration settings saved");
<<<<<<< HEAD

    onClose();
  }

  const handleConnectOAuth = () => {
    setIsConnecting(true);
    // Simulate OAuth flow
'
} from "@/components/ui/dialog";""
import { Button } from "@/components/ui/button";""
import { Input } from "@/components/ui/input";""
import { Label } from "@/components/ui/label";""
import { Checkbox } from "@/components/ui/checkbox";""
import { Switch } from "@/components/ui/switch";""
import { toast } from "sonner";"
interface Integration {
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
>>>>>>> merged-prs-20250907-203621
interface Integration {
  id: string,
  name: string,
  description: string,
<<<<<<< HEAD
  logoUrl?: string,
  status: "connected" | "warning" | "disconnected",
  lastSync?: string
}
interface IntegrationConnectionModalProps {
  isOpen: boolean,
  onClose: () => void,
  integration: Integration}

export function IntegrationConnectionModal({ isOpen, onClose, integration }: IntegrationConnectionModalProps) {
  const [isConnecting, setIsConnecting] = useState($2);
  const [syncSettings, setSyncSettings] = useState($2);
  const handleConnectOAuth = () => {
    setIsConnecting($2);
    // Simulate OAuth flow 
    setTimeout(() => {
      setIsConnecting($2);
      toast.success($2);
=======
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  const handleSaveSettings = () => {;
    // In a real application, this would save the sync settings;
    toast && toast.success("Integration settings saved");

    onClose();
  }

  const handleConnectOAuth = () => {
    setIsConnecting(true);
    // Simulate OAuth flow
'
} from "@/components/ui/dialog";""
import { Button } from "@/components/ui/button";""
import { Input } from "@/components/ui/input";""
import { Label } from "@/components/ui/label";""
import { Checkbox } from "@/components/ui/checkbox";""
import { Switch } from "@/components/ui/switch";""
import { toast } from "sonner";"
interface Integration {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
  }
  "id": string,
  "name": string,
  "description": string,
  logoUrl?: string,
  "status": "connected" | "warning" | "disconnected","
  lastSync?: string,
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";"
import { Button } from "@/components/ui/button",;"
import { Input } from "@/components/ui/input",;"
import { Label } from "@/components/ui/label",;"
import { Checkbox } from "@/components/ui/checkbox",;"
import { Switch } from "@/components/ui/switch",;"
import { toast } from "sonner",;"
interface Integration {;
  }
  "id": string,;
  "name": string,,
  "description": string,;
  logoUrl?: string,;
  "status": "connected" | "warning" | "disconnected",;"
  lastSync?: string;
=======
  // TODO: Implement
>>>>>>> origin/chore/fix-lint-and-merge
}
  id: string;,
  name: string;
  description: string;

  isOpen: boolean;,
  onClose: () => void;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [syncSettings, setSyncSettings] = useState({
    autoCreateContacts: true,
    pushNotes: false,
    syncJobDetails: true,
    syncApplicantData: true
  }),
<<<<<<< HEAD
  
    }
=======

  const handleConnectOAuth = () => {
>>>>>>> origin/chore/fix-lint-and-merge
    setIsConnecting(true),

    // Simulate OAuth flow
    setTimeout(() => {
      setIsConnecting(false),
      toast.success(`Connected to ${integration.name} successfully`),
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      onClose()
    }, 2000),

    // In a real application, this would open a popup for OAuth authentication
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // window.open(`/api/oauth/${integration.id}`, 'oauthwidth=600,height = $2;
  const handleDisconnect = () => {
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // window.open(`/api/oauth/${integration.id}`, 'oauthwidth=600,height=600')'  },
>>>>>>> merged-prs-20250907-203621
    // In a real application, this would revoke the OAuth token
    toast.info($2);
    onClose()
  },
  
    // In a real application, this would save the sync settings
<<<<<<< HEAD
}
toast.success("Integration settings saved"),"
=======
    // window.open(`/api/oauth/${integration.id}`, 'oauthwidth=600,height=600')
  },

  const handleDisconnect = () => {
    // In a real application, this would revoke the OAuth token
    toast.info(`Disconnected from ${integration.name}`),
>>>>>>> origin/chore/fix-lint-and-merge
    onClose()
  },
=======
<<<<<<< HEAD
    toast.success($2);
    onClose()
  },
  
  return (
=======
}
toast.success("Integration settings saved"),"
=======
    // window.open(`/api/oauth/${integration.id}`, 'oauthwidth=600,height=600')
  },

  const handleDisconnect = () => {
    // In a real application, this would revoke the OAuth token
    toast.info(`Disconnected from ${integration.name}`),
>>>>>>> origin/chore/fix-lint-and-merge
    onClose()
  },
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const handleSaveSettings = () => {
    // In a real application, this would save the sync settings
    toast.success("Integration settings saved"),
    onClose()
  },
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>;"
      <DialogContent className="sm:max-w-md">;"
        <DialogHeader className="flex flex-row items-center gap-4">;
          <img;
            src={integration && integration.logoUrl}`
            alt={`${integration && integration.name} logo`}"
            className="h-12 w-12 rounded"
            onError={(e) => {;"
              (e && e.target as HTMLImageElement).src = "/placeholder && placeholder.svg";

<<<<<<< HEAD
=======
=======
  
<<<<<<< HEAD
    onClose();
  }
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
return (
=======
<<<<<<< HEAD
return (
=======
<<<<<<< HEAD
  
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
              {integration.status === "connected" |
              integration.status === "warning"
                ? "Manage your connection settings"
                : `Connect your ${integration.name} account`}
            </DialogDescription>
          </div>
        </DialogHeader>
        {integration.status === "connected" |
        integration.status === "warning" ? (
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              {integration.status === "connected" || integration.status === "warning" 
                ? "Manage your connection settings" 

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
{integration.status === "connected" |
              integration.status === "warning"
                ? "Manage your connection settings"
              {integration.status === "connected" || integration.status === "warning" 
                ? "Manage your connection settings"
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
              {integration.status === "connected" |
              integration.status === "warning"
                ? "Manage your connection settings"
              {integration.status === "connected" || integration.status === "warning" 
                ? "Manage your connection settings" 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                : `Connect your ${integration.name} account`}
            </DialogDescription>
            }}            </DialogDescription>
          </div>
        </DialogHeader>
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {integration.status === "connected" ||

        integration.status === "warning" ? (
        
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        {integration.status === "connected" ||

        integration.status === "warning" ? (

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        {(integration.status === "connected" || integration.status === "warning") ? (

                : `Connect your ${integration.name} account`}
            </DialogDescription>

          </div>
        </DialogHeader>

"
        {integration.status === "connected" ||
"
        integration.status === "warning" ? (

        "
        {(integration.status === "connected" || integration.status === "warning") ? (

        {integration.status === "connected" ||
        integration.status === "warning" ? (
        {(integration.status === "connected" || integration.status === "warning") ? (

        {(integration.status === "connected" || integration.status === "warning") ? (

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        {integration.status === "connected" |
        {integration.status === "connected" ||
        integration.status === "warning" ? (
        
        {(integration.status === "connected" || integration.status === "warning") ? (
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <>
            <div className="grid gap-4 py-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Sync Settings</h3>
<<<<<<< HEAD

                <div className="flex items-center space-x-2">
                  <Checkbox"
                    id="autoCreateContacts"
                    checked={syncSettings.autoCreateContacts}
                    onCheckedChange={(checked) =>
                      setSyncSettings({}
                        ...syncSettings;
                        autoCreateContacts: checked as boolean;
                      })

                    }

                <h3 className="text-sm font-medium">Sync Settings</h3>                  <Checkbox 
                    id="autoCreateContacts" 
                    checked={syncSettings.autoCreateContacts} 
                    onCheckedChange={(checked) => 
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

<<<<<<< HEAD
                

>>>>>>> merged-prs-20250907-203621
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
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="autoCreateContacts" 
                    checked={syncSettings.autoCreateContacts} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, autoCreateContacts: checked as boolean})
=======
                
=======

=======
                

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <div className="flex items-center space-x-2">
                  <Checkbox"
                    id="autoCreateContacts"
                    checked={syncSettings.autoCreateContacts}
                    onCheckedChange={(checked) =>
                      setSyncSettings({}
                        ...syncSettings;
                        autoCreateContacts: checked as boolean;
                      })

                    }

                <h3 className="text-sm font-medium">Sync Settings</h3>                  <Checkbox 
                    id="autoCreateContacts" 
                    checked={syncSettings.autoCreateContacts} 
                    onCheckedChange={(checked) => 
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      setSyncSettings({...syncSettings, autoCreateContacts: checked as boolean})                    }

                  <Label htmlFor="autoCreateContacts">
                    Auto-create contacts in {integration.name}
                  </Label>
<<<<<<< HEAD

=======
=======
                      setSyncSettings({...syncSettings, autoCreateContacts: checked as boolean})
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    }
                  />
                  <Label htmlFor="autoCreateContacts">
                    Auto-create contacts in {integration.name}
                  </Label>
                </div>



                
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                    }
                  />
                  <Label htmlFor="autoCreateContacts">Auto-create contacts in {integration.name}</Label>
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
<<<<<<< HEAD
                <div className="flex items-center space-x-2">
                  <Checkbox 
=======
                
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <div className="flex items-center space-x-2">
                  <Checkbox"
                    id="pushNotes"
                    checked={syncSettings.pushNotes}
                    onCheckedChange={(checked) =>

                      })
                
"
                <div className="flex items-center space-x-2">

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="pushNotes"
                    checked={syncSettings.pushNotes}
                    onCheckedChange={(checked) =>
                      setSyncSettings({
                        ...syncSettings
                        pushNotes: checked as boolean
                      })
                <div className="flex items-center space-x-2">
                  <Checkbox 

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    id="pushNotes" 
                    checked={syncSettings.pushNotes} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, pushNotes: checked as boolean})
<<<<<<< HEAD

                    }
                  />"
                  <Label htmlFor="pushNotes">Push notes and comments</Label>

=======
<<<<<<< HEAD
                    }
                  />
                  <Label htmlFor="pushNotes">Push notes and comments</Label>
                </div>
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    }
                  />"
                  <Label htmlFor="pushNotes">Push notes and comments</Label>
<<<<<<< HEAD
=======
                </div>


<<<<<<< HEAD
                

>>>>>>> merged-prs-20250907-203621
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="syncJobDetails"
                    checked={syncSettings.syncJobDetails}
                    onCheckedChange={(checked) =>
                      setSyncSettings({
                        ...syncSettings
                        syncJobDetails: checked as boolean
                      })
<<<<<<< HEAD
                <div className="flex items-center space-x-2">
                  <Checkbox 
=======
                
=======

=======
                
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <div className="flex items-center space-x-2">
                  <Checkbox"
                    id="syncJobDetails"
                    checked={syncSettings.syncJobDetails}
                    onCheckedChange={(checked) =>

                      })
                
"
                <div className="flex items-center space-x-2">

<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    id="syncJobDetails" 
                    checked={syncSettings.syncJobDetails} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, syncJobDetails: checked as boolean})
<<<<<<< HEAD
                    }
                  />

                  <Label htmlFor="syncJobDetails">Sync job details</Label>

                <div className="flex items-center space-x-2">
=======
<<<<<<< HEAD
                    }
                  />
                  <Label htmlFor="syncJobDetails">Sync job details</Label>
                </div>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    }
                  />

                  <Label htmlFor="syncJobDetails">Sync job details</Label>
<<<<<<< HEAD
=======
                </div>


<<<<<<< HEAD
                

>>>>>>> merged-prs-20250907-203621
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="syncApplicantData"
                    checked={syncSettings.syncApplicantData}
                    onCheckedChange={(checked) =>
                      setSyncSettings({
                        ...syncSettings
                        syncApplicantData: checked as boolean
                      })
<<<<<<< HEAD
                <div className="flex items-center space-x-2">
=======
                
=======

=======
                
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="flex items-center space-x-2">
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <Checkbox"
                    id="syncApplicantData"
                    checked={syncSettings.syncApplicantData}
                    onCheckedChange={(checked) =>

                      })
                
"
                <div className="flex items-center space-x-2">

                    checked={syncSettings && syncSettings.pushNotes}
                    onCheckedChange={(checked) =>;
                      setSyncSettings({;
                        ...syncSettings,;
                        pushNotes: checked as boolean,;
                      });

<<<<<<< HEAD
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

                  Last synced:{" "}
                  {integration && integration.lastSync;
                    ? new Date(integration && integration.lastSync).toLocaleString();"
                    : "Never"}

            <DialogFooter className="flex items-center justify-between">
              <Button"
                variant="outline"
                onClick={handleDisconnect}"
                type="button"
              >

              "
              <div className="space-y-2">"
                <h3 className="text-sm font-medium">API Details</h3>"
                <p className="text-xs text-muted-foreground">
                  Last synced: {integration.lastSync;
                    ? new Date(integration.lastSync).toLocaleString() "

                    : "Never"}
                </p>
              </div>
            </div>

                Disconnect
              </Button>

            <DialogFooter className="flex items-center justify-between">
              <Button variant="outline" onClick={handleDisconnect} type="button">
                Disconnect
              </Button>

              <Button onClick={handleSaveSettings} type="button">

              </Button>
            </DialogFooter>
          </>
        ) : (

              <p className="text-sm">

                Connect your {integration.name} account to sync job contacts, applicants, and more. 

                You'll be redirected to {integration.name} to authorize this connection.
              </p>

                Connect your {integration.name} account to sync job contacts

                applicants, and more. You'll be redirected to {integration.name}{" "}
                to authorize this connection.
              </p>

                Connect your {integration.name} account to sync job contacts, applicants, and more. 
                You'll be redirected to {integration.name} to authorize this connection.
              </p>

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

            <DialogFooter>

              <Button onClick={handleConnectOAuth} disabled={isConnecting}>
                {isConnecting"
                  ? "Connecting..."`
                  : `Connect to ${integration.name}`}
              </Button>
            </DialogFooter>

;
export function IntegrationConnectionModal() { return null; }

  }),;
  const handleConnectOAuth = () => {;
    setIsConnecting(true),;
    // Simulate OAuth flow;
    setTimeout(() => {;

    toast.info(`Disconnected from ${integration.name}`),;
    onClose();
  },;
  const handleSaveSettings = () => {;

    toast.success("Integration settings saved");
    onClose();
  };
  return (;

              (e.target as HTMLImageElement).src = "/placeholder.svg";
=======
=======
>>>>>>> merged-prs-20250907-203621
                  <Checkbox 
                    id="syncApplicantData" 
                    checked={syncSettings.syncApplicantData} 
                    onCheckedChange={(checked) => 
                      setSyncSettings({...syncSettings, syncApplicantData: checked as boolean})
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
                    }
                  />
                  <Label htmlFor="syncApplicantData">Sync applicant data</Label>
                </div>
              </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              


              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Details</h3>
                <p className="text-xs text-muted-foreground">
<<<<<<< HEAD
                  Last synced: {integration.lastSync 
                    ? new Date(integration.lastSync).toLocaleString() 
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            }}
          />;
          <div>;
            <DialogTitle>{integration.name} Integration</DialogTitle>;
<<<<<<< HEAD

                    id="autoCreateContacts";
                    checked={syncSettings.autoCreateContacts} ;
                    onCheckedChange={(checked) =>;
                      setSyncSettings({...syncSettings, autoCreateContacts: checked as boolean});
                    }

                    id="pushNotes";
                    checked={syncSettings.pushNotes} ;
                    onCheckedChange={(checked) =>;
                      setSyncSettings({...syncSettings, pushNotes: checked as boolean});
                    }

                    id="syncJobDetails";
                    checked={syncSettings.syncJobDetails} ;
                    onCheckedChange={(checked) =>;
                      setSyncSettings({...syncSettings, syncJobDetails: checked as boolean});
                    }

                    id="syncApplicantData";
                    checked={syncSettings.syncApplicantData} ;
                    onCheckedChange={(checked) =>;
                      setSyncSettings({...syncSettings, syncApplicantData: checked as boolean});
                    }

                    : "Never"}

                </p>;
              </div>;
            </div>;

              <Button onClick={handleSaveSettings} type="button">;
                Save Settings;
              </Button>;
            </DialogFooter>;
          </>;
        ) : (;

                <ul className="list-disc pl-4 text-sm space-y-1">;
                  <li>Contact information</li>;
                  <li>Job details and descriptions</li>;
                  <li>Applicant data and status</li>;
                  <li>Activity logs and notes</li>;
                </ul>;
              </div>;
            </div>;

        )}
      </DialogContent>;
    </Dialog>;
  );

                  Last synced:{" "}
                  {integration.last_sync;
                    ? new Date (integration.last_sync).toLocaleString ();"
                    : "Never"}
                </p>;
              </div>;

                variant="outline";
                on_click={handle_disconnect}"
                type="button";
              >;
                Disconnect;
              </Button>;"
              <Button on_click={handleSaveSettings} type="button">;
                Save Settings;
              </Button>;
            </DialogFooter>;
          </>) : (

                  <li > Contact information</li>;
                  <li > Job details and descriptions</li>;
                  <li > Applicant data and status</li>;
                  <li > Activity logs and notes</li>;
                </ul>;
              </div>;
            </div>;
            <DialogFooter>;
              <Button on_click={handleConnectOAuth} disabled={is_connecting}>;
                {is_connecting;"
                  ? "Connecting...";`
                  : `Connect to ${integration.name}`}
              </Button>;
            </DialogFooter>;
          </>)}
      </DialogContent>;
    </Dialog>);

}
;

  ),; interface Integration {}

}</p> </div> </div> Save Settings </Button> </DialogFooter> </>) : (<> </p> <div className="space-y-4" > <h3 className="text-sm font-medium" >What will be synced:</h3> <ul className="list-disc pl-4 text-sm space-y-1" > <li>Contact information</li> <li>Job details and descriptions</li> <li>Applicant data and status</li> <li>Activity logs and notes</li> </ul> </div> </div> <DialogFooter> </Button> </DialogFooter> </>) 
}</DialogContent> </Dialog>) 
});
}
;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    }
                  />;
                  <Label htmlFor="pushNotes">Push notes and comments</Label>;
                </div>;
                ;
                <div className="flex items-center space-x-2">;
<<<<<<< HEAD
                  <Checkbox

                    id="syncJobDetails"
                    checked={syncSettings && syncSettings.syncJobDetails}
                    onCheckedChange={(checked) =>;
                      setSyncSettings({;
                        ...syncSettings,;
                        syncJobDetails: checked as boolean,;
                      });

=======
                  <Checkbox ;
                    id="syncJobDetails" ;
                    checked={syncSettings.syncJobDetails} ;
                    onCheckedChange={(checked) => ;
                      setSyncSettings({...syncSettings, syncJobDetails:checked as boolean});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    }
                  />;
                  <Label htmlFor="syncJobDetails">Sync job details</Label>;
                </div>;
                ;
                <div className="flex items-center space-x-2">;
<<<<<<< HEAD
                  <Checkbox

                    id="syncApplicantData"
                    checked={syncSettings && syncSettings.syncApplicantData}
                    onCheckedChange={(checked) =>;
                      setSyncSettings({;
                        ...syncSettings,;
                        syncApplicantData: checked as boolean,;
                      });

=======
                  <Checkbox ;
                    id="syncApplicantData" ;
                    checked={syncSettings.syncApplicantData} ;
                    onCheckedChange={(checked) => ;
                      setSyncSettings({...syncSettings, syncApplicantData:checked as boolean});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    }
                  />;

                  <Label htmlFor="syncApplicantData">Sync applicant data</Label>;
                </div>;
              </div>;

<<<<<<< HEAD
                  Last synced:{" "}
                  {integration && integration.lastSync;
                    ? new Date(integration && integration.lastSync).toLocaleString();"
                    : "Never"}
=======

            

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

            <DialogFooter className="flex items-center justify-between">
              <Button"
                variant="outline"
                onClick={handleDisconnect}"
                type="button"
              >
<<<<<<< HEAD

              "
              <div className="space-y-2">"
                <h3 className="text-sm font-medium">API Details</h3>"
                <p className="text-xs text-muted-foreground">
                  Last synced: {integration.lastSync;
                    ? new Date(integration.lastSync).toLocaleString() "

=======
<<<<<<< HEAD
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Details</h3>
                <p className="text-xs text-muted-foreground">
                  Last synced: {integration.lastSync 
                    ? new Date(integration.lastSync).toLocaleString() 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                    : "Never"}
                </p>
              </div>
            </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
            
            <DialogFooter className="flex items-center justify-between">
              <Button variant="outline" onClick={handleDisconnect} type="button">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                Disconnect
              </Button>

>>>>>>> merged-prs-20250907-203621
            <DialogFooter className="flex items-center justify-between">
              <Button variant="outline" onClick={handleDisconnect} type="button">
                Disconnect
              </Button>
<<<<<<< HEAD
              <Button onClick={handleSaveSettings} type="button">
                Save Settings
=======

              <Button onClick={handleSaveSettings} type="button">

>>>>>>> merged-prs-20250907-203621
              </Button>
            </DialogFooter>
          </>
        ) : (
<<<<<<< HEAD
          <>
            <div className="space-y-4 py-4">
              <p className="text-sm">
=======

              <p className="text-sm">

<<<<<<< HEAD
                Connect your {integration.name} account to sync job contacts, applicants, and more. 

                You'll be redirected to {integration.name} to authorize this connection.
              </p>

                Connect your {integration.name} account to sync job contacts

                applicants, and more. You'll be redirected to {integration.name}{" "}
                to authorize this connection.
              </p>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Connect your {integration.name} account to sync job contacts, applicants, and more. 
                You'll be redirected to {integration.name} to authorize this connection.
              </p>

<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
                Connect your {integration.name} account to sync job contacts
                applicants, and more. You'll be redirected to {integration.name}{" "}
                to authorize this connection.
              </p>
<<<<<<< HEAD
              <div className="space-y-4">
                <h3 className="text-sm font-medium">What will be synced:</h3>
=======
                Connect your {integration.name} account to sync job contacts, applicants, and more. 
                You'll be redirected to {integration.name} to authorize this connection.
              </p>
              
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <div className="space-y-4">
                <h3 className="text-sm font-medium">What will be synced:</h3>

>>>>>>> merged-prs-20250907-203621
                <ul className="list-disc pl-4 text-sm space-y-1">
                  <li>Contact information</li>
                  <li>Job details and descriptions</li>
                  <li>Applicant data and status</li>
                  <li>Activity logs and notes</li>
                </ul>
              </div>
            </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <DialogFooter>

              <Button onClick={handleConnectOAuth} disabled={isConnecting}>
                {isConnecting"
                  ? "Connecting..."`
                  : `Connect to ${integration.name}`}
              </Button>
            </DialogFooter>
<<<<<<< HEAD
=======
          </>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
            
>>>>>>> merged-prs-20250907-203621
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
export function IntegrationConnectionModal() { return null; }

  }),;
  const handleConnectOAuth = () => {;
    setIsConnecting(true),;
    // Simulate OAuth flow;
    setTimeout(() => {;

    toast.info(`Disconnected from ${integration.name}`),;
    onClose();
  },;
  const handleSaveSettings = () => {;

    toast.success("Integration settings saved");
    onClose();
  };
  return (;

              (e.target as HTMLImageElement).src = "/placeholder.svg";
            }}
          />;
          <div>;
            <DialogTitle>{integration.name} Integration</DialogTitle>;

                    id="autoCreateContacts";
                    checked={syncSettings.autoCreateContacts} ;
                    onCheckedChange={(checked) =>;
                      setSyncSettings({...syncSettings, autoCreateContacts: checked as boolean});
                    }

                    id="pushNotes";
                    checked={syncSettings.pushNotes} ;
                    onCheckedChange={(checked) =>;
                      setSyncSettings({...syncSettings, pushNotes: checked as boolean});
                    }

                    id="syncJobDetails";
                    checked={syncSettings.syncJobDetails} ;
                    onCheckedChange={(checked) =>;
                      setSyncSettings({...syncSettings, syncJobDetails: checked as boolean});
                    }

                    id="syncApplicantData";
                    checked={syncSettings.syncApplicantData} ;
                    onCheckedChange={(checked) =>;
                      setSyncSettings({...syncSettings, syncApplicantData: checked as boolean});
                    }

                    : "Never"}
<<<<<<< HEAD
                </p>;
              </div>;
            </div>;
            <DialogFooter className="flex items-center justify-between">;
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
=======

                </p>;
              </div>;
            </div>;

<<<<<<< HEAD
=======
            <DialogFooter className="flex items-center justify-between">;
              <Button
                variant="outline"
                onClick={handleDisconnect}
                type="button">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Disconnect;
              </Button>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Button onClick={handleSaveSettings} type="button">;
                Save Settings;
              </Button>;
            </DialogFooter>;
          </>;
        ) : (;
<<<<<<< HEAD

=======
          <>;
            <div className="space-y-4 py-4">;
              <p className="text-sm">;
<<<<<<< HEAD
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
=======
                Connect your {integration && integration.name} account to sync job contacts,;
                applicants, and more. You'll be redirected to {integration && integration.name}{" "}
                to authorize this connection.;
              </p>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="space-y-4">;
                <h3 className="text-sm font-medium">What will be synced:</h3>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <ul className="list-disc pl-4 text-sm space-y-1">;
                  <li>Contact information</li>;
                  <li>Job details and descriptions</li>;
                  <li>Applicant data and status</li>;
                  <li>Activity logs and notes</li>;
                </ul>;
              </div>;
            </div>;
<<<<<<< HEAD
            ;
            <DialogFooter>;
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>;
                {isConnecting ? "Connecting..." :`Connect to ${integration.name}`}
            <DialogFooter>;
              <Button onClick={handleConnectOAuth} disabled={isConnecting}>;
                {isConnecting ? "Connecting..." : `Connect to ${integration.name}`}
              </Button>;
            </DialogFooter>;
          </>;
        )}
      </DialogContent>;
    </Dialog>;
=======

        )}
      </DialogContent>;
    </Dialog>;
  );

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  Last synced:{" "}
                  {integration.last_sync;
                    ? new Date (integration.last_sync).toLocaleString ();"
                    : "Never"}
                </p>;
              </div>;

                variant="outline";
                on_click={handle_disconnect}"
                type="button";
              >;
                Disconnect;
              </Button>;"
              <Button on_click={handleSaveSettings} type="button">;
                Save Settings;
              </Button>;
            </DialogFooter>;
          </>) : (

                  <li > Contact information</li>;
                  <li > Job details and descriptions</li>;
                  <li > Applicant data and status</li>;
                  <li > Activity logs and notes</li>;
                </ul>;
              </div>;
            </div>;
            <DialogFooter>;
              <Button on_click={handleConnectOAuth} disabled={is_connecting}>;
                {is_connecting;"
                  ? "Connecting...";`
                  : `Connect to ${integration.name}`}
              </Button>;
            </DialogFooter>;
          </>)}
      </DialogContent>;
    </Dialog>);
<<<<<<< HEAD

}
;

  ),; interface Integration {}

}</p> </div> </div> Save Settings </Button> </DialogFooter> </>) : (<> </p> <div className="space-y-4" > <h3 className="text-sm font-medium" >What will be synced:</h3> <ul className="list-disc pl-4 text-sm space-y-1" > <li>Contact information</li> <li>Job details and descriptions</li> <li>Applicant data and status</li> <li>Activity logs and notes</li> </ul> </div> </div> <DialogFooter> </Button> </DialogFooter> </>) 
}</DialogContent> </Dialog>) 
});
}
;
=======
}
;

<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
