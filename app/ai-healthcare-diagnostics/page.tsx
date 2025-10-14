import { Link } from "react-router-dom";

export default function AIHealthcareDiagnostics() {
  const features = [
    {
      title: "Medical Imaging Analysis",
      description: "Advanced AI algorithms analyze X-rays, MRIs, CT scans, and ultrasounds with 99.2% accuracy",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Early Disease Detection", "Reduced False Positives", "Faster Diagnosis", "Cost Savings"]
    },
    {
      title: "Symptom Assessment Engine",
      description: "Intelligent symptom analysis with differential diagnosis and treatment recommendations",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Comprehensive Analysis", "Risk Stratification", "Treatment Guidance", "Patient Education"]
    },
    {
      title: "Drug Interaction Checker",
      description: "Real-time medication interaction analysis and allergy detection for patient safety",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Safety Alerts", "Allergy Detection", "Dosage Optimization", "Compliance Tracking"]
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning models predict disease progression and treatment outcomes",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["Prognosis Prediction", "Treatment Optimization", "Risk Assessment", "Resource Planning"]
    }
  ];

  const useCases = [
    {
      title: "Radiology Departments",
      description: "Accelerate image analysis and improve diagnostic accuracy in radiology departments",
      impact: "40% faster diagnosis, 30% reduction in misdiagnosis"
    },
    {
      title: "Emergency Rooms",
      description: "Rapid triage and critical condition identification in emergency settings",
      impact: "50% faster triage, 25% improvement in critical case detection"
    },
    {
      title: "Primary Care",
      description: "Support general practitioners with comprehensive diagnostic assistance",
      impact: "60% more accurate initial diagnoses, 35% reduction in referrals"
    },
    {
      title: "Specialist Clinics",
      description: "Enhance specialist care with AI-powered diagnostic support and monitoring",
      impact: "45% improvement in treatment outcomes, 20% cost reduction"
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$499/month",
      description: "Perfect for small clinics and private practices",
      features: ["Up to 100 patients/month", "Basic imaging analysis", "Symptom assessment", "Email support"],
      popular: false
    },
    {
      plan: "Professional",
      price: "$999/month",
      description: "Ideal for medium-sized hospitals and medical centers",
      features: ["Up to 500 patients/month", "Advanced imaging analysis", "Drug interaction checking", "Predictive analytics", "Priority support"],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "Custom Pricing",
      description: "Comprehensive solution for large healthcare systems",
      features: ["Unlimited patients", "Full AI suite", "Custom integrations", "Dedicated support", "Training & consultation"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>"
        <title>Home - Zion Tech Group</title>""
        <meta name="description" content="Home - Zion Tech Group" />"
      </Helmet>""
      <div className=container mx-auto px-4 py-16></div>"""
        <div className=text-center></div>"""
          <h1 className=text-4xl font-bold text-white mb-8>Home</h1>""
          <p className="text-gray-300 text-lg">""
            This page is under construction. Please check back later.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
"""
"""
