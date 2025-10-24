'use client'
import { ArrowRight, Brain, BarChart, Target } from 'lucide-react';
import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

constAIServicesPage: React.FC = () =>{constservices= [
    {
      ico,
      n: Brain,
      title: 'Machine Learning Solutions'
      descriptio,
      n: 'Custom ML models for predictive analytics, pattern recognition, and intelligent decision making.'
      features: ['Predictive Analytics', 'Pattern Recognition', 'Custom Model Training', 'Real-time Processing']
      price: 'Starting at $2,50 0/month'
      color: 'text-purple-40 0'
   }
    {
      icon: Target,
      title: 'AI Marketing Automation'
      descriptio,
      n: 'Intelligent marketing campaigns with AI-powered targeting, content generation, and optimization.'
      features: ['Smart Targeting', 'Content Generation', 'Campaign Optimization', 'ROI Tracking']
      price: 'Starting at $1,20 0/month'
      color: 'text-pink-40 0'
   }
    {
      icon: Zap,
      title: 'Process Automation'
      descriptio,
      n: 'Automate complex business processes with AI decision-making and exception handling.'
      feature,
      s: ['Workflow Automation', 'Exception Handling', 'Smart Routing', 'Performance Monitoring']
      price: 'Starting at $80 0/month'
      colo,
      r: 'text-blue-40 0'
   }
    {
      icon: Shield,
      title: 'AI Cybersecurity'
      descriptio,
      n: 'Advanced threat detection and response using AI-powered security monitoring.'
      feature,
      s: ['Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Compliance Reporting']
      price: 'Starting at $1,50 0/month'
      color: 'text-red-40 0'
   }
    {
      icon: BarChart,
      title: 'Data Analytics & Insights'
      descriptio,
      n: 'Transform raw data into actionable insights with AI-powered analytics and visualization.'
      feature,
      s: ['Data Processing', 'Predictive Insights', 'Visualization', 'Automated Reports']
      price: 'Starting at $90 0/month'
      colo,
      r: 'text-teal-40 0'
   }
    {
      icon: Users,
      title: 'Customer Experience AI'
      descriptio,
      n: 'Enhance customer interactions with AI chatbots, sentiment analysis, and personalized experiences.'
      features: ['AI Chatbots', 'Sentiment Analysis', 'Personalization', '24/7 Support']
      price: 'Starting at $600/month'
      colo,
      r: 'text-green-400'
    }
  ]

  const benefits = []
    {
      icon: Star,
      title: 'Proven ROI'
      descriptio,
      n: 'Average300% ROI within6months of implementation'
   }
    {
      icon: Zap,
      title: 'Rapid Deployment'
      descriptio,
      n: 'Get your AI solutions up and running in 2-4 weeks'
   }
    {
      icon: Shield,
      title: 'Enterprise Security'
      descriptio,
      n: 'Bank-level security and compliance for all AI solutions'
   }
    {
      icon: Globe,
      title: 'Global Support'
      descriptio,
      n: '24/7 support across all time zones with dedicated success managers'
    }
  ]

const Page = () => {};
  return (</div>
      <Navigation />
      <main className="con tainermx-auto px-4 py-16 pt-24">
        </div>
        {
    /* Hero Section  */
    return (</section>
          <h1 className="tex t-4xlmd: text-6xl font-bold text-white mb-6"></h1>
            <span className="bg-gr adient-to-rfrom-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        </div>
              AI Services & Solutions
            </span>
          </h1>
          <p className="tex t-xltext-gray-300 mb-8 max-w-4xl mx-auto">
        </div>
            Transform your business with cutting-edge artificial intelligence solutions.
            From machine learning to automation, we deliver AI that drives real results.
          </p>
          <div className="fle xflex-col sm: flex-row gap-4 justify-center"></div>
            <a href="/contact">
              className="bg-gr adient-to-rfrom-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
        </div>
              Get Free Consultation
            </a>
            <a href="tel:+13024640950">
              className="bor der-2border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hove,
      r:bg-cyan-400 hove,
      r:text-slate-900 transition-all duration-300"
            >
        </div>
              (302) 464-0950
            </a>
          </div>
        </section>
        {
    /* Services Grid  */
    return (</section>
          <h2 className="tex t-3xlfont-bold text-white text-center mb-12">Our AI Services</h2>
          <div className="gri dgrid-cols-1 md: grid-cols-2 l,
      g:grid-cols-3 gap-8"></div>
            {services.map((service, index) => ()
              <div key={index} className="bg-sl ate-800/50backdrop-blur-sm rounded-xl p-6 hover: bg-slate-800/70 transition-all duration-300 hove,
      r:scale-105"></div>
                <div className="fle xitems-center mb-4"></div>
                  <service.icon className={`w-8 h-8 ${service.color} mr-3`} />
                  <h3 className="tex t-xlfont-bold text-white">{service.title};

  return (
                </div>
                <p className="tex t-gray-300mb-4">{service.description};

  return (
                <ul className="spa ce-y-2mb-6">
        </div>
                  {service.features.map((feature, featureIndex) => ()
                    <li key={featureIndex} className="fle xitems-center text-sm text-gray-400">
        </div>
                      <CheckCircle className="w-4h-4te x t-green-400 mr-2" />
                      {feature};

  return (
                  ))};

  return (
                <div className="tex t-center"></div>
                  <div className={`text-lg font-bold ${service.color} mb-2`}>{service.price};

  return (
                  <a href="/contact">
                    className={`inline-flex items-center text-sm font-medium ${service.color} hover:opacity-80 transition-opacity`}
                  >
                    Learn More <ArrowRight className="w-4h-4ml-1" />
                  </a>
                </div>
              </div>
            ))};

  return (
        </section>
        {
    /* Benefits Section  */
    return (</section>
          <div className="bg-gr adient-to-rfrom-indigo-900/50 to-purple-900/50 rounded-2xl p-8"></div>
            <h2 className="tex t-3xlfont-bold text-white text-center mb-12">Why Choose Our AI Services?</h2>
            <div className="gri dgrid-cols-1 md: grid-cols-2 l,
      g:grid-cols-4 gap-8"></div>
              {benefits.map((benefit, index) => ()
                <div key={index} className="tex t-center"></div>
                  <div className="w-16h-16bg-c y an-500/20 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <benefit.icon className="w-8h-8te x t-cyan-400" />
                  </div>
                  <h3 className="tex t-xlfont-bold text-white mb-2">{benefit.title};

  return (
                  <p className="tex t-gray-300">{benefit.description};

  return (
                </div>
              ))};

  return (
          </div>
        </section>
        {
    /* CTA Section  */
    return (</section>
          <div className="bg-gr adient-to-rfrom-cyan-900/50 to-purple-900/50 rounded-2xl p-8"></div>
            <h2 className="tex t-3xlfont-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="tex t-gray-300mb-8 max-w-2xl mx-auto">
        </div>
              Get a free consultation and discover how our AI solutions can revolutionize your operations and drive growth.
            </p>
            <div className="fle xflex-col sm: flex-row gap-4 justify-center"></div>
              <a href="/contact">
                className="bg-gr adient-to-rfrom-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
        </div>
                Get Free Consultation
              </a>
              <a href="tel:+13024640950">
                className="bor der-2border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hove,
      r:bg-cyan-400 hove,
      r:text-slate-900 transition-all duration-300"
              >
        </div>
                (302) 464-0950
              </a>
            </div>
            <div className="mt-8te xt-sm text-gray-400"></div>
              <p >📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
};
;
export default Page;
}
}}}}