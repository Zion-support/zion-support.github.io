import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code, Key, Star, ArrowRight, Zap } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
    {
      title: 'AI Services',
      description: 'Core AI functionality and machine learning services',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/ai/predict',
          description: 'Make predictions using trained AI models',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/predict" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "sentiment-analysis-v1",
    "input_data": {
      "text": "I love this product!"
    }
  }'`
        },
        {
          method: 'POST',
          path: '/api/v1/ai/train',
          description: 'Train a new AI model with your data',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/train" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{]
    "model_name": "custom-classifier"]
    "training_data": [...],
    "model_type": "classification"
  }'`
        },
        {
          method: 'GET',
          path: '/api/v1/ai/models',
          description: 'List all available AI models',
          example: `curl -X GET "https://api.ziontechgroup.com/v1/ai/models" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
      ]
    },
    {
      title: 'Data Processing',
      description: 'Data transformation and analytics endpoints',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/data/process',
          description: 'Process and transform data',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/data/process" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\]
  -d '{]
    "data": [...],
    "operations": ["clean", "normalize", "aggregate"]
  }'`
        },
        {
          method: 'GET',
          path: '/api/v1/data/analytics',
          description: 'Get data analytics and insights',
          example: `curl -X GET "https://api.ziontechgroup.com/v1/data/analytics?dataset_id=123" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
      ]
    },
    {
      title: 'Authentication',
      description: 'User authentication and authorization',
      endpoints: [
        {
          method: 'POST',
          path: '/api/v1/auth/login',
          description: 'Authenticate user and get access token',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/auth/login" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "your_password"
  }'`
        },
        {
          method: 'POST',
          path: '/api/v1/auth/refresh',
          description: 'Refresh access token',
          example: `curl -X POST "https://api.ziontechgroup.com/v1/auth/refresh" \\
  -H "Authorization: Bearer YOUR_REFRESH_TOKEN"`]
        }]]
    }
  ];

