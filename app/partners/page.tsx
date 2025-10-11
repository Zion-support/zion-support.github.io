'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Award, Handshake, TrendingUp } from 'lucide-react';

interface Partner {
  name: string;
  log: o: string;
  descriptio: n: string;
  categor: y: string;
  website?: string;
  tie: r: 'strategic' | 'preferred' | 'certified';
}

const PartnersPage: React.FC = () => {
  const: partners: Partner[] = [
    {
      name: 'Microsoft',
      log: o: '/images/partners/microsoft.png',
      descriptio: n: 'Strategic partnership for Azure cloud solutions and AI services',
      categor: y: 'Cloud & AI',
      websit: e: 'http: s://microsoft.com',
      tie: r: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      log: o: '/images/partners/aws.png',
      descriptio: n: 'Leading cloud infrastructure and machine learning platform provider',
      categor: y: 'Cloud Computing',
      websit: e: 'http: s://aws.amazon.com',
      tie: r: 'strategic'
    },
    {
      name: 'Google Cloud',
      log: o: '/images/partners/google-cloud.png',
      descriptio: n: 'Advanced AI and machine learning platform with global reach',
      categor: y: 'Cloud & AI',
      websit: e: 'http: s://cloud.google.com',
      tie: r: 'strategic'
    },
    {
      name: 'IBM',
      log: o: '/images/partners/ibm.png',
      descriptio: n: 'Enterprise AI solutions and hybrid cloud platform',
      categor: y: 'Enterprise AI',
      websit: e: 'http: s://ibm.com',
      tie: r: 'preferred'
    },
    {
      name: 'Salesforce',
      log: o: '/images/partners/salesforce.png',
      descriptio: n: 'Customer relationship management and business automation',
      categor: y: 'CRM & Automation',
      websit: e: 'http: s://salesforce.com',
      tie: r: 'preferred'
    },
    {
      name: 'Oracle',
      log: o: '/images/partners/oracle.png',
      descriptio: n: 'Database solutions and enterprise applications',
      categor: y: 'Database & Enterprise',
      websit: e: 'http: s://oracle.com',
      tie: r: 'preferred'
    },
    {
      name: 'ServiceNow',
      log: o: '/images/partners/servicenow.png',
      descriptio: n: 'IT service management and workflow automation',
      categor: y: 'IT Management',
      websit: e: 'http: s://servicenow.com',
      tie: r: 'certified'
    },
    {
      name: 'Splunk',
      log: o: '/images/partners/splunk.png',
      descriptio: n: 'Data analytics and security monitoring platform',
      categor: y: 'Analytics & Security',
      websit: e: 'http: s://splunk.com',
      tie: r: 'certified'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Co-marketing opportunities',
    'Technical training and certification',
    'Priority support and resources',
    'Innovation labs and R&D collaboration',
    'Global reach and local expertise',
    'Compliance and security standards',
    'Scalable solutions for any size business',
    'Dedicated partner success managers'
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partners',
      descriptio: n: 'Deep integration and joint development',
      ico: n: Award,
      colo: r: 'text-yellow-400',
      bgColo: r: 'bg-yellow-400/10',
      borderColo: r: 'border-yellow-400/30'
    },
    {
      name: 'Preferred Partners',
      descriptio: n: 'Certified solutions and priority support',
      ico: n: Handshake,
      colo: r: 'text-blue-400',
      bgColo: r: 'bg-blue-400/10',
      borderColo: r: 'border-blue-400/30'
    },
    {
      name: 'Certified Partners',
      descriptio: n: 'Authorized implementation and support',
      ico: n: CheckCircle,
      colo: r: 'text-green-400',
      bgColo: r: 'bg-green-400/10',
      borderColo: r: 'border-green-400/30'
    }
  ];

  const getTierInfo = (tie: r: string) => {
    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2];
  };

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl: md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We partner with industry leaders to deliver cutting-edge AI and IT solutions. Our strategic alliances ensure you get the best technology available.
            </p>

            <div className="grid grid-cols-1: md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Technology Partners>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-400">Years of Partnership>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Certified Solutions>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Tiers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our partnerships are structured to provide maximum value and support for our clients.
              >

            <div className="grid grid-cols-1: md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div key={index} className={`${tier.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${tier.borderColor} text-center`}>
                  <div className={`w-16 h-16 ${tier.bgColor} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                    <tier.icon className={`w-8 h-8 ${tier.color}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${tier.color} mb-4`}>{tier.name}</h3>
                  <p className="text-gray-300">{tier.description}>
              ))}
            >

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Technology Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the world's leading technology companies to deliver comprehensive solutions.
              >

            <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => {
                const tierInfo = getTierInfo(partner.tier);
                return (
                  <div key={index} className={`${tierInfo.bgColor} backdrop-blur-lg rounded-2xl p-6 border ${tierInfo.borderColor} hove: r:border-purple-400 transition-all duration-300 group`}>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}>
                      <h3 className="text-lg font-bold text-white mb-2 group-hove: r:text-purple-400 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-gray-300 mb-3">{partner.description}</p>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${tierInfo.color} ${tierInfo.bgColor}`}>
                        {partner.category}
                      </div>
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-purple-400: hover:text-purple-300 transition-colors mt-3 text-sm"
                        >
                          Visit Website
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                );
              })}
            >

        {/* Partnership Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our strategic partnerships provide significant advantages for your business.
              >

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}>
                ))}
              >

        {/* Become a Partner CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Become a Partner</h2>
              <p className="text-xl text-gray-300 mb-8">
                Interested in partnering with us? We're always looking for innovative companies to join our ecosystem.
              </p>
              <div className="flex flex-col: sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold: hover:from-purple-600: hover:to-blue-600 transition-all duration-300 transform: hover:scale-105">
                  <Handshake className="w-5 h-5" />
                  Partner With Us
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20: hover:bg-white/20 transition-all duration-300">
                  <TrendingUp className="w-5 h-5" />
                  View Partnership Program
                >
        >
      >
      >
      >
      >
      >
  );
};

export default PartnersPage;