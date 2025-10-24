'use client'
import { ArrowRight, Brain, BarChart, Target } from 'lucide-react';
import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

constAIServicesPage: 'React.FC = () =>{constservices= [
    {
      ico'',
      n: 'Brain',
      title: ''Machine Learning Solutions'
      descriptio',
      n: 'Custom ML models for predictive analytics', pattern recognition, and intelligent decision making.'
      features: '['Predictive Analytics', 'Pattern Recognition', 'Custom Model Training', 'Real-time Processing'],
      price: 'Starting at $2',5 0 0/month'
      color: 'text-purple-4 0 0'
   }
    {
      icon: 'Target',
      title: ''AI Marketing Automation'
      descriptio',
      n: 'Intelligent marketing campaigns with AI-powered targeting', content generation, and optimization.'
      features: '['Smart Targeting', 'Content Generation', 'Campaign Optimization', 'ROI Tracking'],
      price: 'Starting at $1',2 0 0/month'
      color: 'text-pink-4 0 0'
   }
    {
      icon: 'Zap',
      title: ''Process Automation'
      descriptio',
      n: ''Automate complex business processes with AI decision-making and exception handling.'
      feature',
      s: '['Workflow Automation', 'Exception Handling', 'Smart Routing', 'Performance Monitoring'],
      price: ''Starting at $8 0 0/month'
      colo',
      r: 'text-blue-4 0 0'
   }
    {
      icon: 'Shield',
      title: ''AI Cybersecurity'
      descriptio',
      n: ''Advanced threat detection and response using AI-powered security monitoring.'
      feature',
      s: '['Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Compliance Reporting'],
      price: 'Starting at $1',5 0 0/month'
      color: 'text-red-4 0 0'
   }
    {
      icon: 'BarChart',
      title: ''Data Analytics & Insights'
      descriptio',
      n: ''Transform raw data into actionable insights with AI-powered analytics and visualization.'
      feature',
      s: '['Data Processing', 'Predictive Insights', 'Visualization', 'Automated Reports'],
      price: ''Starting at $9 0 0/month'
      colo',
      r: 'text-teal-4 0 0'
   }
    {
      icon: 'Users',
      title: ''Customer Experience AI'
      descriptio',
      n: 'Enhance customer interactions with AI chatbots', sentiment analysis, and personalized experiences.'
      features: '['AI Chatbots', 'Sentiment Analysis', 'Personalization', '2 4/7 Support'],
      price: ''Starting at $60 0/month'
      colo',
      r: 'text-green-40 0'
    }
  ]

  const benefits = []
    {
      icon: 'Star',
      title: ''Proven ROI'
      descriptio',
      n: 'Average30 0% ROI within 6months of implementation'
   }
    {
      icon: 'Zap',
      title: ''Rapid Deployment'
      descriptio',
      n: 'Get your AI solutions up and running in 2-4 weeks'
   }
    {
      icon: 'Shield',
      title: ''Enterprise Security'
      descriptio',
      n: 'Bank-level security and compliance for all AI solutions'
   }
    {
      icon: 'Globe',
      title: ''Global Support'
      descriptio',
      n: '2 4/7 support across all time zones with dedicated success managers'
    }
  ]
