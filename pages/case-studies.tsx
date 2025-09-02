import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { ArrowRight, TrendingUp, Users, Clock, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Needed to process and analyze large volumes of patient data to improve diagnostic accuracy and treatment outcomes.',
      solution: 'Developed a comprehensive AI platform using machine learning algorithms to analyze medical imaging, patient records, and treatment histories.',
      results: [
        '40% improvement in diagnostic accuracy',
        '60% reduction in analysis time',
        '35% increase in patient satisfaction',
        '50% cost savings in diagnostic processes'
      ],
      technologies: ['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Cloud Computing'],
      duration: '6 months',
      team: '12 specialists',
      image: '/case-studies/healthcare-ai.jpg',
      slug: 'ai-healthcare-analytics-platform'
    },
    {
      id: 2,
      title: 'Quantum Computing Financial Risk Assessment',
      client: 'Global Finance Corp',
      industry: 'Financial Services',
      challenge: 'Required advanced risk modeling capabilities to handle complex financial instruments and market volatility.',
      solution: 'Implemented quantum computing algorithms for real-time risk assessment and portfolio optimization.',
      results: [
        '75% faster risk calculations',
        '90% improvement in prediction accuracy',
        '25% reduction in portfolio risk',
        '40% increase in trading efficiency'
      ],
      technologies: ['Quantum Computing', 'Financial Modeling', 'Risk Analytics', 'Blockchain'],
      duration: '8 months',
      team: '15 specialists',
      image: '/case-studies/quantum-finance.jpg',
      slug: 'quantum-financial-risk-assessment'
    },
    {
      id: 3,
      title: 'Micro SaaS Content Management System',
      client: 'Creative Agency Network',
      industry: 'Marketing & Advertising',
      challenge: 'Needed a scalable content management solution for managing multiple client campaigns and assets.',
      solution: 'Built a custom micro SaaS platform with AI-powered content optimization and automated workflow management.',
      results: [
        '80% reduction in content creation time',
        '45% increase in campaign performance',
        '60% improvement in client satisfaction',
        '30% cost reduction in operations'
      ],
      technologies: ['React', 'Node.js', 'AI Content Generation', 'Cloud Infrastructure'],
      duration: '4 months',
      team: '8 specialists',
      image: '/case-studies/micro-saas-cms.jpg',
      slug: 'micro-saas-content-management'
    },
    {
      id: 4,
      title: 'Blockchain Supply Chain Transparency',
      client: 'Global Manufacturing Inc',
      industry: 'Manufacturing',
      challenge: 'Required complete supply chain visibility and traceability for compliance and quality assurance.',
      solution: 'Implemented a blockchain-based supply chain management system with IoT integration and real-time tracking.',
      results: [
        '100% supply chain visibility',
        '70% reduction in compliance costs',
        '50% improvement in quality control',
        '35% faster issue resolution'
      ],
      technologies: ['Blockchain', 'IoT', 'Smart Contracts', 'Data Analytics'],
      duration: '10 months',
      team: '18 specialists',
      image: '/case-studies/blockchain-supply-chain.jpg',
      slug: 'blockchain-supply-chain-transparency'
    },
    {
      id: 5,
      title: 'Cloud Migration & Infrastructure Optimization',
      client: 'E-commerce Giant',
      industry: 'Retail & E-commerce',
      challenge: 'Needed to migrate legacy systems to cloud infrastructure while maintaining 99.9% uptime.',
      solution: 'Executed a comprehensive cloud migration strategy with automated scaling and disaster recovery.',
      results: [
        '99.99% uptime achievement',
        '65% reduction in infrastructure costs',
        '80% improvement in scalability',
        '50% faster deployment cycles'
      ],
      technologies: ['AWS', 'Kubernetes', 'Docker', 'CI/CD'],
      duration: '12 months',
      team: '20 specialists',
      image: '/case-studies/cloud-migration.jpg',
      slug: 'cloud-migration-infrastructure-optimization'
    },
    {
      id: 6,
      title: 'AI-Powered Cybersecurity Platform',
      client: 'Fortune 500 Corporation',
      industry: 'Technology',
      challenge: 'Required advanced threat detection and response capabilities to protect against sophisticated cyber attacks.',
      solution: 'Developed an AI-driven cybersecurity platform with real-time threat detection and automated response.',
      results: [
        '95% reduction in false positives',
        '85% faster threat detection',
        '70% improvement in incident response time',
        '60% reduction in security incidents'
      ],
      technologies: ['AI/ML', 'Cybersecurity', 'Threat Intelligence', 'Automation'],
      duration: '9 months',
      team: '14 specialists',
      image: '/case-studies/ai-cybersecurity.jpg',
      slug: 'ai-powered-cybersecurity-platform'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: TrendingUp },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '50+', label: 'Industries Served', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Clock },
  ];

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful technology implementations and see how we've helped businesses transform their operations with cutting-edge solutions."
      keywords="case studies, technology implementations, AI solutions, quantum computing, blockchain, cloud migration, cybersecurity"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Success Stories & Case Studies
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how we've helped businesses across industries transform their operations 
            with innovative technology solutions and achieve remarkable results.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-2">{study.industry}</div>
                    <div className="text-sm opacity-80">Case Study</div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {study.industry}
                    </span>
                    <div className="text-sm text-gray-500">
                      {study.duration} • {study.team}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    {study.title}
                  </h2>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Client:</h3>
                    <p className="text-gray-600">{study.client}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Challenge:</h3>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-2">Solution:</h3>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-3">Key Results:</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-2">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Success Story?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how we can help transform your business with innovative technology solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CaseStudies;