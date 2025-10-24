<<<<<<< HEAD
    "use client",
import { Brain, TrendingUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Phone } from 'lucide-react';
const Page: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {}
        setIsLoaded(true);
    }, []);
const Page = () => {
  return (
  <>
      <SEOOptimizer
        title="AI Analytics Dashboard - Intelligent Business Intelligence | ZionTechGroup"
const Page = () => {
  return (
    <>
      <SEOOptimizertitle =&quot;AI Analytics Dashboard - Intelligent Business Intelligence | ZionTechGroup&quot;>
        description="Transform your data into actionable insights with AI-powered analytics dashboard. Get predictive insights, real-time monitoring, andintelligentrecommendations."
        keywords={['AI analytics', 'business intelligence', 'data visualization', 'predictive analytics', 'dashboard', 'datainsights']}
        canonicalUrl="https: //ziontechgroup.com/ai-analytics-dashboard"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
        <Navigation />
        {/* Hero Section */}
        <section className="relative py-20 px-4"></section>
          <div className="container mx-auto max-w-7xl"></div>
            <div className="text-center mb-16"></div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
                <BarChart3 className="w-4 h-4" />
                AI-Powered Business Intelligence
              </div>
              <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Analytics Dashboard
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your data into actionable insights with AI-powered analytics. Get predictive insights
                real-time monitoring, and intelligent recommendations that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
                <a href="#pricing">
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a href="#demo">
                  className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>
            {/* Key Stats */}
            <div className="grid grid-cols-1 md: grid-cols-4 gap-6 mb-16"></div>
              <div className="quantum-card p-6 text-center energy-pulse"></div>
                <div className="text-3xl font-bold text-blue-400 mb-2">45%</div>
                <div className="text-gray-300">Revenue Increase</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse"></div>
                <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-gray-300">Productivity Boost</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse"></div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">30%</div>
                <div className="text-gray-300">Conversion Lift</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse"></div>
                <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4" id=&quot;features&quot;></section>
          <div className="container mx-auto max-w-7xl"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to unlock insights from your data
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => ()
                <div key={index} className="cyber-card p-6 hover: scale-105 transition-all duration-300"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => ()
                      <li key={benefitIndex} className="flex items-center text-sm text-blue-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Integrations Section */}
        <section className="py-20 px-4 bg-slate-800/50"></section>
          <div className="container mx-auto max-w-7xl"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect all your data sources in one powerful dashboard
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {integrations.map((integration, index) => ()
                <div key={index} className="cyber-card p-6 text-center hover: scale-105 transition-all duration-300"></div>
                  <div className="text-6xl mb-4">{integration.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{integration.name}</h3>
                  <p className="text-gray-300 text-sm">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="py-20 px-4" id=&quot;pricing&quot;></section>
          <div className="container mx-auto max-w-7xl"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your analytics needs
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8"></div>
              {pricingPlans.map((plan, index) => ()
                <div key = {index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''}`}></div>
                  {plan.popular && ();
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <div className="bg-blue-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold"></div>
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                    <div className="text-gray-400">per month</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => ()
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href = {`mailto:kleber@ziontechgroup.com?subject=Interest in AI Analytics Dashboard ${plan.name} Plan`}>
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${}
                      plan.popular
                        ? 'bg-blue-400 text-slate-900 hover:bg-blue-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
{              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-slate-800/50"></section>
          <div className="container mx-auto max-w-7xl"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using AI Analytics Dashboard
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {testimonials.map((testimonial, index) => ()
                <div key={index} className="cyber-card p-6"></div>
                  <div className="flex items-center mb-4"></div>
                    {[...Array(testimonial.rating)].map((_, i) => ()
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">&quot;{testimonial.content}&quot;</p>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-blue-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600"></section>
          <div className="container mx-auto max-w-4xl text-center"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your free trial today and experience the power of AI-driven analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <a href="mailto:kleber@ziontechgroup.com?subject=AI Analytics Dashboard Free Trial Request">
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a href="tel:+13024640950">
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-blue-100"></div>
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
</>
  )
{}
export default AIAnalyticsDashboardPage;
=======
import React from "react";

interface PagePageProps {
  // Add props here
}

const PagePage: React.FC<PagePageProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is a placeholder for the  page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PagePage;
>>>>>>> origin/main
