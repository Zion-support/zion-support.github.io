
    <Dialog open={isOpen} onOpenChange={onClose}>;
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">;
        <DialogHeader>;
          <DialogTitle>;

              >;
                Save Current as Template;
              </Button>;
            </div>;

            editTemplate={selectedTemplate}
            currentValues={currentValues}
          />;
        )}
      </DialogContent>;
    </Dialog>;

}