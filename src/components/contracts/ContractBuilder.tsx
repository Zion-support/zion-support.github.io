import { useState } from "react";,
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";,
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";,
import { Button } from "@/components/ui/button";,
import { Save } from "lucide-react";
import { TalentProfile } from "@/types/talent";,
import { ContractForm, ContractFormValues } from "./components/ContractForm";,
import { ContractPreview } from "./components/ContractPreview";,
                onClick = {() => setTemplateManagerOpen(true)}
            <ContractForm
              <ContractPreview
        <TemplateManager
}</TabsList> <div className="flex gap-2" > <Button > <Save className="h-4 w-4" /> Templates </Button> <Button > Smart Contract Builder </Button> </div> </div> <TabsContent value="form" className="pt-4" > <ContractForm talent= {talent}clientName= {clientName}initialValues= {formValues}onFormValuesChange= {setFormValues}onContractGenerated= {handleContractGenerated}/> </TabsContent> />)
}</TabsContent> </Tabs> <TemplateManager isOpen= {templateManagerOpen}onClose= {
  () => setTemplateManagerOpen (false)
}onSelectTemplate= {handleLoadTemplate}currentValues= {formValues}/> </DialogContent> </Dialog>)