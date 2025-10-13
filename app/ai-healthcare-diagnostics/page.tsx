import { ArrowRight, Heart, Brain, Stethoscope, CheckCircle, Star, Zap, Target, Shield, Activity } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIHealthcareDiagnostics() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Medical Imaging Analysis",
      description: "Advanced computer vision algorithms analyze X-rays, MRIs, CT scans, and ultrasounds with 99.2% accuracy"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Predictive Health Analytics",
      description: "Machine learning models predict disease progression, treatment outcomes, and patient risk factors"
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Automated Symptom Analysis",
      description: "AI-powered symptom checker that analyzes patient descriptions and provides preliminary assessments"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-time Vital Monitoring",
      description: "Continuous monitoring of vital signs with AI-driven alerts for critical changes or anomalies"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Personalized Treatment Plans",
      description: "AI-generated treatment recommendations based on patient history, genetics, and current conditions"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Drug Interaction Analysis",
      description: "Comprehensive analysis of medication interactions, allergies, and contraindications for safe prescribing"
    }
  ];

  const capabilities = [
    "Medical Image Analysis",
    "Disease Detection & Classification",
    "Treatment Recommendation Engine",
    "Drug Interaction Analysis",
    "Patient Risk Assessment",
    "Symptom Analysis & Triage",
    "Clinical Decision Support",
    "Electronic Health Records Integration",
    "Telemedicine Platform",
    "Clinical Trial Matching",
    "Population Health Analytics",
    "Regulatory Compliance"
  ];

  const pricingPlans = [
    {
      name: "Clinical",
      price: "$299",
      period: "/month",
      description: "Perfect for small clinics",
      features: [
        "Up to 100 patients/month",
        "Basic image analysis",
        "Symptom checker",
        "Standard reporting",
        "Email support",
        "HIPAA compliance"
      ],
      popular: false
    },
    {
      name: "Hospital",
      price: "$999",
      period: "/month",
      description: "Most popular for hospitals",
      features: [
        "Up to 1,000 patients/month",
        "Advanced AI diagnostics",
        "Predictive analytics",
        "Custom integrations",
        "Priority support",
        "Advanced reporting",
        "API access",
        "Multi-department support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large healthcare systems",
      features: [
        "Unlimited patients",
        "Custom AI models",
        "White-label platform",
        "24/7 dedicated support",
        "Advanced integrations",
        "Custom reporting",
        "Clinical consulting",
        "Research collaboration"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "Metropolitan Medical Center",
      role: "Chief Medical Officer",
      content: "Zion AI Healthcare Diagnostics has revolutionized our diagnostic accuracy. We've reduced misdiagnosis rates by 40% and improved patient outcomes significantly.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      company: "Regional Health System",
      role: "Radiology Director",
      content: "The medical imaging analysis is incredibly accurate. It caught several conditions that human radiologists initially missed, potentially saving lives.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      company: "Community Health Clinic",
      role: "Primary Care Physician",
      content: "The symptom analysis tool has been invaluable for triage. It helps us prioritize patients and provides excellent preliminary assessments.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Healthcare Diagnostics - Advanced Medical AI Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform healthcare with AI-powered diagnostics. Medical imaging analysis, predictive health analytics, automated symptom analysis, and personalized treatment plans for modern healthcare."
        />
        <meta
          name="keywords"
          content="AI healthcare, medical diagnostics, medical imaging analysis, predictive health analytics, symptom analysis, treatment recommendations, healthcare AI, medical AI"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
              <Heart className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">AI-Powered Healthcare Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                AI Healthcare Diagnostics
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize healthcare with AI-powered diagnostics, medical imaging analysis, 
              predictive health analytics, and personalized treatment recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.2%</div>
                <div className="text-gray-300">Diagnostic Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">40%</div>
                <div className="text-gray-300">Reduction in Misdiagnosis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Healthcare Facilities</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Healthcare AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to enhance diagnostic accuracy and improve patient outcomes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Healthcare AI Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the AI tools you need to transform healthcare delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Healthcare AI Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your healthcare facility's needs. All plans include 30-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-green-400 bg-gradient-to-br from-green-500/10 to-emerald-500/10'
                      : 'border-white/20 hover:border-green-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Healthcare Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what healthcare professionals say about AI Healthcare Diagnostics
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of healthcare facilities using AI Healthcare Diagnostics to improve patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}