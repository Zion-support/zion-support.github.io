import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Code, Database, Shield, Zap, Globe, BookOpen, Download } from 'lucide-react';

const API: React.FC = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/services',
      description: 'Retrieve all available services',
      auth: 'Required'
    },
    {
      method: 'POST',
      path: '/api/v1/quote',
      description: 'Request a quote for services',
      auth: 'Required'
    },
    {
      method: 'GET',
      path: '/api/v1/analytics',
      description: 'Get analytics data',
      auth: 'Required'
    },
    {
      method: 'PUT',
      path: '/api/v1/user/profile',
      description: 'Update user profile',
      auth: 'Required'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'OAuth 2.0 and API key authentication'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Sub-100ms response times guaranteed'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Worldwide edge locations for fast access'
    },
    {
      icon: Database,
      title: 'Real-time Data',
      description: 'Live data synchronization across all endpoints'
    }
  ];

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
    return response.data};`,
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
  {/* Removed stray closing brace */}
];

export default function API(...args[]):  {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="API Reference - Zion Tech Group"
        description="Comprehensive API documentation for Zion Tech Group services. Integrate with our platform using RESTful APIs, SDKs, and developer tools."
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">API Reference</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrate with Zion Tech Group services using our comprehensive API documentation.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              API documentation coming soon. We're building comprehensive integration guides.
            </p>
          </div>
        </div>
      </div>
    </>);
};
export default API;
