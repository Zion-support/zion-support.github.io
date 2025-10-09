import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { TestTube, Target, Settings, CheckCircle } from 'lucide-react';

const AIABTestingPage: React.FC = () => {
  const features = [
    {
      icon: TestTube,
      title: 'A/B Testing',
      description: 'AI-powered A/B testing and experimentation',
      benefits: ['Test automation', 'Statistical analysis', 'Result interpretation']
    },
    {
      icon: Target,
      title: 'Targeting',
      description: 'Intelligent audience segmentation and targeting',
      benefits: ['Dynamic targeting', 'Behavioral analysis', 'Personalization']
    },
    {
      icon: Settings,
      title: 'Optimization',
      description: 'Continuous optimization of test parameters',
      benefits: ['Auto-optimization', 'Performance tuning', 'Conversion tracking']
    },
    {
      icon: CheckCircle,
      title: 'Validation',
      description: 'Statistical validation and confidence intervals',
      benefits: ['Statistical significance', 'Confidence metrics', 'Risk assessment']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI A/B Testing Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Intelligent experimentation and optimization for better results
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Leverage artificial intelligence to run smarter A/B tests, analyze results with statistical precision,
            and optimize your campaigns for maximum impact and conversion rates.
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
              Ready to Optimize Your Campaigns?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start running intelligent A/B tests that deliver real results and drive meaningful improvements to your business metrics.
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

export default AIABTestingPage;