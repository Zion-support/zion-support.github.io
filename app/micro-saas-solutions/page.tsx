import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3Icon,
  ShieldCheckIcon,
  CloudIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const MicroSaasSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics.",
      icon: BarChart3Icon,
      price: "From $299/month",
      features: [
        "Real-time dashboards",
        "Predictive analytics",
        "Custom reporting",
        "Data visualization",
        "API integration",
        "24/7 support"
      ]
    },
    {
      title: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response.",
      icon: ShieldCheckIcon,
      price: "From $499/month",
      features: [
        "Threat detection",
        "Automated response",
        "Security monitoring",
        "Compliance reporting",
        "Incident management",
        "Expert support"
      ]
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability.",
      icon: CloudIcon,
      price: "From $99/month",
      features: [
        "Unlimited storage",
        "End-to-end encryption",
        "File sharing",
        "Version control",
        "Backup automation",
        "Mobile access"
      ]
    },
    {
      title: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation.",
      icon: UserGroupIcon,
      price: "From $199/month",
      features: [
        "Lead management",
        "Sales automation",
        "Customer insights",
        "Pipeline tracking",
        "Email integration",
        "Analytics dashboard"
      ]
    }
  ];

  const benefits = [
    {
      title: "Ready to Use",
      description: "Deploy immediately with pre-configured solutions that work out of the box.",
      icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />
    },
    {
      title: "Scalable Pricing",
      description: "Flexible pricing plans that grow with your business and budget.",
      icon: <ChartBarIcon className="w-6 h-6 text-blue-500" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support to keep your systems running smoothly.",
      icon: <CogIcon className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools and workflows.",
      icon: <GlobeAltIcon className="w-6 h-6 text-yellow-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Ready-to-use micro SAAS solutions including analytics, security, CRM, and cloud services. Deploy immediately and scale with your business." />
        <meta name="keywords" content="micro SAAS, software as a service, business solutions, analytics, CRM, cloud storage, cybersecurity, ready-to-use" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready-to-use software solutions that can transform your business operations immediately. 
            Deploy, scale, and grow with our comprehensive micro SAAS platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use software solutions that can transform your business operations immediately.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-cyan-400 font-medium mb-4">{service.price}</p>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of ready-to-use software solutions with our proven platform and expert support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Deploy Your Micro SAAS Solutions?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your SAAS Journey
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/micro-saas"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasSolutionsPage;