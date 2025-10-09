import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Target, Zap, Settings, CheckCircle, Palette } from 'lucide-react';

const AIContentStudioPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Content Creation',
      description: 'AI-powered content generation and editing tools',
      benefits: ['Multi-format support', 'Brand consistency', 'Quality optimization']
    },
    {
      icon: Target,
      title: 'Audience Targeting',
      description: 'Intelligent content personalization and targeting',
      benefits: ['Audience analysis', 'Content optimization', 'Engagement tracking']
    },
    {
      icon: Zap,
      title: 'Rapid Production',
      description: 'Fast content creation and publishing workflows',
      benefits: ['Bulk generation', 'Template library', 'Automated publishing']
    },
    {
      icon: Settings,
      title: 'Customization',
      description: 'Flexible content studio with custom configurations',
      benefits: ['Custom templates', 'Brand guidelines', 'Workflow automation']
    },
    {
      icon: Palette,
      title: 'Design Tools',
      description: 'Integrated design and visual content creation',
      benefits: ['Visual editor', 'Asset library', 'Design automation']
    },
    {
      icon: CheckCircle,
      title: 'Quality Control',
      description: 'Automated content review and optimization',
      benefits: ['Quality scoring', 'Compliance checks', 'Performance metrics']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Content Studio
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Your complete content creation workspace
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Create, edit, and optimize content with our comprehensive AI-powered content studio.
            From ideation to publication, streamline your entire content workflow.
          </p>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Workflow Section */}
        <section className="py-16 bg-white/5 rounded-2xl">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Content Creation Workflow
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Ideation</h3>
                <p className="text-gray-300">AI-powered content ideas and planning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Creation</h3>
                <p className="text-gray-300">Generate and design your content</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Review</h3>
                <p className="text-gray-300">Quality control and optimization</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Publish</h3>
                <p className="text-gray-300">Automated publishing and distribution</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Content?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start creating amazing content with our AI-powered content studio today.
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

export default AIContentStudioPage;