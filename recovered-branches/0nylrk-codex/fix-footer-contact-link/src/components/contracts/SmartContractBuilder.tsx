
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
import { toast } from "sonner",interface SmartContractBuilderProps {
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
  const [activeTab, setActiveTab] = useState<string>("form"),
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
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

  // Convert ContractFormValues to contract content string,
const handleContractGenerated = async (formValues: ContractFormValues) => {
    if (!formValues) return,
    try {
      const generatedContractText = await generateSolidityContract(formValues, talent, clientName),
      setGeneratedContract(generatedContractText),
      setActiveTab("preview"),      setGeneratedContract(generatedContractText);
      setActiveTab(&quot;preview&quot;);
      if (onContractGenerated) {
        onContractGenerated(generatedContractText)
      }
    } catch (error) {
      console.error("Error generating contract:", error),
      toast.error("Failed to generate smart contract")    }
  },
  
  const handleDeployContract = async () => {
    if (!generatedContract) return,
    
    try {
      setDeployStatus('deploying'),
      const contractInfo = await deploySmartContract(generatedContract, deployOptions),
      
      if (contractInfo) {
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
      toast.error("Failed to deploy smart contract")    }
  },
        onContractGenerated(generatedContractText)}
    } catch (error) {toast.error("Failed to generate smart contract")}
  };
  
  const handleDeployContract = async () => {if (!generatedContract) return;
    
    try {
      setDeployStatus('deploying');
      const contractInfo = await deploySmartContract(generatedContract, deployOptions);
      
      if (contractInfo) {
        setDeploymentInfo(contractInfo);
        setDeployStatus('deployed');
        toast.success("Smart contract deployed successfully!")} else {setDeployStatus('error');
        toast.error("Failed to deploy smart contract")}
    } catch (error) {setDeployStatus('error');
      toast.error("Failed to deploy smart contract")}
  };

  // Modified to match the expected interface,
const handleFormSubmit = (contract: string) => {_// This should be a function that takes a string (contract content)
    // Since we need to adapt the interface, we'll implement the simplest solution that works,
if (onContractGenerated) {
      onContractGenerated(contract)
    }
    setGeneratedContract(contract),
    setActiveTab("preview")
  },    setGeneratedContract(contract);
    setActiveTab(&quot;preview&quot;)
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=&quot;max-w-4xl max-h-[90vh] overflow-y-auto&quot;>
        <Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;mt-4&quot;>
          <div className=&quot;flex justify-between items-center&quot;>
            <TabsList className=&quot;grid grid-cols-2&quot;>
              <TabsTrigger value=&quot;form&quot;>Contract Details</TabsTrigger>
              <TabsTrigger value=&quot;preview&quot; disabled={!generatedContract}>Preview</TabsTrigger>            </TabsList>
            
            <div className=&quot;flex gap-2&quot;>
              <Button,
variant=&quot;outline&quot; 
                size=&quot;sm&quot;
                onClick={() => setTemplateManagerOpen(true)}
                className=&quot;flex gap-1&quot;              >
                <Save className=&quot;h-4 w-4&quot; />
                Templates
              </Button>
            </div>
          </div>
          
          <TabsContent value=&quot;form&quot; className=&quot;pt-4&quot;>
            <ContractForm,
talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleFormSubmit}
              deployOptions={deployOptions}
              onDeployOptionsChange={setDeployOptions}
            />
          </TabsContent>
          
          <TabsContent value=&quot;preview&quot; className=&quot;pt-4&quot;>
            {generatedContract && (              <div>
                <ContractPreview,
generatedContract={generatedContract}
                  talent={talent}
                  onClose={onClose}
                  deployStatus={deployStatus}
                  deploymentInfo={deploymentInfo}
                />
                
                {!deploymentInfo && deployOptions.deployToChain && (
                  <div className=&quot;mt-6 flex justify-center&quot;>
                    <Button,
onClick={handleDeployContract}
                      disabled={deployStatus === 'deploying'}
                      className=&quot;bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700&quot;                    >
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <TemplateManager,
isOpen={templateManagerOpen}
          onClose={_() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}
        />
      </DialogContent>
    </Dialog>
  )
}
