'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';
const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Visual Workflow Builder',
      description: 'Drag-and-drop interface to create complex workflows without coding. Connect apps, set conditions, and automate processes.',
      benefits: ['No coding required', 'Visual interface', 'Pre-built templates']
    },
    {
      icon: Brain,
      title: 'AI Decision Making',
      description: 'Intelligent decision points that learn from your data and make smart choices to optimize workflow outcomes.',
      benefits: ['Machine learning', 'Smart routing', 'Continuous improvement']
    },
    {
      icon: Zap,
      title: '500+ Integrations',
      description: 'Connect with popular business tools including Salesforce, Slack, Google Workspace, Microsoft 365, and more.',
      benefits: ['Wide compatibility', 'Easy setup', 'Real-time sync']
    },
    {
      icon: BarChart,
      title: 'Workflow Analytics',
      description: 'Comprehensive analytics to track workflow performance, identify bottlenecks, and optimize processes.',
      benefits: ['Performance metrics', 'Bottleneck detection', 'ROI tracking']
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'Process workflows in real-time with sub-second response times for critical business operations.',
      benefits: ['Instant execution', 'High availability', 'Scalable processing']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, audit logs, and compliance with SOC 2, GDPR, and other standards.',
      benefits: ['Data encryption', 'Audit trails', 'Compliance ready']
    }
  ];
  const automationFeatures = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 1,000 workflow runs/month',
        'Basic integrations',
        'Visual workflow builder',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 workflow runs/month',
        'All integrations',
        'AI decision making',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited workflow runs',
        'Custom integrations',
        'Advanced AI features',
        'Dedicated support',
        'Custom development',
        'Real-time dashboard',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];
  const processSteps = [
    {
      title: 'Customer Onboarding',
      description: 'Automate the entire customer onboarding process from signup to first value delivery with personalized workflows.',
      icon: Users
    },
    {
      title: 'Invoice Processing',
      description: 'Automatically process invoices, validate data, route for approval, and update accounting systems.',
      icon: Database
    },
    {
      title: 'Lead Management',
      description: 'Automate lead scoring, assignment, follow-up sequences, and CRM updates based on lead behavior.',
      icon: Globe
    },
    {
      title: 'Employee Onboarding',
      description: 'Streamline new hire processes with automated document collection, system access, and training assignments.',
      icon: Settings
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Helmet>
        <title>AI Workflow Automation Services | Zion Tech Group</title>
        <meta name="description" content="Intelligent workflow automation solutions that streamline business processes, reduce costs, and improve efficiency. AI-powered automation for every industry." />
        <meta name="keywords" content="workflow automation, business process automation, RPA, AI automation, process optimization, digital transformation" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Workflow Automation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Transform your business with intelligent automation that works 24/7 to streamline processes and boost productivity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                ✉️ Get Free Automation Audit
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Automation Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple 4-step process to transform your business with AI automation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Automation Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered automation for every business function
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-600">{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <p key={benefitIndex} className="text-sm text-green-600">✓ {benefit}</p>
                  ))}
                </div>
                <a 
                  href="/contact"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                >
                  Get Started Today
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Automation Platform?
            </h2>
            <p className="text-xl text-gray-600">
              Advanced AI technology with enterprise-grade security and reliability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ROI Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              Our clients see significant improvements in efficiency and cost savings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
              <div className="text-gray-600">Average Process Time Reduction</div>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.5M</div>
              <div className="text-gray-600">Average Annual Savings</div>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Error Reduction</div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Get a free automation audit and discover how much you can save
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-green-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageComponent;