
        throw error}
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      if(data && data.markdownContent) { // Assuming your Supabase func returns { markdownContent: "..." }
        setGeneratedMarkdownContract(data.markdownContent)
        if(onLegalDraftGenerated) {
          onLegalDraftGenerated(data.markdownContent)}

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  }
      toast.info ("Generating PDF...");
      html2pdf ().from (element).set (opt).save ();
        .then (() => toast.success ("PDF downloaded successfully!"));
        .catch ((err) => {
          toast.error ("PDF generation failed.");
          console.error ("Error generating PDF:", err)})} else {
      toast.warn ("No draft content available to download or form values missing.")}
  }
      return}

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">;
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <DialogHeader>;
          <DialogTitle>Smart Contract Builder</DialogTitle>;
          <DialogDescription>;
            Create, customize, and deploy your smart contract or generate a legal draft.</DialogDescription>;
        </DialogHeader>;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">;
          <div className="flex justify-between items-center mb-4">;
            <TabsList className="grid grid-cols-3"> {/* Added new tab */}

                Templates;
              </Button>;
            </div>;
          </div>;

                  generatedContract = {generatedContract,}
                  talent = {talent,}
                  onClose = {onClose,}
                  deploymentInfo = {deploymentInfo,}

                      onClick = {handleDeployContract,}
                      disabled = {deployStatus === 'deploying',}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">;
                      {deployStatus === 'deploying' ? 'Deploying...' : 'Deploy to Blockchain'}
                    </Button>;
                  </div>                )}
              </div>;
            )}

        <TemplateManager
          isOpen = {templateManagerOpen,}
          onClose = {() => setTemplateManagerOpen(false),}
          onSelectTemplate = {handleLoadTemplate,}
          currentValues = {formValues,}

          </TabsContent>;
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        </Tabs>;

        <TemplateManager

          <TabsContent value="preview" className="pt-4">
            {generatedContract && (
              <div>
                <ContractPreview 

          isOpen={templateManagerOpen}
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          onClose={() => setTemplateManagerOpen(false)}
          onSelectTemplate={handleLoadTemplate}
          currentValues={formValues}

;

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
