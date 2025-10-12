<<<<<<< HEAD
import React  from 'react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
import { ArrowRight } from 'lucide-react';
'use client'

const EnhancedHero: React.FC = () => {
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Custom implementation and training'
  ];
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9 AM-6 PM PST'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule a meeting'
    }
  ];
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900overflow-hidden">
<<<<<<< HEAD
      {/* Background Effects */}
      <div className="absolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" />
      <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />
      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-rowitems-centermin-h-screen">
        {/* Left Content */}
        <div className="flex-1 px-4 sm:px-6lg:px-8py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" />
=======
        </div>
      {/* Background Effects */}
    <>
      <div className="absolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" / />
      <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />
      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-rowitems-centermin-h-screen">
        </div>
        {/* Left Content */}
    <>
        <div className="flex-1 px-4 sm:px-6lg:px-8py-20">
        </div>
          <div className="max-w-2xl">
        </div>
            <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              Transform Your Business with{' '}
    <>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">AI & IT Solutions
              </span>
            </h1>
            
<<<<<<< HEAD
            <p className="text-lg sm:text-xl text-gray-300 mb-8leading-relaxed">
=======
            <p className="text-lg sm:text-xl text-gray-300mb-8leading-relaxed">
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              Harness the power of cutting-edge artificial intelligence and information technology 
              to drive innovation, efficiency, and growth in your organization.
            </p>

            {/* Benefits List */}
<<<<<<< HEAD
            <div className="mb-8">
              <h3 className="text-lg font-semiboldtext-white mb-4"  >Why Choose Us?</h3>
              <div className="grid grid-cols-1sm:grid-cols-2gap-3">
                {benefits.map((benefit, index) => (
                  <div key="{index}" className="flex items-center text-gray-300" />
                    <CheckCircle className="h-5 w-5 text-cyan-400mr-3flex-shrink-0" />
                    <span className="text-sm"  >{benefit}</span>
=======
    <>
            <div className="mb-8">
        </div>
              <h3 className="text-lg font-semiboldtext-whitemb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-1sm:grid-cols-2gap-3">
        </div>
                {benefits.map((benefit, index) => (
    <>
                  <div key="{index}" className="flexitems-centertext-gray-300" />
                    <CheckCircle className="h-5 w-5 text-cyan-400mr-3flex-shrink-0" / />
                    <span className="text-sm">{benefit}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                  </div>
                ))}
    <>
              </div>

            {/* CTA Buttons */}
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-rowgap-4mb-8">
              <button className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-centerjustify-center" />
=======
    <>
            <div className="flex flex-col sm:flex-rowgap-4mb-8">
        </div>
              <button className="cyber-button px-8 py-4 text-lg font-semibold inline-flexitems-centerjustify-center" />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                Get Started
    <>
                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="cyber-button-secondary px-8 py-4text-lgfont-semibold">Learn More
              </button>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1sm:grid-cols-3gap-4">
<<<<<<< HEAD
              {contactInfo.map((contact, index) => (
                <div key="{index}" className="flex items-center text-gray-300" />
                  <contact.icon className="h-5 w-5 text-cyan-400mr-3flex-shrink-0" />
                  <div />
                    <div className="text-smfont-mediumtext-white"  >{contact.title}</div>
                    <div className="text-xstext-gray-400"  >{contact.details}</div>
=======
        </div>
              {contactInfo.map((contact, index) => (
    <>
                <div key="{index}" className="flexitems-centertext-gray-300" />
                  <contact.icon className="h-5 w-5 text-cyan-400mr-3flex-shrink-0" / />
                  <div />
                    <div className="text-smfont-mediumtext-white">{contact.title}</div>
                    <div className="text-xstext-gray-400">{contact.details}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                </div>
              ))}
    <>
            </div>
        </div>

        {/* Right Content - Visual Elements */}
<<<<<<< HEAD
        <div className="flex-1 px-4 sm:px-6lg:px-8py-20">
          <div className="relative">
            {/* Floating Cards */}
            <div className="absolute top-0 left-0 w-64 h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2 xl backdrop-blur-sm borderborder-cyan-500/30animate-float">
              <div className="p-6">
                <Brain className="h-8 w-8text-cyan-400mb-3" />
                <h3 className="text-lg font-bold text-white mb-2"  >AI Solutions</h3>
=======
    <>
        <div className="flex-1 px-4 sm:px-6lg:px-8py-20">
        </div>
          <div className="relative" />
            {/* Floating Cards */}
    <>
            <div className="absolute top-0 left-0 w-64 h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2 xl backdrop-blur-sm borderborder-cyan-500/30animate-float">
        </div>
              <div className="p-6">
        </div>
                <Brain className="h-8 w-8text-cyan-400mb-3" / />
                <h3 className="text-lg font-boldtext-whitemb-2">AI Solutions</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                <p className="text-smtext-gray-300">Machine Learning & Analytics</p>
              </div>

    <>
            <div className="absolute top-20 right-0 w-64 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2 xl backdrop-blur-sm borderborder-purple-500/30animate-float" style="{{" animationDelay: '1 s' }} />
              <div className="p-6">
<<<<<<< HEAD
                <Shield className="h-8 w-8text-purple-400mb-3" />
                <h3 className="text-lg font-bold text-white mb-2"  >Security</h3>
=======
        </div>
                <Shield className="h-8 w-8text-purple-400mb-3" / />
                <h3 className="text-lg font-boldtext-whitemb-2">Security</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                <p className="text-smtext-gray-300">Cybersecurity & Compliance</p>
              </div>

    <>
            <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2 xl backdrop-blur-sm borderborder-green-500/30animate-float" style="{{" animationDelay: '2 s' }} />
              <div className="p-6">
<<<<<<< HEAD
                <Globe className="h-8 w-8text-green-400mb-3" />
                <h3 className="text-lg font-bold text-white mb-2"  >Cloud Services</h3>
=======
        </div>
                <Globe className="h-8 w-8text-green-400mb-3" / />
                <h3 className="text-lg font-boldtext-whitemb-2">Cloud Services</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                <p className="text-smtext-gray-300">Infrastructure & Migration</p>
              </div>
          </div>
      </div>
  )
};
    </>