<<<<<<< HEAD
<<<<<<< HEAD

=======
import { useState } from "react",;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;
import { Button } from "@/components/ui/button",;
=======
import { useState } from "react";""
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";""
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";""
import { Button } from "@/components/ui/button";""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
          setShowSmartContractBuilder(false),;
          onClose(),;
        }}
        talent={talent}
        clientName={clientName}
        onContractGenerated={onContractGenerated}
      />;
    ),;
  }
;
  return (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <Dialog open={isOpen} onOpenChange={onClose}>;
"
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;"

        <DialogHeader>;
<<<<<<< HEAD
          <DialogTitle>Contract Builder</DialogTitle>;
        </DialogHeader>;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center">;
            <TabsList className="grid grid-cols-2">;
              <TabsTrigger value="form">Contract Details</TabsTrigger>;
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>;
            </TabsList>;
<<<<<<< HEAD

=======
            ;
            <div className="flex gap-2">;
              <Button ;
                variant="outline" ;
                size="sm";
                onClick={() => setTemplateManagerOpen(true)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;
<<<<<<< HEAD

=======
              ;
              <Button;
                variant="secondary";
                size="sm";
                onClick={() => setShowSmartContractBuilder(true)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              >;
                Smart Contract Builder;
              </Button>;
            </div>;
          </div>;
<<<<<<< HEAD

=======
          ;
          <TabsContent value="form" className="pt-4">;
=======

          <DialogTitle>Contract Builder;
        ;"
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;"
          <div className="flex justify-between items-center">;"
</div>"
            <TabsList className="grid grid-cols-2">;"
              <TabsTrigger value="form">Contract Details;""
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview;"
            <div className="flex gap-2">;"
</div>
              <Button ;"
                variant="outline" ;""
                size="sm";"
                onClick={() => setTemplateManagerOpen(true)}
                <Save className="h-4 w-4" />;"

              <Button;"
                variant="secondary";""
                onClick={() => setShowSmartContractBuilder(true)}

            </div>;
          </div>;"
          <TabsContent value="form" className="pt-4">;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
                onClose={onClose}
                status="ready";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              />;
            )}
          </TabsContent>;
        </Tabs>;
<<<<<<< HEAD

=======
        ;
=======
                onClose={onClose}"
                status="ready";"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

}/>  ) ;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
