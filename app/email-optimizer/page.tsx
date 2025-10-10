'use client',
import React from 'react';
import { Mail, Target, BarChart, Zap, ArrowRight, Mail, Users, TrendingUp, Shield } from 'lucide-react',
import Link from 'next/link';

const EmailOptimizerPage: React.FC = () => {
const features = [
    {
      icon: Target,
      title: 'AI-Powered Subject Lines',
      description: 'Generate compelling subject lines that increase open rates by up to 40%',
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track email performance with detailed analytics and insights',
    },
    {
      icon: Users,
      title: 'Audience Segmentation',
      description: 'Automatically segment your audience for personalized campaigns',
    },
    {
      icon: Zap,
      title: 'A/B Testing',
      description: 'Test different versions to find the most effective content',
    },
    {
      icon: Shield,
      title: 'Deliverability Optimization',
      description: 'Ensure your emails reach the inbox with advanced deliverability tools',
    },
    {
      icon: TrendingUp,
      title: 'ROI Tracking',
      description: 'Measure and optimize your email marketing ROI in real-time',
    }
  ],

const benefits = [
    {
      title: '40% Higher Open Rates',
      description: 'AI-optimized subject lines and content',
    },
    {
      title: '60% More Clicks',
      description: 'Personalized content that resonates with your audience',
    },
    {
      title: '3x Better ROI',
      description: 'Data-driven optimization for maximum returns',
    },
    {
      title: 'Save 10 Hours/Week',
      description: 'Automated optimization and campaign management',
    }
  ],

          </p>
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
              <div key={index} className="text-center">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
            Proven</h2> <span className="text-cyan-400">Results</span><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <TrendingUp className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3><p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Email Marketing?</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of marketers using our AI-powered email optimization to boost their campaigns.</p>
          </p>
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
          </div>
        </div>
      </div>,
    </div>,
  ),
},

export default EmailOptimizerPage,