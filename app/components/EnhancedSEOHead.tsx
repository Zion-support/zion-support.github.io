'use client';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-d028
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  className?: string;
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({ 
<<<<<<< HEAD
  title = 'Zion Tech Group',
  description = 'Advanced AI and IT solutions for modern businesses',
  keywords = 'AI, artificial intelligence, IT solutions, technology',
  className: _className = '' 
=======
  title = "Zion Tech Group - AI Solutions",
  description = "Leading provider of AI solutions and intelligent automation for modern businesses",
  keywords = "AI, artificial intelligence, automation, business solutions, technology",
  _className = '' 
>>>>>>> cursor/fix-errors-and-merge-to-main-d028
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

<<<<<<< HEAD
export default EnhancedSEOHead;
=======
export default EnhancedSEOHead;
>>>>>>> cursor/fix-errors-and-merge-to-main-d028
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

interface EnhancedSEOHeadProps {
  className?: string;
  title?: string;
  description?: string;
  keywords?: string;
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({ 
  title = 'Enhanced SEO Head - Zion Tech Group',
  description = 'Advanced SEO optimization solutions powered by AI',
  keywords = 'SEO, search engine optimization, AI, digital marketing'
}) => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced algorithms analyze your content and suggest optimizations',
      benefits: ['Keyword optimization', 'Content analysis', 'Performance tracking']
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into your SEO performance',
      benefits: ['Real-time metrics', 'Competitor analysis', 'Trend monitoring']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target the right keywords and audiences for maximum impact',
      benefits: ['Keyword research', 'Audience targeting', 'Conversion optimization']
    },
    {
      icon: TrendingUp,
      title: 'Growth Tracking',
      description: 'Monitor your progress and see measurable results',
      benefits: ['Performance metrics', 'ROI tracking', 'Growth analytics']
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

interface EnhancedSEOHeadProps {
  className?: string;
  title?: string;
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = ({ 
  className = '', 
  title = 'Zion Tech Group - AI & IT Solutions' 
}) => {
  const features = [
    {
      icon: ArrowRight,
      title: 'AI Analytics',
      description: 'Advanced analytics powered by artificial intelligence',
      benefits: ['Real-time insights', 'Predictive modeling', 'Data visualization']
    },
    {
      icon: CheckCircle,
      title: 'Automation',
      description: 'Streamline your business processes',
      benefits: ['Workflow automation', 'Task optimization', 'Efficiency gains']
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
    }
  ];

  const benefits = [
<<<<<<< HEAD
    'Increase organic traffic by up to 300%',
    'Improve search engine rankings',
    'Boost conversion rates',
    'Save time with automated optimization',
    'Get detailed performance insights',
    'Stay ahead of algorithm changes'
=======
    'Increase productivity by 300%',
    'Reduce operational costs by 50%',
    'Improve decision making with AI insights',
    'Scale your business effortlessly',
    '24/7 automated support',
    'Enterprise-grade security'
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
<<<<<<< HEAD
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
=======
        <meta name="description" content="Zion Tech Group - Leading provider of AI and IT solutions for modern businesses" />
        <meta name="keywords" content="AI, artificial intelligence, IT solutions, automation, analytics, business intelligence" />
      </Helmet>
      <Navigation />
      <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 ${className}`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
<<<<<<< HEAD
              Enhanced SEO Head
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced SEO optimization solutions powered by AI technology
=======
              AI-Powered Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI and IT solutions
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your SEO strategy
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
<<<<<<< HEAD
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your SEO?</h2>
=======
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered SEO solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

<<<<<<< HEAD
export default EnhancedSEOHead;
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10
=======
export default EnhancedSEOHead;
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
}) => {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
>>>>>>> cursor/delete-records-acd8
