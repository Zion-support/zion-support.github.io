
export default function ConsultationPage() {
  const benefits = [
    "Benefit 1",
    "Benefit 2"
  ];
  const features = [
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" }
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value;
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 3000);
  };

  const consultationTypes = [
    {
      title: "AI Strategy Consultation",
      description: "Comprehensive AI strategy development and implementation planning",
      duration: "2-3 hours",
      price: "Free",
      icon: <Brain className="w-6 h-6" />,
      features: ["AI Readiness Assessment", "Technology Roadmap", "ROI Analysis", "Implementation Plan"]
    },
    {
      title: "IT Infrastructure Review",
      description: "Complete IT infrastructure assessment and optimization recommendations",
      duration: "1-2 hours",
      price: "Free",
      icon: <Shield className="w-6 h-6" />,
      features: ["Security Audit", "Performance Analysis", "Cost Optimization", "Scalability Planning"]
    },
    {
      title: "Digital Transformation Planning",
      description: "End-to-end digital transformation strategy and execution plan",
      duration: "3-4 hours",
      price: "Free",
      icon: <Zap className="w-6 h-6" />,
      features: ["Current State Analysis", "Future State Vision", "Gap Analysis", "Change Management"]
    },
    {
      title: "5G Implementation Strategy",
      description: "5G network planning and implementation strategy consultation",
      duration: "2-3 hours",
      price: "Free",
      icon: <Globe className="w-6 h-6" />,
      features: ["Network Planning", "Use Case Analysis", "Technology Selection", "Implementation Timeline"]
    }
  ];
}