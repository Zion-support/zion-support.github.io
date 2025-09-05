
import Rocket from 'lucide-react/dist/esm/icons/rocket';

interface WizardStep {_title: string;
  description: string;
  icon: React.ReactNode;
  action: {
    text: string;
    url: string;};
  skipText?: string;
}

interface OnboardingWizardProps {_type: 'client' | 'talent';
  onComplete: () => void;
  onSkip: () => void;
  className?: string;}

export function OnboardingWizard(_{_type, _onComplete, _onSkip, _className}: OnboardingWizardProps) {_const [currentStep, _setCurrentStep] = useState(0);
  const _navigate = useNavigate();
  const { user} = useAuth();
  
  // Define steps based on user type
  const clientSteps: WizardStep[] = [
    {_title: "Post your first job", _description: "Describe the talent you need for your project", _icon: <FileText className="h-6 w-6 text-zion-purple" />, _action: {
        text: "Post a Job", _url: "/post-job"},
      skipText: "I'll do this later"
    },
    {_title: "View suggested matches", _description: "Our AI system will find the best talent matches", _icon: <Users className="h-6 w-6 text-zion-cyan" />, _action: {
        text: "View Matches", _url: "/talent"},
      skipText: "Skip for now"
    },
    {_title: "Contact talent", _description: "Reach out to the talent that fits your needs", _icon: <MessageSquare className="h-6 w-6 text-zion-purple" />, _action: {
        text: "Browse Talent", _url: "/talent"}
    }
  ];

  const talentSteps: WizardStep[] = [
    {_title: "Complete your profile", _description: "Add your skills, _experience, _and preferences", _icon: <FileText className="h-6 w-6 text-zion-purple" />, _action: {
        text: "Edit Profile", _url: "/profile"},
      skipText: "I'll do this later"
    },
    {_title: "Define skills & availability", _description: "Let clients know when you're available and what you can do", _icon: <Calendar className="h-6 w-6 text-zion-cyan" />, _action: {
        text: "Set Availability", _url: "/profile?tab=skills"},
      skipText: "Skip for now"
    },
    {_title: "Preview your profile", _description: "See how clients will view your profile", _icon: <Eye className="h-6 w-6 text-zion-purple" />, _action: {
        text: "Preview Profile", _url: `/talent/${user?.id}`
      },
      skipText: "Skip for now"
    },
    {_title: "Enable AI matchmaking", _description: "Let our AI find the perfect opportunities for you", _icon: <Rocket className="h-6 w-6 text-zion-cyan" />, _action: {
        text: "Enable Matchmaking", _url: "/talent-dashboard"}
    }
  ];
  
  const _steps = type === 'client' ? clientSteps : talentSteps;

  // Navigate to the specified window.URL
  const _handleAction = () => {_if (currentStep < steps.length - 1) {
      navigate(steps[currentStep].action.url);
      setCurrentStep(currentStep + 1);} else {_// Last step
      navigate(steps[currentStep].action.url);
      onComplete();}
  };
  
  // Skip the current step
  const _handleSkip = () => {_if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);} else {_// Last step
      onSkip();}
  };
  
  return (
    <Card className={_cn("border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md", _className)}>
      <CardHeader>
        <CardTitle className="text-center text-white">
          {_type === 'client' ? 
            "Ready to find top IT talent?" : 
            "Let's build your professional profile"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-6">
          {_/* Step dots */}
          <div className="flex items-center justify-center flex-1">
            {_steps.map(_(_, _index) => (
              <div
                key={index}
                className={_cn(
                  "h-2 w-2 rounded-full mx-1", _index === currentStep
                    ? "bg-zion-purple scale-125"
                    : index < currentStep
                    ? "bg-zion-cyan"
                    : "bg-zion-blue-light"
                )}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">
            {_steps[currentStep].icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{_steps[currentStep].title}</h3>
          <p className="text-zion-slate-light mb-6">{_steps[currentStep].description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button
          className="w-full bg-zion-purple hover:bg-zion-purple-light"
          onClick={_handleAction}
        >
          {_steps[currentStep].action.text}
        </Button>
        
        {_steps[currentStep].skipText && (
          <Button
            variant="ghost"
            className="text-zion-slate-light hover:text-white"
            onClick={handleSkip}
          >
            {_steps[currentStep].skipText}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
