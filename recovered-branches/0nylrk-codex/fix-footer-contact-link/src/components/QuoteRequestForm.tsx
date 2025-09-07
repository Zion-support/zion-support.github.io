



import {useState} from "react";""
import {useToast} from "@/hooks/use-toast";""
import {useNavigate} from "react-router-dom";""
import {Button} from "@/components/ui/button";""
import {Card, CardContent} from "@/components/ui/card";""
import {GradientHeading} from "@/components/GradientHeading";""
import {StepProgress} from "@/components/QuoteRequestForm/StepProgress";""
import {ServiceTypeStep} from "@/components/QuoteRequestForm/ServiceTypeStep";""
import {ProjectDetailsStep} from "@/components/QuoteRequestForm/ProjectDetailsStep";""
import {TimelineStep} from "@/components/QuoteRequestForm/TimelineStep";""
import {BudgetStep} from "@/components/QuoteRequestForm/BudgetStep";""
import {SummaryStep} from "@/components/QuoteRequestForm/SummaryStep";""
import {QuoteFormData} from "@/types/quotes";""
import {Sparkles} from "lucide-react";""
export type QuoteRequestSteps = "service" | "details" | "timeline" | "budget" | "summary";"
export function QuoteRequestForm() {;



  const navigate = useNavigate();
  const { toast } = useToast();"
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service");"
</QuoteRequestSteps>"
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service"),"
</QuoteRequestSteps>
  const [formData, setFormData] = useState<QuoteFormData>({
</QuoteFormData>)
  const updateFormData = (data: Partial<QuoteFormData>) => {
</QuoteFormData>
  const [formData, setFormData] = useState<QuoteFormData>({;
</QuoteFormData>)
  const updateFormData = (data: Partial<QuoteFormData>) => {;
</QuoteFormData>"
  const [current_step, setCurrentStep] = useState < QuoteRequestSteps>("service");"
  const [is_submitting, setIsSubmitting] = useState (false);
;
  const [form_data, setFormData] = useState < QuoteFormData>({"
    service_type: "",""
    service_category: "","
    specific_item: null,"
    project_name: "",""
    project_description: "","
    start_date: undefined,
    end_date: undefined,"
    timeline: "flexible","
    budget: {,
  amount: 0,"
      type: "fixed";"
    }
    contact_info: {,"
  name: "",""
      email: "",""
      phone: "",""
      company: "";"
    })
  });
;
  const updateFormData = (data: Partial < QuoteFormData>) =>: any {
  // TODO: Implement
}
    setFormData (prev => ({
      ...prev,
      ...data;)
    }));
  }
;
  const handle_next = () =>: any {
  // TODO: Implement
}
    switch (current_step) {"
      case "service": setCurrentStep ("details");"
        break;"
      case "details":;""
        setCurrentStep ("timeline");"
        break;"
      case "timeline":;""
        setCurrentStep ("budget");"
        break;"
      case "budget":;""
        setCurrentStep ("summary");"
        break;
      default:;
        break;
    }
  }
;
  const handle_back = () =>: any {
  // TODO: Implement
}
    switch (current_step) {"
      case "details": setCurrentStep ("service");"
        break;"
      case "timeline":;""
        setCurrentStep ("details");"
        break;"
      case "budget":;""
        setCurrentStep ("timeline");"
        break;"
      case "summary":;""
        setCurrentStep ("budget");"
        break;
      default:;
        break;
    }
  }
;
  const handle_submit = async () => {
    setIsSubmitting (true);
;
    try {
  // TODO: Implement
}
      // In a real application, you would send the data to your backend;"
      console.log ("Submitting form data:", form_data);"
;
      // Simulate API call;
      await new Promise (resolve => set_timeout (resolve, 1500));
;
      toast ({"
        title: "Quote Request Submitted",")"
        description: "We've received your request and will get back to you soon."}),"
      // Redirect to confirmation page or homepage;"
      navigate ("/");"
    } catch (error) {
      toast ({"
        title: "Submission Failed",""
        description: "There was an error submitting your request. Please try again.",")"
        variant: "destructive"});"
    } finally {
  // TODO: Implement
}
      setIsSubmitting (false);
    }
  }

    } finally {
  // TODO: Implement
}
      setIsSubmitting(false)
    }
  }
  },
  
  const renderStepContent = () => {
    switch (currentStep) {"
      case "service":"
  };

  const handleSubmit = async () => {;
    setIsSubmitting(true);

    try {;
      // In a real application, you would send the data to your backend;"
      console && console.log("Submitting form data:", formData);"
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({;"
        title: "Quote Request Submitted",;")"
        description: "We've received your request and will get back to you soon."}),;"
      // Redirect to confirmation page or homepage;"
      navigate("/");"
    } catch (error) {;
      toast({;"
        title: "Submission Failed",;""
        description: "There was an error submitting your request. Please try again.",;")"
        variant: "destructive"});"
    } finally {;
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {;
    switch (currentStep) {;"
      case "service":;"
        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />;
</ServiceTypeStep>
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />;
</ProjectDetailsStep>
        return <TimelineStep formData={formData} updateFormData={updateFormData} />;
</TimelineStep>
        return <BudgetStep formData={formData} updateFormData={updateFormData} />;
</BudgetStep>
        return <SummaryStep formData={formData} updateFormData={updateFormData} />;
</SummaryStep>"
    <div className="container mx-auto px-4 py-12">"
</div>"
      <div className="max-w-3xl mx-auto">"
</div>"
        <div className="text-center mb-8">"
</div>
          <GradientHeading>Request a Quote</GradientHeading>"
          <p className="text-zion-slate-light mt-4">"
</p>
          </p>"
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">"
</div>"
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />"
</Sparkles>"
            <span className="text-sm text-white">AI-powered matching</span>"
          </div>
        </div>"
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">"
</Card>"
          <CardContent className="px-6 py-8">"
</CardContent>
            <StepProgress currentStep={currentStep} />
</StepProgress>"
            <div className="mt-8">"
</div>
            </div>"
            <div className="flex justify-between mt-8">"
</div>
                <Button;"
                  variant="outline""
                  onClick={handleBack}"
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10""
                >
</Button>
                </Button>
                <Button;
                  onClick={handleNext}"
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white""
                >
</Button>
                </Button>
                <Button;
                  onClick={handleSubmit}
                  disabled={isSubmitting}"
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white""
                >
</Button>
                </Button>"
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service"),;"
</QuoteRequestSteps>
  const [formData, setFormData] = useState<QuoteFormData>({;
</QuoteFormData>)
  const updateFormData = (data: Partial<QuoteFormData>) => {;
</QuoteFormData>
        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />,;
</ServiceTypeStep>
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />,;
</ProjectDetailsStep>
        return <TimelineStep formData={formData} updateFormData={updateFormData} />,;
</TimelineStep>
        return <BudgetStep formData={formData} updateFormData={updateFormData} />,;
</BudgetStep>
        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />;
</ServiceTypeStep>
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />;
</ProjectDetailsStep>
        return <TimelineStep formData={formData} updateFormData={updateFormData} />;
</TimelineStep>
        return <BudgetStep formData={formData} updateFormData={updateFormData} />;
</BudgetStep>
        return <SummaryStep formData={formData} updateFormData={updateFormData} />;
</SummaryStep>"
    <div className="container mx-auto px-4 py-12">;"
</div>"
      <div className="max-w-3xl mx-auto">;"
</div>"
        <div className="text-center mb-8">;"
</div>
          <GradientHeading>Request a Quote</GradientHeading>;"
          <p className="text-zion-slate-light mt-4">;"
</p>
          </p>;"
          <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20">;"
</div>"
            <Sparkles className="h-4 w-4 text-zion-cyan mr-1" />;"
</Sparkles>"
            <span className="text-sm text-white">AI-powered matching</span>;"
          </div>;
        </div>;"
        <Card className="bg-zion-blue-dark border border-zion-blue-light mb-8">;"
</Card>"
          <CardContent className="px-6 py-8">;"
</CardContent>
            <StepProgress currentStep={currentStep} />;
</StepProgress>
"
            <div className="mt-8">;"
</div>
            </div>;"
            <div className="flex justify-between mt-8">;"
</div>
                <Button;"
                  variant="outline""
                  onClick={handleBack}"
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;"
</Button>
                </Button>;
                <Button;
                  onClick={handleNext}"
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;"
</Button>
                </Button>;
                <Button;
                  onClick={handleSubmit}
                  disabled={isSubmitting}"
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;"
</Button>
                </Button>;
        return <ServiceTypeStep form_data={form_data} updateFormData={updateFormData} />;
</ServiceTypeStep>
        return <ProjectDetailsStep form_data={form_data} updateFormData={updateFormData} />;
</ProjectDetailsStep>
        return <TimelineStep form_data={form_data} updateFormData={updateFormData} />;
</TimelineStep>
        return <BudgetStep form_data={form_data} updateFormData={updateFormData} />;
</BudgetStep>
        return <SummaryStep form_data={form_data} updateFormData={updateFormData} />;
</SummaryStep>"
    <div className="container mx - auto px - 4 py - 12">;"
</div>"
      <div className="max - w-3xl mx - auto">;"
</div>"
        <div className="text - center mb - 8">;"
</div>
          <GradientHeading > Request a Quote</GradientHeading>;"
          <p className="text - zion - slate - light mt - 4">;"
</p>
          </p>;"
          <div className="inline - flex items - center bg - zion - blue - dark py - 1 px - 3 rounded - full mt - 3 border border - zion - purple / 20">;"
</div>"
            <Sparkles className="h - 4 w - 4 text - zion - cyan mr - 1" />;"
</Sparkles>"
            <span className="text - sm text - white">AI - powered matching</span>;"
          </div>;
        </div>;"
        <Card className="bg - zion - blue - dark border border - zion - blue - light mb - 8">;"
</Card>"
          <CardContent className="px - 6 py - 8">;"
</CardContent>
            <StepProgress current_step={current_step} />;
</StepProgress>"
            <div className="mt - 8">;"
</div>
            </div>;"
            <div className="flex justify - between mt - 8">;"
</div>
                <Button;"
                  variant="outline";"
                  on_click={handle_back}"
                  className="border - zion - purple text - zion - cyan hover:bg - zion - purple / 10";"
                >;
</Button>
                </Button>)}
                <Button;
                  on_click={handle_next}"
                  className="ml - auto bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";"
                >;
</Button>
                </Button>) : (
                <Button;
                  on_click={handle_submit}
                  disabled={is_submitting}"
                  className="ml - auto bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";"
                >;
</Button>)
                </Button>)}
            </div>;
          </CardContent>;
        </Card>;
      </div>;
    </div>);
    </div>);
    </div>;"
const [currentStep, setCurrentStep] = useState<QuoteRequestSteps> ("service");"
</QuoteRequestSteps>"
return (<div className="container mx-auto px-4 py-12" > <div className="max-w-3xl mx-auto" > <div className="text-center mb-8" > <GradientHeading>Request a Quote</GradientHeading> <p className="text-zion-slate-light mt-4" > Tell us about your project and we'll create a customized quote for you </p> <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20" > <Sparkles className="h-4 w-4 text-zion-cyan mr-1" /> <span className="text-sm text-white" >AI-powered matching</span> </div> </div> <Button variant="outline" onClick= {"
  handleBack;)"
}className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10" > Back </Button>)"
}<Button onClick= {
  handleNext;"
}className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > Continue </Button>) : (<Button </Button>)"
}</div> </CardContent> </Card> </div> </div>) 
    </div>;
    </div>);"