import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import Link from 'next/link',
import Layout from '../components/Layout',
import {,
  ArrowRight,;
  CheckCircle,;
  BarChart3,;
  Cloud,;
  Shield,;
  Users,;
  TrendingUp,;
  Clock,;
  Target,;
  Zap,;
  Globe,;
  Database,
} from 'lucide-react',
,
const caseStudies = [,
  {,
    id: 1,;
    title: 'AI-Powered E-commerce Platform',;
    client: 'TechRetail Inc.',;
    industry: 'E-commerce',;
    duration: '6 months',;
    team: '8 developers',;
    challenge: 'TechRetail needed to modernize their legacy e-commerce platform and implement AI-powered recommendations to increase sales and improve user experience.',;
    solution: 'We developed a modern React-based platform with machine learning algorithms for product recommendations, personalized search, and dynamic pricing.',;
    results: [,
      '45% increase in conversion rates',;
      '60% improvement in page load times',;
      '35% boost in average order value',;
      '50% reduction in cart abandonment',
    ],;
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL'],;
    image: '/case-studies/techretail.jpg',;
    icon: BarChart3,
  ,},;
  {,
    id: 2,;
    title: 'Healthcare Data Analytics Platform',;
    client: 'MediCare Solutions',;
    industry: 'Healthcare',;
    duration: '8 months',;
    team: '12 developers',;
    challenge: 'MediCare needed a secure platform to analyze patient data and provide insights for better healthcare outcomes while maintaining HIPAA compliance.',;
    solution: 'We built a comprehensive data analytics platform with advanced security measures, real-time dashboards, and predictive analytics for patient care.',;
    results: [,
      '30% improvement in patient outcomes',;
      '40% reduction in operational costs',;
      '99.9% uptime achieved',;
      'Full HIPAA compliance maintained',
    ],;
    technologies: ['Python', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],;
    image: '/case-studies/medicare.jpg',;
    icon: Shield,
  ,},;
  {,
    id: 3,;
    title: 'Financial Services Automation',;
    client: 'FinTech Global',;
    industry: 'Finance',;
    duration: '10 months',;
    team: '15 developers',;
    challenge: 'FinTech Global required a complete digital transformation of their financial services platform with advanced fraud detection and automated compliance reporting.',;
    solution: 'We developed a comprehensive fintech platform with AI-powered fraud detection, automated compliance workflows, and real-time transaction monitoring.',;
    results: [,
      '80% reduction in fraud cases',;
      '70% faster compliance reporting',;
      '90% improvement in transaction processing speed',;
      '50% reduction in manual errors',
    ],;
    technologies: ['Java', 'Spring Boot', 'React', 'MongoDB', 'Apache Kafka', 'AWS'],;
    image: '/case-studies/fintech.jpg',;
    icon: TrendingUp,
  ,},;
  {,
    id: 4,;
    title: 'Manufacturing IoT Integration',;
    client: 'Industrial Corp',;
    industry: 'Manufacturing',;
    duration: '7 months',;
    team: '10 developers',;
    challenge: 'Industrial Corp needed to integrate IoT sensors across their manufacturing facilities to monitor equipment performance and predict maintenance needs.',;
    solution: 'We implemented a comprehensive IoT solution with real-time monitoring, predictive maintenance algorithms, and centralized dashboard for facility management.',;
    results: [,
      '25% reduction in equipment downtime',;
      '35% improvement in maintenance efficiency',;
      '20% increase in overall productivity',;
      '60% reduction in unexpected failures',
    ],;
    technologies: ['Python', 'React', 'InfluxDB', 'MQTT', 'Docker', 'Azure IoT'],;
    image: '/case-studies/industrial.jpg',;
    icon: Cloud,
  ,};
],
,
const stats = [,
  { number: '150+', label: 'Projects Completed' ,},;
  { number: '98%', label: 'Client Satisfaction' ,},;
  { number: '50+', label: 'Industries Served' ,},;
  { number: '5+', label: 'Years Experience' ,};
],
,
export default function CaseStudies() {,
  return (,
    <Layout,
      title="Case Studies - Zion Tech Group",
      description="Explore our successful projects and see how we've helped businesses transform with AI, cloud solutions, and custom development.",
      keywords="case studies, success stories, AI projects, cloud solutions, custom development, business transformation",
    >,
      <Head>,
        <title>Case Studies - Zion Tech Group</title>,
        <meta name="description" content="Explore our successful projects and see how we've helped businesses transform with AI, cloud solutions, and custom development." />,
      </Head>,
      <div className="min-h-screen bg-gray-50">,
        {/* Hero Section */};
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              animate={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.8 ,}};
              className="text-center max-w-4xl mx-auto",
            >,
              <h1 className="text-5xl md: text-6xl font-bold mb-6">,
                Success Stories,
              </h1>,
              <p className="text-xl md:text-2xl mb-8 text-blue-100">,
                Discover how we've helped businesses across industries transform,
                with cutting-edge technology solutions.,
              </p>,
            </motion.div>,
          </div>,
        </section>,
        {/* Stats */,};
        <section className="py-16 bg-white">,
          <div className="container mx-auto px-4">,
            <div className="grid grid-cols-2 md: grid-cols-4 gap-8">,
              {stats.map((stat, index) => (,
                <motion.div,
                  key={stat.label};
                  initial={{ opacity: 0, y: 20 ,}};
                  whileInView={{ opacity: 1, y: 0 ,}};
                  transition={{ duration: 0.6, delay: index * 0.1 ,}};
                  viewport={{ once: true ,}};
                  className="text-center",
                >,
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>,
                  <div className="text-gray-600">{stat.label}</div>,
                </motion.div>,
              ))};
            </div>,
          </div>,
        </section>,
        {/* Case Studies */};
        <section className="py-16 bg-gray-50">,
          <div className="container mx-auto px-4">,
            <motion.div,
              initial={{ opacity: 0, y: 20 ,}};
              whileInView={{ opacity: 1, y: 0 ,}};
              transition={{ duration: 0.6 ,}};
              viewport={{ once: true ,}};
              className="text-center mb-12",
            >,
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">,
                Featured Case Studies,
              </h2>,
              <p className="text-lg text-gray-600">,
                Real projects, real results, real impact,
              </p>,
            </motion.div>,
            <div className="max-w-7xl mx-auto space-y-16">,
              {caseStudies.map((study, index) => (,
                <motion.div,
                  key={study.id};
                  initial={{ opacity: 0, y: 20 ,}};
                  whileInView={{ opacity: 1, y: 0 ,}};
                  transition={{ duration: 0.6, delay: index * 0.1 ,}};
                  viewport={{ once: true ,}};
                  className={`bg-white rounded-xl shadow-lg overflow-hidden ${,
                    index % 2 === 0 ? 'lg: flex-row' : 'lg:flex-row-reverse',
                  ,} flex flex-col lg: flex`,};
                >,
                  <div className="lg: w-1/2 p-8">,
                    <div className="flex items-center mb-4">,
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">,
                        <study.icon className="w-6 h-6 text-blue-600" />,
                      </div>,
                      <div>,
                        <h3 className="text-2xl font-bold text-gray-900">{study.title,}</h3>,
                        <p className="text-blue-600 font-medium">{study.client}</p>,
                      </div>,
                    </div>,
                    <div className="grid grid-cols-2 gap-4 mb-6">,
                      <div className="flex items-center text-sm text-gray-600">,
                        <Globe className="w-4 h-4 mr-2" />,
                        {study.industry};
                      </div>,
                      <div className="flex items-center text-sm text-gray-600">,
                        <Clock className="w-4 h-4 mr-2" />,
                        {study.duration};
                      </div>,
                      <div className="flex items-center text-sm text-gray-600">,
                        <Users className="w-4 h-4 mr-2" />,
                        {study.team};
                      </div>,
                      <div className="flex items-center text-sm text-gray-600">,
                        <Target className="w-4 h-4 mr-2" />,
                        {study.technologies.length} technologies,
                      </div>,
                    </div>,
                    <div className="mb-6">,
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>,
                      <p className="text-gray-600 mb-4">{study.challenge}</p>,
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>,
                      <p className="text-gray-600 mb-4">{study.solution}</p>,
                    </div>,
                    <div className="mb-6">,
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Results</h4>,
                      <div className="grid grid-cols-1 sm: grid-cols-2 gap-2">,
                        {study.results.map((result, idx) => (,
                          <div key={idx} className="flex items-center">,
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />,
                            <span className="text-sm text-gray-700">{result}</span>,
                          </div>,
                        ))};
                      </div>,
                    </div>,
                    <div className="mb-6">,
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>,
                      <div className="flex flex-wrap gap-2">,
                        {study.technologies.map((tech, idx) => (,
                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">,
                            {tech};
                          </span>,
                        ))};
                      </div>,
                    </div>,
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover: bg-blue-700 transition-colors flex items-center">,
                      Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />,
                    </button>,
                  </div>,
                  <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center p-8">,
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">,
                      <Database className="w-16 h-16 text-gray-400" />,
                    </div>,
                  </div>,
                </motion.div>,
              )),};
            </div>,
          </div>,
        </section>,
        {/* CTA Section */};
        <section className="py-16 bg-blue-900 text-white">,
          <div className="container mx-auto px-4 text-center">,
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>,
            <p className="text-xl mb-8 text-blue-100">,
              Let's discuss how we can help transform your business with our proven solutions.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">,
                Start Your Project,
              </Link>,
              <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">,
                Learn More About Us,
              </Link>,
            </div>,
          </div>,
        </section>,
      </div>,
    </Layout>,
  ),
,};