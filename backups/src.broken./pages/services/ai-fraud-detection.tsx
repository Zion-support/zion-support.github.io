import React from 'react';
import { 
  Shield, 
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
  AlertTriangle,
  Eye,
  Edit3,
  BarChart3
} from 'lucide-react';

const AIFraudDetection = () => {
  const features = [
    'Real-time fraud detection with 99.9% accuracy',
    'Machine learning models trained on millions of transactions',
    'Behavioral analysis and anomaly detection',
    'Multi-channel fraud monitoring (online, mobile, in-store)',
    'Risk scoring and automated decision making',
    'Integration with existing payment and banking systems',
    'Custom fraud rules and threshold configuration',
    'Comprehensive fraud analytics and reporting'
  ];

  const benefits = [
    'Reduce fraud losses by 85% with advanced AI detection',
    'Decrease false positives by 70% with intelligent algorithms',
    'Process transactions 10x faster with automated screening',
    'Save millions in fraud prevention costs annually',
    'Enhance customer experience with seamless transactions',
    'Comply with industry regulations and standards',
    'Scale fraud detection across multiple business channels',
    'Real-time monitoring and instant fraud alerts'
  ];

  const pricing = {
    starter: {
      name: 'Starter',
      price: '$999/month',
      features: [
        'Up to 10,000 transactions/month',
        'Basic fraud detection',
        'Standard integrations',
        'Email support',
        'Basic analytics'
      ],
      marketPrice: '$1,499/month'
    },
    professional: {
      name: 'Professional',
      price: '$2,999/month',
      features: [
        'Up to 100,000 transactions/month',
        'Advanced AI detection',
        'Custom integrations',
        'Priority support',
        'Advanced analytics',
        'Risk scoring',
        'Multi-channel monitoring'
      ],
      marketPrice: '$4,499/month'
    },
    enterprise: {
      name: 'Enterprise',
      price: '$9,999/month',
      features: [
        'Unlimited transactions',
        'Full AI fraud suite',
        'Custom development',
        'Dedicated support',
        'White-label solution',
        'Advanced compliance',
        'Custom algorithms'
      ],
      marketPrice: '$14,999/month'
    }
  };

  const useCases = [
    'Financial institutions preventing credit card and banking fraud',
    'E-commerce platforms detecting payment and account fraud',
    'Insurance companies identifying fraudulent claims and applications',
    'Healthcare organizations preventing medical identity fraud',
    'Government agencies detecting tax fraud and identity theft',
    'Cryptocurrency exchanges preventing trading and wallet fraud'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Shield className="w-4 h-4 mr-2" />
            AI Fraud Detection Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            AI Fraud Detection Platform
          </h1>
          <p className="text-red-100 text-xl mb-8">
            Protect your business with advanced AI fraud detection. 
            Reduce fraud losses by 85% with 99.9% accuracy and real-time monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
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
                <Mail className="w-5 h-5 mr-2 text-red-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-red-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-red-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <a 
                href="https://ziontechgroup.com" 
                className="text-red-400 hover:text-red-300 font-semibold"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Fraud Detection Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="space-y-4">
              {Object.entries(pricing).map(([key, tier]) => (
                <div key={key} className="rounded-lg p-4 border border-gray-200 hover:border-red-300 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-lg font-semibold">{tier.name}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">{tier.price}</div>
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
                className="px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors inline-flex items-center"
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
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Fraud Prevention</h3>
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
                  <Target className="w-5 h-5 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Security Solutions</h3>
                </div>
                <p className="text-gray-600">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Business?</h2>
          <p className="text-red-100 text-xl mb-8">
            Get started with our AI fraud detection platform today and secure your transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
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

export default AIFraudDetection;