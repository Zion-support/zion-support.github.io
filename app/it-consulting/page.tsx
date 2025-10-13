<<<<<<< HEAD
=======
'use client';
import React, {Suspense, lazy}from 'react';
import {Link}}from 'react-router-dom';
import {Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight,}
  Webcam as WebcamIcon, Speaker as SpeakerIcon
} from 'lucide-react';

const ITConsultingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  Webcam as WebcamIcon, Speaker as SpeakerIcon;}} from 'lucide-react';
const ITConsultingPage: React.FC = () => {,
    const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
const itServices = [;
    // IT Infrastructure Services;
      caseStudy: 'Manufacturing company reduced IT downtime by 95% with our infrastructure design'
    },
    {
      id: 'cloud-migration-services',
      caseStudy: 'Retail chain saved $2M annually by migrating to cloud infrastructure'
    },
    {
      id: 'cybersecurity-services',
      caseStudy: 'Healthcare provider achieved 100% compliance with HIPAA regulations'
    },
    {
      id: 'network-design-optimization',
      caseStudy: 'Law firm improved network speed by 300% and eliminated connectivity issues'
    },
    {
      id: 'database-management',
      caseStudy: 'E-commerce platform improved query performance by 400% and reduced costs by 60%'
    },
    {
      id: 'it-support-services',
      caseStudy: 'Marketing agency reduced IT issues by 90% and improved employee productivity'
    },
    {
      id: 'software-development',
      caseStudy: 'Logistics company automated 80% of manual processes with custom software'
    },
    {
      id: 'it-consulting',
      caseStudy: 'Manufacturing company achieved 40% cost reduction through strategic IT planning'
    },
    {
      id: 'disaster-recovery',
      caseStudy: 'Financial services firm achieved 99.9% uptime with our disaster recovery solution'
    },
    {
      id: 'compliance-auditing',
      caseStudy: 'Healthcare provider achieved 100% HIPAA compliance and passed all audits'
    }
  ];

  const categories = [
      caseStudy: 'Healthcare provider achieved 100% HIPAA compliance and passed all audits',}}
  ]
const categories = [
    {id: 'all', name: 'All IT Services', icon: Grid3X3 ,},
    {id: 'infrastructure', name: 'Infrastructure', icon: Server ,},
    {id: 'cloud', name: 'Cloud Services', icon: Cloud ,},
    {id: 'security', name: 'Cybersecurity', icon: Shield ,},
    {id: 'networking', name: 'Networking', icon: Network ,},
    {id: 'database', name: 'Database', icon: Database ,},
    {id: 'support', name: 'IT Support', icon: Headphones ,},
    {id: 'development', name: 'Development', icon: Code ,},
    {id: 'consulting', name: 'Consulting', icon: Briefcase ,},
    {id: 'recovery', name: 'Disaster Recovery', icon: RefreshCw ,},
    {id: 'compliance', name: 'Compliance', icon: CheckSquare ,}]
const filteredServices = itServices.filter(service => {)
  ];
const filteredServices = itServices.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}</div>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid">
        </section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse"></h1>
            Professional <span className="holographic-text">IT Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
            Comprehensive IT solutions designed to optimize your technology infrastructure, 
            enhance security, and drive business growth. Expert consulting and implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              <Phone>
              Call (302) 464-0950;
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get IT Consultation
      {/* Search and Filter Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}</div>
            <div className="flex-1"></div>
              <div className="relative"></div>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-col lg: flex-row gap-6 mb-8"></div>,
                <input;
                  type="text";
                  placeholder="Search IT services...";
                  value={searchTerm}onChange={(e) => setSearchTerm(e.target.value)}className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20",
            {/* Category Filter */} <div className="lg: w-64"></div>,
                {categories.map((category) => (} <option>
          {/* Category Pills */} <div className="flex flex-wrap gap-2 mb-8"></div>
            {categories.map((category) => (</div>
              <button;}key={category.id}onClick={() =>setSelectedCategory(category.id)</button>}className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id;
                    ? 'bg-cyan-500 text-white';
                    : 'bg-slate-800/50 text-gray-300 hover: bg-slate-700/50 hover:text-cyan-400',}}`}
              >;
                {category.name} </button>
                  onChange={(e) => setSearchTerm(e.target.value</div>
            <div className="lg:w-64"></div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value</div>
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (</div>
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id</div>
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
            ))}
      {/* Services Grid */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (</div>
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse"></div>
                <div className="flex items-start justify-between mb-4"></div>
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors"></div>
                    <service.icon className="w-12 h-12" />
                  </div>
                  <div className="text-right"></div>
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">starting price</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6"></div>
                  <div></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,
            {filteredServices.map((service) => (</div>} <div key={service.id}className="quantum-card p-6 group hover: scale-105 transition-all duration-300 energy-pulse"></div>,
                      {service.features.slice(0, 4).map((feature, idx) => (} <li>
                          <CheckCircle />
                          <span>{feature</span>}</span>
                  
                  <div></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                  <div />
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits: </h4>,
                    <ul>
                      {service.benefits.slice(0, 2).map((benefit, idx) => (} <li>
                          <TrendingUp>
                          <span>{benefit</span>}</span>

                <div className="space-y-2 mb-6 text-sm"></div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-white">{service.setupTime}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Free Consultation:</span>
                    <span className="text-green-400">{service.freeConsultation}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Target:</span>
                    <span className="text-white">{service.targetAudience}</span>
                  </div>
                </div>

                {service.caseStudy && (
                  <div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg"></div>
                    <p className="text-sm text-green-300 italic">"{service.caseStudy}"</p>
                  </div>
                </div>
                <div className="space-y-3"></div>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                <div className="space-y-2 mb-6 text-sm"></div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Setup Time: </span>,
                    <span className="text-white">{service.setupTime</span>}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Free Consultation: </span>,
                    <span className="text-green-400">{service.freeConsultation</span>}</span>
                  </div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Target: </span>,
                    <span className="text-white">{service.targetAudience</span>}</span>
                  </div>
                </div>
                {service.caseStudy && (;
                  <div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg"></div>} <p className="text-sm text-green-300 italic">"{service.caseStudy</p>}"</p>
                  </div>
                )}
<div className="space-y-3"></div>
                  <a>
                    Get Free Consultation;
                  </a>
                  <a>
                    <Phone>
                    Call for Quote;
          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
        </section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-cyan-400 mb-8 neon-glow">
            Our certified IT professionals deliver reliable, secure, and scalable solutions. 
            All services include free consultations and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Mail className="w-5 h-5" />
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2>Ready to Optimize Your IT Infrastructure?,</h2>
          </h2>
          <p>Our certified IT professionals deliver reliable, secure, and scalable solutions.;</p>
              <Phone>
              Call (302) 464-0950;
            </a>
            <a>
              <Mail>
              Get Custom IT Strategy;
  );
};

export default ITConsultingPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
