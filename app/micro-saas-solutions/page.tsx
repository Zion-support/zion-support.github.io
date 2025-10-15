import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Users, Globe } from 'lucide-react';

const MicroSaasSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "Task Management SAAS",
      description: "Streamline your workflow with our comprehensive task management solution.",
      icon: <CheckCircle className="w-8 h-8" />,
      features: ["Project Tracking", "Team Collaboration", "Deadline Management", "Progress Reports"],
      price: "Starting at $29/month"
    },
    {
      title: "Analytics Dashboard",
      description: "Powerful analytics and reporting tools for data-driven decision making.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Real-time Analytics", "Custom Reports", "Data Visualization", "Export Options"],
      price: "Starting at $49/month"
    },
    {
      title: "User Management",
      description: "Comprehensive user management and authentication system.",
      icon: <Users className="w-8 h-8" />,
      features: ["User Authentication", "Role Management", "Access Control", "Audit Logs"],
      price: "Starting at $39/month"
    },
    {
      title: "Security Suite",
      description: "Advanced security features to protect your application and data.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Data Encryption", "API Security", "Threat Detection", "Compliance Tools"],
      price: "Starting at $59/month"
    },
    {
      title: "API Gateway",
      description: "Manage and secure your APIs with our powerful gateway solution.",
      icon: <Globe className="w-8 h-8" />,
      features: ["API Management", "Rate Limiting", "Authentication", "Monitoring"],
      price: "Starting at $79/month"
    },
    {
      title: "Notification System",
      description: "Multi-channel notification system for better user engagement.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Email Notifications", "Push Notifications", "SMS Alerts", "Custom Templates"],
      price: "Starting at $19/month"
    }
  ];

  const benefits = [
    {
      title: "Rapid Deployment",
      description: "Get your SAAS solution up and running in days, not months.",
      icon: <Zap className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Scalable Architecture",
      description: "Built to handle growth from startup to enterprise scale.",
      icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Cost Effective",
      description: "Affordable pricing with no hidden costs or setup fees.",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success.",
      icon: <Users className="w-6 h-6 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Ready-to-deploy micro SAAS solutions for modern businesses. Task management, analytics, user management, and more." />
        <meta name="keywords" content="micro saas, saas solutions, task management, analytics dashboard, user management, api gateway" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready-to-deploy micro SAAS solutions that help you build and scale your business 
              with modern, efficient tools and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                Get Started
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
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our collection of pre-built SAAS solutions or customize them to fit your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-purple-400 mr-3">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-4">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-purple-400 font-semibold mb-4">
                  {solution.price}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center w-full justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through our expertise, reliability, and commitment to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
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
            Ready to Launch Your SAAS Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you choose and customize the perfect micro SAAS solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasSolutionsPage;