import { Save } from 'lucide-react';
import { TalentProfile } from "@/types/talent";""
import { ContractForm, ContractFormValues } from "./components/ContractForm";""
import { ContractPreview } from "./components/ContractPreview";""
import { TemplateManager } from "./templates/TemplateManager";""
import { SmartContractBuilder } from "./SmartContractBuilder";"
;
interface ContractBuilderProps {;
  isOpen: boolean;,;
  onClose: () => void;,;
  talent: TalentProfile;,;
  clientName: string;,;
  onContractGenerated?:(contractContent:string) => void;
}
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
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;

      <SmartContractBuilder;
        isOpen={isOpen})
        onClose={() => {;

    <Dialog open={isOpen} onOpenChange={onClose}>;
"
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;"

        <DialogHeader>;

                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;

              >;
                Smart Contract Builder;
              </Button>;
            </div>;
          </div>;

            <ContractForm ;
              talent={talent}              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}
            />;

          <TabsContent value="preview" className="pt-4">;"

              <ContractPreview ;
                contractContent={generatedContract}
                talent={talent}

        <TemplateManager;
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}

  const [formValues, setFormValues] = useState<ContractFormValues | undefined> (undefined);
const [templateManagerOpen,  setTemplateManagerOpen] = useState (false);
const [showSmartContractBuilder, setShowSmartContractBuilder] = useState (false);
const handleLoadTemplate = (templateData: ContractFormValues) => {;
  setFormValues (templateData) 
};
const handleContractGenerated = (contract: string) => {;
  if (onContractGenerated) {;
  onContractGenerated (contract) ;
}
};

pr-12325
return (<SmartContractBuilder isOpen= {;
  isOpen ;)
}/>) ;
} <div className="flex gap-2" > <Button > <Save className="h-4 w-4" /> Templates  <Button > Smart Contract Builder  </div> </div> <TabsContent value="form" className="pt-4" > <ContractForm talent= {;"
  talent ;
}clientName= {;
  clientName ;
}initialValues= {;
  formValues ;
}onFormValuesChange= {;
  setFormValues ;
}onContractGenerated= {;
  handleContractGenerated ;
}/>  />) ;
}  <TemplateManager isOpen= {;
  templateManagerOpen ;
}onClose= {;

  () => setTemplateManagerOpen (false) ;
<<<<<<< HEAD
}onSelectTemplate= {;
  handleLoadTemplate ;
}currentValues= {;
  formValues ;
}/> </DialogContent> </Dialog>) ;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
