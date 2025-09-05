
<<<<<<< HEAD
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
import { useSmartContracts } from "@/hooks/useSmartContracts",
import { toast } from "sonner",
=======
import { useState } from &quot;react&quot;;
import { Dialog, DialogContent } from &quot;@/components/ui/dialog&quot;;
import { Tabs, TabsList, TabsTrigger, TabsContent } from &quot;@/components/ui/tabs&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Save } from &quot;lucide-react&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { ContractForm, ContractFormValues } from &quot;./components/ContractForm&quot;;
import { ContractPreview } from &quot;./components/ContractPreview&quot;;
import { TemplateManager } from &quot;./templates/TemplateManager&quot;;
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from &quot;@/types/smart-contracts&quot;;
import { useSmartContracts } from &quot;@/hooks/useSmartContracts&quot;;
import { toast } from &quot;sonner&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SmartContractBuilderProps {
  isOpen: boolean,
  onClose: () => void,
  talent: TalentProfile,
  clientName: string,
  onContractGenerated?: (contractContent: string) => void,
  onDeploy?: (contractContent: string) => void
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
  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
=======
  const [activeTab, setActiveTab] = useState<string>(&quot;form&quot;);
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  ),
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),
  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({
    network: 'ethereum',
    useEscrow: true,
    deployToChain: false
  }),
  const [deployStatus, setDeployStatus] = useState<string>(''),
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null),
  
  const { generateSolidityContract, deploySmartContract, deploymentStatus } = useSmartContracts(),

  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)
  },

  // Convert ContractFormValues to contract content string
  const handleContractGenerated = async (formValues: ContractFormValues) => {
    if (!formValues) return,
    try {
<<<<<<< HEAD
      const generatedContractText = await generateSolidityContract(formValues, talent, clientName),
      setGeneratedContract(generatedContractText),
      setActiveTab("preview"),
=======
      const generatedContractText = await generateSolidityContract(formValues, talent, clientName);
      setGeneratedContract(generatedContractText);
      setActiveTab(&quot;preview&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      if (onContractGenerated) {
        onContractGenerated(generatedContractText)
      }
    } catch (error) {
<<<<<<< HEAD
      console.error("Error generating contract:", error),
      toast.error("Failed to generate smart contract")
=======
      console.error(&quot;Error generating contract:&quot;, error);
      toast.error(&quot;Failed to generate smart contract&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
  const handleDeployContract = async () => {
    if (!generatedContract) return,
    
    try {
      setDeployStatus('deploying'),
      const contractInfo = await deploySmartContract(generatedContract, deployOptions),
      
      if (contractInfo) {
<<<<<<< HEAD
        setDeploymentInfo(contractInfo),
        setDeployStatus('deployed'),
        toast.success("Smart contract deployed successfully!")
      } else {
        setDeployStatus('error'),
        toast.error("Failed to deploy smart contract")
      }
    } catch (error) {
      console.error("Error deploying contract:", error),
      setDeployStatus('error'),
      toast.error("Failed to deploy smart contract")
=======
        setDeploymentInfo(contractInfo);
        setDeployStatus('deployed');
        toast.success(&quot;Smart contract deployed successfully!&quot;);
      } else {
        setDeployStatus('error');
        toast.error(&quot;Failed to deploy smart contract&quot;);
      }
    } catch (error) {
      console.error(&quot;Error deploying contract:&quot;, error);
      setDeployStatus('error');
      toast.error(&quot;Failed to deploy smart contract&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  },;
  // Modified to match the expected interface;
  const handleFormSubmit = (contract: string) => {;
    // This should be a function that takes a string (contract content);
    // Since we need to adapt the interface, we'll implement the simplest solution that works;
    if (onContractGenerated) {;
      onContractGenerated(contract);
    }
<<<<<<< HEAD
<<<<<<< HEAD
    setGeneratedContract(contract),
    setActiveTab("preview")
  },
=======
    setGeneratedContract(contract);
    setActiveTab(&quot;preview&quot;);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=&quot;max-w-4xl max-h-[90vh] overflow-y-auto&quot;>
        <Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;mt-4&quot;>
          <div className=&quot;flex justify-between items-center&quot;>
            <TabsList className=&quot;grid grid-cols-2&quot;>
              <TabsTrigger value=&quot;form&quot;>Contract Details</TabsTrigger>
              <TabsTrigger value=&quot;preview&quot; disabled={!generatedContract}>Preview</TabsTrigger>
            </TabsList>
            
            <div className=&quot;flex gap-2&quot;>
              <Button 
                variant=&quot;outline&quot; 
                size=&quot;sm&quot;
                onClick={() => setTemplateManagerOpen(true)}
                className=&quot;flex gap-1&quot;
              >
                <Save className=&quot;h-4 w-4&quot; />
                Templates
              </Button>
            </div>
          </div>
          
          <TabsContent value=&quot;form&quot; className=&quot;pt-4&quot;>
            <ContractForm 
=======
    setGeneratedContract(contract);
    setActiveTab("preview");
  };
  return (;
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center">;
            <TabsList className="grid grid-cols-2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;
            <div className="flex gap-2">;
              <Button;
                variant="outline";
                size="sm";
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;
            </div>;
          </div>;
          <TabsContent value="form" className="pt-4">;
            <ContractForm;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleFormSubmit}
              deployOptions={deployOptions}
              onDeployOptionsChange={setDeployOptions}
<<<<<<< HEAD
            />
          </TabsContent>
          
          <TabsContent value=&quot;preview&quot; className=&quot;pt-4&quot;>
            {generatedContract && (
              <div>
                <ContractPreview 
=======
            />;
          </TabsContent>;
          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;
              <div>;
                <ContractPreview;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  generatedContract={generatedContract}
                  talent={talent}
                  onClose={onClose}
                  deployStatus={deployStatus}
                  deploymentInfo={deploymentInfo}
<<<<<<< HEAD
                />
                
                {!deploymentInfo && deployOptions.deployToChain && (
                  <div className=&quot;mt-6 flex justify-center&quot;>
                    <Button 
                      onClick={handleDeployContract}
                      disabled={deployStatus === 'deploying'}
                      className=&quot;bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700&quot;
                    >
=======
                />;
                {!deploymentInfo && deployOptions.deployToChain && (;
                  <div className="mt-6 flex justify-center">;
                    <Button;
                      onClick={handleDeployContract}
                      disabled={deployStatus === 'deploying'}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700";
                    >;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>;
                )}
              </div>;
            )}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
        />;
      </DialogContent>;
    </Dialog>;
  );
}
;