import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Calendar, 
  Users, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star,
  Award,
  Zap,
  Shield,
  Globe,
  Database,
  BarChart3,
  Lightbulb,
  Code,
  Cloud,
  Smartphone,
  Laptop,
  Server,
  Lock,
  Eye,
  Heart,
  Brain
} from 'lucide-react';
import Layout from '../components/Layout';

const caseStudies = [
  {
    id: 1,
    title: 'AI-Powered Healthcare Analytics Platform',
    client: 'MedTech Solutions',
    industry: 'Healthcare',
    duration: '6 months',
    team: '8 members',
    challenge: 'MedTech Solutions needed to analyze large volumes of patient data to identify patterns and improve treatment outcomes. Their existing system was slow, inaccurate, and couldn\'t handle the growing data volume.',
    solution: 'We developed a comprehensive AI-powered analytics platform using machine learning algorithms to process patient data, identify patterns, and provide actionable insights for healthcare providers.',
    results: [
      '95% improvement in data processing speed',
      '87% increase in diagnostic accuracy',
      '60% reduction in analysis time',
      '40% improvement in patient outcomes'
    ],
    technologies: ['Python', 'TensorFlow', 'AWS', 'React', 'PostgreSQL'],
    image: '/case-studies/healthcare-analytics.jpg',
    featured: true,
    testimonial: {
      text: 'Zion Tech Group transformed our data analysis capabilities. The AI platform they built has revolutionized how we approach patient care.',
      author: 'Dr. Sarah Johnson',
      position: 'Chief Medical Officer',
      company: 'MedTech Solutions'
    }
  },
  {
    id: 2,
    title: 'E-commerce AI Recommendation Engine',
    client: 'RetailMax',
    industry: 'E-commerce',
    duration: '4 months',
    team: '6 members',
    challenge: 'RetailMax was struggling with low conversion rates and poor customer engagement. They needed a sophisticated recommendation system to personalize the shopping experience and increase sales.',
    solution: 'We implemented a machine learning-powered recommendation engine that analyzes customer behavior, purchase history, and preferences to provide personalized product recommendations in real-time.',
    results: [
      '45% increase in conversion rates',
      '38% improvement in average order value',
      '52% increase in customer engagement',
      '25% reduction in cart abandonment'
    ],
    technologies: ['Python', 'Scikit-learn', 'Redis', 'Node.js', 'MongoDB'],
    image: '/case-studies/ecommerce-recommendations.jpg',
    featured: true,
    testimonial: {
      text: 'The recommendation engine has been a game-changer for our business. Our customers love the personalized experience.',
      author: 'Michael Chen',
      position: 'VP of Technology',
      company: 'RetailMax'
    }
  },
  {
    id: 3,
    title: 'Cloud Migration & DevOps Transformation',
    client: 'FinanceFlow',
    industry: 'Financial Services',
    duration: '8 months',
    team: '10 members',
    challenge: 'FinanceFlow needed to migrate their legacy on-premises infrastructure to the cloud while maintaining security, compliance, and performance standards. They also needed to implement modern DevOps practices.',
    solution: 'We designed and executed a comprehensive cloud migration strategy using AWS, implemented CI/CD pipelines, containerized applications with Docker and Kubernetes, and established monitoring and security best practices.',
    results: [
      '70% reduction in infrastructure costs',
      '99.9% uptime achieved',
      '50% faster deployment times',
      '100% compliance with financial regulations'
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    image: '/case-studies/cloud-migration.jpg',
    featured: false,
    testimonial: {
      text: 'The cloud migration was seamless and the new DevOps practices have transformed our development workflow.',
      author: 'Jennifer Martinez',
      position: 'CTO',
      company: 'FinanceFlow'
    }
  },
  {
    id: 4,
    title: 'Mobile App with AI Chatbot Integration',
    client: 'EduTech Pro',
    industry: 'Education',
    duration: '5 months',
    team: '7 members',
    challenge: 'EduTech Pro wanted to create a mobile learning platform with an intelligent chatbot to provide 24/7 student support and personalized learning recommendations.',
    solution: 'We developed a cross-platform mobile app with an AI-powered chatbot that uses natural language processing to understand student queries and provide helpful responses, along with personalized learning paths.',
    results: [
      '85% student satisfaction rate',
      '40% reduction in support tickets',
      '60% increase in course completion rates',
      '90% chatbot accuracy rate'
    ],
    technologies: ['React Native', 'Python', 'OpenAI GPT', 'Firebase', 'Node.js'],
    image: '/case-studies/mobile-education.jpg',
    featured: false,
    testimonial: {
      text: 'The AI chatbot has revolutionized student support. Students can get help anytime, anywhere.',
      author: 'David Thompson',
      position: 'Head of Product',
      company: 'EduTech Pro'
    }
  },
  {
    id: 5,
    title: 'IoT Data Analytics Platform',
    client: 'SmartManufacturing Inc',
    industry: 'Manufacturing',
    duration: '7 months',
    team: '9 members',
    challenge: 'SmartManufacturing needed to collect, process, and analyze data from thousands of IoT sensors across their manufacturing facilities to optimize production and predict maintenance needs.',
    solution: 'We built a comprehensive IoT data analytics platform that collects real-time data from sensors, processes it using machine learning algorithms, and provides predictive analytics for maintenance and optimization.',
    results: [
      '30% reduction in downtime',
      '25% improvement in production efficiency',
      '50% reduction in maintenance costs',
      '95% accuracy in failure predictions'
    ],
    technologies: ['Python', 'Apache Kafka', 'InfluxDB', 'Grafana', 'TensorFlow'],
    image: '/case-studies/iot-manufacturing.jpg',
    featured: true,
    testimonial: {
      text: 'The IoT platform has transformed our manufacturing operations. We can now predict and prevent issues before they occur.',
      author: 'Robert Kim',
      position: 'Operations Director',
      company: 'SmartManufacturing Inc'
    }
  },
  {
    id: 6,
    title: 'Cybersecurity AI Threat Detection',
    client: 'SecureBank',
    industry: 'Banking',
    duration: '6 months',
    team: '8 members',
    challenge: 'SecureBank needed an advanced cybersecurity solution to detect and prevent sophisticated cyber threats in real-time, as their existing security measures were insufficient against modern attacks.',
    solution: 'We developed an AI-powered threat detection system that uses machine learning to analyze network traffic, user behavior, and system logs to identify and respond to potential security threats automatically.',
    results: [
      '99.5% threat detection accuracy',
      '80% reduction in false positives',
      '90% faster threat response time',
      'Zero successful breaches since implementation'
    ],
    technologies: ['Python', 'TensorFlow', 'Elasticsearch', 'Kibana', 'AWS'],
    image: '/case-studies/cybersecurity.jpg',
    featured: false,
    testimonial: {
      text: 'The AI threat detection system has significantly enhanced our security posture. We feel much more protected now.',
      author: 'Lisa Wang',
      position: 'CISO',
      company: 'SecureBank'
    }
  }
];

const industries = [
  { name: 'All Industries', count: caseStudies.length },
  { name: 'Healthcare', count: caseStudies.filter(cs => cs.industry === 'Healthcare').length },
  { name: 'E-commerce', count: caseStudies.filter(cs => cs.industry === 'E-commerce').length },
  { name: 'Financial Services', count: caseStudies.filter(cs => cs.industry === 'Financial Services').length },
  { name: 'Education', count: caseStudies.filter(cs => cs.industry === 'Education').length },
  { name: 'Manufacturing', count: caseStudies.filter(cs => cs.industry === 'Manufacturing').length },
  { name: 'Banking', count: caseStudies.filter(cs => cs.industry === 'Banking').length }
];

const stats = [
  { label: 'Projects Completed', value: '150+', icon: CheckCircle },
  { label: 'Client Satisfaction', value: '98%', icon: Star },
  { label: 'Average ROI', value: '340%', icon: TrendingUp },
  { label: 'Years Experience', value: '5+', icon: Award }
];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const filteredCaseStudies = selectedIndustry === 'All Industries' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Studies
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Real-world success stories showcasing our expertise in AI, cloud, and technology solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-blue-600 mb-4">
                    <stat.icon className="w-12 h-12 mx-auto" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Filter by Industry
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <button
                  key={industry.name}
                  onClick={() => setSelectedIndustry(industry.name)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedIndustry === industry.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {industry.name} ({industry.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations with cutting-edge technology
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {caseStudy.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {caseStudy.client}
                          </div>
                          <div className="flex items-center gap-1">
                            <Target className="w-4 h-4" />
                            {caseStudy.industry}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {caseStudy.duration}
                          </div>
                        </div>
                      </div>
                      {caseStudy.featured && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 mb-6">
                      {caseStudy.challenge}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {caseStudy.results.slice(0, 4).map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseStudy.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedCase(selectedCase === caseStudy.id ? null : caseStudy.id)}
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        {selectedCase === caseStudy.id ? 'Hide Details' : 'View Details'}
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Detailed View */}
                  {selectedCase === caseStudy.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 p-6 bg-gray-50"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Solution</h4>
                          <p className="text-gray-700 mb-6">
                            {caseStudy.solution}
                          </p>

                          <h4 className="font-semibold text-gray-900 mb-3">All Results</h4>
                          <ul className="space-y-2">
                            {caseStudy.results.map((result, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Client Testimonial</h4>
                          <blockquote className="bg-white p-4 rounded-lg border-l-4 border-blue-500 mb-4">
                            <p className="text-gray-700 italic mb-3">
                              "{caseStudy.testimonial.text}"
                            </p>
                            <div className="text-sm text-gray-600">
                              <div className="font-semibold">{caseStudy.testimonial.author}</div>
                              <div>{caseStudy.testimonial.position}, {caseStudy.testimonial.company}</div>
                            </div>
                          </blockquote>

                          <h4 className="font-semibold text-gray-900 mb-3">Project Details</h4>
                          <div className="space-y-2 text-sm text-gray-700">
                            <div className="flex justify-between">
                              <span>Duration:</span>
                              <span>{caseStudy.duration}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Team Size:</span>
                              <span>{caseStudy.team}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Industry:</span>
                              <span>{caseStudy.industry}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No case studies found</h3>
                <p className="text-gray-600">
                  We don't have any case studies in this industry yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's work together to create innovative solutions that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Project
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}