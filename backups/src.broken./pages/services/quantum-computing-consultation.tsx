import React from 'react';
import { 
  Atom, 
  Brain, 
  Zap, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Clock,
  Target,
  TrendingUp,
  Award,
  Cpu,
  Network,
  Eye,
  Edit3,
  BarChart3
} from 'lucide-react';

const QuantumComputingConsultation = () => {
  const features = [
    'Quantum algorithm development and optimization',
    'Quantum hardware selection and configuration',
    'Quantum software integration and deployment',
    'Quantum error correction and fault tolerance',
    'Quantum machine learning model development',
    'Quantum cryptography and security implementation',
    'Quantum simulation and modeling services',
    'Quantum computing strategy and roadmap planning'
  ];

  const benefits = [
    'Accelerate complex computations by 1000x',
    'Solve previously intractable optimization problems',
    'Enhance security with quantum cryptography',
    'Reduce computational costs for large-scale problems',
    'Gain competitive advantage with quantum technology',
    'Future-proof your technology infrastructure',
    'Access to cutting-edge quantum research',
    'Expert guidance on quantum implementation'
  ];

  const pricing = {
    starter: {
      name: 'Consultation',
      price: '$2,999/month',
      features: [
        'Basic quantum strategy consultation',
        'Quantum readiness assessment',
        'Monthly strategy sessions',
        'Email support',
        'Basic quantum education'
      ],
      marketPrice: '$4,999/month'
    },
    professional: {
      name: 'Implementation',
      price: '$9,999/month',
      features: [
        'Full quantum implementation',
        'Custom quantum algorithms',
        'Hardware integration',
        'Priority support',
        'Advanced training',
        'Quantum software development',
        'Performance optimization'
      ],
      marketPrice: '$14,999/month'
    },
    enterprise: {
      name: 'Enterprise',
      price: '$24,999/month',
      features: [
        'Complete quantum transformation',
        'Custom quantum hardware',
        'Dedicated quantum team',
        '24/7 support',
        'White-label solution',
        'Quantum research partnership',
        'Custom quantum applications'
      ],
      marketPrice: '$39,999/month'
    }
  };

  const useCases = [
    'Financial institutions optimizing trading algorithms and risk modeling',
    'Pharmaceutical companies accelerating drug discovery and molecular simulation',
    'Logistics companies solving complex optimization and routing problems',
    'Cybersecurity firms implementing quantum-resistant encryption',
    'Research institutions conducting quantum simulations and modeling',
    'Technology companies developing quantum applications and services'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Atom className="w-4 h-4 mr-2" />
            Quantum Computing Consultation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Quantum Computing Consultation
          </h1>
          <p className="text-purple-100 text-xl mb-8">
            Unlock the power of quantum computing with expert consultation. 
            Accelerate computations by 1000x and solve previously intractable problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-purple-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <a 
                href="https://ziontechgroup.com" 
                className="text-purple-400 hover:text-purple-300 font-semibold"
              >
                Visit Our Website →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quantum Computing Services</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with cutting-edge quantum technology and expert consultation.
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Premium Pricing</h3>
            <div className="space-y-4">
              {Object.entries(pricing).map(([key, tier]) => (
                <div key={key} className="rounded-lg p-4 border border-gray-200 hover:border-purple-300 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-lg font-semibold">{tier.name}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600">{tier.price}</div>
                      <div className="text-sm text-gray-500 line-through">{tier.marketPrice}</div>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a 
                href="/contact" 
                className="px-5 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center"
              >
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
              >
                Call Now <Phone className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Atom className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Quantum Advantage</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Perfect For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Quantum Solutions</h3>
                </div>
                <p className="text-gray-600">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Enter the Quantum Era?</h2>
          <p className="text-purple-100 text-xl mb-8">
            Get started with our quantum computing consultation services today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a 
              href="tel:+13024640950" 
              className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center"
            >
              Call Now <Phone className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingConsultation;