'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
;
const PagePage: React.FC = () => {const features = [
=======
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
    {
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
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Scale your solutions globally with intelligent distribution.',
      benefits: ['Global deployment', 'Edge computing', 'Load balancing', 'Geographic optimization']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Enterprise-grade security to protect your data and operations.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']
    }
  ];

                </div>
              ));
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Solution?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our platform is designed to help you achieve your goals efficiently and effectively.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="bg-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Brain className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
                    <p className="text-gray-300 mb-6">
                      Leverage the power of artificial intelligence to transform your business.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                        <div className="text-gray-300 text-sm">Uptime</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400">50ms</div>
                        <div className="text-gray-300 text-sm">Response Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that have already transformed their business with our solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/pricing"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
  );
};

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
export default PagePage;