import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PlayIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CloudIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const DemoPage: React.FC = () => {
  const demos = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Analytics',
      description: 'See how our AI analyzes your data in real-time to provide actionable insights and predictions.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Advanced Security',
      description: 'Experience our enterprise-grade security features that protect your data and infrastructure.',
      features: [
        'Threat detection',
        'Data encryption',
        'Access control',
        'Compliance monitoring'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Business Intelligence',
      description: 'Explore our comprehensive BI dashboard that transforms data into strategic insights.',
      features: [
        'Interactive dashboards',
        'Data visualization',
        'Custom reports',
        'Performance metrics'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Discover how our cloud solutions provide scalability, reliability, and cost efficiency.',
      features: [
        'Auto-scaling',
        'High availability',
        'Cost optimization',
        'Global deployment'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    'Interactive Demos',
    'Real-time Experience',
    'Expert Guidance',
    'Custom Solutions',
    'No Commitment Required',
    'Immediate Results'
  ];

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI solutions, cloud infrastructure, and digital transformation services through interactive demos." />
        <meta name="keywords" content="demo, AI demo, cloud demo, technology demonstration, interactive demo" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Interactive Demos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Experience Our Solutions Firsthand
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Explore our cutting-edge AI solutions, cloud infrastructure, and digital transformation 
              services through interactive demonstrations designed to showcase their real-world impact.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Schedule a Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Interactive demonstrations of our most popular solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {demos.map((demo, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${demo.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                    <demo.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{demo.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {demo.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center justify-center gap-2">
                    <PlayIcon className="w-5 h-5" />
                    Start Demo
                  </button>
                  <Link
                    to="/contact"
                    className="flex-1 border border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Try Our Demos?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our solutions before making any commitments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <StarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                <p className="text-gray-300">
                  Experience our solutions firsthand with no commitment required.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to See More?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a personalized demo with our experts to explore solutions tailored to your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Schedule Demo
            </Link>
            <Link
              to="/solutions"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const page = React.lazy(() => import('./page'));
export default page;