import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MicroSaasSolutionsPage: React.FC = () => {
  const solutions = [
    {
      name: "AI-Powered Analytics Dashboard",
      description: "Comprehensive analytics platform with AI-driven insights for data visualization and business intelligence.",
      price: "Starting at $299/month",
      icon: "📊",
      link: "/ai-analytics-dashboard"
    },
    {
      name: "Customer Relationship Management",
      description: "Streamlined CRM solution with automated workflows and customer lifecycle management.",
      price: "Starting at $199/month",
      icon: "👥",
      link: "/crm-solution"
    },
    {
      name: "Project Management Suite",
      description: "Complete project management tool with team collaboration, task tracking, and reporting features.",
      price: "Starting at $149/month",
      icon: "📋",
      link: "/project-management"
    },
    {
      name: "E-commerce Platform",
      description: "Full-featured e-commerce solution with inventory management, payment processing, and analytics.",
      price: "Starting at $399/month",
      icon: "🛒",
      link: "/ecommerce-platform"
    },
    {
      name: "Content Management System",
      description: "Flexible CMS with multi-site support, SEO optimization, and content scheduling capabilities.",
      price: "Starting at $179/month",
      icon: "📝",
      link: "/cms-solution"
    },
    {
      name: "Financial Management Tool",
      description: "Comprehensive financial tracking with invoicing, expense management, and reporting features.",
      price: "Starting at $249/month",
      icon: "💰",
      link: "/financial-management"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful, scalable software solutions designed to streamline your business operations and drive growth.
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
    </div>
  );
};

export default MicroSaasSolutionsPage;