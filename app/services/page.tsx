import React from 'react';
import SEOHead from '../../components/SEOHead';
import {
  CpuChipIcon,
  GlobeAltIcon,
  CogIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  UsersIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      title: "AI Solutions",
      description: "Transform your business with cutting-edge artificial intelligence solutions including machine learning, natural language processing, and computer vision.",
      icon: CpuChipIcon,
      href: "/ai-solutions",
      features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"],
      pricing: "Starting at $99/month"
    },
    {
      title: "Micro SaaS Solutions",
      description: "Specialized software-as-a-service applications designed for specific business needs and workflows.",
      icon: GlobeAltIcon,
      href: "/micro-saas-solutions",
      features: ["Custom Applications", "API Integration", "Scalable Architecture", "Real-time Analytics"],
      pricing: "Starting at $29/month"
    },
    {
      title: "IT Solutions",
      description: "Comprehensive IT services including cloud infrastructure, cybersecurity, and digital transformation.",
      icon: CogIcon,
      href: "/it-solutions",
      features: ["Cloud Migration", "Network Security", "System Integration", "24/7 Support"],
      pricing: "Custom pricing"
    }
  ];

  const aiServices = [
    {
      name: "AI Email Marketing Automation",
      description: "Increase open rates by 300% and conversions by 150% with AI-powered email campaigns.",
      href: "/ai-email-marketing-automation",
      price: "$99/month"
    },
    {
      name: "AI Social Media Manager",
      description: "Automate social media posting and engagement with intelligent content generation.",
      href: "/ai-social-media-manager",
      price: "$149/month"
    },
    {
      name: "AI Customer Support Chatbot",
      description: "24/7 customer support with intelligent chatbots that understand context and intent.",
      href: "/ai-customer-support-chatbot",
      price: "$199/month"
    },
    {
      name: "AI Analytics Dashboard Pro",
      description: "Advanced analytics and insights powered by machine learning algorithms.",
      href: "/ai-analytics-dashboard-pro",
      price: "$299/month"
    }
  ];

  const microSaasServices = [
    {
      name: "Task Manager Pro",
      description: "AI-powered task management that boosts productivity by 40%.",
      href: "/task-manager-pro",
      price: "$29/month"
    },
    {
      name: "Analytics Dashboard",
      description: "Real-time business analytics and reporting for data-driven decisions.",
      href: "/analytics-dashboard",
      price: "$49/month"
    },
    {
      name: "Customer Support Hub",
      description: "Centralized customer support management with ticketing and automation.",
      href: "/customer-support-hub",
      price: "$79/month"
    },
    {
      name: "Inventory Manager",
      description: "Smart inventory tracking with predictive analytics and automated reordering.",
      href: "/inventory-manager",
      price: "$99/month"
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure",
      description: "Scalable cloud solutions with 99.9% uptime guarantee.",
      href: "/cloud-infrastructure",
      price: "Custom pricing"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Advanced security solutions to protect your business from cyber threats.",
      href: "/cybersecurity",
      price: "Custom pricing"
    },
    {
      name: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business.",
      href: "/digital-transformation",
      price: "Custom pricing"
    },
    {
      name: "5G Solutions",
      description: "Next-generation 5G network solutions for ultra-fast connectivity.",
      href: "/5g-solutions",
      price: "Custom pricing"
    }
  ];

  const benefits = [
    {
      title: "Expert Team",
      description: "Our experienced professionals bring deep expertise across all technology domains."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your systems run smoothly at all times."
    },
    {
      title: "Scalable Solutions",
      description: "Solutions that grow with your business, from startup to enterprise scale."
    },
    {
      title: "Proven Results",
      description: "Track record of delivering measurable results for 500+ satisfied clients."
    }
  ];

  return (
    <>
      <SEOHead
        title="Our Services - AI Solutions, Micro SaaS & IT Services - Zion Tech Group"
        description="Comprehensive technology services including AI solutions, micro SaaS applications, and IT services. Transform your business with cutting-edge technology."
        keywords="AI solutions, micro SaaS, IT services, cloud infrastructure, cybersecurity, digital transformation"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive innovation, enhance security, 
            and accelerate growth for businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in three key areas that are essential for modern business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-purple-400 font-semibold mb-4">{service.pricing}</div>
                <a
                  href={service.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                >
                  Learn More
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to automate processes and gain valuable insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-slate-900 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-semibold">{service.price}</span>
                  <a
                    href={service.href}
                    className="text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized software applications designed to solve specific business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 font-semibold">{service.price}</span>
                  <a
                    href={service.href}
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services to support and enhance your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {itServices.map((service, index) => (
              <div key={index} className="bg-slate-900 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-semibold">{service.price}</span>
                  <a
                    href={service.href}
                    className="text-green-400 hover:text-green-300 font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through our expertise, support, and proven track record.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help you achieve your business goals. 
            Get a free consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Call: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
