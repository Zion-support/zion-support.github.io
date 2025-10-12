import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Cloud, Brain, Users, BarChart, CheckCircle, Target, TrendingUp, Shield, Globe, Cpu, Smartphone, Database, Settings } from 'lucide-react'

export default function DigitalTransformationPage() {
  const transformationStages = [
    {
      step: '01',
      title: 'Assessment & Strategy',
      description: 'Comprehensive analysis of your current digital landscape and development of a tailored transformation roadmap.',
      features: ['Current state analysis', 'Gap identification', 'Strategic roadmap', 'ROI projections']
    },
    {
      step: '02',
      title: 'Technology Integration',
      description: 'Seamless integration of modern technologies including AI, cloud computing, and automation tools.',
      features: ['Cloud migration', 'AI implementation', 'API integration', 'Legacy modernization']
    },
    {
      step: '03',
      title: 'Process Optimization',
      description: 'Streamline and automate business processes to improve efficiency and reduce operational costs.',
      features: ['Workflow automation', 'Process redesign', 'Change management', 'Training programs']
    },
    {
      step: '04',
      title: 'Data & Analytics',
      description: 'Implement advanced analytics and business intelligence solutions for data-driven decision making.',
      features: ['Data integration', 'Real-time dashboards', 'Predictive analytics', 'KPI tracking']
    },
    {
      step: '05',
      title: 'Customer Experience',
      description: 'Enhance customer interactions through digital channels and personalized experiences.',
      features: ['Digital channels', 'Personalization', 'Customer journey mapping', 'Feedback systems']
    },
    {
      step: '06',
      title: 'Continuous Innovation',
      description: 'Ongoing support and optimization to ensure your digital transformation evolves with your business.',
      features: ['Performance monitoring', 'Regular updates', 'Innovation labs', 'Future planning']
    }
  ];

  const technologies = [
    { icon: Cloud, title: 'Cloud Computing', description: 'Scalable and secure cloud infrastructure' },
    { icon: Brain, title: 'Artificial Intelligence', description: 'AI-powered automation and insights' },
    { icon: Database, title: 'Big Data Analytics', description: 'Advanced data processing and analysis' },
    { icon: Smartphone, title: 'Mobile Solutions', description: 'Cross-platform mobile applications' },
    { icon: Globe, title: 'IoT Integration', description: 'Connected devices and smart systems' },
    { icon: Shield, title: 'Cybersecurity', description: 'Advanced security and compliance' }
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Increased Efficiency', description: 'Streamline operations and reduce manual work' },
    { icon: Target, title: 'Better Decision Making', description: 'Data-driven insights for strategic planning' },
    { icon: Users, title: 'Enhanced Customer Experience', description: 'Improved customer satisfaction and engagement' },
    { icon: Zap, title: 'Faster Innovation', description: 'Accelerate product development and market entry' },
    { icon: BarChart, title: 'Cost Reduction', description: 'Optimize resources and reduce operational costs' },
    { icon: Globe, title: 'Market Expansion', description: 'Reach new markets and customer segments' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Digital Transformation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation services. Modernize operations, enhance customer experience, and drive growth with cutting-edge technology." />
        <meta name="keywords" content="digital transformation, business modernization, cloud migration, AI implementation, process automation, customer experience" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Transformation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business for the digital age with our comprehensive suite of modernization services, 
              cutting-edge technology solutions, and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Transformation Process */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Transformation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful digital transformation
            </p>
          </div>
          
          <div className="space-y-12">
            {transformationStages.map((stage, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4">
                      {stage.step}
                    </div>
                    <h3 className="text-3xl font-bold text-white">{stage.title}</h3>
                  </div>
                  <p className="text-lg text-gray-300 mb-6">{stage.description}</p>
                  <ul className="space-y-2">
                    {stage.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
                    <div className="text-6xl text-cyan-400">
                      {index === 0 && <Target />}
                      {index === 1 && <Settings />}
                      {index === 2 && <Zap />}
                      {index === 3 && <BarChart />}
                      {index === 4 && <Users />}
                      {index === 5 && <TrendingUp />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies to power your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tech.title}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transformation Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the full potential of your business with digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our digital transformation experts guide you through every step of your modernization journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}