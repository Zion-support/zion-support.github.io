'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  HeartIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  MicrophoneIcon,
  EyeIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

const AIMedicalAssistantPage: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');

  const features = [
    {
      icon: CpuChipIcon,
      title: 'Symptom Analysis',
      description: 'AI-powered symptom checker and preliminary diagnosis',
      benefits: ['Symptom assessment', 'Risk evaluation', 'Recommendation engine', 'Emergency alerts']
    },
    {
      icon: DocumentTextIcon,
      title: 'Medical Records',
      description: 'Intelligent medical record management and analysis',
      benefits: ['Record digitization', 'Pattern recognition', 'Trend analysis', 'Alert system']
    },
    {
      icon: BeakerIcon,
      title: 'Lab Results',
      description: 'Automated lab result interpretation and monitoring',
      benefits: ['Result analysis', 'Reference ranges', 'Trend tracking', 'Alert notifications']
    },
    {
      icon: HeartIcon,
      title: 'Vital Monitoring',
      description: 'Real-time vital signs monitoring and analysis',
      benefits: ['Continuous monitoring', 'Anomaly detection', 'Trend analysis', 'Emergency alerts']
    }
  ];

  const medicalSpecialties = [
    {
      name: 'Primary Care',
      description: 'General health monitoring and preventive care',
      price: '$199/month',
      features: ['Symptom checker', 'Health tracking', 'Medication reminders', 'Appointment scheduling']
    },
    {
      name: 'Cardiology',
      description: 'Heart health monitoring and cardiovascular care',
      price: '$299/month',
      features: ['ECG analysis', 'Heart rate monitoring', 'Risk assessment', 'Treatment tracking']
    },
    {
      name: 'Diabetes Management',
      description: 'Blood glucose monitoring and diabetes care',
      price: '$249/month',
      features: ['Glucose tracking', 'Insulin management', 'Diet planning', 'Complication prevention']
    },
    {
      name: 'Mental Health',
      description: 'Mental wellness monitoring and support',
      price: '$179/month',
      features: ['Mood tracking', 'Stress analysis', 'Therapy support', 'Crisis intervention']
    },
    {
      name: 'Pediatrics',
      description: 'Child health monitoring and development tracking',
      price: '$229/month',
      features: ['Growth tracking', 'Vaccination reminders', 'Development milestones', 'Parent guidance']
    },
    {
      name: 'Geriatrics',
      description: 'Elderly care and age-related health monitoring',
      price: '$279/month',
      features: ['Fall detection', 'Medication management', 'Cognitive assessment', 'Care coordination']
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual',
      price: '$49',
      period: '/month',
      description: 'Perfect for personal health monitoring',
      features: [
        'Basic symptom checker',
        'Health tracking',
        'Medication reminders',
        'Email support',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: '$99',
      period: '/month',
      description: 'Ideal for family health management',
      features: [
        'Advanced symptom analysis',
        'Family health dashboard',
        'Priority support',
        '5 user accounts',
        'Emergency alerts',
        'Telemedicine integration'
      ],
      popular: true
    },
    {
      name: 'Healthcare Provider',
      price: '$299',
      period: '/month',
      description: 'For medical professionals and clinics',
      features: [
        'Full AI diagnostics',
        'Patient management',
        '24/7 support',
        'Unlimited users',
        'Custom integrations',
        'Compliance tools',
        'Analytics dashboard'
      ],
      popular: false
    }
  ];

  const handleSymptomAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate AI medical analysis
    setTimeout(() => {
      setAnalysisResult(`MEDICAL ANALYSIS REPORT
      
Patient: Anonymous
Analysis Date: ${new Date().toLocaleDateString()}
Chief Complaint: Headache, fever, fatigue

SYMPTOM ANALYSIS:
• Headache: Moderate intensity, throbbing, 3/10 pain scale
• Fever: 101.2°F (38.4°C), persistent for 2 days
• Fatigue: Significant, affecting daily activities
• Additional symptoms: Mild nausea, sensitivity to light

PRELIMINARY ASSESSMENT:
Based on symptom presentation, possible conditions:
1. Viral infection (most likely - 75% probability)
2. Migraine with fever (15% probability)
3. Sinus infection (10% probability)

RECOMMENDATIONS:
1. Rest and hydration
2. Over-the-counter pain relief (acetaminophen/ibuprofen)
3. Monitor temperature every 4 hours
4. Seek medical attention if:
   - Fever persists >3 days
   - Severe headache develops
   - Neck stiffness appears
   - Rash develops

URGENCY LEVEL: LOW-MEDIUM
No immediate emergency indicators present.

FOLLOW-UP:
Schedule appointment with primary care physician within 24-48 hours if symptoms worsen or persist.

DISCLAIMER: This is a preliminary analysis. Always consult with a qualified healthcare professional for proper diagnosis and treatment.`);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <>
      <SEOHead 
        title="AI Medical Assistant - Zion Tech Group"
        description="Revolutionary AI-powered medical assistant for symptom analysis, health monitoring, and medical record management. Improve patient care with advanced AI technology."
        keywords="AI medical assistant, medical AI, symptom checker, health monitoring, medical records, telemedicine, healthcare technology"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg mb-8 neon-glow">
                <HeartIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic">
                AI Medical Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize healthcare with AI-powered symptom analysis, health monitoring, and medical record management. Improve patient outcomes with advanced technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleSymptomAnalysis}
                  disabled={isAnalyzing}
                  className="cyber-button px-8 py-4 text-lg disabled:opacity-50"
                >
                  {isAnalyzing ? 'Analyzing Symptoms...' : 'Try Free Analysis'}
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>

            {/* Live Analysis Demo */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="holographic-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Live Symptom Analysis Demo</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Describe Your Symptoms</label>
                    <textarea
                      className="w-full h-32 p-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                      placeholder="Describe your symptoms in detail..."
                      defaultValue="I've had a headache for 2 days, fever around 101°F, feeling very tired and weak. Also have mild nausea and sensitivity to light. No recent travel or exposure to sick people."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Analysis Results</label>
                    <div className="w-full h-64 p-4 bg-slate-800 border border-slate-600 rounded-lg overflow-auto">
                      <pre className="text-sm text-green-400 whitespace-pre-wrap">
                        {analysisResult || 'Click "Try Free Analysis" to analyze symptoms...'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to improve healthcare delivery with AI-powered precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Specialties Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Specialized <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Medical Areas</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from specialized AI assistants for different medical specialties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {medicalSpecialties.map((specialty, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3">{specialty.name}</h3>
                  <p className="text-gray-400 mb-4">{specialty.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Price:</span>
                      <span className="text-red-400 font-semibold">{specialty.price}</span>
                    </div>
                  </div>
                  <ul className="space-y-1 mb-6">
                    {specialty.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-3 h-3 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2 border border-red-400 text-red-300 rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your healthcare needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`holographic-card p-8 relative ${plan.popular ? 'ring-2 ring-red-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600' 
                      : 'border-2 border-red-400 text-red-300 hover:bg-red-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Healthcare Professionals</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">10K+</div>
                <div className="text-gray-300">Healthcare Providers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">1M+</div>
                <div className="text-gray-300">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">40%</div>
                <div className="text-gray-300">Time Saved</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-900/40 via-slate-900 to-pink-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Transform Healthcare Delivery
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of healthcare professionals who are already using AI to improve patient care and outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIMedicalAssistantPage;