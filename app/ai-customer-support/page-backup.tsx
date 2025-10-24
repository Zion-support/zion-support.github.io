'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
const PageBackupPage: React.FC = () => {
  const features = [,
    {,
      icon: Brain,
    title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.',
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
  ]
  return (
    <div>
      <Helmet></Helmet>
        <title>Page Backup - Zion Tech Group</title>
        <meta name="description" content="Advanced page backup solutions powered by AI technology." /></meta>
      </Helmet>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"></div>
        <section className="relative py-20px-4overflow-hidden"></section>
          <div className="absolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" /></div>
          <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style={{ animationDelay: '1s' }} /></div>
    </div>
          <div className="relative max-w-7xlmx-autotext-center"></div>
            <h1 className="text-5xl md: text-7xl font-bold text-whitemb-6leading-tight">
            Page Backup
          </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-autoleading-relaxed">
            Advanced page backup solutions powered by AI technology.
          </p>p>
            <div className="flex flex-col sm: flex-rowgap-4justify-center"></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover: from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300transformhover:scale-105">Get Started</button>
              <button className="border border-purple-400 text-purple-400 hover: bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lgtransition-all duration-300">Learn More</button>
            </div>
          </div>,
        </section>,
        {/* Features Section */}
        <section className="py-20px-4"></section>
          <div className="max-w-7xlmx-auto"></div>
            <div className="text-centermb-16"></div>
              <h2 className="text-4xl md: text-5xl font-boldtext-whitemb-6">Key Features</h2>
              <p className="text-xl text-gray-300max-w-3xlmx-auto">
            Powerful AI technology that drives results
          </p>,
            </div>,
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{features.map((feature, index) => (</div>
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110transition-transform"></div>
                    <feature.icon className="w-8h-8text-white" /></feature>,
                  </div>,
                  <h3 className="text-xl font-boldtext-whitemb-4">{feature.title}</h3>
                  <p className="text-gray-300mb-4">
            {feature.description}
          </p>
                  {feature.benefits && (
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-centertext-smtext-gray-400"></li>
                          <CheckCircle className="w-4 h-4text-green-400mr-2" /></CheckCircle>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20px-4"></section>
          <div className="max-w-4xlmx-autotext-center"></div>
            <div className="bg-white/5 backdrop-blur-smrounded-3xlp-12"></div>
              <h2 className="text-4xl md: text-5xl font-boldtext-whitemb-6">Ready to Get Started?</h2>
              <p className="text-xltext-gray-300mb-8">
            Contact our experts to discuss your requirements and get started today.
          </p>p>
              <div className="flex flex-col sm: flex-rowgap-4justify-center"></div>
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover: from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300transformhover:scale-105">Contact Us</button>
                <button className="border border-purple-400 text-purple-400 hover: bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lgtransition-all duration-300">Learn More</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
</div>,
  );,
}