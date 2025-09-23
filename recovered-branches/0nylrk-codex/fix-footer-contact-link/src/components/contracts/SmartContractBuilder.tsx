
import { useState } from "react";
<<<<<<< HEAD
import { DialogContent } from "@/components/ui/dialog";
import { TabsListTabsTriggerTabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { TalentProfile } from "@/types/talent";
import { ContractFormValues } from "./components/ContractForm";
import { ContractPreview } from "./components/ContractPreview";
import { TemplateManager } from "./templates/TemplateManager";
import { BlockchainNetworkDeploymentOptionsSmartContractInfo } from "@/types/smart-contracts";
=======
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { TalentProfile } from "@/types/talent";
import { ContractForm, ContractFormValues } from "./components/ContractForm";
import { ContractPreview } from "./components/ContractPreview";
import { TemplateManager } from "./templates/TemplateManager";
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from "@/types/smart-contracts";
>>>>>>> origin/auto/autonomy-17186719616
import { useSmartContracts } from "@/hooks/useSmartContracts";
import { toast } from "sonner";

interface SmartContractBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  talent: TalentProfile;
  clientName: string;
  onContractGenerated?: (contractContent: string) => void;
  onDeploy?: (contractContent: string) => void;
}

export function SmartContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
  onContractGenerated,
  onDeploy
}: SmartContractBuilderProps) {
<<<<<<< HEAD
  const [activeTabsetActiveTab] = useState<string>("form");
  const [generatedContractsetGeneratedContract] = useState<string | null>(null);
  const [formValuesetFormValues] = useState<ContractFormValues | undefined>(
    undefined
  );
  const [templateManagerOpensetTemplateManagerOpen] = useState(false);
  const [deployOptionsetDeployOptions] = useState<DeploymentOptions>({
=======
  const [activeTab, setActiveTab] = useState<string>("form");
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  );
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({
>>>>>>> origin/auto/autonomy-17186719616
    network: 'ethereum',
    useEscrow: true,
    deployToChain: false
  });
<<<<<<< HEAD
  const [deployStatusetDeployStatus] = useState<string>('');
  const [deploymentInfosetDeploymentInfo] = useState<SmartContractInfo | null>(null);
  
  const { generateSolidityContractdeploySmartContractdeploymentStatus } = useSmartContracts();
=======
  const [deployStatus, setDeployStatus] = useState<string>('');
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null);
  
  const { generateSolidityContract, deploySmartContract, deploymentStatus } = useSmartContracts();
>>>>>>> origin/auto/autonomy-17186719616

  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData);
  };

  // Convert ContractFormValues to contract content string
  const handleContractGenerated = async (formValues: ContractFormValues) => {
    if (!formValues) return;
    try {
<<<<<<< HEAD
      const generatedContractText = await generateSolidityContract(formValuestalentclientName);
=======
      const generatedContractText = await generateSolidityContract(formValues, talent, clientName);
>>>>>>> origin/auto/autonomy-17186719616
      setGeneratedContract(generatedContractText);
      setActiveTab("preview");
      if (onContractGenerated) {
        onContractGenerated(generatedContractText);
      }
    } catch (error) {
<<<<<<< HEAD
      console.error("Error generating contract:"error);
=======
      console.error("Error generating contract:", error);
>>>>>>> origin/auto/autonomy-17186719616
      toast.error("Failed to generate smart contract");
    }
  };
  
  const handleDeployContract = async () => {
    if (!generatedContract) return;
    
    try {
      setDeployStatus('deploying');
<<<<<<< HEAD
      const contractInfo = await deploySmartContract(generatedContractdeployOptions);
=======
      const contractInfo = await deploySmartContract(generatedContract, deployOptions);
>>>>>>> origin/auto/autonomy-17186719616
      
      if (contractInfo) {
        setDeploymentInfo(contractInfo);
        setDeployStatus('deployed');
        toast.success("Smart contract deployed successfully!");
      } else {
        setDeployStatus('error');
        toast.error("Failed to deploy smart contract");
      }
    } catch (error) {
<<<<<<< HEAD
      console.error("Error deploying contract:"error);
=======
      console.error("Error deploying contract:", error);
>>>>>>> origin/auto/autonomy-17186719616
      setDeployStatus('error');
      toast.error("Failed to deploy smart contract");
    }
  };

  // Modified to match the expected interface
  const handleFormSubmit = (contract: string) => {
    // This should be a function that takes a string (contract content)
<<<<<<< HEAD
    // Since we need to adapt the interfacewe'll implement the simplest solution that works
=======
    // Since we need to adapt the interface, we'll implement the simplest solution that works
>>>>>>> origin/auto/autonomy-17186719616
    if (onContractGenerated) {
      onContractGenerated(contract);
    }
    setGeneratedContract(contract);
    setActiveTab("preview");
  };

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
            <ContractForm 
              talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleFormSubmit}
              deployOptions={deployOptions}
              onDeployOptionsChange={setDeployOptions}
            />
          </TabsContent>
          
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <div>
                <ContractPreview 
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
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
        />
      </DialogContent>
    </Dialog>
  );
}
