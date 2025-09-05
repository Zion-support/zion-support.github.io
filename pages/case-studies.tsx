import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Calendar, 
  User, 
  Building,
  TrendingUp,
  Shield,
  Cloud,
  Brain
} from 'lucide-react';
import Layout from '../components/Layout';

const caseStudies = [
  {
    id: 1,
    title: 'Healthcare AI Transformation',
    client: 'Regional Medical Center',
    industry: 'Healthcare',
    challenge: 'Improve patient diagnosis accuracy and reduce wait times',
    solution: 'Implemented AI-powered diagnostic tools and automated patient triage system',
    results: [
      '40% reduction in diagnosis time',
      '25% improvement in accuracy',
      '60% decrease in patient wait times',
      '95% patient satisfaction rate'
    ],
    technologies: ['Machine Learning', 'Computer Vision', 'Natural Language Processing'],
    duration: '6 months',
    teamSize: '8 developers',
    image: '/case-studies/healthcare-ai.jpg',
    icon: Brain
  },
  {
    id: 2,
    title: 'Financial Services Cloud Migration',
    client: 'Premier Bank',
    industry: 'Finance',
    challenge: 'Migrate legacy systems to cloud while maintaining security compliance',
    solution: 'Designed and implemented secure cloud infrastructure with zero-downtime migration',
    results: [
      '99.9% uptime achieved',
      '50% reduction in infrastructure costs',
      '3x faster application deployment',
      '100% compliance with financial regulations'
    ],
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
    duration: '8 months',
    teamSize: '12 developers',
    image: '/case-studies/finance-cloud.jpg',
    icon: Cloud
  },
  {
    id: 3,
    title: 'Manufacturing IoT Integration',
    client: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    challenge: 'Implement IoT sensors for predictive maintenance and quality control',
    solution: 'Deployed comprehensive IoT platform with real-time monitoring and analytics',
    results: [
      '30% reduction in equipment downtime',
      '20% improvement in product quality',
      '15% increase in production efficiency',
      'ROI of 250% within first year'
    ],
    technologies: ['IoT', 'Edge Computing', 'Time Series Analytics', 'Machine Learning'],
    duration: '10 months',
    teamSize: '10 developers',
    image: '/case-studies/manufacturing-iot.jpg',
    icon: TrendingUp
  },
  {
    id: 4,
    title: 'E-commerce Security Enhancement',
    client: 'RetailTech Solutions',
    industry: 'Retail',
    challenge: 'Strengthen security posture and prevent data breaches',
    solution: 'Implemented comprehensive cybersecurity framework with real-time threat detection',
    results: [
      'Zero security incidents in 12 months',
      '99.8% threat detection accuracy',
      '50% reduction in false positives',
      'SOC 2 Type II compliance achieved'
    ],
    technologies: ['Cybersecurity', 'SIEM', 'Machine Learning', 'Blockchain'],
    duration: '4 months',
    teamSize: '6 developers',
    image: '/case-studies/retail-security.jpg',
    icon: Shield
  }
];

const industries = [
  { name: 'All', count: caseStudies.length },
  { name: 'Healthcare', count: caseStudies.filter(cs => cs.industry === 'Healthcare').length },
  { name: 'Finance', count: caseStudies.filter(cs => cs.industry === 'Finance').length },
  { name: 'Manufacturing', count: caseStudies.filter(cs => cs.industry === 'Manufacturing').length },
  { name: 'Retail', count: caseStudies.filter(cs => cs.industry === 'Retail').length }
];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = React.useState('All');

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <Layout 
      title="Case Studies - Zion Tech Group"
      description="Explore our success stories and see how we've helped businesses across industries achieve their technology goals."
      keywords="case studies, success stories, technology solutions, AI implementation, cloud migration, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Discover how we've helped businesses across industries achieve their technology goals and drive growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {industries.map((industry) => (
                <button
                  key={industry.name}
                  onClick={() => setSelectedIndustry(industry.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedIndustry === industry.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {industry.name} ({industry.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredCaseStudies.map((caseStudy, index) => {
                const IconComponent = caseStudy.icon;
                return (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Header */}
                    <div className="p-8 border-b border-gray-200">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {caseStudy.title}
                            </h3>
                            <p className="text-gray-600">{caseStudy.client}</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {caseStudy.industry}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {caseStudy.duration}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {caseStudy.teamSize}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{caseStudy.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{caseStudy.solution}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Results</h4>
                        <ul className="space-y-2">
                          {caseStudy.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={`/case-studies/${caseStudy.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-transform"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Building className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
                <p className="text-gray-600">Try selecting a different industry.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let us help you achieve similar results with our proven technology solutions and expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}