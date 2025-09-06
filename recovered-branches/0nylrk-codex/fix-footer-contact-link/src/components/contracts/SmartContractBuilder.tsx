<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx


<<<<<<< HEAD
import { useState } from "react",
import { Dialog, DialogContent } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
import { TemplateManager } from "./templates/TemplateManager",
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from "@/types/smart-contracts",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface SmartContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string
  onContractGenerated?: (contractContent: string) => void

  onDeploy?: (contractContent: string) => void
<<<<<<< HEAD
}

export function SmartContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
  onContractGenerated,
=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {useState} from "react";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {Save} from "lucide-react";
import {TalentProfile} from "@/types/talent";
import {ContractForm, ContractFormValues} from "./components/ContractForm";
import {ContractPreview} from "./components/ContractPreview";
import {TemplateManager} from "./templates/TemplateManager";
import {BlockchainNetwork, DeploymentOptions, SmartContractInfo} from "@/types/smart-contracts";
import {useSmartContracts} from "@/hooks/useSmartContracts";
import {toast} from "sonner";
<<<<<<< HEAD
interface SmartContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;
  onContractGenerated?: (contractContent: string) => void,;
  onDeploy?: (contractContent: string) => void;
}
export function SmartContractBuilder(): any ({;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState } from "react",
import { Dialog, DialogContent } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
import { TemplateManager } from "./templates/TemplateManager",
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from "@/types/smart-contracts",
<<<<<<< HEAD
import { useSmartContracts } from "@/hooks/useSmartContracts";
import { toast } from "sonner";
=======
import { useSmartContracts } from "@/hooks/useSmartContracts",
import { toast } from "sonner",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface SmartContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string
  onContractGenerated?: (contractContent: string) => void

  onDeploy?: (contractContent: string) => void
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function SmartContractBuilder({;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  isOpen;
  onClose;
  talent;
  clientName;
  onContractGenerated;
<<<<<<< HEAD
  onDeploy;
}: SmartContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form");
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx

}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function SmartContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
  onContractGenerated,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  onDeploy
}: SmartContractBuilderProps) {
  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  ),
<<<<<<< HEAD

