import React from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon, 
  ChartBarIcon, 
  ClockIcon, 
  CurrencyDollarIcon,
  UserGroupIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Supply Chain Optimization',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Complex supply chain with 50+ suppliers across 15 countries, leading to 30% inventory waste and 45-day lead times.',
      solution: 'Implemented AI-driven demand forecasting, automated supplier management, and real-time inventory optimization.',
      results: [
        'Reduced inventory waste by 65%',
        'Decreased lead times from 45 to 18 days',
        'Saved $2.3M annually in operational costs',
        'Improved supplier performance by 40%'
      ],
      technologies: ['AI/ML', 'IoT Sensors', 'Predictive Analytics', 'Cloud Platform'],
      duration: '6 months',
      teamSize: '8 specialists',
      image: '/case-studies/supply-chain.jpg',
      category: 'AI Solutions'
    },
    {
      id: 2,
      title: 'Cybersecurity Transformation for Financial Services',
      company: 'MetroBank Financial',
      industry: 'Financial Services',
      challenge: 'Legacy security infrastructure unable to handle modern threats, with 15+ security incidents per month.',
      solution: 'Deployed advanced threat detection, zero-trust architecture, and AI-powered security monitoring.',
      results: [
        'Reduced security incidents by 95%',
        'Achieved SOC2 Type II compliance',
        'Improved threat response time from 4 hours to 15 minutes',
        'Saved $1.8M in potential breach costs'
      ],
      technologies: ['Zero Trust', 'AI Security', 'SOC2 Compliance', 'Threat Intelligence'],
      duration: '8 months',
      teamSize: '12 specialists',
      image: '/case-studies/cybersecurity.jpg',
      category: 'Cybersecurity'
    },
    {
      id: 3,
      title: 'Cloud Migration & Digital Transformation',
      company: 'TechStart Solutions',
      industry: 'Technology',
      challenge: 'On-premise infrastructure limiting scalability, with 70% of resources underutilized and 3-hour deployment times.',
      solution: 'Migrated to multi-cloud architecture with automated CI/CD pipelines and containerized applications.',
      results: [
        'Reduced deployment time from 3 hours to 15 minutes',
        'Improved resource utilization to 85%',
        'Scaled from 10K to 100K users seamlessly',
        'Reduced infrastructure costs by 40%'
      ],
      technologies: ['AWS/Azure', 'Kubernetes', 'Docker', 'CI/CD Pipelines'],
      duration: '10 months',
      teamSize: '15 specialists',
      image: '/case-studies/cloud-migration.jpg',
      category: 'Cloud & DevOps'
    },
    {
      id: 4,
      title: 'AI-Powered Customer Service Automation',
      company: 'RetailPlus Inc',
      industry: 'Retail',
      challenge: 'High customer service costs with 24/7 support requirements and 15-minute average response times.',
      solution: 'Implemented AI chatbots, automated ticket routing, and intelligent customer insights platform.',
      results: [
        'Reduced customer service costs by 55%',
        'Improved response time from 15 to 2 minutes',
        'Increased customer satisfaction from 78% to 94%',
        'Handled 300% more inquiries with same team size'
      ],
      technologies: ['AI Chatbots', 'NLP', 'Machine Learning', 'Analytics'],
      duration: '5 months',
      teamSize: '6 specialists',
      image: '/case-studies/customer-service.jpg',
      category: 'AI Solutions'
    },
    {
      id: 5,
      title: 'Quantum Computing Research Platform',
      company: 'Quantum Research Institute',
      industry: 'Research & Development',
      challenge: 'Need for advanced quantum computing platform to accelerate research in materials science and drug discovery.',
      solution: 'Developed custom quantum computing platform with hybrid classical-quantum algorithms.',
      results: [
        'Accelerated research by 10x faster than traditional methods',
        'Published 15 peer-reviewed papers',
        'Discovered 3 new material properties',
        'Reduced computational costs by 80%'
      ],
      technologies: ['Quantum Computing', 'Hybrid Algorithms', 'Research Platform', 'Advanced Analytics'],
      duration: '18 months',
      teamSize: '20 specialists',
      image: '/case-studies/quantum-computing.jpg',
      category: 'Emerging Tech'
    },
    {
      id: 6,
      title: 'Healthcare Data Analytics & Compliance',
      company: 'HealthCare Systems Ltd',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data across 25 facilities with HIPAA compliance requirements and limited analytics capabilities.',
      solution: 'Built unified data platform with advanced analytics, automated compliance monitoring, and secure data sharing.',
      results: [
        'Unified data from 25 facilities into single platform',
        'Achieved 100% HIPAA compliance',
        'Reduced data processing time by 75%',
        'Improved patient outcomes by 23%'
      ],
      technologies: ['Data Platform', 'HIPAA Compliance', 'Advanced Analytics', 'Secure Sharing'],
      duration: '12 months',
      teamSize: '18 specialists',
      image: '/case-studies/healthcare.jpg',
      category: 'Data & Analytics'
    }
  ];

  const categories = ['All', 'AI Solutions', 'Cybersecurity', 'Cloud & DevOps', 'Data & Analytics', 'Emerging Tech'];
  const industries = ['All', 'Manufacturing', 'Financial Services', 'Technology', 'Retail', 'Healthcare', 'Research & Development'];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: RocketLaunchIcon },
    { number: '98%', label: 'Client Satisfaction', icon: LightBulbIcon },
    { number: '$50M+', label: 'Value Delivered', icon: CurrencyDollarIcon },
    { number: '25+', label: 'Industries Served', icon: BuildingOfficeIcon }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real results from real clients. Discover how Zion Tech Group has transformed businesses across industries 
              with innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-300">Explore our most impactful projects and the results we've delivered</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                    {study.category}
                  </span>
                  <span className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm border border-gray-500/30">
                    {study.industry}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-blue-400 font-medium mb-4">{study.company}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    <span>{study.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserGroupIcon className="w-4 h-4" />
                    <span>{study.teamSize}</span>
                  </div>
                </div>
                
                <a
                  href={`/case-studies/${study.id}`}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg"
                >
                  View Full Case Study
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how Zion Tech Group can help transform your business and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
=======
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                  {study.category}
                </span>
              </div>

              {/* Company Info */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{study.company}</h3>
                  <p className="text-sm text-gray-400">{study.industry}</p>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-white mb-4 leading-tight">
                {study.title}
              </h4>

              {/* Challenge */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h5>
                <p className="text-gray-300 text-sm">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h5>
                <p className="text-gray-300 text-sm">{study.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Results</h5>
                <ul className="space-y-1">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                View Full Case Study
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can transform your business and deliver 
              measurable results like the ones you see above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
