import { useState } from "react",;""
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;""
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;""
import { Button } from "@/components/ui/button",;""
import { Save } from 'lucide-react';''
import { TalentProfile } from "@/types/talent",;""
import { ContractForm, ContractFormValues } from "./components/ContractForm",;""
import { ContractPreview } from "./components/ContractPreview",;""
import { TemplateManager } from "./templates/TemplateManager",;""
import { SmartContractBuilder } from "./SmartContractBuilder",;"
;
interface ContractBuilderProps {;
  isOpen:boolean,;
  onClose:() => void,;
  talent:TalentProfile,;
  clientName:string,;
  onContractGenerated?:(contractContent:string) => void;
}
;
export function ContractBuilder({;
  isOpen,;
  onClose,;
  talent,;
  clientName,;
  onContractGenerated;)
} ContractBuilderProps) {;"
  const [activeTab, setActiveTab] = useState<string>("form"),;"
</string>
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),;
</string>
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
</ContractFormValues>
      <SmartContractBuilder;
        isOpen={isOpen})
        onClose={() => {;
</SmartContractBuilder>
    <Dialog open={isOpen} onOpenChange={onClose}>;
</Dialog>"
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;"
</DialogContent>
        <DialogHeader>;
</DialogHeader>
          <DialogTitle>Contract Builder</DialogTitle>;
        </DialogHeader>;"
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;"
</Tabs>"
          <div className="flex justify-between items-center">;"
</div>"
            <TabsList className="grid grid-cols-2">;"
</TabsList>"
              <TabsTrigger value="form">Contract Details</TabsTrigger>;""
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;"
            </TabsList>;"
            <div className="flex gap-2">;"
</div>
              <Button ;"
                variant="outline" ;""
                size="sm";"
                onClick={() => setTemplateManagerOpen(true)}
</Button>"
                <Save className="h-4 w-4" />;"
</Save>
              </Button>;
              <Button;"
                variant="secondary";""
                size="sm";"
                onClick={() => setShowSmartContractBuilder(true)}
</Button>
              </Button>;
            </div>;
          </div>;"
          <TabsContent value="form" className="pt-4">;"
</TabsContent>
            <ContractForm ;
              talent={talent}              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}
            />;
</ContractForm>
          </TabsContent>;"
          <TabsContent value="preview" className="pt-4">;"
</TabsContent>
              <ContractPreview ;
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}"
                status="ready";"
              />;
</ContractPreview>
          </TabsContent>;
        </Tabs>;
        <TemplateManager;
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}
</TemplateManager>
      </DialogContent>;
    </Dialog>;
  const [formValues, setFormValues] = useState<ContractFormValues | undefined> (undefined);
</ContractFormValues>
return (<SmartContractBuilder isOpen= {;
  isOpen ;)
}/>) ;
</SmartContractBuilder>"
}</TabsList> <div className="flex gap-2" > <Button > <Save className="h-4 w-4" /> Templates </Button> <Button > Smart Contract Builder </Button> </div> </div> <TabsContent value="form" className="pt-4" > <ContractForm talent= {;"
  talent ;
}clientName= {;
  clientName ;
}initialValues= {;
  formValues ;
}onFormValuesChange= {;
  setFormValues ;
}onContractGenerated= {;
  handleContractGenerated ;
}/> </TabsContent> />) ;
}</TabsContent> </Tabs> <TemplateManager isOpen= {;
  templateManagerOpen ;
}onClose= {;
  () => setTemplateManagerOpen (false) ;
</TemplateManager>
}/> </DialogContent> </Dialog>) ;"