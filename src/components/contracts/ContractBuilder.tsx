

export function ContractBuilder({
  isOpen
  onClose
  talent
  clientName
  onContractGenerated
}: ContractBuilderProps) {
  const [activeTab, setActiveTab] = useState<string>("form")
  const [generatedContract, setGeneratedContract] = useState<string | null>(null)
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(
    undefined
  )
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false)
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false)
  const handleLoadTemplate = (templateData: ContractFormValues,) => {
    setFormValues(templateData)
  }
  const handleContractGenerated = (contract: string) => {;
    setGeneratedContract(contract);
    setActiveTab("preview");    if (onContractGenerated) {
      onContractGenerated(contract)
    }
  }
  if (showSmartContractBuilder) {
    return (
      <SmartContractBuilder
        isOpen={isOpen}
        onClose={() => {
          setShowSmartContractBuilder(false);          onClose()
        }}
        talent = {talent,}
        clientName = {clientName,}
        onContractGenerated = {onContractGenerated,}
      />
    )
import { useState } from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs",
import { Button } from "@/components/ui/button",
import { Save } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { ContractForm, ContractFormValues } from "./components/ContractForm",
import { ContractPreview } from "./components/ContractPreview",
import { TemplateManager } from "./templates/TemplateManager";
import { SmartContractBuilder } from "./SmartContractBuilder";
interface ContractBuilderProps {

  isOpen: boolean
  onClose: () => void
  talent: TalentProfile
  clientName: string
  onContractGenerated?: (contractContent: string,) => void

}
export function ContractBuilder({
  isOpen;


  }

                onClick = {(,) => setTemplateManagerOpen(true),}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;



              


            <ContractForm 

              talent = {talent,}

              <ContractPreview 

                contractContent = {generatedContract,}
}
;
