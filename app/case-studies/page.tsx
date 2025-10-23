import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, CheckCircle } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high customer acquisition costs',
      solution: 'AI-powered personalization and dynamic pricing optimization',
      results: {
        roi: '340%',
        conversion: '+85%',
        costReduction: '-65%',
        revenue: '+$2.3M'
      },
      image: '🛒',
      description: 'Transformed a struggling e-commerce platform using AI-driven personalization and dynamic pricing strategies.'
    },
    {
      id: 2,
      title: 'Financial Services Automation',
      company: 'FinTech Solutions',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors in loan processing',
      solution: 'AI-powered document processing and risk assessment automation',
      results: {
        roi: '280%',
        processingTime: '-80%',
        accuracy: '+95%',
        costSavings: '$1.8M'
      },
      image: '🏦',
      description: 'Automated complex financial processes using advanced AI algorithms for document processing and risk assessment.'
    },
    {
      id: 3,
      title: 'Healthcare Data Analytics',
      company: 'MedTech Innovations',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'AI-powered data integration and predictive analytics for treatment optimization',
      results: {
        roi: '420%',
        patientOutcomes: '+70%',
        efficiency: '+90%',
        costSavings: '$3.2M'
      },
      image: '🏥',
      description: 'Revolutionized healthcare data management with AI-driven analytics and predictive treatment models.'
    },
    {
      id: 4,
      title: 'Manufacturing Optimization',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues',
      solution: 'AI-powered predictive maintenance and quality control automation',
      results: {
        roi: '310%',
        efficiency: '+75%',
        defects: '-90%',
        downtime: '-85%'
      },
      image: '🏭',
      description: 'Optimized manufacturing processes using AI for predictive maintenance and automated quality control.'
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <ArrowLeft>Back to Home
            </ArrowLeft>Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1>Success Stories
              </h1>
              <p>Real results from real companies using our AI solutions
              </p>
              <p>Discover how leading companies across industries have transformed their operations 
                and achieved remarkable ROI with our cutting-edge AI technology.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div>{study.image}</div>
                      <div>
                        <h3>{study.title}</h3>
                        <p>{study.company}</p>
                        <p>{study.industry}</p>
                      </div>
                    </div>

                    <p>{study.description}</p>

                    <div className="mb-6">
                      <h4>Challenge:</h4>
                      <p>{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4>Solution:</h4>
                      <p>{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4>Results:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div>{study.results.roi}</div>
                          <div>ROI</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div>{Object.values(study.results)[1]}
                          </div>
                          <div>{Object.keys(study.results)[1].replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link>Learn More
                      </Link>
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        <span>Verified Results</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2>Proven Track Record
              </h2>
              <p>Our AI solutions deliver consistent, measurable results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div>300%+</div>
                <div>Average ROI</div>
              </div>
              <div className="text-center">
                <div>150+</div>
                <div>Projects Completed</div>
              </div>
              <div className="text-center">
                <div>95%</div>
                <div>Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div>$50M+</div>
                <div>Cost Savings Generated</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2>Ready to Create Your Success Story?
            </h2>
            <p>Join the companies that have transformed their business with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Start Your Project
                <TrendingUp> </TrendingUp>Link>
              <Link>View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;