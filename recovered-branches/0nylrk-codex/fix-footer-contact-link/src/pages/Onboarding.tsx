  const { user, updateProfile, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);

  const [userType, setUserType] = useState<"serviceProvider" | "talent" | "client" | null>(null);
  const navigate = useNavigate();
      case "serviceProvider": return "creator";
      case "talent":;
        return "jobSeeker";
      navigate('/talent-onboarding');
      return;
    }
      navigate('/login');
      return;
    }
  }
  return (
                <Step
                  key={index}
                  status={
                    currentStep> index;
                      ? "complete";
                      : currentStep === index;
                      ? "current";
                      : "incomplete";
                  }
                  label={step && step.label}
                  description={step && step.description}
                />;
              ))}
                <Button
                  variant="outline"
                  className="w-full border-zion-blue-light text-white hover:bg-zion-blue-light"
                  onClick={() => setCurrentStep(0)}
                >;
                  Back to Role Selection;
                </Button>;
              </div>;
            )}
          </div>;
        </div>;
      </div>;
      <Footer />;
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
