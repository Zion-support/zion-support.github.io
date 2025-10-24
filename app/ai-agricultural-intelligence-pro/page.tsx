'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'
const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Crop Monitoring',
      description: 'AI-powered crop health monitoring and disease detection using satellite imagery and IoT sensors.',
      benefits: ['Real-time monitoring', 'Disease detection', 'Yield prediction', 'Growth tracking']
    },
    {
      icon: BarChart,
      title: 'Yield Optimization',
      description: 'Maximize crop yields through data-driven insights and predictive analytics.'
    }
    ];
    return (
    <>
      <Helmet>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
      </Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group | Smart Farming Solutions</title>
        <meta name="description" content="Revolutionize your farming with AI-powered agricultural intelligence. Crop monitoring, yield optimization, and precision agriculture solutions." />
        <meta name="keywords" content="AI agriculture, smart farming, precision agriculture, crop monitoring, yield optimization, agricultural intelligence" />
      
      
      <div className="...">
        <Navigation />
        
        {/* Hero Section */}
        <section className="...">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="...">
            <h1 className="...">
              AI Agricultural
              <span className="...">
                Intelligence Pro
              </span>
            </h1>
            <p className="...">
              Revolutionize your farming with AI-powered agricultural intelligence. 
              Monitor crops, optimize yields, and implement precision agriculture solutions.
            </p>
            <div className="...">
              <button className="...">
                Get Started
              </button>
              <button className="...">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="...">
                Smart Farming Features
              </h2>
              <p className="...">
                Our AI agricultural intelligence platform provides comprehensive solutions 
                for modern farming challenges.
              </p>
            </div>
            
            <div className="...">
              {features.map((feature, index) => (
                <div key={index} className="...">
                  <div className="...">
                    <feature.icon className="w-8 h-8 text-green-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
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

export default AIAgriculturalIntelligenceProPage;