<<<<<<< HEAD
=======
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
=======
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({

    network: 'ethereum'
    useEscrow: true

    deployToChain: false
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
  });
  const [deployStatus, setDeployStatus] = useState<string>('');
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null);
  const { generateSolidityContract, deploySmartContract, deploymentStatus } = useSmartContracts();

  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)
  }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }),
  const [deployStatus, setDeployStatus] = useState<string>(''),
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null),
  
  const { generateSolidityContract, deploySmartContract, deploymentStatus } = useSmartContracts(),

  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)
  },

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Convert ContractFormValues to contract content string
  const handleContractGenerated = async (formValues: ContractFormValues) => {
    if (!formValues) return
    try {
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  );
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({;
    network: 'ethereum',;
    useEscrow: true,;
    deployToChain: false;
  });
  const [deployStatus, setDeployStatus] = useState<string>('');
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null);
  const { generateSolidityContract, deploySmartContract, deploymentStatus } = useSmartContracts();
  const handleLoadTemplate = (templateData: ContractFormValues) => {;
    setFormValues(templateData);
  };
  // Convert ContractFormValues to contract content string;
  const handleContractGenerated = async (formValues: ContractFormValues) => {;
    if (!formValues) return,;
    try {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
      const generatedContractText = await generateSolidityContract(formValues, talent, clientName);
      setGeneratedContract(generatedContractText);
      setActiveTab("preview");
      if (onContractGenerated) {;
        onContractGenerated(generatedContractText);
import { useState } from './react';
import { Dialog, DialogContent } from '@/components / ui / dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components / ui / tabs';
import { Button } from '@/components / ui / button';
import { Save } from './lucide-react';
import { TalentProfile } from '@/types / talent';
import { ContractForm, ContractFormValues } from './components / ContractForm';
import { ContractPreview } from './components / ContractPreview';
import { TemplateManager } from './templates / TemplateManager';
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from '@/types / smart - contracts';
import { useSmartContracts } from '@/hooks / useSmartContracts';
import { toast } from './sonner';
interface SmartContractBuilderProps {
  is_open: boolean,
  on_close: () => void,
  talent: TalentProfile,
  client_name: string,
  onContractGenerated?: (contract_content: string) => void,
  on_deploy?: (contract_content: string) => void;
}
export /**
 * SmartContractBuilder - Function description
 */
function SmartContractBuilder() {
  const [active_tab, setActiveTab] = useState < string>("form");
  const [generated_contract, setGeneratedContract] = useState < string | null>(null);
  const [form_values, setFormValues] = useState < ContractFormValues | undefined>(
    undefined);
  const [templateManagerOpen, setTemplateManagerOpen] = useState (false);
  const [deploy_options, setDeployOptions] = useState < DeploymentOptions>({
    network: 'ethereum',
    use_escrow: true,
    deployToChain: false;
  });
  const [deploy_status, setDeployStatus] = useState < string>('');
  const [deployment_info, setDeploymentInfo] = useState < SmartContractInfo | null>(null);
;
  const { generateSolidityContract, deploySmartContract, deployment_status } = useSmartContracts ();
;
  const handleLoadTemplate = (template_data: ContractFormValues) =>: any {
    setFormValues (template_data);
  }
;
  // Convert ContractFormValues to contract content string;
  const handleContractGenerated = async (form_values: ContractFormValues) => {
    // Check condition
if (return, ) {
  $2
}
    try {
      const generatedContractText = await generateSolidityContract (form_values, talent, client_name);
      setGeneratedContract (generatedContractText);
      setActiveTab ("preview");
      // Check condition
if ( {) {
  $2
}
        onContractGenerated (generatedContractText);
      }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      const generatedContractText = await generateSolidityContract(formValues, talent, clientName),
      setGeneratedContract(generatedContractText),
      setActiveTab("preview"),
      if (onContractGenerated) {
        onContractGenerated(generatedContractText)
      }
    } catch (error) {
      console.error("Error generating contract:", error),
      toast.error("Failed to generate smart contract")
    }
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
  }
  const handleDeployContract = async () => {
    if (!generatedContract) return;
    try {
      setDeployStatus('deploying');
      const contractInfo = await deploySmartContract(generatedContract, deployOptions);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  },
  
  const handleDeployContract = async () => {
    if (!generatedContract) return,
    
    try {
      setDeployStatus('deploying'),
      const contractInfo = await deploySmartContract(generatedContract, deployOptions),
      
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      if (contractInfo) {
        setDeploymentInfo(contractInfo);
        setDeployStatus('deployed');
        toast.success("Smart contract deployed successfully!")
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
;
  const handleDeployContract = async () => {
    // Check condition
if (return) {
  $2
}
    try {
      setDeployStatus ('deploying');
      const contract_info = await deploySmartContract (generated_contract, deploy_options);
;
      // Check condition
if ( {) {
  $2
}
        setDeploymentInfo (contract_info);
        setDeployStatus ('deployed');
        toast.success ("Smart contract deployed successfully!");
      } else {
        setDeployStatus ('error');
        toast.error ("Failed to deploy smart contract");
      }
    } catch (error) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx

<<<<<<< HEAD
=======

  };

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      if (contractInfo) {
        setDeploymentInfo(contractInfo),
        setDeployStatus('deployed'),
        toast.success("Smart contract deployed successfully!")
      } else {
        setDeployStatus('error'),
        toast.error("Failed to deploy smart contract")
      }
    } catch (error) {
<<<<<<< HEAD
      console.error("Error deploying contract:", error);
      setDeployStatus('error');
      toast.error("Failed to deploy smart contract")
    }
  }
  // Modified to match the expected interface
  const handleFormSubmit = (contract: string) => {
    // This should be a function that takes a string (contract content)
    // Since we need to adapt the interface, we'll implement the simplest solution that works
    if (onContractGenerated) {
      onContractGenerated(contract)
    }
    setGeneratedContract(contract);
    setActiveTab("preview")
<<<<<<< HEAD
  }
=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      console.error("Error deploying contract:", error),
      setDeployStatus('error'),
      toast.error("Failed to deploy smart contract")
import { useState } from "react",;
import { Dialog, DialogContent } from "@/components/ui/dialog",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
import { Save } from "lucide-react",;
import { TalentProfile } from "@/types/talent",;
import { ContractForm, ContractFormValues } from "./components/ContractForm",;
import { ContractPreview } from "./components/ContractPreview",;
import { TemplateManager } from "./templates/TemplateManager",;
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from "@/types/smart-contracts",;
import { useSmartContracts } from "@/hooks/useSmartContracts",;
import { toast } from "sonner",;
interface SmartContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;
  onContractGenerated?: (contractContent: string) => void,;
  onDeploy?: (contractContent: string) => void;
}
;
export function SmartContractBuilder({;
  isOpen,;
  onClose,;
  talent,;
  clientName,;
  onContractGenerated,;
  onDeploy;
}: SmartContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form"),;
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),;
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  ),;
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),;
  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({;
    network: 'ethereum',;
    useEscrow: true,;
    deployToChain: false;
  }),;
  const [deployStatus, setDeployStatus] = useState<string>(''),;
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null),;
  const { generateSolidityContract, deploySmartContract, deploymentStatus } = useSmartContracts(),;
  const handleLoadTemplate = (templateData: ContractFormValues) => {;
    setFormValues(templateData);
  },;
  // Convert ContractFormValues to contract content string;
  const handleContractGenerated = async (formValues: ContractFormValues) => {;
    if (!formValues) return,;
    try {;
      const generatedContractText = await generateSolidityContract(formValues, talent, clientName),;
      setGeneratedContract(generatedContractText),;
      setActiveTab("preview"),;
      if (onContractGenerated) {;
        onContractGenerated(generatedContractText);
      }
    } catch (error) {;
      console.error("Error generating contract:", error),;
      toast.error("Failed to generate smart contract");
    }
  },;
  const handleDeployContract = async () => {;
    if (!generatedContract) return,;
    try {;
      setDeployStatus('deploying'),;
      const contractInfo = await deploySmartContract(generatedContract, deployOptions),;
      if (contractInfo) {;
        setDeploymentInfo(contractInfo),;
        setDeployStatus('deployed'),;
        toast.success("Smart contract deployed successfully!");
      } else {;
        setDeployStatus('error'),;
        toast.error("Failed to deploy smart contract");
      }
    } catch (error) {;
      console.error("Error deploying contract:", error),;
      setDeployStatus('error'),;
      toast.error("Failed to deploy smart contract");
    }
  },;
  // Modified to match the expected interface;
  const handleFormSubmit = (contract: string) => {;
    // This should be a function that takes a string (contract content);
    // Since we need to adapt the interface, we'll implement the simplest solution that works;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
    setGeneratedContract(contract),
    setActiveTab("preview")
  },
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <div className="flex justify-between items-center">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="form">Contract Details</TabsTrigger>
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1"
              >
                <Save className="h-4 w-4" />
                Templates
              </Button>
            </div>
          </div>
          <TabsContent value="form" className="pt-4">
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
      console.error ("Error deploying contract:", error);
      setDeployStatus ('error');
      toast.error ("Failed to deploy smart contract");
    }
  }
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
    } catch (error) {;
      console && console.error("Error generating contract:", error);
      toast && toast.error("Failed to generate smart contract");
    }
  };
  const handleDeployContract = async () => {;
    if (!generatedContract) return;
    try {;
      setDeployStatus('deploying');
      const contractInfo = await deploySmartContract(generatedContract, deployOptions);
      if (contractInfo) {;
        setDeploymentInfo(contractInfo);
        setDeployStatus('deployed');
        toast && toast.success("Smart contract deployed successfully!");
      } else {;
        setDeployStatus('error');
        toast && toast.error("Failed to deploy smart contract");
      }
    } catch (error) {;
      console && console.error("Error deploying contract:", error);
      setDeployStatus('error');
      toast && toast.error("Failed to deploy smart contract");
    }
  };
  // Modified to match the expected interface;
  const handleFormSubmit = (contract: string) => {;
    // This should be a function that takes a string (contract content);
    // Since we need to adapt the interface, we'll implement the simplest solution that works;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    setGeneratedContract(contract);
    setActiveTab("preview");
  };
  return (
=======

import { useState } from "react",;
import { Dialog, DialogContent } from "@/components/ui/dialog",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
import { Save } from "lucide-react",;
import { TalentProfile } from "@/types/talent",;
import { ContractForm, ContractFormValues } from "./components/ContractForm",;
import { ContractPreview } from "./components/ContractPreview",;
import { TemplateManager } from "./templates/TemplateManager",;
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from "@/types/smart-contracts",;
import { useSmartContracts } from "@/hooks/useSmartContracts",;
import { toast } from "sonner",;
;
interface SmartContractBuilderProps {;
  isOpen:boolean,;
  onClose:() => void,;
  talent:TalentProfile,;
  clientName:string,;
  onContractGenerated?:(contractContent:string) => void,;
  onDeploy?:(contractContent:string) => void;
}
;
export function SmartContractBuilder({;
  isOpen,;
  onClose,;
  talent,;
  clientName,;
  onContractGenerated,;
  onDeploy;
} SmartContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form"),;
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),;
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  ),;
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),;
  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({;
    network:'ethereum',;
    useEscrow:true,;
    deployToChain:false;
  }),;
  const [deployStatus, setDeployStatus] = useState<string>(''),;
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null),;
  ;
  const { generateSolidityContract, deploySmartContract, deploymentStatus } = useSmartContracts(),;
