import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  Rocket, Brain, Atom, Shield, Cloud, BarChart3,
  ArrowRight, ExternalLink, Star, Users, Clock, TrendingUp
} from 'lucide-react',
import EnhancedNavigation from '../components/EnhancedNavigation',
import EnhancedFooter from '../components/EnhancedFooter',
export default function PortfolioPage() {
  const projects = [
    {
      title: &quot;AI-Powered Financial Analytics Platform&quot;,
      description: &quot;Revolutionary financial analytics platform using advanced AI algorithms for real-time market analysis and predictive modeling&quot;,
      category: &quot;AI & Machine Learning&quot;,
      client: &quot;Fortune 500 Financial Institution&quot;,
      technologies: [&quot;Python&quot;, &quot;TensorFlow&quot;, &quot;React&quot;, &quot;AWS&quot;, &quot;PostgreSQL&quot],
      results: [&quot;40% improvement in prediction accuracy&quot;, &quot;Real-time processing of 1M+ data points&quot;, &quot;ROI of 300% in first year&quot],
      image: &quot;/api/placeholder/600/400&quot;,
      icon: Brain,
      color: &quot;from-purple-500 to-pink-500&quot
    },
    {
      title: &quot;Quantum Cryptography Security System&quot;,
      description: &quot;Next-generation security system implementing quantum-resistant cryptography for enterprise-level protection&quot;,
      category: &quot;Quantum Computing&quot;,
      client: &quot;Global Cybersecurity Firm&quot;,
      technologies: [&quot;Qiskit&quot;, &quot;Python&quot;, &quot;Rust&quot;, &quot;Docker&quot;, &quot;Kubernetes&quot],
      results: [&quot;99.99% security guarantee&quot;, &quot;Quantum-resistant encryption&quot;, &quot;Zero security breaches&quot],
      image: &quot;/api/placeholder/600/400&quot;,
      icon: Atom,
      color: &quot;from-blue-500 to-cyan-500&quot
    },
    {
      title: &quot;Edge Computing IoT Platform&quot;,
      description: &quot;Distributed IoT platform with edge computing capabilities for real-time data processing and analytics&quot;,
      category: &quot;Cloud Infrastructure&quot;,
      client: &quot;Manufacturing Conglomerate&quot;,
      technologies: [&quot;Kubernetes&quot;, &quot;TensorFlow Lite&quot;, &quot;MQTT&quot;, &quot;InfluxDB&quot;, &quot;Grafana&quot],
      results: [&quot;50% reduction in latency&quot;, &quot;Real-time monitoring of 10K+ devices&quot;, &quot;Cost savings of $2M annually&quot],
      image: &quot;/api/placeholder/600/400&quot;,
      icon: Cloud,
      color: &quot;from-emerald-500 to-teal-500&quot
    },
    {
      title: &quot;Predictive Healthcare Analytics&quot;,
      description: &quot;AI-driven healthcare analytics platform for early disease detection and treatment optimization&quot;,
      category: &quot;Data Analytics&quot;,
      client: &quot;Healthcare Network&quot;,
      technologies: [&quot;Python&quot;, &quot;Scikit-learn&quot;, &quot;React&quot;, &quot;MongoDB&quot;, &quot;Redis&quot],
      results: [&quot;Early detection rate improved by 60%&quot;, &quot;Treatment success rate increased by 35%&quot;, &quot;Cost reduction of 25%&quot],
      image: &quot;/api/placeholder/600/400&quot;,
      icon: BarChart3,
      color: &quot;from-indigo-500 to-purple-500&quot
    },
    {
      title: &quot;Zero-Trust Security Architecture&quot;,
      description: &quot;Comprehensive zero-trust security implementation for enterprise network protection&quot;,
      category: &quot;Cybersecurity&quot;,
      client: &quot;Technology Corporation&quot;,
      technologies: [&quot;OAuth 2.0&quot;, &quot;JWT&quot;, &quot;React&quot;, &quot;Node.js&quot;, &quot;PostgreSQL&quot],
      results: [&quot;100% security compliance&quot;, &quot;Zero unauthorized access&quot;, &quot;24/7 threat monitoring&quot],
      image: &quot;/api/placeholder/600/400&quot;,
      icon: Shield,
      color: &quot;from-red-500 to-orange-500&quot
    },
    {
      title: &quot;Digital Transformation Platform&quot;,
      description: &quot;End-to-end digital transformation solution for legacy system modernization&quot;,
      category: &quot;Digital Transformation&quot;,
      client: &quot;Retail Chain&quot;,
      technologies: [&quot;React&quot;, &quot;Node.js&quot;, &quot;MongoDB&quot;, &quot;AWS&quot;, &quot;Docker&quot],
      results: [&quot;80% faster deployment&quot;, &quot;Customer satisfaction increased by 45%&quot;, &quot;Operational costs reduced by 30%&quot],
      image: &quot;/api/placeholder/600/400&quot;,
      icon: Rocket,
      color: &quot;from-yellow-500 to-orange-500&quot
    }
  ],

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Rocket },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Client Satisfaction", icon: Star },
    { number: "2500%", label: "Average ROI", icon: TrendingUp }
  ],

  const categories = ["All", "AI & Machine Learning", "Quantum Computing", "Cybersecurity", "Cloud Infrastructure", "Data Analytics", "Digital Transformation"],

  const [selectedCategory, setSelectedCategory] = React.useState("All"),
  const [selectedCategory, setSelectedCategory] = React.useState(&quot;All&quot;);

  const filteredProjects = selectedCategory === &quot;All&quot;     ? projects 
    : projects.filter(project => project.category === selectedCategory),

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>Our Work - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Explore Zion Tech Group's portfolio of innovative technology projects. AI, quantum computing, cybersecurity, and digital transformation solutions.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Our Work - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Explore our portfolio of innovative technology projects and solutions.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/portfolio&quot; />      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div,
initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;mb-8&quot;          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6&quot;>
              Our Work
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed&quot;>
              Innovative technology solutions that drive business transformation and growth
            </p>
          </motion.div>

          <motion.div,
initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;mb-12&quot;          >
            <p className=&quot;text-lg text-white/70 max-w-2xl mx-auto mb-8&quot;>
              Discover how we've helped organizations leverage cutting-edge technology to solve,
complex challenges and achieve remarkable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=&quot;py-16 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;>
            {stats.map((stat, index) => (
              <motion.div,
key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-center&quot;              >
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                  <stat.icon className=&quot;w-8 h-8 text-cyan-400&quot; />
                </div>
                <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.number}</div>
                <div className=&quot;text-white/70&quot;>{stat.label}</div>              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className=&quot;py-8 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
            {categories.map((category) => (
              <button                key={category}
                onClick={_() => setSelectedCategory(category)}
                className={_`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {filteredProjects.map((project, index) => (
              <motion.div,
key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300&quot;
              >
                <div className=&quot;p-8&quot;>
                  <div className=&quot;flex items-center gap-3 mb-4&quot;>
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                      <project.icon className=&quot;w-6 h-6 text-white&quot; />
                    </div>
                    <span className=&quot;text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full&quot;>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{project.title}</h3>
                  <p className=&quot;text-white/70 mb-6&quot;>{project.description}</p>
                  
                  <div className=&quot;mb-6&quot;>
                    <h4 className=&quot;text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider&quot;>Technologies</h4>
                    <div className=&quot;flex flex-wrap gap-2&quot;>
                      {project.technologies.map((tech) => (
                        <span key={tech} className=&quot;text-xs bg-white/5 text-white/70 px-2 py-1 rounded&quot;>
                          {tech}                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className=&quot;mb-6&quot;>
                    <h4 className=&quot;text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider&quot;>Results</h4>
                    <ul className=&quot;space-y-1&quot;>
                      {project.results.map((result) => (
                        <li key={result} className=&quot;text-sm text-white/80 flex items-center&quot;>
                          <div className=&quot;w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2&quot; />
                          {result}                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className=&quot;flex items-center justify-between&quot;>
                    <span className=&quot;text-sm text-white/60&quot;>Client: {project.client}</span>
                    <button className=&quot;px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105&quot;>                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>          <motion.div,
initial={_{ opacity: 0, y: 30}}
            whileInView={_{ opacity: 1, y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
              Ready to Start Your Project?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss how we can help you achieve similar results with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">                Start Your Project
              </button>
              <button className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;>
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  )
}
