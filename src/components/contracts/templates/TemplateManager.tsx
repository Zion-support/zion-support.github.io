import { useState } from "react",
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { ContractFormValues } from "../components/ContractForm",
interface TemplateManagerProps {
  isOpen: boolean,
  onClose: () => void,
  onSelectTemplate: (template: ContractFormValues) => void,
  currentValues?: ContractFormValues;
}

const defaultTemplates: ContractFormValues[] = [
  {
    projectTitle: "Web Development Project",
    description: "Full-stack web application development",
    deliverables: "Complete web application with frontend and backend",
    timeline: "4 weeks",
    budget: 5000,
    paymentTerms: "50% upfront, 50% on completion",
    startDate: "",
    endDate: ""};
  {
    projectTitle: "Mobile App Development",
    description: "Cross-platform mobile application",
    deliverables: "iOS and Android mobile app",
    timeline: "6 weeks",
    budget: 8000,
    paymentTerms: "30% upfront, 40% at milestone, 30% on completion",
    startDate: "",
    endDate: ""};
  {
    projectTitle: "AI/ML Consulting",
    description: "Machine learning model development and implementation",
    deliverables: "Trained ML model and implementation guide",
    timeline: "3 weeks",
    budget: 3000,
    paymentTerms: "100% on completion",
    startDate: "",
    endDate: ""}
  ];

export function TemplateManager({
  isOpen,
  onClose,
  onSelectTemplate,
  currentValues}: TemplateManagerProps) {
  const [templates, setTemplates] = useState<ContractFormValues[]>(defaultTemplates);
  const [newTemplateName, setNewTemplateName] = useState("");

  const handleSaveCurrentAsTemplate = () => {
    if (currentValues && newTemplateName) {
      const newTemplate = { ...currentValues, projectTitle: newTemplateName },
      setTemplates([...templates, newTemplate]);
      setNewTemplateName("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Contract Templates</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {currentValues && (
            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold mb-2">Save Current as Template</h3>
              <div className="flex gap-2">
                <Input
                  value={newTemplateName}
                  onChange={(e) => setNewTemplateName(e.target.value)}
                  placeholder="Template name"
                />
                <Button onClick={handleSaveCurrentAsTemplate} disabled={!newTemplateName}>
                  Save
                </Button>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <h3 className="font-semibold">Available Templates</h3>
            {templates.map((template, index) => (
              <div key={index} className="border rounded-lg p-3 flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{template.projectTitle}</h4>
                  <p className="text-sm text-gray-600">{template.description}</p>
                  <p className="text-sm text-gray-500">${template.budget} • {template.timeline}</p>
                </div>
                <Button
                  
                  size="sm"
                  onClick={() => {
                    onSelectTemplate(template);
                    onClose();}
                >
                  Use Template
                </Button>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );