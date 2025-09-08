
  const navigate = useNavigate();

  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service");
  const [isSubmitting, setIsSubmitting] = useState(false);





  const [formData, setFormData] = useState<QuoteFormData>({
    serviceType: ""


    serviceCategory: ""
    specificItem: null"
    projectName: """;
    projectDescription: "";
    startDate: undefined;
    endDate: undefined"
    timeline: "flexible"
    budget: {}
      amount: 0"
      type: "fixed"


    contactInfo: {
      name: ""
      email: ""
      phone: ""

      company: ""
    }



  }),







  };


    try {}
      // In a real application, you would send the data to your backend"
      console.log("Submitting form data:", formData);

  const handleSubmit = async () => {

      await new Promise(resolve => setTimeout(resolve, 1500)),

      

      // Redirect to confirmation page or homepage
      navigate("/")
    } catch (error) {
      toast({

        title: "Submission Failed"
        description: "There was an error submitting your request. Please try again."
        variant: "destructive"})

      toast ({
        title: "Quote Request Submitted",
        description: "We've received your request and will get back to you soon."}),
      // Redirect to confirmation page or homepage;
      navigate ("/");
    } catch (error) {
      toast ({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"});
    } finally {
      setIsSubmitting (false);
    }
  }
    } finally {
  
  const renderStepContent = () => {
    switch (currentStep) {
      case "service":
        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />,
      case "details":
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />,
      case "timeline":
        return <TimelineStep formData={formData} updateFormData={updateFormData} />,
      case "budget":
        return <BudgetStep formData={formData} updateFormData={updateFormData} />,
      case "summary":
        return <SummaryStep formData={formData} updateFormData={updateFormData} />,
      default: return null
    }
  }

  },
  
  };
  const handleSubmit = async () => {;
    setIsSubmitting(true);
    try {;
      // In a real application, you would send the data to your backend;
      console && console.log("Submitting form data:", formData);
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({;
        title: "Quote Request Submitted",;
        description: "We've received your request and will get back to you soon."}),;
      // Redirect to confirmation page or homepage;
      navigate("/");
    } catch (error) {;
      toast({;
        title: "Submission Failed",;
        description: "There was an error submitting your request. Please try again.",;
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  };
  const renderStepContent = () => {;
    switch (currentStep) {;
      case "service":;



  },

  };

  const handleSubmit = async () => {;
    setIsSubmitting(true);

    try {;
      // In a real application, you would send the data to your backend;"
      console && console.log("Submitting form data:", formData);

      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({;"
        title: "Quote Request Submitted",'"
        description: "We've received your request and will get back to you soon."}),;

      // Redirect to confirmation page or homepage;"
      navigate("/");
    } catch (error) {;
      toast({;"
        title: "Submission Failed","
        description: "There was an error submitting your request. Please try again.",;"
        variant: "destructive"});
    } finally {;
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {;
    switch (currentStep) {;"
      case "service":;

      case "details":;
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />;"
      case "timeline":;
        return <TimelineStep formData={formData} updateFormData={updateFormData} />;"
      case "budget":;
        return <BudgetStep formData={formData} updateFormData={updateFormData} />;"
      case "summary":;
        return <SummaryStep formData={formData} updateFormData={updateFormData} />;
      default: return null;
    }


  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-8">
          <GradientHeading>Request a Quote</GradientHeading>"
          <p className="text-zion-slate-light mt-4">'
            Tell us about your project and we'll create a customized quote for you;
          </p>"



                <Button
                  variant="outline"




      case "summary":;
        return <SummaryStep formData={formData} updateFormData={updateFormData} />;
      default: return null;
    }

              )}
;
  const renderStepContent = () =>: any {
    switch (current_step) {
      case "service":;
        return <ServiceTypeStep form_data={form_data} updateFormData={updateFormData} />;
      case "details":;
        return <ProjectDetailsStep form_data={form_data} updateFormData={updateFormData} />;
      case "timeline":;
        return <TimelineStep form_data={form_data} updateFormData={updateFormData} />;
      case "budget":;
        return <BudgetStep form_data={form_data} updateFormData={updateFormData} />;
      case "summary":;
        return <SummaryStep form_data={form_data} updateFormData={updateFormData} />;
      default: return null;
    }
  }
;
  return (
    <div className="container mx - auto px - 4 py - 12">;
      <div className="max - w-3xl mx - auto">;
        <div className="text - center mb - 8">;
          <GradientHeading > Request a Quote</GradientHeading>;
          <p className="text - zion - slate - light mt - 4">;
            Tell us about your project and we'll create a customized quote for you;
          </p>;
          <div className="inline - flex items - center bg - zion - blue - dark py - 1 px - 3 rounded - full mt - 3 border border - zion - purple / 20">;
            <Sparkles className="h - 4 w - 4 text - zion - cyan mr - 1" />;
            <span className="text - sm text - white">AI - powered matching</span>;
          </div>;
        </div>;
        <Card className="bg - zion - blue - dark border border - zion - blue - light mb - 8">;
          <CardContent className="px - 6 py - 8">;
            <StepProgress current_step={current_step} />;
            <div className="mt - 8">;
              {renderStepContent ()}
            </div>;
            <div className="flex justify - between mt - 8">;
              {current_step !== "service" && (
                <Button;
                  variant="outline";
                  on_click={handle_back}
                  className="border - zion - purple text - zion - cyan hover:bg - zion - purple / 10";
                >;
                  Back;
                </Button>)}
              {current_step !== "summary" ? (
                <Button;
                  on_click={handle_next}
                  className="ml - auto bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";
                >;
                  Continue;
                </Button>) : (
                <Button;
                  on_click={handle_submit}
                  disabled={is_submitting}
                  className="ml - auto bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";
                >;
                  {is_submitting ? "Submitting..." : "Submit Request"}
                </Button>)}




