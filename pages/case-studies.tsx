import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  ExternalLink,
  Building,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  Users
} from 'lucide-react';

const caseStudies = [
  {
    title: 'AI-Powered Customer Service Transformation',
    client: 'TechCorp Inc.',
    industry: 'Technology',
    duration: '6 months',
    challenge: 'High customer service costs and long response times',
    solution: 'Implemented AI chatbot and email responder system',
    results: [
      'Reduced response time by 80%',
      'Cut customer service costs by 60%',
      'Improved customer satisfaction by 45%'
    ],
    image: '/case-studies/techcorp.jpg',
    tags: ['AI', 'Customer Service', 'Automation']
  },
  {
    title: 'Predictive Analytics for E-commerce',
    client: 'ShopSmart Retail',
    industry: 'Retail',
    duration: '4 months',
    challenge: 'Low conversion rates and high cart abandonment',
    solution: 'Built predictive analytics platform for personalized recommendations',
    results: [
      'Increased conversion rates by 35%',
      'Reduced cart abandonment by 50%',
      'Boosted revenue by 40%'
    ],
    image: '/case-studies/shopsmart.jpg',
    tags: ['Analytics', 'E-commerce', 'Machine Learning']
  },
  {
    title: 'Healthcare AI Diagnostic System',
    client: 'MedCenter Hospital',
    industry: 'Healthcare',
    duration: '8 months',
    challenge: 'Slow diagnostic processes and human error in medical imaging',
    solution: 'Developed AI-powered medical imaging analysis system',
    results: [
      'Reduced diagnostic time by 70%',
      'Improved accuracy by 25%',
      'Enabled early detection of diseases'
    ],
    image: '/case-studies/medcenter.jpg',
    tags: ['Healthcare', 'AI', 'Medical Imaging']
  },
  {
    title: 'Financial Fraud Detection Platform',
    client: 'SecureBank',
    industry: 'Finance',
    duration: '5 months',
    challenge: 'Increasing fraud cases and manual detection processes',
    solution: 'Created AI-powered fraud detection and prevention system',
    results: [
      'Detected 95% of fraudulent transactions',
      'Reduced false positives by 80%',
      'Saved $2M in prevented fraud'
    ],
    image: '/case-studies/securebank.jpg',
    tags: ['Finance', 'Security', 'AI']
  },
  {
    title: 'Manufacturing Quality Control AI',
    client: 'AutoParts Manufacturing',
    industry: 'Manufacturing',
    duration: '6 months',
    challenge: 'Manual quality control processes and high defect rates',
    solution: 'Implemented computer vision system for automated quality control',
    results: [
      'Reduced defect rate by 90%',
      'Increased production efficiency by 30%',
      'Cut quality control costs by 75%'
    ],
    image: '/case-studies/autoparts.jpg',
    tags: ['Manufacturing', 'Computer Vision', 'Quality Control']
  },
  {
    title: 'Smart City Traffic Management',
    client: 'City of Innovation',
    industry: 'Government',
    duration: '12 months',
    challenge: 'Traffic congestion and inefficient traffic light management',
    solution: 'Developed AI-powered traffic optimization system',
    results: [
      'Reduced traffic congestion by 40%',
      'Improved traffic flow by 50%',
      'Reduced emissions by 25%'
    ],
    image: '/case-studies/smartcity.jpg',
    tags: ['Smart City', 'AI', 'Traffic Management']
  }
];

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and technology implementations across various industries. See how we've helped businesses transform with our solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case <span className="text-blue-600">Studies</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses across various industries transform 
                their operations with our AI and technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <Building className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    <div className="space-y-2 mb-4">
                      {study.results.slice(0, 2).map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {result}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our AI and technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}