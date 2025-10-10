'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Heart, Eye, Users, BarChart, Target, CheckCircle, ArrowRight, Star, Globe, Database, Settings, Lock, TrendingUp, Cpu, Stethoscope, Activity } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiHealthcareSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Medical Diagnosis',
      description: 'Advanced AI algorithms for accurate medical diagnosis and treatment recommendations.',
      benefits: ['95% diagnostic accuracy', 'Faster diagnosis', 'Reduced errors', 'Evidence-based treatment']
    },
    {
      icon: Eye,
      title: 'Medical Imaging AI',
      description: 'AI-powered analysis of medical images including X-rays, MRIs, and CT scans.',
      benefits: ['Image analysis', 'Tumor detection', 'Early diagnosis', 'Radiologist assistance']
    },
    {
      icon: Heart,
      title: 'Predictive Analytics',
      description: 'AI-driven predictive models for patient outcomes and health risk assessment.',
      benefits: ['Risk prediction', 'Early intervention', 'Outcome optimization', 'Personalized care']
    },
    {
      icon: Users,
      title: 'Patient Monitoring',
      description: 'Real-time patient monitoring with AI-powered alerts and health tracking.',
      benefits: ['Continuous monitoring', 'Real-time alerts', 'Health tracking', 'Remote care']
    }
  ];

  const solutions = [
    {
      title: 'AI Diagnostic Platform',
      description: 'Comprehensive AI platform for medical diagnosis with image analysis and clinical decision support.',
      icon: Stethoscope,
      features: ['Medical imaging analysis', 'Clinical decision support', 'Diagnostic accuracy', 'Treatment recommendations'],
      price: 'Starting at $50,000/month',
      marketPrice: '$100,000-300,000/month',
      benefits: ['95% diagnostic accuracy', '60% faster diagnosis', '40% cost reduction']
    },
    {
      title: 'AI Drug Discovery',
      description: 'AI-powered drug discovery platform for pharmaceutical research and development.',
      icon: Activity,
      features: ['Molecular analysis', 'Drug design', 'Clinical trials', 'Safety assessment'],
      price: 'Starting at $100,000/month',
      marketPrice: '$200,000-500,000/month',
      benefits: ['50% faster drug development', '90% success rate', 'Cost optimization']
    },
    {
      title: 'AI Patient Management',
      description: 'Intelligent patient management system with AI-powered care coordination and monitoring.',
      icon: Users,
      features: ['Patient records', 'Care coordination', 'Health monitoring', 'Appointment scheduling'],
      price: 'Starting at $25,000/month',
      marketPrice: '$50,000-150,000/month',
      benefits: ['30% efficiency improvement', 'Better patient outcomes', 'Reduced readmissions']
    },
    {
      title: 'AI Medical Imaging',
      description: 'Advanced AI system for medical image analysis and radiology assistance.',
      icon: Eye,
      features: ['Image analysis', 'Tumor detection', 'Radiology assistance', 'Quality assurance'],
      price: 'Starting at $35,000/month',
      marketPrice: '$70,000-200,000/month',
      benefits: ['99% accuracy rate', '50% faster analysis', 'Early detection']
    },
    {
      title: 'AI Telemedicine',
      description: 'AI-powered telemedicine platform with virtual consultations and remote monitoring.',
      icon: Globe,
      features: ['Virtual consultations', 'Remote monitoring', 'AI triage', 'Prescription management'],
      price: 'Starting at $15,000/month',
      marketPrice: '$30,000-80,000/month',
      benefits: ['80% accessibility improvement', 'Cost-effective care', 'Better patient experience']
    },
    {
      title: 'AI Clinical Trials',
      description: 'AI-optimized clinical trial management with patient matching and outcome prediction.',
      icon: BarChart,
      features: ['Patient matching', 'Outcome prediction', 'Trial optimization', 'Data analysis'],
      price: 'Starting at $40,000/month',
      marketPrice: '$80,000-200,000/month',
      benefits: ['40% faster trials', 'Better patient matching', 'Improved outcomes']
    }
  ];

  const applications = [
    {
      title: 'Radiology',
      description: 'AI-powered analysis of medical images for accurate diagnosis and treatment planning.',
      icon: Eye,
      impact: '99% accuracy rate'
    },
    {
      title: 'Cardiology',
      description: 'AI-driven cardiac analysis and heart disease prediction with early intervention.',
      icon: Heart,
      impact: '95% prediction accuracy'
    },
    {
      title: 'Oncology',
      description: 'AI-powered cancer detection, treatment planning, and personalized medicine.',
      icon: Target,
      impact: '90% early detection'
    },
    {
      title: 'Neurology',
      description: 'AI analysis of brain scans and neurological conditions with treatment optimization.',
      icon: Brain,
      impact: '85% diagnostic accuracy'
    },
    {
      title: 'Pathology',
      description: 'AI-powered tissue analysis and disease classification for accurate diagnosis.',
      icon: Activity,
      impact: '98% classification accuracy'
    },
    {
      title: 'Emergency Medicine',
      description: 'AI triage and emergency response optimization for faster patient care.',
      icon: Users,
      impact: '60% faster response'
    }
  ];

  const compliance = [
    {
      standard: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance for patient data protection.',
      icon: Lock,
      coverage: '100% compliance'
    },
    {
      standard: 'FDA Approval',
      description: 'Food and Drug Administration approval for medical AI devices and software.',
      icon: CheckCircle,
      coverage: 'FDA approved'
    },
    {
      standard: 'ISO 13485',
      description: 'Medical device quality management system certification.',
      icon: Settings,
      coverage: '100% compliance'
    },
    {
      standard: 'SOC 2 Type II',
      description: 'Security and availability controls for healthcare data processing.',
      icon: Shield,
      coverage: '100% compliance'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Healthcare Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered healthcare solutions including medical diagnosis, drug discovery, patient management, and telemedicine. Transform healthcare with intelligent technology." />
        <meta name="keywords" content="AI healthcare, medical diagnosis, drug discovery, telemedicine, medical imaging, clinical trials, healthcare AI" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Healthcare Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize healthcare with AI-powered solutions. From medical diagnosis to drug discovery, 
                our intelligent healthcare platform delivers accurate, efficient, and personalized medical care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Explore Healthcare AI
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              AI Healthcare Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Solutions Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              AI Healthcare Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Proven Results:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                          <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-cyan-400 font-semibold">{solution.price}</span>
                      <span className="text-gray-400 text-sm line-through">{solution.marketPrice}</span>
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-center block"
                  >
                    Get Quote
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Applications Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Medical Specialties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <application.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{application.title}</h3>
                  <p className="text-gray-300 mb-4">{application.description}</p>
                  <div className="text-2xl font-bold text-green-400">{application.impact}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Compliance Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Healthcare Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {compliance.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.standard}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="text-2xl font-bold text-blue-400">{item.coverage}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Transform Healthcare with AI
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the healthcare revolution. Contact our medical AI experts for a consultation 
                and discover how AI-powered healthcare solutions can improve patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Schedule Healthcare Demo
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Email Our Healthcare Team
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AiHealthcareSolutionsPage;