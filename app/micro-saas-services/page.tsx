import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Brain, 
  Zap, 
  Award, 
  DollarSign, 
  Globe, 
  TrendingUp, 
  Monitor, 
  MessageSquare, 
  Eye, 
  Rocket, 
  Phone,
  Shield,
  Cloud,
  BarChart3,
  Users,
  Settings,
  Target,
  Clock
} from 'lucide-react';

export default function MicroSaasServices() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-500" />,
      title: "AI Analytics Pro",
      description: "Advanced AI-powered analytics platform for data-driven business insights and predictions.",
      price: "$99/month",
      features: ["Real-time analytics", "AI predictions", "Custom dashboards", "API access"]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Cybersecurity Suite",
      description: "Comprehensive security solutions to protect your business from cyber threats.",
      price: "$149/month",
      features: ["Threat detection", "Vulnerability scanning", "Security monitoring", "Incident response"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: "Cloud Storage Pro",
      description: "Secure and scalable cloud storage solution with advanced features.",
      price: "$79/month",
      features: ["Unlimited storage", "File encryption", "Collaboration tools", "Backup automation"]
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "CRM Pro",
      description: "Customer relationship management platform with AI-powered insights.",
      price: "$129/month",
      features: ["Contact management", "Sales pipeline", "AI insights", "Integration hub"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: "Marketing Automation",
      description: "Automate your marketing campaigns with intelligent targeting and optimization.",
      price: "$199/month",
      features: ["Email campaigns", "Social media automation", "Lead scoring", "A/B testing"]
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      title: "Project Management",
      description: "Streamline your projects with advanced task management and collaboration tools.",
      price: "$89/month",
      features: ["Task tracking", "Team collaboration", "Time tracking", "Resource planning"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 3 micro SAAS tools",
        "Basic support",
        "Standard features",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10 micro SAAS tools",
        "Priority support",
        "Advanced features",
        "Phone support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited micro SAAS tools",
        "Dedicated support",
        "All features",
        "24/7 support",
        "Custom development",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions including AI analytics, cybersecurity, cloud storage, CRM, marketing automation, and more. Transform your business with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="micro SAAS, AI analytics, cybersecurity, cloud storage, CRM, marketing automation, project management, email management, inventory management, customer analytics, financial management, content creation, DevOps automation"
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SAAS
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive suite of micro SAAS solutions designed to transform your business. 
                From AI analytics to cybersecurity, we provide the tools you need to succeed.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful, focused tools that solve specific business challenges
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-16 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="bg-cyan-400 text-black text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start using our micro SAAS solutions today and see the difference they can make for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}