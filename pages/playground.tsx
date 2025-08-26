import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Playground: React.FC = () => {
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState('automation');
  const [demoData, setDemoData] = useState({
    automation: { status: 'running', progress: 65 },
    performance: { score: 92, metrics: { speed: 'Fast', accessibility: 'Good', seo: 'Excellent' } },
    security: { scanStatus: 'completed', vulnerabilities: 0, recommendations: 3 }
  });

  const playgroundTools = [
    {
      id: 'automation',
      name: 'Automation Testing',
      description: 'Test automation workflows and see real-time execution',
      icon: '🤖',
      features: ['Workflow Builder', 'Execution Monitor', 'Performance Metrics']
=======
  const [activeDemo, setActiveDemo] = useState('automation');

  const demos = [
    {
      id: 'automation',
      name: 'Automation Demo',
      icon: '⚙️',
      description: 'Experience our automation platform in action',
      status: 'Live'
    },
    {
      id: 'ai-content',
      name: 'AI Content Generation',
      icon: '🤖',
      description: 'Generate content using our AI-powered tools',
      status: 'Live'
>>>>>>> origin/cursor/update-content-and-fix-links-5397
    },
    {
      id: 'performance',
      name: 'Performance Testing',
<<<<<<< HEAD
      description: 'Analyze application performance and identify bottlenecks',
      icon: '⚡',
      features: ['Lighthouse Integration', 'Speed Analysis', 'Optimization Tips']
=======
      icon: '⚡',
      description: 'Test and optimize your applications',
      status: 'Live'
>>>>>>> origin/cursor/update-content-and-fix-links-5397
    },
    {
      id: 'security',
      name: 'Security Scanner',
<<<<<<< HEAD
      description: 'Scan for vulnerabilities and security best practices',
      icon: '🔒',
      features: ['Vulnerability Detection', 'Security Audit', 'Compliance Check']
    },
    {
      id: 'api',
      name: 'API Testing',
      description: 'Test API endpoints and validate responses',
      icon: '🔌',
      features: ['Request Builder', 'Response Validator', 'Error Testing']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running': return '🔄';
      case 'completed': return '✅';
      case 'error': return '❌';
      default: return '⏸️';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Playground - bolt.new.zion.app</title>
        <meta name="description" content="Interactive playground for testing automation, performance, and security features" />
        <meta name="keywords" content="playground, testing, automation, performance, security, demos" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
=======
      icon: '🔒',
      description: 'Scan your code for security vulnerabilities',
      status: 'Live'
    }
  ];

  const automationFeatures = [
    { name: 'Workflow Builder', description: 'Visual workflow creation tool', status: 'Active' },
    { name: 'Task Scheduler', description: 'Automated task scheduling system', status: 'Active' },
    { name: 'Monitoring Dashboard', description: 'Real-time system monitoring', status: 'Active' },
    { name: 'Alert System', description: 'Intelligent alerting and notifications', status: 'Active' }
  ];

  const aiContentExamples = [
    { type: 'Blog Post', prompt: 'Write a blog post about automation trends', status: 'Ready' },
    { type: 'Product Description', prompt: 'Create a product description for an automation tool', status: 'Ready' },
    { type: 'Technical Documentation', prompt: 'Generate API documentation', status: 'Ready' },
    { type: 'Marketing Copy', prompt: 'Write marketing copy for a tech product', status: 'Ready' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Head>
        <title>Playground - bolt.new.zion.app</title>
        <meta name="description" content="Interactive playground to test and explore our automation and AI tools" />
        <meta name="keywords" content="playground, demo, automation, AI, testing, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
>>>>>>> origin/cursor/update-content-and-fix-links-5397
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Interactive Playground
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Test and experiment with our automation tools, performance testing, and security features 
              in a safe, interactive environment.
            </p>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Home
              </Link>
              <Link href="/live-dashboard" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Dashboard
              </Link>
              <Link href="/component-library" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Components
              </Link>
            </div>
          </nav>

          {/* Tool Selection */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Tool</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {playgroundTools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`p-6 rounded-lg border-2 transition-all text-center ${
                    activeTab === tool.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                  <div className="space-y-1">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="text-xs text-gray-500">• {feature}</div>
                    ))}
                  </div>
=======
            <p className="text-xl text-gray-600">
              Test, explore, and experience our cutting-edge automation and AI tools in real-time
            </p>
            <div className="mt-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available Demos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`p-6 border rounded-lg text-center transition-all ${
                    activeDemo === demo.id
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-4xl mb-3">{demo.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{demo.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{demo.description}</p>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {demo.status}
                  </span>
>>>>>>> origin/cursor/update-content-and-fix-links-5397
                </button>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Active Tool Interface */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {playgroundTools.find(t => t.id === activeTab)?.name}
            </h2>

            {activeTab === 'automation' && (
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Sample Automation Workflow</h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(demoData.automation.status)}`}>
                      {demoData.automation.status}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{demoData.automation.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${demoData.automation.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-3 border border-gray-200 rounded-lg">
                      <div className="text-2xl mb-2">📊</div>
                      <div className="text-sm font-semibold">Data Collection</div>
                      <div className="text-xs text-gray-500">Completed</div>
                    </div>
                    <div className="text-center p-3 border border-gray-200 rounded-lg">
                      <div className="text-2xl mb-2">🔄</div>
                      <div className="text-sm font-semibold">Processing</div>
                      <div className="text-xs text-gray-500">In Progress</div>
                    </div>
                    <div className="text-center p-3 border border-gray-200 rounded-lg">
                      <div className="text-2xl mb-2">📤</div>
                      <div className="text-sm font-semibold">Output</div>
                      <div className="text-xs text-gray-500">Pending</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Start New Workflow
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    View Logs
                  </button>
=======
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            {activeDemo === 'automation' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Automation Platform Demo</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Live Features</h3>
                    <div className="space-y-4">
                      {automationFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-800">{feature.name}</h4>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            {feature.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Interactive Demo</h3>
                    <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-4">⚙️</div>
                        <p className="text-gray-600">Automation Platform</p>
                        <p className="text-sm text-gray-500">Click to interact</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Start Workflow
                      </button>
                      <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                        View Dashboard
                      </button>
                    </div>
                  </div>
>>>>>>> origin/cursor/update-content-and-fix-links-5397
                </div>
              </div>
            )}

<<<<<<< HEAD
            {activeTab === 'performance' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Score</h3>
                    <div className="text-center">
                      <div className="text-6xl font-bold text-blue-600 mb-2">{demoData.performance.score}</div>
                      <div className="text-2xl text-gray-600">/ 100</div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Speed</span>
                        <span className="font-semibold text-green-600">{demoData.performance.metrics.speed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Accessibility</span>
                        <span className="font-semibold text-yellow-600">{demoData.performance.metrics.accessibility}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>SEO</span>
                        <span className="font-semibold text-blue-600">{demoData.performance.metrics.seo}</span>
=======
            {activeDemo === 'ai-content' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">AI Content Generation Demo</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Content Types</h3>
                    <div className="space-y-4">
                      {aiContentExamples.map((example, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-800">{example.type}</h4>
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                              {example.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{example.prompt}</p>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            Generate
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Generated Content</h3>
                    <div className="bg-gray-100 rounded-lg p-6 h-64">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-4">📝</div>
                        <p>Generated content will appear here</p>
                        <p className="text-sm">Select a content type to get started</p>
>>>>>>> origin/cursor/update-content-and-fix-links-5397
                      </div>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Optimization Recommendations</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <span className="text-yellow-600">💡</span>
                      <div>
                        <p className="font-semibold text-yellow-800">Image Optimization</p>
                        <p className="text-yellow-700 text-sm">Consider using WebP format for better compression</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <span className="text-blue-600">💡</span>
                      <div>
                        <p className="font-semibold text-blue-800">Caching Strategy</p>
                        <p className="text-blue-700 text-sm">Implement proper cache headers for static assets</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Run New Test
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Export Report
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-6 border border-gray-200 rounded-lg">
                    <div className="text-4xl mb-2">🔒</div>
                    <div className="text-2xl font-bold text-green-600">{demoData.security.vulnerabilities}</div>
                    <div className="text-sm text-gray-600">Vulnerabilities Found</div>
                  </div>
                  <div className="text-center p-6 border border-gray-200 rounded-lg">
                    <div className="text-4xl mb-2">✅</div>
                    <div className="text-2xl font-bold text-blue-600">{demoData.security.recommendations}</div>
                    <div className="text-sm text-gray-600">Security Recommendations</div>
                  </div>
                  <div className="text-center p-6 border border-gray-200 rounded-lg">
                    <div className="text-4xl mb-2">🛡️</div>
                    <div className="text-2xl font-bold text-green-600">A+</div>
                    <div className="text-sm text-gray-600">Security Grade</div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Scan Results</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <span className="text-green-600">✅</span>
                      <div>
                        <p className="font-semibold text-green-800">HTTPS Configuration</p>
                        <p className="text-green-700 text-sm">Properly configured with valid SSL certificate</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <span className="text-green-600">✅</span>
                      <div>
                        <p className="font-semibold text-green-800">Content Security Policy</p>
                        <p className="text-green-700 text-sm">CSP headers properly implemented</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <span className="text-blue-600">💡</span>
                      <div>
                        <p className="font-semibold text-blue-800">Rate Limiting</p>
                        <p className="text-blue-700 text-sm">Consider implementing rate limiting for API endpoints</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Run Security Scan
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    View Full Report
                  </button>
=======
              </div>
            )}

            {activeDemo === 'performance' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Performance Testing Demo</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Test Options</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Load Testing</h4>
                        <p className="text-sm text-gray-600 mb-3">Test your application under various load conditions</p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Start Test
                        </button>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Performance Analysis</h4>
                        <p className="text-sm text-gray-600 mb-3">Analyze performance metrics and bottlenecks</p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Analyze
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Test Results</h3>
                    <div className="bg-gray-100 rounded-lg p-6 h-64">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-4">📊</div>
                        <p>Performance test results will appear here</p>
                        <p className="text-sm">Run a test to see metrics</p>
                      </div>
                    </div>
                  </div>
>>>>>>> origin/cursor/update-content-and-fix-links-5397
                </div>
              </div>
            )}

<<<<<<< HEAD
            {activeTab === 'api' && (
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">API Endpoint Tester</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Endpoint URL</label>
                      <input
                        type="text"
                        placeholder="https://api.example.com/endpoint"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Method</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>GET</option>
                          <option>POST</option>
                          <option>PUT</option>
                          <option>DELETE</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Timeout</label>
                        <input
                          type="number"
                          placeholder="30"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Request Headers (JSON)</label>
                      <textarea
                        placeholder='{"Authorization": "Bearer token", "Content-Type": "application/json"}'
                        rows={3}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Send Request
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Clear Form
                  </button>
=======
            {activeDemo === 'security' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Security Scanner Demo</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Scan Options</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Code Analysis</h4>
                        <p className="text-sm text-gray-600 mb-3">Scan your code for security vulnerabilities</p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Scan Code
                        </button>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Dependency Check</h4>
                        <p className="text-sm text-gray-600 mb-3">Check for vulnerable dependencies</p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          Check Dependencies
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Scan Results</h3>
                    <div className="bg-gray-100 rounded-lg p-6 h-64">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-4">🔍</div>
                        <p>Security scan results will appear here</p>
                        <p className="text-sm">Run a scan to see findings</p>
                      </div>
                    </div>
                  </div>
>>>>>>> origin/cursor/update-content-and-fix-links-5397
                </div>
              </div>
            )}
          </div>

<<<<<<< HEAD
          {/* Quick Actions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to Explore More?</h2>
            <p className="text-blue-700 mb-6">
              Discover more tools and features to enhance your automation workflows.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/automation" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                View Automation
              </Link>
              <Link href="/live-dashboard" className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                Live Dashboard
              </Link>
              <Link href="/component-library" className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                Component Library
              </Link>
=======
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get Started</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Documentation</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to use our tools effectively with comprehensive documentation and tutorials.
                </p>
                <Link href="/api-documentation" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  View Docs
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Support</h3>
                <p className="text-gray-600 mb-4">
                  Need help? Our support team is available to assist you with any questions.
                </p>
                <Link href="/contact" className="inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Contact Support
                </Link>
              </div>
>>>>>>> origin/cursor/update-content-and-fix-links-5397
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;