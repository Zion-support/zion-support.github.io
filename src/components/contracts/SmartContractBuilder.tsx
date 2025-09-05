<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
import { TemplateManager } from "./templates/TemplateManager",
import { DeploymentOptions, SmartContractInfo } from "@/types/smart-contracts",
import { useSmartContracts } from "@/hooks/useSmartContracts",
import { toast } from "sonner",
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import { useState } from &quot;react&quot;;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from &quot;@/components/ui/dialog&quot;;
import { Tabs, TabsList, TabsTrigger, TabsContent } from &quot;@/components/ui/tabs&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Save } from 'lucide-react'
import { TalentProfile } from &quot;@/types/talent&quot;;
import { ContractForm, ContractFormValues } from &quot;./components/ContractForm&quot;;
import { ContractPreview } from &quot;./components/ContractPreview&quot;;
import { TemplateManager } from &quot;./templates/TemplateManager&quot;;
import { DeploymentOptions, SmartContractInfo } from &quot;@/types/smart-contracts&quot;;
import { useSmartContracts } from &quot;@/hooks/useSmartContracts&quot;;
import { toast } from &quot;sonner&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SmartContractBuilderProps {
  isOpen: boolean,
  onClose: () => void,
  talent: TalentProfile,
  clientName: string,
  onContractGenerated?: (contractContent: string) => void
}

