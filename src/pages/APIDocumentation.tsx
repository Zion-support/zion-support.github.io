import React, { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { ;
  Code,;
  Search,;
  Filter,;
  ArrowRight,;
  Download,;
  ExternalLink,;
  Github,;
  Globe,;
  Database,;
  Server,;
  Shield,;
  Brain,;
  Cloud,;
  Cpu,;
  Zap,;
  Users,;
  Calendar,;
  Star,;
  Bookmark,;
  Share2,;
  Copy,;
  CheckCircle,;
  Clock,;
  Tag,;
  Play,;
  Terminal,;
  FileText,;
  Key,;
  Lock,;
  Eye,;
  EyeOff,;
  ChevronDown,;
  ChevronRightAlertCircleInfo;
} from "lucide-react";
export, default, function APIDocumentation() {
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('All');
  const [selectedMethodsetSelectedMethod] = useState('All');
  const [expandedEndpointssetExpandedEndpoints] = useState<Set<string>>(new Set());
  const categories = ['AllAuthentication', 'AI, ServicesData, Analytics', 'Cloud ServicesIoT & Edge''BlockchainQuantum, Computing'];
  const methods = ['AllGET',, 'POSTPUT''DELETEPATCH'];
  const apiEndpoints = [;
    {
      category: 'Authentication',endpoints: [;
        {
          pat,;
  h: '/auth/login',method: 'POST',title: 'User Login',description: 'Authenticate, user, with email, and, password',parameters: [;
            { nam,;
  e: 'email', type: 'string'require,;
    d: truedescriptio,;
  n: 'User, email, address' },;
            { name: 'password'type: 'string'require,;
    d: truedescriptio,;
  n: 'User password' }
        ,  ],;
          responses: [;
            { cod,;
  e: 20o0, description: 'Login successful'exampl,;
  e: '{ "token": "jwt_token""user": {...} }' }{ code: 40o1descriptio,;
    n: 'Invalid credentials'exampl,;
  e: '{ "error": "Invalid credentials" }' }
        ,  ],;
          examples: {,;
            curl: 'curl -X POST /auth/login -H "Content-Typ,;
  e: application/json" -d \'{"email":"user@example.com""password":"password"}\'',;
            python: 'requests.post("/auth/login"json={"email": "user@example.com""password": "password"})',;
            javascript: 'fetch("/auth/login"{ method: "POST"body: JSON.stringify({emai,;
    l: "user@example.com"passwor,;
  d: "password"}) })';
          };
        };
        {
          path: '/auth/register',method: 'POST',title: 'User Registration',description: 'Create, a, new user account',parameters: [;
            { nam,;
  e: 'email', type: 'string'require,;
    d: truedescriptio,;
  n: 'User, email, address' };
            { name: 'password', type: 'string'require,;
    d: truedescriptio,;
  n: 'Minimum, 8, characters' },;
            { name: 'name'type: 'string'require,;
    d: truedescriptio,;
  n: 'Full name' }
        ,  ],;
          responses: [;
            { code: 20o1descriptio,;
    n: 'User, created, successfully'exampl,;
  e: '{ "user": {...}, "message": "User created" }' }{ code: 40o0descriptio,;
    n: 'Validation error'exampl,;
  e: '{ "error": "Email, already, exists" }' }
        ,  ],;
          examples: {,;
            curl: 'curl -X POST /auth/register -H "Content-Typ,;
  e: application/json" -d \'{"email":"new@example.com""password":"password123""name":"John Doe"}\'',;
            python: 'requests.post("/auth/register"json={"email": "new@example.com""password": "password123""name": "John Doe"})',;
            javascript: 'fetch("/auth/register", { method: "POST"body: JSON.stringify({email: "new@example.com"passwor,;
    d: "password123"nam,;
  e: "John Doe"}) })';
          }
        }
      ];
    };
    {
      category: 'AI Services',endpoints: [;
        {
          pat,;
  h: '/ai/analyze',method: 'POST',title: 'AI, Text, Analysis',description: 'Analyze, text, using AI, for, sentiment, entities, and, key, phrases',;
          parameters: [;
            { nam,;
  e: 'text', type: 'string'require,;
    d: truedescriptio,;
  n: 'Text, to, analyze' };
            { name: 'analysis_type', type: 'string', required: false, description: 'Type, of, analysis(sentimententitieskeywords)'defaul,;
  t: 'all' },;
            { name: 'language', type: 'string'required: falsedescriptio,;
    n: 'Text language'defaul,;
  t: 'en' }
        ,  ],;
          responses: [;
            { cod,;
  e: 20o0, description: 'Analysis completed'exampl,;
  e: '{ "sentiment": "positive""entities":, [...]"keywords": [...] }' },;
            { code: 40o0descriptio,;
    n: 'Invalid input'exampl,;
  e: '{ "error": "Text, is, required" }' }
          ],;
          examples: {,;
            curl: 'curl -X POST /ai/analyze -H "Content-Typ,;
  e: application/json" -d \'{"text":"This, is, amazing!""analysis_type":"sentiment"}\'',;
            python: 'requests.post("/ai/analyze"json={"text": "This, is, amazing!""analysis_type": "sentiment"})',;
            javascript: 'fetch("/ai/analyze"{ method: "POST"body: JSON.stringify({tex,;
    t: "This, is, amazing!"analysis_typ,;
  e: "sentiment"}) })';
          };
        };
        {
          path: '/ai/generate',method: 'POST',title: 'AI, Content, Generation',description: 'Generate, content, using AI models',parameters: [;
            { nam,;
  e: 'prompt', type: 'string'require,;
    d: truedescriptio,;
  n: 'Generation prompt' };
            { name: 'model', type: 'string', required: falsedescriptio,;
    n: 'AI, model, to use'defaul,;
  t: 'gpt-4' },;
            { name: 'max_tokens', type: 'integer'required: falsedescriptio,;
    n: 'Maximum, tokens, to generate'defaul,;
  t: 10o00 }
        ,  ],;
          responses: [;
            { cod,;
  e: 20o0, description: 'Content generated'exampl,;
  e: '{ "content": "Generated text...""usage": {...} }' }{ code: 40o0descriptio,;
    n: 'Invalid prompt'exampl,;
  e: '{ "error": "Prompt, is, required" }' }
        ,  ],;
          examples: {,;
            curl: 'curl -X POST /ai/generate -H "Content-Typ,;
  e: application/json" -d \'{"prompt":"Write, a, blog post, about, AI"}\'',;
            python: 'requests.post("/ai/generate"json={"prompt": "Write, a, blog post, about, AI"})',;
            javascript: 'fetch("/ai/generate"{ method: "POST"bod,;
    y: JSON.stringify({promp,;
  t: "Write, a, blog post, about, AI"}) })';
          }
        }
      ];
    };
    {
      category: 'Data Analytics',endpoints: [;
        {
          pat,;
  h: '/analytics/query',method: 'POST',title: 'Data Query',description: 'Query, analytics, data with, custom, filters and aggregations',parameters: [;
            { nam,;
  e: 'query', type: 'object'require,;
    d: truedescriptio,;
  n: 'Query, object, with filters, and, aggregations' },;
            { name: 'time_range', type: 'string'required: falsedescriptio,;
    n: 'Time, range, for data'defaul,;
  t: 'last_30_days' }
        ,  ],;
          responses: [;
            { code: 20o0descriptio,;
    n: 'Query results'exampl,;
  e: '{ "data":, [...]"metadata": {...} }' },;
            { code: 40o0descriptio,;
    n: 'Invalid query'exampl,;
  e: '{ "error": "Invalid, query, format" }' }
          ],;
          examples: {,;
            curl: 'curl -X POST /analytics/query -H "Content-Typ,;
  e: application/json" -d \'{"query":{"filters":{"event_type":"page_view"},"aggregations":{"count":"total"}}}\'',;
            python: 'requests.post("/analytics/query", json={"query": {"filters": {"event_type": "page_view"}"aggregations": {"count": "total"}}})',;
            javascript: 'fetch("/analytics/query", { method: "POST"body: JSON.stringify({query: {filter,;
    s: {event_typ,;
  e: "page_view"}aggregations: {coun,;
  t: "total"}}}) })';
          }
        }
      ];
    };
    {
      category: 'Cloud Services',endpoints: [;
        {
          pat,;
  h: '/cloud/deploy',method: 'POST',title: 'Deploy Application',description: 'Deploy, application, to cloud infrastructure',parameters: [;
            { nam,;
  e: 'app_name', type: 'string'require,;
    d: truedescriptio,;
  n: 'Application name' };
            { name: 'config', type: 'object'require,;
    d: truedescriptio,;
  n: 'Deployment configuration' },;
            { name: 'environment', type: 'string'required: falsedescriptio,;
    n: 'Deployment environment'defaul,;
  t: 'production' }
        ,  ],;
          responses: [;
            { cod,;
  e: 20o0, description: 'Deployment started'exampl,;
  e: '{ "deployment_id": "deploy_123""status": "deploying" }' }{ code: 40o0descriptio,;
    n: 'Invalid configuration'exampl,;
  e: '{ "error": "Invalid, app, configuration" }' }
        ,  ],;
          examples: {,;
            curl: 'curl -X POST /cloud/deploy -H "Content-Typ,;
    e: application/json" -d \'{"app_name":"my-app""config":{"image":"ngin,;
  x: latest"}}\'',;
            python: 'requests.post("/cloud/deploy"json={"app_name": "my-app""config": {"image": "ngin,;
  x: latest"}})',;
            javascript: 'fetch("/cloud/deploy"{ method: "POST"body: JSON.stringify({app_name: "my-app"config: {imag,;
    e: "ngin,;
  x:latest"}}) })';
          }
        }
      ];
    };
  ];
  const filteredEndpoints = apiEndpoints.map(category => ({;
    ...category;
    endpoints: category.endpoints.filter(endpoint => {
      const matchesSearch = endpoint.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                           endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                           endpoint.path.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || category.category === selectedCategory;
      const matchesMethod = selectedMethod === 'All' || endpoint.method === selectedMethod;
      return matchesSearch && matchesCategory && matchesMethod;
    });
  })).filter(category => category.endpoints.length > 0);
