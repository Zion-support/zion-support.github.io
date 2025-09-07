interface SmartContractBuilderProps {
  isOpen: boolean;
    onClose: () => void;
talent: TalentProfile;
clientName: string;
onContractGenerated?: (contractContent: string) => void;}
onDeploy?: (contractContent: string) => void;}
import {useState} from \"react\";
import {Dialog, DialogContent} from \"@/components/ui/dialog\";
import {Tabs, TabsList, TabsTrigger, TabsContent} from \"@/components/ui/tabs\";
import {Button} from \"@/components/ui/button\";
import {Save} from \"lucide-react\";
import {TalentProfile} from \"@/types/talent\";
import {ContractForm, ContractFormValues} from \"./components/ContractForm\";
import {ContractPreview} from \"./components/ContractPreview\";
import {TemplateManager} from \"./templates/TemplateManager\";
import {BlockchainNetwork, DeploymentOptions, SmartContractInfo} from \"@/types/smart-contracts\";
import {useSmartContracts} from \"@/hooks/useSmartContracts\";
import {toast} from \"sonner\";
interface SmartContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;
  onContractGenerated?: (contractContent: string) => void,;}
  onDeploy?: (contractContent: string) => void;}
}
export function SmartContractBuilder(): any ({;
export function SmartContractBuilder({;export function SmartContractBuilder({;
  isOpen;
  onClose;
  talent;
  clientName;
  onContractGenerated;  const [deployOptions, setDeployOptions] = useState<DeploymentOptions />({
    network: \"network\",
    useEscrow: true;}
deployToChain: false}
  }),
  const [deployStatus, setDeployStatus] = useState<string />(''),
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null />(null),
  const { generateSolidityContract, deploySmartContract, deploymentStatus } = useSmartContracts(),
  const handleLoadTemplate = (
    setFormValues(templateData)) => {
  return $3;}
}
  },
  // Convert ContractFormValues to contract content string;
const handleContractGenerated = async (formValues: ContractFormValues) => {
    if (!formValues) return;
try {      const generatedContractText = await generateSolidityContract(formValues, talent, clientName);
      setGeneratedContract(generatedContractText);
      setActiveTab(\"preview\");
      if (onContractGenerated) {;}
        onContractGenerated(generatedContractText);}
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
  onContractGenerated?: (contract_content: string) => void,}
  on_deploy?: (contract_content: string) => void;}
}
export /**
 * SmartContractBuilder - Function description;
 */
function SmartContractBuilder() {
  const [active_tab, setActiveTab] = useState < string>(\"form\");
  const [generated_contract, setGeneratedContract] = useState < string | null>(null);
  const [form_values, setFormValues] = useState < ContractFormValues | undefined>(
    undefined);
  const [templateManagerOpen, setTemplateManagerOpen] = useState (false);
  const [deploy_options, setDeployOptions] = useState < DeploymentOptions>({
    network: 'ethereum',
  use_escrow: true,}
    deployToChain: false;}
  });
  const [deploy_status, setDeployStatus] = useState < string>('');
  const [deployment_info, setDeploymentInfo] = useState < SmartContractInfo | null>(null);
;
  const { generateSolidityContract, deploySmartContract, deployment_status } = useSmartContracts ();
;
  const handleLoadTemplate = (template_data: ContractFormValues) =>: any {}
    setFormValues (template_data);}
  }
