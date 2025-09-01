import React, { useState } from 'react';'
import { motion } from 'framer-motion';
import {

  Code,
  Brain,
  Cloud,
  Shield,
  Database,
  Network,
  Play,
  Copy,
  Download,
  BookOpen,
  Settings,
  Search,
  Filter,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Clock,
  Zap,
  Globe,
  Key,
  FileText,'
  ExternalLink} from 'lucide-react';'
import { SEO } from '../components/SEO';

const ApiPlayground: React.FC = () => {
  const [selectedApi, setSelectedApi] = useState<any>(null);'
  const [requestBody, setRequestBody] = useState('');'
  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsLoading] = useState(false);'
  const [activeTab, setActiveTab] = useState('playground');

  const categories = ['
    { id: 'all', name: 'All Categories', icon: Code, count: 0 },'
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },'
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 6 },'
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 5 },'
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 7 },'
    { id: 'iot', name: 'IoT & Edge', icon: Network, count: 4 },
  ];

  const methods = ['
    { id: 'all', name: 'All Methods', count: 0 },'
    { id: 'GET', name: 'GET', count: 0, color: 'text-green-400' },'
    { id: 'POST', name: 'POST', count: 0, color: 'text-blue-400' },'
    { id: 'PUT', name: 'PUT', count: 0, color: 'text-yellow-400' },'
    { id: 'DELETE', name: 'DELETE', count: 0, color: 'text-red-400' },
  ];

  const apis = [
    {

      id: 1,'
      name: 'AI Text Analysis',
      description:'
        'Analyze text sentiment, extract entities, and perform language processing tasks.','
      category: 'ai-ml','
      method: 'POST','
      endpoint: '/api/v1/ai/text-analysis','
      baseUrl: 'https://api.ziontechgroup.com','
      version: '1.0.0','
      status: 'stable','
      rateLimit: '1000 requests/hour','
      authentication: 'Bearer Token',
      parameters: [
        {
'
          name: 'text','
          type: 'string',
          required: true,'
          description: 'Text to analyze'},
        {
'
          name: 'language','
          type: 'string',
          required: false,'
          description: 'Language code (default: auto-detect)'},
        {
'
          name: 'features','
          type: 'array',
          required: false,'
          description: 'Analysis features to enable'},
      ],
      requestExample: {
'
        text: "I love this new AI technology! It's amazing how it can understand context.",'
        language: 'en','
        features: ['sentiment', 'entities', 'keywords']},
      responseExample: {
'
        sentiment: { score: 0.9, label: 'positive' },
        entities: ['
          { text: 'AI technology', type: 'technology', confidence: 0.95 },
        ],'
        keywords: ['AI', 'technology', 'amazing', 'context'],'
        language: 'en'},'
      documentation: 'https://docs.ziontechgroup.com/api/ai-text-analysis','
      sdk: 'https://github.com/ziontechgroup/ai-sdk',
      featured: true},
    {

      id: 2,'
      name: 'Cloud Resource Management',
      description:'
        'Manage cloud infrastructure, deploy resources, and monitor performance.','
      category: 'cloud','
      method: 'GET','
      endpoint: '/api/v1/cloud/resources','
      baseUrl: 'https://api.ziontechgroup.com','
      version: '1.0.0','
      status: 'stable','
      rateLimit: '500 requests/hour','
      authentication: 'API Key',
      parameters: [
        {
'
          name: 'region','
          type: 'string',
          required: false,'
          description: 'Cloud region'},
        {
'
          name: 'type','
          type: 'string',
          required: false,'
          description: 'Resource type'},
        {
'
          name: 'status','
          type: 'string',
          required: false,'
          description: 'Resource status'},
      ],
      requestExample: {
'
        region: 'us-east-1','
        type: 'compute','
        status: 'running'},
      responseExample: {

        resources: [
          {
'
            id: 'i-1234567890abcdef0','
            name: 'web-server-01','
            type: 'compute','
            status: 'running','
            region: 'us-east-1'},
        ],
        total: 1},'
      documentation: 'https://docs.ziontechgroup.com/api/cloud-resources','
      sdk: 'https://github.com/ziontechgroup/cloud-sdk',
      featured: false},
    {

      id: 3,'
      name: 'Security Threat Detection','
      description: 'Detect and analyze security threats in real-time.','
      category: 'security','
      method: 'POST','
      endpoint: '/api/v1/security/threats','
      baseUrl: 'https://api.ziontechgroup.com','
      version: '1.0.0','
      status: 'stable','
      rateLimit: '200 requests/hour','
      authentication: 'Bearer Token',
      parameters: [
        {
'
          name: 'data','
          type: 'object',
          required: true,'
          description: 'Security event data'},
        {
'
          name: 'severity','
          type: 'string',
          required: false,'
          description: 'Threat severity level'},
      ],
      requestExample: {

        data: {
'
          source_ip: '192.168.1.100','
          event_type: 'login_attempt','
          timestamp: '2024-01-15T10:30:00Z'},'
        severity: 'high'},
      responseExample: {

        threat_detected: true,
        confidence: 0.95,'
        threat_type: 'brute_force_attack','
        recommendations: ['Enable 2FA', 'Block IP temporarily']},'
      documentation: 'https://docs.ziontechgroup.com/api/security-threats','
      sdk: 'https://github.com/ziontechgroup/security-sdk',
      featured: true},
  ];

  const getMethodColor = (method: string) => {

    switch (method) {
'
      case 'GET':'
        return 'text-green-400';'
      case 'POST':'
        return 'text-blue-400';'
      case 'PUT':'
        return 'text-yellow-400';'
      case 'DELETE':'
        return 'text-red-400';
      default:'
        return 'text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {

    switch (status) {
'
      case 'stable':'
        return 'bg-green-500/20 text-green-400';'
      case 'beta':'
        return 'bg-yellow-500/20 text-yellow-400';'
      case 'deprecated':'
        return 'bg-red-500/20 text-red-400';
      default:'
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const handleApiSelect = (api: any) => {

    setSelectedApi(api);
    setRequestBody(JSON.stringify(api.requestExample, null, 2));'
    setResponseData('');
  };

  const handleTestApi = async () => {
    if (!selectedApi) return;

    setIsLoading(true);'
    setResponseData('');

    // Simulate API call
    setTimeout(() => {
      setResponseData(JSON.stringify(selectedApi.responseExample, null, 2));
      setIsLoading(false);
    }, 2000);
  };

  const copyToClipboard = (text: string) => {

    navigator.clipboard.writeText(text);
  };

  return()
    <>
      <SEO"
        title="API Playground - Zion Tech Group"'"
        description="Interactive API playground for testing and exploring Zion Tech Group's APIs. Try our AI, cloud, security, and data analytics APIs.""
        keywords="API playground, API testing, REST API, AI API, cloud API, security API, Zion Tech Group"
      />
"
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Header */}"
        <section className="pt-32 pb-16 px-4">"
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >"
              <div className="flex items-center justify-center space-x-3 mb-6">"
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">"
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>"
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                API Playground
              </h1>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Interactive playground for testing and exploring Zion Tech'
                Group's APIs. Try our AI, cloud, security, and data analytics
                APIs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}"
        <section className="py-16 px-4">"
          <div className="max-w-7xl mx-auto">"
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* API List */}"
              <div className="lg:col-span-1">"
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">"
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Available APIs
                  </h2>
"
                  <div className="space-y-4">
                    {apis.map((api, index) => (
                      <motion.div
                        key={api.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${

                          selectedApi?.id === api.id'
                            ? 'border-blue-500 bg-blue-500/10''
                            : 'border-slate-700/50 bg-slate-700/30 hover:border-slate-600/50'`
                        }`}
                        onClick={() => handleApiSelect(api)}
                      >"
                        <div className="flex items-start justify-between mb-2">"
                          <h3 className="text-white font-semibold">
                            {api.name}
                          </h3>"
                          <div className="flex items-center gap-2">
                            <span`
                              className={`px-2 py-1 rounded text-xs font-medium ${getMethodColor(api.method)}`}
                            >
                              {api.method}
                            </span>
                            <span`
                              className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(api.status)}`}
                            >
                              {api.status}
                            </span>
                          </div>
                        </div>
"
                        <p className="text-gray-300 text-sm mb-3">
                          {api.description}
                        </p>
"
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{api.endpoint}</span>
                          {api.featured && ("
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">
                              Featured
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Playground */}"
              <div className="lg:col-span-2">"
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
                  {/* Tabs */}"
                  <div className="flex border-b border-slate-700/50">
                    <button'
                      onClick={() => setActiveTab('playground')}`
                      className={`px-6 py-3 text-sm font-medium transition-colors ${
'
                        activeTab === 'playground''
                          ? 'text-blue-400 border-b-2 border-blue-400''
                          : 'text-gray-400 hover:text-gray-300'`
                      }`}
                    >
                      Playground
                    </button>
                    <button'
                      onClick={() => setActiveTab('documentation')}`
                      className={`px-6 py-3 text-sm font-medium transition-colors ${
'
                        activeTab === 'documentation''
                          ? 'text-blue-400 border-b-2 border-blue-400''
                          : 'text-gray-400 hover:text-gray-300'`
                      }`}
                    >
                      Documentation
                    </button>
                  </div>

                  {/* Tab Content */}"
                  <div className="p-6">'
                    {activeTab === 'playground' ? (
                      <div>
                        {selectedApi ? ("
                          <div className="space-y-6">
                            {/* API Info */}"
                            <div className="bg-slate-700/50 rounded-lg p-4">"
                              <div className="flex items-center justify-between mb-3">"
                                <h3 className="text-white font-semibold text-lg">
                                  {selectedApi.name}
                                </h3>"
                                <div className="flex items-center gap-2">
                                  <span`
                                    className={`px-2 py-1 rounded text-xs font-medium ${getMethodColor(selectedApi.method)}`}
                                  >
                                    {selectedApi.method}
                                  </span>"
                                  <span className="text-gray-400 text-sm">
                                    {selectedApi.endpoint}
                                  </span>
                                </div>
                              </div>"
                              <p className="text-gray-300 text-sm mb-3">
                                {selectedApi.description}
                              </p>"
                              <div className="flex items-center gap-4 text-xs text-gray-400">
                                <span>Rate Limit: {selectedApi.rateLimit}</span>
                                <span>Auth: {selectedApi.authentication}</span>
                                <span>Version: {selectedApi.version}</span>
                              </div>
                            </div>

                            {/* Request */}
                            <div>"
                              <div className="flex items-center justify-between mb-3">"
                                <h4 className="text-white font-medium">
                                  Request Body
                                </h4>
                                <button
                                  onClick={() => copyToClipboard(requestBody)}"
                                  className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm"
                                >"
                                  <Copy className="w-4 h-4" />
                                  Copy
                                </button>
                              </div>
                              <textarea
                                value={requestBody}
                                onChange={e => setRequestBody(e.target.value)}"
                                className="w-full h-32 bg-slate-900 border border-slate-600 rounded-lg p-3 text-gray-300 font-mono text-sm resize-none""
                                placeholder="Enter request body..."
                              />
                            </div>

                            {/* Test Button */}
                            <button
                              onClick={handleTestApi}
                              disabled={isLoading}"
                              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                              {isLoading ? (
                                <>"
                                  <Clock className="w-5 h-5 animate-spin" />
                                  Testing API...
                                </>
                              ) : (
                                <>"
                                  <Play className="w-5 h-5" />
                                  Test API
                                </>
                              )}
                            </button>

                            {/* Response */}
                            {responseData && (
                              <div>"
                                <div className="flex items-center justify-between mb-3">"
                                  <h4 className="text-white font-medium">
                                    Response
                                  </h4>
                                  <button
                                    onClick={() =>
                                      copyToClipboard(responseData)
                                    }"
                                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm"
                                  >"
                                    <Copy className="w-4 h-4" />
                                    Copy
                                  </button>
                                </div>"
                                <pre className="w-full bg-slate-900 border border-slate-600 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                                  {responseData}
                                </pre>
                              </div>
                            )}
                          </div>
                        ) : ("
                          <div className="text-center py-12">"
                            <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />"
                            <h3 className="text-white text-xl font-semibold mb-2">
                              Select an API
                            </h3>"
                            <p className="text-gray-400">
                              Choose an API from the list to start testing
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        {selectedApi ? ("
                          <div className="space-y-6">
                            <div>"
                              <h3 className="text-white font-semibold text-lg mb-4">
                                API Documentation
                              </h3>"
                              <div className="bg-slate-700/50 rounded-lg p-4 mb-4">"
                                <h4 className="text-white font-medium mb-2">
                                  Endpoint
                                </h4>"
                                <code className="text-blue-400 font-mono">
                                  {selectedApi.baseUrl}
                                  {selectedApi.endpoint}
                                </code>
                              </div>
"
                              <div className="bg-slate-700/50 rounded-lg p-4 mb-4">"
                                <h4 className="text-white font-medium mb-2">
                                  Parameters
                                </h4>"
                                <div className="space-y-2">
                                  {selectedApi.parameters.map()
                                    (param: any, idx: number) => (
                                      <div
                                        key={idx}"
                                        className="flex items-center justify-between text-sm"
                                      >
                                        <div>"
                                          <span className="text-white font-medium">
                                            {param.name}
                                          </span>"
                                          <span className="text-gray-400 ml-2">
                                            ({param.type})
                                          </span>
                                          {param.required && ("
                                            <span className="text-red-400 ml-2">
                                              *
                                            </span>
                                          )}
                                        </div>"
                                        <span className="text-gray-400 text-xs">
                                          {param.description}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
"
                              <div className="flex gap-2">
                                <a
                                  href={selectedApi.documentation}"
                                  target="_blank""
                                  rel="noopener noreferrer""
                                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                                >"
                                  <BookOpen className="w-4 h-4" />
                                  Full Documentation
                                </a>
                                <a
                                  href={selectedApi.sdk}"
                                  target="_blank""
                                  rel="noopener noreferrer""
                                  className="flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors"
                                >"
                                  <Download className="w-4 h-4" />
                                  Download SDK
                                </a>
                              </div>
                            </div>
                          </div>
                        ) : ("
                          <div className="text-center py-12">"
                            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />"
                            <h3 className="text-white text-xl font-semibold mb-2">
                              Select an API
                            </h3>"
                            <p className="text-gray-400">
                              Choose an API from the list to view documentation
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ApiPlayground;
'"`