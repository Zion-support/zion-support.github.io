import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Brain, 
  Settings, 
  BarChart3, 
  Users, 
  Shield,
  Clock,
  Target,
  TrendingUp,
  Globe,
  Mail,
  Smartphone
} from 'lucide-react';
import FuturisticCard from '../../components/FuturisticCard';
import FuturisticButton from '../../components/FuturisticButton';
import ResponsiveContainer from '../../components/ResponsiveContainer';

const AIAutomationPlatform = () => {
  const features = [
    {
      title: "Workflow Automation",
      description: "Automate complex business processes with intelligent workflow management",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Process Intelligence",
      description: "AI-powered process analysis and optimization recommendations",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Integration Hub",
      description: "Connect and automate across 100+ business applications",
      icon: <Settings className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time insights into automation performance and ROI",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Reduce manual work by up to 80%",
    "Improve process efficiency by 60%",
    "Eliminate human errors in repetitive tasks",
    "Scale operations without proportional cost increase",
    "24/7 automated process execution",
    "Real-time monitoring and alerts"
  ];

  const useCases = [
    {
      title: "Customer Onboarding",
      description: "Automate the entire customer onboarding process from registration to first purchase",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Invoice Processing",
      description: "Automatically process invoices, validate data, and update accounting systems",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Lead Qualification",
      description: "AI-powered lead scoring and automated follow-up sequences",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Data Migration",
      description: "Seamlessly migrate data between systems with zero downtime",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Platform - Zion Tech Group | Workflow Automation Solutions</title>
        <meta
          name="description"
          content="Transform your business with our AI-powered automation platform. Automate workflows, processes, and tasks to increase efficiency and reduce costs."
        />
        <meta
          name="keywords"
          content="AI automation platform, workflow automation, business process automation, AI-powered automation, process optimization"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <ResponsiveContainer className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Automation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Automation Platform
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business operations with intelligent automation. Our AI-powered platform 
              automates complex workflows, reduces manual work, and drives unprecedented efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Zap className="w-5 h-5" />}
              >
                Start Automating Today
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Settings className="w-5 h-5" />}
              >
                Watch Demo
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Automation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to automate your business processes and workflows with AI intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  gradient={feature.color}
                  className="group hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <ResponsiveContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Our AI Automation Platform?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Our platform combines cutting-edge AI with intuitive design to deliver 
                  automation solutions that actually work for your business.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Key Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                    <div className="text-gray-300">Reduction in Manual Work</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                    <div className="text-gray-300">Efficiency Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                    <div className="text-gray-300">Automated Execution</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                    <div className="text-gray-300">Uptime Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Common Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses are using our AI automation platform to transform their operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <ResponsiveContainer>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of businesses already using our AI automation platform 
                to streamline operations and drive growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<Zap className="w-5 h-5" />}
                >
                  Get Started Today
                </FuturisticButton>
                <FuturisticButton
                  href="/demo"
                  variant="outline"
                  size="lg"
                  icon={<Settings className="w-5 h-5" />}
                >
                  Schedule Demo
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default AIAutomationPlatform;