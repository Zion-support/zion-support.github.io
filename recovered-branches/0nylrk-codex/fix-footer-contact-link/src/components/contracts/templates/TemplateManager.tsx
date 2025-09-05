
import { useState } from "react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { ContractTemplate } from "@/types/contracts",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { TemplateList } from "./TemplateList",
import { TemplateSaveForm } from "./TemplateSaveForm",
import { ContractFormValues } from "@/components/contracts/components/ContractForm",
import { useToast } from "@/hooks/use-toast",interface TemplateManagerProps {
  isOpen: boolean,
  onClose: () => void,
  onSelectTemplate: (template: ContractFormValues) => void,
  currentValues?: ContractFormValues
}

export function TemplateManager({
  isOpen,
  onClose,
  onSelectTemplate,
  currentValues
}: TemplateManagerProps) {
  const [mode, setMode] = useState<"list" | "save">("list"),
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),
  const { templates, isLoading } = useContractTemplates(),
  const { toast } = useToast(),
  const handleSelectTemplate = (template: ContractTemplate) => {
    if (template && template.templatedata) {
      onSelectTemplate(template.templatedata),
      onClose(),
      toast({
        title: "Template loaded",
        description: `Template "${template.title}" has been loaded.`})
interface TemplateManagerProps {isOpen: boolean,
  onClose: () => void;
  onSelectTemplate: (template: ContractFormValues) => void;
  currentValues?: ContractFormValues}

export function TemplateManager(_{isOpen, onClose, onSelectTemplate, currentValues}: TemplateManagerProps) {const [mode, setMode] = useState<"list" | "save">("list");
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null);
  const { templates, isLoading} = useContractTemplates();
  const {toast} = useToast();

  const handleSelectTemplate = (template: ContractTemplate) => {if (template && template.templatedata) {
      onSelectTemplate(template.templatedata);
      onClose();
      toast({
        title: "Template loaded", description: `Template "${template.title}" has been loaded.`})
    }
  },

  const handleSaveComplete = () => {
    setMode("list"),
    setSelectedTemplate(null)
  },
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=&quot;sm:max-w-lg max-h-[90vh] overflow-y-auto&quot;>
        <DialogHeader>
          <DialogTitle>
            {mode === &quot;list&quot; ? &quot;Contract Templates&quot; : &quot;Save Template&quot}
          </DialogTitle>
        </DialogHeader>

        {mode === &quot;list&quot; ? (
          <div className=&quot;space-y-4&quot;>
            <div className=&quot;flex justify-end&quot;>
              <Button,
variant=&quot;outline&quot; 
                onClick={() => setMode(&quot;save&quot;)}
                disabled={!currentValues}
  const handleSaveComplete = () => {setMode("list");
    setSelectedTemplate(null)};

  return (_<Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {mode === "list" ? "Contract Templates" : "Save Template"}
          </DialogTitle>
        </DialogHeader>

        {mode === "list" ? (
          <div className="space-y-4">
            <div className="flex justify-end">
              <Button,
variant="outline" 
                onClick={() => setMode("save")}
                disabled={_!currentValues}
              >
                Save Current as Template
              </Button>
            </div>
            
            <TemplateList,
templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
              onEdit={(template) => {
                setSelectedTemplate(template),
                setMode("save")              }}
            />
          </div>
        ) : (
          <TemplateSaveForm,
onCancel={() => {
              setMode("list"),
              setSelectedTemplate(null)            }}
            onComplete={handleSaveComplete}
            editTemplate={selectedTemplate}
            currentValues={currentValues}
              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
              onEdit={_(template) => {
                setSelectedTemplate(template);
                setMode("save")}}
            />
          </div>
        ) : (_<TemplateSaveForm,
onCancel={_() => {
              setMode("list");
              setSelectedTemplate(null)}}
            onComplete={handleSaveComplete}
            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
