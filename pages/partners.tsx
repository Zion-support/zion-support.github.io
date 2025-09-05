<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  Handshake, Globe, Rocket, Brain, Atom, Shield,
  ArrowRight, ExternalLink, Star, Users, Clock, TrendingUp
} from 'lucide-react',
import EnhancedNavigation from '../components/EnhancedNavigation',
import EnhancedFooter from '../components/EnhancedFooter',
export default function PartnersPage() {
  const partners = [
    {
      name: &quot;Microsoft Azure&quot;,
      category: &quot;Cloud Infrastructure&quot;,
      description: &quot;Strategic partnership for enterprise cloud solutions and AI services&quot;,
      logo: &quot;/api/placeholder/200/100&quot;,
      website: &quot;https://azure.microsoft.com&quot;,
      partnership: &quot;Technology Alliance&quot;,
      benefits: [&quot;Joint go-to-market&quot;, &quot;Technical integration&quot;, &quot;Co-selling opportunities&quot;],
      icon: Globe,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      name: &quot;NVIDIA&quot;,
      category: &quot;AI & Computing&quot;,
      description: &quot;Collaboration on GPU-accelerated AI and quantum computing solutions&quot;,
      logo: &quot;/api/placeholder/200/100&quot;,
      website: &quot;https://nvidia.com&quot;,
      partnership: &quot;Technology Partner&quot;,
      benefits: [&quot;Hardware optimization&quot;, &quot;Joint R&D&quot;, &quot;Market expansion&quot;],
      icon: Brain,
      color: &quot;from-green-500 to-emerald-500&quot;
    },
    {
      name: &quot;IBM Quantum&quot;,
      category: &quot;Quantum Computing&quot;,
      description: &quot;Partnership for quantum computing research and enterprise solutions&quot;,
      logo: &quot;/api/placeholder/200/100&quot;,
      website: &quot;https://quantum-computing.ibm.com&quot;,
      partnership: &quot;Research Partner&quot;,
      benefits: [&quot;Quantum access&quot;, &quot;Joint research&quot;, &quot;Enterprise deployment&quot;],
      icon: Atom,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      name: &quot;Cisco&quot;,
      category: &quot;Cybersecurity&quot;,
      description: &quot;Strategic alliance for network security and threat detection solutions&quot;,
      logo: &quot;/api/placeholder/200/100&quot;,
      website: &quot;https://cisco.com&quot;,
      partnership: &quot;Security Alliance&quot;,
      benefits: [&quot;Network integration&quot;, &quot;Security solutions&quot;, &quot;Global reach&quot;],
      icon: Shield,
      color: &quot;from-red-500 to-orange-500&quot;
    },
    {
      name: &quot;AWS&quot;,
      category: &quot;Cloud Services&quot;,
      description: &quot;Partnership for scalable cloud infrastructure and AI services&quot;,
      logo: &quot;/api/placeholder/200/100&quot;,
      website: &quot;https://aws.amazon.com&quot;,
      partnership: &quot;Technology Partner&quot;,
      benefits: [&quot;Cloud infrastructure&quot;, &quot;AI services&quot;, &quot;Global expansion&quot;],
      icon: Rocket,
      color: &quot;from-yellow-500 to-orange-500&quot;
    },
    {
      name: &quot;Intel&quot;,
      category: &quot;Hardware & AI&quot;,
      description: &quot;Collaboration on AI-optimized hardware and edge computing solutions&quot;,
      logo: &quot;/api/placeholder/200/100&quot;,
      website: &quot;https://intel.com&quot;,
      partnership: &quot;Technology Partner&quot;,
      benefits: [&quot;Hardware optimization&quot;, &quot;Edge computing&quot;, &quot;Performance tuning&quot;],
      icon: Brain,
      color: &quot;from-indigo-500 to-purple-500&quot;
    }
  ],

  const partnershipTypes = [
    {
      title: &quot;Technology Alliance&quot;,
      description: &quot;Deep technical integration and joint product development&quot;,
      benefits: [&quot;Shared technology roadmap&quot;, &quot;Joint R&D&quot;, &quot;Co-innovation&quot;],
      icon: Handshake,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      title: &quot;Go-to-Market&quot;,
      description: &quot;Joint sales and marketing initiatives for mutual growth&quot;,
      benefits: [&quot;Co-selling opportunities&quot;, &quot;Joint marketing&quot;, &quot;Revenue sharing&quot;],
      icon: Rocket,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      title: &quot;Research Partnership&quot;,
      description: &quot;Collaborative research in emerging technologies&quot;,
      benefits: [&quot;Joint publications&quot;, &quot;Shared IP&quot;, &quot;Academic collaboration&quot;],
      icon: Brain,
      color: &quot;from-emerald-500 to-teal-500&quot;
    },
    {
      title: &quot;Channel Partnership&quot;,
      description: &quot;Distribution and reseller partnerships for market expansion&quot;,
      benefits: [&quot;Channel enablement&quot;, &quot;Training programs&quot;, &quot;Support collaboration&quot;],
      icon: Users,
      color: &quot;from-orange-500 to-red-500&quot;
    }
  ],

  const stats = [
<<<<<<< HEAD
    { number: "50+", label: "Strategic Partners", icon: Handshake },
    { number: "100+", label: "Joint Projects", icon: Rocket },
    { number: "25+", label: "Countries", icon: Globe },
    { number: "300%", label: "Growth Rate", icon: TrendingUp }
  ],
=======
    { number: &quot;50+&quot;, label: &quot;Strategic Partners&quot;, icon: Handshake },
    { number: &quot;100+&quot;, label: &quot;Joint Projects&quot;, icon: Rocket },
    { number: &quot;25+&quot;, label: &quot;Countries&quot;, icon: Globe },
    { number: &quot;300%&quot;, label: &quot;Growth Rate&quot;, icon: TrendingUp }
=======
import React from 'react';
import Head from 'next/head';
import {_Handshake, _Globe, _Rocket, _Brain, _Atom, _Shield, _ArrowRight, _ExternalLink, _Star, _Users, _Clock, _TrendingUp} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PartnersPage() {_const _partners = [
    {
      name: "Microsoft Azure", _category: "Cloud Infrastructure", _description: "Strategic partnership for enterprise cloud solutions and AI services", _logo: "/api/placeholder/200/100", _website: "https://azure.microsoft.com", _partnership: "Technology Alliance", _benefits: ["Joint go-to-market", _"Technical integration", _"Co-selling opportunities"], _icon: Globe, _color: "from-blue-500 to-cyan-500"},
    {_name: "NVIDIA", _category: "AI & Computing", _description: "Collaboration on GPU-accelerated AI and quantum computing solutions", _logo: "/api/placeholder/200/100", _website: "https://nvidia.com", _partnership: "Technology Partner", _benefits: ["Hardware optimization", _"Joint R&D", _"Market expansion"], _icon: Brain, _color: "from-green-500 to-emerald-500"},
    {_name: "IBM Quantum", _category: "Quantum Computing", _description: "Partnership for quantum computing research and enterprise solutions", _logo: "/api/placeholder/200/100", _website: "https://quantum-computing.ibm.com", _partnership: "Research Partner", _benefits: ["Quantum access", _"Joint research", _"Enterprise deployment"], _icon: Atom, _color: "from-purple-500 to-pink-500"},
    {_name: "Cisco", _category: "Cybersecurity", _description: "Strategic alliance for network security and threat detection solutions", _logo: "/api/placeholder/200/100", _website: "https://cisco.com", _partnership: "Security Alliance", _benefits: ["Network integration", _"Security solutions", _"Global reach"], _icon: Shield, _color: "from-red-500 to-orange-500"},
    {_name: "AWS", _category: "Cloud Services", _description: "Partnership for scalable cloud infrastructure and AI services", _logo: "/api/placeholder/200/100", _website: "https://aws.amazon.com", _partnership: "Technology Partner", _benefits: ["Cloud infrastructure", _"AI services", _"Global expansion"], _icon: Rocket, _color: "from-yellow-500 to-orange-500"},
    {_name: "Intel", _category: "Hardware & AI", _description: "Collaboration on AI-optimized hardware and edge computing solutions", _logo: "/api/placeholder/200/100", _website: "https://intel.com", _partnership: "Technology Partner", _benefits: ["Hardware optimization", _"Edge computing", _"Performance tuning"], _icon: Brain, _color: "from-indigo-500 to-purple-500"}
  ];

  const _partnershipTypes = [
    {_title: "Technology Alliance", _description: "Deep technical integration and joint product development", _benefits: ["Shared technology roadmap", _"Joint R&D", _"Co-innovation"], _icon: Handshake, _color: "from-blue-500 to-cyan-500"},
    {_title: "Go-to-Market", _description: "Joint sales and marketing initiatives for mutual growth", _benefits: ["Co-selling opportunities", _"Joint marketing", _"Revenue sharing"], _icon: Rocket, _color: "from-purple-500 to-pink-500"},
    {_title: "Research Partnership", _description: "Collaborative research in emerging technologies", _benefits: ["Joint publications", _"Shared IP", _"Academic collaboration"], _icon: Brain, _color: "from-emerald-500 to-teal-500"},
    {_title: "Channel Partnership", _description: "Distribution and reseller partnerships for market expansion", _benefits: ["Channel enablement", _"Training programs", _"Support collaboration"], _icon: Users, _color: "from-orange-500 to-red-500"}
  ];

  const _stats = [
    {_number: "50+", _label: "Strategic Partners", _icon: Handshake},
    {_number: "100+", _label: "Joint Projects", _icon: Rocket},
    {_number: "25+", _label: "Countries", _icon: Globe},
    {_number: "300%", _label: "Growth Rate", _icon: TrendingUp}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
=======
  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Strategic partnerships and collaboration opportunities with Zion Tech Group. Join our ecosystem of technology leaders and innovators.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Partners - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Strategic partnerships and collaboration opportunities.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/partners&quot; />
      </Head>

      <EnhancedNavigation />

<<<<<<< HEAD
      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;mb-8&quot;
=======
      {_/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="mb-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6&quot;>
              Strategic Partners
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed&quot;>
              Building the future of technology through strategic partnerships and collaboration
            </p>
          </motion.div>

          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;mb-12&quot;
          >
            <p className=&quot;text-lg text-white/70 max-w-2xl mx-auto mb-8&quot;>
              Join our ecosystem of technology leaders, innovators, and industry experts 
=======
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Join our ecosystem of technology leaders, _innovators, _and industry experts 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              to create transformative solutions that shape the future of computing.
            </p>
            <button className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto&quot;>
              Become a Partner
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </button>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Stats Section */}
      <section className=&quot;py-16 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-center&quot;
=======
      {_/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {_stats.map((stat, _index) => (
              <motion.div
                key={stat.label}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                  <stat.icon className=&quot;w-8 h-8 text-cyan-400&quot; />
                </div>
<<<<<<< HEAD
                <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.number}</div>
                <div className=&quot;text-white/70&quot;>{stat.label}</div>
=======
                <div className="text-3xl font-bold text-white mb-2">{_stat.number}</div>
                <div className="text-white/70">{_stat.label}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Partnership Types */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Partnership Types */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Partnership Types</h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              We offer various partnership models to meet your business objectives and growth goals
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300&quot;
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <type.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{type.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{type.description}</p>
                <ul className=&quot;space-y-2&quot;>
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className=&quot;flex items-center text-white/80&quot;>
                      <div className=&quot;w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3&quot; />
                      {benefit}
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_partnershipTypes.map(_(type, _index) => (_<motion.div
                key={type.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className={_`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{_type.title}</h3>
                <p className="text-white/70 mb-6">{_type.description}</p>
                <ul className="space-y-2">
                  {_type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-white/80">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                      {_benefit}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Current Partners */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Current Partners */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Our Partners</h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Leading technology companies and organizations that trust us to deliver innovative solutions
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300&quot;
              >
                <div className=&quot;p-6&quot;>
                  <div className=&quot;flex items-center gap-3 mb-4&quot;>
                    <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center`}>
                      <partner.icon className=&quot;w-6 h-6 text-white&quot; />
                    </div>
                    <div className=&quot;flex items-center gap-2&quot;>
                      <span className=&quot;text-xs text-white/60 bg-white/5 px-2 py-1 rounded-full&quot;>
                        {partner.category}
                      </span>
                      <span className=&quot;text-xs text-white/40 bg-white/5 px-2 py-1 rounded&quot;>
                        {partner.partnership}
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_partners.map(_(partner, _index) => (_<motion.div
                key={partner.name}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={_`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center`}>
                      <partner.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded-full">
                        {_partner.category}
                      </span>
                      <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                        {_partner.partnership}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </span>
                    </div>
                  </div>
                  
<<<<<<< HEAD
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{partner.name}</h3>
                  <p className=&quot;text-white/70 text-sm mb-4&quot;>{partner.description}</p>
                  
                  <div className=&quot;mb-4&quot;>
                    <h4 className=&quot;text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider&quot;>Benefits</h4>
                    <ul className=&quot;space-y-1&quot;>
                      {partner.benefits.map((benefit) => (
                        <li key={benefit} className=&quot;text-xs text-white/80 flex items-center&quot;>
                          <div className=&quot;w-1 h-1 bg-cyan-400 rounded-full mr-2&quot; />
                          {benefit}
=======
                  <h3 className="text-xl font-bold text-white mb-3">{_partner.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{_partner.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Benefits</h4>
                    <ul className="space-y-1">
                      {_partner.benefits.map((benefit) => (
                        <li key={benefit} className="text-xs text-white/80 flex items-center">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2" />
                          {_benefit}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className=&quot;flex items-center justify-between&quot;>
                    <a
<<<<<<< HEAD
                      href={partner.website}
                      target=&quot;_blank&quot;
                      rel=&quot;noopener noreferrer&quot;
                      className=&quot;text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1&quot;
=======
                      href={_partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      Visit Website
                      <ExternalLink className=&quot;w-3 h-3&quot; />
                    </Link>
                    <button className=&quot;px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105&quot;>
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Become a Partner CTA */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
=======
      {_/* Become a Partner CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
              Ready to Partner with Us?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Join our ecosystem of technology leaders and create innovative solutions that drive business transformation and growth.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <button className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                Partnership Inquiry
              </button>
              <button className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;>
                Download Partnership Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  )
}
