'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap, Shield, Users, BarChart3 } from 'lucide-react'
const AIApiManagementPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'API Security',
      description: 'Comprehensive API security with authentication, authorization, and threat protection.',
      benefits: ['OAuth 2.0', 'API keys', 'Rate limiting', 'Threat detection']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Monitoring',
      description: 'Real-time API analytics and performance monitoring.'
    }
    ];
    return (
    <>
      <Helmet>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
      </Helmet>
        <title>AI API Management - Zion Tech Group | Intelligent API Solutions</title>
        <meta name="description" content="Manage your APIs with AI-powered tools. Security, monitoring, rate limiting, and developer portal solutions." />
        <meta name="keywords" content="API management, API security, API monitoring, rate limiting, developer portal" />
      
      
      <div className="...">
        <Navigation />
        
        <section className="...">
          <div className="...">
            <div className="...">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI API Management</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Manage your APIs with AI-powered tools and comprehensive security.</p>
            </div>
            <div className="...">
              {features.map((feature, index) => (
                <div key={index} className="...">
                  <div className="...">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="...">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="...">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIApiManagementPage;