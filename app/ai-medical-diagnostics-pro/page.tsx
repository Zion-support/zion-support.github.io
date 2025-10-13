import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Eye, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  Stethoscope,
  Activity,
  Shield,
  Zap,
  Target,
  Users,
  BarChart3,
  Clock,
  AlertTriangle,
  FileText,
  Microscope
} from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AIMedicalDiagnosticsProPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Medical Imaging",
      description: "Advanced deep learning algorithms analyze X-rays, MRIs, CT scans, and ultrasounds with 99.7% accuracy for early disease detection and diagnosis.",
      benefit: "Improve diagnostic accuracy by 40%"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardiovascular Risk Assessment",
      description: "Machine learning models analyze patient data, vital signs, and medical history to predict cardiovascular risks and recommend preventive measures.",
      benefit: "Reduce cardiac events by 35%"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Ophthalmology AI Analysis",
      description: "Computer vision technology detects diabetic retinopathy, glaucoma, macular degeneration, and other eye conditions from retinal images.",
      benefit: "Detect eye diseases 6 months earlier"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-time Vital Monitoring",
      description: "Continuous monitoring of patient vitals with AI-powered anomaly detection and early warning systems for critical health events.",
      benefit: "Prevent 80% of medical emergencies"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Treatment Plans",
      description: "AI-driven treatment recommendations based on patient genetics, medical history, and current condition for optimal outcomes.",
      benefit: "Improve treatment success by 50%"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Predictive Health Analytics",
      description: "Advanced analytics predict disease progression, treatment response, and patient outcomes to optimize care delivery.",
      benefit: "Reduce hospital readmissions by 45%"
    }
  ];

  const pricingPlans = [
    {
      name: "Clinic",
      price: "$299",
      period: "/month",
      description: "Perfect for small medical practices",
      features: [
        "Up to 100 patients/month",
        "Basic AI diagnostics",
        "Medical imaging analysis",
        "Standard reporting",
        "Email support",
        "HIPAA compliance"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Hospital",
      price: "$799",
      period: "/month",
      description: "Ideal for hospitals and large practices",
      features: [
        "Up to 1,000 patients/month",
        "Advanced AI diagnostics",
        "Full imaging suite",
        "Real-time monitoring",
        "Priority support",
        "API integration",
        "Custom workflows"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For healthcare systems and networks",
      features: [
        "Unlimited patients",
        "Full AI suite",
        "Custom integrations",
        "White-label options",
        "Dedicated support",
        "Advanced analytics",
        "Multi-site management"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const medicalSpecialties = [
    { name: "Radiology", logo: "📷" },
    { name: "Cardiology", logo: "❤️" },
    { name: "Ophthalmology", logo: "👁️" },
    { name: "Dermatology", logo: "🦠" },
    { name: "Pathology", logo: "🔬" },
    { name: "Neurology", logo: "🧠" },
    { name: "Oncology", logo: "🎗️" },
    { name: "Pediatrics", logo: "👶" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <SEOOptimizer 
        title="AI Medical Diagnostics Pro - Advanced Healthcare AI Platform | Zion Tech Group"
        description="Revolutionary AI-powered medical diagnostics platform with 99.7% accuracy in medical imaging, predictive analytics, and personalized treatment recommendations. Transform healthcare delivery today!"
        keywords="AI medical diagnostics, healthcare AI, medical imaging, predictive analytics, medical AI, healthcare technology, diagnostic AI"
        canonicalUrl="https://ziontechgroup.com/ai-medical-diagnostics-pro"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-8">
              <Stethoscope className="w-5 h-5 text-emerald-400 mr-2" />
              <span className="text-emerald-300 font-medium">AI-Powered Healthcare</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                AI Medical Diagnostics Pro
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI-powered medical diagnostics platform with 99.7% accuracy in medical imaging, 
              predictive analytics, and personalized treatment recommendations for better patient outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 border border-emerald-500 text-emerald-300 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Free 14-day trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                HIPAA compliant
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                FDA approved algorithms
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Medical AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence technology transforming healthcare delivery and patient outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-sm text-green-400 font-medium">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Healthcare-Focused Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your healthcare organization. All plans include HIPAA compliance and FDA-approved algorithms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border-emerald-500/50 ring-2 ring-emerald-500/20' 
                    : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
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
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700'
                      : 'border border-emerald-500 text-emerald-300 hover:bg-emerald-500/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Specialties Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Medical Specialties Supported
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered diagnostics across all major medical specialties with specialized algorithms and workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {medicalSpecialties.map((specialty, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {specialty.logo}
                </div>
                <span className="text-sm text-gray-300 text-center font-medium">
                  {specialty.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600/20 to-teal-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Healthcare Delivery Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of healthcare professionals using AI Medical Diagnostics Pro to improve patient outcomes and streamline care delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border border-emerald-500 text-emerald-300 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-emerald-400 hover:text-emerald-300">kleber@ziontechgroup.com</a> or <a href="tel:+13024640950" className="text-emerald-400 hover:text-emerald-300">+1 302 464 0950</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMedicalDiagnosticsProPage;
