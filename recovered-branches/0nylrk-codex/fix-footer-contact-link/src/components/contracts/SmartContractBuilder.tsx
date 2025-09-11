



interface SmartContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string
  onContractGenerated?: (contractContent: string) => void

  onDeploy?: (contractContent: string) => void

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
  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string
  onContractGenerated?: (contractContent: string) => void

  onDeploy?: (contractContent: string) => void
}
export function SmartContractBuilder(): any ({;

}



  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({

    network: 'ethereum'
    useEscrow: true

    deployToChain: false
  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)
  }
  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)
  },

  const handleContractGenerated = async (formValues: ContractFormValues) => {
    if (!formValues) return
    try {
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
      const generatedContractText = await generateSolidityContract(formValues, talent, clientName);
      setGeneratedContract(generatedContractText);
      setActiveTab("preview");
      if (onContractGenerated) {;
        onContractGenerated(generatedContractText);
      const generatedContractText = await generateSolidityContract(formValues, talent, clientName),
      setGeneratedContract(generatedContractText),
      setActiveTab("preview"),
      if (onContractGenerated) {
        onContractGenerated(generatedContractText)
      }
    } catch (error) {
      console.error("Error generating contract:", error),
      toast.error("Failed to generate smart contract")
    }=======  },
  
  const handleDeployContract = async () => {
    if (!generatedContract) return,
    
    try {
      setDeployStatus('deploying'),
      const contractInfo = await deploySmartContract(generatedContract, deployOptions),
      

        setDeploymentInfo(contractInfo);
        setDeployStatus('deployed');
        toast.success("Smart contract deployed successfully!")
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
  };  // Modified to match the expected interface;
  const handleFormSubmit = (contract: string) => {;
    // This should be a function that takes a string (contract content);
    // Since we need to adapt the interface, we'll implement the simplest solution that works;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
    setGeneratedContract(contract);
    setActiveTab("preview");
  };
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
            <ContractForm
            <ContractForm 
    setGeneratedContract(contract);
    setActiveTab("preview");
  };
  return (;

  return (    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center">;
            <TabsList className="grid grid-cols-2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;
            <div className="flex gap-2">;
              <Button
                variant="outline" 
                size="sm"
          ;
          <TabsContent value="form" className="pt-4">;
            <ContractForm ;
              talent={talent}              clientName={clientName}
              initialValues={formValues}
            <ContractForm;


            <ContractForm 
              talent={talent}
              client_name={client_name}
              initial_values={form_values}
            />;
          </TabsContent>;
                <ContractPreview

                <ContractPreview 

                {!deploymentInfo && deployOptions && deployOptions.deployToChain && (;
                  <div className="mt-6 flex justify-center">;

                    <Button
                      onClick={handleDeployContract}
                      disabled={deployStatus === 'deploying'}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">;
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>;
                )}
              </div>;
            )}

          </TabsContent>;
        </Tabs>;


          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}