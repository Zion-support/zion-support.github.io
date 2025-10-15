import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PlayIcon,
  ArrowRightIcon,
  CpuChipIcon,
  ServerIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Content Generator Demo',
      description: 'Experience our AI-powered content generation capabilities with real-time examples.',
      href: '/ai-content-generator-demo',
      icon: CpuChipIcon,
      duration: '5 min demo',
      features: ['Real-time Generation', 'Multiple AI Models', 'Brand Voice Training', 'SEO Optimization']
    },
    {
      title: 'Analytics Dashboard Demo',
      description: 'Explore our advanced analytics dashboard with live data visualization.',
      href: '/analytics-dashboard-demo',
      icon: ChartBarIcon,
      duration: '10 min demo',
      features: ['Real-time Data', 'Custom Dashboards', 'Automated Reports', 'Data Visualization']
    },
    {
      title: 'Customer Support Bot Demo',
      description: 'Test our AI-powered customer support chatbot with interactive scenarios.',
      href: '/customer-support-demo',
      icon: UserGroupIcon,
      duration: '8 min demo',
      features: ['AI Chatbot', 'Sentiment Analysis', 'Multi-language Support', 'Ticket Management']
    },
    {
      title: 'Project Management Demo',
      description: 'See how our AI-powered project management tools can streamline your workflow.',
      href: '/project-management-demo',
      icon: WrenchScrewdriverIcon,
      duration: '12 min demo',
      features: ['AI Task Prioritization', 'Resource Optimization', 'Progress Tracking', 'Team Collaboration']
    },
    {
      title: 'Cybersecurity Demo',
      description: 'Witness our advanced security monitoring and threat detection capabilities.',
      href: '/cybersecurity-demo',
      icon: ShieldCheckIcon,
      duration: '15 min demo',
      features: ['Threat Detection', 'Security Audits', 'Real-time Monitoring', 'Incident Response']
    },
    {
      title: 'Cloud Infrastructure Demo',
      description: 'Explore our cloud migration and infrastructure management solutions.',
      href: '/cloud-infrastructure-demo',
      icon: CloudIcon,
      duration: '20 min demo',
      features: ['Cloud Migration', 'Auto-scaling', 'Cost Optimization', 'Performance Monitoring']
    }
  ];

  const benefits = [
    {
      title: 'Interactive Experience',
      description: 'Hands-on demos that let you experience our solutions firsthand.',
      icon: PlayIcon
    },
    {
      title: 'Real-time Results',
      description: 'See actual results and outputs from our AI and automation tools.',
      icon: ClockIcon
    },
    {
      title: 'Expert Guidance',
      description: 'Our experts will guide you through each demo and answer your questions.',
      icon: UserGroupIcon
    },
    {
      title: 'Custom Scenarios',
      description: 'Demos tailored to your specific business needs and use cases.',
      icon: WrenchScrewdriverIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Live Demos - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive live demos. See how our technology can transform your business." />
        <meta name="keywords" content="demos, live demos, AI demos, IT demos, interactive demos, technology demos" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
              Live Demos
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions firsthand through interactive live demos. 
              See how our technology can transform your business.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Schedule a Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Demo Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Interactive <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Demos</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of live demos to see our solutions in action
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo, index) => (
                <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <demo.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {demo.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                      {demo.duration}
                    </span>
                  </div>
                  <ul className="text-sm text-gray-400 mb-6 space-y-1">
                    {demo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <StarIcon className="w-4 h-4 text-yellow-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <Link to={demo.href} className="flex items-center">
                      <PlayIcon className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Start Demo</span>
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Try Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Demos</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of our solutions before making a decision
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 gradient-text">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to See Our Solutions in Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a personalized demo with our experts and discover how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                Schedule Demo
                <PlayIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                View All Services
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;