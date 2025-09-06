<<<<<<< HEAD
<<<<<<< HEAD

=======

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface SmartContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string
  onContractGenerated?: (contractContent: string) => void

  onDeploy?: (contractContent: string) => void
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
interface SmartContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string
  onContractGenerated?: (contractContent: string) => void

  onDeploy?: (contractContent: string) => void
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
interface SmartContractBuilderProps {}
  isOpen: boolean;
  onClose: () => void;
  talent: TalentProfile;
  clientName: string;
  onContractGenerated?: (contractContent: string) => void;
  onDeploy?: (contractContent: string) => void;
import {useState} from "react";"
import {Dialog, DialogContent} from "@/components/ui/dialog";"
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";"
import {Button} from "@/components/ui/button";"
import {Save} from "lucide-react";"
import {TalentProfile} from "@/types/talent";"
import {ContractForm, ContractFormValues} from "./components/ContractForm";"
import {ContractPreview} from "./components/ContractPreview";"
import {TemplateManager} from "./templates/TemplateManager";"
import {BlockchainNetwork, DeploymentOptions, SmartContractInfo} from "@/types/smart-contracts";"
import {useSmartContracts} from "@/hooks/useSmartContracts";"
import {toast} from "sonner";

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
interface SmartContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;
  onContractGenerated?: (contractContent: string) => void,;
  onDeploy?: (contractContent: string) => void;
}

export function SmartContractBuilder(): any ({;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
import { useSmartContracts } from "@/hooks/useSmartContracts";
import { toast } from "sonner";
import { useSmartContracts } from "@/hooks/useSmartContracts",
import { toast } from "sonner",
interface SmartContractBuilderProps {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


export function SmartContractBuilder() { return null; }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
export function SmartContractBuilder({;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export function SmartContractBuilder({;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
export function SmartContractBuilder({;export function SmartContractBuilder({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export function SmartContractBuilder({;export function SmartContractBuilder({;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  isOpen;
  onClose;
  talent;
  clientName;
<<<<<<< HEAD
<<<<<<< HEAD
  onContractGenerated;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function SmartContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
  onContractGenerated,
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  onDeploy;
}: SmartContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form");
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);

}


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
=======
export function SmartContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
  onContractGenerated,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  onDeploy
}: SmartContractBuilderProps) {
=======





  onDeploy;
}: SmartContractBuilderProps) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined;
  ),
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),


=======
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),


  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({
=======
  onContractGenerated;  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  onContractGenerated;  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({}
    network: 'ethereum'
<<<<<<< HEAD
    useEscrow: true

    deployToChain: false

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  });
  const [deployStatus, setDeployStatus] = useState<string>('');
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null);
  const { generateSolidityContract, deploySmartContract, deploymentStatus } = useSmartContracts();

=======
  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }),
=======
    useEscrow: true;
    deployToChain: false;
  }),'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [deployStatus, setDeployStatus] = useState<string>(''),
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null),
  
  const { generateSolidityContract, deploySmartContract, deploymentStatus } = useSmartContracts(),

  const handleLoadTemplate = (templateData: ContractFormValues) => {}
    setFormValues(templateData)
  },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  // Convert ContractFormValues to contract content string
  const handleContractGenerated = async (formValues: ContractFormValues) => {
    if (!formValues) return
    try {      const generatedContractText = await generateSolidityContract(formValues, talent, clientName);
      setGeneratedContract(generatedContractText);
      setActiveTab("preview");
      if (onContractGenerated) {;
        onContractGenerated(generatedContractText);
<<<<<<< HEAD
=======
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
=======



  // Convert ContractFormValues to contract content string;
  const handleContractGenerated = async (formValues: ContractFormValues) => {}
    if (!formValues) return;
    try {}
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  );
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({;'
    network: 'ethereum',;
    useEscrow: true,;
    deployToChain: false;
  });'
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



      const generatedContractText = await generateSolidityContract(formValues, talent, clientName);
      setGeneratedContract(generatedContractText);"
      setActiveTab("preview");
      if (onContractGenerated) {;
        onContractGenerated(generatedContractText);'
import { useState } from './react';'
import { Dialog, DialogContent } from '@/components / ui / dialog';'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components / ui / tabs';'
import { Button } from '@/components / ui / button';'
import { Save } from './lucide-react';'
import { TalentProfile } from '@/types / talent';'
import { ContractForm, ContractFormValues } from './components / ContractForm';'
import { ContractPreview } from './components / ContractPreview';'
import { TemplateManager } from './templates / TemplateManager';'
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from '@/types / smart - contracts';'
import { useSmartContracts } from '@/hooks / useSmartContracts';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from './sonner';
interface SmartContractBuilderProps {}
  is_open: boolean,
  on_close: () => void,
  talent: TalentProfile,
  client_name: string,
  onContractGenerated?: (contract_content: string) => void,
  on_deploy?: (contract_content: string) => void;
}
export /**;
 * SmartContractBuilder - Function description;
 */
function SmartContractBuilder() { return null; }
  });'
  const [deploy_status, setDeployStatus] = useState < string>('');
  const [deployment_info, setDeploymentInfo] = useState < SmartContractInfo | null>(null);
