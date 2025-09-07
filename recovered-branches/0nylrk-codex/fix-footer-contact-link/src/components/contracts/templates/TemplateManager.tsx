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
interface TemplateManagerProps {;
  isOpen: boolean,;
  onClose: () => void,;
  onSelectTemplate: (template: ContractFormValues) => void,;
  currentValues?: ContractFormValues;
}

export function TemplateManager(): any ({;
  isOpen;
  onClose;
  onSelectTemplate;
  currentValues;
}: TemplateManagerProps) {;
  const [mode, setMode] = useState<"list" | "save">("list");
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null);

  const { templates, isLoading } = useContractTemplates();
  const { toast } = useToast();

  const handleSelectTemplate = (template: ContractTemplate) => {;
    if (template && template.template_data) {;
      onSelectTemplate(template.template_data);

import { useState } from "react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { ContractTemplate } from "@/types/contracts",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { TemplateList } from "./TemplateList",
import { TemplateSaveForm } from "./TemplateSaveForm",              onEdit={(template) => {;
                setSelectedTemplate(template);
                setMode("save");
              }}            <TemplateList;
  // TODO: Implement
}
  isOpen: boolean;,
  onClose: () => void;
  onSelectTemplate: (template: ContractFormValues) => void;
  currentValues?: ContractFormValues;
}





  currentValues;
}: TemplateManagerProps) {
  const [mode, setMode] = useState<"list" | "save">("list"),"
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),
</ContractTemplate>"
  const [mode, setMode] = useState<"list" | "save">("list");"
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null);
</ContractTemplate>"
  const [mode, setMode] = useState<"list" | "save">("list"),"
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),
</ContractTemplate>
    <Dialog open={isOpen} onOpenChange={onClose}>;
</Dialog>"
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">;"
</DialogContent>
        <DialogHeader>;
</DialogHeader>
          <DialogTitle>;
</DialogTitle>
    <Dialog open={isOpen} onOpenChange={onClose}>
</Dialog>"
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">"
</DialogContent>
        <DialogHeader>
</DialogHeader>
          <DialogTitle>
</DialogTitle>
          </DialogTitle>
        </DialogHeader>"
          <div className="space-y-4">"
</div>"
            <div className="flex justify-end">"
</div>
    <Dialog open={isOpen} onOpenChange={onClose}>;
</Dialog>"
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">;"
</DialogContent>
        <DialogHeader>;
</DialogHeader>
          <DialogTitle>;
</DialogTitle>
          </DialogTitle>;
        </DialogHeader>;"
          <div className="space-y-4">;"
</div>"
            <div className="flex justify-end">;"
</div>
              <Button;"
                variant="outline";"
              <Button;"
                variant="outline"""
                onClick={() => setMode("save")}"
</Button>
              </Button>
            </div>

          </DialogTitle>;
        </DialogHeader>;"
          <div className="space-y-4">;"
</div>"
            <div className="flex justify-end">;"
</div>
              <Button;"
                variant="outline"""
                onClick={() => setMode("save")}"
</Button>
              </Button>;
            </div>;
            <TemplateList;
              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
              onEdit={(template) => {;
</TemplateList>
          </div>;
          <TemplateSaveForm;
            onCancel={() => {;
</TemplateSaveForm>
            <TemplateList ;
              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
              onEdit={(template) => {;
</TemplateList>
          </div>;
          <TemplateSaveForm ;
            onCancel={() => {;
</TemplateSaveForm>
      </DialogContent>;
    </Dialog>;
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
}  ),; interface TemplateManagerProps {
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
toast ({
  
}

};
return (<Dialog open= {
  isOpen 
}onOpenChange= {
  onClose 
}> <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto" > <DialogHeader> <DialogTitle> {
  mode === "list" ? "Contract Templates" : "Save Template" 
}</DialogTitle> </DialogHeader> {
  mode === "list" ? (<div className="space-y-4" > <div className="flex justify-end" > <Button variant="outline" onClick= {
  () => setMode ("save") 
}disabled= {
  !currentValues 
}
}
}/> </div>) : (<TemplateSaveForm onCancel= {
  () => {
  
}
}onComplete= {
  handleSaveComplete 
}editTemplate= {
  selectedTemplate 
}currentValues= {
  currentValues 
}
}</DialogContent> </Dialog>) 
}
            />;
          </div>;
        ) : (;
          <TemplateSaveForm;
            onCancel={() => {;
              setMode("list");
              setSelectedTemplate(null);
            }}
            onComplete={handleSaveComplete}
            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
      </DialogContent>;
    </Dialog>;
  );
}
;
  // TODO: Implement
}
  isOpen: boolean;,
  onClose: () => void;
  onSelectTemplate: (template: ContractFormValues) => void;
  currentValues?: ContractFormValues;





  currentValues;
}: TemplateManagerProps) {
  const [mode, setMode] = useState<"list" | "save">("list"),"
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),
"
  const [mode, setMode] = useState<"list" | "save">("list");"
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null);

    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">;"

        <DialogHeader>;

          <DialogTitle>;

    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">"

        <DialogHeader>

          <DialogTitle>

          
          <div className="space-y-4">"
</div>"
            <div className="flex justify-end">"
</div>



          ;
        ;"
          <div className="space-y-4">;"
            <div className="flex justify-end">;"
              <Button;"
                variant="outline";"
                variant="outline"""
                onClick={() => setMode("save")}"

              


            </div>;
            <TemplateList;
              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
              onEdit={(template) => {;

          <TemplateSaveForm;
            onCancel={() => {;

            <TemplateList ;

          <TemplateSaveForm ;

              is_loading={is_loading}
              on_select={handleSelectTemplate}
              on_edit={(template) => {

</TemplateList>
          </div>) : (
          <TemplateSaveForm;)
            on_cancel={() => {

    );
return (<Dialog open= {
  isOpen;
}onOpenChange= {
  onClose;"
}> <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto" > <DialogHeader> <DialogTitle> {"

}  {"
  mode === "list" ? (<div className="space-y-4" > <div className="flex justify-end" > <Button variant="outline" onClick= {"
</div>)
}/> </div>) : (<TemplateSaveForm onCancel= {)
  () => {

} ) 

      
    
pr-12325
</TemplateSaveForm>

}</DialogContent> </Dialog>) 
          </div>;
          <TemplateSaveForm;

            onCancel={() => {;
</TemplateSaveForm>

      </DialogContent>
    </Dialog>
      </DialogContent>;
    </Dialog>;
  );
}
;