;
  const handleLoadTemplate = (templateData:ContractFormValues) => {;
    setFormValues(templateData);
  },;
;
  // Convert ContractFormValues to contract content string;
  const handleContractGenerated = async (formValues:ContractFormValues) => {;
    if (!formValues) return,;
    try {;
      const generatedContractText = await generateSolidityContract(formValues, talent, clientName),;
      setGeneratedContract(generatedContractText),;
      setActiveTab("preview"),;
      if (onContractGenerated) {;
        onContractGenerated(generatedContractText),;
      }
    } catch (error) {;
      console.error("Error generating contract:", error),;
      toast.error("Failed to generate smart contract"),;
    }
  },;
  ;
  const handleDeployContract = async () => {;
    if (!generatedContract) return,;
    ;
    try {;
      setDeployStatus('deploying'),;
      const contractInfo = await deploySmartContract(generatedContract, deployOptions),;
      ;
      if (contractInfo) {;
        setDeploymentInfo(contractInfo),;
        setDeployStatus('deployed'),;
        toast.success("Smart contract deployed successfully!"),;
      } else {;
        setDeployStatus('error'),;
        toast.error("Failed to deploy smart contract"),;
      }
    } catch (error) {;
      console.error("Error deploying contract:", error),;
      setDeployStatus('error'),;
      toast.error("Failed to deploy smart contract"),;
    }
  },;
