import { useState } from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Contract Builder</DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <div className="flex justify-between items-center">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="form">Contract Details</TabsTrigger>
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview</TabsTrigger>
            </TabsList>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTemplateManagerOpen(true)}
                className="flex gap-1"
              >
                <Save className="h-4 w-4" />
                Templates
              </Button>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowSmartContractBuilder(true)}
              >
                Smart Contract Builder
              </Button>
            </div>
          </div>
              talent = {talent,}
              clientName = {clientName,}
              initialValues = {formValues,}
              onFormValuesChange = {setFormValues,}
              onContractGenerated = {handleContractGenerated,}
            />
          </TabsContent>
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
                contractContent = {generatedContract,}
                talent = {talent,}
                onClose = {onClose,}
                status="ready"
              />
            )}
          </TabsContent>
        </Tabs>
        <TemplateManager
          isOpen = {templateManagerOpen,}
          onClose = {() => setTemplateManagerOpen(false),}
          onSelectTemplate = {handleLoadTemplate,}
          currentValues = {formValues,}
        />
      </DialogContent>
    </Dialog>
  )
}
}/>)
}</TabsList> <div className="flex gap-2" > <Button > <Save className="h-4 w-4" /> Templates </Button> <Button > Smart Contract Builder </Button> </div> </div> <TabsContent value="form" className="pt-4" > <ContractForm talent= {
  talent
}clientName= {
  clientName
}initialValues= {
  formValues
}onFormValuesChange= {
  setFormValues
}onContractGenerated= {
  handleContractGenerated
}/> </TabsContent> />)
}</TabsContent> </Tabs> <TemplateManager isOpen= {
  templateManagerOpen
}onClose= {
  () => setTemplateManagerOpen (false)
}onSelectTemplate= {
  handleLoadTemplate
}currentValues= {
  formValues
}/> </DialogContent> </Dialog>)
}"}
=======
          
          <TabsContent value="form" className="pt-4">
            <ContractForm 
              talent={talent}
              clientName={clientName}
              initialValues={formValues}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}
            />
          </TabsContent>
          
          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <ContractPreview 
                contractContent={generatedContract}
                talent={talent}
                onClose={onClose}
                status="ready"
              />
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
