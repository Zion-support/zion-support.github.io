<<<<<<< HEAD
<<<<<<< HEAD

=======

import { useState } from "react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { ContractTemplate } from "@/types/contracts",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { TemplateList } from "./TemplateList",
import { TemplateSaveForm } from "./TemplateSaveForm",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface TemplateManagerProps {

  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (template: ContractFormValues) => void

  currentValues?: ContractFormValues
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function TemplateManager({
  isOpen,
  onClose,
  onSelectTemplate,

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  currentValues
}: TemplateManagerProps) {
  const [mode, setMode] = useState<"list" | "save">("list"),
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
interface TemplateManagerProps {}
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (template: ContractFormValues) => void;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  currentValues?: ContractFormValues;
}





  currentValues;
}: TemplateManagerProps) {}
  const [mode, setMode] = useState<"list" | "save">("list"),
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
  const { templates, isLoading } = useContractTemplates();
  const { toast } = useToast();
  const handleSelectTemplate = (template: ContractTemplate) => {;
    if (template && template.template_data) {;
      onSelectTemplate(template.template_data);
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from "react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { ContractTemplate } from "@/types/contracts",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { TemplateList } from "./TemplateList",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { TemplateSaveForm } from "./TemplateSaveForm",
<<<<<<< HEAD
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
import { useToast } from "@/hooks/use-toast";
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { TemplateSaveForm } from "./TemplateSaveForm",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface TemplateManagerProps {

  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (template: ContractFormValues) => void

  currentValues?: ContractFormValues
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from "react",
import { useContractTemplates } from "@/hooks/useContractTemplates",
import { ContractTemplate } from "@/types/contracts",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { TemplateList } from "./TemplateList",
<<<<<<< HEAD
=======

"
import {useState} from "react";"
import {useContractTemplates} from "@/hooks/useContractTemplates";"
import {ContractTemplate} from "@/types/contracts";"
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";"
import {Button} from "@/components/ui/button";"
import {TemplateList} from "./TemplateList";"
import {TemplateSaveForm} from "./TemplateSaveForm";"
import {ContractFormValues} from "@/components/contracts/components/ContractForm";"
import {useToast} from "@/hooks/use-toast";
"
import { useState } from "react","
import { useContractTemplates } from "@/hooks/useContractTemplates","
import { ContractTemplate } from "@/types/contracts","
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog","
import { Button } from "@/components/ui/button","
import { TemplateList } from "./TemplateList","
import { TemplateSaveForm } from "./TemplateSaveForm",
interface TemplateManagerProps {};
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (template: ContractFormValues) => void;
  currentValues?: ContractFormValues;
}"
import { useState } from "react","
import { useContractTemplates } from "@/hooks/useContractTemplates","
import { ContractTemplate } from "@/types/contracts","
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog","
import { Button } from "@/components/ui/button","
import { TemplateList } from "./TemplateList","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { TemplateSaveForm } from "./TemplateSaveForm",
interface TemplateManagerProps {};
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (template: ContractFormValues) => void;
  currentValues?: ContractFormValues;
=======
import { TemplateSaveForm } from "./TemplateSaveForm",
interface TemplateManagerProps {

  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (template: ContractFormValues) => void

  currentValues?: ContractFormValues
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
interface TemplateManagerProps {;
  isOpen: boolean,;
  onClose: () => void,;
  onSelectTemplate: (template: ContractFormValues) => void,;
  currentValues?: ContractFormValues;
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export function TemplateManager() { return null; }
  const { templates, isLoading } = useContractTemplates();
  const { toast } = useToast();


<<<<<<< HEAD
=======

export function TemplateManager({;
  isOpen;
  onClose;
  onSelectTemplate;
export function TemplateManager({
  isOpen,
  onClose,
  onSelectTemplate,
  currentValues
}: TemplateManagerProps) {
  const [mode, setMode] = useState<"list" | "save">("list"),
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),
  const { templates, isLoading } = useContractTemplates();
  const { toast } = useToast();

  const handleSelectTemplate = (template: ContractTemplate) => {
    if (template && template.template_data) {
      onSelectTemplate(template.template_data);
      onClose()
  const { templates, isLoading } = useContractTemplates(),
  const { toast } = useToast(),

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const handleSelectTemplate = (template: ContractTemplate) => {
    if (template && template.template_data) {
      onSelectTemplate(template.template_data),
      onClose(),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      toast({
        title: "Template loaded"
=======
      toast({"
        title: "Template loaded""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        description: `Template "${template.title}" has been loaded.`})
    }
<<<<<<< HEAD
=======

      onClose(),;
      toast({;"
        title: "Template loaded",;"`
=======


      toast({
        title: "Template loaded"
        description: `Template "${template.title}" has been loaded.`})
    }

      onClose(),;
      toast({;
        title: "Template loaded",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        description: `Template "${template && template.title}" has been loaded.`});
    }
  };

<<<<<<< HEAD
  const handleSaveComplete = () => {;"
=======
  const handleSaveComplete = () => {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setMode("list");
    setSelectedTemplate(null);
  };

<<<<<<< HEAD
    <Dialog open={isOpen} onOpenChange={onClose}>;"
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>;

<<<<<<< HEAD
=======

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>;
            {mode === "list" ? "Contract Templates" : "Save Template"}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  },


  const handleSaveComplete = () => {
    setMode("list"),
    setSelectedTemplate(null)

  },


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  const handleSaveComplete = () => {
    setMode("list"),
    setSelectedTemplate(null)

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>"
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>"
            {mode === "list" ? "Contract Templates" : "Save Template"}

          </DialogTitle>
        </DialogHeader>"
        {mode === "list" ? ("
          <div className="space-y-4">"
            <div className="flex justify-end">

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
              <Button
                variant="outline"
              <Button 
                variant="outline" 
                onClick={() => setMode("save")}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState } from "react",;
import { useContractTemplates } from "@/hooks/useContractTemplates",;
import { ContractTemplate } from "@/types/contracts",;
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",;
import { Button } from "@/components/ui/button",;
import { TemplateList } from "./TemplateList",;
import { TemplateSaveForm } from "./TemplateSaveForm",;
import { ContractFormValues } from "@/components/contracts/components/ContractForm",;
import { useToast } from "@/hooks/use-toast",;
interface TemplateManagerProps {;
  isOpen: boolean,;
  onClose: () => void,;
  onSelectTemplate: (template: ContractFormValues) => void,;
  currentValues?: ContractFormValues;
}
;
export function TemplateManager({;
  isOpen,;
  onClose,;
  onSelectTemplate,;
  currentValues;
}: TemplateManagerProps) {;
  const [mode, setMode] = useState<"list" | "save">("list"),;
  const [selectedTemplate, setSelectedTemplate] = useState<ContractTemplate | null>(null),;
  const { templates, isLoading } = useContractTemplates(),;
  const { toast } = useToast(),;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const handleSelectTemplate = (template: ContractTemplate) => {;
    if (template && template.template_data) {;
      onSelectTemplate(template.template_data);
    <Dialog open={isOpen} onOpenChange={onClose}>;"
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>;"
            {mode === "list" ? "Contract Templates" : "Save Template"}
<<<<<<< HEAD
<<<<<<< HEAD
=======
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

  const handleSelectTemplate = (template: ContractTemplate) => {;
    if (template && template.template_data) {;
      onSelectTemplate(template.template_data);
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>;
            {mode === "list" ? "Contract Templates" : "Save Template"}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </DialogTitle>;
        </DialogHeader>;
        {mode === "list" ? (;
          <div className="space-y-4">;
            <div className="flex justify-end">;
              <Button;
                variant="outline";
<<<<<<< HEAD
<<<<<<< HEAD

                onClick={() => setMode("save")}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

              <Button 
                variant="outline" 
                onClick={() => setMode("save")}

                onClick={() => setMode("save")}



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                onClick={() => setMode("save")}
                onClick={() => setMode("save")}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                disabled={!currentValues}
              >
                Save Current as Template;
              </Button>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <TemplateList
            <TemplateList 
              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
              onEdit={(template) => {
                setSelectedTemplate(template),
                setMode("save")
              }}
            />
          </div>
        ) : (
          <TemplateSaveForm
            onCancel={() => {
<<<<<<< HEAD
=======
            {mode === "list" ? "Contract Templates" :"Save Template"}
          </DialogTitle>;
        </DialogHeader>;
;
        {mode === "list" ? (;
          <div className="space-y-4">;
            <div className="flex justify-end">;
              <Button ;
                variant="outline" ;
                onClick={() => setMode("save")}
                disabled={!currentValues}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                onClick={() => setMode("save")}
                onClick={() => setMode("save")}
                disabled={!currentValues}
              >
                Save Current as Template
              </Button>
            </div>

          </DialogTitle>;
        </DialogHeader>;

        {mode === "list" ? (;
          <div className="space-y-4">;
            <div className="flex justify-end">;
              <Button
                variant="outline" 
                onClick={() => setMode("save")}
                disabled={!currentValues}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              >;
                Save Current as Template;
              </Button>;
            </div>;


<<<<<<< HEAD

<<<<<<< HEAD
=======
            <TemplateList 

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              setMode("list");

              setSelectedTemplate(null)
              setMode("list"),
              setSelectedTemplate(null)
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              onEdit={(template) => {;
                setSelectedTemplate(template);"
                setMode("save");
              }}

<<<<<<< HEAD
            />;
          </div>;
        ) : (;
          <TemplateSaveForm
            onCancel={() => {;
              setMode("list");
              setSelectedTemplate(null);
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


"
              setMode("list"),
              setSelectedTemplate(null)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            }}
            onComplete={handleSaveComplete}
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            }}
            onComplete={handleSaveComplete}
            ;
            <TemplateList ;
              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
              onEdit={(template) => {;
                setSelectedTemplate(template),;"
                setMode("save"),;
              }}
            />;
          </div>;
        ) :(;
          <TemplateSaveForm ;
            onCancel={() => {;"
              setMode("list"),;
              setSelectedTemplate(null),;
            }}            onComplete={handleSaveComplete}

            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



            <TemplateList;
=======
import { TemplateSaveForm } from "./TemplateSaveForm",              onEdit={(template) => {;
                setSelectedTemplate(template);
                setMode("save");
              }}            <TemplateList;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { TemplateSaveForm } from "./TemplateSaveForm",              onEdit={(template) => {;
                setSelectedTemplate(template);
                setMode("save");
              }}            <TemplateList;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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


              setMode("list"),
              setSelectedTemplate(null)

            }}
            onComplete={handleSaveComplete}
            }}
            onComplete={handleSaveComplete}
            ;
            <TemplateList ;
              templates={templates}
              isLoading={isLoading}
              onSelect={handleSelectTemplate}
              onEdit={(template) => {;
                setSelectedTemplate(template),;
                setMode("save"),;
              }}
            />;
          </div>;
        ) :(;
          <TemplateSaveForm ;
            onCancel={() => {;
              setMode("list"),;
              setSelectedTemplate(null),;
            }}            onComplete={handleSaveComplete}
            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />;
        )}

      </DialogContent>;
    </Dialog>;
  );
}

            <TemplateList;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              templates={templates}
              is_loading={is_loading}
              on_select={handleSelectTemplate}
              on_edit={(template) => {}
                setSelectedTemplate (template);"
                set_mode ("save");
              }}
            />;
          </div>) : (
          <TemplateSaveForm;
            on_cancel={() => {"
              set_mode ("list");
              setSelectedTemplate (null);
            }}
            on_complete={handleSaveComplete}
            edit_template={selected_template}
            current_values={current_values}
          />)}
      </DialogContent>;
    </Dialog>);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  ),; interface TemplateManagerProps {
=======
}  ),; interface TemplateManagerProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}  ),; interface TemplateManagerProps {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




  ),; interface TemplateManagerProps {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}

  ),; interface TemplateManagerProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  isOpen: boolean;
onClose: () => void;
onSelectTemplate: (template: ContractFormValues) => void;
currentValues?: ContractFormValues;
}export function TemplateManager ({};
  isOpen;
onClose;
onSelectTemplate;
currentValues;
}: TemplateManagerProps) {}
  const handleSelectTemplate = (template: ContractTemplate) => {}
  if (template && template.template data) {}
  onSelectTemplate (template.template data);
onClose ();
toast ({}
}
;

<<<<<<< HEAD
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
=======

}

export function TemplateManager(): any ({;
  isOpen;
  onClose;
  onSelectTemplate;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
