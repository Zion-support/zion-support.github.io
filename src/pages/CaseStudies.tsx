import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  CheckCircle,
  Star,
  Award,
  BarChart3,
  Globe,
  Zap,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Lock,
  Code,
  Heart
} from 'lucide-react';

const caseStudies = [
  {
    id: 'ai-cybersecurity-transformation',
    title: 'AI-Powered Cybersecurity Transformation',
    company: 'Global Financial Services Corp',
    industry: 'Financial Services',
    challenge: 'Facing sophisticated cyber threats with legacy security systems',
    solution: 'Implemented AI-driven threat detection and automated response systems',
    results: [
      '99.9% threat detection accuracy',
      '60% reduction in response time',
      'Zero security breaches in 18 months',
      '$2.5M annual cost savings'
    ],
    technologies: ['AI/ML', 'Cybersecurity', 'Automation'],
    duration: '6 months',
    teamSize: '12 specialists',
    image: '/images/case-studies/cybersecurity-transformation.jpg',
    category: 'Cybersecurity'
  },
  {
    id: 'quantum-computing-optimization',
    title: 'Quantum Computing Supply Chain Optimization',
    company: 'Manufacturing Industries Ltd',
    industry: 'Manufacturing',
    challenge: 'Complex supply chain optimization requiring massive computational power',
    solution: 'Quantum computing algorithms for route optimization and demand forecasting',
    results: [
      '40% reduction in logistics costs',
      '25% improvement in delivery times',
      '15% increase in customer satisfaction',
      'ROI of 300% within first year'
    ],
    technologies: ['Quantum Computing', 'AI/ML', 'Supply Chain'],
    duration: '8 months',
    teamSize: '8 specialists',
    image: '/images/case-studies/quantum-optimization.jpg',
    category: 'Quantum Computing'
  },
  {
    id: 'cloud-migration-enterprise',
    title: 'Enterprise Cloud Migration & Digital Transformation',
    company: 'Healthcare Systems International',
    industry: 'Healthcare',
    challenge: 'Legacy systems limiting scalability and innovation',
    solution: 'Comprehensive cloud migration with modern microservices architecture',
    results: [
      '80% improvement in system performance',
      '50% reduction in operational costs',
      '99.99% uptime achieved',
      'Enhanced data security compliance'
    ],
    technologies: ['Cloud Computing', 'Microservices', 'DevOps'],
    duration: '12 months',
    teamSize: '20 specialists',
    image: '/images/case-studies/cloud-migration.jpg',
    category: 'Cloud & DevOps'
  },
  {
    id: 'iot-smart-city',
    title: 'IoT Smart City Infrastructure',
    company: 'Metropolitan Development Authority',
    industry: 'Government',
    challenge: 'Managing urban infrastructure efficiently across multiple systems',
    solution: 'IoT sensors and AI analytics for smart city management',
    results: [
      '30% reduction in energy consumption',
      '45% improvement in traffic flow',
      'Real-time monitoring of 1000+ sensors',
      'Enhanced citizen services'
    ],
    technologies: ['IoT', 'Edge Computing', 'AI Analytics'],
    duration: '10 months',
    teamSize: '15 specialists',
    image: '/images/case-studies/smart-city.jpg',
    category: 'IoT & Edge'
  },
  {
    id: 'blockchain-supply-chain',
    title: 'Blockchain Supply Chain Transparency',
    company: 'Global Retail Chain',
    industry: 'Retail',
    challenge: 'Lack of transparency in supply chain operations',
    solution: 'Blockchain-based tracking system for end-to-end visibility',
    results: [
      '100% supply chain transparency',
      '50% reduction in fraud incidents',
      'Real-time tracking of products',
      'Enhanced customer trust'
    ],
    technologies: ['Blockchain', 'Smart Contracts', 'IoT'],
    duration: '7 months',
    teamSize: '10 specialists',
    image: '/images/case-studies/blockchain-supply.jpg',
    category: 'Blockchain'
  },
  {
    id: 'ai-customer-service',
    title: 'AI-Powered Customer Service Automation',
    company: 'E-commerce Platform',
    industry: 'E-commerce',
    challenge: 'High customer service costs and response times',
    solution: 'AI chatbots and automated customer service systems',
    results: [
      '70% reduction in support tickets',
      '24/7 customer service availability',
      '90% customer satisfaction rate',
      '60% cost savings in support operations'
    ],
    technologies: ['AI/ML', 'NLP', 'Automation'],
    duration: '5 months',
    teamSize: '6 specialists',
    image: '/images/case-studies/ai-customer-service.jpg',
    category: 'AI & Analytics'
  }
];

const categories = [
  { name: 'All', value: 'all', icon: Globe },
  { name: 'AI & Analytics', value: 'ai', icon: Brain },
  { name: 'Cybersecurity', value: 'cybersecurity', icon: Shield },
  { name: 'Cloud & DevOps', value: 'cloud', icon: Cloud },
  { name: 'IoT & Edge', value: 'iot', icon: Zap },
  { name: 'Quantum Computing', value: 'quantum', icon: Rocket },
  { name: 'Blockchain', value: 'blockchain', icon: Lock },
  { name: 'Digital Twin', value: 'digital-twin', icon: Code },
  { name: 'Sustainability', value: 'sustainability', icon: Heart }
];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [filteredStudies, setFilteredStudies] = React.useState(caseStudies);

  React.useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredStudies(caseStudies);
    } else {
      setFilteredStudies(caseStudies.filter(study => 
        study.category.toLowerCase().includes(selectedCategory.toLowerCase())
      ));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue/20 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Discover how Zion Tech Group has transformed businesses across industries with cutting-edge technology solutions. 
              Real results, measurable impact, and innovative approaches that drive success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">18+ Industries Served</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-purple">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">95% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-blue">
                <Award className="w-5 h-5" />
                <span className="font-semibold">50+ Awards Won</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.value)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                    : 'border-zion-slate-light/30 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-2xl overflow-hidden hover:border-zion-cyan/30 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-zion-cyan/30">
                    {study.company.charAt(0)}
                  </div>
                </div>

                <div className="p-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-4">
                    <span>{study.category}</span>
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4">{study.company}</p>

                  {/* Challenge */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 3).map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-zion-slate-light text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-zion-slate-light/20">
                    <div className="flex items-center space-x-4 text-xs text-zion-slate-light">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{study.teamSize}</span>
                      </div>
                    </div>
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="flex items-center space-x-1 text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                    >
                      <span className="text-sm font-medium">View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No case studies found</h3>
              <p className="text-zion-slate-light">Try adjusting your filter criteria or browse all case studies.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-slate">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let Zion Tech Group transform your business with cutting-edge technology solutions. 
              Join the ranks of successful companies that have achieved remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
