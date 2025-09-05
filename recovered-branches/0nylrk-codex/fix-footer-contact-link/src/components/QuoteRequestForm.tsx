

export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary";

export function QuoteRequestForm() {_const _navigate = useNavigate();
  const { toast} = useToast();
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<QuoteFormData>({_serviceType: "", _serviceCategory: "", _specificItem: null, _projectName: "", _projectDescription: "", _startDate: undefined, _endDate: undefined, _timeline: "flexible", _budget: {
      amount: 0, _type: "fixed"},
    contactInfo: {_name: "", _email: "", _phone: "", _company: ""}
  });
  
  const _updateFormData = (_data: Partial<QuoteFormData>) => {_setFormData(prev => ({
      ...prev, _...data}));
  };
  
  const _handleNext = () => {_switch (currentStep) {
      case "service":
        setCurrentStep("details");
        break;
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
        break;}
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
      
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, _1500));
      
      toast({
        title: "Quote Request Submitted", _description: "We've received your request and will get back to you soon."});
      
      // Redirect to confirmation page or homepage
      navigate("/");
    } catch (error) {_toast({
        title: "Submission Failed", _description: "There was an error submitting your request. Please try again.", _variant: "destructive"});
    } finally {_setIsSubmitting(false);}
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
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <GradientHeading>Request a Quote</GradientHeading>
          <p className="text-zion-slate-light mt-4">
            Tell us about your project and we'll create a customized quote for you
          </p>
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />
            <span className="text-sm text-white">AI-powered matching</span>
          </div>
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
    </div>
  );
}
