'use client';
import React from 'react';
import { Mail, Target, BarChart, Zap, ArrowRight, Mail, Users, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';

const EmailOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'AI-Powered Subject Lines',
      description: 'Generate compelling subject lines that increase open rates by up to 40%'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track email performance with detailed analytics and insights'
    },
    {
      icon: Users,
      title: 'Audience Segmentation',
      description: 'Automatically segment your audience for personalized campaigns'
    },
    {
      icon: Zap,
      title: 'A/B Testing',
      description: 'Test different versions to find the most effective content'
    },
    {
      icon: Shield,
      title: 'Deliverability Optimization',
      description: 'Ensure your emails reach the inbox with advanced deliverability tools'
    },
    {
      icon: TrendingUp,
      title: 'ROI Tracking',
      description: 'Measure and optimize your email marketing ROI in real-time'
    }
  ];

  const benefits = [
    {
      title: '40% Higher Open Rates',
      description: 'AI-optimized subject lines and content'
    },
    {
      title: '60% More Clicks',
      description: 'Personalized content that resonates with your audience'
    },
    {
      title: '3 x Better ROI',
      description: 'Data-driven optimization for maximum returns'
    },
    {
      title: 'Save 10 Hours/Week',
      description: 'Automated optimization and campaign management'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5 xl font-bold text-white mb-6"></h1></<<<h1>Email</h1></h1> <span className="text-cyan-400"></span></<<<span>Optimizer</span></span><p className="text-xl text-gray-300 max-w-3 xl mx-auto mb-8">Transform your email marketing with AI-powered optimization. Increase open rates,</p></<<<p>boost</p></<<p>engagement</p>, and maximize ROI with our intelligent email optimization platform.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <Mail className="w-5 h-5 mr-2" >Get Started</Mai>
            </Mail>
            <Link
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <BarChart className="w-5 h-5 mr-2" >View Demo</BarChar>
            </BarChart>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16"></div>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Powerful</h2></h2> <span className="text-cyan-400"></span></<<<span>Features</span></span><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4"></div>
                  <feature.icon className="w-6 h-6 text-white" /></featur>
                <h3 className="text-xl font-semibold text-white mb-3"></h>{feature.title}<p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16"></div>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Proven</h2></h2> <span className="text-cyan-400"></span></<<<span>Results</span></span><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
                  <TrendingUp className="w-8 h-8 text-white" /></TrendingU>
                <h3 className="text-xl font-semibold text-white mb-3"></h>{benefit.title}<p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2 xl p-12 text-center"></div>
          <h2 className="text-3 xl font-bold text-white mb-4"></h2></<<<h2>Ready</h2></<<h2>to</h2> Optimize Your Email Marketing?<p className="text-xl text-gray-300 mb-8 max-w-2 xl mx-auto">Join thousands of marketers using our AI-powered email optimization to boost their campaigns.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <ArrowRight className="w-5 h-5 mr-2" >Start Optimizing</ArrowRigh>
            </ArrowRight>
            <Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <Target className="w-5 h-5 mr-2" >View Pricing</Targe>
            </Target>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailOptimizerPage;