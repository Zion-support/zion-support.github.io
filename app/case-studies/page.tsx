import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, CheckCircle } from 'lucide-react';

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
        '85% reduction in response time',
        '92% customer satisfaction rate',
        '60% cost reduction in support operations',
        '24/7 multilingual support capability'
      ],
      technologies: ['AI/ML', 'NLP', 'Cloud Computing', 'API Integration']
    },
    {
      id: '2',
      title: 'Cloud Migration & Infrastructure Modernization',
      client: 'Financial Services Leader',
      industry: 'Finance',
      duration: '8 months',
      challenge: 'Legacy on-premise infrastructure limiting scalability and increasing maintenance costs.',
      solution: 'Complete cloud migration with microservices architecture and automated CI/CD pipelines.',
      results: [
        '99.9% uptime achieved',
        '70% reduction in infrastructure costs',
        '5x faster deployment cycles',
        'Enhanced security compliance'
      ],
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins']
    },
    {
      id: '3',
      title: 'Cybersecurity Enhancement & Compliance',
      client: 'Healthcare Provider',
      industry: 'Healthcare',
      duration: '4 months',
      challenge: 'Need to meet HIPAA compliance and protect sensitive patient data from cyber threats.',
      solution: 'Comprehensive security framework with zero-trust architecture and advanced threat detection.',
      results: [
        '100% HIPAA compliance achieved',
        'Zero security incidents',
        'Real-time threat monitoring',
        'Automated compliance reporting'
      ],
      technologies: ['Zero Trust', 'SIEM', 'Endpoint Protection', 'Encryption']
    }
  ];

  const industries = [
    'All Industries',
    'E-commerce',
    'Finance',
    'Healthcare',
    'Manufacturing',
    'Education',
    'Technology',
    'Energy'
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful technology implementations and client success stories" />
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
                Discover how we've helped businesses transform their operations with cutting-edge technology solutions
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {industries.map(industry => (
                <button
                  key={industry}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map(caseStudy => (
                <div key={caseStudy.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                        {caseStudy.industry}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {caseStudy.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {caseStudy.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      <strong>Client:</strong> {caseStudy.client}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Challenge
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {caseStudy.solution}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/case-studies/${caseStudy.id}`}
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
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Us
                <Globe className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
