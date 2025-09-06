  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<QuoteRequestSteps>("service");
  const [isSubmitting, setIsSubmitting] = useState(false);
      case "service": setCurrentStep("details");
        break;
      case "details":;
        setCurrentStep("timeline");
        break;
      case "timeline":;
        setCurrentStep("budget");
        break;
      case "budget":;
        setCurrentStep("summary");
        break;
      default:;
        break;
    }
      case "details": setCurrentStep("service");
        break;
      case "timeline":;
        setCurrentStep("details");
        break;
      case "budget":;
        setCurrentStep("timeline");
        break;
      case "summary":;
        setCurrentStep("budget");
        break;
      default:;
        break;
    }
    } finally {
      setIsSubmitting (false);
    }
  }
        return <ServiceTypeStep formData={formData} updateFormData={updateFormData} />;
      case "details":;
        return <ProjectDetailsStep formData={formData} updateFormData={updateFormData} />;
      case "timeline":;
        return <TimelineStep formData={formData} updateFormData={updateFormData} />;
      case "budget":;
        return <BudgetStep formData={formData} updateFormData={updateFormData} />;
      case "summary":;
        return <SummaryStep formData={formData} updateFormData={updateFormData} />;
      default: return null;
    }
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">;
                  Back;
                </Button>;
              )}
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="ml-auto bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>;
              )}
            </div>;
          </CardContent>;
        </Card>;
      </div>;
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
