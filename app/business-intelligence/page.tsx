'use client';
import React from 'react';
import { BarChart, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const BusinessIntelligencePage: React.FC = () => {
  const biServices = [
    {
      title: 'Data Warehousing',
      description: 'Centralized data storage and management solutions',
      features: ['Data Integration', 'ETL Processes', 'Data Quality', 'Data Governance']
    },
    {
      title: 'Business Intelligence',
      description: 'Transform data into actionable business insights',
      features: ['Dashboard Creation', 'Report Generation', 'KPI Tracking', 'Trend Analysis']
    },
    {
      title: 'Reporting Dashboards',
      description: 'Interactive dashboards for real-time insights',
      features: ['Real-time Data', 'Interactive Visualizations', 'Custom Dashboards', 'Mobile Access']
    },
    {
      title: 'Predictive Analytics',
      description: 'Advanced analytics and forecasting capabilities',
      features: ['Forecasting Models', 'Trend Analysis', 'Risk Assessment', 'Scenario Planning']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Business Intelligence Solutions - Zion Tech Group"
        description="Comprehensive business intelligence services including data warehousing, reporting dashboards, and predictive analytics. Transform your data into actionable insights."
        keywords={['business intelligence', 'data warehousing', 'reporting dashboards', 'predictive analytics', 'data visualization', 'BI solutions']}
        canonicalUrl="https://ziontechgroup.com/business-intelligence"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Business Intelligence Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your data into actionable business insights with our BI solutions.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {biServices.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Unlock Your Data?</h2>
            <p className="text-gray-300 mb-6">Let's discuss your business intelligence needs.</p>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Contact Us
            </a>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BusinessIntelligencePage;