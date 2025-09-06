import React from 'react',
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import {
  Rocket
  Brain
  Atom
  Shield
  Cloud
  BarChart3
  ArrowRight
  ExternalLink
  Star
  Users
  Clock
  TrendingUp;
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
export default function PortfolioPage() {
  const projects = [
    {
      title: 'AI-Powered Financial Analytics Platform'
      description:
        'Revolutionary financial analytics platform using advanced AI algorithms for real-time market analysis and predictive modeling'
      category: 'AI & Machine Learning'
      client: 'Fortune 500 Financial Institution'
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'PostgreSQL']
      results: [
        '40% improvement in prediction accuracy'
        'Real-time processing of 1M+ data points'
        'ROI of 300% in first year'
      ]
      image: '/api/placeholder/600/400'
      icon: Brain
      color: 'from-purple-500 to-pink-500'
    }
    {
      title: 'Quantum Cryptography Security System'
      description:
        'Next-generation security system implementing quantum-resistant cryptography for enterprise-level protection'
      category: 'Quantum Computing'
      client: 'Global Cybersecurity Firm'
      technologies: ['Qiskit', 'Python', 'Rust', 'Docker', 'Kubernetes']
      results: [
        '99.99% security guarantee'
        'Quantum-resistant encryption'
        'Zero security breaches'
      ]
      image: '/api/placeholder/600/400'
      icon: Atom
      color: 'from-blue-500 to-cyan-500'
    }
    {
      title: 'Edge Computing IoT Platform'
      description:
        'Distributed IoT platform with edge computing capabilities for real-time data processing and analytics'
      category: 'Cloud Infrastructure'
      client: 'Manufacturing Conglomerate'
      technologies: [
        'Kubernetes'
        'TensorFlow Lite'
        'MQTT'
        'InfluxDB'
        'Grafana'
      ]
      results: [
        '50% reduction in latency'
        'Real-time monitoring of 10K+ devices'
        'Cost savings of $2M annually'
      ]
      image: '/api/placeholder/600/400'
      icon: Cloud
      color: 'from-emerald-500 to-teal-500'
    }
    {
      title: 'Predictive Healthcare Analytics'
      description:
        'AI-driven healthcare analytics platform for early disease detection and treatment optimization'
      category: 'Data Analytics'
      client: 'Healthcare Network'
      technologies: ['Python', 'Scikit-learn', 'React', 'MongoDB', 'Redis']
      results: [
        'Early detection rate improved by 60%'
        'Treatment success rate increased by 35%'
        'Cost reduction of 25%'
      ]
      image: '/api/placeholder/600/400'
      icon: BarChart3
      color: 'from-indigo-500 to-purple-500'
    }
    {
      title: 'Zero-Trust Security Architecture'
      description:
        'Comprehensive zero-trust security implementation for enterprise network protection'
      category: 'Cybersecurity'
      client: 'Technology Corporation'
      technologies: ['OAuth 2.0', 'JWT', 'React', 'Node.js', 'PostgreSQL']
      results: [
        '100% security compliance'
        'Zero unauthorized access'
        '24/7 threat monitoring'
      ]
      image: '/api/placeholder/600/400'
      icon: Shield
      color: 'from-red-500 to-orange-500'
    }
    {
      title: 'Digital Transformation Platform'
      description:
        'End-to-end digital transformation solution for legacy system modernization'
      category: 'Digital Transformation'
      client: 'Retail Chain'
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker']
      results: [
        '80% faster deployment'
        'Customer satisfaction increased by 45%'
        'Operational costs reduced by 30%'
      ]
      image: '/api/placeholder/600/400'
      icon: Rocket
      color: 'from-yellow-500 to-orange-500'
    }
  ];
  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: Rocket }
    { number: '50+', label: 'Enterprise Clients', icon: Users }
    { number: '99.9%', label: 'Client Satisfaction', icon: Star }
    { number: '2500%', label: 'Average ROI', icon: TrendingUp }
  ];
  const categories = [
    'All'
    'AI & Machine Learning'
    'Quantum Computing'
    'Cybersecurity'
    'Cloud Infrastructure'
    'Data Analytics'
    'Digital Transformation'
  ];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  Rocket,
  Brain,
  Atom,
  Shield,
  Cloud,
  BarChart3,
  ArrowRight,
  ExternalLink,
  Star,
  Users,

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
      title: "AI-Powered Financial Analytics Platform",
      description: "Revolutionary financial analytics platform using advanced AI algorithms for real-time market analysis and predictive modeling",
      category: "AI & Machine Learning",
      client: "Fortune 500 Financial Institution",
      technologies: ["Python", "TensorFlow", "React", "AWS", "PostgreSQL"],
      results: ["40% improvement in prediction accuracy", "Real-time processing of 1M+ data points", "ROI of 300% in first year"],
      image: "/api/placeholder/600/400",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
    {
      title: "AI-Powered Financial Analytics Platform",
      description: "Revolutionary financial analytics platform using advanced AI algorithms for real-time market analysis and predictive modeling",
      category: "AI & Machine Learning",
      client: "Fortune 500 Financial Institution",
      technologies: ["Python", "TensorFlow", "React", "AWS", "PostgreSQL"],
      results: ["40% improvement in prediction accuracy", "Real-time processing of 1M+ data points", "ROI of 300% in first year"],
      image: "/api/placeholder/600/400",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      title: "Quantum Cryptography Security System",
      description: "Next-generation security system implementing quantum-resistant cryptography for enterprise-level protection",
      category: "Quantum Computing",
      client: "Global Cybersecurity Firm",
      technologies: ["Qiskit", "Python", "Rust", "Docker", "Kubernetes"],
      results: ["99.99% security guarantee", "Quantum-resistant encryption", "Zero security breaches"],
      image: "/api/placeholder/600/400",
      icon: Atom,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Edge Computing IoT Platform",
      description: "Distributed IoT platform with edge computing capabilities for real-time data processing and analytics",
      category: "Cloud Infrastructure",
      client: "Manufacturing Conglomerate",
      technologies: ["Kubernetes", "TensorFlow Lite", "MQTT", "InfluxDB", "Grafana"],
      results: ["50% reduction in latency", "Real-time monitoring of 10K+ devices", "Cost savings of $2M annually"],
      image: "/api/placeholder/600/400",
      icon: Cloud,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Predictive Healthcare Analytics",
      description: "AI-driven healthcare analytics platform for early disease detection and treatment optimization",
      category: "Data Analytics",
      client: "Healthcare Network",
      technologies: ["Python", "Scikit-learn", "React", "MongoDB", "Redis"],
      results: ["Early detection rate improved by 60%", "Treatment success rate increased by 35%", "Cost reduction of 25%"],
      image: "/api/placeholder/600/400",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Zero-Trust Security Architecture",
      description: "Comprehensive zero-trust security implementation for enterprise network protection",
      category: "Cybersecurity",
      client: "Technology Corporation",
      technologies: ["OAuth 2.0", "JWT", "React", "Node.js", "PostgreSQL"],
      results: ["100% security compliance", "Zero unauthorized access", "24/7 threat monitoring"],
      image: "/api/placeholder/600/400",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Digital Transformation Platform",
      description: "End-to-end digital transformation solution for legacy system modernization",
      category: "Digital Transformation",
      client: "Retail Chain",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
      results: ["80% faster deployment", "Customer satisfaction increased by 45%", "Operational costs reduced by 30%"],
      image: "/api/placeholder/600/400",
      icon: Rocket,

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Rocket },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Client Satisfaction", icon: Star },
    { number: "2500%", label: "Average ROI", icon: TrendingUp   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
=======
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Rocket },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Client Satisfaction", icon: Star },
    { number: "2500%", label: "Average ROI", icon: TrendingUp   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const categories = ["All", "AI & Machine Learning", "Quantum Computing", "Cybersecurity", "Cloud Infrastructure", "Data Analytics", "Digital Transformation"],
  const [selectedCategory, setSelectedCategory] = React.useState("All"),
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory),


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Innovative technology solutions that drive business transformation and growth
            </p>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}


            transition={{ duration: 0 && 0.8 }}
            className='mb-8'>;
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6'>;
              Our Work;
            </h1>;
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
              Innovative technology solutions that drive business transformation;
              and growth            </p>;
          </motion && motion.div>;

          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
            className='mb-12'>;
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>;
              Discover how we've helped organizations leverage cutting-edge;
              technology to solve complex challenges and achieve remarkable;
              results.            </p>;
          </motion && motion.div>;
        </div>;
      </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Stats Section */}
      <section className='py-16 px-6'>;
        <div className='max-w-7xl mx-auto'>;
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>            {stats && stats.map((stat, index) => (;
              <motion&& motion.div
                key={stat && stat.label}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}

          </div>;
        </div>;
      </section>;


      {/* Category Filter */}
      <section className='py-8 px-6'>;
        <div className='max-w-7xl mx-auto'>;
          <div className='flex flex-wrap justify-center gap-4'>;
            {categories && categories.map(category => (              <button

=======

      {/* Category Filter */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${;
                  selectedCategory === category;
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white';
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white';
                }`}
              >;
                {category}

              <motion.div

                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full">
                      {project.category  } catch (error) {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                        <li
                          key={result}
                          className='text-sm text-white/80 flex items-center'>;
                          <div className='w-1 && 1.5 h-1 && 1.5 bg-cyan-400 rounded-full mr-2' />                          {result}
                        </li>;

=======
                  
=======
                          {tech  } catch (error) {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </span>
                  </div>

=======
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Results</h4>
                    <ul className="space-y-1">
                      {project.results.map((result) => (
                        <li key={result} className="text-sm text-white/80 flex items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                          {result}
                        </li>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                      ))}

                  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">Client: {project.client}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105">
                      View Details
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    </button>
                  </div>
                </div>
              </motion.div>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          </div>;
        </div>;
      </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* CTA Section */}
      <section className='py-20 px-6'>;
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          >

            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">

                Schedule Consultation

              </button>
            </div>
          </motion.div>
        </div>
      </section>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}</div> </div> </section> key= {
  category
}onClick= {
  () => setSelectedCategory (category)
}className= {
  `px-6 py-3 rounded-full font-semibold transition-all duration-300 $ {
  selectedCategory === category ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white': 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
}`
}> {
  category
}</button>) )
}</div> </div> </section> </span>) )
}</div> </div> </li>) )
}</ul> </div> View Details </button> </div> </div> </motion.div>) )
}</div> </div> </section> <motion.div initial= {

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
  duration: 0 && 0.8
}viewport= {
  {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
