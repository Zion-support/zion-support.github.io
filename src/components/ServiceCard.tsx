'use client';
:all-pages-backup/components/ServiceCard.tsx
import React from "react";
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react';
import React from "react";
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, Target, BarChart, Brain, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Users, Target, BarChart, Brain, TrendingUp } from 'lucide-react';

const ServiceCardPage: React.FC = () => {
  const features = [
    {
:all-pages-backup/components/ServiceCard.tsx
      ico,
  n: Brain,
  title: title,
  description: description,
  benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
  {
    icon: BarChart,
  title: title,
  description: description,
  benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
  {
    icon: Target,
  title: title,
  description: description,
  benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
  {
    icon: TrendingUp,
  title: title,
  description: description,
  benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
      icon: Brain
      titl,
  e: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
  {
    icon: BarChart
      titl,
  e: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
  {
    icon: Target
      titl,
  e: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
  {
    icon: TrendingUp
      titl,
  e: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (;
:all-pages-backup/components/ServiceCard.tsx;
    <>
    ;
  </>
      <Helmet>;</Helmet>
    <>
    
  </>
      <Helmet>;</Helmet>
        <Head></Head>
        <title>ServiceCard</title>;
        <meta name=&quot;description&quot; content=&quot;Advanced ServiceCard solution for modern businesses.&quot; /></meta>
<meta name = "description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." /></meta>;
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, ServiceCard, AI solutions, intelligent automation&quot; /></meta>
<meta name = "description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." /></meta>
      </Helmet>
      <Navigation /></Navigation>;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>
        {/* Hero Section */}
    </div>
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight"></h1>
              ServiceCard</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Advanced ServiceCard solution for modern businesses.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"></button>
                Get Started</button>
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r: text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Learn More</button>
            </div>
        </section>,
,
        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Powerful AI-driven features designed to transform your business operations</p>
            </div>
            <div className="grid md: grid-cols-2 l,
  g: grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" /></feature>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, idx) => (</ul>
                      <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" /></CheckCircle>
                        {benefit}</CheckCircle>
                    ))}
                  </ul>
              ))}
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Experience the benefits of cutting-edge AI technology</p>
            </div>
            <div className="grid md: grid-cols-2 l,
  g: grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" /></CheckCircle>
                  <p className="text-gray-300 text-lg">{benefit}</p>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join thousands of businesses already using our AI solutions</p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Start Free Trial</button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Contact Sales</button>
            </div>
        </section>
      <Footer /></Footer>
    </>
:all-pages-backup/components/ServiceCard.tsx
  )};

export default ServiceCardPage
  );
}
export default ServiceCardPage;
price?: string
popular?: boolean
onSelect?: () =>void
class Nam e?: string}constServiceCard:React.FC<ServiceCardProp s>= ({title
description
features
price
:all-pages-backup/components/ServiceCard.tsx
popular = false
popular = false
onSelect
className = ''
}) => {</ServiceCardProp>
return (</ServiceCardProp>
<div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group ${className} ${></div>
popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : ''</div>;
}`}>{popular && (</div>;
<div className="flex items-center gap-2 mb-4"></div>
<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
<span className="text-purple-400 text-sm font-semibold">Most Popular</span>
)}
<div className="mb-4"></div>
<h3 className="text-xl font-bold text-white mb-2 group-hover: text-purple-400 transition-colors">$3</h3>,
<p className="text-gray-300 text-sm">{description}</p>
<div className="space-y-2 mb-6">{features.map((feature, index) => (</div>
<div key={index} className="flex items-center gap-2"></div>
<CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /></CheckCircle>
<span className="text-gray-300 text-sm">{feature}</span>
))}
</div>
{price && (
<div className="mb-6"></div>
<div className="text-3xl font-bold text-white mb-1">{price}</div>
<div className="text-gray-400 text-sm">per month</div>
)}
{onSelect && (
<button onClick = {onSelect};></button>
className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group"></button>
Get Started
<ArrowRight className="w-4 h-4 group-hove,
  r:translate-x-1 transition-transform" /></ArrowRight>
)}
</div>
)
{}
export default ServiceCard