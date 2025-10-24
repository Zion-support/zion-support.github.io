<<<<<<< HEAD
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
const ServiceCardPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
    title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
},
    {
  icon: BarChart,
    title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
    benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
},
    {
  icon: Target,
    title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
    benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
},
    {
  icon: TrendingUp,
    title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
    benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
}
  ]
  const benefits = [
  "Increase efficiency by up to 50%",
      "Reduce costs by 30% with automation",
      "Improve decision-making with AI insights",
      "Scale operations without proportional staff increases",
    'Gain competitive advantage with advanced technology'
  ]
  return (
    <>
      <Helmet>
        <title>ServiceCard</title>
        <meta name=&quot;description&quot; content=&quot;Advanced ServiceCard solution for modern businesses.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, ServiceCard, AI solutions, intelligent automation&quot; />
      </Helmet>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quot;>
              ServiceCard
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced ServiceCard solution for modern businesses.
            </p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
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
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
</>
  )
}
export default ServiceCardPage
price?: string
popular?: boolean
onSelect?: () =>void
class Nam e?: string}constServiceCard:React.FC<ServiceCardProp s>= ({
  title
description
features
price
popular= false
onSelect
className = ''
}) => {
return (
<div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group ${className} ${
  popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : ''
}`}>{popular && (</div>
<div className=&quot;flex items-center gap-2 mb-4&quot;></div>
<div className=&quot;w-2 h-2 bg-purple-400 rounded-full&quot;></div>
<span className=&quot;text-purple-400 text-sm font-semibold&quot;>Most Popular</span>
</div>
)}
<div className=&quot;mb-4&quot;></div>
<h3 className=&quot;text-xl font-bold text-white mb-2 group-hover: text-purple-400 transition-colors&quot;>$3</h3>
<p className=&quot;text-gray-300 text-sm&quot;>{description}</p>
</div>
<div className=&quot;space-y-2 mb-6&quot;>{features.map((feature, index) => (</div>
<div key={index} className=&quot;flex items-center gap-2&quot;></div>
<CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
<span className=&quot;text-gray-300 text-sm&quot;>{feature}</span>
</div>
))}
</div>
{price && (
<div className=&quot;mb-6&quot;></div>
<div className=&quot;text-3xl font-bold text-white mb-1&quot;>{price}</div>
<div className=&quot;text-gray-400 text-sm&quot;>per month</div>
</div>
)},
    {onSelect && (
<button
onClick={onSelect}
className=&quot;w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group&quot;></button>
Get Started
<ArrowRight className=&quot;w-4 h-4 group-hover: translate-x-1 transition-transform&quot; />
</button>
)}
</div>
)
}
export default ServiceCard
=======
<<<<<<< HEAD
interface ServiceCardProps {
  // Add props here
}

const ServiceCard: React.FC<ServiceCardProps> = (_props) => {
=======
"use client";
import React from 'react';

const ServiceCard = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
  return (
    <div>
      <h1>ServiceCard</h1>
      <p>This component is under construction.</p>
    </div>
  );
};

export default ServiceCard;
>>>>>>> main
