import React from "react"
import SEO from "../components/SEO"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {;
  Code,;
  Search,;
  Filter,;
  ArrowRight,;
  Download,;
  ExternalLink,;
  Brain,;
  Cloud,;
  Shield,;
  Sparkles,;
  Zap,;
  Globe,;
  Target,;
  TrendingUp,;
  CheckCircle,;
  Clock,;
  User,;
  Star,;
  Terminal,;
  Key,;
  Database,;
  Lock;
} from "lucide-react"
const API: React.FC = () => {
  const endpoints = [;
    {;
      method: 'GET',path: '/api/v1/services',description: 'Retrieve all available services',auth: 'Required'
    };
    {;
      method: 'POST',path: '/api/v1/quote',description: 'Request a quote for services',auth: 'Required'
    };
    {;
      method: 'GET',path: '/api/v1/analytics',description: 'Get analytics data',auth: 'Required'
    };
    {;
      method: 'PUT',path: '/api/v1/user/profile',description: 'Update user profile',auth: 'Required'
    };
  ];
  const features = [;
    {;
      icon: Shield,title: 'Secure Authentication',description: 'OAuth 2.0 and API key authentication'
    };
    {;
      icon: Zap,title: 'High Performance',description: 'Sub-100ms response times guaranteed'
    };
    {;
      icon: Globe,title: 'Global CDN',description: 'Worldwide edge locations for fast access'
    };
    {;
      icon: Database,title: 'Real-time Data',description: 'Live data synchronization across all endpoints'
    };
  ];
  const codeExamples = [;
    {;
      title: 'Text Analysis',language: 'Python',description: 'Analyze text sentiment and extract insights using our AI API.',code: `import requests;

response = requests.post('https://[^;]*
    "text": "Your text here",;
    "analysis_type": "sentiment"
});

print(response.json())`,;
      category: 'AI & ML'
    };
    {;
      title: 'Cloud Resource Management',language: 'JavaScript',description: 'Example of managing cloud resources through our infrastructure API.',code: `const axios = require('axios')
const api = axios.create({;
    baseURL: 'https://[^;]*
});
const createInstance = async () => {;
    const response = await api.post('/instances', {;
        type: 'compute',size: 'medium',region: 'us-east-1'
    });
    return response.data,;
},`,;
      category: 'Cloud & DevOps'
    };
    {;
      title: 'Security Threat Detection',language: 'Python',description: 'Implement real-time threat detection using our security API.',code: `import requests;

def check_threat(ip_address):;
    url = "https://api.ziontechgroup.com/v1/security/threat-check"
    headers = {"Authorization": "Bearer YOUR_API_KEY"};

    response = requests.post(url, json={;
        "ip": ip_address,;
        "check_type": "comprehensive"
    });

    return response.json()`,;
      category: 'Security'
    };
  ];
  const sdks = [;
    {;
      name: 'Node.js SDK',icon: Terminal,link: 'https://github.com/ziontechgroup/node-sdk'
    };
    {;
      name: 'Python SDK',icon: Key,link: 'https://github.com/ziontechgroup/python-sdk'
    };
    {;
      name: 'Go SDK',icon: Database,link: 'https://github.com/ziontechgroup/go-sdk'
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="API Reference - Zion Tech Group"
        description="Comprehensive API documentation for Zion Tech Group services. Integrate with our platform using RESTful APIs, SDKs, and developer tools."
      />;
      ;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <[^>]*/>
        <[^>]*/>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30 mb-6">;
              <[^>]*/>
              <span className="text-blue-300 font-medium">API Reference</[^>]*>
            </[^>]*>
            ;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Developer;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400">;
                API Reference;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">;
              Integrate Zion Tech Group's cutting-edge services into your applications;
              with our comprehensive RESTful APIs. Build, deploy, and scale with confidence.;
            </[^>]*>
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-cyan-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20">;
                Get API Key;
              </[^>]*>
              <button className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200">;
                View Documentation;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-16 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              API Features;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Powerful tools for developers to build amazing applications;
            </[^>]*>
          </[^>]*>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={feature.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</[^>]*>
                <p className="text-gray-300">{feature.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Code Examples Section */};
      <section className="py-16 px-4 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Code Examples;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Get started quickly with our comprehensive code examples;
            </[^>]*>
          </[^>]*>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {codeExamples.map((example, index) => (;
              <motion.div
                key={example.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-center justify-between mb-4">;
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30">;
                    {example.language};
                  </[^>]*>
                  <span className="px-3 py-1 bg-slate-600/50 text-slate-300 text-sm rounded-full">;
                    {example.category};
                  </[^>]*>
                </[^>]*>
                ;
                <h3 className="text-xl font-semibold text-white mb-2">{example.title}</[^>]*>
                <p className="text-gray-300 mb-4">{example.description}</[^>]*>
                ;
                <pre className="bg-slate-900/50 rounded-lg p-4 overflow-x-auto text-sm text-gray-300 border border-slate-700/50">;
                  <code>{example.code}</[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* SDKs Section */};
      <section className="py-16 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              SDKs & Libraries;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Official SDKs for popular programming languages;
            </[^>]*>
          </[^>]*>

          <div className="grid md:grid-cols-3 gap-8">;
            {sdks.map((sdk, index) => (;
              <motion.div
                key={sdk.name};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-2">{sdk.name}</[^>]*>
                <a;
                  href={sdk.link};
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[^"]*"
                >;
                  View on GitHub <[^>]*/>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.6 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Get Started?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Join thousands of developers building amazing applications with our APIs;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-cyan-500 transition-all duration-200 hover:scale-105">;
                Get Your API Key;
              </[^>]*>
              <button className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200">;
                View Full Documentation;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default API;