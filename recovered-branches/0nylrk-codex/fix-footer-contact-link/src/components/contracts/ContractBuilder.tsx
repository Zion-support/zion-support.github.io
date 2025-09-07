interface ContractBuilderProps {
  // TODO: Implement
}
  isOpen: boolean;,
  onClose: () => void;
  talent: TalentProfile;,
  clientName: string;
  onContractGenerated?: (contractContent: string) => void;
import {useState} from "react";""
import {Dialog, DialogContent} from "@/components/ui/dialog";""
import {Tabs, TabsList, TabsTrigger, TabsContent} from "@/components/ui/tabs";""
import {Button} from "@/components/ui/button";""
import {Save} from "lucide-react";""
import {TalentProfile} from "@/types/talent";""
import {ContractForm, ContractFormValues} from "./components/ContractForm";""
import {ContractPreview} from "./components/ContractPreview";""
import {TemplateManager} from "./templates/TemplateManager";""
import {SmartContractBuilder} from "./SmartContractBuilder";"
interface ContractBuilderProps {;
  isOpen: boolean,;
  onClose: () => void,;
  talent: TalentProfile,;
  clientName: string,;

export function ContractBuilder(): any ({;

export function ContractBuilder({;
  isOpen;
  onClose;
  talent;
  clientName;
  onContractGenerated;)
}: ContractBuilderProps) {;"
  const [activeTab, setActiveTab] = useState<string>("form");"
</string>
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);

  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;

      <SmartContractBuilder;
        isOpen={isOpen})
        onClose={() => {;
"
  const [active_tab, setActiveTab] = useState < string>("form");"
  const [generated_contract, setGeneratedContract] = useState < string | null>(null);
  const [form_values, setFormValues] = useState < ContractFormValues | undefined>()
    undefined);
  const [templateManagerOpen, setTemplateManagerOpen] = useState (false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState (false);
;
  const handleLoadTemplate = (template_data: ContractFormValues) =>: any {
  // TODO: Implement
    setFormValues (template_data);
  const handleContractGenerated = (contract: string) =>: any {
  // TODO: Implement
    setGeneratedContract (contract);"
    setActiveTab ("preview"),"
    // Check condition;
if ( {) {
  $2;
      onContractGenerated (contract);
  // Check condition;
    return (
        is_open={is_open})
        on_close={() => {
  const [activeTab, setActiveTab] = useState<string>("form"),"
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(

    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;"
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;"
          <div className="flex justify-between items-center">;"
</div>"
            <TabsList className="grid grid-cols-2">;"
              <TabsTrigger value="form">Contract Details;""
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview;"
            ;"
            <div className="flex gap-2">;"
</div>
              <Button;"
                variant="outline"""
                size="sm"")
                onClick={() => setTemplateManagerOpen(true)}
                <Save className="h-4 w-4" />;"

  const [activeTab, setActiveTab] = useState<string>("form"),;"
  const [generatedContract, setGeneratedContract] = useState<string | null>(null),;


    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">"
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">"
          <div className="flex justify-between items-center">"
            <TabsList className="grid grid-cols-2">"
              <TabsTrigger value="form">Contract Details""
              <TabsTrigger value="preview" disabled={!generatedContract}>Preview"
            <div className="flex gap-2">"
                size="sm""
                <Save className="h-4 w-4" />"

              
                variant="secondary"""
                onClick={() => setShowSmartContractBuilder(true)}

    <Dialog open={is_open} onOpenChange={on_close}>;
      <DialogContent className="max - w-4xl max - h-[90vh] overflow - y-auto">;"
        <Tabs value={active_tab} onValueChange={setActiveTab} className="mt - 4">;"
          <div className="flex justify - between items - center">;"
            <TabsList className="grid grid - cols - 2">;"
              <TabsTrigger value="preview" disabled={!generated_contract}>Preview;"
            <div className="flex gap - 2">;"
                variant="outline";""
                size="sm";"
                on_click={() => setTemplateManagerOpen (true)}
                <Save className="h - 4 w - 4" />;"

                variant="secondary";""
                on_click={() => setShowSmartContractBuilder (true)}

            </div>;
          </div>;"
          <TabsContent value="form" className="pt - 4">;"

            <ContractForm;

              talent={talent}
              client_name={client_name}
              initial_values={form_values}
              onFormValuesChange={setFormValues}
              onContractGenerated={handleContractGenerated}

            />;

          <TabsContent value="preview" className="pt-4">;"

              <ContractPreview;
                contractContent={generatedContract}
                onClose={onClose}"
                status="ready""

        <TemplateManager;
          isOpen={templateManagerOpen}
          onClose={() => setTemplateManagerOpen(false)}

          <TabsContent value="preview" className="pt - 4">;"

                contract_content={generated_contract}
                on_close={on_close}"
                status="ready";"
              />)}

          is_open={templateManagerOpen}
          on_close={() => setTemplateManagerOpen (false)}

    );
  const [formValues, setFormValues] = useState<ContractFormValues | undefined> (undefined);

return (<SmartContractBuilder isOpen= {
  isOpen;)
}/>) 
} <div className="flex gap-2" > <Button > <Save className="h-4 w-4" /> Templates  <Button > Smart Contract Builder  </div> </div> <TabsContent value="form" className="pt-4" > <ContractForm talent= {"
}clientName= {
}initialValues= {
  formValues;
}onFormValuesChange= {
  setFormValues;
}onContractGenerated= {
  handleContractGenerated;
}/>  />) 
}  <TemplateManager isOpen= {
  templateManagerOpen;
}onClose= {
  () => setTemplateManagerOpen (false) 

}/>  ) 
      
    