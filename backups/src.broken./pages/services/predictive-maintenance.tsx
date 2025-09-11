import React from 'react';
import { 
  Wrench, 
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
  Settings,
  Eye,
  Edit3,
  BarChart3
} from 'lucide-react';

const PredictiveMaintenance = () => {
  const features = [
    'AI-powered equipment failure prediction with 95% accuracy',
    'Real-time monitoring and condition assessment',
    'Automated maintenance scheduling and optimization',
    'IoT sensor integration for continuous monitoring',
    'Machine learning models for predictive analytics',
    'Cost optimization and resource allocation',
    'Integration with existing maintenance systems',
    'Comprehensive reporting and analytics dashboard'
  ];

  const benefits = [
    'Reduce maintenance costs by 60% with predictive scheduling',
    'Increase equipment uptime by 85% with proactive maintenance',
    'Prevent unexpected failures and production downtime',
    'Optimize maintenance resources and reduce waste',
    'Extend equipment lifespan by 40%',
    'Improve safety with early warning systems',
    'Reduce energy consumption and operational costs',
    'Enhance productivity with reliable equipment performance'
  ];

  const pricing = {
    starter: {
      name: 'Starter',
      price: '$799/month',
      features: [
        'Up to 50 equipment units',
        'Basic predictive analytics',
        'Standard monitoring',
        'Email support',
        'Basic reporting'
      ],
      marketPrice: '$1,299/month'
    },
    professional: {
      name: 'Professional',
      price: '$2,499/month',
      features: [
        'Up to 500 equipment units',
        'Advanced AI predictions',
        'Real-time monitoring',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'Automated scheduling'
      ],
      marketPrice: '$3,999/month'
    },
    enterprise: {
      name: 'Enterprise',
      price: '$7,999/month',
      features: [
        'Unlimited equipment units',
        'Full predictive suite',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'Advanced integrations',
        'Custom reporting'
      ],
      marketPrice: '$12,999/month'
    }
  };

  const useCases = [
    'Manufacturing companies optimizing production equipment maintenance',
    'Energy companies monitoring turbines and power generation equipment',
    'Transportation companies maintaining fleet vehicles and infrastructure',
    'Healthcare facilities managing medical equipment and HVAC systems',
    'Data centers ensuring server and cooling system reliability',
    'Oil and gas companies monitoring drilling and processing equipment'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 via-green-500 to-emerald-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Wrench className="w-4 h-4 mr-2" />
            Predictive Maintenance Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            AI Predictive Maintenance
          </h1>
          <p className="text-teal-100 text-xl mb-8">
            Optimize your equipment maintenance with AI-powered predictions. 
            Reduce costs by 60% and increase uptime by 85% with proactive maintenance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
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
                <Mail className="w-5 h-5 mr-2 text-teal-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-teal-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-teal-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <a 
                href="https://ziontechgroup.com" 
                className="text-teal-400 hover:text-teal-300 font-semibold"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Predictive Maintenance Features</h2>
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
                <div key={key} className="rounded-lg p-4 border border-gray-200 hover:border-teal-300 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-lg font-semibold">{tier.name}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-teal-600">{tier.price}</div>
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
                className="px-5 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors inline-flex items-center"
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
                  <Settings className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Maintenance</h3>
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
                  <Target className="w-5 h-5 text-teal-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Equipment Management</h3>
                </div>
                <p className="text-gray-600">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Maintenance?</h2>
          <p className="text-teal-100 text-xl mb-8">
            Get started with our AI predictive maintenance platform today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-teal-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
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

export default PredictiveMaintenance;