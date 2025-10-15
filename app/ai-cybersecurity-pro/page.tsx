import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';

const AICybersecurityProPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$199',
      period: '/month',
      features: [
        'Up to 50 devices',
        'Basic threat detection',
        'Real-time monitoring',
        'Email security',
        'Standard support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      features: [
        'Up to 200 devices',
        'Advanced threat detection',
        'AI-powered analysis',
        'Network security',
        'Priority support',
        'Advanced reporting',
        'Compliance monitoring',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      features: [
        'Unlimited devices',
        'Custom AI models',
        'White-label solution',
        'Dedicated security team',
        '24/7 phone support',
        'Custom integrations',
        'On-premise deployment',
        'Advanced threat hunting'
      ],
      popular: false
    }
  ];

  const features = [
    {
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent sophisticated cyber threats in real-time.',
      icon: '🛡️',
      benefits: ['99.9% threat detection accuracy', 'Zero-day attack prevention', 'Real-time response']
    },
    {
      title: 'Behavioral Analysis',
      description: 'Monitor user and system behavior to identify anomalies and potential security breaches.',
      icon: '🔍',
      benefits: ['Insider threat detection', 'Anomaly identification', 'Risk scoring']
    },
    {
      title: 'Automated Incident Response',
      description: 'Automatically respond to security incidents with predefined playbooks and AI-driven decisions.',
      icon: '⚡',
      benefits: ['Faster incident response', 'Reduced manual effort', 'Consistent response procedures']
    },
    {
      title: 'Network Security Monitoring',
      description: 'Comprehensive network monitoring with AI-powered traffic analysis and intrusion detection.',
      icon: '🌐',
      benefits: ['Network visibility', 'Traffic analysis', 'Intrusion prevention']
    },
    {
      title: 'Email Security & Phishing Protection',
      description: 'Advanced email security with AI-powered phishing detection and malicious attachment scanning.',
      icon: '📧',
      benefits: ['Phishing prevention', 'Malware detection', 'Email encryption']
    },
    {
      title: 'Compliance & Reporting',
      description: 'Automated compliance monitoring and comprehensive security reporting for regulatory requirements.',
      icon: '📊',
      benefits: ['Regulatory compliance', 'Audit trails', 'Executive reporting']
    }
  ];

  const securityServices = [
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive vulnerability scanning and assessment using AI-powered analysis.',
      price: 'Starting at $2,500',
      features: ['Automated scanning', 'Risk prioritization', 'Remediation guidance', 'Compliance mapping']
    },
    {
      title: 'Penetration Testing',
      description: 'Simulated cyber attacks to identify security weaknesses and test defenses.',
      price: 'Starting at $5,000',
      features: ['External testing', 'Internal testing', 'Social engineering', 'Report & recommendations']
    },
    {
      title: 'Security Training',
      description: 'AI-powered security awareness training for employees and management.',
      price: 'Starting at $1,500',
      features: ['Interactive modules', 'Phishing simulations', 'Progress tracking', 'Certification']
    },
    {
      title: 'Incident Response',
      description: '24/7 incident response services with AI-powered threat hunting and forensics.',
      price: 'Starting at $10,000',
      features: ['Rapid response', 'Forensic analysis', 'Threat containment', 'Recovery assistance']
    }
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      role: 'CISO',
      company: 'Financial Services Inc',
      content: 'AI Cybersecurity Pro has significantly improved our security posture. The AI threat detection caught several sophisticated attacks that traditional tools missed.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      role: 'IT Director',
      company: 'Healthcare Systems',
      content: 'The automated incident response has reduced our mean time to resolution by 75%. Our security team can now focus on strategic initiatives.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'CTO',
      company: 'TechStart Solutions',
      content: 'The behavioral analysis feature is incredible. We identified a potential insider threat before it could cause damage.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Cybersecurity Pro - Advanced AI-Powered Security Platform | Zion Tech Group"
        description="Protect your business with AI-powered cybersecurity. Advanced threat detection, automated response, and 24/7 monitoring. Get a free security assessment today."
        keywords="AI cybersecurity, threat detection, security monitoring, incident response, vulnerability assessment, penetration testing"
        canonicalUrl="https://ziontechgroup.com/ai-cybersecurity-pro"
      />
      
      <div className="min-h-screen futuristic-bg">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6 fade-in-up">
                AI Cybersecurity Pro
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in-up">
                Advanced AI-powered cybersecurity platform that protects your business from sophisticated threats 
                with real-time detection, automated response, and 24/7 monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
                <button className="futuristic-btn">
                  Get Free Assessment
                </button>
                <button className="futuristic-btn futuristic-btn-secondary">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-blue mb-4">Advanced Security Features</h2>
              <p className="text-xl text-gray-300">Comprehensive protection powered by artificial intelligence</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="futuristic-card futuristic-card-enter p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold neon-text-purple mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Services Section */}
        <div className="py-20 futuristic-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-pink mb-4">Professional Security Services</h2>
              <p className="text-xl text-gray-300">Comprehensive security services to strengthen your defenses</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityServices.map((service, index) => (
                <div key={index} className="futuristic-card p-6">
                  <h3 className="text-xl font-semibold neon-text-green mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold neon-text-orange mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="futuristic-btn w-full mt-6">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-orange mb-4">Flexible Security Plans</h2>
              <p className="text-xl text-gray-300">Choose the protection level that fits your organization</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`futuristic-card p-8 relative ${plan.popular ? 'ring-2 ring-neon-cyan' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-neon-cyan text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold neon-text mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold neon-text-blue">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-neon-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full futuristic-btn ${plan.popular ? '' : 'futuristic-btn-secondary'}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20 futuristic-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-green mb-4">Trusted by Security Leaders</h2>
              <p className="text-xl text-gray-300">See what our customers are saying about AI Cybersecurity Pro</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="futuristic-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-neon-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold neon-text">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold neon-text mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a breach to happen. Get a free security assessment and see how AI Cybersecurity Pro can protect your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="futuristic-btn">
                Get Free Assessment
              </button>
              <button className="futuristic-btn futuristic-btn-secondary">
                Contact Security Team
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Free security assessment • No commitment required • Expert consultation included
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICybersecurityProPage;