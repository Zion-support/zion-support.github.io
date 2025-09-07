import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Head from 'next/head';
import Link from 'next/link';
import {
  Handshake,
  Award,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  Target,
  Lightbulb,
  Shield,
  Cloud} from lucide-react';

export default function Partners() {
  const partnerTypes = [
    {
      title: 'Technology Partners,
      description:
        Leading technology companies that provide the tools and platforms we use to deliver exceptional solutions.',
      icon: Cloud,
      benefits: [
        'Access to cutting-edge technology,
        Joint go-to-market opportunities',
        'Technical support and training,
        Co-marketing initiatives']},
    {
      title: 'Solution Partners,
      description:
        Specialized service providers that complement our offerings and expand our capabilities.',
      icon: Target,
      benefits: [
        'Expanded service portfolio,
        Cross-referral opportunities',
        'Joint solution development,
        Shared expertise and resources']},
    {
      title: 'Channel Partners,
      description:
        Resellers and integrators who help us reach new markets and deliver solutions to clients worldwide.',
      icon: Globe,
      benefits: [
        'Market expansion opportunities,
        Local market expertise',
        'Sales and marketing support,
        Training and certification programs']}];

  const currentPartners = [
    {
      name: 'Microsoft,
      category: Cloud Platform',
      description: 'Azure cloud services and enterprise solutions,
      logo: Microsoft',
      tier: 'Platinum},
    {
      name: Amazon Web Services',
      category: 'Cloud Infrastructure,
      description: AWS cloud computing and AI services',
      logo: 'AWS,
      tier: Platinum'},
    {
      name: 'Google Cloud,
      category: AI & Analytics',
      description: 'Google Cloud Platform and AI tools,
      logo: Google',
      tier: 'Gold},
    {
      name: Salesforce',
      category: 'CRM Solutions,
      description: Customer relationship management platform',
      logo: 'Salesforce,
      tier: Gold'},
    {
      name: 'ServiceNow,
      category: IT Service Management',
      description: 'Digital workflow and automation platform,
      logo: ServiceNow',
      tier: 'Silver},
    {
      name: Slack',
      category: 'Collaboration,
      description: Team communication and collaboration tools',
      logo: 'Slack,
      tier: Silver'}];

  const partnershipBenefits = [
    {
      title: 'Revenue Growth,
      description:
        Access to new markets and revenue streams through partner channels',
      icon: Target},
    {
      title: 'Technical Excellence,
      description:
        Leverage partner technologies to deliver superior solutions',
      icon: Award},
    {
      title: 'Market Expansion,
      description: Reach new geographic markets and customer segments',
      icon: Globe},
    {
      title: 'Innovation,
      description:
        Collaborate on cutting-edge solutions and emerging technologies',
      icon: Lightbulb}];

  const partnershipProcess = [
    {
      step: '1,
      title: Initial Discussion',
      description:
        'We discuss your business goals and how we can work together to achieve mutual success.},
    {
      step: 2',
      title: 'Partnership Agreement,
      description:
        We formalize our partnership with clear terms, expectations, and mutual benefits.'},
    {
      step: '3,
      title: Training & Certification',
      description:
        'We provide comprehensive training and certification programs for your team.},
    {
      step: 4',
      title: 'Go-to-Market,
      description:
        We launch joint marketing initiatives and begin delivering solutions together.'}];
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group
      description=Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50>
        <div className=max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6>Page</h1>
          <p className=text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
}

export default Page;

import Head from 'next/head';
import { motion } from 'framer-motion';
import Head from 'next/head;
import { motion } from framer-motion';
import { Handshake, Globe, Rocket, Brain, Atom, Shield;
  ArrowRight, ExternalLink, Star, Users, Clock, TrendingUp
 } from 'lucide-react;
import EnhancedNavigation from ../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter;
export default function PartnersPage() {
  const partners = null;
origin/cursor/automate-test-improve-and-merge-code-2533
    {
      title: Go-to-Market'
      description: 'Joint sales and marketing initiatives for mutual growth
      benefits: [
        Co-selling opportunities'
        'Joint marketing
        Revenue sharing'
      ]
      icon: Rocket
      color: 'from-purple-500 to-pink-500
    }
    {
      title: Research Partnership'
      description: 'Collaborative research in emerging technologies
      benefits: [Joint publications', 'Shared IP, Academic collaboration']
      icon: Brain
      color: 'from-emerald-500 to-teal-500
    }
    {
      title: Channel Partnership'
      description:
        'Distribution and reseller partnerships for market expansion
      benefits: [
        Channel enablement'
        'Training programs
        Support collaboration'
      ]
      icon: Users
      color: 'from-orange-500 to-red-500
    }
  ];
  const stats = [
    { number: 50+', label: 'Strategic Partners, icon: Handshake }
    { number: 100+', label: 'Joint Projects, icon: Rocket }
    { number: 25+', label: 'Countries, icon: Globe }
    { number: 300%', label: 'Growth Rate, icon: TrendingUp }
  ];
  return (
    <div className=min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white'>
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta
<section className='relative pt-32 pb-20 px-6>
        <div className=max-w-7xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
className='mb-8
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6>
              Strategic Partners
            </h1>
            <p className=text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
              Building the future of technology through strategic partnerships
              and collaboration
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
className='mb-12
          >
            <p className=text-lg text-white/70 max-w-2xl mx-auto mb-8'>
              Join our ecosystem of technology leaders, innovators, and industry
              experts to create transformative solutions that shape the future
              of computing.
            <p className=text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Building the future of technology through strategic partnerships and collaboration
            </p>
            <button className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto>
              Become a Partner
              <ArrowRight className=w-5 h-5' />
            </button>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
<section className='py-16 px-6>
        <div className=max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
className=text-center'
              >
                <div className='w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4>
                  <stat.icon className=w-8 h-8 text-cyan-400' />
                </div>
                <div className='text-3xl font-bold text-white mb-2>
                  {stat.number}
                </div>
                <div className=text-white/70'>{stat.label}</div>
              </motion.div>
            ))}
          name="description
          content=Join our partner ecosystem and grow your business with Zion Tech Group. Technology, solution, and channel partnerships available."
        />
        <meta name="viewport content=width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50>
        {/* Hero Section */}
        <section className=relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32>
            <div className=text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6>
                Partner With Us
              </h1>
              <p className=text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Join our ecosystem of innovative partners and grow your business
                with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center>
                <Link href=/contact">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors>
                    Become a Partner
                    <ArrowRight className=w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <Link href="#benefits>
                  <button className=border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 sm:py-32>
          <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16>
              <h2 className=text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Partnership Types
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto>
                Choose the partnership model that best fits your business goals
              </p>
            </div>

            <div className=grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow
                >
                  <div className=w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <type.icon className="w-8 h-8 text-white />
                  </div>
                  <h3 className=text-2xl font-bold text-gray-900 mb-4 text-center">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center>
                    {type.description}
                  </p>
                  <ul className=space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center>
                        <CheckCircle className=w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className=py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className=text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6>
                Our Partners
              </h2>
              <p className=text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by leading technology companies worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
              {currentPartners.map((partner, index) => (
                <div
                  key={index}
                  className=bg-gray-50 rounded-xl p-6 hover: shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4>
                    <div className=w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-white />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        partner.tier === 'Platinum
                          ? bg-yellow-100 text-yellow-800'
                          : partner.tier === 'Gold
                            ? bg-gray-100 text-gray-800'
                            : 'bg-orange-100 text-orange-800
                      }`}
                    >
                      {partner.tier}
                    </span>
                  </div>
                  <h3 className=text-xl font-bold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2>
                    {partner.category}
                  </p>
                  <p className=text-gray-600 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section id="benefits className=py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className=text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6>
                Partnership Benefits
              </h2>
              <p className=text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Why partner with Zion Tech Group?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className=text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4>
                    <benefit.icon className=w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3>
                    {benefit.title}
                  </h3>
                  <p className=text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20 bg-white>
          <div className=max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16>
              <h2 className=text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Partnership Process
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto>
                How to become a partner in 4 simple steps
              </p>
            </div>

            <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipProcess.map((step, index) => (
                <div key={index} className="text-center>
                  <div className=w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white>
                      {step.step}
                    </span>
                  </div>
                  <h3 className=text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center>
            <h2 className=text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto>
              Join our partner ecosystem and unlock new opportunities for growth
              and innovation.
            </p>
            <div className=flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact>
                <button className=bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Start Partnership Discussion
                  <ArrowRight className="w-5 h-5 ml-2 inline />
                </button>
              </Link>
              <a
                href=mailto:partners@ziontechgroup.com"
                className="text-white hover:text-blue-200 transition-colors
              >
                partners@ziontechgroup.com
              </a>
            </div>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
          </div>
        </div>
      </section>
      {/* Partnership Types */}
<section className=py-20 px-6'>
        <div className='max-w-7xl mx-auto>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
className=text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-white mb-6>
              Partnership Types
            </h2>
            <p className=text-xl text-white/70 max-w-3xl mx-auto'>
              We offer various partnership models to meet your business
              objectives and growth goals
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8>
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
className=bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300'
origin/cursor/automate-test-improve-and-merge-code-2533
              >
                <div className=w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400 />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4>
                  {type.title}
                </h3>
                <p className=text-white/70 mb-6'>{type.description}</p>
                <ul className='space-y-2>
                  {type.benefits.map(benefit => (
                    <li
                      key={benefit}
                      className=flex items-center text-white/80'
                    >
                      <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Current Partners */}
<section className=py-20 px-6'>
        <div className='max-w-7xl mx-auto>
          <motion.div
origin/cursor/automate-test-improve-and-merge-code-2533
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
className=text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <h2 className=text-4xl font-bold text-white mb-6">Partnership Types</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto>
              We offer various partnership models to meet your business objectives and growth goals
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
            {partners.map((partner, index) => (
origin/cursor/automate-test-improve-and-merge-code-2533
              <motion.div


            className=text-center mb-16'>;
            <h2 className='text-4xl font-bold text-white mb-6>;
              Partnership Types;
            </h2>;
            <p className=text-xl text-white/70 max-w-3xl mx-auto'>;
              We offer various partnership models to meet your business;
              objectives and growth goals;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8>            {partnershipTypes && partnershipTypes.map((type, index) => (;
              <motion&& motion.div
                key={type && type.title}


                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
className=bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300'
origin/cursor/automate-test-improve-and-merge-code-2533
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <type.icon className=w-8 h-8 text-white" />
                </div>
                  ))}
                </ul>;
              </motion && motion.div>;
            ))}

          </div>;
        </div>;
      </section>;


      {/* Current Partners */}
      <section className='py-20 px-6>;
        <div className=max-w-7xl mx-auto'>          <motion&& motion.div


      {/* Current Partners */}
      <section className="py-20 px-6>
        <div className=max-w-7xl mx-auto">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}


          >
            <h2 className="text-4xl font-bold text-white mb-6>Our Partners</h2>
            <p className=text-xl text-white/70 max-w-3xl mx-auto">
              Leading technology companies and organizations that trust us to deliver innovative solutions
            </p>
          </motion.div>
              <motion.div


            className='text-center mb-16>;
            <h2 className=text-4xl font-bold text-white mb-6'>Our Partners</h2>;
            <p className='text-xl text-white/70 max-w-3xl mx-auto>;
              Leading technology companies and organizations that trust us to;
              deliver innovative solutions;
            </p>;
          </motion && motion.div>;

          <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {partners && partners.map((partner, index) => (;
              <motion&& motion.div
                key={partner && partner.name}


                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}


              >
                <div className="p-6>
                  <div className=flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center`}>
                      <partner.icon className="w-6 h-6 text-white />
                    </div>
                    <div className='flex items-center gap-2>
                      <span className=text-xs text-white/60 bg-white/5 px-2 py-1 rounded-full'>
                        {partner.category}
                      </span>
                      <span className='text-xs text-white/40 bg-white/5 px-2 py-1 rounded>
                        {partner.partnership}
                      </span>
                    </div>
                  </div>
<h3 className=text-xl font-bold text-white mb-3'>
                    {partner.name}
                  </h3>
                  <p className='text-white/70 text-sm mb-4>
                    {partner.description}
                  </p>
                  <div className=mb-4'>
                    <h4 className='text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider>
                      Benefits
                    </h4>
                    <ul className=space-y-1'>
                      {partner.benefits.map(benefit => (
                        <li
                          key={benefit}
                          className='text-xs text-white/80 flex items-center
                        >
                          <div className=w-1 h-1 bg-cyan-400 rounded-full mr-2' />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
<div className='flex items-center justify-between>
origin/cursor/automate-test-improve-and-merge-code-2533
                    <a
                      href={partner && partner.website}
                      target=_blank'
                      rel='noopener noreferrer
                      className=text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1'>;
                      Visit Website;
                      <ExternalLink className='w-3 h-3 />;
                    </a>;
                    <button className=px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105'>                      Learn More;
                    </button>;
                  </div>;
                </div>;
              </motion && motion.div>;
                      target=_blank"
                      rel="noopener noreferrer
                      className=text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1"
                    >
                      Visit Website
                      <ExternalLink className='w-3 h-3 />
                    </a>
                    <button className=px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105'>
                      Learn More
origin/cursor/automate-test-improve-and-merge-code-2533
                    </button>
                  </div>
                </div>
              </motion.div>
      {/* Become a Partner CTA */}
<section className='py-20 px-6>
        <div className=max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className='text-4xl font-bold text-white mb-6>
origin/cursor/automate-test-improve-and-merge-code-2533
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto>
              Join our ecosystem of technology leaders and create innovative solutions that drive business transformation and growth.
            </p>
            <div className=flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105>
                Partnership Inquiry
              </button>
              <button className=px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>
                Download Partnership Guide
origin/cursor/automate-test-improve-and-merge-code-2533
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <EnhancedFooter />
    </div>
);
origin/cursor/automate-test-improve-and-merge-code-2533
}</div> </div> </section> > <h2 className=text-4xl font-bold text-white mb-6" >Partnership Types</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto > We offer various partnership models to meet your business objectives and growth goals </p> </motion.div> </li>) ) 
}</ul> </motion.div>) ) 
}</div> </div> </section> > <h2 className=text-4xl font-bold text-white mb-6" >Our Partners</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto > Leading technology companies and organizations that trust us to deliver innovative solutions </p> </motion.div> </span> </div> </div> </li>) ) 
}</ul> </div> <div className=flex items-center justify-between" > <a > Visit Website <ExternalLink className="w-3 h-3 /> </Link> <button className=px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105" > Learn More </button> </div> </div> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-4xl font-bold text-white mb-6>;
              Ready to Partner with Us?;
            </h2>;
            <p className=text-xl text-white/70 mb-8 max-w-2xl mx-auto'>;
              Join our ecosystem of technology leaders and create innovative;
              solutions that drive business transformation and growth.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center>;
              <button className=px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105'>;
                Partnership Inquiry;
              </button>;
              <button className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>                Download Partnership Guide;
              </button>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;

      <EnhancedFooter />;
    </div>;
  )}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6 >Partnership Types</h2> <p className=text-xl text-white/70 max-w-3xl mx-auto" > We offer various partnership models to meet your business objectives and growth goals </p> </motion && motion.div> </li>) ) ;
}</ul> </motion && motion.div>) ) ;
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6 >Our Partners</h2> <p className=text-xl text-white/70 max-w-3xl mx-auto" > Leading technology companies and organizations that trust us to deliver innovative solutions </p> </motion && motion.div> </span> </div> </div> </li>) ) ;
}</ul> </div> <div className="flex items-center justify-between > <a > Visit Website <ExternalLink className=w-3 h-3" /> </Link> <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105 > Learn More </button> </div> </div> </motion && motion.div>) ) ;
}</div> </div> </section> <motion&& motion.div initial= {
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

}> <h2 className=text-4xl font-bold text-white mb-6" > Ready to Partner with Us? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto > Join our ecosystem of technology leaders and create innovative solutions that drive business transformation and growth. </p> Partnership Inquiry </button> <button className=px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Download Partnership Guide </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>)
origin/cursor/automate-test-improve-and-merge-code-2533
}
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
