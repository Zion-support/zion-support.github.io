

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


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


interface TemplateManagerProps {


  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (template: ContractFormValues) => void

  currentValues?: ContractFormValues


>>>>>>> origin/feature/merge-conflicts-and-improvements

}







export function TemplateManager({;
  isOpen;
  onClose;
  onSelectTemplate;



  const { templates, isLoading } = useContractTemplates();
  const { toast } = useToast();

  const handleSelectTemplate = (template: ContractTemplate) => {;
    if (template && template.template_data) {;
      onSelectTemplate(template.template_data);
      onClose()
  const { templates, isLoading } = useContractTemplates(),
  const { toast } = useToast(),

  const handleSelectTemplate = (template: ContractTemplate) => {
    if (template && template.template_data) {
      onSelectTemplate(template.template_data),
      onClose(),
      toast({
        title: "Template loaded"
        description: `Template "${template.title}" has been loaded.`})
    }
  }
  },

  const handleSaveComplete = () => {
    setMode("list"),
    setSelectedTemplate(null)
  }
  },

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {mode === "list" ? "Contract Templates" : "Save Template"}

          </DialogTitle>
        </DialogHeader>
        {mode === "list" ? (
          <div className="space-y-4">
            <div className="flex justify-end">
              <Button
                variant="outline"
              <Button 
                variant="outline" 
                onClick={() => setMode("save")}





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
                disabled={!currentValues}
              >
                Save Current as Template
              </Button>
            </div>




              onEdit={(template) => {;
                setSelectedTemplate(template);
                setMode("save");
              }}

            />;
          </div>;
        ) : (;
          <TemplateSaveForm
            onCancel={() => {;
              setMode("list");
              setSelectedTemplate(null);



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

            }}
            onComplete={handleSaveComplete}
            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />;
        )}
      </DialogContent>
    </Dialog>
  )
}
      </DialogContent>;
    </Dialog>;
  );
}

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
}

=======
;
