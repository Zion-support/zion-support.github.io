import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Star, Globe, Shield, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

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
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins']
    },
    {
      id: '3',
      title: 'Predictive Analytics for Supply Chain Optimization',
      client: 'Manufacturing Corporation',
      industry: 'Manufacturing',
      duration: '4 months',
      challenge: 'Inefficient inventory management leading to stockouts and excess inventory costs.',
      solution: 'Deployed machine learning models for demand forecasting and inventory optimization.',
      results: [
        '40% reduction in inventory costs',
        '95% forecast accuracy',
        '30% improvement in order fulfillment',
        'Real-time supply chain visibility'
      ],
      technologies: ['Machine Learning', 'Python', 'Apache Spark', 'Tableau']
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "99.9%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Industries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "E-commerce",
    "Manufacturing",
    "Education",
    "Technology",
    "Energy"
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

        {/* Stats Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {study.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      <strong>Client:</strong> {study.client}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm">
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

        {/* Industries Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {industries.map((industry) => (
                <div key={industry} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-center font-medium">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudiesPage;
