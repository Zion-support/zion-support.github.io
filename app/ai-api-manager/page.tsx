'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Settings, Zap, Shield, Users, BarChart3 } from 'lucide-react'
const AIApiManagerPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: 'API Configuration',
      description: 'Centralized API configuration and management with AI-powered optimization.',
      benefits: ['Auto-configuration', 'Performance tuning', 'Load balancing', 'Failover setup']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Advanced analytics and insights for API performance optimization.'
    }
    ];
    return (
    <>
      <Helmet>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
      </Helmet>
        <title>AI API Manager - Zion Tech Group | Intelligent API Administration</title>
        <meta name="description" content="Manage and optimize your APIs with AI-powered administration tools. Configuration, analytics, auto-scaling, and team management." />
        <meta name="keywords" content="API manager, API administration, API optimization, auto-scaling, team management" />
      
      
      <div className="...">
        <Navigation />
        
        <section className="...">
          <div className="...">
            <div className="...">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI API Manager</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Intelligent API administration and optimization platform.</p>
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

export default AIApiManagerPage;