;
  const { generateSolidityContract, deploySmartContract, deployment_status } = useSmartContracts ();
;
  const handleLoadTemplate = (template_data: ContractFormValues) =>: any {}
    setFormValues (template_data);
  }
;
  // Convert ContractFormValues to contract content string;
  const handleContractGenerated = async (form_values: ContractFormValues) => {}
    // Check condition;
if (return, ) {}
  $2;
}
    try {}
      const generatedContractText = await generateSolidityContract (form_values, talent, client_name);
      setGeneratedContract (generatedContractText);"
      setActiveTab ("preview");
      // Check condition;
if ( {) {}
  $2;
}
        onContractGenerated (generatedContractText);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      }

      const generatedContractText = await generateSolidityContract(formValues, talent, clientName),
      setGeneratedContract(generatedContractText),"
      setActiveTab("preview"),
      if (onContractGenerated) {}
        onContractGenerated(generatedContractText)


      }
    } catch (error) {"
      console.error("Error generating contract:", error),"
      toast.error("Failed to generate smart contract")
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
  }
  const handleDeployContract = async () => {
    if (!generatedContract) return;
    try {
      setDeployStatus('deploying');
      const contractInfo = await deploySmartContract(generatedContract, deployOptions);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },
  
  const handleDeployContract = async () => {}
    if (!generatedContract) return,
    
    try {'
      setDeployStatus('deploying'),
      const contractInfo = await deploySmartContract(generatedContract, deployOptions),
      

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      if (contractInfo) {
        setDeploymentInfo(contractInfo),
        setDeployStatus('deployed'),
=======
      if (contractInfo) {}
        setDeploymentInfo(contractInfo),'
        setDeployStatus('deployed'),"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        toast.success("Smart contract deployed successfully!")



;
<<<<<<< HEAD
=======
      }      }
    } catch (error) {
      console.error("Error generating contract:", error),
      toast.error("Failed to generate smart contract")
    };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      }      }
    } catch (error) {
      console.error("Error generating contract:", error),
      toast.error("Failed to generate smart contract")
    };
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const handleDeployContract = async () => {
    // Check condition
if (return) {
  $2
=======
  const handleDeployContract = async () => {}
    // Check condition;
if (return) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
    try {'
      setDeployStatus ('deploying');
      const contract_info = await deploySmartContract (generated_contract, deploy_options);
;
      // Check condition;
if ( {) {}
  $2;
}
        setDeploymentInfo (contract_info);'
        setDeployStatus ('deployed');"
        toast.success ("Smart contract deployed successfully!");
      } else {'
        setDeployStatus ('error');"
        toast.error ("Failed to deploy smart contract");
      }
    } catch (error) {}
  }
<<<<<<< HEAD
  }
<<<<<<< HEAD
<<<<<<< HEAD
  // Modified to match the expected interface
  const handleFormSubmit = (contract: string) => {
    // This should be a function that takes a string (contract content)
    // Since we need to adapt the interface, we'll implement the simplest solution that works
    if (onContractGenerated) {
      onContractGenerated(contract)
    }
    setGeneratedContract(contract);
    setActiveTab("preview")
  }
  };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
};

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
  };


  };



"
      console.error("Error deploying contract:", error),'
      setDeployStatus('error'),"
      toast.error("Failed to deploy smart contract")"
import { useState } from "react",;"
import { Dialog, DialogContent } from "@/components/ui/dialog",;"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;"
import { Button } from "@/components/ui/button",;"
import { Save } from "lucide-react",;"
import { TalentProfile } from "@/types/talent",;"
import { ContractForm, ContractFormValues } from "./components/ContractForm",;"
import { ContractPreview } from "./components/ContractPreview",;"
import { TemplateManager } from "./templates/TemplateManager",;"
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from "@/types/smart-contracts",;"
import { useSmartContracts } from "@/hooks/useSmartContracts",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
export function SmartContractBuilder() { return null; }
  }),;'
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
      setGeneratedContract(generatedContractText),;"
      setActiveTab("preview"),;
      if (onContractGenerated) {;
        onContractGenerated(generatedContractText);
      }
    } catch (error) {;"
      console.error("Error generating contract:", error),;"
      toast.error("Failed to generate smart contract");
    }
  }
  // Modified to match the expected interface;
  const handleFormSubmit = (contract: string) => {}
    // This should be a function that takes a string (contract content)'
    // Since we need to adapt the interface, we'll implement the simplest solution that works;
    if (onContractGenerated) {}
      onContractGenerated(contract)
    }
<<<<<<< HEAD
    setGeneratedContract(contract);
<<<<<<< HEAD
<<<<<<< HEAD
    setActiveTab("preview")
<<<<<<< HEAD
  },
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    setGeneratedContract(contract);"
    setActiveTab("preview")



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>"
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">"
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">"
          <div className="flex justify-between items-center">"
            <TabsList className="grid grid-cols-2">"
              <TabsTrigger value="form">Contract Details</TabsTrigger>"
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>
            </TabsList>"
            <div className="flex gap-2">
              <Button"
                variant="outline""
                size="sm"
                onClick={() => setTemplateManagerOpen(true)}"
                className="flex gap-1"
              >"
                <Save className="h-4 w-4" />
                Templates;
              </Button>
            </div>
          </div>"
          <TabsContent value="form" className="pt-4">
