import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PlayIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const demos = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions Demo',
      description: 'Experience our AI-powered solutions in action. See how machine learning can transform your business.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      href: '/ai-solutions',
      gradient: 'from-purple-500 to-pink-500',
      duration: '15 min'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure Demo',
      description: 'Explore our cloud solutions and see how we can optimize your infrastructure for scalability.',
      features: ['Multi-cloud Strategy', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization'],
      href: '/cloud-solutions',
      gradient: 'from-cyan-500 to-blue-500',
      duration: '20 min'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity Demo',
      description: 'See our security solutions in action and learn how we protect your digital assets.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Incident Response'],
      href: '/cybersecurity',
      gradient: 'from-green-500 to-emerald-500',
      duration: '25 min'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation Demo',
      description: 'Discover how our digital transformation services can modernize your business operations.',
      features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'ROI Optimization'],
      href: '/digital-transformation',
      gradient: 'from-yellow-500 to-orange-500',
      duration: '30 min'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, cloud demo, cybersecurity demo, digital transformation demo, technology showcase" />
        <meta property="og:title" content="Demo - Zion Tech Group" />
        <meta property="og:description" content="Experience our AI and IT solutions through interactive demos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/demo" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <PlayIcon className="w-16 h-16 mx-auto text-purple-400 mb-4 animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text neon-text">
                Interactive Demos
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <BoltIcon className="w-8 h-8 text-yellow-400 animate-bounce" />
                <span className="text-2xl font-semibold text-cyan-400">Experience</span>
                <FireIcon className="w-8 h-8 text-red-400 animate-pulse" />
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience our AI and IT solutions through interactive demos. See how our technology can transform your business 
              and drive growth in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Schedule Demo
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Demo Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 gradient-text">
              Available Demos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {demos.map((demo, index) => {
                const Icon = demo.icon;
                return (
                  <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${demo.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {demo.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{demo.title}</h3>
                    <p className="text-gray-300 mb-6">{demo.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">What You'll See:</h4>
                      <ul className="space-y-2">
                        {demo.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-3">
                      <Link 
                        to={demo.href} 
                        className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center transform hover:scale-105"
                      >
                        Start Demo
                      </Link>
                      <Link 
                        to="/contact" 
                        className="flex-1 border border-slate-600 text-gray-300 py-3 px-4 rounded-lg font-semibold hover:bg-slate-700 hover:text-white transition-all duration-300 text-center"
                      >
                        Schedule
                      </Link>
                    </div>
                  </div>
                );
              })}
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
              Schedule a personalized demo with our experts and see how our solutions can transform your business. 
              We'll tailor the demo to your specific needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Schedule Your Demo
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;