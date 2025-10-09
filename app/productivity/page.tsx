import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Zap, Clock, Target, Users, CheckCircle, BarChart, Calendar, Mail, FileText, Brain } from 'lucide-react';

const ProductivityPage: React.FC = () => {
  const tools = [
    {
      icon: Clock,
      title: 'Time Management AI',
      description: 'Intelligent time tracking and productivity optimization',
      features: ['Smart scheduling', 'Focus time blocks', 'Distraction blocking'],
      price: 'Starting at $49/month'
    },
    {
      icon: Target,
      title: 'Goal Tracking System',
      description: 'AI-powered goal setting and progress monitoring',
      features: ['Smart goal suggestions', 'Progress analytics', 'Milestone tracking'],
      price: 'Starting at $39/month'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced team productivity and communication tools',
      features: ['Virtual workspaces', 'Real-time collaboration', 'Task delegation'],
      price: 'Starting at $99/month'
    },
    {
      icon: BarChart,
      title: 'Productivity Analytics',
      description: 'Data-driven insights into team and individual performance',
      features: ['Performance metrics', 'Trend analysis', 'Improvement suggestions'],
      price: 'Starting at $79/month'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI-powered calendar management and meeting optimization',
      features: ['Auto-scheduling', 'Meeting optimization', 'Conflict resolution'],
      price: 'Starting at $59/month'
    },
    {
      icon: Brain,
      title: 'Focus Enhancement',
      description: 'Cognitive enhancement tools for improved concentration',
      features: ['Focus training', 'Distraction filtering', 'Mental fatigue detection'],
      price: 'Starting at $69/month'
    }
  ];

  const features = [
    'AI-powered productivity insights',
    'Automated task prioritization',
    'Smart time allocation',
    'Distraction-free work environment',
    'Real-time performance monitoring',
    'Personalized productivity recommendations',
    'Team collaboration optimization',
    'Seamless integration with existing tools'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Productivity Tools
          </h1>
          <p className="text-lg sm:text-xl text-cyan-400 mb-8 font-medium">
            AI-Enhanced Productivity Solutions
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Maximize your productivity with our comprehensive suite of AI-powered tools designed to optimize 
            your workflow, enhance focus, and accelerate achievement of your goals.
          </p>
        </section>

        {/* Tools Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Our Productivity Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">
                  <tool.icon className="w-12 h-12 mx-auto text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {tool.title}
                </h3>
                <p className="text-gray-300 mb-4 text-center leading-relaxed">
                  {tool.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-4">
                    {tool.price}
                  </div>
                  <button className="cyber-button w-full">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Productivity Tools?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-gray-300">Increase in Productivity</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">60%</div>
                <div className="text-gray-300">Reduction in Distractions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
                <div className="text-gray-300">Goal Achievement Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">3hrs</div>
                <div className="text-gray-300">Time Saved Daily</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-8 sm:p-12 cyber-card">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already transformed their productivity with our AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductivityPage;
