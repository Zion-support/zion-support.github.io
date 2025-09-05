import React from 'react';
import Head from 'next/head';
import {_Rocket, _Brain, _Atom, _Shield, _Cloud, _BarChart3, _ArrowRight, _ExternalLink, _Star, _Users, _Clock, _TrendingUp} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PortfolioPage() {_const _projects = [
    {
      title: "AI-Powered Financial Analytics Platform", _description: "Revolutionary financial analytics platform using advanced AI algorithms for real-time market analysis and predictive modeling", _category: "AI & Machine Learning", _client: "Fortune 500 Financial Institution", _technologies: ["Python", _"TensorFlow", _"React", _"AWS", _"PostgreSQL"], _results: ["40% improvement in prediction accuracy", _"Real-time processing of 1M+ data points", _"ROI of 300% in first year"], _image: "/api/placeholder/600/400", _icon: Brain, _color: "from-purple-500 to-pink-500"},
    {_title: "Quantum Cryptography Security System", _description: "Next-generation security system implementing quantum-resistant cryptography for enterprise-level protection", _category: "Quantum Computing", _client: "Global Cybersecurity Firm", _technologies: ["Qiskit", _"Python", _"Rust", _"Docker", _"Kubernetes"], _results: ["99.99% security guarantee", _"Quantum-resistant encryption", _"Zero security breaches"], _image: "/api/placeholder/600/400", _icon: Atom, _color: "from-blue-500 to-cyan-500"},
    {_title: "Edge Computing IoT Platform", _description: "Distributed IoT platform with edge computing capabilities for real-time data processing and analytics", _category: "Cloud Infrastructure", _client: "Manufacturing Conglomerate", _technologies: ["Kubernetes", _"TensorFlow Lite", _"MQTT", _"InfluxDB", _"Grafana"], _results: ["50% reduction in latency", _"Real-time monitoring of 10K+ devices", _"Cost savings of $2M annually"], _image: "/api/placeholder/600/400", _icon: Cloud, _color: "from-emerald-500 to-teal-500"},
    {_title: "Predictive Healthcare Analytics", _description: "AI-driven healthcare analytics platform for early disease detection and treatment optimization", _category: "Data Analytics", _client: "Healthcare Network", _technologies: ["Python", _"Scikit-learn", _"React", _"MongoDB", _"Redis"], _results: ["Early detection rate improved by 60%", _"Treatment success rate increased by 35%", _"Cost reduction of 25%"], _image: "/api/placeholder/600/400", _icon: BarChart3, _color: "from-indigo-500 to-purple-500"},
    {_title: "Zero-Trust Security Architecture", _description: "Comprehensive zero-trust security implementation for enterprise network protection", _category: "Cybersecurity", _client: "Technology Corporation", _technologies: ["OAuth 2.0", _"JWT", _"React", _"Node.js", _"PostgreSQL"], _results: ["100% security compliance", _"Zero unauthorized access", _"24/7 threat monitoring"], _image: "/api/placeholder/600/400", _icon: Shield, _color: "from-red-500 to-orange-500"},
    {_title: "Digital Transformation Platform", _description: "End-to-end digital transformation solution for legacy system modernization", _category: "Digital Transformation", _client: "Retail Chain", _technologies: ["React", _"Node.js", _"MongoDB", _"AWS", _"Docker"], _results: ["80% faster deployment", _"Customer satisfaction increased by 45%", _"Operational costs reduced by 30%"], _image: "/api/placeholder/600/400", _icon: Rocket, _color: "from-yellow-500 to-orange-500"}
  ];

  const _stats = [
    {_number: "500+", _label: "Projects Delivered", _icon: Rocket},
    {_number: "50+", _label: "Enterprise Clients", _icon: Users},
    {_number: "99.9%", _label: "Client Satisfaction", _icon: Star},
    {_number: "2500%", _label: "Average ROI", _icon: TrendingUp}
  ];

  const _categories = ["All", "AI & Machine Learning", "Quantum Computing", "Cybersecurity", "Cloud Infrastructure", "Data Analytics", "Digital Transformation"];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const _filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Our Work - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's portfolio of innovative technology projects. AI, _quantum computing, _cybersecurity, _and digital transformation solutions." />
        <meta property="og:title" content="Our Work - Zion Tech Group" />
        <meta property="og:description" content="Explore our portfolio of innovative technology projects and solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/portfolio" />
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
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Innovative technology solutions that drive business transformation and growth
            </p>
          </motion.div>

          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Discover how we've helped organizations leverage cutting-edge technology to solve 
              complex challenges and achieve remarkable results.
            </p>
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

      {_/* Category Filter */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {_categories.map(_(category) => (_<button
                key={category}
                onClick={_() => setSelectedCategory(category)}
                className={_`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}`}
              >
                {_category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {_/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_filteredProjects.map(_(project, _index) => (_<motion.div
                key={project.title}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={_`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full">
                      {_project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{_project.title}</h3>
                  <p className="text-white/70 mb-6">{_project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {_project.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-white/5 text-white/70 px-2 py-1 rounded">
                          {_tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Results</h4>
                    <ul className="space-y-1">
                      {_project.results.map(_(result) => (
                        <li key={result} className="text-sm text-white/80 flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                          {_result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">Client: {_project.client}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
