import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Shield, 
  Globe, 
  Users,
  BarChart3,
  Settings,
  Rocket
} from 'lucide-react';

const MicroSAASSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Rapid Development",
      description: "Build and deploy micro-SaaS applications quickly with our proven development framework.",
      features: ["Fast Prototyping", "Agile Development", "Quick Deployment", "Iterative Improvement"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Architecture",
      description: "Enterprise-grade security built into every micro-SaaS solution from the ground up.",
      features: ["Data Encryption", "Access Control", "API Security", "Compliance Ready"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Scalable Infrastructure",
      description: "Cloud-native solutions that scale automatically with your growing user base.",
      features: ["Auto Scaling", "Load Balancing", "CDN Integration", "Global Deployment"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Built-in analytics to track user behavior and optimize your micro-SaaS performance.",
      features: ["User Analytics", "Performance Metrics", "Business Intelligence", "Custom Dashboards"]
    }
  ];

  const benefits = [
    {
      title: "Faster Time to Market",
      description: "Launch your micro-SaaS product quickly with our proven development process.",
      icon: <Zap className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Cost Effective",
      description: "Reduce development costs with our efficient micro-SaaS development approach.",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      title: "Scalable Solutions",
      description: "Micro-SaaS solutions that grow with your business and user base.",
      icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Expert Support",
      description: "Dedicated support team to help you succeed with your micro-SaaS venture.",
      icon: <Users className="w-6 h-6 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Build and scale micro-SaaS applications with our expert development services and proven frameworks." />
        <meta name="keywords" content="micro saas, saas development, web applications, cloud solutions, scalable software" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build, launch, and scale micro-SaaS applications with our expert development services and proven frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro-SaaS Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive micro-SaaS development services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-purple-400 mr-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro-SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver innovative, scalable, and profitable micro-SaaS solutions that drive business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Micro-SaaS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you create a successful micro-SaaS application that generates recurring revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/ai-solutions"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              View AI Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASSolutionsPage;