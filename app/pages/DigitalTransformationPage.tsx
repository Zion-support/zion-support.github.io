import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  RefreshCw, 
  Users, 
  Target, 
  TrendingUp, 
  Lightbulb, 
  CheckCircle,
  ArrowRightIcon,
  RocketLaunchIcon,
  CogIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CloudIcon,
  DatabaseIcon,
  SmartphoneIcon,
  GlobeAltIcon,
  ZapIcon
} from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: RefreshCw,
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: ['Workflow Analysis', 'Process Mapping', 'Automation Implementation', 'Performance Monitoring']
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Guide your team through digital transformation with comprehensive change management strategies.',
      features: ['Training Programs', 'Communication Plans', 'Resistance Management', 'Success Metrics']
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Develop comprehensive digital strategies aligned with your business objectives and goals.',
      features: ['Digital Roadmap', 'Technology Assessment', 'ROI Analysis', 'Implementation Timeline']
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Monitor and analyze digital transformation progress with advanced analytics and reporting.',
      features: ['KPI Tracking', 'Real-time Dashboards', 'Predictive Analytics', 'Custom Reports']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Identify and implement innovative technologies to drive competitive advantage.',
      features: ['Technology Research', 'Innovation Workshops', 'Pilot Programs', 'Scalability Planning']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security Integration',
      description: 'Ensure security is built into every aspect of your digital transformation journey.',
      features: ['Security Assessment', 'Compliance Planning', 'Risk Management', 'Security Training']
    }
  ];

  const technologies = [
    { name: 'Cloud Computing', icon: CloudIcon, description: 'Scalable and flexible cloud solutions' },
    { name: 'AI & Machine Learning', icon: CogIcon, description: 'Intelligent automation and insights' },
    { name: 'Data Analytics', icon: ChartBarIcon, description: 'Data-driven decision making' },
    { name: 'Mobile Solutions', icon: SmartphoneIcon, description: 'Mobile-first digital experiences' },
    { name: 'IoT Integration', icon: GlobeAltIcon, description: 'Connected devices and sensors' },
    { name: 'Blockchain', icon: DatabaseIcon, description: 'Secure and transparent transactions' }
  ];

  const benefits = [
    'Increased Operational Efficiency',
    'Enhanced Customer Experience',
    'Improved Data Security',
    'Reduced Operational Costs',
    'Faster Time to Market',
    'Better Decision Making',
    'Increased Employee Productivity',
    'Competitive Advantage'
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation services. Process automation, change management, and strategic planning." />
        <meta name="keywords" content="digital transformation, process automation, change management, business strategy, technology consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
        
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Transformation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business for the digital age with our comprehensive digital transformation services. 
                We help you modernize processes, adopt new technologies, and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group">
                  <RocketLaunchIcon className="w-5 h-5 mr-2" />
                  Start Your Journey
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Learn More
                </button>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Our Digital Transformation Services</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We provide end-to-end digital transformation solutions tailored to your business needs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section className="py-16 px-4 bg-slate-800/50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Technologies We Work With</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We leverage cutting-edge technologies to drive your digital transformation success.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {technologies.map((tech, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                    <p className="text-gray-400 text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Benefits of Digital Transformation</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover how digital transformation can transform your business and drive growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                    <ZapIcon className="w-6 h-6 text-purple-400 mr-3 group-hover:text-purple-300" />
                    <span className="text-white group-hover:text-purple-300 transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our digital transformation services can help you achieve your business goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group">
                    <RocketLaunchIcon className="w-5 h-5 mr-2" />
                    Start Your Transformation
                  </button>
                  <button className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                    <Users className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DigitalTransformationPage;