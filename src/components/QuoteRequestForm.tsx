

export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary";

const _serviceStepSchema = z.object({_serviceType: z.string().min(1), _specificItem: z.object({ id: z.string()})});

export function QuoteRequestForm() {_const _router = useRouter();
  const { toast} = useToast();
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [autoFillLoading, setAutoFillLoading] = useState(false);
  const [autoFillOpen, setAutoFillOpen] = useState(false);
  
  const [formData, setFormData] = useState<QuoteFormData>({_serviceType: "", _serviceCategory: "", _specificItem: null, _projectName: "", _projectDescription: "", _startDate: undefined, _endDate: undefined, _timeline: "flexible", _budget: {
      amount: 0, _type: "fixed"},
    contactInfo: {_name: "", _email: "", _phone: "", _company: ""}
  });
  
  const _updateFormData = (_data: Partial<QuoteFormData>) => {_setFormData(prev => ({
      ...prev, _...data}));
  };
  
  const _handleNext = () => {_switch (currentStep) {
      case "service": {
        const _result = serviceStepSchema.safeParse({
          serviceType: formData.serviceType, _specificItem: formData.specificItem});
        if (!result.success) {_toast({
            title: "Service Required", _description: "Please select a service before continuing.", _variant: "destructive"});
          return;
        }
        setCurrentStep("details");
        break;
      }
      case "details":
        setCurrentStep("timeline");
        break;
      case "timeline":
        setCurrentStep("budget");
        break;
      case "budget":
        setCurrentStep("summary");
        break;
      default:
        break;
    }
  };
  
  const _handleBack = () => {_switch (currentStep) {
      case "details":
        setCurrentStep("service");
        break;
      case "timeline":
        setCurrentStep("details");
        break;
      case "budget":
        setCurrentStep("timeline");
        break;
      case "summary":
        setCurrentStep("budget");
        break;
      default:
        break;}
  };
  
  const _handleSubmit = async () => {_setIsSubmitting(true);
    
    try {
      // In a real application, _you would send the data to your backend
      logDebug("Submitting form data:", _{ data: formData});
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({_title: "Quote Request Submitted", _description: "We've received your request and will get back to you soon."});
      
      // Redirect to confirmation page or homepage
      router.push("/");
    } catch (error) {_toast({
        title: "Submission Failed", _description: "There was an error submitting your request. Please try again.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
  };

  const _handleAutoFill = async (_description: string) => {_setAutoFillLoading(true);
    try {
      const _res = await fetch("/api/openai/match", _{
        method: "POST", _headers: { "Content-Type": "application/json"},
        body: JSON.stringify({_projectDescription: description})});
      if (!res.ok) throw new Error("Request failed");
      const {_category, _itemId, _timeline, _budget} = await res.json();
      updateFormData({_projectDescription: description, _serviceType: category, _serviceCategory: category, _specificItem: itemId
          ? { id: itemId, _title: "AI Selected Item", _category}
          : formData.specificItem,
        timeline: timeline || formData.timeline,
        budget: {_...formData.budget, _...(budget || {}) }});
      setCurrentStep("summary");
      setAutoFillOpen(false);
    } catch (err) {_logErrorToProduction("Auto-fill API error", _err as Error, _{ component: 'QuoteRequestForm', _projectDescription: description});
      toast({_title: "Auto-fill Failed", _description: "We couldn't process your request. Please try again.", _variant: "destructive"});
    } finally {_setAutoFillLoading(false);}
  };
  
  const _renderStepContent = () => {_switch (currentStep) {
      case "service":
        return <ServiceTypeStep formData={formData} updateFormData={_updateFormData} />;
      case "details":
        return <ProjectDetailsStep formData={_formData} updateFormData={_updateFormData} />;
      case "timeline":
        return <TimelineStep formData={_formData} updateFormData={_updateFormData} />;
      case "budget":
        return <BudgetStep formData={_formData} updateFormData={_updateFormData} />;
      case "summary":
        return <SummaryStep formData={_formData} updateFormData={_updateFormData} />;
      default:
        return null;
    }
  };
  
  return (_<div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 space-y-3">
          <GradientHeading>Request a Quote</GradientHeading>
          <p className="text-zion-slate-light mt-4">
            Tell us about your project and we'll create a customized quote for you
          </p>
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />
            <span className="text-sm text-white">AI-powered matching</span>
          </div>
          <Button
            size="sm"
            onClick={_() => setAutoFillOpen(true)}
            disabled={_autoFillLoading}
            className="mt-2"
          >
            {_autoFillLoading && (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            )}
            Auto Fill with AI
          </Button>
        </div>
        
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">
          <CardContent className="px-6 py-8">
            <StepProgress currentStep={_currentStep} />
            
            <div className="mt-8">
              {_renderStepContent()}
            </div>
            
            <div className="flex justify-between mt-8">
              {_currentStep !== "service" && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                >
                  Back
                </Button>
              )}
              
              {_currentStep !== "summary" ? (
                <Button 
                  onClick={handleNext}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                >
                  Continue
                </Button>
              ) : (
                <Button 
                  onClick={_handleSubmit}
                  disabled={_isSubmitting}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                >
                  {_isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <AutoFillModal
        open={_autoFillOpen}
        onOpenChange={_setAutoFillOpen}
        onSubmit={_handleAutoFill}
        loading={_autoFillLoading}
      />
    </div>
  );
}
