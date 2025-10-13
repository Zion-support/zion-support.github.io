import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  CheckIcon, 
  StarIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const microSaasServices = [
    {
      name: "AI Content Generator Pro",
      description: "Advanced AI-powered content creation tool for blogs, social media, and marketing materials.",
      price: "$29/month",
      features: ["Unlimited content generation", "50+ templates", "SEO optimization", "Multi-language support"],
      category: "AI Tools",
      link: "/ai-content-generator",
      popular: true
    },
    {
      name: "Smart Analytics Dashboard",
      description: "Real-time business analytics with AI insights and automated reporting.",
      price: "$49/month",
      features: ["Real-time data visualization", "AI-powered insights", "Custom reports", "API integration"],
      category: "Analytics",
      link: "/ai-analytics-dashboard",
      popular: true
    },
    {
      name: "AI Customer Support Bot",
      description: "Intelligent chatbot that handles customer inquiries 24/7 with natural language processing.",
      price: "$39/month",
      features: ["24/7 availability", "Multi-channel support", "Custom training", "Analytics dashboard"],
      category: "Customer Service",
      link: "/ai-customer-support-bot"
    },
    {
      name: "Code Security Auditor",
      description: "Automated code analysis tool that identifies security vulnerabilities and suggests fixes.",
      price: "$79/month",
      features: ["Automated scanning", "Vulnerability detection", "Fix suggestions", "Compliance reports"],
      category: "Security",
      link: "/ai-code-security-auditor"
    },
    {
      name: "Email Marketing Automation",
      description: "AI-driven email campaigns with personalization and automated workflows.",
      price: "$59/month",
      features: ["Smart segmentation", "A/B testing", "Personalization", "Performance analytics"],
      category: "Marketing",
      link: "/ai-email-automation"
    },
    {
      name: "Document AI Processor",
      description: "Extract and analyze data from documents using advanced OCR and AI processing.",
      price: "$69/month",
      features: ["OCR technology", "Data extraction", "Form processing", "Batch operations"],
      category: "Document Processing",
      link: "/ai-document-processor"
    }
  ];

  const enterpriseServices = [
    {
      name: "AI Solutions",
      description: "Custom artificial intelligence solutions tailored to your business needs.",
      icon: CpuChipIcon,
      link: "/ai-solutions",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      name: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      icon: ShieldCheckIcon,
      link: "/cybersecurity",
      features: ["Security Audits", "Penetration Testing", "Threat Monitoring", "Compliance Management"]
    },
    {
      name: "Cloud Infrastructure",
      description: "Scalable cloud solutions and infrastructure management.",
      icon: CloudIcon,
      link: "/cloud-solutions",
      features: ["AWS & Azure Expertise", "DevOps & CI/CD", "Microservices", "Auto-scaling"]
    },
    {
      name: "5G Solutions",
      description: "Next-generation 5G network implementation and optimization.",
      icon: ChartBarIcon,
      link: "/5g-solutions",
      features: ["Network Planning", "IoT Integration", "Edge Computing", "Performance Optimization"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services including real micro SAAS solutions, enterprise AI, cybersecurity, and cloud infrastructure." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cybersecurity, cloud infrastructure, digital transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real solutions for real businesses. From micro SAAS tools to enterprise-grade AI and IT infrastructure.
          </p>
        </div>
      </section>

      {/* Micro SAAS Services */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SAAS</span> Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real, functional micro software-as-a-service tools that solve specific business problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`group bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-105 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <StarIcon className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-semibold">4.9</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <CurrencyDollarIcon className="w-6 h-6 text-green-400 mr-2" />
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">Setup in 5 min</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <button className="w-full border border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300">
                    View Demo
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/micro-saas"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold text-lg group"
            >
              View All Micro SAAS Solutions
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise Services */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Enterprise</span> Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions for large-scale business transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="text-purple-400 hover:text-purple-300 font-semibold flex items-center group"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-300 mb-8">Perfect for small businesses getting started with AI</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>2 Micro SAAS tools</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>5GB storage</span>
                </li>
              </ul>

              <button className="w-full border border-purple-400 text-purple-300 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 ring-2 ring-purple-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$299</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-300 mb-8">Ideal for growing businesses with advanced needs</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Unlimited Micro SAAS tools</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>100GB storage</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>API access</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              <p className="text-gray-300 mb-8">Tailored solutions for large organizations</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Custom AI solutions</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Unlimited storage</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>SLA guarantee</span>
                </li>
              </ul>

              <button className="w-full border border-purple-400 text-purple-300 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose from our micro SAAS solutions or contact us for custom enterprise solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/micro-saas"
              className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Browse Micro SAAS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
