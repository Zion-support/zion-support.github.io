interface WizardStep {

  title: string
  description: string
  icon: React.ReactNode
  action: {
  const [currentStep, setCurrentStep] = useState(0);

  const navigate = useNavigate();
  const { user } = useAuth();
    {
      title: "Complete your profile"
      description: "Add your skills, experience, and preferences";
            "Let's build your professional profile"}
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="flex items-center mb-6">;
          {/* Step dots */}
          <div className="flex items-center justify-center flex-1">;
            {steps && steps.map((_, index) => (;
              <div
                key={index}
                className={cn(
                  index === currentStep
                    ? "bg-zion-purple scale-125"
                    : index < currentStep
                    ? "bg-zion-cyan"
                    : "bg-zion-blue-light"
                )}
              />;
            ))}
            {steps[currentStep].icon}
          </div>;
          <h3 className="text-xl font-bold text-white mb-2">{steps[currentStep].title}</h3>;
          <p className="text-zion-slate-light mb-6">{steps[currentStep].description}</p>;
        </div>;
      </CardContent>;
      <CardFooter className="flex flex-col space-y-2">;
        <Button
          className="w-full bg-zion-purple hover:bg-zion-purple-light"
          <Button
            variant="ghost"
            className="text-zion-slate-light hover:text-white"
            onClick={handleSkip}>;
            {steps[currentStep].skipText}
          </Button>;
        )}
=======
      icon: <FileText className="h - 6 w - 6 text - zion - purple" />,
      action: {
        text: "Edit Profile",
        url: "/profile";
      }
      skip_text: "I'll do this later";
    }
    {
      title: "Define skills & availability",
      description: "Let clients know when you're available and what you can do",
      icon: <Calendar className="h - 6 w - 6 text - zion - cyan" />,
      action: {
        text: "Set Availability",
        url: "/profile?tab = skills";
      }
      skip_text: "Skip for now";
    }
    {
      title: "Preview your profile",
      description: "See how clients will view your profile",
      icon: <Eye className="h - 6 w - 6 text - zion - purple" />,
      action: {
        text: "Preview Profile",
        url: `/talent/${user?.id}`;
      }
      skip_text: "Skip for now";
    }
    {
      title: "Enable AI matchmaking",
      description: "Let our AI find the perfect opportunities for you",
      icon: <Rocket className="h - 6 w - 6 text - zion - cyan" />,
      action: {
        text: "Enable Matchmaking",
        url: "/talent - dashboard";
      }
    }
  ];
;
  const steps = type === 'client' ? client_steps : talent_steps;
;
  // Navigate to the specified URL;
  const handle_action = () =>: any {
    // Check condition
if ( {) {
  $2
}
      navigate (steps[current_step].action.url);
      setCurrentStep (current_step + 1);
    } else {
      // Last step;
      navigate (steps[current_step].action.url);
      on_complete ();
    }
  }
;
  // Skip the current step;
  const handle_skip = () =>: any {
    // Check condition
if ( {) {
  $2
}
      setCurrentStep (current_step + 1);
    } else {
      // Last step;
      on_skip ();
    }
  }
;
  return (
    <Card className={cn ("border border - zion - blue - light bg - zion - blue - dark / 80 backdrop - blur - sm w - full max - w-md", class_name)}>;
      <CardHeader>;
        <CardTitle className="text - center text - white">;
          {type === 'client' ?;
            "Ready to find top IT talent?" :;
            "Let's build your professional profile"}
        </CardTitle>;
      </CardHeader>;
      <CardContent>;
        <div className="flex items - center mb - 6">;
          {/* Step dots */}
          <div className="flex items - center justify - center flex - 1">;
            {steps.map ((_, index) => (
              <div;
                key={index}
                className={cn (
                  "h - 2 w - 2 rounded - full mx - 1";
                  index === current_step;
                    ? "bg - zion - purple scale - 125";
                    : index < current_step;
                    ? "bg - zion - cyan";
                    : "bg - zion - blue - light")}
              />))}
          </div>;
        </div>;
        <div className="flex flex - col items - center text - center p - 4">;
          <div className="bg - gradient - to - br from - zion - blue to - zion - purple / 20 p - 4 rounded - full mb - 4">;
            {steps[current_step].icon}
          </div>;
          <h3 className="text - xl font - bold text - white mb - 2">{steps[current_step].title}</h3>;
          <p className="text - zion - slate - light mb - 6">{steps[current_step].description}</p>;
        </div>;
      </CardContent>;
      <CardFooter className="flex flex - col space - y-2">;
        <Button;
          className="w - full bg - zion - purple hover:bg - zion - purple - light";
          on_click={handle_action}
        >;
          {steps[current_step].action.text}
        </Button>;
        {steps[current_step].skip_text && (
          <Button;
            variant="ghost";
            className="text - zion - slate - light hover:text - white";
            on_click={handle_skip}
          >;
            {steps[current_step].skip_text}
          </Button>)}
      </CardFooter>;
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
