import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Users, 
  Award, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  ShoppingCart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Target,
  Lightbulb,
  ShieldCheck,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Bandage,
  Thermometer,
  Scale,
  Calculator,
  ChartBar,
  PieChart,
  LineChart,
  Activity,
  TrendingDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2
} from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 'ai-autonomous-manufacturing',
      title: 'AI-Powered Autonomous Manufacturing',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Complex supply chain management and quality control issues leading to 15% defect rate and $2M annual losses',
      solution: 'Implemented AI-driven autonomous manufacturing system with real-time quality monitoring and predictive maintenance',
      results: [
        'Reduced defect rate from 15% to 2%',
        'Increased production efficiency by 40%',
        'Saved $3.2M annually in operational costs',
        'Achieved 99.9% uptime with predictive maintenance'
      ],
      technologies: ['AI/ML', 'IoT Sensors', 'Predictive Analytics', 'Computer Vision'],
      duration: '8 months',
      team: '12 engineers',
      image: '🏭',
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      id: 'quantum-financial-modeling',
      title: 'Quantum Computing Financial Risk Analysis',
      client: 'Quantum Capital Partners',
      industry: 'Financial Services',
      challenge: 'Complex financial modeling taking weeks to complete, limiting real-time risk assessment capabilities',
      solution: 'Developed quantum computing algorithms for real-time financial risk modeling and portfolio optimization',
      results: [
        'Reduced modeling time from 2 weeks to 2 hours',
        'Improved risk assessment accuracy by 35%',
        'Generated $15M in additional portfolio returns',
        'Enabled real-time trading decisions'
      ],
      technologies: ['Quantum Computing', 'Financial Algorithms', 'Risk Modeling', 'Portfolio Optimization'],
      duration: '12 months',
      team: '8 quantum researchers',
      image: '💰',
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      id: 'cybersecurity-zero-trust',
      title: 'Zero-Trust Cybersecurity Implementation',
      client: 'National Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Increasing cyber threats targeting patient data with legacy security systems vulnerable to modern attacks',
      solution: 'Implemented comprehensive zero-trust cybersecurity framework with AI-powered threat detection',
      results: [
        'Prevented 100% of attempted cyber attacks',
        'Reduced security incidents by 95%',
        'Achieved HIPAA compliance with 100% audit score',
        'Saved $2.8M in potential breach costs'
      ],
      technologies: ['Zero-Trust Architecture', 'AI Threat Detection', 'Identity Management', 'Encryption'],
      duration: '6 months',
      team: '15 security specialists',
      image: '🏥',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      id: 'cloud-migration-enterprise',
      title: 'Enterprise Cloud Migration & Optimization',
      client: 'Tech Solutions Inc',
      industry: 'Technology',
      challenge: 'Legacy on-premise infrastructure causing scalability issues and 30% higher operational costs',
      solution: 'Migrated entire infrastructure to multi-cloud environment with automated scaling and cost optimization',
      results: [
        'Reduced infrastructure costs by 45%',
        'Improved system performance by 60%',
        'Achieved 99.99% uptime SLA',
        'Enabled global expansion in 3 months'
      ],
      technologies: ['Multi-Cloud', 'Kubernetes', 'DevOps Automation', 'Cost Optimization'],
      duration: '10 months',
      team: '20 cloud engineers',
      image: '☁️',
      color: 'from-zion-blue to-zion-cyan'
    },
    {
      id: 'biotech-drug-discovery',
      title: 'AI-Driven Drug Discovery Platform',
      client: 'BioPharma Innovations',
      industry: 'Biotechnology',
      challenge: 'Traditional drug discovery process taking 10+ years and costing $2.6B per approved drug',
      solution: 'Developed AI-powered drug discovery platform using machine learning and molecular modeling',
      results: [
        'Reduced drug discovery time by 70%',
        'Identified 3 promising drug candidates',
        'Saved $500M in research costs',
        'Improved success rate by 40%'
      ],
      technologies: ['AI/ML', 'Molecular Modeling', 'Drug Discovery', 'Bioinformatics'],
      duration: '18 months',
      team: '25 researchers',
      image: '🧬',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      id: 'space-satellite-network',
      title: 'Autonomous Satellite Network Management',
      client: 'Space Communications Ltd',
      industry: 'Space Technology',
      challenge: 'Managing 50+ satellites manually causing 20% downtime and $5M annual revenue loss',
      solution: 'Implemented AI-powered autonomous satellite network with self-healing capabilities',
      results: [
        'Reduced satellite downtime to 2%',
        'Increased network capacity by 300%',
        'Saved $8M annually in operational costs',
        'Enabled autonomous mission planning'
      ],
      technologies: ['AI Autonomy', 'Satellite Technology', 'Network Management', 'Space Communications'],
      duration: '14 months',
      team: '18 space engineers',
      image: '🛰️',
      color: 'from-zion-purple to-zion-blue'
    }
  ];

  const industries = [
    { name: 'Manufacturing', icon: Factory, count: 15, color: 'from-zion-cyan to-zion-blue' },
    { name: 'Financial Services', icon: DollarSign, count: 12, color: 'from-zion-purple to-zion-cyan' },
    { name: 'Healthcare', icon: Heart, count: 18, color: 'from-zion-cyan to-zion-purple' },
    { name: 'Technology', icon: Cpu, count: 25, color: 'from-zion-blue to-zion-cyan' },
    { name: 'Biotechnology', icon: Dna, count: 8, color: 'from-zion-purple to-zion-blue' },
    { name: 'Space Technology', icon: Satellite, count: 6, color: 'from-zion-cyan to-zion-purple' }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'CTO, Global Manufacturing Corp',
      content: 'Zion Tech Group transformed our manufacturing operations with AI that exceeded our expectations. The results speak for themselves.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, Quantum Capital Partners',
      content: 'Their quantum computing expertise opened new possibilities we never thought possible. Game-changing technology.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'CIO, National Healthcare Network',
      content: 'The cybersecurity implementation was flawless. Our patients\' data is now completely secure.',
      rating: 5,
      avatar: '👩‍💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEOHead 
        title="Case Studies"
        description="Real-world success stories showcasing how Zion Tech Group transforms businesses with cutting-edge technology solutions."
        keywords="case studies, success stories, client projects, AI solutions, technology transformation, business results"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-blue/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Case Studies
              </span>
              <br />
              <span className="text-white">Real Results, Real Impact</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 leading-relaxed">
              Discover how Zion Tech Group has transformed businesses across industries with 
              cutting-edge technology solutions. These success stories demonstrate our commitment 
              to delivering measurable results and driving innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                Explore Case Studies
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Transform</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our expertise spans multiple industries, delivering innovative solutions that drive real business value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-3xl font-bold text-zion-cyan">{industry.count}</p>
                <p className="text-zion-slate-light text-sm">Successful Projects</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              In-depth case studies showcasing our most impactful technology transformations
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Left Column - Overview */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${study.color} rounded-xl flex items-center justify-center mr-4`}>
                        <span className="text-2xl">{study.image}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                        <p className="text-zion-cyan font-medium">{study.client}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-zion-slate-light">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-zion-slate-light">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                            <span className="text-zion-slate-light">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors duration-300"
                    >
                      Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>

                  {/* Right Column - Stats */}
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-zion-slate-dark/30 rounded-xl border border-zion-cyan/20">
                      <h4 className="text-lg font-semibold text-white mb-4">Project Details</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-zion-slate-light text-sm">Duration</p>
                          <p className="text-white font-semibold">{study.duration}</p>
                        </div>
                        <div>
                          <p className="text-zion-slate-light text-sm">Team Size</p>
                          <p className="text-white font-semibold">{study.team}</p>
                        </div>
                        <div>
                          <p className="text-zion-slate-light text-sm">Industry</p>
                          <p className="text-white font-semibold">{study.industry}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center p-6 bg-zion-slate-dark/30 rounded-xl border border-zion-cyan/20">
                      <h4 className="text-lg font-semibold text-white mb-4">Success Metrics</h4>
                      <div className="space-y-3">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <div key={resultIndex} className="text-sm">
                            <p className="text-zion-slate-light">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Clients</span> Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Direct feedback from the leaders who trusted us with their technology transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-zion-slate-light">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Write Your <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Success Story</span>?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our technology solutions can transform your business and deliver measurable results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                Schedule a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View All Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
