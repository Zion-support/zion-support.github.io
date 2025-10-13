<<<<<<< HEAD
=======
import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, Glasses, Brain, Shield, Zap, Globe, Star, Users, Award, CheckCircle, TrendingUp, Clock, Eye, Image, Target, Scan } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const ARVRDevelopment = () => {
  const features = [
    {
      title: "AR Application Development",
      description: "Create immersive augmented reality experiences for mobile and web",
      icon: <Glasses className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "VR Experience Design",
      description: "Build virtual reality applications for various platforms",
      icon: <Eye className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "3D Modeling & Animation",
      description: "Create stunning 3D assets and animations for AR/VR",
      icon: <Image className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cross-Platform Support",
      description: "Deploy across multiple AR/VR platforms and devices",
      icon: <Globe className="w-6 h-6" />,
=======
import { ArrowRight, Eye, Zap, Shield, Brain, Users, Clock, CheckCircle, Star, Sparkles, Monitor, Mic, Mail, Smartphone, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ARVRDevelopmentPage = () => {
  const features = [
    {
      title: "Immersive Experiences",
      description: "Create stunning AR/VR applications that engage users with cutting-edge technology",
      icon: <Eye className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere with our unified development platform",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Integration",
      description: "Enhance experiences with AI-powered features and intelligent interactions",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Enterprise Solutions",
      description: "Scalable AR/VR solutions for training, collaboration, and business applications",
      icon: <Shield className="w-8 h-8" />,
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
      color: "from-orange-500 to-red-500"
    }
  ];

<<<<<<< HEAD
  const benefits = [
    "Immersive user experiences",
    "Cross-platform compatibility",
    "Advanced 3D graphics",
    "Real-time rendering",
    "Interactive interfaces",
    "Scalable solutions"
=======
  const services = [
    "Custom AR/VR Application Development",
    "3D Modeling and Animation",
    "Interactive User Interface Design",
    "Cross-Platform Compatibility",
    "Performance Optimization",
    "Quality Assurance Testing"
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
<<<<<<< HEAD
        title="AR/VR Development - Immersive Technology Solutions | Zion Tech Group"
        description="Create immersive AR/VR experiences with our expert development team. Augmented reality, virtual reality, and 3D applications for modern businesses."
        keywords="AR development, VR development, augmented reality, virtual reality, 3D applications, immersive technology"
=======
        title="AR/VR Development Services - Zion Tech Group | Immersive Technology Solutions"
        description="Transform your business with cutting-edge AR/VR development services. Create immersive experiences, training simulations, and interactive applications with our expert team."
        keywords="AR development, VR development, augmented reality, virtual reality, immersive technology, 3D development, AR/VR solutions"
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
        canonical="https://ziontechgroup.com/ar-vr-development"
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
            <Glasses className="w-4 h-4 text-cyan-400 mr-2" />
=======
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            <span className="text-cyan-400 text-sm font-medium">Immersive Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AR/VR Development
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
<<<<<<< HEAD
            Create immersive AR/VR experiences that engage and captivate your audience. 
            From concept to deployment, we build cutting-edge augmented and virtual reality solutions.
=======
            Transform your business with cutting-edge AR/VR development services. Create immersive experiences, 
            training simulations, and interactive applications that engage and delight your users.
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
              Start Your Project
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
<<<<<<< HEAD
              icon={<Glasses className="w-5 h-5" />}
=======
              icon={<Monitor className="w-5 h-5" />}
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            >
              View Portfolio
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
              Immersive Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to create stunning AR/VR experiences.
=======
              Our AR/VR Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From concept to deployment, we create immersive experiences that drive engagement and business results.
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
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AR/VR Development?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of immersive technology with our expert development team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
=======
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Go Immersive?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading companies using our AR/VR development services to create engaging experiences.
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
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AR/VR development services tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Create Immersive Experiences?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your AR/VR project and bring your vision to life with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View Portfolio
            </FuturisticButton>
          </div>
        </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default ARVRDevelopment;
=======
export default ARVRDevelopmentPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-031e