export function SmartContractBuilder({
  isOpen,
  onClose,
  talent,
  clientName,
  onContractGenerated}: SmartContractBuilderProps) {
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
  const [deployOptions, _setDeployOptions] = useState<DeploymentOptions>({
    network: 'ethereum',
    useEscrow: true,
    deployToChain: false
  }),
  const [deployStatus, setDeployStatus] = useState<string>(''),
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null),
  
  const { deploySmartContract } = useSmartContracts(),

  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)
  },

  // Convert ContractFormValues to contract content string
  
  const handleDeployContract = async () => {
    if (!generatedContract) return,
    
    try {
      setDeployStatus('deploying'),
      const contractInfo = await deploySmartContract(generatedContract, deployOptions),
=======


interface SmartContractBuilderProps {_isOpen: boolean;
  onClose: () => void;
  talent: TalentProfile;
  clientName: string;
  onContractGenerated?: (_contractContent: string) => void;}

export function SmartContractBuilder(_{_isOpen, _onClose, _talent, _clientName, _onContractGenerated}: SmartContractBuilderProps) {_const [activeTab, _setActiveTab] = useState<string>("form");
  const [generatedContract, _setGeneratedContract] = useState<string | null>(null);
  const [formValues, _setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  );
  const [templateManagerOpen, _setTemplateManagerOpen] = useState(false);
  const [deployOptions, _setDeployOptions] = useState<DeploymentOptions>({
    network: 'ethereum', _useEscrow: true, _deployToChain: false});
  const [deployStatus, setDeployStatus] = useState<string>('');
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null);
  
  const {_deploySmartContract} = useSmartContracts();

  const _handleLoadTemplate = (_templateData: ContractFormValues) => {_setFormValues(templateData);};

  // Convert ContractFormValues to contract content string
  
  const _handleDeployContract = async () => {_if (!generatedContract) return;
    
    try {
      setDeployStatus('deploying');
      const _contractInfo = await deploySmartContract(generatedContract, _deployOptions);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
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
      logErrorToProduction('Error deploying contract:', { data: error }),
      setDeployStatus('error'),
      toast.error("Failed to deploy smart contract")
=======
        setDeploymentInfo(contractInfo);
        setDeployStatus('deployed');
<<<<<<< HEAD
        toast.success(&quot;Smart contract deployed successfully!&quot;);
      } else {
        setDeployStatus('error');
        toast.error(&quot;Failed to deploy smart contract&quot;);
      }
    } catch (error) {
      logErrorToProduction('Error deploying contract:', { data: error });
=======
        toast.success("Smart contract deployed successfully!");} else {_setDeployStatus('error');
        toast.error("Failed to deploy smart contract");}
    } catch (error) {_logErrorToProduction('Error deploying contract:', _{ data: error});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      setDeployStatus('error');
      toast.error(&quot;Failed to deploy smart contract&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  // Modified to match the expected interface
  const _handleFormSubmit = (_contract: string) => {_// This should be a function that takes a string (_contract content)
    // Since we need to adapt the interface, _we'll implement the simplest solution that works
    if (onContractGenerated) {
<<<<<<< HEAD
      onContractGenerated(contract)
    }
<<<<<<< HEAD
    setGeneratedContract(contract),
    setActiveTab("preview")
  },
=======
=======
      onContractGenerated(contract);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    setGeneratedContract(contract);
    setActiveTab(&quot;preview&quot;);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=&quot;max-w-4xl max-h-[90vh] overflow-y-auto&quot;>
        <DialogHeader>
          <DialogTitle>Smart Contract Builder</DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;mt-4&quot;>
          <div className=&quot;flex justify-between items-center&quot;>
            <TabsList className=&quot;grid grid-cols-2&quot;>
              <TabsTrigger value=&quot;form&quot;>Contract Details</TabsTrigger>
              <TabsTrigger value=&quot;preview&quot; disabled={!generatedContract}>Preview</TabsTrigger>
=======
  return (_<Dialog open={_isOpen} onOpenChange={_onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Smart Contract Builder</DialogTitle>
        </DialogHeader>
        <Tabs value={_activeTab} onValueChange={_setActiveTab} className="mt-4">
          <div className="flex justify-between items-center">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="form">Contract Details</TabsTrigger>
              <TabsTrigger value="preview" disabled={_!generatedContract}>Preview</TabsTrigger>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </TabsList>
            
            <div className=&quot;flex gap-2&quot;>
              <Button 
<<<<<<< HEAD
                variant=&quot;outline&quot; 
                size=&quot;sm&quot;
                onClick={() => setTemplateManagerOpen(true)}
                className=&quot;flex gap-1&quot;
=======
                variant="outline" 
                size="sm"
                onClick={_() => setTemplateManagerOpen(true)}
                className="flex gap-1"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Save className=&quot;h-4 w-4&quot; />
                Templates
              </Button>
            </div>
          </div>
          
          <TabsContent value=&quot;form&quot; className=&quot;pt-4&quot;>
            <ContractForm 
              talent={_talent}
              clientName={_clientName}
              initialValues={_formValues}
              onFormValuesChange={_setFormValues}
              onContractGenerated={_handleFormSubmit}
            />
          </TabsContent>
          
<<<<<<< HEAD
          <TabsContent value=&quot;preview&quot; className=&quot;pt-4&quot;>
            {generatedContract && (
=======
          <TabsContent value="preview" className="pt-4">
            {_generatedContract && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <div>
                <ContractPreview 
                  generatedContract={generatedContract}
                  talent={_talent}
                  onClose={_onClose}
                  deploymentInfo={_deploymentInfo}
                />
                
<<<<<<< HEAD
                {!deploymentInfo && deployOptions.deployToChain && (
                  <div className=&quot;mt-6 flex justify-center&quot;>
                    <Button 
                      onClick={handleDeployContract}
                      disabled={deployStatus === 'deploying'}
                      className=&quot;bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700&quot;
=======
                {_!deploymentInfo && deployOptions.deployToChain && (
                  <div className="mt-6 flex justify-center">
                    <Button 
                      onClick={handleDeployContract}
                      disabled={_deployStatus === 'deploying'}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      {_deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <TemplateManager
          isOpen={_templateManagerOpen}
          onClose={_() => setTemplateManagerOpen(false)}
          onSelectTemplate={_handleLoadTemplate}
          currentValues={_formValues}
        />
      </DialogContent>
    </Dialog>
  )
}