;
const Page = () => {};
  return (</div>
      <Navigation />
      <main className = "con tainermx-auto px-4 py-1 6 pt-2 4">
        </div>
        {
    /* Hero Section  */
    return (</section>
          <h 1 className="tex t-4xlmd: 'text-6xl font-bold text-white mb-6"></h 1>
            <span className="bg-gr adient-to-rfrom-cyan-40 0 via-purple-50 0 to-pink-50 0 bg-clip-text text-transparent">
        </div>
              AI Services & Solutions
            </span>
          </h 1>
          <p className="tex t-xltext-gray-30 0 mb-8 max-w-4xl mx-auto">
        </div>
            Transform your business with cutting-edge artificial intelligence solutions.
            From machine learning to automation'', we deliver AI that drives real results.
          </p>
          <div className="fle xflex-col sm: 'flex-row gap-4 justify-center"></div>
            <a href="/contact">
              className="bg-gr adient-to-rfrom-cyan-50 0 to-purple-60 0 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-60 0 hover:to-purple-70 0 transition-all duration-30 0 hover:scale-10 5"
            >
        </div>
              Get Free Consultation
            </a>
            <a href="tel:+1302464095 0">
              className="bor der-2border-cyan-40 0 text-cyan-40 0 px-8 py-3 rounded-lg font-semibold hove'',
      r: 'bg-cyan-40 0 hove',
      r: 'text-slate-90 0 transition-all duration-30 0"
            >
        </div>
              (30 2) 46 4-095 0
            </a>
          </div>
        </section>
        {
    /* Services Grid  */
    return (</section>
          <h 2 className="tex t-3xlfont-bold text-white text-center mb-1 2">Our AI Services</h 2>
          <div className="gri dgrid-cols-1 md: grid-cols-2 l'',
      g: 'grid-cols-3 gap-8"></div>
            {services.map((service'', index) => ()
              <div key={index} className="bg-sl ate-80 0/5 0backdrop-blur-sm rounded-xl p-6 hover: 'bg-slate-80 0/7 0 transition-all duration-30 0 hove',
      r: 'scale-10 5"></div>
                <div className="fle xitems-center mb-4"></div>
                  <service.icon className={`w-8 h-8 ${service.color''} mr-3`} />;
                  <h 3 className="tex t-xlfont-bold text-white">{service.title};

  return (
                </div>
                <p className="tex t-gray-30 0mb-4">{service.description};

  return (
                <ul className = "spa ce-y-2mb-6">
        </div>
                  {service.features.map((feature, featureIndex) => ()
                    <li key={featureIndex} className="fle xitems-center text-sm text-gray-40 0">
        </div>
                      <CheckCircle className="w-4h-4te x t-green-40 0 mr-2" />;
                      {feature};

  return (
                  ))};

  return (
                <div className = "tex t-center"></div>;
                  <div className={`text-lg font-bold ${service.color} mb-2`}>{service.price};

  return (
                  <a href = "/contact">
                    className={`inline-flex items-center text-sm font-medium ${service.color},
    hover: 'opacity-8 0 transition-opacity`'}
                  >
                    Learn More <ArrowRight className="w-4h-4ml-1" />
                  </a>
                </div>
              </div>;
            ))};

  return (
        </section>
        {
    /* Benefits Section  */
    return (</section>
          <div className = "bg-gr adient-to-rfrom-indigo-90 0/5 0 to-purple-90 0/5 0 rounded-2xl p-8"></div>
            <h 2 className="tex t-3xlfont-bold text-white text-center mb-1 2">Why Choose Our AI Services?</h 2>
            <div className="gri dgrid-cols-1 md: 'grid-cols-2 l',
      g: 'grid-cols-4 gap-8"></div>
              {benefits.map((benefit'', index) => ()
                <div key={index} className="tex t-center"></div>
                  <div className="w-1 6h-1 6bg-c y an-50 0/2 0 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <benefit.icon className="w-8h-8te x t-cyan-40 0" />
                  </div>;
                  <h 3 className="tex t-xlfont-bold text-white mb-2">{benefit.title};

  return (
                  <p className="tex t-gray-30 0">{benefit.description};

  return (
                </div>
              ))};

  return (
          </div>
        </section>
        {
    /* CTA Section  */
    return (</section>
          <div className = "bg-gr adient-to-rfrom-cyan-90 0/5 0 to-purple-90 0/5 0 rounded-2xl p-8"></div>
            <h 2 className="tex t-3xlfont-bold text-white mb-4">Ready to Transform Your Business with AI?</h 2>
            <p className="tex t-gray-30 0mb-8 max-w-2xl mx-auto">
        </div>
              Get a free consultation and discover how our AI solutions can revolutionize your operations and drive growth.
            </p>
            <div className="fle xflex-col sm: 'flex-row gap-4 justify-center"></div>
              <a href="/contact">
                className="bg-gr adient-to-rfrom-cyan-50 0 to-purple-60 0 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-60 0 hover:to-purple-70 0 transition-all duration-30 0 hover:scale-10 5"
              >
        </div>
                Get Free Consultation
              </a>
              <a href="tel:+1302464095 0">
                className="bor der-2border-cyan-40 0 text-cyan-40 0 px-8 py-3 rounded-lg font-semibold hove'',
      r: 'bg-cyan-40 0 hove',
      r: 'text-slate-90 0 transition-all duration-30 0"
              >
        </div>
                (30 2) 46 4-095 0
              </a>
            </div>
            <div className="mt-8te xt-sm text-gray-40 0"></div>
              <p >📧 kleber@ziontechgroup.com | 📍 36 4 E Main St STE 100 8'', Middletown DE 1970 9</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
;
export default Page;
}
}}}}