interface TemplateManagerProps {

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
</TemplateList>
          </div>) : (
          <TemplateSaveForm;)
            on_cancel={() => {
</TemplateSaveForm>
      </DialogContent>;
    </Dialog>);
return (<Dialog open= {
  isOpen;
}onOpenChange= {
  onClose;"
}> <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto" > <DialogHeader> <DialogTitle> {"
</Dialog>
}</DialogTitle> </DialogHeader> {"
  mode === "list" ? (<div className="space-y-4" > <div className="flex justify-end" > <Button variant="outline" onClick= {"
</div>)
}/> </div>) : (<TemplateSaveForm onCancel= {)
  () => {
</TemplateSaveForm>

}</DialogContent> </Dialog>) 
          </div>;
          <TemplateSaveForm;

            onCancel={() => {;
</TemplateSaveForm>

      </DialogContent>
    </Dialog>
      </DialogContent>;

    </Dialog>;"

