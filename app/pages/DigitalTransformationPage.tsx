import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  RocketLaunchIcon,
  UserGroupIcon,
  ChartBarIcon,
  LightBulbIcon,
  CheckCircleIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  CogIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  SparklesIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  StarIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const DigitalTransformationPage: React.FC = () => {
  const transformationServices = [
    {
      title: "Digital Strategy",
      description: "Comprehensive digital strategy development to guide your transformation journey.",
      icon: LightBulbIcon,
      features: ["Strategy development", "Technology assessment", "Roadmap planning", "Change management"],
      color: "from-blue-500 to-purple-500",
      price: "Starting at $10,000/project",
      benefits: ["Clear direction", "Risk mitigation", "Stakeholder alignment", "Measurable outcomes"],
      useCases: ["Digital strategy", "Technology planning", "Change management", "Process optimization"],
      href: "/digital-strategy"
    },
    {
      title: "Process Automation",
      description: "Automate business processes to improve efficiency and reduce costs.",
      icon: CogIcon,
      features: ["Workflow automation", "Document processing", "Data integration", "Performance monitoring"],
      color: "from-green-500 to-teal-500",
      price: "Starting at $5,000/project",
      benefits: ["Increased efficiency", "Cost reduction", "Error elimination", "Scalable operations"],
      useCases: ["Process automation", "Workflow optimization", "Data integration", "Performance improvement"],
      href: "/process-automation"
    },
    {
      title: "Technology Integration",
      description: "Seamless integration of new technologies with existing systems.",
      icon: GlobeAltIcon,
      features: ["System integration", "API development", "Data migration", "Legacy modernization"],
      color: "from-pink-500 to-rose-500",
      price: "Starting at $8,000/project",
      benefits: ["Unified systems", "Data consistency", "Improved efficiency", "Future readiness"],
      useCases: ["System integration", "API development", "Data migration", "Legacy modernization"],
      href: "/technology-integration"
    },
    {
      title: "Change Management",
      description: "Comprehensive change management to ensure successful transformation.",
      icon: UserGroupIcon,
      features: ["Training programs", "Communication plans", "Resistance management", "Success metrics"],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $3,500/month",
      benefits: ["Smooth transition", "User adoption", "Reduced resistance", "Success assurance"],
      useCases: ["Change management", "Training", "Communication", "User adoption"],
      href: "/change-management"
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics and business intelligence solutions.",
      icon: ChartBarIcon,
      features: ["Data visualization", "Predictive analytics", "Real-time reporting", "Insights generation"],
      color: "from-orange-500 to-red-500",
      price: "Starting at $4,500/month",
      benefits: ["Data-driven decisions", "Better insights", "Competitive advantage", "Performance optimization"],
      useCases: ["Business intelligence", "Data analytics", "Performance monitoring", "Strategic insights"],
      href: "/data-analytics"
    },
    {
      title: "Cloud Transformation",
      description: "Complete cloud transformation and migration services.",
      icon: CloudIcon,
      features: ["Cloud migration", "Architecture design", "Security implementation", "Cost optimization"],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $12,000/project",
      benefits: ["Scalability", "Cost savings", "Enhanced security", "Global reach"],
      useCases: ["Cloud migration", "Architecture design", "Security implementation", "Cost optimization"],
      href: "/cloud-transformation"
    }
  ];

  const transformationSteps = [
    {
      step: "1",
      title: "Assessment",
      description: "We analyze your current state and identify transformation opportunities.",
      icon: EyeIcon
    },
    {
      step: "2",
      title: "Strategy",
      description: "We develop a comprehensive digital transformation strategy.",
      icon: LightBulbIcon
    },
    {
      step: "3",
      title: "Implementation",
      description: "We implement solutions with minimal disruption to your operations.",
      icon: CogIcon
    },
    {
      step: "4",
      title: "Optimization",
      description: "We continuously optimize and improve your digital capabilities.",
      icon: ChartBarIcon
    }
  ];

  const benefits = [
    "Increased efficiency",
    "Cost reduction",
    "Better customer experience",
    "Competitive advantage",
    "Scalable operations",
    "Data-driven decisions",
    "Improved security",
    "Future readiness"
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services including strategy, automation, integration, and change management. Transform your business for the digital age." />
        <meta name="keywords" content="digital transformation, process automation, technology integration, change management, business transformation, digital strategy" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Digital Transformation
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business for the digital age
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our comprehensive digital transformation services help you modernize operations,
                improve efficiency, and gain competitive advantage in the digital marketplace.
              </p>
            </div>
          </div>
        </section>

        {/* Transformation Services Grid */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Transformation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive digital transformation solutions designed to meet your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transformationServices.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-purple-500">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-purple-400 font-semibold text-lg mb-2">{service.price}</div>
                    <div className="text-gray-400 text-sm">Professional service</div>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Process Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Transformation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {transformationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-purple-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Benefits of Digital Transformation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Why digital transformation is essential for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our digital transformation services can modernize your business
              and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DigitalTransformationPage;