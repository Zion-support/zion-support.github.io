import React from "react;
;
import { SEO  } from "@/components/SEO";
import { useState } from "react";,
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";,
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";,
import { Button } from "@/components/ui/button";,
import { Save } from "lucide-react";
import { TalentProfile } from "@/types/talent";,
import { ContractForm, ContractFormValues } from "./components/ContractForm";,
import { ContractPreview } from "./components/ContractPreview";,
import { TemplateManager } from "./templates/TemplateManager";,
import { DeploymentOptions, SmartContractInfo } from "@/types/smart-contracts";,
import { useSmartContracts } from "@/hooks/useSmartContracts";,
                onClick = {() => setTemplateManagerOpen(true)}
            <ContractForm
                <ContractPreview
                    <Button
        <TemplateManager
  talent
}clientName= {clientName}initialValues= {formValues}onFormValuesChange= {setFormValues}onContractGenerated= {handleFormSubmit}/> </TabsContent> <div> <ContractPreview generatedContract= {generatedContract}talent= {talent}onClose= {onClose}deploymentInfo= {deploymentInfo}/> > {'
  deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'
}</Button> </div>)
}</div>)
}</TabsContent> </Tabs> <TemplateManager isOpen= {templateManagerOpen}onClose= {
  () => setTemplateManagerOpen (false)
}onSelectTemplate= {handleLoadTemplate}currentValues= {formValues}/> </DialogContent> </Dialog>)