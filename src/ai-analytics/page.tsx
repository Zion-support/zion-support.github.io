import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Target, BarChart, Settings, CheckCircle } from 'lucide-react';

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Advanced AI-powered data analysis and insights',
      benefits: ['Real-time analytics', 'Predictive modeling', 'Data visualization']
    },
    {
      icon: Target,
      title: 'Performance Tracking',
      description: 'Comprehensive performance monitoring and optimization',
      benefits: ['KPI tracking', 'Trend analysis', 'Performance alerts']
    },
    {
      icon: Settings,
      title: 'Customization',
      description: 'Tailored analytics solutions for your business needs',
      benefits: ['Custom dashboards', 'Flexible reporting', 'Integration options']
    },
    {
      icon: CheckCircle,
      title: 'Validation',
      description: 'Data accuracy and reliability assurance',
      benefits: ['Data validation', 'Quality checks', 'Audit trails']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Analytics Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Intelligent data analysis and business insights
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your data into actionable insights with our advanced AI-powered analytics platform.
            Get real-time analysis, predictive modeling, and comprehensive reporting to drive your business forward.
          </p>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-cyan-300 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start leveraging AI-powered analytics to make data-driven decisions and accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIAnalyticsPage;