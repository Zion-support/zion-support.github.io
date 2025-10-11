'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
const BusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: 
      title: 'AI-Powered Analytics',
      description: 'Advanced AI technology to transform your business intelligence and data analysis'
    },
    {
      icon: 
      title: 'Real-Time Insights',
      description: 'Lightning-fast data processing and real-time business intelligence'
    },
    {
      icon: 
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your data'
    },
    {
      icon: 
      title: 'Global Analytics',
      description: 'Worldwide business intelligence deployment and support'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible business intelligence solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div>

    <div>
  
      <Helmet>
  
        <title>Business Intelligence | Zion Tech Group</title>
        <meta>
  
        <meta>
  
      </Helmet>

      <div>
  
        <div>
  
          <h1>
  
            Business Intelligence
          </h1>
          <p>
  
            Transform your business with our advanced business intelligence solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>
          <p>
  
            Our business intelligence solutions deliver unmatched performance, security, and scalability.
          </p>
        </div>

        <div>
  
          {features.map((feature, index) => (
            <div>
  
              <feature>
  
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div>
  
          <h2>
  
            Why Choose Our Business Intelligence Solutions?
          </h2>
          <div>
  
            {benefits.map((benefit, index) => (
              <div>
  
                <CheckCircle>
  
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
  
          <h2>
  
            Ready to Get Started?
          </h2>
          <p>
  
            Contact our experts to discuss your business intelligence needs and get a customized solution.
          </p>
          <div>
  
            <button>
  
              <Phone>
  
              Call Now
            </button>
            <button>
  
              <Mail>
  
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntelligencePage;