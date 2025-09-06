import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  Brain,
  Cpu,
  Database,
  Zap,
  Shield,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  TrendingUp,;
<<<<<<< HEAD
=======
import { 
  Brain, Cpu, Database, Zap, Shield, Rocket, 
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function AIMLServicesPage() {
  const services = [
    {
      title: 'Custom AI Solutions',
      description:
        'Tailored AI applications built for your specific business needs',
      features: [
        'Machine Learning Models',
        'Neural Networks',
        'Predictive Analytics',
        'Natural Language Processing',
      ],
      price: 'From $5,000',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AI-Powered Automation',
      description: 'Intelligent automation systems that learn and adapt',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Smart Decision Making',
        'Continuous Learning',
      ],
      price: 'From $3,500',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Data Intelligence Platform',
      description: 'Advanced analytics and insights powered by AI',
      features: [
        'Big Data Processing',
        'Real-time Analytics',
        'Business Intelligence',
        'Predictive Insights',
      ],
      price: 'From $7,500',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'AI Consulting & Strategy',
      description:
        'Strategic guidance for AI implementation and transformation',
      features: [
        'AI Roadmap Planning',
        'Technology Assessment',
        'Implementation Strategy',
        'ROI Optimization',
      ],
      price: 'From $2,500',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
    },
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.9%', label: 'Accuracy Rate', icon: CheckCircle },
    { number: '24/7', label: 'AI Monitoring', icon: Clock },
    { number: '2500%', label: 'Average ROI', icon: TrendingUp },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white'>
      <Head>
        <title>AI & Machine Learning Services - Zion Tech Group</title>
        <meta
          name='description'
          content='Cutting-edge AI and machine learning solutions from Zion Tech Group. Custom AI applications, automation, and intelligent systems that drive business growth.'
        />
        <meta
          property='og:title'
          content='AI & Machine Learning Services - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Cutting-edge AI and machine learning solutions that drive business growth and innovation.'
        />
<<<<<<< HEAD
        <link rel='canonical' href='https://ziontechgroup.com/services/ai-ml' />      </Head>
=======
        <link rel='canonical' href='https://ziontechgroup.com/services/ai-ml' />
import { 
  Brain, Cpu, Database, Zap, Shield, Rocket, 
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';
export default function AIMLServicesPage() {
  const services = [
    {
      title: "Custom AI Solutions",
      description: "Tailored AI applications built for your specific business needs",
      features: ["Machine Learning Models", "Neural Networks", "Predictive Analytics", "Natural Language Processing"];
      price: "From $5,000";
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    };
    {
      title: "AI-Powered Automation",
      description: "Intelligent automation systems that learn and adapt",
      features: ["Process Automation", "Workflow Optimization", "Smart Decision Making", "Continuous Learning"];
      price: "From $3,500";
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    };
    {
      title: "Data Intelligence Platform",
      description: "Advanced analytics and insights powered by AI",
      features: ["Big Data Processing", "Real-time Analytics", "Business Intelligence", "Predictive Insights"];
      price: "From $7,500";
      icon: Database,
      color: "from-emerald-500 to-teal-500"
    };
    {
      title: "AI Consulting & Strategy",
      description: "Strategic guidance for AI implementation and transformation",
      features: ["AI Roadmap Planning", "Technology Assessment", "Implementation Strategy", "ROI Optimization"];
      price: "From $2,500";
      icon: Rocket,
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed", icon: Brain },
    { number: "99.9%", label: "Accuracy Rate", icon: CheckCircle },
    { number: "24/7", label: "AI Monitoring", icon: Clock },
    { number: "2500%", label: "Average ROI", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>AI & Machine Learning Services - Zion Tech Group</title>
ursor/integrate-build-improve-and-re-verify-b76c
        <meta name="description" content="Cutting-edge AI and machine learning solutions from Zion Tech Group. Custom AI applications, automation, and intelligent systems that drive business growth." />
        <meta property="og:title" content="AI & Machine Learning Services - Zion Tech Group" />
        <meta property="og:description" content="Cutting-edge AI and machine learning solutions that drive business growth and innovation." />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-ml" />
ursor/integrate-build-improve-and-re-verify-b76c
      </Head>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className='relative pt-32 pb-20 px-6'>
<<<<<<< HEAD
        <div className='max-w-7xl mx-auto text-center'>          <motion.div
=======
        <div className='max-w-7xl mx-auto text-center'>
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
ursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8'
<<<<<<< HEAD
=======
            className="mb-8"
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6'>
              AI & Machine Learning
            </h1>
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
              Revolutionary AI solutions that adapt, learn, and evolve with your
<<<<<<< HEAD
              business            </p>
=======
              business
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
              AI & Machine Learning
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI solutions that adapt, learn, and evolve with your business
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI solutions that adapt, learn, and evolve with your business
ursor/integrate-build-improve-and-re-verify-b76c
            </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-12'
<<<<<<< HEAD
=======
            className="mb-12"
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>
              From custom neural networks to intelligent automation systems, we
              deliver AI solutions that provide measurable business outcomes and
              competitive advantages.
            </p>
            <button className='px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto'>
              Get AI Consultation
<<<<<<< HEAD
              <ArrowRight className='w-5 h-5' />            </button>
=======
              <ArrowRight className='w-5 h-5' />
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From custom neural networks to intelligent automation systems, we deliver AI solutions 
              that provide measurable business outcomes and competitive advantages.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Get AI Consultation
              <ArrowRight className="w-5 h-5" />
              <ArrowRight className="w-5 h-5" />
ursor/integrate-build-improve-and-re-verify-b76c
            </button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 px-6'>
        <div className='max-w-7xl mx-auto'>
<<<<<<< HEAD
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>            {stats.map((stat, index) => (
=======
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
ursor/integrate-build-improve-and-re-verify-b76c
            {stats.map((stat, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center'
<<<<<<< HEAD
=======
                className="text-center"
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <div className='w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                  <stat.icon className='w-8 h-8 text-purple-400' />
                </div>
                <div className='text-3xl font-bold text-white mb-2'>
                  {stat.number}
                </div>
<<<<<<< HEAD
                <div className='text-white/70'>{stat.label}</div>              </motion.div>
=======
                <div className='text-white/70'>{stat.label}</div>
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
ursor/integrate-build-improve-and-re-verify-b76c
              </motion.div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20 px-6'>
<<<<<<< HEAD
        <div className='max-w-7xl mx-auto'>          <motion.div
=======
        <div className='max-w-7xl mx-auto'>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
ursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
<<<<<<< HEAD
=======
            className="text-center mb-16"
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Our AI Services
            </h2>
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>
              Comprehensive AI solutions designed to transform your business
              operations and drive innovation
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {services.map((service, index) => (
=======
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our AI Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and drive innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
ursor/integrate-build-improve-and-re-verify-b76c
            {services.map((service, index) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300'
<<<<<<< HEAD
=======
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <service.icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  {service.title}
                </h3>
                <p className='text-white/70 mb-6'>{service.description}</p>
                <ul className='space-y-3 mb-6'>
                  {service.features.map(feature => (
                    <li
                      key={feature}
                      className='flex items-center text-white/80'
                    >
<<<<<<< HEAD
                      <CheckCircle className='w-5 h-5 text-purple-400 mr-3 flex-shrink-0' />                      {feature}
=======
                      <CheckCircle className='w-5 h-5 text-purple-400 mr-3 flex-shrink-0' />
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
ursor/integrate-build-improve-and-re-verify-b76c
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
ursor/integrate-build-improve-and-re-verify-b76c
                      {feature}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </li>
                  ))}
                </ul>
                <div className='flex items-center justify-between'>
                  <span className='text-2xl font-bold text-purple-400'>
                    {service.price}
                  </span>
<<<<<<< HEAD
                  <button className='px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105'>                    Get Started
=======
                  <button className='px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105'>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
ursor/integrate-build-improve-and-re-verify-b76c
                    Get Started
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-6'>
<<<<<<< HEAD
        <div className='max-w-4xl mx-auto text-center'>          <motion.div
=======
        <div className='max-w-4xl mx-auto text-center'>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
ursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
<<<<<<< HEAD
=======
            <h2 className="text-4xl font-bold text-white mb-6">
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              Ready to Transform Your Business with AI?
            </h2>
            <p className='text-xl text-white/70 mb-8 max-w-2xl mx-auto'>
              Let's discuss how our AI solutions can drive innovation,
              efficiency, and growth for your organization.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105'>
                Schedule Consultation
              </button>
<<<<<<< HEAD
              <button className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>                View Case Studies
=======
              <button className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
ursor/integrate-build-improve-and-re-verify-b76c
                View Case Studies
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );

}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Our AI Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive AI solutions designed to transform your business operations and drive innovation </p> </motion.div> Get Started </button> </div> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {
  {
  opacity: 0, y: 30 

}whileInView= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}viewport= {
  {
  once: true 

<<<<<<< HEAD
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Transform Your Business with AI? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization. </p> Schedule Consultation </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > View Case Studies </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>) 
=======
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Transform Your Business with AI? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization. </p> Schedule Consultation </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > View Case Studies </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>) 
  )
}
  )
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
