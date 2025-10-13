import { Link } from 'react-router-dom';
const benefits = [
    "Advanced AI algorithms for accurate predictions",
    "Real-time risk assessment and monitoring",
    "Automated report generation and insights",
    "Seamless integration with existing systems",
    "24/7 monitoring and alert system",
    "Scalable cloud-based infrastructure"
  ];
const features = [
    {
      title: "Predictive Analytics",
      description: "Advanced machine learning models for accurate financial forecasting",
      icon: "Brain"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and mitigation strategies",
      icon: "Shield"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of financial metrics and KPIs",
      icon: "Activity"
    },
    {
      title: "Automated Reporting",
      description: "Generate detailed reports automatically",
      icon: "FileText"
    }
  ];
export default function Page() {
  const benefits = [
    "Benefit 1",
    "Benefit 2"
  ];
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
    <div>
      <Helmet>
        <title>AI Healthcare Diagnostics - Zion Tech Group | Medical AI Solutions</title>
        <meta
          name="description"
          content="Revolutionary AI-powered medical diagnostics with image analysis, symptom assessment, and treatment recommendations. Improve patient outcomes with 99.2% accuracy."
        />
        <meta
          name="keywords"
          content="AI healthcare, medical diagnostics, medical imaging, symptom analysis, drug interactions, predictive analytics, healthcare AI, medical AI"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-healthcare-diagnostics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-rose-400 mr-2" />
              <span className="text-rose-400 text-sm font-medium">99.2% Diagnostic Accuracy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Healthcare
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 animate-pulse">
                {" "}Diagnostics
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize healthcare with AI-powered medical diagnostics. Advanced image analysis, 
              symptom assessment, and treatment recommendations that improve patient outcomes and reduce costs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-rose-500/25 hover:scale-105"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-rose-400 text-rose-400 px-8 py-4 rounded-lg font-semibold hover:bg-rose-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our AI healthcare diagnostics platform combines cutting-edge machine learning with medical expertise 
                to deliver accurate, fast, and reliable diagnostic support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 relative overflow-hidden"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-rose-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Healthcare Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform healthcare delivery across different medical settings with our AI-powered diagnostic solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 relative overflow-hidden"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-rose-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="text-rose-400 text-sm font-medium">
                    {useCase.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your healthcare organization's needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/10 relative overflow-hidden ${
                    plan.popular 
                      ? 'border-rose-500/50 bg-gradient-to-br from-rose-500/10 to-pink-500/10' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-rose-400 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.plan}</h3>
                    <div className="text-3xl font-bold text-rose-400 mb-2">{plan.price}</div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <Link
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 group ${
                        plan.popular
                          ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 shadow-lg hover:shadow-rose-500/25'
                          : 'border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-900/30 to-pink-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading healthcare organizations using our AI diagnostics to improve patient outcomes, 
              reduce costs, and enhance medical decision-making. Start your transformation today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-rose-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-rose-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-rose-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-rose-500/25 hover:scale-105"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-rose-400 text-rose-400 px-8 py-4 rounded-lg font-semibold hover:bg-rose-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
