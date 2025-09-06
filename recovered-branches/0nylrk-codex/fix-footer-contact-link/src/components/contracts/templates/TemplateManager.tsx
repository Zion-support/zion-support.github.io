interface TemplateManagerProps {

  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (template: ContractFormValues) => void

  currentValues?: ContractFormValues
}





  currentValues
}: TemplateManagerProps) {
  const [mode, setMode] = useState<"list" | "save">("list"),
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),





import {useState} from "react";
import {useContractTemplates} from "@/hooks/useContractTemplates";
import {ContractTemplate} from "@/types/contracts";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {TemplateList} from "./TemplateList";
import {TemplateSaveForm} from "./TemplateSaveForm";
import {ContractFormValues} from "@/components/contracts/components/ContractForm";
import {useToast} from "@/hooks/use-toast";

  const { templates, isLoading } = useContractTemplates();
  const { toast } = useToast();
  const handleSelectTemplate = (template: ContractTemplate) => {;
    if (template && template.template_data) {;
      onSelectTemplate(template.template_data);

              >;
                Save Current as Template;
              </Button>;
            </div>;

              setMode("list");

              setSelectedTemplate(null)
              setMode("list"),
              setSelectedTemplate(null)


              onEdit={(template) => {;
                setSelectedTemplate(template);
                setMode("save");
              }}



              setMode("list"),
              setSelectedTemplate(null)



            <TemplateList;
              templates={templates}
              is_loading={is_loading}
              on_select={handleSelectTemplate}
              on_edit={(template) => {
                setSelectedTemplate (template);
                set_mode ("save");
              }}
            />;
          </div>) : (
          <TemplateSaveForm;
            on_cancel={() => {
              set_mode ("list");
              setSelectedTemplate (null);
            }}
            on_complete={handleSaveComplete}
            edit_template={selected_template}
            current_values={current_values}
          />)}
      </DialogContent>;
    </Dialog>);

;



  ),; interface TemplateManagerProps {
  isOpen: boolean;
onClose: () => void;
onSelectTemplate: (template: ContractFormValues) => void;
currentValues?: ContractFormValues 
}export function TemplateManager ({
  isOpen;
onClose;
onSelectTemplate;
currentValues 
}: TemplateManagerProps) {
  const handleSelectTemplate = (template: ContractTemplate) => {
  if (template && template.template data) {
  onSelectTemplate (template.template data);
onClose ();
toast ({}


