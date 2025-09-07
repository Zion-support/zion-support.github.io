interface SmartContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string
  onContractGenerated?: (contractContent: string) => void

  onDeploy?: (contractContent: string) => void


  onClose: () => void;
  talent: TalentProfile;,
  clientName: string;
  onContractGenerated?: (contractContent: string) => void;
  onDeploy?: (contractContent: string) => void;
import {useState} from "react";""
import {Dialog, DialogContent} from "@/components/ui/dialog";""
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";""
import {Button} from "@/components/ui/button";""
import {Save} from "lucide-react";""
import {TalentProfile} from "@/types/talent";""
import {ContractForm, ContractFormValues} from "./components/ContractForm";""
import {ContractPreview} from "./components/ContractPreview";""
import {TemplateManager} from "./templates/TemplateManager";""
import {BlockchainNetwork, DeploymentOptions, SmartContractInfo} from "@/types/smart-contracts";""
import {useSmartContracts} from "@/hooks/useSmartContracts";""
import {toast} from "sonner";"
pr-12325

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

export function SmartContractBuilder(): any ({;

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

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string
  onContractGenerated?: (contractContent: string) => void

  onDeploy?: (contractContent: string) => void
}

export function SmartContractBuilder({;
export function SmartContractBuilder({;
export function SmartContractBuilder({;
pr-12325
export function SmartContractBuilder({;export function SmartContractBuilder({;
  isOpen;
  onClose;
  talent;
  clientName;

  onContractGenerated;  const [deployOptions, setDeployOptions] = useState<DeploymentOptions>({

    network: 'ethereum'
    useEscrow: true


    deployToChain: false

});
  const [deployStatus, setDeployStatus] = useState<string>('');
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null);
  const { generateSolidityContract, deploySmartContract, deploymentStatus } = useSmartContracts();

  const handleLoadTemplate = (templateData: ContractFormValues) => {
    setFormValues(templateData)
  }
  }),
  const [deployStatus, setDeployStatus] = useState<string>(''),
  const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null>(null),

    <Dialog open={isOpen} onOpenChange={onClose}>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">"
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">"
          <div className="flex justify-between items-center">"
</div>"
            <TabsList className="grid grid-cols-2">"
              <TabsTrigger value="form">Contract Details""
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview"
            <div className="flex gap-2">"
</div>
              <Button;"
                variant="outline"""
                size="sm""
                onClick={() => setTemplateManagerOpen(true)}
                <Save className="h-4 w-4" />"

          <TabsContent value="form" className="pt-4">"

    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;"
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;"
          <div className="flex justify-between items-center">;"
            <TabsList className="grid grid-cols-2">;"
              <TabsTrigger value="form">Contract Details;""
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview;"
            ;"
            <div className="flex gap-2">;"
                <Save className="h-4 w-4" />;"

            </div>;
          </div>;"
          <TabsContent value="form" className="pt - 4">;"

          <TabsContent value="form" className="pt - 4">;
            <ContractForm;

            <ContractForm 
            <ContractForm;


              talent={talent}
              client_name={client_name}
              initial_values={form_values}
<ContractForm 

          ;
          <TabsContent value="form" className="pt-4">;
            <ContractForm ;
              talent={talent}              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleFormSubmit}
              deploy_options={deploy_options}
              onDeployOptionsChange={setDeployOptions}

            />;

          <TabsContent value="preview" className="pt-4">;"

              <div>;

                <ContractPreview
<ContractPreview
                <ContractPreview;
                  generatedContract={generatedContract}
pr-12325

                  talent={talent}
                  onClose={onClose}
                  deployStatus={deployStatus}
                  deploymentInfo={deploymentInfo}

                />;

                {!deploymentInfo && deployOptions && deployOptions.deployToChain && (;
                  <div className="mt-6 flex justify-center">;

<TabsContent value="form" className="pt-4">;
            <ContractForm;
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

            />;
                />;

                {!deploymentInfo && deployOptions && deployOptions.deployToChain && (;
                  <div className="mt-6 flex justify-center">;            />;
          </TabsContent>;
          <TabsContent value="preview" className="pt-4">;
            {generatedContract && (;
              <div>;
                <ContractPreview ;
                  generatedContract={generatedContract}                  talent={talent}
                  onClose={onClose}
                  deployStatus={deployStatus}
                  deploymentInfo={deploymentInfo}
                />;
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
              </div>;
            )}
          </TabsContent>;
        </Tabs>;
        ;
        <TemplateManager;
                <ContractPreview
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
              </div>;
            )}
        <TemplateManager
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}

        />;
      </DialogContent>;
    </Dialog>;
  );
}

/>;
      </DialogContent>;
    </Dialog>;
            />;
          </TabsContent>;
          <TabsContent value="preview" className="pt - 4">;
            {generated_contract && (
              <div>;
</ContractPreview>"
                  <div className="mt-6 flex justify-center">;"
</div>
                    <Button;
                      onClick={handleDeployContract}"
                      disabled={deployStatus === 'deploying'}''
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">;"
</Button>
                    </Button>;
                  </div>;
              </div>;
          </TabsContent>;
        </Tabs>;
              </div>;
        <TemplateManager;
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
</TemplateManager>
      </DialogContent>;
    </Dialog>;
          </TabsContent>;"
          <TabsContent value="preview" className="pt - 4">;"
</TabsContent>
              <div>;
</div>
                <ContractPreview;

                  generated_contract={generated_contract}
                  talent={talent}
                  on_close={on_close}
                  deploy_status={deploy_status}
                  deployment_info={deployment_info}
                />;
                {!deployment_info && deploy_options.deployToChain && (
                  <div className="mt - 6 flex justify-center">;
                    <Button;
                      on_click={handleDeployContract}
                      disabled={deploy_status === 'deploying'}
                      className="bg - gradient - to - r from - blue - 600 to - indigo - 600 hover:from - blue - 700 hover:to - indigo-700";
                    >;
                      {deploy_status === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}

</ContractPreview>"
                  <div className="mt - 6 flex justify - center">;"
</div>
                    <Button;
                      on_click={handleDeployContract}"
                      disabled={deploy_status === 'deploying'}''
                      className="bg - gradient - to - r from - blue - 600 to - indigo - 600 hover:from - blue - 700 hover:to - indigo - 700";"
                    >;
</Button>

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
}

;
  ),; interface SmartContractBuilderProps {
}  ),; interface SmartContractBuilderProps {
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
;

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
                  <div className="mt-6 flex justify-center">;"
                    <Button;
                      onClick={handleDeployContract}"
                      disabled={deployStatus === 'deploying'}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">;"

        <TemplateManager;
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}

          <TabsContent value="preview" className="pt - 4">;"

                  generated_contract={generated_contract}
                  on_close={on_close}
                  deploy_status={deploy_status}
                  deployment_info={deployment_info}
                  <div className="mt - 6 flex justify - center">;"
                      on_click={handleDeployContract}"
                      disabled={deploy_status === 'deploying'}
                      className="bg - gradient - to - r from - blue - 600 to - indigo - 600 hover:from - blue - 700 hover:to - indigo - 700";"
                    >;

                  </div>)}
          is_open={templateManagerOpen}
          on_close={() => setTemplateManagerOpen (false)}

    );

          on_close={() => setTemplateManagerOpen (false)}
</TemplateManager>
      </DialogContent>;
    </Dialog>);
  const [formValues, setFormValues] = useState<ContractFormValues | undefined> (undefined);

const [deployOptions, setDeployOptions] = useState<DeploymentOptions> ({
const [deployStatus, setDeployStatus] = useState<string> ();
const [deploymentInfo, setDeploymentInfo] = useState<SmartContractInfo | null> (null);

}/>  <div> <ContractPreview generatedContract= {
} </div>) 
}</div>) 
}  <TemplateManager isOpen= {
  templateManagerOpen;
}onClose= {
  () => setTemplateManagerOpen (false) 

}/>  ) 
pr-12325
</TemplateManager>

}/> </DialogContent> </Dialog>) 
      </DialogContent>
    </Dialog>
      </DialogContent>;
    </Dialog>;
  );
}
;