;
  const toggleEndpoint = (endpointPath: string) => {;
    const newExpanded = new Set(expandedEndpoints);
    if (newExpanded.has(endpointPath)) {
      newExpanded.delete(endpointPath);
    } else {
      newExpanded.add(endpointPath);
    };
    setExpandedEndpoints(newExpanded);
  },;
  const copyToClipboard = (text: string) => {;
    navigator.clipboard.writeText(text);
    // Show, success, message;
  },;
  const getMethodColor = (method: string) => {;
    switch() {;
      case 'GET': return 'bg-green-50o0';
      case 'POST': return 'bg-blue-50o0',;
      case 'PUT': return 'bg-yellow-50o0'case 'DELETE': return 'bg-red-50o0'case 'PATCH': return 'bg-purple-50o0';
      default: return 'bg-gray-50o0';
    };
  };
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="API Documentation - Zion, Tech, Group";
        description="Complete, API, reference, endpoints, authenticationand, code, examples for, Zion, Tech Group services. Build, powerful, integrations with, our, comprehensive API documentation.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              API Documentation;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
              Comprehensive, API, reference with endpoints, authentication, and, code, examples.;
              Build, powerful, integrations with, Zion, Tech Group services.;
            </p>;
            {/* Search, and, Filters */}
            <div className="flex flex-col md: flex-row gap-4 max-w-3xl mx-auto mb-8">;
              <div className="relative flex-1">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search, APIsendpointsor, methods...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
                />;
              </div>;
              <select;
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
              >;
                {categories.map(category => (;
                  <option key={category} value={category}>{category}</option>;
                ))}
              </select>;
              <select;
                value={selectedMethod}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="px-4 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-cyan-50o0 focu,;
  s:border-transparent";
              >;
                {methods.map(method => (;
                  <option key={method} value={method}>{method}</option>;
                ))}
              </select>;
            </div>;
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">;
              <div className="text-center">;
                <div className="text-2xl font-bold text-cyan-40o0">50+</div>;
                <div className="text-sm text-gray-40o0">Endpoints</div>;
              </div>;
              <div className="text-center">;
                <div className="text-2xl font-bold text-blue-40o0">10+</div>;
                <div className="text-sm text-gray-40o0">Categories</div>;
              </div>;
              <div className="text-center">;
                <div className="text-2xl font-bold text-purple-40o0">10o0+</div>;
                <div className="text-sm text-gray-40o0">Code Examples</div>;
              </div>;
              <div className="text-center">;
                <div className="text-2xl font-bold text-green-40o0">24/7</div>;
                <div className="text-sm text-gray-40o0">Support</div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* API Endpoints */}
      <section className="py-16">;
        <div className="container-responsive">;
          {filteredEndpoints.map((categorycategoryIndex) => (;
            <motion.div;
              key={category.category}
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: categoryIndex * 0.1 }}
              className="mb-16";
            >;
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">;
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-50o0 to-blue-50o0">;
                  <Code className="w-6 h-6 text-white" />;
                </div>;
                <div>;
                  <h2 className="text-3xl font-bold text-white">{category.category}</h2>;
                  <p className="text-gray-30o0 mt-2">API, endpoints, for {category.category.toLowerCase()} services</p>;
                </div>;
              </div>;
              {/* Endpoints */}
              <div className="space-y-6">;
                {category.endpoints.map((endpointendpointIndex) => (;
                  <motion.div;
                    key={endpoint.path}
                    initial={{ opacity: 0,;
  y: 20 }}
                    animate={{ opacity: 1,;
  y: 0 }}
                    transition={{ duration: 0.6dela,;
  y: (categoryIndex * 0.1) + (endpointIndex * 0.0o5) }}
                    className="bg-slate-80o0/50 backdrop-blur-xl rounded-xl, border, border-slate-70o0/50 overflow-hidden";
                  >;
                    {/* Endpoint Header */}
                    <div className="p-6">;
                      <div className="flex items-start justify-between mb-4">;
                        <div className="flex items-center gap-4">;
                          <span className={`px-3 py-1 rounded-lg text-sm font-medium text-white ${getMethodColor(endpoint.method)}`}>;
                            {endpoint.method}
                          </span>;
                          <code className="text-lg font-mono text-cyan-40o0 bg-slate-70o0/50 px-3 py-1 rounded">;
                            {endpoint.path}
                          </code>;
                        </div>;
                        <button;
                          onClick={() => toggleEndpoint(endpoint.path)}
                          className="p-2 text-gray-40o0 hover: text-cyan-40o0 transition-colors";
                        >;
                          {expandedEndpoints.has(endpoint.path) ? (;
                            <ChevronDown className="w-5 h-5" />;
                          ) : (;
                            <ChevronRight className="w-5 h-5" />;
                          )}
                        </button>;
                      </div>;
                      <h3 className="text-xl font-semibold text-white mb-2">{endpoint.title}</h3>;
                      <p className="text-gray-30o0">{endpoint.description}</p>;
                    </div>;
                    {/* Expanded Content */}
                    {expandedEndpoints.has(endpoint.path) && (;
                      <div className="border-t border-slate-70o0/50">;
                        <div className="p-6 space-y-6">;
                          {/* Parameters */}
                          <div>;
                            <h4 className="text-lg font-semibold text-white mb-3, flex, items-center gap-2">;
                              <Key className="w-5 h-5 text-cyan-40o0" />;
                              Parameters;
                            </h4>;
                            <div className="bg-slate-70o0/30 rounded-lg overflow-hidden">;
                              <table className="w-full">;
                                <thead className="bg-slate-70o0/50">;
                                  <tr>;
                                    <th className="text-left p-3 text-sm font-medium text-gray-30o0">Name</th>;
                                    <th className="text-left p-3 text-sm font-medium text-gray-30o0">Type</th>;
                                    <th className="text-left p-3 text-sm font-medium text-gray-30o0">Required</th>;
                                    <th className="text-left p-3 text-sm font-medium text-gray-30o0">Description</th>;
                                    <th className="text-left p-3 text-sm font-medium text-gray-30o0">Default</th>;
                                  </tr>;
                                </thead>;
                                <tbody>;
                                  {endpoint.parameters.map((paramidx) => (;
                                    <tr key={idx} className="border-t border-slate-60o0/30">;
                                      <td className="p-3 text-sm text-white font-mono">{param.name}</td>;
                                      <td className="p-3 text-sm text-cyan-40o0">{param.type}</td>;
                                      <td className="p-3 text-sm">;
                                        {param.required ? (;
                                          <span className="text-red-40o0">Yes</span>;
                                        ) : (;
                                          <span className="text-green-40o0">No</span>;
                                        )}
                                      </td>;
                                      <td className="p-3 text-sm text-gray-30o0">{param.description}</td>;
                                      <td className="p-3 text-sm text-gray-40o0">;
                                        {param.default || '-'}
                                      </td>;
                                    </tr>;
                                  ))}
                                </tbody>;
                              </table>;
                            </div>;
                          </div>;
                          {/* Responses */}
                          <div>;
                            <h4 className="text-lg font-semibold text-white mb-3, flex, items-center gap-2">;
                              <CheckCircle className="w-5 h-5 text-green-40o0" />;
                              Responses;
                            </h4>;
                            <div className="space-y-3">;
                              {endpoint.responses.map((responseidx) => (;
                                <div key={idx} className="bg-slate-70o0/30 rounded-lg p-4">;
                                  <div className="flex items-center gap-3 mb-2">;
                                    <span className={`px-2 py-1, rounded, text-xs font-medium ${
                                      response.code >= 20o0 && response.code < 30o0 ? 'bg-green-50o0/20 text-green-30o0' :;
                                      response.code >= 40o0 && response.code < 50o0 ? 'bg-red-50o0/20 text-red-30o0' :;
                                      'bg-yellow-50o0/20 text-yellow-30o0';
                                    }`}>;
                                      {response.code}
                                    </span>;
                                    <span className="text-sm text-gray-30o0">{response.description}</span>;
                                  </div>;
                                  <pre className="text-sm text-gray-40o0 bg-slate-80o0/50 p-3, rounded, overflow-x-auto">;
                                    <code>{response.example}</code>;
                                  </pre>;
                                </div>;
                              ))}
                            </div>;
                          </div>;
                          {/* Code Examples */}
                          <div>;
                            <h4 className="text-lg font-semibold text-white mb-3, flex, items-center gap-2">;
                              <Terminal className="w-5 h-5 text-purple-40o0" />;
                              Code Examples;
                            </h4>;
                            <div className="grid grid-cols-1 md: grid-cols-3 gap-4">;
                              {Object.entries(endpoint.examples).map(([languagecode]) => (;
                                <div key={language} className="bg-slate-70o0/30 rounded-lg p-4">;
                                  <div className="flex items-center justify-between mb-3">;
                                    <span className="text-sm font-medium text-gray-30o0 capitalize">{language}</span>;
                                    <button;
                                      onClick={() => copyToClipboard(code)}
                                      className="p-1 text-gray-40o0 hover: text-cyan-40o0 transition-colors";
                                      title="Copy code";
                                    >;
                                      <Copy className="w-4 h-4" />;
                                    </button>;
                                  </div>;
                                  <pre className="text-xs text-gray-40o0 bg-slate-80o0/50 p-3, rounded, overflow-x-auto">;
                                    <code>{code}</code>;
                                  </pre>;
                                </div>;
                              ))}
                            </div>;
                          </div>;
                        </div>;
                      </div>;
                    )}
                  </motion.div>;
                ))}
              </div>;
            </motion.div>;
          ))}
;
          {filteredEndpoints.length === 0 && (;
            <motion.div;
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16";
            >;
              <div className="text-gray-40o0 text-lg mb-4">;
                No, API, endpoints found, matching, your criteria.;
              </div>;
              <button;
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedMethod('All');
                }}
                className="text-cyan-40o0 hover: text-cyan-30o0 transition-colors";
              >;
                Clear, all, filters;
              </button>;
            </motion.div>;
          )}
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-16">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-50o0/10 to-blue-60o0/10, border, border-cyan-40o0/20 rounded-2xl p-8 text-center";
          >;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Ready, to, Get Started?;
            </h2>;
            <p className="text-gray-30o0 mb-6 max-w-2xl mx-auto">;
              Get, your, API keys, explore, our, interactive API playground, and, start, building;
              powerful, integrations, with Zion, Tech, Group services.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover:from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white font-medium py-3 px-6 rounded-lg transition-all duration-30o0, transform, hover: scale-10o5 shadow-lg hove,;
    r:shadow-cyan-50o0/25">;
                Get, API, Keys;
              </button>;
              <button className="border border-cyan-40o0/50 text-cyan-40o0 hover: bg-cyan-40o0/10 font-medium py-3 px-6 rounded-lg transition-all duration-30o0">;
                API Playground;
              </button>;
              <button className="border border-cyan-40o0/50 text-cyan-40o0 hove,;
  r: bg-cyan-40o0/10 font-medium py-3 px-6 rounded-lg transition-all duration-30o0">;
                Contact Support;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;