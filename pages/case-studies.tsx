import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Users,
  Building,
  Cloud,
  Shield,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 'ai-healthcare-transformation',
      title: 'AI-Powered Healthcare Transformation',
      client: 'MedTech Solutions Inc.',
      industry: 'Healthcare',
      challenge: 'Manual patient data analysis was taking 40+ hours per week, leading to delayed diagnoses and treatment plans.',
      solution: 'Implemented our AI-powered medical data analysis platform with computer vision for imaging and NLP for patient records.',
      results: [
        'Reduced analysis time by 85% (from 40 hours to 6 hours per week)',
        'Improved diagnostic accuracy by 30%',
        'Saved $2.3M annually in operational costs',
        'Enhanced patient satisfaction scores by 45%'
      ],
      duration: '6 months',
      investment: '$450,000',
      roi: '410%',
      technologies: ['Machine Learning', 'Computer Vision', 'NLP', 'Cloud Computing'],
      image: '/case-studies/healthcare-ai.jpg'
    },
    {
      id: 'fintech-automation',
      title: 'Financial Services Automation Platform',
      client: 'Global Finance Corp',
      industry: 'Financial Services',
      challenge: 'Manual loan processing and risk assessment was causing 2-week delays and high error rates.',
      solution: 'Deployed our AI-driven loan processing system with automated risk assessment and fraud detection.',
      results: [
        'Reduced loan processing time from 14 days to 2 days',
        'Decreased error rates by 92%',
        'Processed 300% more applications with same staff',
        'Achieved 99.7% fraud detection accuracy'
      ],
      duration: '4 months',
      investment: '$320,000',
      roi: '580%',
      technologies: ['AI/ML', 'Blockchain', 'API Integration', 'Security'],
      image: '/case-studies/fintech-automation.jpg'
    },
    {
      id: 'manufacturing-iot',
      title: 'Smart Manufacturing IoT Integration',
      client: 'Industrial Dynamics Ltd',
      industry: 'Manufacturing',
      challenge: 'Equipment downtime was causing $1.2M monthly losses due to reactive maintenance approaches.',
      solution: 'Implemented IoT sensors and AI-powered predictive maintenance system across all production lines.',
      results: [
        'Reduced equipment downtime by 65%',
        'Saved $1.8M annually in maintenance costs',
        'Increased production efficiency by 28%',
        'Prevented 95% of unplanned equipment failures'
      ],
      duration: '8 months',
      investment: '$680,000',
      roi: '265%',
      technologies: ['IoT', 'Predictive Analytics', 'Edge Computing', 'Cloud Platform'],
      image: '/case-studies/manufacturing-iot.jpg'
    },
    {
      id: 'retail-personalization',
      title: 'AI-Powered Retail Personalization',
      client: 'Fashion Forward Retail',
      industry: 'Retail',
      challenge: 'Low customer engagement and high cart abandonment rates (78%) due to generic shopping experience.',
      solution: 'Deployed AI-powered recommendation engine and personalized marketing automation platform.',
      results: [
        'Reduced cart abandonment by 45%',
        'Increased average order value by 35%',
        'Improved customer retention by 60%',
        'Generated $4.2M additional revenue in first year'
      ],
      duration: '5 months',
      investment: '$280,000',
      roi: '1,400%',
      technologies: ['Machine Learning', 'Recommendation Engine', 'Marketing Automation', 'Analytics'],
      image: '/case-studies/retail-personalization.jpg'
    },
    {
      id: 'logistics-optimization',
      title: 'Supply Chain Optimization Platform',
      client: 'Global Logistics Network',
      industry: 'Logistics',
      challenge: 'Inefficient route planning and inventory management was causing 25% higher operational costs.',
      solution: 'Implemented AI-powered logistics optimization system with real-time tracking and predictive analytics.',
      results: [
        'Reduced transportation costs by 30%',
        'Improved delivery times by 40%',
        'Optimized inventory levels, reducing carrying costs by 35%',
        'Achieved 99.2% on-time delivery rate'
      ],
      duration: '7 months',
      investment: '$520,000',
      roi: '320%',
      technologies: ['AI Optimization', 'Real-time Analytics', 'GPS Tracking', 'Cloud Computing'],
      image: '/case-studies/logistics-optimization.jpg'
    },
    {
      id: 'education-platform',
      title: 'AI-Enhanced Learning Management System',
      client: 'EduTech University',
      industry: 'Education',
      challenge: 'Low student engagement and poor learning outcomes due to one-size-fits-all teaching approach.',
      solution: 'Developed personalized learning platform with AI tutoring and adaptive content delivery.',
      results: [
        'Improved student engagement by 70%',
        'Increased course completion rates by 55%',
        'Enhanced learning outcomes by 45%',
        'Reduced instructor workload by 40%'
      ],
      duration: '9 months',
      investment: '$380,000',
      roi: '280%',
      technologies: ['AI Tutoring', 'Adaptive Learning', 'NLP', 'Analytics'],
      image: '/case-studies/education-platform.jpg'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '350%', label: 'Average ROI' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <Layout 
      title="Case Studies - Zion Tech Group" 
      description="Explore our successful technology implementations and digital transformation projects across various industries."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Success Stories
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                  Discover how we've helped businesses across industries transform their operations 
                  and achieve remarkable results with our technology solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real projects, real results. See how our technology solutions have transformed businesses.
              </p>
            </div>
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                          <Building className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                          <p className="text-gray-600">{study.client} • {study.industry}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Results</h4>
                          <ul className="space-y-1">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-gray-600">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <Clock className="h-4 w-4 text-blue-600 mr-2" />
                            <span className="text-sm font-medium text-gray-900">Duration</span>
                          </div>
                          <p className="text-lg font-semibold text-gray-900">{study.duration}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <DollarSign className="h-4 w-4 text-green-600 mr-2" />
                            <span className="text-sm font-medium text-gray-900">Investment</span>
                          </div>
                          <p className="text-lg font-semibold text-gray-900">{study.investment}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <TrendingUp className="h-4 w-4 text-purple-600 mr-2" />
                            <span className="text-sm font-medium text-gray-900">ROI</span>
                          </div>
                          <p className="text-lg font-semibold text-gray-900">{study.roi}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <Award className="h-4 w-4 text-yellow-600 mr-2" />
                            <span className="text-sm font-medium text-gray-900">Industry</span>
                          </div>
                          <p className="text-lg font-semibold text-gray-900">{study.industry}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Link 
                        href="/contact"
                        className="inline-flex items-center w-full justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Start Your Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our technology solutions can transform your business 
                and help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/services" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CaseStudiesPage;