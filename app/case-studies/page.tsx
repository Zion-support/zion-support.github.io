import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Globe, CheckCircle, Clock } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

const CaseStudiesPage = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Customer Service Transformation',
      client: 'Global E-commerce Giant',
      industry: 'E-commerce',
      duration: '6 months',
      challenge: 'High customer service volume with inconsistent response quality and long wait times.',
      solution: 'Implemented AI-powered chatbots and intelligent routing system with natural language processing.',
      results: [
        '75% reduction in response time',
        '90% customer satisfaction rate',
        '60% cost reduction in support operations',
        '24/7 multilingual support capability'
      ],
      technologies: ['Python', 'TensorFlow', 'NLP', 'AWS', 'React']
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Migration',
      client: 'Financial Services Company',
      industry: 'Finance',
      duration: '8 months',
      challenge: 'Legacy on-premises infrastructure causing scalability issues and high maintenance costs.',
      solution: 'Complete migration to cloud-native architecture with microservices and containerization.',
      results: [
        '99.9% uptime achieved',
        '50% reduction in infrastructure costs',
        '3x faster deployment cycles',
        'Enhanced security and compliance'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Node.js']
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement Program',
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      duration: '4 months',
      challenge: 'Increasing cyber threats and need for HIPAA compliance with existing vulnerable systems.',
      solution: 'Comprehensive security audit and implementation of multi-layered security framework.',
      results: [
        'Zero security breaches post-implementation',
        '100% HIPAA compliance achieved',
        'Real-time threat detection and response',
        'Employee security training program'
      ],
      technologies: ['SIEM', 'Firewall', 'Encryption', 'IAM', 'Security Analytics']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful projects and client transformations" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Real-world solutions that drive business success
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map(study => (
                <div key={study.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span>{study.client}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {study.solution}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;