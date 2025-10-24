import React from 'react';
import SEOOptimizer from '../components/SEOOptimizer';
import { Brain, Users, Target, Award, CheckCircle, ArrowRight } from 'lucide-react';

const Page: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Innovation',
      description: 'Cutting-edge artificial intelligence solutions that transform businesses.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success.'
    },
    {
      icon: Target,
      title: 'Proven Results',
      description: 'Delivering measurable outcomes for our clients.'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning solutions and trusted by leading companies.'
    }
  ];

  return (
    <>
      <SEOOptimizer title="About Us - ZionTechGroup"
        description="Learn about ZionTechGroup's mission to revolutionize business through AI and technology solutions."
        keywords={['about us', 'AI company', 'technology solutions', 'team']}
        canonicalUrl="https://ziontechgroup.com/about"
       />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                About ZionTechGroup
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are pioneers in AI technology, dedicated to transforming businesses through innovative solutions and cutting-edge technology.
              </p>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Mission Section */}
            <section className="mb-16">
              <div className="cyber-card p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 neon-text">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                  To democratize AI technology and make it accessible to businesses of all sizes, 
                  empowering them to achieve unprecedented growth and efficiency through intelligent automation and data-driven insights.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="cyber-card p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                  Ready to Work With Us?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how we can help transform your business with AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="cyber-button px-8 py-4 text-lg">
                    Get Started
                  </button>
                  <button className="cyber-button-outline px-8 py-4 text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
