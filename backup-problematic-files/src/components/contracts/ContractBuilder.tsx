import { useState } from "react",;""
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;""
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",;""
import { Button } from "@/components/ui/button",;""
import { Save } from 'lucide-react';
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
                onClose={onClose}"
                status="ready";"

        <TemplateManager;
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}

  const [formValues, setFormValues] = useState<ContractFormValues | undefined> (undefined);

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

}/>  ) ;"