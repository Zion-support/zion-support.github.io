'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  HeartIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const AIMedicalAssistantPage: React.FC = () => {
  const [medicalQuery, setMedicalQuery] = useState('');
  const [medicalResponse, setMedicalResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [specialty, setSpecialty] = useState('general');

  const features = [
    'AI-powered medical diagnosis assistance',
    'Symptom analysis and triage',
    'Medical image analysis (X-ray, MRI, CT)',
    'Drug interaction checking',
    'Treatment recommendation engine',
    'Patient monitoring and alerts',
    'Medical record analysis',
    'Clinical decision support',
    'Research paper analysis',
    'HIPAA-compliant data handling'
  ];

  const specialties = [
    { id: 'general', name: 'General Medicine', description: 'Primary care and general health' },
    { id: 'cardiology', name: 'Cardiology', description: 'Heart and cardiovascular health' },
    { id: 'neurology', name: 'Neurology', description: 'Brain and nervous system' },
    { id: 'oncology', name: 'Oncology', description: 'Cancer diagnosis and treatment' },
    { id: 'pediatrics', name: 'Pediatrics', description: 'Children\'s health and development' },
    { id: 'radiology', name: 'Radiology', description: 'Medical imaging and diagnostics' }
  ];

  const pricingPlans = [
    {
      name: 'Individual Practice',
      price: '$299',
      period: '/month',
      description: 'For individual healthcare providers',
      features: [
        '100 patient consultations/month',
        'Basic diagnostic assistance',
        'Email support',
        'Standard medical databases',
        'Basic image analysis'
      ],
      popular: false
    },
    {
      name: 'Medical Group',
      price: '$899',
      period: '/month',
      description: 'For small to medium medical practices',
      features: [
        '500 patient consultations/month',
        'Advanced diagnostic tools',
        'Priority support',
        'Full medical databases',
        'Advanced image analysis',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Hospital System',
      price: '$2,999',
      period: '/month',
      description: 'For large hospitals and health systems',
      features: [
        'Unlimited consultations',
        'All diagnostic capabilities',
        '24/7 dedicated support',
        'Custom AI training',
        'On-premise deployment',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const handleMedicalAnalysis = async () => {
    setIsProcessing(true);
    // Simulate AI medical analysis
    setTimeout(() => {
      setMedicalResponse(`Medical Analysis Results:

Patient Assessment:
- Age: [Not specified]
- Chief Complaint: [Based on query]
- Vital Signs: [To be measured]

Differential Diagnosis:
1. Primary consideration: [Based on symptoms]
2. Secondary consideration: [Alternative diagnosis]
3. Tertiary consideration: [Less likely but possible]

Recommended Actions:
1. Immediate: [Urgent care if needed]
2. Short-term: [Follow-up within 24-48 hours]
3. Long-term: [Ongoing monitoring]

Additional Tests Recommended:
- [Specific diagnostic tests]
- [Laboratory work]
- [Imaging studies]

Treatment Recommendations:
- [Immediate interventions]
- [Medications if appropriate]
- [Lifestyle modifications]

⚠️ IMPORTANT DISCLAIMER:
This AI analysis is for informational purposes only and should not replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers for medical decisions.`);
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <>
      <SEOHead 
        title="AI Medical Assistant - Zion Tech Group"
        description="Advanced AI-powered medical assistant for diagnosis assistance, symptom analysis, medical imaging, and clinical decision support. Enhance patient care with cutting-edge technology."
        keywords="AI medical assistant, medical diagnosis, symptom analysis, medical imaging, clinical decision support, healthcare AI, medical AI"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl mb-8 neon-glow">
                <HeartIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic">
                AI Medical Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Enhance patient care with our AI-powered medical assistant. 
                Analyze symptoms, assist with diagnosis, and support clinical decision-making with advanced technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleMedicalAnalysis}
                  disabled={!medicalQuery.trim() || isProcessing}
                  className="cyber-button px-8 py-4 text-lg disabled:opacity-50"
                >
                  {isProcessing ? 'Analyzing...' : 'Analyze Medical Case'}
                </button>
                <a href="#pricing" className="border-2 border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">
                  Medical Case Analysis
                </h2>
                <p className="text-gray-300 mb-8">
                  Describe a medical case or symptoms for AI-powered analysis and recommendations.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Medical Specialty:
                    </label>
                    <select
                      value={specialty}
                      onChange={(e) => setSpecialty(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    >
                      {specialties.map((spec) => (
                        <option key={spec.id} value={spec.id}>
                          {spec.name} - {spec.description}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Medical Case Description:
                    </label>
                    <textarea
                      value={medicalQuery}
                      onChange={(e) => setMedicalQuery(e.target.value)}
                      placeholder="e.g., 45-year-old patient presents with chest pain, shortness of breath, and fatigue for 3 days..."
                      className="w-full h-32 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                  
                  <button
                    onClick={handleMedicalAnalysis}
                    disabled={!medicalQuery.trim() || isProcessing}
                    className="w-full cyber-button py-3 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Analyzing Case...
                      </div>
                    ) : (
                      'Analyze with AI'
                    )}
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gradient">Analysis Results:</h3>
                <div className="bg-slate-800 rounded-lg p-6 h-64 overflow-auto">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                    {medicalResponse || 'Your medical analysis will appear here...'}
                  </pre>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <UserGroupIcon className="w-8 h-8 text-red-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Patient Care</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <ChartBarIcon className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Diagnostics</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <ShieldCheckIcon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">HIPAA Compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Advanced <span className="text-gradient">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Medical Assistant comes equipped with powerful features for modern healthcare.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-red-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Choose Your <span className="text-gradient">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your healthcare practice needs. All plans include our core AI features.
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
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'cyber-button' 
                      : 'border-2 border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-300'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-red-900/40 via-slate-900 to-pink-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
              Ready to Enhance Patient Care?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of healthcare professionals who are already using our AI Medical Assistant for better patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
              </a>
              <a href="/demo" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIMedicalAssistantPage;