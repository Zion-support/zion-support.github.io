:pages_backup/portfolio.tsx
<<<<<<< HEAD
import React from 'react',
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import { Rocket, Brain, Atom, Shield, Cloud, BarChart3;
  ArrowRight, ExternalLink, Star, Users, Clock, TrendingUp
 } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
export default function PortfolioPage() {
  const projects = null;
<<<<<<< HEAD:pages/portfolio.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
export default function PortfolioPage() {}
  const projects = []
    {}
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
:pages_backup/portfolio.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
} from 'lucide-react';
import EnhancedNavigation from '../components / EnhancedNavigation';
=======
';
} from 'lucide-react';'
import EnhancedNavigation from '../components / EnhancedNavigation';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/portfolio.tsx
import EnhancedFooter from '../components / EnhancedFooter';
export default /**;
 * PortfolioPage - Function description;
 */
function PortfolioPage() {}
  const projects = [;
:pages_backup/portfolio.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
<<<<<<< HEAD
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
  const categories = ["All", "AI & Machine Learning", "Quantum Computing", "Cybersecurity", "Cloud Infrastructure", "Data Analytics", "Digital Transformation"],
  const [selectedCategory, setSelectedCategory] = React.useState("All"),
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory),

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Our Work - Zion Tech Group</title>

        <meta
          name='description'
=======
    {}
        <meta'
          name='description''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/portfolio.tsx
          content="Explore Zion Tech Group's portfolio of innovative technology projects. AI, quantum computing, cybersecurity, and digital transformation solutions."
        />;'
        <meta property='og:title' content='Our Work - Zion Tech Group' />;
        <meta'
          property='og:description''
          content='Explore our portfolio of innovative technology projects and solutions.'
:pages_backup/portfolio.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
        <meta
          name='description'
          content="Explore Zion Tech Group's portfolio of innovative technology projects. AI, quantum computing, cybersecurity, and digital transformation solutions."
        />;
        <meta property='og:title' content='Our Work - Zion Tech Group' />;
        <meta
          property='og:description'
          content='Explore our portfolio of innovative technology projects and solutions.'
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        />
        <link rel='canonical' href='https://ziontechgroup.com/portfolio' />
      </Head>

      <EnhancedNavigation />
      {/* Hero Section */}
<section className='relative pt-32 pb-20 px-6'>
        <div className='max-w-7xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
className='mb-8'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          >
=======

          >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/portfolio.tsx
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Our Work;
            </h1>
<<<<<<< HEAD
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
              Innovative technology solutions that drive business transformation
              and growth
            </p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </motion.div>
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD

            transition={{ duration: 0 && 0.8 }}'
            className='mb-8'>;'
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6'>;
              Our Work;
            </h1>;'
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
              Innovative technology solutions that drive business transformation;
              and growth            </p>;
          </motion && motion.div>;

          <motion&& motion.div;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}'
            className='mb-12'>;'
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>;'
              Discover how we've helped organizations leverage cutting-edge;
              technology to solve complex challenges and achieve remarkable;
              results.            </p>;
          </motion && motion.div>;
        </div>;
      </section>;

      {/* Stats Section */}'
      <section className='py-16 px-6'>;'
        <div className='max-w-7xl mx-auto'>;'
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>            {stats && stats.map((stat, index) => (;
              <motion&& motion.div;
                key={stat && stat.label}

:pages_backup/portfolio.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Discover how we've helped organizations leverage cutting-edge technology to solve 

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              complex challenges and achieve remarkable results.
=======
              complex challenges and achieve remarkable results.
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/portfolio.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
className='mb-12'
          >
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>
              Discover how we've helped organizations leverage cutting-edge
              technology to solve complex challenges and achieve remarkable
              results.
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </p>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD

<<<<<<< HEAD:pages_backup/portfolio.tsx
      {/* Stats Section */}
<section className='py-16 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
className='text-center'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
              >"
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">"
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
"
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>"
                <div className="text-white/70">{stat.label}</div>
              </motion.div>

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/portfolio.tsx
            ))}

          </div>;
        </div>;
      </section>;

:pages_backup/portfolio.tsx
<<<<<<< HEAD

:pages_backup/portfolio.tsx
      {/* Category Filter */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <div className='text-3xl font-bold text-white mb-2'>
                  {stat.number}
                </div>
                <div className='text-white/70'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Category Filter */}
<section className='py-8 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-wrap justify-center gap-4'>
            {categories.map(category => (
              <button
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${;
                  selectedCategory === category;'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white';'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white';`
                }`}
              >;
                {category}
<<<<<<< HEAD:pages/portfolio.tsx
<<<<<<< HEAD
<<<<<<< HEAD

              <motion.div

                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

                    </div>
                    <span className='text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full'>
                      {project.category}
                    </span>
                  </div>

                      className={`w-12 h-12 bg-gradient-to-br ${project && project.color} rounded-xl flex items-center justify-center`}>;
                      <project && project.icon className='w-6 h-6 text-white' />;
                    </div>;
                    <span className='text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full'>;
                      {project && project.category}
                    </span>;
                  </div>;
                  <h3 className='text-2xl font-bold text-white mb-4'>;
                    {project && project.title}
                  </h3>;
                  <p className='text-white/70 mb-6'>{project && project.description}</p>;
                  <div className='mb-6'>;
                    <h4 className='text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider'>;
                      Technologies;
                    </h4>;
                    <div className='flex flex-wrap gap-2'>;
                      {project && project.technologies.map(tech => (;

                        <span
                          key={tech}
                          className='text-xs bg-white/5 text-white/70 px-2 py-1 rounded'>                          {tech}
                        </span>;

=======
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
=======

              >"
                <div className="p-8">"
                  <div className="flex items-center gap-3 mb-4">`
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/portfolio.tsx
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
<span className="text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full">
                      {project.category  } catch (error) {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                        <li
                          key={result}
                          className='text-sm text-white/80 flex items-center'>;
                          <div className='w-1 && 1.5 h-1 && 1.5 bg-cyan-400 rounded-full mr-2' />                          {result}
                        </li>;

{tech  } catch (error) {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    console.error("Error:", error);
=======
                        <li;
                          key={result}'
                          className='text-sm text-white/80 flex items-center'>;'
                          <div className='w-1 && 1.5 h-1 && 1.5 bg-cyan-400 rounded-full mr-2' />                          {result}
                        </li>;

                          {tech  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/portfolio.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
</span>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Results</h4>
=======
"
                  <div className="mb-6">"
                    <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Results</h4>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/portfolio.tsx
                    <ul className="space-y-1">
                      {project.results.map((result) => ("
                        <li key={result} className="text-sm text-white/80 flex items-center">"
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                          {result}
                        </li>
                      ))}

:pages_backup/portfolio.tsx

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">Client: {project.client}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105">
                      View Details
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Grid */}
<section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300'
              >
                <div className='p-8'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}
                    >
                      <project.icon className='w-6 h-6 text-white' />
                    </div>
                    <span className='text-sm text-white/60 bg-white/5 px-3 py-1 rounded-full'>
                      {project.category}
                    </span>
                  </div>
                  <h3 className='text-2xl font-bold text-white mb-4'>
                    {project.title}
                  </h3>
                  <p className='text-white/70 mb-6'>{project.description}</p>
                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider'>
                      Technologies
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className='text-xs bg-white/5 text-white/70 px-2 py-1 rounded'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
<div className='mb-6'>
                    <h4 className='text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider'>
                      Results
                    </h4>
                    <ul className='space-y-1'>
                      {project.results.map(result => (
                        <li
                          key={result}
                          className='text-sm text-white/80 flex items-center'
                        >
                          <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2' />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
<div className='flex items-center justify-between'>
                    <span className='text-sm text-white/60'>
                      Client: {project.client}
                    </span>
                    <button className='px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105'>
origin/cursor/automate-test-improve-and-merge-code-2533
                      View Details
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                  "
                  <div className="flex items-center justify-between">"
                    <span className="text-sm text-white/60">Client: {project.client}</span>"
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105">
                      View Details;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/portfolio.tsx
                    </button>
                  </div>
                </div>
              </motion.div>
:pages_backup/portfolio.tsx
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/portfolio.tsx
          </div>;
        </div>;
      </section>;

:pages_backup/portfolio.tsx
      {/* CTA Section */}
<<<<<<< HEAD:pages/portfolio.tsx
<<<<<<< HEAD
      <section className='py-20 px-6'>;
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
=======
      {/* CTA Section */}'
      <section className='py-20 px-6'>;'
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div;
      {/* CTA Section */}"
      <section className="py-20 px-6">"
        <div className="max-w-4xl mx-auto text-center">
          <motion.div;
            initial={{ opacity: 0, y: 30 }  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/portfolio.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/portfolio.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >
"
            <h2 className="text-4xl font-bold text-white mb-6">
=======
          >

            <h2 className="text-4xl font-bold text-white mb-6">
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/portfolio.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
<section className='py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className='text-4xl font-bold text-white mb-6'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              Ready to Start Your Project?
            </h2>"
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">'
              Let's discuss how we can help you achieve similar results with our innovative technology solutions.
            </p>
<<<<<<< HEAD:pages/portfolio.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                Schedule Consultation

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105'>
                Start Your Project
              </button>
              <button className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>
                Schedule Consultation
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </button>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD:pages/portfolio.tsx
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

),'"
</Head> <EnhancedNavigation /> > <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6" > Our Work </h1> <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed" > Innovative technology solutions that drive business transformation and growth </p> </motion.div> <motion.div > <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8" > Discover how we've helped organizations leverage cutting-edge technology to solve complex challenges and achieve remarkable results. </p> </motion.div> </div> </section> > <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4" > <stat.icon className="w-8 h-8 text-cyan-400" /> </div> </motion.div>) ) 

:pages_backup/portfolio.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <EnhancedFooter />
    </div>
);
</Head> <EnhancedNavigation /> > <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6" > Our Work </h1> <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed" > Innovative technology solutions that drive business transformation and growth </p> </motion.div> <motion.div > <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8" > Discover how we've helped organizations leverage cutting-edge technology to solve complex challenges and achieve remarkable results. </p> </motion.div> </div> </section> > <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4" > <stat.icon className="w-8 h-8 text-cyan-400" /> </div> </motion.div>) ) 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}</div> </div> </section> key= {
  category
}onClick= {
=======
}</div> </div> </section> key= {}
  category;
}onClick= {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/portfolio.tsx
  () => setSelectedCategory (category)
}className= {}`
  `px-6 py-3 rounded-full font-semibold transition-all duration-300 $ {'
  selectedCategory === category ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white': 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'`
}`
}> {}
  category;
}</button>) )
}</div> </div> </section> </span>) )
}</div> </div> </li>) )
}</ul> </div> View Details </button> </div> </div> </motion.div>) )
:pages_backup/portfolio.tsx
}</div> </div> </section> <motion.div initial= {
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}</div> </div> </section> key= {
  category
}onClick= {
  () => setSelectedCategory (category)
}className= {}`
  `px-6 py-3 rounded-full font-semibold transition-all duration-300 $ {'
  selectedCategory === category ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white': 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'`
}`
}> {}
  category;
}</button>) )
}</div> </div> </section> </span>) )
}</div> </div> </li>) )
}</ul> </div> View Details </button> </div> </div> </motion.div>) )
:pages_backup/portfolio.tsx
}</div> </div> </section> <motion.div initial= {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
<<<<<<< HEAD
<<<<<<< HEAD
  duration: 0 && 0.8
}viewport= {
  {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}</div> </div> </section> <motion.div initial= {}
  {}
  opacity: 0, y: 30;
}whileInView= {}
  {}
  opacity: 1, y: 0;
}transition= {}
  {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/portfolio.tsx
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
:pages_backup/portfolio.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/portfolio.tsx
    </div>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
:pages_backup/portfolio.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  duration: 0.8
}viewport= {
  {
  once: true 

}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Start Your Project? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how we can help you achieve similar results with our innovative technology solutions. </p> Start Your Project </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Schedule Consultation </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