<<<<<<< HEAD
<<<<<<< HEAD
            <ContractForm
            <ContractForm 
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    } catch (error) {;
=======
    setActiveTab("preview")    } catch (error) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    setActiveTab("preview")    } catch (error) {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      console && console.error("Error generating contract:", error);
=======


    } catch (error) {;"
      console && console.error("Error generating contract:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      toast && toast.error("Failed to generate smart contract");
    }
  };

  const handleDeployContract = async () => {;
    if (!generatedContract) return;

    try {;'
      setDeployStatus('deploying');
      const contractInfo = await deploySmartContract(generatedContract, deployOptions);

      if (contractInfo) {;
        setDeploymentInfo(contractInfo);'
        setDeployStatus('deployed');"
        toast && toast.success("Smart contract deployed successfully!");
      } else {;'
        setDeployStatus('error');"
        toast && toast.error("Failed to deploy smart contract");
      }
    } catch (error) {;"
      console && console.error("Error deploying contract:", error);'
      setDeployStatus('error');"
      toast && toast.error("Failed to deploy smart contract");
    }
  };

  // Modified to match the expected interface;
  const handleFormSubmit = (contract: string) => {;
    // This should be a function that takes a string (contract content);'
    // Since we need to adapt the interface, we'll implement the simplest solution that works;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    setGeneratedContract(contract);
    setActiveTab("preview")
};

  return (  return (
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center">;
            <TabsList className="grid grid-cols-2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
=======
    setGeneratedContract(contract);"
    setActiveTab("preview");
  };


  return (

    <Dialog open={isOpen} onOpenChange={onClose}>;"
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;"
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;"
          <div className="flex justify-between items-center">;"
            <TabsList className="grid grid-cols-2">;"
              <TabsTrigger value="form">Contract Details</TabsTrigger>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
<<<<<<< HEAD
<<<<<<< HEAD
            </TabsList>;



                onClick={() => setTemplateManagerOpen(true)}"
                className="flex gap-1";
              >;"
                <Save className="h-4 w-4" />;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  }

                Templates;
              </Button>;
            </div>;
          </div>;



            <ContractForm;
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

            <ContractForm 

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              talent={talent}
              client_name={client_name}
              initial_values={form_values}



              onFormValuesChange={setFormValues}
              onContractGenerated={handleFormSubmit}
              deploy_options={deploy_options}
              onDeployOptionsChange={setDeployOptions}
<<<<<<< HEAD
<<<<<<< HEAD
            />
          </TabsContent>
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
                <ContractPreview
=======

                <ContractPreview 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  generatedContract={generatedContract}
=======
            </TabsList>;                  generatedContract={generatedContract}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            </TabsList>;                  generatedContract={generatedContract}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  talent={talent}
                  onClose={onClose}
                  deployStatus={deployStatus}
                  deploymentInfo={deploymentInfo}


<<<<<<< HEAD
                {!deploymentInfo && deployOptions && deployOptions.deployToChain && (;
                  <div className="mt-6 flex justify-center">;            />;
          </TabsContent>;
          <TabsContent value="preview" className="pt-4">;
<<<<<<< HEAD
<<<<<<< HEAD
            {generatedContract && (;
              <div>;
                <ContractPreview ;
                  generatedContract={generatedContract}                  talent={talent}
                  onClose={onClose}
                  deployStatus={deployStatus}
                  deploymentInfo={deploymentInfo}
                />;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    <Button
                      onClick={handleDeployContract}
                      disabled={deployStatus === 'deploying'}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">;
=======

                    <Button;
                      onClick={handleDeployContract}'
                      disabled={deployStatus === 'deploying'}"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>;
                )}


              </div>;
            )}

        <TemplateManager;
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



            />;
          </TabsContent>;"
          <TabsContent value="preview" className="pt - 4">;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            {generated_contract && (
              <div>;
                <ContractPreview;
                  generated_contract={generated_contract}
                  talent={talent}
                  on_close={on_close}
                  deploy_status={deploy_status}
                  deployment_info={deployment_info}
                />;
<<<<<<< HEAD
                {!deployment_info && deploy_options.deployToChain && (
                  <div className="mt - 6 flex justify-center">;
                    <Button;
                      on_click={handleDeployContract}
                      disabled={deploy_status === 'deploying'}
                      className="bg - gradient - to - r from - blue - 600 to - indigo - 600 hover:from - blue - 700 hover:to - indigo-700";
                    >;
=======
                {!deployment_info && deploy_options.deployToChain && ("
                  <div className="mt - 6 flex justify - center">;
                    <Button;
                      on_click={handleDeployContract}'
                      disabled={deploy_status === 'deploying'}"
                      className="bg - gradient - to - r from - blue - 600 to - indigo - 600 hover:from - blue - 700 hover:to - indigo - 700";
                    >;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  ),; interface SmartContractBuilderProps {
=======
}  ),; interface SmartContractBuilderProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}  ),; interface SmartContractBuilderProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




  ),; interface SmartContractBuilderProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  isOpen: boolean;
onClose: () => void;
talent: TalentProfile;
clientName: string;
onContractGenerated?: (contractContent: string) => void;
onDeploy?: (contractContent: string) => void;
}export function SmartContractBuilder ({};
  isOpen;
onClose;
talent;
clientName;
onContractGenerated;
onDeploy;
}: SmartContractBuilderProps) {}
  const [formValues, setFormValues] = useState<ContractFormValues | undefined> (undefined);
const [templateManagerOpen, setTemplateManagerOpen] = useState (false);
const [deployOptions, setDeployOptions] = useState<DeploymentOptions> ({'
  network: 'ethereum';
useEscrow: true;
deployToChain: false;
});'
const [deployStatus, setDeployStatus] = useState<string> ('');
const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null> (null);
const {}
  generateSolidityContract, deploySmartContract, deploymentStatus;
}= useSmartContracts ();
const handleLoadTemplate = (templateData: ContractFormValues) => {}
  setFormValues (templateData) 
};
//Convert ContractFormValues to contract content string const handleContractGenerated = async (formValues: ContractFormValues) => {}
  if (!formValues) return;
try {}
  setGeneratedContract (generatedContractText);"
setActiveTab ("preview");
  
}

<<<<<<< HEAD
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
setActiveTab ("preview")
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
}
        />
      </DialogContent>
    </Dialog>
  )
}
        />;
      </DialogContent>;
    </Dialog>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
