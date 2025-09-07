interface TemplateManagerProps {
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

      
    