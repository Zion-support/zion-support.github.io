import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Users, BarChart3 } from 'lucide-react';

const MicroSaasSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "Project Management Tool",
      description: "Streamline your projects with our comprehensive project management solution.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Task Management", "Team Collaboration", "Progress Tracking", "Reporting"],
      price: "Starting at $29/month",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Customer Support System",
      description: "Manage customer inquiries and support tickets efficiently.",
      icon: <Users className="w-8 h-8" />,
      features: ["Ticket Management", "Live Chat", "Knowledge Base", "Analytics"],
      price: "Starting at $39/month",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting for your business data.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time Analytics", "Custom Reports", "Data Visualization", "Export Options"],
      price: "Starting at $49/month",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Security Monitoring",
      description: "Advanced security monitoring and threat detection system.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Threat Detection", "Real-time Alerts", "Compliance Reporting", "Incident Response"],
      price: "Starting at $59/month",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Performance Optimization",
      description: "Optimize your application performance with our monitoring tools.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Performance Monitoring", "Bottleneck Detection", "Optimization Recommendations", "Reports"],
      price: "Starting at $35/month",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Team Collaboration",
      description: "Enhance team productivity with our collaboration platform.",
      icon: <Users className="w-8 h-8" />,
      features: ["Real-time Chat", "File Sharing", "Video Calls", "Project Boards"],
      price: "Starting at $25/month",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const benefits = [
    {
      title: "Quick Deployment",
      description: "Get your micro SAAS solution up and running in days, not months.",
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Scalable Architecture",
      description: "Built to scale with your business growth and changing needs.",
      icon: <BarChart3 className="w-6 h-6 text-green-500" />
    },
    {
      title: "Cost Effective",
      description: "Affordable solutions that deliver maximum value for your investment.",
      icon: <CheckCircle className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to keep your solutions running smoothly.",
      icon: <Shield className="w-6 h-6 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Custom micro SAAS solutions including project management, analytics, security monitoring, and team collaboration tools." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Custom micro SAAS solutions designed to solve specific business challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized solutions designed to address specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-slate-200">
                <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6`}>
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                <p className="text-slate-600 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-2xl font-bold text-slate-900 mb-6">{solution.price}</div>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the benefits of specialized, focused solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Micro SAAS Solution?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our micro SAAS solutions can solve your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Building Today
            </Link>
            <Link
              to="/micro-saas-solutions"
              className="border border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors"
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