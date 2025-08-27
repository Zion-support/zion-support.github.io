import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react'

interface CaseStudy {
  id: string
  title: string
  description: string
  industry: string
  results: {
    metric: string
    value: string
    icon: React.ReactNode
  }[]
  technologies: string[]
  duration: string
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'AI-Powered Customer Service Automation',
    description: 'Implemented multi-agent AI system for enterprise customer service, reducing response time and improving satisfaction.',
    industry: 'E-commerce',
    results: [
      { metric: 'Response Time', value: '85% faster', icon: <TrendingUp className="w-5 h-5" /> },
      { metric: 'Customer Satisfaction', value: '+32%', icon: <CheckCircle className="w-5 h-5" /> },
      { metric: 'Cost Reduction', value: '40%', icon: <DollarSign className="w-5 h-5" /> }
    ],
    technologies: ['OpenAI GPT-4', 'LangChain', 'React', 'Node.js', 'PostgreSQL'],
    duration: '3 months'
  },
  {
    id: '2',
    title: 'Cloud-Native Data Platform Migration',
    description: 'Migrated legacy data infrastructure to modern cloud-native platform with real-time analytics capabilities.',
    industry: 'Financial Services',
    results: [
      { metric: 'Processing Speed', value: '10x faster', icon: <TrendingUp className="w-5 h-5" /> },
      { metric: 'Scalability', value: 'Unlimited', icon: <Users className="w-5 h-5" /> },
      { metric: 'Infrastructure Cost', value: '-60%', icon: <DollarSign className="w-5 h-5" /> }
    ],
    technologies: ['AWS', 'Kubernetes', 'Apache Kafka', 'Apache Spark', 'Terraform'],
    duration: '6 months'
  },
  {
    id: '3',
    title: 'Zero-Trust Cybersecurity Implementation',
    description: 'Deployed comprehensive zero-trust security framework with automated threat detection and response.',
    industry: 'Healthcare',
    results: [
      { metric: 'Security Incidents', value: '-95%', icon: <CheckCircle className="w-5 h-5" /> },
      { metric: 'Compliance Score', value: '99.9%', icon: <CheckCircle className="w-5 h-5" /> },
      { metric: 'Detection Time', value: 'Real-time', icon: <TrendingUp className="w-5 h-5" /> }
    ],
    technologies: ['Okta', 'CrowdStrike', 'Splunk', 'AWS GuardDuty', 'Python'],
    duration: '4 months'
  }
]

export default function CaseStudies() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <motion.h2 
            className="text-base font-semibold leading-7 text-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Real results from real clients
          </motion.p>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See how our AI, cloud, and cybersecurity solutions have transformed businesses across industries.
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 lg:grid-cols-1">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <span>Duration: {study.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                        <div className="text-blue-600">
                          {result.icon}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {result.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to see similar results for your business?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}