const sdkExamples = [
    {
      language: 'Python',
      code: `import ziontech
# Initialize the client,
    client = ziontech.Client(api_key='your_api_key')
# Generate AI content,
    content = client.ai.content.generate(
    prompt="Write about machine learning",
    type="blog",
    tone="professional"
)
print(content.data.content)`,
      icon: <Code className="w-6 h-6" />
    },
    {
      language: 'JavaScript',
      code: `const ziontech = require('ziontech-sdk');
// Initialize the client,
    const client = new ziontech.Client({
  apiKey: 'your_api_key'
});
// Generate AI content,
    client.ai.content.generate({
  prompt: 'Write about machine learning',
  type: 'blog',
  tone: 'professional'
}).then(response => {
  });`,
      icon: <Code className="w-6 h-6" />
    },
    {
      language: 'cURL',
      code: `curl -X POST "https://api.ziontechgroup.com/v1/ai/predict" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_id": "sentiment-analysis-v1",
    "input_data": {
      "text": "I love this product!"
    }
  ];

const features = [
    {
      icon: <Key className="w-8 h-8" />,
      title: 'Authentication',
      description: 'Secure API key-based authentication with role-based access control'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Rate Limiting',
      description: 'Intelligent rate limiting to ensure fair usage and optimal performance'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Real-time Data',
      description: 'Access to real-time data and analytics through our RESTful API'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Security',
      description: 'Enterprise-grade security with encryption and compliance standards'
    }
  ];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Page
        </h1>
      </div>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Page
        </h1>
      </div>
    </div>
  );
}
  return (
    <>
      <Helmet>
        <title>API Documentation - Zion Tech Group | Developer API Reference</title>
        <meta name="description" content="Complete API documentation for Zion Tech Group services. RESTful APIs, SDKs, authentication, and integration guides for developers." />
        <meta name="keywords" content="API documentation, REST API, developer guide, SDK, authentication, integration" />
        <meta property="og:title" content="API Documentation - Zion Tech Group" />
        <meta property="og:description" content="Complete developer API reference and documentation" />
        <meta property="og:type" content="website" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                API <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Documentation</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Complete API reference for integrating with Zion Tech Group services. RESTful APIs, SDKs, and comprehensive guides.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
    href="#getting-started"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
    href="#endpoints"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Endpoints
                </a>
              </div>
              <p className="text-gray-600 mb-4">
                Use our REST API or SDKs to make your first API call.
              </p>
              <Link
    to="#examples"
                className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
              >
                View Examples
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">3. Build & Scale</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Integrate AI into your applications and scale with confidence.
              </p>
              <Link
    to="/docs"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
              >
                Full Documentation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
        {/* Features */}
        <section className="py-16 px-4">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    
        <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  
          <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Getting Started */}
        <section id="getting-started" className="py-16 px-4 bg-white/5 backdrop-blur-sm">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Getting Started</h2>
              
          <p className="text-xl text-gray-300">Quick setup and authentication guide</p>
            </div>
            
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                <h3 className="text-xl font-bold text-white mb-4">1. Get Your API Key</h3>
                
          <p className="text-gray-300 mb-6">
                  Sign up for an account and generate your API key from the dashboard.
                </p>
                <a
    href="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Get API Key
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                <h3 className="text-xl font-bold text-white mb-4">2. Choose Your SDK</h3>
                
          <p className="text-gray-300 mb-6">
                  We provide SDKs for Python, JavaScript, Java, and more languages.
                </p>
                <a
    href="#sdks"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View SDKs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* API Endpoints */}
        <section id="endpoints" className="py-16 px-4">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">API Endpoints</h2>
              
          <p className="text-xl text-gray-300">Explore our RESTful API endpoints</p>
            </div>
            
        <div className="space-y-8">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                  
        <div className="flex items-center mb-6">
                    <span className={`px-3 py-1 rounded text-sm font-semibold mr-4 ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                      endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-cyan-400 font-mono text-lg">{endpoint.path}</code>
                  </div>
                  
          <p className="text-gray-300 mb-6">{endpoint.description}</p>
                  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-4">Parameters</h4>
                      
        <div className="space-y-3">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="flex items-start space-x-3">
                            
        <div className="flex-shrink-0">
                              <span className="text-white font-mono text-sm">{param.name}</span>
                              <span className="text-gray-400 text-xs ml-2">({param.type})</span>
                              {param.required && <span className="text-red-400 text-xs ml-1">*</span>}
                            </div>
                            
          <p className="text-gray-300 text-sm">{param.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-4">Example</h4>
                      
        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-gray-300 text-sm">
                          <code>{endpoint.example.request}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  
        <div className="mt-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-4">Response</h4>
                    
        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-gray-300 text-sm">
                        <code>{endpoint.example.response}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* SDK Examples */}
        <section id="sdks" className="py-16 px-4 bg-white/5 backdrop-blur-sm">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">SDK Examples</h2>
              
          <p className="text-xl text-gray-300">Code examples in different programming languages</p>
            </div>
            
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {sdkExamples.map((sdk, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                  
        <div className="flex items-center mb-6">
                    
        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      
        <div className="text-white">{sdk.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{sdk.language}</h3>
                  </div>
                  
        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-gray-300 text-sm">
                      <code>{sdk.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Support */}
        <section className="py-16 px-4">
          
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Help?</h2>
            
          <p className="text-xl text-gray-300 mb-8">
              Our developer support team is here to help you integrate with our APIs.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
    href="/support"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </a>
              <a
    href="/docs"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Full Docs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rate Limits
            </h2>
            <p className="text-xl text-gray-600">
              API usage limits and pricing tiers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Free Tier</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 1,000 requests/month</li>
                <li>• Basic AI models</li>
                <li>• Community support</li>
                <li>• Standard response time</li>
              </ul>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg shadow-lg p-6 ring-2 ring-blue-500">
              <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pro Tier</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 50,000 requests/month</li>
                <li>• All AI models</li>
                <li>• Priority support</li>
                <li>• Fast response time</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Unlimited requests</li>
                <li>• Custom models</li>
                <li>• 24/7 support</li>
                <li>• SLA guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get your API key and start building with our AI platform today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
    to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get API Key
            </Link>
            <Link
    to="/docs"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View Full Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ApiDocsPage;