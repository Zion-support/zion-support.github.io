


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

  },


  const handleSaveComplete = () => {
    setMode("list"),
    setSelectedTemplate(null)

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
                onClick={() => setMode("save")}

                onClick={() => setMode("save")}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                disabled={!currentValues}
              >
                Save Current as Template
              </Button>
            </div>

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

              setMode("list"),
              setSelectedTemplate(null)

            }}
            onComplete={handleSaveComplete}
            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />
        )}

      </DialogContent>;
    </Dialog>;
  );
}
;

