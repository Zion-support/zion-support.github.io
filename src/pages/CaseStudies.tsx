import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Award, CheckCircle, Globe, ArrowRight, Building2 } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare AI Transformation',
      client: 'Major Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Inefficient patient diagnosis and treatment planning processes leading to delays and increased costs',
      solution: 'Implemented AI-powered diagnostic assistance system with machine learning algorithms',
      results: [
        '40% reduction in diagnosis time',
        '25% improvement in treatment accuracy',
        '30% decrease in operational costs',
        'Enhanced patient satisfaction scores'
      ],
      technologies: ['AI/ML', 'Computer Vision', 'Natural Language Processing', 'Cloud Computing'],
      featured: true
    },
    {
      id: 2,
      title: 'Financial Services Automation',
      client: 'Regional Bank',
      industry: 'Finance',
      challenge: 'Manual compliance processes causing delays and regulatory risks',
      solution: 'Developed automated compliance monitoring system with real-time risk assessment',
      results: [
        '90% reduction in compliance processing time',
        '99.9% accuracy in regulatory reporting',
        'Significant cost savings in compliance operations',
        'Improved audit trail and transparency'
      ],
      technologies: ['RPA', 'AI/ML', 'Blockchain', 'Cloud Security'],
      featured: false
    },
    {
      id: 3,
      title: 'Manufacturing AI Optimization',
      client: 'Global Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues affecting output and customer satisfaction',
      solution: 'Deployed AI-powered predictive maintenance and quality control systems',
      results: [
        '35% increase in production efficiency',
        '50% reduction in quality defects',
        '20% decrease in maintenance costs',
        'Improved equipment uptime by 25%'
      ],
      technologies: ['IoT', 'AI/ML', 'Predictive Analytics', 'Edge Computing'],
      featured: false
    },
    {
      id: 4,
      title: 'Retail Technology Modernization',
      client: 'National Retail Chain',
      industry: 'Retail',
      challenge: 'Outdated inventory management and customer experience systems',
      solution: 'Implemented AI-driven inventory optimization and personalized customer engagement platform',
      results: [
        '45% improvement in inventory turnover',
        '30% increase in customer engagement',
        '25% reduction in stockouts',
        'Enhanced omnichannel experience'
      ],
      technologies: ['AI/ML', 'Big Data Analytics', 'Cloud Computing', 'Mobile Solutions'],
      featured: false
    },
    {
      id: 5,
      title: 'Government Digital Services',
      client: 'State Government Agency',
      industry: 'Government',
      challenge: 'Complex citizen service processes and limited digital accessibility',
      solution: 'Developed comprehensive digital service platform with AI-powered citizen assistance',
      results: [
        '60% reduction in service processing time',
        '80% improvement in citizen satisfaction',
        'Significant cost savings in operations',
        'Enhanced transparency and accountability'
      ],
      technologies: ['AI/ML', 'Cloud Computing', 'API Integration', 'Cybersecurity'],
      featured: false
    },
    {
      id: 6,
      title: 'Education Technology Platform',
      client: 'University System',
      industry: 'Education',
      challenge: 'Limited personalized learning experiences and administrative inefficiencies',
      solution: 'Built AI-powered adaptive learning platform with integrated administrative tools',
      results: [
        '40% improvement in student engagement',
        '35% increase in learning outcomes',
        'Streamlined administrative processes',
        'Enhanced data-driven decision making'
      ],
      technologies: ['AI/ML', 'Learning Analytics', 'Cloud Computing', 'Mobile Apps'],
      featured: false
    }
  ];

  const industries = [
    'All Industries',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Government',
    'Education'
  ];

  const featuredCase = caseStudies.find(study => study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan mb-6">
              <Award className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Real Results from
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {' '}Real Clients
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Discover how our technology solutions have transformed businesses across industries, 
              delivering measurable results and driving sustainable growth.
            </p>
            
            {/* Industry Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-zion-cyan text-black'
                      : 'bg-zion-slate-dark/30 border border-zion-blue/30 text-zion-slate-light hover:border-zion-cyan/50'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCase && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Success Story</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-zion-cyan text-black text-sm font-medium rounded-full">
                  Featured
                </span>
                <span className="px-3 py-1 bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan text-sm rounded-full">
                  {featuredCase.industry}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">{featuredCase.title}</h3>
              <p className="text-zion-slate-light mb-6">
                <strong>Client:</strong> {featuredCase.client}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">The Challenge</h4>
                  <p className="text-zion-slate-light">{featuredCase.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Our Solution</h4>
                  <p className="text-zion-slate-light">{featuredCase.solution}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">Results & Impact</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuredCase.results.map((result, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredCase.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-zion-slate-dark/30 border border-zion-blue/20 text-zion-slate-light text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Read Full Case Study
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              More Success Stories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Explore how we've helped organizations across different industries achieve their goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(study => !study.featured).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan text-xs rounded-full">
                    {study.industry}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{study.title}</h3>
                <p className="text-zion-slate-light mb-4">
                  <strong>Client:</strong> {study.client}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                  <p className="text-zion-slate-light text-sm line-clamp-3">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Solution:</h4>
                  <p className="text-zion-slate-light text-sm line-clamp-3">{study.solution}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-zion-slate-light text-sm">
                        <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {study.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-zion-slate-dark/30 border border-zion-blue/20 text-zion-slate-light text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full px-4 py-2 border border-zion-blue text-zion-cyan font-medium rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our technology solutions can transform your business and deliver measurable results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-4 border border-zion-blue text-zion-cyan font-semibold rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;