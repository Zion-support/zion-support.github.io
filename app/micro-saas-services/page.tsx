import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, BarChart3 } from 'lucide-react';

export default function MicroSaasServices() {
  const services = [
    {
      title: "AI Chatbot Builder",
      description: "Build intelligent chatbots for your business with our no-code platform",
      icon: <Zap className="w-8 h-8" />,
      link: "/micro-saas-services/ai-chatbot-builder",
    },
    {
      title: "User Analytics",
      description: "Track and analyze user behavior with advanced analytics tools",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/micro-saas-services/user-analytics",
    },
    {
      title: "Team Collaboration",
      description: "Enhance team productivity with our collaboration tools",
      icon: <Users className="w-8 h-8" />,
      link: "/micro-saas-services/team-collaboration",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Micro SaaS services and solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Micro SaaS Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Powerful micro-services to enhance your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-orange-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <Link 
                to={service.link}
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}