;
  // Modified to match the expected interface;
  const handleFormSubmit = (contract:string) => {;
    // This should be a function that takes a string (contract content);
    // Since we need to adapt the interface, we'll implement the simplest solution that works;
    if (onContractGenerated) {;
      onContractGenerated(contract),;
    }
    setGeneratedContract(contract),;
    setActiveTab("preview"),;
  },;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
            <ContractForm
=======
            <ContractForm 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    setGeneratedContract(contract);
    setActiveTab("preview");
  };
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center">;
            <TabsList className="grid grid-cols-2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="flex gap-2">;
              <Button
                variant="outline" 
                size="sm"
=======
            ;
            <div className="flex gap-2">;
              <Button ;
                variant="outline" ;
                size="sm";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            <div className="flex gap-2">;
              <Button;
                variant="outline";
                size="sm";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
<<<<<<< HEAD
<<<<<<< HEAD
;
  // Modified to match the expected interface;
  const handleFormSubmit = (contract: string) =>: any {
    // This should be a function that takes a string (contract content);
    // Since we need to adapt the interface, we'll implement the simplest solution that works;
    // Check condition
if ( {) {
  $2
}
      onContractGenerated (contract);
    }
    setGeneratedContract (contract);
    setActiveTab ("preview");
  }
;
  return (
    <Dialog open={is_open} onOpenChange={on_close}>;
      <DialogContent className="max - w-4xl max - h-[90vh] overflow - y-auto">;
        <Tabs value={active_tab} onValueChange={setActiveTab} className="mt - 4">;
          <div className="flex justify - between items - center">;
            <TabsList className="grid grid - cols - 2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generated_contract}>Preview</TabsTrigger>;
            </TabsList>;
            <div className="flex gap - 2">;
              <Button;
                variant="outline";
                size="sm";
                on_click={() => setTemplateManagerOpen (true)}
                className="flex gap - 1";
              >;
                <Save className="h - 4 w - 4" />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx

========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                Templates;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx

          <TabsContent value="form" className="pt - 4">;
            <ContractForm;

<<<<<<< HEAD
=======
=======

            <ContractForm 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
<<<<<<< HEAD
          <TabsContent value="form" className="pt - 4">;
            <ContractForm;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
              talent={talent}
              client_name={client_name}
              initial_values={form_values}
=======
          ;
          <TabsContent value="form" className="pt-4">;
            <ContractForm ;
              talent={talent}              clientName={clientName}
              initialValues={formValues}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              onFormValuesChange={setFormValues}
              onContractGenerated={handleFormSubmit}
              deploy_options={deploy_options}
              onDeployOptionsChange={setDeployOptions}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
<<<<<<< HEAD
=======
          <TabsContent value="form" className="pt-4">;
            <ContractForm;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleFormSubmit}
              deployOptions={deployOptions}
              onDeployOptionsChange={setDeployOptions}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            />
          </TabsContent>
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <div>
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
            />;
          </TabsContent>;
