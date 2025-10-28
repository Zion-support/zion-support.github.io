import fs from 'fs';
import path from 'path';

const template = `import React from 'react';
import Navigation from '../../components/Navigation';
import { Brain, BarChart, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Page Title | Zion Tech Group',
  description: 'Page description',
  keywords: 'keywords',
  openGraph: {
    title: 'Page Title | Zion Tech Group',
    description: 'Page description',
    type: 'website',
  },
};

const PageComponent: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Feature 1",
      description: "Description of feature 1.",
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"]
    },
    {
      icon: BarChart,
      title: "Feature 2",
      description: "Description of feature 2.",
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"]
    },
    {
      icon: Target,
      title: "Feature 3",
      description: "Description of feature 3.",
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"]
    },
    {
      icon: TrendingUp,
      title: "Feature 4",
      description: "Description of feature 4.",
      benefits: ["Benefit 1", "Benefit 2", "Benefit 3"]
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Page Title
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Page description
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Powerful Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="w-12 h-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-emerald-200">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Why Choose Our Solution?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <ArrowRight className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who trust our solutions
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PageComponent;`;

const files = [
  '/workspace/app/online-learning-platform/page.tsx',
  '/workspace/app/property-management-ai/page.tsx',
  '/workspace/app/supply-chain-optimizer/page.tsx',
  '/workspace/app/test/page.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`Fixing ${file}`);
    fs.writeFileSync(file, template);
    console.log(`Fixed ${file}`);
  }
});

console.log('All syntax errors fixed');