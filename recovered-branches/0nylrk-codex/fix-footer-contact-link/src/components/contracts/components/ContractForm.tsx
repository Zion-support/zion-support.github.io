  deployOptions?: DeploymentOptions;
  onDeployOptionsChange?: (options: DeploymentOptions) => void;
}
  talent;
  clientName;
  initialValues;
  onFormValuesChange;
  onContractGenerated;
  deployOptions;
  onDeployOptionsChange;
}: ContractFormProps) {;
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMilestones, setGeneratedMilestones] = useState<GeneratedMilestone[]>([]);
  const { toast } = useToast();
        const typedKey = key as keyof ContractFormValues;
        form && form.setValue(typedKey, initialValues[typedKey]);
      });
    }
  }, [initialValues, form]);
    } finally {
      setIsGenerating (false);
    }
  }
  return (
    <>;
      <DialogHeader>;
        <DialogTitle className="text - xl">Contract Builder</DialogTitle>;
        <DialogDescription>;
          Create a professional contract for your project with {talent.full_name}
          <PaymentTermsFields
            form={form}
            talent={talent}
            handleMilestonesGenerated={handleMilestonesGenerated}
            className="w-full bg-zion-purple hover:bg-zion-purple-dark"
            disabled={isGenerating}>;
            {isGenerating ? (;
              <>;
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                Generating Contract...;
              </>;
            ) : (;
              "Generate Contract";
            )}
        >;
          Reset Form;
        </Button>;
      </DialogFooter>;
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