<<<<<<< HEAD
          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;
              <div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
                <ContractPreview
=======

                <ContractPreview 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  generatedContract={generatedContract}
                  talent={talent}
=======
          ;
          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;
              <div>;
                <ContractPreview ;
                  generatedContract={generatedContract}                  talent={talent}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  onClose={onClose}
                  deployStatus={deployStatus}
                  deploymentInfo={deploymentInfo}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
                />;
<<<<<<< HEAD
                {!deploymentInfo && deployOptions && deployOptions.deployToChain && (;
                  <div className="mt-6 flex justify-center">;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
                    <Button
                      onClick={handleDeployContract}
                      disabled={deployStatus === 'deploying'}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">;
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>;
                )}
=======
                ;
                {!deploymentInfo && deployOptions.deployToChain && (;
                  <div className="mt-6 flex justify-center">;
                    <Button ;
                      onClick={handleDeployContract}
                      disabled={deployStatus === 'deploying'}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700";
                    >;
                      {deployStatus === 'deploying' ? 'Deploying...' :'Deploy to Blockchain'}
                    </Button>;
                  </div>;                )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </div>;
            )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx

          </TabsContent>;
        </Tabs>;


========
          </TabsContent>;
        </Tabs>;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
        <TemplateManager
=======
        ;
        <TemplateManager;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
                <ContractPreview
