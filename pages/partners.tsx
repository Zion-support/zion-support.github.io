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
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Strategic partnerships and collaboration opportunities with Zion Tech Group. Join our ecosystem of technology leaders and innovators." />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic partnerships and collaboration opportunities." />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Strategic Partners
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Building the future of technology through strategic partnerships and collaboration
            </p>
          </motion.div>

          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Join our ecosystem of technology leaders, _innovators, _and industry experts 
              to create transformative solutions that shape the future of computing.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

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
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{_stat.number}</div>
                <div className="text-white/70">{_stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Partnership Types */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Partnership Types</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We offer various partnership models to meet your business objectives and growth goals
            </p>
          </motion.div>

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
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Current Partners */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Partners</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Leading technology companies and organizations that trust us to deliver innovative solutions
            </p>
          </motion.div>

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
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{_partner.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{_partner.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Benefits</h4>
                    <ul className="space-y-1">
                      {_partner.benefits.map((benefit) => (
                        <li key={benefit} className="text-xs text-white/80 flex items-center">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2" />
                          {_benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={_partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1"
                    >
                      Visit Website
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Become a Partner CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join our ecosystem of technology leaders and create innovative solutions that drive business transformation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Partnership Inquiry
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Download Partnership Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
