import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code,
  Search,
  Filter,
  ArrowRight,
  Download,
  ExternalLink,
  Brain,
  Cloud,
  Shield,
  Sparkles,
  Zap,
  Globe,
  Target,
  TrendingUp,
  CheckCircle,
  Clock,
  User,
  Star,
  Terminal,
  Key,
  Database,
  Lock
} from 'lucide-react';

const apiCategories = [
  {
    title: 'AI & Machine Learning APIs',
    description: 'Access our AI services through RESTful APIs for natural language processing, computer vision, and predictive analytics.',
    icon: Brain,
    endpoints: 25,
    documentation: 'Complete',
    status: 'Production Ready'
  },
  {
    title: 'Cloud & Infrastructure APIs',
    description: 'Manage cloud resources, deploy applications, and monitor infrastructure through our comprehensive API suite.',
    icon: Cloud,
    endpoints: 18,
    documentation: 'Complete',
    status: 'Production Ready'
  },
  {
    title: 'Security & Authentication APIs',
    description: 'Secure your applications with our authentication, authorization, and threat detection APIs.',
    icon: Shield,
    endpoints: 12,
    documentation: 'Complete',
    status: 'Production Ready'
  },
  {
    title: 'IoT & Edge Computing APIs',
    description: 'Connect and manage IoT devices, process edge data, and implement real-time analytics.',
    icon: Sparkles,
    endpoints: 15,
    documentation: 'Beta',
    status: 'Beta Release'
  }
];

const quickStartExamples = [
  {
    title: 'AI Text Analysis',
    language: 'Python',
    description: 'Quick example of using our AI text analysis API for sentiment analysis and content classification.',
    code: `import requests

url = "https://api.ziontechgroup.com/v1/ai/text/analyze"
headers = {"Authorization": "Bearer YOUR_API_KEY"}

response = requests.post(url, json={
    "text": "Your text here",
    "analysis_type": "sentiment"
})

print(response.json())`,
    category: 'AI & ML'
  },
  {
    title: 'Cloud Resource Management',
    language: 'JavaScript',
    description: 'Example of managing cloud resources through our infrastructure API.',
    code: `const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.ziontechgroup.com/v1/cloud',
    headers: {'Authorization': 'Bearer YOUR_API_KEY'}
});

const createInstance = async () => {
    const response = await api.post('/instances', {
        type: 'compute',
        size: 'medium',
        region: 'us-east-1'
    });
    return response.data;
};`,
    category: 'Cloud & DevOps'
  },
  {
    title: 'Security Threat Detection',
    language: 'Python',
    description: 'Implement real-time threat detection using our security API.',
    code: `import requests

def check_threat(ip_address):
    url = "https://api.ziontechgroup.com/v1/security/threat-check"
    headers = {"Authorization": "Bearer YOUR_API_KEY"}

    response = requests.post(url, json={
        "ip": ip_address,
        "check_type": "comprehensive"
    })

    return response.json()`,
    category: 'Security'
  }
];

export default function API() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Developer
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue">
                APIs
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Integrate Zion Tech Group's cutting-edge services into your applications
              with our comprehensive RESTful APIs. Build, deploy, and scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#categories"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 transform hover:scale-105"
              >
                Explore APIs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact?type=api-access"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300"
              >
                Get API Access
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-zion-slate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-6 h-6" />
            <input
              type="text"
              placeholder="Search APIs and endpoints..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors text-lg"
            />
          </div>
        </div>
      </section>

      {/* API Categories */}
      <section id="categories" className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              API Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Explore our comprehensive API suite organized by technology domain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apiCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="text-2xl font-bold text-zion-cyan">{category.endpoints}</div>
                    <div className="text-sm text-zion-slate-light">Endpoints</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zion-cyan">{category.documentation}</div>
                    <div className="text-sm text-zion-slate-light">Documentation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zion-cyan">{category.status}</div>
                    <div className="text-sm text-zion-slate-light">Status</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    to={`/api/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300"
                  >
                    View Documentation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <button className="px-4 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300">
                    <Terminal className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Examples */}
      <section className="py-20 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quick Start Examples
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Get started quickly with code examples in multiple programming languages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {quickStartExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm">
                    {example.category}
                  </span>
                  <span className="text-zion-slate-light text-sm">{example.language}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{example.title}</h3>
                <p className="text-zion-slate-light mb-4">{example.description}</p>

                <div className="bg-zion-slate rounded-lg p-4 mb-4 overflow-x-auto">
                  <pre className="text-sm text-zion-slate-light">
                    <code>{example.code}</code>
                  </pre>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-zion-cyan text-zion-slate-dark rounded-lg hover:bg-zion-cyan-dark transition-colors text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Copy Code
                  </button>
                  <Link
                    to={`/api/examples/${example.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-zion-slate-dark transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Full Example
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get API access, explore our documentation, and start integrating
              Zion Tech Group services into your applications today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?type=api-access"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Get API Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/docs"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