=======
                <ContractPreview 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                  generatedContract={generatedContract}
                  talent={talent}
                  onClose={onClose}
                  deployStatus={deployStatus}
                  deploymentInfo={deploymentInfo}
                />
                {!deploymentInfo && deployOptions.deployToChain && (
                  <div className="mt-6 flex justify-center">
                    <Button
                      onClick={handleDeployContract}
                      disabled={deployStatus === 'deploying'}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
        <TemplateManager
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
        />;
      </DialogContent>;
    </Dialog>;
<<<<<<< HEAD
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
            />;
          </TabsContent>;
          <TabsContent value="preview" className="pt - 4">;
            {generated_contract && (
              <div>;
                <ContractPreview;
                  generated_contract={generated_contract}
                  talent={talent}
                  on_close={on_close}
                  deploy_status={deploy_status}
                  deployment_info={deployment_info}
                />;
                {!deployment_info && deploy_options.deployToChain && (
                  <div className="mt - 6 flex justify - center">;
                    <Button;
                      on_click={handleDeployContract}
                      disabled={deploy_status === 'deploying'}
                      className="bg - gradient - to - r from - blue - 600 to - indigo - 600 hover:from - blue - 700 hover:to - indigo - 700";
                    >;
                      {deploy_status === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>)}
              </div>)}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;
          is_open={templateManagerOpen}
          on_close={() => setTemplateManagerOpen (false)}
          onSelectTemplate={handleLoadTemplate}
          current_values={form_values}
        />;
      </DialogContent>;
    </Dialog>);
=======
  ),; interface SmartContractBuilderProps {
  isOpen: boolean;
onClose: () => void;
talent: TalentProfile;
clientName: string;
onContractGenerated?: (contractContent: string) => void;
onDeploy?: (contractContent: string) => void 
}export function SmartContractBuilder ({
  isOpen;
onClose;
talent;
clientName;
onContractGenerated;
onDeploy 
}: SmartContractBuilderProps) {
  const [formValues, setFormValues] = useState<ContractFormValues | undefined> (undefined);
const [templateManagerOpen, setTemplateManagerOpen] = useState (false);
const [deployOptions, setDeployOptions] = useState<DeploymentOptions> ({
  network: 'ethereum';
useEscrow: true;
deployToChain: false 
});
const [deployStatus, setDeployStatus] = useState<string> ('');
const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null> (null);
const {
  generateSolidityContract, deploySmartContract, deploymentStatus 
}= useSmartContracts ();
const handleLoadTemplate = (templateData: ContractFormValues) => {
  setFormValues (templateData) 
};
//Convert ContractFormValues to contract content string const handleContractGenerated = async (formValues: ContractFormValues) => {
  if (!formValues) return;
try {
  setGeneratedContract (generatedContractText);
setActiveTab ("preview");
  
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
const handleDeployContract = async () => {
  if (!generatedContract) return;
try {
  setDeployStatus ('deploying');
const contractInfo = await deploySmartContract (generatedContract, deployOptions);
if (contractInfo) {
  
}
};
//This should be a function that takes a string (contract content) //Since we need to adapt the interface, we'll implement the simplest solution that works if (onContractGenerated) {
  setGeneratedContract (contract);
setActiveTab ("preview");
};
  talent 
}clientName= {
  clientName 
}initialValues= {
  formValues 
}onFormValuesChange= {
  setFormValues 
}onContractGenerated= {
  handleFormSubmit 
}deployOptions= {
  deployOptions 
}onDeployOptionsChange= {
  setDeployOptions 
}/> </TabsContent> <div> <ContractPreview generatedContract= {
  generatedContract 
}talent= {
  talent 
}onClose= {
  onClose 
}deployStatus= {
  deployStatus 
}deploymentInfo= {
  deploymentInfo 
}/> > {
  deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain' 
}</Button> </div>) 
}</div>) 
}</TabsContent> </Tabs> <TemplateManager isOpen= {
  templateManagerOpen 
}onClose= {
  () => setTemplateManagerOpen (false) 
}onSelectTemplate= {
  handleLoadTemplate 
}currentValues= {
  formValues 
}/> </DialogContent> </Dialog>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/contracts/SmartContractBuilder.tsx
=======
<<<<<<< HEAD
        />
      </DialogContent>
    </Dialog>
  )
}
=======
        />;
      </DialogContent>;
    </Dialog>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
