import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform AI Optimization',
      client: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high cart abandonment',
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',
      results: [
        { metric: 'Conversion Rate', value: '+45%', icon: ArrowTrendingUpIcon },
        { metric: 'Cart Abandonment', value: '-30%', icon: ArrowTrendingUpIcon },
        { metric: 'Customer Satisfaction', value: '+60%', icon: UserGroupIcon },
        { metric: 'Implementation Time', value: '3 months', icon: ClockIcon }
      ],
      description: 'We helped TechRetail Inc. transform their e-commerce platform with AI-powered personalization, resulting in significant improvements in conversion rates and customer satisfaction.',
      image: '/images/case-studies/ecommerce-ai.jpg'
    },
    {
      title: 'Manufacturing Process Automation',
      client: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes causing delays and errors',
      solution: 'Deployed computer vision and machine learning for automated quality inspection',
      results: [
        { metric: 'Quality Defects', value: '-75%', icon: ArrowTrendingUpIcon },
        { metric: 'Processing Speed', value: '+200%', icon: ArrowTrendingUpIcon },
        { metric: 'Cost Savings', value: '$2.5M/year', icon: CurrencyDollarIcon },
        { metric: 'Implementation Time', value: '4 months', icon: ClockIcon }
      ],
      description: 'Our AI-powered quality control system revolutionized AutoParts Manufacturing\'s production line, dramatically reducing defects while increasing throughput.',
      image: '/images/case-studies/manufacturing-ai.jpg'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'Built comprehensive data analytics platform with predictive modeling',
      results: [
        { metric: 'Treatment Accuracy', value: '+40%', icon: ArrowTrendingUpIcon },
        { metric: 'Patient Outcomes', value: '+35%', icon: UserGroupIcon },
        { metric: 'Cost Reduction', value: '$1.8M/year', icon: CurrencyDollarIcon },
        { metric: 'Implementation Time', value: '6 months', icon: ClockIcon }
      ],
      description: 'MediCare Systems now leverages our advanced analytics platform to provide better patient care through data-driven insights and predictive modeling.',
      image: '/images/case-studies/healthcare-analytics.jpg'
    },
    {
      title: 'Financial Services Cloud Migration',
      client: 'SecureBank Ltd.',
      industry: 'Financial Services',
      challenge: 'Legacy systems limiting scalability and innovation',
      solution: 'Complete cloud migration with modern microservices architecture',
      results: [
        { metric: 'System Performance', value: '+300%', icon: ArrowTrendingUpIcon },
        { metric: 'Scalability', value: '10x', icon: ArrowTrendingUpIcon },
        { metric: 'Operational Costs', value: '-40%', icon: CurrencyDollarIcon },
        { metric: 'Implementation Time', value: '8 months', icon: ClockIcon }
      ],
      description: 'SecureBank Ltd. successfully migrated to the cloud, achieving unprecedented scalability and performance while reducing operational costs.',
      image: '/images/case-studies/cloud-migration.jpg'
    },
    {
      title: 'Cybersecurity Threat Detection System',
      client: 'GlobalTech Corp',
      industry: 'Technology',
      challenge: 'Increasing cyber threats and manual security monitoring',
      solution: 'Implemented AI-powered threat detection and automated response system',
      results: [
        { metric: 'Threat Detection', value: '+90%', icon: ArrowTrendingUpIcon },
        { metric: 'Response Time', value: '-85%', icon: ClockIcon },
        { metric: 'False Positives', value: '-60%', icon: ArrowTrendingUpIcon },
        { metric: 'Implementation Time', value: '5 months', icon: ClockIcon }
      ],
      description: 'GlobalTech Corp now has a robust cybersecurity system that automatically detects and responds to threats in real-time, significantly improving their security posture.',
      image: '/images/case-studies/cybersecurity.jpg'
    },
    {
      title: 'Micro SaaS Development Platform',
      client: 'StartupHub Inc.',
      industry: 'SaaS',
      challenge: 'Need for rapid development and deployment of micro applications',
      solution: 'Built custom micro SaaS development platform with automated deployment',
      results: [
        { metric: 'Development Speed', value: '+400%', icon: ArrowTrendingUpIcon },
        { metric: 'Time to Market', value: '-70%', icon: ClockIcon },
        { metric: 'Cost per App', value: '-80%', icon: CurrencyDollarIcon },
        { metric: 'Implementation Time', value: '6 months', icon: ClockIcon }
      ],
      description: 'StartupHub Inc. can now rapidly develop and deploy micro SaaS applications, reducing time to market and development costs significantly.',
      image: '/images/case-studies/micro-saas.jpg'
    }
  ];

  const industries = [
    { name: 'E-commerce', count: 15, icon: '🛒' },
    { name: 'Manufacturing', count: 12, icon: '🏭' },
    { name: 'Healthcare', count: 18, icon: '🏥' },
    { name: 'Financial Services', count: 10, icon: '🏦' },
    { name: 'Technology', count: 20, icon: '💻' },
    { name: 'SaaS', count: 8, icon: '☁️' }
  ];

  const stats = [
    { number: '100+', label: 'Successful Projects' },
    { number: '50+', label: 'Happy Clients' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '4.9/5', label: 'Average Rating' }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies showcasing AI and IT solutions that transformed businesses across various industries." />
        <meta name="keywords" content="case studies, success stories, AI implementation, IT solutions, business transformation, client results" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries transform 
              their operations with cutting-edge AI and IT solutions.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-2">{industry.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.count} projects</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Featured Case Studies
            </h2>
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                          {study.industry}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Client: {study.client}</h4>
                        <p className="text-gray-600 mb-4">{study.description}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="p-8 bg-gray-50">
                      <h4 className="text-lg font-semibold text-gray-900 mb-6">Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-white rounded-lg p-4 text-center shadow-sm">
                            <result.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-gray-900 mb-1">{result.value}</div>
                            <div className="text-sm text-gray-600">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Zion Tech Group transformed our e-commerce platform with AI solutions. 
                  Our conversion rates increased by 45% and customer satisfaction improved dramatically."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <UserGroupIcon className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">CTO, TechRetail Inc.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The AI-powered quality control system revolutionized our manufacturing process. 
                  We reduced defects by 75% while increasing throughput by 200%."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <UserGroupIcon className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                    <p className="text-sm text-gray-600">CEO, AutoParts Manufacturing</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The cloud migration was seamless and exceeded our expectations. 
                  We achieved 300% performance improvement while reducing costs by 40%."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <UserGroupIcon className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emily Rodriguez</h4>
                    <p className="text-sm text-gray-600">CTO, SecureBank Ltd.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let us help you achieve similar results with our proven AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CaseStudiesPage;