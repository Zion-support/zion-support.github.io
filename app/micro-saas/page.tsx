import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  GlobeAltIcon,
  CpuChipIcon,
  ChartBarIcon,
  CogIcon,
  UserGroupIcon,
  MailIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSPage() {
  const microSaaSServices = [
    {
      name: "Zion AI CRM Pro",
      description: "AI-enhanced customer relationship management with predictive analytics and automated workflows.",
      icon: UserGroupIcon,
      features: [
        "AI-Powered Lead Scoring",
        "Sales Forecasting",
        "Email Automation",
        "Pipeline Management",
        "Customer Segmentation",
        "Performance Analytics",
        "Integration APIs",
        "Custom Dashboards"
      ],
      pricing: "Starting at $49/user/month",
      href: "/zion-ai-crm-pro",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Zion AI Email Optimizer",
      description: "AI-powered email marketing optimization for better open rates, click-through rates, and conversions.",
      icon: MailIcon,
      features: [
        "Subject Line Optimization",
        "Send Time Optimization",
        "A/B Testing Automation",
        "Performance Analytics",
        "List Segmentation",
        "Template Library",
        "Deliverability Monitoring",
        "ROI Tracking"
      ],
      pricing: "Starting at $99/month",
      href: "/zion-ai-email-optimizer",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Zion AI Workflow Automation",
      description: "Automate business processes with AI-powered workflow management and task automation.",
      icon: CogIcon,
      features: [
        "Process Automation",
        "Task Assignment",
        "Progress Tracking",
        "Integration Hub",
        "Custom Triggers",
        "Approval Workflows",
        "Performance Metrics",
        "Error Handling"
      ],
      pricing: "Starting at $199/month",
      href: "/zion-ai-workflow-automation",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Zion AI Mobile App Builder",
      description: "No-code AI-powered mobile app development platform for iOS and Android.",
      icon: DevicePhoneMobileIcon,
      features: [
        "Drag & Drop Builder",
        "AI Design Suggestions",
        "Cross-platform Development",
        "App Store Publishing",
        "Push Notifications",
        "Analytics Integration",
        "Custom Branding",
        "API Integration"
      ],
      pricing: "Starting at $299/month",
      href: "/zion-ai-mobile-app-builder",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Zion AI Lead Scoring",
      description: "AI-powered lead qualification and scoring system to identify high-value prospects.",
      icon: ChartBarIcon,
      features: [
        "Behavioral Analysis",
        "Lead Prioritization",
        "Conversion Prediction",
        "ROI Tracking",
        "Custom Scoring Models",
        "Real-time Updates",
        "Integration APIs",
        "Performance Reports"
      ],
      pricing: "Starting at $149/month",
      href: "/zion-ai-lead-scoring",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Zion AI Social Listener",
      description: "Monitor and analyze social media mentions, sentiment, and brand reputation.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Brand Monitoring",
        "Sentiment Analysis",
        "Competitor Tracking",
        "Crisis Alerts",
        "Influencer Identification",
        "Trend Analysis",
        "Custom Dashboards",
        "Report Generation"
      ],
      pricing: "Starting at $179/month",
      href: "/zion-ai-social-listener",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Zion AI Analytics Pro",
      description: "Advanced business intelligence and analytics platform with AI-powered insights.",
      icon: ChartBarIcon,
      features: [
        "Real-time Analytics",
        "Predictive Insights",
        "Custom Dashboards",
        "Automated Reports",
        "Data Visualization",
        "Trend Analysis",
        "Anomaly Detection",
        "ROI Tracking"
      ],
      pricing: "Starting at $249/month",
      href: "/zion-ai-analytics-pro",
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "Zion AI Testing Automation",
      description: "AI-powered automated testing platform for web and mobile applications.",
      icon: CodeBracketIcon,
      features: [
        "Automated Test Generation",
        "Cross-browser Testing",
        "Mobile App Testing",
        "Performance Testing",
        "Bug Detection",
        "Test Reporting",
        "CI/CD Integration",
        "Custom Test Cases"
      ],
      pricing: "Starting at $199/month",
      href: "/zion-ai-testing-automation",
      color: "from-red-500 to-orange-500"
    }
  ];

  const benefits = [
    {
      title: "Cost-Effective",
      description: "Affordable subscription-based pricing with no upfront costs",
      icon: CurrencyDollarIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quick Deployment",
      description: "Get up and running in days, not months",
      icon: ClockIcon,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Scalable",
      description: "Grow with your business needs",
      icon: CloudIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Powered",
      description: "Leverage artificial intelligence for better results",
      icon: CpuChipIcon,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SaaS applications designed for specific business needs. AI-powered solutions that solve real problems with affordable pricing." />
        <meta name="keywords" content="micro SaaS, software as a service, AI solutions, business automation, CRM, email marketing, workflow automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Specialized software-as-a-service applications designed to solve specific business challenges. 
              Our AI-powered micro SaaS solutions help you automate processes and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Pricing
                <CurrencyDollarIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.name}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <div className="flex items-center text-purple-400 font-semibold mb-2">
                      <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                      <span>{service.pricing}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      to={service.href}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      Start Trial
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SaaS applications are designed to solve specific business problems with AI-powered automation and affordable pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Makes Our Micro SaaS Different?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We focus on solving real business problems with AI-powered solutions that are easy to use and implement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI-Powered Intelligence</h3>
                <p className="text-gray-300 mb-4">
                  Our solutions leverage artificial intelligence to provide smarter automation and better insights.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Machine Learning Algorithms</li>
                  <li>• Predictive Analytics</li>
                  <li>• Natural Language Processing</li>
                  <li>• Automated Decision Making</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheckIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 mb-4">
                  Built with security and compliance in mind, ensuring your data is always protected.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• End-to-End Encryption</li>
                  <li>• SOC 2 Compliance</li>
                  <li>• GDPR Ready</li>
                  <li>• Regular Security Audits</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                  <CogIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
                <p className="text-gray-300 mb-4">
                  Seamlessly integrate with your existing tools and workflows through our comprehensive APIs.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• REST & GraphQL APIs</li>
                  <li>• Webhook Support</li>
                  <li>• Pre-built Integrations</li>
                  <li>• Custom Connectors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Start your free trial today and see how our micro SaaS solutions can transform your business processes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}