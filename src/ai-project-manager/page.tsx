import React from 'react';
import Layout from '../components/Layout';
import SEOOptimizer from '../components/SEOOptimizer';
import { Calendar, Users, Target, BarChart, CheckCircle, Phone, Mail, Clock, TrendingUp, Zap } from 'lucide-react';

const AIProjectManagerPage: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Intelligent Scheduling',
      description: 'AI-powered project scheduling that optimizes timelines and resource allocation.',
      benefits: ['Smart Timeline Planning', 'Resource Optimization', 'Dependency Management', 'Risk Assessment']
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Intelligent team assignment and workload balancing based on skills and availability.',
      benefits: ['Skill Matching', 'Workload Balancing', 'Performance Tracking', 'Collaboration Tools']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Automated progress tracking and milestone management with predictive analytics.',
      benefits: ['Progress Monitoring', 'Milestone Tracking', 'Predictive Analytics', 'Performance Metrics']
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive project analytics and automated reporting for stakeholders.',
      benefits: ['Real-time Dashboards', 'Automated Reports', 'ROI Analysis', 'Performance Insights']
    }
  ];

  const projectTypes = [
    'Software Development',
    'Marketing Campaigns',
    'Product Launches',
    'Infrastructure Projects',
    'Research & Development',
    'Process Improvements',
    'Digital Transformation',
    'Quality Assurance',
    'Training Programs',
    'Compliance Projects'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Project Manager - Zion Tech Group"
        description="Intelligent project management powered by AI. Optimize timelines, manage teams, and track progress with our advanced AI project management solution."
        keywords={['AI project manager', 'project management', 'intelligent scheduling', 'team management', 'project analytics']}
        canonicalUrl="https://ziontechgroup.com/ai-project-manager"
      />
      <Layout>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Project Manager
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Intelligent project management that adapts and optimizes for success
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Our AI-powered project management platform combines intelligent scheduling, team optimization, 
              and predictive analytics to ensure your projects are delivered on time and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button flex items-center justify-center space-x-2"
                style={{background: 'linear-gradient(45deg, #06b6d4, #0891b2)'}}
              >
                <Mail className="w-5 h-5" />
                <span>Start Free Trial</span>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Key Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI capabilities designed to revolutionize project management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center mb-6">
                  <feature.icon className="w-10 h-10 text-cyan-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Project Types Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Perfect for Any Project Type
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI project manager adapts to any industry and project complexity
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {projectTypes.map((type, index) => (
              <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-gray-300 text-sm font-medium">{type}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven project management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button flex items-center justify-center space-x-2"
                style={{background: 'linear-gradient(45deg, #06b6d4, #0891b2)'}}
              >
                <span>Start Free Trial</span>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AIProjectManagerPage;