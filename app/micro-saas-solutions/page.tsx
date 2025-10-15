import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Globe,
  Users,
  BarChart3,
  Cpu,
  Database,
  Cloud,
  Smartphone
} from 'lucide-react';

const MicroSaasSolutionsPage: React.FC = () => {
  const solutions = [
    {
      name: "Project Management Tool",
      description: "Streamline your team's workflow with our intuitive project management solution. Track tasks, deadlines, and team collaboration in real-time.",
      price: "Starting at $29/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/solutions/project-management"
    },
    {
      name: "Customer Support System",
      description: "Enhance customer satisfaction with our comprehensive support platform. Manage tickets, live chat, and knowledge base all in one place.",
      price: "Starting at $49/month",
      icon: <Users className="w-6 h-6" />,
      link: "/solutions/customer-support"
    },
    {
      name: "Analytics Dashboard",
      description: "Get insights into your business performance with our powerful analytics platform. Track KPIs, generate reports, and make data-driven decisions.",
      price: "Starting at $39/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/solutions/analytics"
    },
    {
      name: "E-commerce Platform",
      description: "Launch and manage your online store with our feature-rich e-commerce solution. Includes inventory management, payment processing, and more.",
      price: "Starting at $79/month",
      icon: <Globe className="w-6 h-6" />,
      link: "/solutions/ecommerce"
    },
    {
      name: "Team Communication",
      description: "Keep your team connected with our secure communication platform. Chat, video calls, file sharing, and collaboration tools included.",
      price: "Starting at $19/month",
      icon: <Users className="w-6 h-6" />,
      link: "/solutions/team-communication"
    },
    {
      name: "Data Management",
      description: "Organize and secure your business data with our comprehensive data management solution. Backup, sync, and access from anywhere.",
      price: "Starting at $59/month",
      icon: <Database className="w-6 h-6" />,
      link: "/solutions/data-management"
    }
  ];

  const features = [
    "Easy setup and deployment",
    "Scalable infrastructure",
    "24/7 technical support",
    "Regular updates and improvements",
    "Secure data handling",
    "Mobile-responsive design",
    "API integration",
    "Custom branding options"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Affordable and scalable micro SAAS solutions for modern businesses. Get started with our comprehensive suite of business tools." />
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
            Affordable, scalable, and powerful software solutions designed to help your business grow and succeed in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition-colors"
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
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of business tools designed to streamline operations and boost productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {solution.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{solution.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {solution.description}
                </p>
                <Link
                  to={solution.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS solutions are designed with your business needs in mind, offering flexibility, reliability, and exceptional value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your journey with our micro SAAS solutions today and experience the power of modern business software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition-colors"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasSolutionsPage;