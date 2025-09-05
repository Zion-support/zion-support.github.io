 export function QuoteRequestForm () {
  const navigate = useNavigate ();
const {
  toast 
}= useToast ();
const [currentStep, setCurrentStep] = useState<QuoteRequestSteps> ("service");
const [isSubmitting, setIsSubmitting] = useState (false);
break;
case "timeline": setCurrentStep ("budget");
break;
case "budget": setCurrentStep ("summary");
break;
break;
case "budget": setCurrentStep ("timeline");
break;
case "summary": setCurrentStep ("budget");
break;
toast ({
  
}finally {
  setIsSubmitting (false) 
}
};
const renderStepContent = () => {
  switch (currentStep) {
  default: return null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
};
return (<div className="container mx-auto px-4 py-12" > <div className="max-w-3xl mx-auto" > <div className="text-center mb-8" > <GradientHeading>Request a Quote</GradientHeading> <p className="text-zion-slate-light mt-4" > Tell us about your project and we'll create a customized quote for you </p> <div className="inline-flex items-center bg-zion-blue-dark py-1 px-3 rounded-full mt-3 border border-zion-purple/20" > <Sparkles className="h-4 w-4 text-zion-cyan mr-1" /> <span className="text-sm text-white" >AI-powered matching</span> </div> </div> <Button variant="outline" onClick= {
  handleBack 
}className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10" > Back </Button>) 
}<Button onClick= {
  handleNext 
}className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white" > Continue </Button>) : (<Button </Button>) 
}</div> </CardContent> </Card> </div> </div>) 
}