



  onContractGenerated;

  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({

  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({}
    network: 'ethereum'

    useEscrow: true

    deployToChain: false


  },





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


      }


      console.error("Error generating contract:", error),
      toast.error("Failed to generate smart contract")
    }

      


      } else {
        setDeployStatus ('error');

        toast.error ("Failed to deploy smart contract");
      }
    } catch (error) {}
  }


  };



export function SmartContractBuilder() { return null; }
  }),;'
  const [deployStatus, setDeployStatus] = useState<string>(''),;
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null),;
  const { generateSolidityContract, deploySmartContract, deploymentStatus } = useSmartContracts(),;
  const handleLoadTemplate = (templateData: ContractFormValues) => {;


    setGeneratedContract(contract),
    setActiveTab("preview")
  },






    try {;


    setGeneratedContract(contract);
    setActiveTab("preview");
  };
  return (

    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center">;
            <TabsList className="grid grid-cols-2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;


                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;


          </div>;


                <ContractPreview

                <ContractPreview 






        />;
      </DialogContent>;
    </Dialog>;
  );
}


