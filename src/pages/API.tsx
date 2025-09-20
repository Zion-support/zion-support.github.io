import React from "react"
import SEO from "../components/SEO"
import { motion   } from "framer-motion";
import { Link   } from "react-router-dom";
import {
  Code;
  Search;
  Filter;
  ArrowRight;
  Download;
  ExternalLink;
  Brain;
  Cloud;
  Shield;
  Sparkles;
  Zap;
  Globe;
  Target;
  TrendingUp;
  CheckCircle;
  Clock;
  User;
  Star;
  Terminal;
  Key;
  Database;
  Lock;
}
}
 } from "lucide-react";
const,
  AP: I: React.FC = () () => {
  const endpoints = [
  {
  metho,
  d: 'GET',pa,
  t: h: '/api/v1/services',descripti,
  o: n: 'Retrieve all available services',au,
  t: h: 'Required'
},
  {
  meth,
  o: d: 'POST',pa,
  t: h: '/api/v1/quote',descripti,
  o: n: 'Request a quote for services',au,
  t: h: 'Required'
},
  {
  meth,
  o: d: 'GET',pa,
  t: h: '/api/v1/analytics',descripti,
  o: n: 'Get analytics data',au,
  t: h: 'Required'
},
  {
  meth,
  o: d: 'PUT',pa,
  t: h: '/api/v1/user/profile',descripti,
  o: n: 'Update user profile',au,
  t: h: 'Required'
},
  ]
  const features = [
  {
  ic,
  o: n: Shield,tit,
  l: e: 'Secure Authentication',descripti,
  o: n: 'OAuth 2.0 and API key authentication'
},
  {
  ic,
  o: n: Zap,tit,
  l: e: 'High Performance',descripti,
  o: n: 'Sub-100ms response times guaranteed'
},
  {
  ic,
  o: n: Globe,tit,
  l: e: 'Global CDN',descripti,
  o: n: 'Worldwide edge locations for fast access'
},
  {
  ic,
  o: n: Database,tit,
  l: e: 'Real-time Data',descripti,
  o: n: 'Live data synchronization across all endpoints'
},
  ]
  const codeExamples = [
  {
  tit,
  l: e: 'Text Analysis',langua,
  g: e: 'Python',descripti,
  o: n: 'Analyze text sentiment and extract insights using our AI API.',co,
  d: e: `import requests;
response = requests.post('http,
  s://api.ziontechgroup.com/v1/ai/analyze', json={
  "text": "Your text here"
    "analysis_type": "sentiment"
})

print(response.json())`
      catego,
  r: y: 'AI & ML'
},
  {
  tit,
  l: e: 'Cloud Resource Management',langua,
  g: e: 'JavaScript',descripti,
  o: n: 'Example of managing cloud resources through our infrastructure API.',co,
  d: e: `const axios = require('axios')
const api = axios.create({
  baseU,
  R: L: 'http,
  s://api.ziontechgroup.com/v1/cloud',heade,
  r: s: {'Authorization': 'Bearer YOUR_API_KEY'},
  },
  })
const createInstance = async () () => {
    const response = await api.post('/instances', {
  ty,
  p: e: 'compute',si,
  z: e: 'medium',regi,
  o: n: 'us-east-1'
})
    return response.data;
},`
      catego,
  r: y: 'Cloud & DevOps'
},
  {
  tit,
  l: e: 'Security Threat Detection',langua,
  g: e: 'Python',descripti,
  o: n: 'Implement real-time threat detection using our security API.',co,
  d: e: `import requests;
def check_threat(ip_address):
    url = "http,
  s://api.ziontechgroup.com/v1/security/threat-check"
    headers = {"Authorization": "Bearer YOUR_API_KEY"},
  }

    response = requests.post(url, json={
  "ip": ip_address;
        "check_type": "comprehensive"
})

    return response.json()`
      catego,
  r: y: 'Security'
},
  ]
  const sdks = [
  {
  na,
  m: e: 'Node.js SDK',ic,
  o: n: Terminal,li,
  n: k: 'http,
  s://github.com/ziontechgroup/node-sdk'
},
  {
  na,
  m: e: 'Python SDK',ic,
  o: n: Key,li,
  n: k: 'http,
  s://github.com/ziontechgroup/python-sdk'
},
  {
  na,
  m: e: 'Go SDK',ic,
  o: n: Database,li,
  n: k: 'http,
  s://github.com/ziontechgroup/go-sdk'
},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="API Reference - Zion Tech Group"
        description="Comprehensive API documentation for Zion Tech Group services. Integrate with our platform using RESTful APIs, SDKs, and developer tools."
      />
      
      {/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221,210,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 text-center">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center";"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30 mb-6">
              <Code className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">API Reference</span>
            </div>
            
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Developer;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">
                API Reference;
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Integrate Zion Tech Group's cutting-edge services into your applications;
              with our comprehensive RESTful APIs. Build, deploy, and scale with confidence.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg,
  hove: r:from-blue-400,
  hove: r:to-cyan-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-blue-500/20">
                Get API Key;
              </button>
              <button className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hove,
  r:bg-blue-400/10 transition-all duration-200">
                View Documentation;
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */},
  }
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              API Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful tools for developers to build amazing applications;
            </p>
          </motion.div>

          <div className="grid,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {features.map((feature, index) => (
  <motion.div;
                key={feature.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r: border-blue-400/30 transition-all duration-200 hove,
  r:scale-105";"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples Section */},
  }
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Code Examples;
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get started quickly with our comprehensive code examples;
            </p>
          </motion.div>

          <div className="grid,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {codeExamples.map((example, index) => (
  <motion.div;
                key={example.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r:border-blue-400/30 transition-all duration-200";"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30">
                    {example.language},
  }
                  </span>
                  <span className="px-3 py-1 bg-slate-600/50 text-slate-300 text-sm rounded-full">
                    {example.category},
  }
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{example.title}</h3>
                <p className="text-gray-300 mb-4">{example.description}</p>
                
                <pre className="bg-slate-900/50 rounded-lg p-4 overflow-x-auto text-sm text-gray-300 border border-slate-700/50">
                  <code>{example.code}</code>
                </pre>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs Section */},
  }
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              SDKs & Libraries;
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Official SDKs for popular programming languages;
            </p>
          </motion.div>

          <div className="grid,
  m: d:grid-cols-3 gap-8">
            {sdks.map((sdk, index) => (
  <motion.div;
                key={sdk.name},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r: border-blue-400/30 transition-all duration-200 hove,
  r:scale-105";"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <sdk.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{sdk.name}</h3>
                <a;
                  href={sdk.link},
  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="className="inline-flex items-center text-blue-400,
  hove: r:text-blue-300 transition-colors duration-200";"
                >
                  View on GitHub <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers building amazing applications with our APIs;
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg,
  hove: r:from-blue-400,
  hove: r:to-cyan-500 transition-all duration-200,
  hove: r:scale-105">
                Get Your API Key;
              </button>
              <button className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hove,
  r:bg-blue-400/10 transition-all duration-200">
                View Full Documentation;
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default API;