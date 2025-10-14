import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PlayIcon, CheckIcon } from '@heroicons/react/24/outline';
import {
  CpuChipIcon,
  ServerIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Analytics Dashboard',
      description: 'Experience our AI-powered analytics platform with real-time data visualization and predictive insights.',
      icon: ChartBarIcon,
      features: ['Real-time Analytics', 'AI Predictions', 'Custom Dashboards', 'Data Export'],
      duration: '5 minutes',
      category: 'AI Solutions'
    },
    {
      title: 'AI Content Generator',
      description: 'Try our advanced AI content generation tool for blogs, social media, and marketing materials.',
      icon: CpuChipIcon,
      features: ['Multi-format Content', 'SEO Optimization', 'Brand Voice Matching', 'Bulk Generation'],
      duration: '3 minutes',
      category: 'AI Solutions'
    },
    {
      title: 'Cloud Infrastructure Manager',
      description: 'Explore our cloud management platform with automated scaling and cost optimization.',
      icon: CloudIcon,
      features: ['Resource Monitoring', 'Auto-scaling', 'Cost Analysis', 'Security Dashboard'],
      duration: '7 minutes',
      category: 'IT Solutions'
    },
    {
      title: 'Cybersecurity Monitor',
      description: 'See our advanced threat detection system in action with real-time security monitoring.',
      icon: ShieldCheckIcon,
      features: ['Threat Detection', 'Real-time Alerts', 'Compliance Reports', 'Incident Response'],
      duration: '4 minutes',
      category: 'Security'
    },
    {
      title: 'Micro SAAS Builder',
      description: 'Build and deploy a micro SAAS application using our low-code platform.',
      icon: CodeBracketIcon,
      features: ['Drag & Drop Builder', 'API Integration', 'Database Management', 'Deployment Tools'],
      duration: '10 minutes',
      category: 'Micro SAAS'
    },
    {
      title: 'IT Service Desk',
      description: 'Experience our intelligent IT service desk with automated ticket routing and resolution.',
      icon: ServerIcon,
      features: ['Ticket Management', 'Automated Routing', 'Knowledge Base', 'Performance Analytics'],
      duration: '6 minutes',
      category: 'IT Solutions'
    }
  ];

  const categories = ['All', 'AI Solutions', 'IT Solutions', 'Micro SAAS', 'Security'];

  return (
    <>
      <Helmet>
        <title>Live Demos - Zion Tech Group | Try Our AI & IT Solutions</title>
        <meta name="description" content="Experience our AI solutions, IT services, and micro SAAS platforms through interactive live demos. No signup required." />
        <meta name="keywords" content="AI demo, IT solutions demo, micro SAAS demo, technology demonstration, live demo" />
        <meta property="og:title" content="Live Demos - Zion Tech Group" />
        <meta property="og:description" content="Experience our AI solutions, IT services, and micro SAAS platforms through interactive live demos." />
        <meta property="og:url" content="https://ziontechgroup.com/demo" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
            Live Demos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience our cutting-edge AI and IT solutions through interactive live demonstrations. 
            No signup required - try our platforms right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
            >
              Schedule Custom Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              View Pricing
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Categories */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Demo</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our solutions through hands-on demonstrations tailored to your interests
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-slate-800 text-gray-300 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <demo.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {demo.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{demo.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {demo.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">What You'll See:</h4>
                  <ul className="space-y-2">
                    {demo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6 flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Duration: <span className="text-purple-400 font-semibold">{demo.duration}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    No signup required
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">
                  <PlayIcon className="w-5 h-5" />
                  Start Demo
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Try Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Demos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our solutions before you commit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <PlayIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Interactive Experience</h3>
              <p className="text-gray-300">
                Hands-on demos that let you explore features and functionality in real-time
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">No Signup Required</h3>
              <p className="text-gray-300">
                Start exploring immediately without creating accounts or providing personal information
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Real Technology</h3>
              <p className="text-gray-300">
                Experience actual working solutions, not mockups or simulations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <ArrowRightIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
              <p className="text-gray-300">
                Get started in minutes with pre-configured demo environments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Try our demos to see how our solutions can transform your business, then contact us for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              Contact Us
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-2"
            >
              View Pricing
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoPage;