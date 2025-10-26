import React from 'react;'
import Footer from '../components/Footer;'
import Head from "next/head";"
import Link from "next/link";"
import Navigation from '../components/Navigation;'
import { CheckCircle, ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react;'

const Page: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence','
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.','
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics','
      description: 'Comprehensive analytics dashboard with real-time data visualization.','
      benefits: ['Real-time monitoring', 'Custom dashboards', 'Data visualization', 'Performance metrics']'
    },
    {
      icon: Target,
      title: 'Precision Targeting','
      description: 'Target the right audience with AI-driven precision and accuracy.','
      benefits: ['Audience segmentation', 'Behavioral analysis', 'Conversion optimization', 'ROI tracking']'
    }
  ];

  return ()
    <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>""
        <div className="container mx-auto px-4 py-20"></div>""
          <div className="text-center mb-16"></div>""
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">""
              ContentPreviewCard
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto">""
              Advanced ContentPreviewCard solutions powered by artificial intelligence and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"></div>""
            {features.map((feature, index) => ()
              <div key={index} className="bg-slate-800 p-6 rounded-lg"></div>""
                <feature.icon className="w-12 h-12 text-emerald-400 mb-4" />""
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""
                <p className="text-gray-300 mb-4">{feature.description}</p>""
                <ul className="space-y-2">""
                  {feature.benefits.map((benefit, idx) => ()
                    <li key={idx} className="flex items-center text-gray-300">""
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />""
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center"></div>""
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>""
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">""
              Transform your business with our cutting-edge AI solutions. Contact us today to learn more.
            </p>
            <a,
href="/contact""
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300""
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />""
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;