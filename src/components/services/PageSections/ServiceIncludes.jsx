import React from 'react';
import { Check, X, Star, Shield, Clock, Users, FileText, Award, Zap, Globe } from 'lucide-react';

export const ServiceIncludes = () => {
  const servicePackages = [
    {
      name: 'Basic Package',
      description: 'Essential IT services for small businesses',
      price: 'Starting at $299/month',
      popular: false,
      includes: [
        '24/7 Help Desk Support',
        'Remote Troubleshooting',
        'Basic Network Monitoring',
        'Monthly Health Reports',
        'Email Support',
        'Up to 25 Users',
        'Basic Security Monitoring',
        'Backup Verification'
      ],
      notIncluded: [
        'On-site Visits',
        'Hardware Installation',
        'Advanced Security Features',
        'Priority Support',
        'Custom Reporting',
        'Strategic IT Planning'
      ],
      features: [
        { name: 'Response Time', value: '4-8 hours', icon: Clock },
        { name: 'Support Hours', value: '24/7', icon: Users },
        { name: 'Security Level', value: 'Basic', icon: Shield },
        { name: 'Reporting', value: 'Monthly', icon: FileText }
      ]
    },
    {
      name: 'Professional Package',
      description: 'Comprehensive IT services for growing businesses',
      price: 'Starting at $599/month',
      popular: true,
      includes: [
        'Everything in Basic Package',
        'On-site Support (2 visits/month)',
        'Hardware Installation & Setup',
        'Advanced Network Security',
        'Weekly Performance Reports',
        'Phone & Email Support',
        'Up to 100 Users',
        'Emergency Response (4hr)',
        'Network Optimization',
        'Security Audits (Quarterly)',
        'User Training Sessions',
        'Strategic IT Consulting'
      ],
      notIncluded: [
        'Unlimited On-site Visits',
        'Dedicated IT Manager',
        'Custom Software Development',
        'Hardware Procurement',
        'Advanced Analytics'
      ],
      features: [
        { name: 'Response Time', value: '2-4 hours', icon: Clock },
        { name: 'Support Hours', value: '24/7', icon: Users },
        { name: 'Security Level', value: 'Advanced', icon: Shield },
        { name: 'Reporting', value: 'Weekly', icon: FileText }
      ]
    },
    {
      name: 'Enterprise Package',
      description: 'Full-service IT management for large organizations',
      price: 'Starting at $1,299/month',
      popular: false,
      includes: [
        'Everything in Professional Package',
        'Unlimited On-site Support',
        'Dedicated IT Manager',
        'Advanced Security Suite',
        'Real-time Monitoring & Alerting',
        'Daily Performance Reports',
        'Unlimited Users',
        'Emergency Response (2hr)',
        'Strategic IT Planning',
        'Compliance Management',
        'Custom Solutions Development',
        'Advanced Analytics & Insights',
        'Executive Reporting',
        'Vendor Management',
        'Technology Roadmap Planning'
      ],
      notIncluded: [
        'Custom Hardware Development',
        'Third-party Software Licensing',
        'Legal Compliance Services',
        'Insurance Requirements'
      ],
      features: [
        { name: 'Response Time', value: '1-2 hours', icon: Clock },
        { name: 'Support Hours', value: '24/7', icon: Users },
        { name: 'Security Level', value: 'Enterprise', icon: Shield },
        { name: 'Reporting', value: 'Daily', icon: FileText }
      ]
    }
  ];

  const additionalServices = [
    {
      name: 'Hardware Installation',
      price: '$150/device',
      description: 'Professional installation and setup of IT equipment',
      icon: Zap
    },
    {
      name: 'Network Assessment',
      price: '$500',
      description: 'Comprehensive network security and performance review',
      icon: Shield
    },
    {
      name: 'Data Recovery',
      price: '$300',
      description: 'Emergency data recovery and restoration services',
      icon: FileText
    },
    {
      name: 'Staff Training',
      price: '$200/session',
      description: 'Customized IT training for your team',
      icon: Users
    },
    {
      name: 'Compliance Audit',
      price: '$1,000',
      description: 'Industry-specific compliance assessment and reporting',
      icon: Award
    },
    {
      name: 'Cloud Migration',
      price: 'Custom Quote',
      description: 'Complete cloud infrastructure migration services',
      icon: Globe
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What's Included in Your Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the service package that fits your business needs. All packages include our core services 
            with additional features and support levels.
          </p>
        </div>

        {/* Service Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {servicePackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl ${
                pkg.popular 
                  ? 'border-blue-500 scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                </div>

                {/* Package Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-sm font-medium text-gray-900">{feature.name}</div>
                      <div className="text-sm text-gray-600">{feature.value}</div>
                    </div>
                  ))}
                </div>

                {/* What's Included */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's Not Included */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <X className="w-5 h-5 text-red-500 mr-2" />
                    What's Not Included
                  </h4>
                  <ul className="space-y-2">
                    {pkg.notIncluded.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-500">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{service.name}</h4>
                    <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Service Guarantees */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">
            Our Service Guarantees
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Quality Guarantee</h4>
              <p className="text-blue-100">
                We guarantee the quality of our work. If you're not satisfied, we'll fix it at no additional cost.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Response Time Guarantee</h4>
              <p className="text-blue-100">
                We commit to responding within the guaranteed timeframes for your service level.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Security Guarantee</h4>
              <p className="text-blue-100">
                We maintain the highest security standards and protect your data throughout our engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team can customize any service package to meet your specific business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Custom Quote
              </a>
              <a
                href="#consultation"
                className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};