;
  // Convert ContractFormValues to contract content string;
  const handleContractGenerated = async (form_values: ContractFormValues) => {
    // Check condition;
if (return, ) {}
  $2}
}
    try {
      const generatedContractText = await generateSolidityContract (form_values, talent, client_name);
      setGeneratedContract (generatedContractText);
      setActiveTab (\"preview\");
      // Check condition;
if ( {) {}
  $2}
}
        onContractGenerated (generatedContractText);
      }      }
    } catch (error) {
      console.error(\"Error generating contract:\", error),}
      toast.error(\"Failed to generate smart contract\")}
    };
  const handleDeployContract = async () => {
    // Check condition;
if (return) {}
  $2}
}
    try {
      setDeployStatus ('deploying');
      const contract_info = await deploySmartContract (generated_contract, deploy_options);
;
      // Check condition;
if ( {) {}
  $2}
}
        setDeploymentInfo (contract_info);
        setDeployStatus ('deployed');
        toast.success (\"Smart contract deployed successfully!\");
      } else {
        setDeployStatus ('error');}
        toast.error (\"Failed to deploy smart contract\");}
      }
    } catch (error) {}
  }
  }
};
      console.error(\"Error deploying contract:\", error),
      setDeployStatus('error'),
      toast.error(\"Failed to deploy smart contract\")
import { useState } from \"react\";
import { Dialog, DialogContent } from \"@/components/ui/dialog\";
import { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\",;
import { Button } from \"@/components/ui/button\",;
import { Save } from \"lucide-react\",;
import { TalentProfile } from \"@/types/talent\",;
import { ContractForm, ContractFormValues } from \"./components/ContractForm\",;
import { ContractPreview } from \"./components/ContractPreview\",;
import { TemplateManager } from \"./templates/TemplateManager\",;
import { BlockchainNetwork, DeploymentOptions, SmartContractInfo } from \"@/types/smart-contracts\",;
import { useSmartContracts } from \"@/hooks/useSmartContracts\",;
import { toast } from \"sonner\",;
interface SmartContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;
  onContractGenerated?: (contractContent: string) => void,;}
  onDeploy?: (contractContent: string) => void;}
}
;
export function SmartContractBuilder({;
  isOpen,;
  onClose,;
  talent,;
  clientName,;
  onContractGenerated,;}
  onDeploy;}
}: SmartContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string />(\"form\"),;
  const [generatedContract, setGeneratedContract] = useState<string | null />(null),;
  const [formValues, setFormValues] = useState<ContractFormValues | undefined />(;
    undefined;
  ),;
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false),;
  const [deployOptions, setDeployOptions] = useState<DeploymentOptions />({;
    network: 'ethereum',;
    useEscrow: true,;}
    deployToChain: false;}
  }),;
  const [deployStatus, setDeployStatus] = useState<string />(''),;
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null />(null),;
  const { generateSolidityContract, deploySmartContract, deploymentStatus } = useSmartContracts(),;
  const handleLoadTemplate = (;
    setFormValues(templateData);) => {
  return $3;}
}
  },;
  // Convert ContractFormValues to contract content string;
  const handleContractGenerated = async (formValues: ContractFormValues) => {;
    if (!formValues) return,;
    try {;
      const generatedContractText = await generateSolidityContract(formValues, talent, clientName),;
      setGeneratedContract(generatedContractText),;
      setActiveTab(\"preview\"),;
      if (onContractGenerated) {;}
        onContractGenerated(generatedContractText);}
      }
    } catch (error) {;
      console.error(\"Error generating contract:\", error),;}
      toast.error(\"Failed to generate smart contract\");}
    }
  }
  // Modified to match the expected interface;
const handleFormSubmit = (
    // This should be a function that takes a string (contract content)
    // Since we need to adapt the interface, we'll implement the simplest solution that works;
if (onContractGenerated) {
      onContractGenerated(contract)) => {
  return $3;}
}
    }
    setGeneratedContract(contract);
    setActiveTab(\"preview\")    } catch (error) {;
      console && console.error(\"Error generating contract:\", error);}
      toast && toast.error(\"Failed to generate smart contract\");}
    }
  };
  const handleDeployContract = async () => {;
    if (!generatedContract) return;
    try {;
      setDeployStatus('deploying');
      const contractInfo = await deploySmartContract(generatedContract, deployOptions);
      if (contractInfo) {;
        setDeploymentInfo(contractInfo);
        setDeployStatus('deployed');}
        toast && toast.success(\"Smart contract deployed successfully!\");}
      } else {;
        setDeployStatus('error');}
        toast && toast.error(\"Failed to deploy smart contract\");}
      }
    } catch (error) {;
      console && console.error(\"Error deploying contract:\", error);
      setDeployStatus('error');}
      toast && toast.error(\"Failed to deploy smart contract\");}
    }
  };
  // Modified to match the expected interface;
  const handleFormSubmit = (;
    // This should be a function that takes a string (contract content);
    // Since we need to adapt the interface, we'll implement the simplest solution that works;
    if (onContractGenerated) {;
      onContractGenerated(contract);) => {
  return $3;}
}
    }
    setGeneratedContract(contract);
    setActiveTab(\"preview\")
};
  return (  return (
    <Dialog open={isOpen} onOpenChange={onClose} />;
      <DialogContent className=\"max-w-4xl max-h-[90vh] overflow-y-auto\" />;
        <Tabs value={activeTab} onValueChange={setActiveTab} className=\"mt-4\" />;
          <div className=\"flex justify-between items-center\" />;
            <TabsList className=\"grid grid-cols-2\" />;
              <TabsTrigger value=\"form\" />Contract Details</TabsTrigger>;
              <TabsTrigger value=\"preview\" disabled={!generatedContract} />Preview</TabsTrigger>;
            </TabsList>;                  generatedContract={generatedContract}
                  talent={talent}
                  onClose={onClose}
                  deployStatus={deployStatus}
                  deploymentInfo={deploymentInfo}
                />;
                {!deploymentInfo && deployOptions && deployOptions.deployToChain && (;
                  <div className=\"mt-6 flex justify-center\" />;            />;
          </TabsContent>;
          <TabsContent value=\"preview\" className=\"pt-4\" />;
            {generated_contract && (
              <div />;}
                <ContractPreview;}
                  generated_contract={generated_contract}
                  talent={talent}
                  on_close={on_close}
                  deploy_status={deploy_status}
                  deployment_info={deployment_info}
                />;
                {!deployment_info && deploy_options.deployToChain && (
                  <div className=\"mt - 6 flex justify-center\" />;}
                    <Button;}
                      on_click={handleDeployContract}
                      disabled={deploy_status === 'deploying'}
                      className=\"bg - gradient - to - r from - blue - 600 to - indigo - 600 hover:from - blue - 700 hover:to - indigo-700\";
                     />;
                      {deploy_status === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>)}
              </div>)}
          </TabsContent>;
        </Tabs>;
        <TemplateManager;
          is_open={templateManagerOpen}
          on_close={() = /> setTemplateManagerOpen (false)}
          onSelectTemplate={handleLoadTemplate}
          current_values={form_values}
        />;
      </DialogContent>;
    </Dialog>);
}  ),; interface SmartContractBuilderProps {
  isOpen: boolean;
onClose: () => void;
talent: TalentProfile;
clientName: string;
onContractGenerated?: (contractContent: string) => void;}
onDeploy?: (contractContent: string) => void }
}export function SmartContractBuilder ({
  isOpen;
onClose;
talent;
clientName;
onContractGenerated;}
onDeploy }
}: SmartContractBuilderProps) {
  const [formValues, setFormValues] = useState<ContractFormValues | undefined /> (undefined);
const [templateManagerOpen, setTemplateManagerOpen] = useState (false);
const [deployOptions, setDeployOptions] = useState<DeploymentOptions /> ({
  network: 'ethereum';
useEscrow: true;}
deployToChain: false }
});
const [deployStatus, setDeployStatus] = useState<string /> ('');
const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null /> (null);
const {}
  generateSolidityContract, deploySmartContract, deploymentStatus }
}= useSmartContracts ();
const handleLoadTemplate = (
  setFormValues (templateData) ) => {
  return $3;}
}
};
//Convert ContractFormValues to contract content string const handleContractGenerated = async (formValues: ContractFormValues) => {
  if (!formValues) return;
try {
  setGeneratedContract (generatedContractText);}
setActiveTab (\"preview\");}
}
};
const handleDeployContract = async () => {
  if (!generatedContract) return;
try {
  setDeployStatus ('deploying');
const contractInfo = await deploySmartContract (generatedContract, deployOptions);}
if (contractInfo) {}
}
};
//This should be a function that takes a string (contract content) //Since we need to adapt the interface, we'll implement the simplest solution that works if (onContractGenerated) {
  setGeneratedContract (contract);}
setActiveTab (\"preview\")}
};
  talent;
}clientName= {}
  clientName }
}initialValues= {}
  formValues }
}onFormValuesChange= {}
  setFormValues }
}onContractGenerated= {}
  handleFormSubmit }
}deployOptions= {}
  deployOptions }
}onDeployOptionsChange= {}
  setDeployOptions }
}/> </TabsContent> <div /> <ContractPreview generatedContract= {}
  generatedContract }
}talent= {}
  talent }
}onClose= {}
  onClose }
}deployStatus= {}
  deployStatus }
}deploymentInfo= {}
  deploymentInfo }
}/> > {}
  deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain' }
}</Button> </div>) 
}</div>) 
}</TabsContent> </Tabs> <TemplateManager isOpen= {}
  templateManagerOpen }
}onClose= {}
  () = /> setTemplateManagerOpen (false) }
}onSelectTemplate= {}
  handleLoadTemplate }
}currentValues= {}
  formValues }
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df;