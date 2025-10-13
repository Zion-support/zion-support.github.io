<<<<<<< HEAD
=======
import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, Server, Brain, Shield, Zap, Globe, Star, Users, Award, CheckCircle, TrendingUp, Clock, Database, HardDrive, Target, Settings } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const DataCenterServices = () => {
  const features = [
    {
      title: "Infrastructure Management",
      description: "Complete data center infrastructure setup and management",
      icon: <Server className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure and hybrid solutions",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring and maintenance of your systems",
      icon: <Clock className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Disaster Recovery",
      description: "Comprehensive backup and disaster recovery solutions",
      icon: <Shield className="w-6 h-6" />,
=======
import { ArrowRight, Brain, Zap, Shield, BarChart3, Users, Clock, CheckCircle, Star, Sparkles, Monitor, Mic, Mail, Smartphone, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const DatacenterservicesPage = () => {
  const features = [
    {
      title: "AI-Powered Intelligence",
      description: "Advanced artificial intelligence algorithms that learn and adapt to your business needs",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Processing",
      description: "Process data and make decisions in real-time with lightning-fast performance",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive analytics and reporting to track performance and optimize results",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with role-based access control and audit trails",
      icon: <Shield className="w-8 h-8" />,
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
<<<<<<< HEAD
    "99.9% uptime guarantee",
    "24/7 expert support",
    "Scalable infrastructure",
    "Advanced security",
    "Cost optimization",
    "Compliance assurance"
=======
    "Increase efficiency by up to 80%",
    "Reduce operational costs significantly",
    "Improve accuracy and reliability",
    "Scale with your business growth",
    "Integrate with existing systems",
    "24/7 monitoring and support"
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
<<<<<<< HEAD
        title="Data Center Services - Enterprise Infrastructure Solutions | Zion Tech Group"
        description="Reliable data center services for your business. Infrastructure management, cloud migration, monitoring, and disaster recovery solutions."
        keywords="data center services, infrastructure management, cloud migration, server management, disaster recovery, enterprise hosting"
=======
        title="Data Center Services - Zion Tech Group | AI-Powered Solutions"
        description="Transform your business with our data center services solution. AI-powered features and enterprise-grade security for maximum efficiency and growth."
        keywords="data, center, services, AI solution, business automation, enterprise software"
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
        canonical="https://ziontechgroup.com/data-center-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
<<<<<<< HEAD
            <Server className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Enterprise Infrastructure</span>
=======
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Solution</span>
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Data Center Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
<<<<<<< HEAD
            Reliable data center services for your business. 
            Infrastructure management, cloud migration, and 24/7 monitoring for maximum uptime.
=======
            Transform your business with our data center services solution. AI-powered features and enterprise-grade security for maximum efficiency and growth.
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
<<<<<<< HEAD
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
=======
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Started
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
<<<<<<< HEAD
              icon={<Server className="w-5 h-5" />}
            >
              View Solutions
=======
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
<<<<<<< HEAD
              Comprehensive Data Center Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to run your business infrastructure reliably and efficiently.
=======
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to transform your business with AI-powered solutions.
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
<<<<<<< HEAD
              <FuturisticCard
=======
              <div
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
<<<<<<< HEAD
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
=======
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
<<<<<<< HEAD
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Data Center Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience reliable infrastructure that keeps your business running smoothly.
=======
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Solution?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses already using our platform to drive growth and innovation.
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
<<<<<<< HEAD
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading companies using our data center services to power their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Project
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<Target className="w-5 h-5" />}
              >
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
=======
              <div
                key={index}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Contact us today to learn more about how our solution can transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Contact Us
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default DataCenterServices;
=======
export default DatacenterservicesPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-031e
