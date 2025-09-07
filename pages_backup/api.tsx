import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Code, Book, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const apiFeatures = [
  {
    icon: Code,
    title: 'RESTful API',
    description: 'Clean, intuitive REST API endpoints for easy integration',
    features: ['RESTful design', 'JSON responses', 'HTTP status codes', 'Error handling']
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Enterprise-grade security with authentication and encryption',
    features: ['JWT authentication', 'Rate limiting', 'HTTPS encryption', 'API key management']
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'High-performance API with caching and optimization',
    features: ['Response caching', 'CDN integration', 'Load balancing', 'Real-time updates']
  },
  {
    icon: Book,
    title: 'Documentation',
    description: 'Comprehensive documentation with examples and guides',
    features: ['Interactive docs', 'Code examples', 'SDK libraries', 'Developer support']
  }
];
export default function API() {
  const apiEndpoints = [
    {
      method: 'GET, endpoint: /api/v1/ai/models',
      description: 'List all available AI models, category: AI Services',
      auth: 'Required
    }, {
      method: POST',
      endpoint: '/api/v1/ai/predict, description: Make predictions using AI models',
      category: 'AI Services, auth: Required'
    },
    {
      method: 'GET, endpoint: /api/v1/cloud/status',
      description: 'Get cloud service status, category: Cloud Services',
      auth: 'Required
    }, {
      method: POST',
      endpoint: '/api/v1/cloud/deploy, description: Deploy application to cloud',
      category: 'Cloud Services, auth: Required'
    },
    {
      method: 'GET, endpoint: /api/v1/security/scan',
      description: 'Perform security scan, category: Security',
      auth: 'Required
    }, {
      method: POST',
      endpoint: '/api/v1/security/audit, description: Run security audit',
      category: 'Security, auth: Required'
    }
  ];

  const sdkLanguages = [
    {
      name: 'Python, version: v2.1.0',
      description: 'Official Python SDK for Zion Tech Group APIs, icon: 🐍',
      features: ['Async support, Type hints', 'Error handling, Documentation']
    }, {
      name: 'JavaScript,
      version: v1.8.0', description: 'Node.js and browser-compatible JavaScript SDK,
      icon: 🟨', features: ['Promise-based, Browser support', 'TypeScript, Examples']
    }, {
      name: 'Java,
      version: v1.5.0', description: 'Java SDK for enterprise applications,
      icon: ☕', features: ['Maven support, Async operations', 'Logging, Testing']
    }, {
      name: 'C#,
      version: v1.3.0', description: '.NET SDK for Windows applications,
      icon: 🔷', features: ['NuGet package, Async/await', 'LINQ support, Documentation']
    }
  ];

  const codeExamples = [
    {
      title: 'AI Model Prediction, language: python',
      code: `import ziontech

# Initialize client
client = ziontech.Client(api_key="your-api-key)

# Make prediction
result = client.ai.predict(
    model_id=sentiment-analysis", data={"text: I love this product!"}
)

print(result.prediction)  # "positive`, description: 'Use our AI services to analyze text sentiment
    },
    {
      title: Cloud Deployment', language: 'javascript,
      code: `const ziontech = require(ziontech');

const client = new ziontech.Client({
  apiKey: 'your-api-key
});

// Deploy to cloud
const deployment = await client.cloud.deploy({
  appName: my-app', source: './dist,
  environment: production'
});

console.log(deployment.url);`, description: 'Deploy your application to the cloud
    },
    {
      title: Security Scan', language: 'curl,
      code: `curl -X POST https://api.ziontechgroup.com/v1/security/scan" \\
  -H "Authorization: Bearer YOUR_API_KEY \\
  -H Content-Type: application/json" \\
  -d {'
    "target: https://example.com", "scan_type: vulnerability"
  }'`,
      description: Perform security scans using our API'
    }
  ];

  const rateLimits = [
    {
      plan: 'Free, requests: 1,000/month', burst: '10/minute,
      features: [Basic API access', 'Community support]
    }, {
      plan: Professional',
      requests: '100, 000/month,
      burst: 100/minute', features: ['Full API access, Priority support', 'Webhooks]
    }, {
      plan: Enterprise',
      requests: 'Unlimited, burst: 1,000/minute', features: ['Unlimited access, Dedicated support', 'Custom limits]
    }
  ];
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

export default function APIPage() {
  return (
    <>
      <Head>
        <title>API Reference - Zion Tech Group</title>
        <meta name="description content=Complete API reference for Zion Tech Group services. Integrate AI, cloud, and security services into your applications." />
        <meta name="viewport content=width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50>
        {/* Hero Section */}
        <section className=relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32>
            <div className=text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6>
                API Reference
              </h1>
              <p className=text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Integrate Zion Tech Group services into your applications with our comprehensive REST API.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center>
                <Link href=#getting-started">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors>
                    Get Started
                    <ArrowRight className=w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <Link href="/docs>
                  <button className=border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    View Documentation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16>
            {apiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className=bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4>
                  <feature.icon className=h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900>{feature.title}</h3>
                </div>
                
                <p className=text-gray-600 mb-6">{feature.description}</p>
                
                <ul className="space-y-2>
                  {feature.features.map((item, idx) => (
                    <li key={idx} className=flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        {/* API Endpoints */}
        <section className=py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>
            <div className=text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6>
                API Endpoints
              </h2>
              <p className=text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive API endpoints
              </p>
            </div>
            
            <div className="space-y-4>
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className=bg-gray-50 rounded-xl p-6 hover: shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4>
                    <div className=flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        endpoint.method === GET' ? 'bg-green-100 text-green-800 :
                        endpoint.method === POST' ? 'bg-blue-100 text-blue-800 :
                        bg-yellow-100 text-yellow-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-900>{endpoint.endpoint}</code>
                    </div>
                    <div className=flex items-center space-x-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold>
                        {endpoint.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        endpoint.auth === 'Required ? bg-red-100 text-red-800' : 'bg-green-100 text-green-800
                      }`}>
                        {endpoint.auth}
                      </span>
                    </div>
                  </div>
                  <p className=text-gray-600 mb-4">{endpoint.description}</p>
                  <div className="flex items-center space-x-4>
                    <Link href=#" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center>
                      View Documentation
                      <ExternalLink className=w-4 h-4 ml-1" />
                    </Link>
                    <button className="text-gray-500 hover:text-gray-700 flex items-center>
                      <Copy className=w-4 h-4 mr-1" />
                      Copy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="py-20 bg-gray-50>
          <div className=max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16>
              <h2 className=text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Official SDKs
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto>
                Use our official SDKs for your preferred programming language
              </p>
            </div>
            
            <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sdkLanguages.map((sdk, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover: shadow-xl transition-shadow>
                  <div className=text-center mb-4">
                    <div className="text-4xl mb-2>{sdk.icon}</div>
                    <h3 className=text-xl font-bold text-gray-900 mb-1">{sdk.name}</h3>
                    <p className="text-blue-600 font-semibold>v{sdk.version}</p>
                  </div>
                  <p className=text-gray-600 mb-4 text-sm">{sdk.description}</p>
                  <ul className="space-y-2 mb-6>
                    {sdk.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className=w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Install SDK
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="py-20 bg-white>
          <div className=max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16>
              <h2 className=text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Code Examples
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto>
                Get started with these practical examples
              </p>
            </div>
            
            <div className=space-y-8">
              {codeExamples.map((example, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6>
                  <div className=flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900>{example.title}</h3>
                    <span className=bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {example.language}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4>{example.description}</p>
                  <div className=bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 font-mono text-sm>
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className=py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className=text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6>
                Rate Limits
              </h2>
              <p className=text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                API usage limits by plan
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
              {rateLimits.map((limit, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg p-6 ${
                  limit.plan === Professional' ? 'ring-2 ring-blue-500 transform scale-105 : '
                }`}>
                  {limit.plan === 'Professional && (
                    <div className=text-center mb-4">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold>
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className=text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2>{limit.plan}</h3>
                    <div className=text-3xl font-bold text-blue-600 mb-1">{limit.requests}</div>
                    <div className="text-gray-600>requests per month</div>
                    <div className=text-lg font-semibold text-gray-700 mt-2">{limit.burst}</div>
                    <div className="text-gray-600>burst limit</div>
                  </div>
                  <ul className=space-y-3 mb-6">
                    {limit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center>
                        <CheckCircle className=w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    limit.plan === Professional' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: from-blue-700 hover:to-purple-700 
                      : bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {limit.plan === 'Free ? Get Started' : 'Upgrade Plan}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center>
            <h2 className=text-3xl sm:text-4xl font-bold text-white mb-6">
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8>
              Contact us to learn more about our API services and get started with integration.
            </p>
            <div className=flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center text-white>
                <Phone className=h-5 w-5 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-white>
                <Mail className=h-5 w-5 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-white>
                <MapPin className=h-5 w-5 mr-2" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>

  Code,
  Check,
  Globe,
  Shield,
  Zap,
  Database,
  Cpu,
  Cloud,
  XCircle} from "lucide-react;
export default function APIPage() {
    {
      id: auth"
      title: "Authentication
      description: Secure authentication and authorization endpoints"
      baseUrl: "/api/v1/auth
      methods: [
        {
          method: POST"
          endpoint: "/login
          description: Authenticate user with email and password"
          code: `curl -X POST https://api.ziontechgroup.com/v1/auth/login \\
  -H "Content-Type: application/json \\
  -d {
    email": "user@example.com
    password": "your_password
  }'`
        }
        {
          method: POST"
          endpoint: "/register
          description: Register a new user account"
          code: `curl -X POST https://api.ziontechgroup.com/v1/auth/register \\
  -H "Content-Type: application/json \\
  -d '{
    email": "user@example.com
    password": "your_password
    name": "John Doe
  }`
        }
      ]
    }
    {
      id: ai-services"
      title: "AI Services
      description: Access our AI-powered services and models"
      baseUrl: "/api/v1/ai
      methods: [
        {
          method: POST"
          endpoint: "/chat
          description: Send messages to our AI chat service"
          code: `curl -X POST https://api.ziontechgroup.com/v1/ai/chat \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN \\
  -H Content-Type: application/json" \\
  -d {
    "message: Hello, how can you help me?"
    "model: gpt-4"
    "temperature: 0.7
    {
      id: auth",
      title: "Authentication,
      description: Secure authentication and authorization endpoints",
      base_url: "/api / v1 / auth,
      methods: [;
        {
          method: POST",
          endpoint: "/login,
          description: Authenticate user with email and password",
          code: `curl -X POST https://api.ziontechgroup.com / v1 / auth / login \\;
  -H "Content - Type: application / json \\;
  -d '{
    email": "user@example.com,
    password": "your_password;
  }'`},
        {
          method: POST",
          endpoint: "/register,
          description: Register a new user account",
          code: `curl -X POST https://api.ziontechgroup.com / v1 / auth / register \\;
  -H "Content - Type: application / json \\;
  -d {
    email": "user@example.com,
    password": "your_password,
    name": "John Doe;
  }`}]},
    {
      id: ai - services",
      title: "AI Services,
      description: Access our AI - powered services and models",
      base_url: "/api / v1 / ai,
      methods: [;
        {
          method: POST",
          endpoint: "/chat,
          description: Send messages to our AI chat service",
          code: `curl -X POST https://api.ziontechgroup.com / v1 / ai / chat \\;
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN \\;
  -H Content - Type: application / json" \\;
  -d '{}'`}]}];
  const response_examples = {
    success: {
      status: 200
      data: {
        message: "Request successful
        data: {
    error: {
      status: 400
      error: {
        code: VALIDATION_ERROR"
        message: "Invalid request parameters
        details: {
  return (
    <MainLayout
      title=API Documentation - Zion Tech Group"
      description="Comprehensive API documentation for Zion Tech Group services. Access our AI, cloud, and enterprise APIs with detailed examples and guides.
      keywords=API documentation, REST API, AI API, cloud API, developer resources">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900>;
        {/* Hero Section */}
        {/* Quick Start */}
        <section className=py-20 bg-white">;
          <div className="container mx-auto px-4>;
            <motion&& motion.div
              className=text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >;
                  <div className="bg - indigo - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4>;
                    <Shield className=w - 8 h - 8 text - indigo - 600" />;
                  </div>;
                  <h3 className="text - xl font - semibold text - gray - 900 mb - 2>;
                    1. Get API Key;
                  </h3>;
                  <p className=text - gray - 600">;
                    Sign up and obtain your API key from the dashboard;
                  </p>;
                </motion.div>;
                <motion.div;
                  className="text - center;
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >;
                  <div className=bg - purple - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;
                    <Code className="w - 8 h - 8 text - purple - 600 />;
                  </div>;
                  <h3 className=text - xl font - semibold text - gray - 900 mb - 2">;
                    2. Make Request;
                  </h3>;
                  <p className="text - gray - 600>;
                    Use our RESTful APIs with your preferred language;
                  </p>;
                </motion.div>;
                <motion.div;
                  className=text - center";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-lg p-6
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8 }}
                  viewport={{ once: true }}>;
                  <div className=flex items-center mb-4">;
                    <Check className="w-6 h-6 text-green-500 mr-3 />;
                    <h3 className=text-lg font-semibold text-gray-900">;
                      Success Response;
                    </h3>;
                  </div>;
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto>;
                    <pre className=text-green-400 text-sm font-mono">;
                      <code>;
                        {JSON && JSON.stringify(responseExamples && responseExamples.success, null, 2)}
                      </code>;
                    </pre>;
                  </div>;
                </motion && motion.div>;

                <motion&& motion.div
                  className="bg-white border border-gray-200 rounded-lg p-6
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <div className=flex items-center mb-4">;
                    <XCircle className="w-6 h-6 text-red-500 mr-3 />;
                    <h3 className=text-lg font-semibold text-gray-900">;
                      Error Response;
                    </h3>;
                  </div>;
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto>;
                    <pre className=text-red-400 text-sm font-mono">;
                      <code>;
                        {JSON && JSON.stringify(responseExamples && responseExamples.error, null, 2)}
                      </code>;
                    </pre>;
                  </div>;
                </motion && motion.div>;
        {/* Response Examples */}
        <section className="py - 20 bg - gray - 50>;
          <div className=container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 16;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className=text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 6">;
                Response Examples;
              </h2>;
              <p className="text - lg text - gray - 600 max - w-3xl mx - auto>;
                Understand the structure of our API responses with these;
                examples.;
              </p>;
            </motion.div>;
            <div className=max - w-4xl mx - auto">;
              <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 8>;
                <motion.div;
                  className=bg - white border border - gray - 200 rounded - lg p - 6";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >;
                  <div className="flex items - center mb - 4>;
                    <Check className=w - 6 h - 6 text - green - 500 mr - 3" />;
                    <h3 className="text - lg font - semibold text - gray - 900>;
                      Success Response;
                    </h3>;
                  </div>;
                  <div className=bg - gray - 900 rounded - lg p - 4 overflow - x-auto">;
                    <pre className="text - green - 400 text - sm font - mono>;
                      <code>;
                        {JSON.stringify (response_examples.success, null, 2)}
                      </code>;
                    </pre>;
                  </div>;
                </motion.div>;
                <motion.div;
                  className=bg - white border border - gray - 200 rounded - lg p - 6";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
import Head from next/head;
import Layout from '../components/Layout';

export default function APIPage() {
  
    >
      <div className="min-h-screen bg-gray-50>
        <section className=bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4>
            <div className=text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6>
                API Services
              </h1>
              <p className=text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Powerful, scalable API solutions for your applications
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - indigo - 600 to - purple - 600 text - white>;
          <div className=container mx - auto px - 4">;
            <motion.div;
              className="text - center;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className=text - 3xl md:text - 4xl font - bold mb - 6">;
                Ready to Get Started?;
              </h2>;
              <p className="text - xl text - indigo - 100 mb - 8 max - w-3xl mx - auto>;
                Start building with our APIs today. Get your API key and begin;
                integrating with our powerful services.;
              </p>;
              <div className=flex flex - col sm:flex - row gap - 4 justify - center">;
                <a;
                  href="/contact;
                  className=px - 8 py - 4 bg - white text - indigo - 600 rounded - lg hover:shadow - lg transition - all duration - 300 font - semibold";
                >;
                  Get API Key;
                </a>;
                <a;
                  href="/docs;
                  className=px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - indigo - 600 transition - all duration - 300 font - semibold";
                >;
                  View Documentation;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>);
}
      </main>
</>
  );
}
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
