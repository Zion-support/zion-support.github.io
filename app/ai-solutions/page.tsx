import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: "Machine Learning Models",
      description: "Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing.",
      icon: CpuChipIcon,
      features: [
        "Custom algorithm development",
        "Real-time data processing",
        "Predictive analytics",
        "Model optimization",
        "Continuous learning",
        "Performance monitoring"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $2,500/month",
      href: "/machine-learning"
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and optimize processes to save time and resources.",
      icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />
    },
    {
      title: "Better Decision Making",
      description: "Get data-driven insights and recommendations to make informed business decisions.",
      icon: <LightBulbIcon className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation and optimization.",
      icon: <DocumentTextIcon className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Scalable Solutions",
      description: "AI solutions that grow with your business and adapt to changing needs.",
      icon: <CpuChipIcon className="w-6 h-6 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions for modern businesses. Machine learning, automation, and intelligent systems." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Solutions for Modern Business
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI technologies designed to drive innovation, efficiency, and growth.
          </p>
        </div>

        {/* AI Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiServices.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-white">{service.price}</span>
                <Link 
                  to={service.href}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Why Choose Our AI Solutions?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl p-12 border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts help you implement the perfect AI solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 font-semibold"
            >
              Get Started Today
            </Link>
            <Link 
              to="/about"
              className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutionsPage;