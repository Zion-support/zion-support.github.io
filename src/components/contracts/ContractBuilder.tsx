isOpen;
  onClose;
  talent;
  clientName;

  onContractGenerated;
}: ContractBuilderProps) {;
  const [activeTab, setActiveTab] = useState<string>("form");
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<ContractFormValues | undefined>(;
    undefined;
  );
  const [templateManagerOpen, setTemplateManagerOpen] = useState(false);
  const [showSmartContractBuilder, setShowSmartContractBuilder] = useState(false);

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        }}
        talent = {talent,}
        clientName = {clientName,}
        onContractGenerated = {onContractGenerated,}
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
                className="flex gap-1"
              >
                <Save className="h-4 w-4" />
                Templates
              </Button>

                variant="outline" 
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                size="sm"
                onClick = {(,) => setTemplateManagerOpen(true),}
                className="flex gap-1";
              >;
                <Save className="h-4 w-4" />;
                Templates;
              </Button>;

              <Button
                variant="secondary"
                size="sm"

              talent = {talent,}
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              clientName = {clientName,}
              initialValues = {formValues,}
              onFormValuesChange = {setFormValues,}
              onContractGenerated = {handleContractGenerated,}

                contractContent = {generatedContract,}
                talent = {talent,}
                onClose = {onClose,}
                status="ready"

        <TemplateManager
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          isOpen = {templateManagerOpen,}
          onClose = {() => setTemplateManagerOpen(false),}
          onSelectTemplate = {handleLoadTemplate,}
          currentValues = {formValues,}

        />;
      </DialogContent>;
    </Dialog>;
  );

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
