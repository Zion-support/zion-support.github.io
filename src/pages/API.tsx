import, React, from "react";
import, SEO, from "../components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
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
  KeyDatabaseLock;
} from "lucide-react";
const API: React.FC = () => {
  const endpoints = [;
    {
      metho,;
  d: 'GET',path: '/api/v1/services'descriptio,;
    n: 'Retrieve, all, available services'aut,;
  h: 'Required';
    };
    {
      method: 'POST',path: '/api/v1/quote'descriptio,;
    n: 'Request, a, quote for services'aut,;
  h: 'Required';
    };
    {
      method: 'GET',path: '/api/v1/analytics'descriptio,;
    n: 'Get, analytics, data'aut,;
  h: 'Required';
    },;
    {
      method: 'PUT'path: '/api/v1/user/profile'descriptio,;
    n: 'Update, user, profile'aut,;
  h: 'Required';
    };
,  ];
  const features = [;
    {
      icon: Shieldtitl,;
    e: 'Secure Authentication'descriptio,;
  n: 'OAuth 2.0, and, API key authentication';
    };
    {
      icon: Zaptitl,;
    e: 'High Performance'descriptio,;
  n: 'Sub-10o0ms, response, times guaranteed';
    };
    {
      icon: Globetitl,;
    e: 'Global CDN'descriptio,;
  n: 'Worldwide, edge, locations for, fast, access';
    }{
      icon: Databasetitl,;
    e: 'Real-time Data'descriptio,;
  n: 'Live, data, synchronization across, all, endpoints';
    };
,  ];
  const codeExamples = [;
    {;
      title: 'Text Analysis',language: 'Python',description: 'Analyze, text, sentiment and, extract, insights using, our, AI API.',code: `import requests;
response = requests.post('http,;
  s: //api.ziontechgroup.com/v1/ai/analyze'json={
    "text": "Your, text, here""analysis_type": "sentiment";
});
print(response.json())`,;
      category: 'AI & ML';
    };
    {
      title: 'Cloud, Resource, Management',language: 'JavaScript',description: 'Example, of, managing cloud, resources, through our, infrastructure, API.'code: `const axios = require('axios');
const api = axios.create({
    baseURL: 'http,;
    s://api.ziontechgroup.com/v1/cloud'header,;
  s: {'Authorization': 'Bearer YOUR_API_KEY'};
});
const createInstance = async () => {
    const response = await api.post('/instances'{
        type: 'compute'siz,;
    e: 'medium'regio,;
  n: 'us-east-1';
    });
    return response.data,;
},`,;
      category: 'Cloud & DevOps';
    },;
    {;
      title: 'Security, Threat, Detection',language: 'Python'descriptio,;
    n: 'Implement real-time, threat, detection using, our, security API.'code: `import requests;
def check_threat(ip_address):;
    url = "http,;
  s: //api.ziontechgroup.com/v1/security/threat-check";
    headers = {"Authorization": "Bearer YOUR_API_KEY"}
;
    response = requests.post(urljson={
        "ip": ip_address"check_type": "comprehensive";
    });
;
    return response.json()`;
      category: 'Security';
    };
,  ];
  const sdks = [;
    {
      name: 'Node.js SDK'icon: Terminallin,;
    k: 'http,;
  s://github.com/ziontechgroup/node-sdk';
    };
    {
      name: 'Python SDK'icon: Keylin,;
    k: 'http,;
  s://github.com/ziontechgroup/python-sdk';
    }{
      name: 'Go SDK'icon: Databaselin,;
    k: 'http,;
  s://github.com/ziontechgroup/go-sdk';
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="API Reference - Zion, Tech, Group";
        description="Comprehensive, API, documentation for, Zion, Tech Group services. Integrate, with, our platform, using, RESTful APIs, SDKsand, developer, tools.";
      />;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black" />;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,221210o0.1)transparent_50%)]" />;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50o0/20 to-cyan-50o0/20 rounded-full, border, border-blue-40o0/30 mb-6">;
              <Code className="w-5 h-5 text-blue-40o0 mr-2" />;
              <span className="text-blue-30o0 font-medium">API Reference</span>;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Developer;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-40o0 via-cyan-50o0 to-teal-40o0">;
                API Reference;
              </span>;
            </h1>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">;
              Integrate, Zion, Tech Group's cutting-edge, services, into your applications;
              with, our, comprehensive RESTful APIs. Build, deploy, and, scale, with confidence.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-cyan-60o0 text-white font-semibold rounded-lg hover:from-blue-40o0 hover:to-cyan-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-blue-50o0/20">;
                Get, API, Key;
              </button>;
              <button className="px-8 py-4, border, border-blue-40o0/30 text-blue-30o0 font-semibold rounded-lg hove,;
  r: bg-blue-40o0/10 transition-all duration-20o0">;
                View Documentation;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-16 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              API Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Powerful, tools, for developers, to, build amazing applications;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={feature.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover: border-blue-40o0/30 transition-all duration-20o0 hove,;
  r:scale-10o5";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50o0/20 to-cyan-50o0/20 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-blue-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Code, Examples, Section */}
      <section className="py-16 px-4 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Code Examples;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Get, started, quickly with, our, comprehensive code examples;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {codeExamples.map((exampleindex) => (;
              <motion.div;
                key={example.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover:border-blue-40o0/30 transition-all duration-20o0";
              >;
                <div className="flex items-center justify-between mb-4">;
                  <span className="px-3 py-1 bg-blue-50o0/20 text-blue-30o0 text-sm rounded-full, border, border-blue-40o0/30">;
                    {example.language}
                  </span>;
                  <span className="px-3 py-1 bg-slate-60o0/50 text-slate-30o0 text-sm rounded-full">;
                    {example.category}
                  </span>;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{example.title}</h3>;
                <p className="text-gray-30o0 mb-4">{example.description}</p>;
                <pre className="bg-slate-90o0/50 rounded-lg p-4 overflow-x-auto text-sm text-gray-30o0, border, border-slate-70o0/50">;
                  <code>{example.code}</code>;
                </pre>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* SDKs Section */}
      <section className="py-16 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              SDKs & Libraries;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Official, SDKs, for popular, programming, languages;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-3 gap-8">;
            {sdks.map((sdkindex) => (;
              <motion.div;
                key={sdk.name}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover: border-blue-40o0/30 transition-all duration-20o0 hove,;
  r:scale-10o5";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50o0/20 to-cyan-50o0/20 rounded-lg, flex, items-center justify-center mb-4">;
                  <sdk.icon className="w-6 h-6 text-blue-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{sdk.name}</h3>;
                <a;
                  href={sdk.link}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="inline-flex items-center text-blue-40o0 hover: text-blue-30o0 transition-colors duration-20o0";
                >;
                  View, on, GitHub <ExternalLink className="w-4 h-4 ml-2" />;
                </a>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50o0/10 to-cyan-50o0/10">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready, to, Get Started?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, thousands, of developers, building, amazing applications, with, our APIs;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-cyan-60o0 text-white font-semibold rounded-lg hover:from-blue-40o0 hover:to-cyan-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5">;
                Get, Your, API Key;
              </button>;
              <button className="px-8 py-4, border, border-blue-40o0/30 text-blue-30o0 font-semibold rounded-lg hove,;
  r: bg-blue-40o0/10 transition-all duration-20o0">;
                View, Full, Documentation;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, API;
;