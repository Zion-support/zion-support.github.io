import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, 
  Shield, 
  Brain, 
  CheckCircle, 
  Star, 
  BarChart3, 
  Activity, 
  FileText, 
  Stethoscope, 
  Pill, 
  Microscope, 
  AlertTriangle, 
  Camera, 
  Scan, 
  Thermometer, 
  Syringe, 
  Bandage } from 'lucide-react';
const AiHealthcarePlatformPage: React.FC = () => { const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true); }, []);
  const features = [
    { icon: <Brain className="w-6 h-6" />,
      title: "AI Diagnosis Assistant",
      description: "Advanced machine learning algorithms that assist healthcare professionals in accurate diagnosis and treatment planning.",
      benefits: ["Symptom analysis", "Disease prediction", "Treatment recommendations", "Risk assessment"] },
    { icon: <Camera className="w-6 h-6" />,
      title: "Medical Imaging AI",
      description: "AI-powered analysis of X-rays, MRIs, CT scans, and other medical images for faster and more accurate diagnosis.",
      benefits: ["Image analysis", "Anomaly detection", "Pattern recognition", "Radiology assistance"] },
    { icon: <FileText className="w-6 h-6" />,
      title: "Electronic Health Records",
      description: "Comprehensive EHR system with AI-powered data analysis, patient history tracking, and automated documentation.",
      benefits: ["Patient records", "Data analysis", "Automated notes", "Interoperability"] },
    { icon: <Stethoscope className="w-6 h-6" />,
      title: "Telemedicine Platform",
      description: "Secure video consultations, remote patient monitoring, and virtual care delivery with AI assistance.",
      benefits: ["Video consultations", "Remote monitoring", "Virtual care", "Patient engagement"] },
    { icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security and privacy protection with full HIPAA compliance and data encryption.",
      benefits: ["HIPAA compliance", "Data encryption", "Access controls", "Audit trails"] },
    { icon: <BarChart3 className="w-6 h-6" />,
      title: "Healthcare Analytics",
      description: "Comprehensive analytics and reporting for population health, clinical outcomes, and operational efficiency.",
      benefits: ["Population health", "Clinical outcomes", "Operational metrics", "Predictive analytics"] }
  ];
  const aiCapabilities = [
    { title: "Drug Interaction Checker",
      description: "AI-powered system that identifies potential drug interactions and adverse effects",
      icon: <Pill className="w-8 h-8" />,
      accuracy: "99.8%" },
    { title: "Symptom Checker",
      description: "Intelligent symptom analysis that provides preliminary health assessments",
      icon: <Thermometer className="w-8 h-8" />,
      accuracy: "95.2%" },
    { title: "Lab Result Analysis",
      description: "Automated analysis of laboratory results with trend monitoring and alerts",
      icon: <Microscope className="w-8 h-8" />,
      accuracy: "98.5%" },
    { title: "Treatment Optimization",
      description: "AI-driven treatment recommendations based on patient data and medical literature",
      icon: <Syringe className="w-8 h-8" />,
      accuracy: "97.3%" }
  ];
  const pricingPlans = [
    { name: "Clinic",
      price: "$399",
      period: "month",
      description: "Perfect for small clinics and private practices",
      features: [
        "Up to 50 patients",
        "Basic AI features",
        "EHR system",
        "Telemedicine",
        "Email support",
        "Basic analytics",
        "HIPAA compliance"
      ],
      popular: false },
    { name: "Hospital",
      price: "$899",
      period: "month",
      description: "Ideal for hospitals and large healthcare facilities",
      features: [
        "Up to 1,000 patients",
        "Advanced AI features",
        "Full EHR suite",
        "Advanced telemedicine",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "Multi-location support"
      ],
      popular: true },
    { name: "Enterprise",
      price: "$1,999",
      period: "month",
      description: "Complete solution for healthcare systems and networks",
      features: [
        "Unlimited patients",
        "Full AI capabilities",
        "Custom EHR",
        "Enterprise telemedicine",
        "24/7 dedicated support",
        "Custom development",
        "On-premise deployment",
        "White-label options"
      ],
      popular: false }
  ];
  const testimonials = [
    { name: "Dr. Sarah Williams",
      company: "Metro General Hospital",
      role: "Chief Medical Officer",
      content: "The AI diagnosis assistant has improved our diagnostic accuracy by 30%. It's like having a second opinion from the world's best specialists.",
      rating: 5 },
    { name: "Dr. Michael Chen",
      company: "Family Care Clinic",
      role: "Primary Care Physician",
      content: "The telemedicine platform has revolutionized our practice. We can now serve patients remotely while maintaining the same quality of care.",
      rating: 5 },
    { name: "Lisa Rodriguez",
      company: "Regional Medical Center",
      role: "IT Director",
      content: "The platform's analytics have given us insights into patient care patterns that we never had before. Our operational efficiency has improved by 40%.",
      rating: 5 }
  ];
  const specialties = [
    { name: "Cardiology", icon: <Heart className="w-6 h-6" /> },
    { name: "Radiology", icon: <Camera className="w-6 h-6" /> },
    { name: "Oncology", icon: <Microscope className="w-6 h-6" /> },
    { name: "Neurology", icon: <Brain className="w-6 h-6" /> },
    { name: "Pediatrics", icon: <Users className="w-6 h-6" /> },
    { name: "Emergency Medicine", icon: <AlertTriangle className="w-6 h-6" /> }
  ];
  return (
    <>
      <Helmet>
        <title>AI Healthcare Platform - Zion Tech Group | Advanced Medical Technology</title>
        <meta name="description" content="Revolutionary AI-powered healthcare platform with diagnosis assistance, medical imaging AI, and comprehensive patient care solutions." />
        <meta name="keywords" content="AI healthcare, medical AI, healthcare platform, telemedicine, EHR, medical imaging, healthcare analytics" />
        <meta property="og:title" content="AI Healthcare Platform - Zion Tech Group" />
        <meta property="og:description" content="Transform healthcare with AI-powered solutions for better patient outcomes." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        { /* Hero Section */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Healthcare Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Revolutionize healthcare with AI-powered solutions that enhance diagnosis accuracy, 
                improve patient outcomes, and streamline medical workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        { /* Features Section */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Healthcare Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform provides everything you need for modern healthcare delivery
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              { features.map((feature, index) => (
                <div key={index } className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    { feature.icon }
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{ feature.title }</h3>
                  <p className="text-gray-300 mb-4">{ feature.description }</p>
                  <ul className="space-y-2">
                    { feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex } className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        { benefit }
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* AI Capabilities Section */ }
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">AI-Powered Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technologies that enhance medical decision-making and patient care
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              { aiCapabilities.map((capability, index) => (
                <div key={index } className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    { capability.icon }
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{ capability.title }</h3>
                  <p className="text-gray-300 mb-4">{ capability.description }</p>
                  <div className="text-2xl font-bold text-cyan-400">{ capability.accuracy }</div>
                  <div className="text-sm text-gray-400">Accuracy Rate</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* Pricing Section */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Choose Your Plan</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options for healthcare organizations of all sizes
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              { pricingPlans.map((plan, index) => (
                <div key={index } className={ `bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-cyan-400' : 'border-white/20' } relative`}>
                  { plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  ) }
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{ plan.name }</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      { plan.price }<span className="text-lg text-gray-400">/{ plan.period }</span>
                    </div>
                    <p className="text-gray-300">{ plan.description }</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    { plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex } className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        { feature }
                      </li>
                    ))}
                  </ul>
                  <button className={ `w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300' 
                      : 'bg-white/20 text-white hover:bg-white/30' }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* Testimonials Section */ }
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">What Healthcare Professionals Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by healthcare organizations worldwide
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              { testimonials.map((testimonial, index) => (
                <div key={index } className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    { [...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i } className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{ testimonial.content }"</p>
                  <div>
                    <div className="font-semibold text-white">{ testimonial.name }</div>
                    <div className="text-cyan-400">{ testimonial.role }</div>
                    <div className="text-gray-400 text-sm">{ testimonial.company }</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* CTA Section */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Healthcare?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of healthcare professionals who trust our AI platform for better patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AiHealthcarePlatformPage;