import, React, from "react";
import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { ;
  Code,;
  Code2,;
  Search,;
  Copy,;
  CheckCircle,;
  ArrowRight,;
  ExternalLink,;
  Download,;
  Play,;
  Terminal,;
  Database,;
  Globe,;
  Shield,;
  Zap,;
  Clock,;
  User,;
  Star,;
  Bookmark,;
  Share2,;
  ChevronRight,;
  ChevronDown,;
  FileText,;
  Settings,;
  Key,;
  Lock,;
  Server,;
  Cloud,;
  Cpu,;
  Brain,;
  Eye,;
  MessageSquare,;
  Image,;
  FileText, as, FileTextIcon,;
  BarChart3,;
  TrendingUp,;
  Target,;
  Rocket,;
  GitBranch,;
  Package,;
  Database, as, DatabaseIcon,;
  Network,;
  Monitor,;
  SmartphoneTabletLaptop;
} from "lucide-react";
export, const, ApiDocs: React.FC = () => {;
  const [searchQuerysetSearchQuery] = React.useState('');
  const [selectedCategorysetSelectedCategory] = React.useState('all');
  const [expandedSectionssetExpandedSections] = React.useState<string[]>(['authenticationai-services']);
  const categories = [;
    { i,;
  d: 'all', name: 'All APIs'coun,;
    t: 0activ,;
  e: true };
    { id: 'authentication', name: 'Authentication'coun,;
    t: 3activ,;
  e: false };
    { id: 'ai-services', name: 'AI Services'coun,;
    t: 8activ,;
  e: false };
    { id: 'data-analytics', name: 'Data Analytics'coun,;
    t: 5activ,;
  e: false };
    { id: 'cloud-services', name: 'Cloud Services'coun,;
    t: 4activ,;
  e: false };
    { id: 'security', name: 'Security'coun,;
    t: 3activ,;
  e: false };
    { id: 'iot', name: 'IoT & Edge'coun,;
    t: 4activ,;
  e: false },;
    { id: 'quantum'name: 'Quantum Computing'coun,;
    t: 2activ,;
  e: false };
,  ];
  const apiSections = [;
    {
      id: 'authentication',title: 'Authentication & Security',icon: Shield,color: 'from-green-50o0 to-emerald-50o0',description: 'Secure, your, API calls, with, authentication and authorization',apis: [;
        {
          nam,;
  e: 'OAuth 2.0',description: 'Industry-standard, OAuth, 2.0, authentication, flow',endpoint: '/oauth2/authorize',method: 'POST',status: 'stable',version: 'v1',featured: true,documentation: '/docs/api/oauth2'sd,;
    k: trueexample,;
  s: true;
        };
        {
          name: 'API, Key, Management',description: 'Generate, and, manage API, keys, for your applications',endpoint: '/api/v1/keys',method: 'GET',status: 'stable',version: 'v1',featured: true,documentation: '/docs/api/keys'sd,;
    k: trueexample,;
  s: true;
        },;
        {
          name: 'JWT Tokens',description: 'JSON, Web, Token authentication, for, stateless APIs',endpoint: '/auth/jwt',method: 'POST',status: 'stable',version: 'v1',featured: falsedocumentation: '/docs/api/jwt'sd,;
    k: trueexample,;
  s: true;
        }
    ,  ];
    };
    {
      id: 'ai-services',title: 'AI & Machine, Learning, Services',icon: Brain,color: 'from-purple-50o0 to-pink-50o0',description: 'Access, our, cutting-edge, AI, capabilities through, RESTful, APIs',apis: [;
        {
          nam,;
  e: 'Natural, Language, Processing',description: 'Text analysis, sentiment analysis, and, language, understanding',;
          endpoint: '/api/v1/nlp/analyze',method: 'POST',status: 'stable',version: 'v2',featured: true,documentation: '/docs/api/nlp'sd,;
    k: trueexample,;
  s: true;
        };
        {
          name: 'Computer Vision',description: 'Image recognition, object detection, and, visual, analysis',;
          endpoint: '/api/v1/vision/analyze',method: 'POST',status: 'stable',version: 'v2',featured: true,documentation: '/docs/api/vision'sd,;
    k: trueexample,;
  s: true;
        };
        {
          name: 'Speech Recognition',description: 'Convert, speech, to text, with, high accuracy',endpoint: '/api/v1/speech/transcribe',method: 'POST',status: 'stable',version: 'v1',featured: true,documentation: '/docs/api/speech'sd,;
    k: trueexample,;
  s: true;
        };
        {
          name: 'Chatbot API',description: 'Build, conversational, AI chatbots',endpoint: '/api/v1/chat/completions',method: 'POST',status: 'stable',version: 'v1',featured: true,documentation: '/docs/api/chat'sd,;
    k: trueexample,;
  s: true;
        };
        {
          name: 'Predictive Analytics',description: 'Machine, learning, models for, business, predictions',endpoint: '/api/v1/ml/predict',method: 'POST',status: 'beta',version: 'v1',featured: false,documentation: '/docs/api/ml'sd,;
    k: trueexample,;
  s: false;
        };
        {
          name: 'Recommendation Engine',description: 'AI-powered, product, and content recommendations',endpoint: '/api/v1/recommendations',method: 'POST',status: 'beta',version: 'v1',featured: false,documentation: '/docs/api/recommendations'sd,;
    k: falseexample,;
  s: false;
        };
        {
          name: 'Anomaly Detection',description: 'Detect, unusual, patterns in, data, streams',endpoint: '/api/v1/anomaly/detect',method: 'POST',status: 'alpha',version: 'v1',featured: false,documentation: '/docs/api/anomaly'sd,;
    k: falseexample,;
  s: false;
        },;
        {
          name: 'AutoML',description: 'Automated, machine, learning model training',endpoint: '/api/v1/automl/train',method: 'POST',status: 'alpha',version: 'v1',featured: falsedocumentation: '/docs/api/automl'sd,;
    k: falseexample,;
  s: false;
        }
    ,  ];
    };
    {
      id: 'data-analytics',title: 'Data Analytics & Business Intelligence',icon: BarChart3,color: 'from-blue-50o0 to-cyan-50o0',description: 'Transform, raw, data into, actionable, business insights',apis: [;
        {
          nam,;
  e: 'Data Processing',description: 'ETL, operations, and data transformation',endpoint: '/api/v1/data/process',method: 'POST',status: 'stable',version: 'v1',featured: true,documentation: '/docs/api/data-processing'sd,;
    k: trueexample,;
  s: true;
        };
        {
          name: 'Real-time Analytics',description: 'Live, data, streaming and analysis',endpoint: '/api/v1/analytics/stream',method: 'GET',status: 'stable',version: 'v1',featured: true,documentation: '/docs/api/real-time-analytics'sd,;
    k: trueexample,;
  s: true;
        };
        {
          name: 'Report Generation',description: 'Automated, report, creation and scheduling',endpoint: '/api/v1/reports/generate',method: 'POST',status: 'stable',version: 'v1',featured: false,documentation: '/docs/api/reports'sd,;
    k: trueexample,;
  s: true;
        };
        {
          name: 'Data Visualization',description: 'Create charts, graphs, and dashboards',;
          endpoint: '/api/v1/visualization/create',method: 'POST',status: 'beta',version: 'v1',featured: false,documentation: '/docs/api/visualization'sd,;
    k: falseexample,;
  s: true;
        },;
        {
          name: 'Data Mining',description: 'Discover, patterns, and relationships, in, data',endpoint: '/api/v1/mining/discover',method: 'POST',status: 'alpha',version: 'v1',featured: falsedocumentation: '/docs/api/data-mining'sd,;
    k: falseexample,;
  s: false;
        }
    ,  ];
    };
    {
      id: 'cloud-services',title: 'Cloud & Infrastructure Services',icon: Cloud,color: 'from-indigo-50o0 to-purple-50o0',description: 'Manage, cloud, resources and, infrastructure, programmatically',apis: [;
        {
          nam,;
  e: 'Container Orchestration',description: 'Deploy, and, manage containerized applications',endpoint: '/api/v1/containers/deploy',method: 'POST',status: 'stable',version: 'v1',featured: true,documentation: '/docs/api/containers'sd,;
    k: trueexample,;
  s: true;
        };
        {
          name: 'Serverless Functions',description: 'Deploy, and, manage serverless functions',endpoint: '/api/v1/functions/deploy',method: 'POST',status: 'stable',version: 'v1',featured: true,documentation: '/docs/api/functions'sd,;
    k: trueexample,;
  s: true;
        };
        {
          name: 'Database Management',description: 'Create, and, manage databases, and, tables',endpoint: '/api/v1/databases',method: 'GET',status: 'stable',version: 'v1',featured: false,documentation: '/docs/api/databases'sd,;
    k: trueexample,;
  s: true;
        },;
        {
          name: 'Load Balancing',description: 'Configure, and, manage load balancers',endpoint: '/api/v1/loadbalancers',method: 'GET',status: 'beta',version: 'v1',featured: falsedocumentation: '/docs/api/loadbalancers'sd,;
    k: falseexample,;
  s: true;
        }
    ,  ];
    }
  ];
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>;
      prev.includes(sectionId);
        ? prev.filter(id => id !== sectionId);
        : [...prevsectionId];
    ) },;
;
  const filteredSections = apiSections.filter(section => ;
    selectedCategory === 'all' || section.id === selectedCategory;
  );
;
  const allApis = apiSections.flatMap(section =>;
    section.apis.map(api => ({ ...apisection: section.titlesectionI,;
  d: section.id }));
  );
  const filteredApis = allApis.filter(api =>;
    api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
    api.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
    api.section.toLowerCase().includes(searchQuery.toLowerCase());
  );
;
  const getStatusColor = (status: string) => {;
    switch() {;
      case 'stable': return 'bg-green-50o0/20 text-green-40o0 border-green-40o0/30';
      case 'beta': return 'bg-yellow-50o0/20 text-yellow-40o0 border-yellow-40o0/30'case 'alpha': return 'bg-red-50o0/20 text-red-40o0 border-red-40o0/30';
      defaul,;
  t: return 'bg-gray-50o0/20 text-gray-40o0 border-gray-40o0/30';
    };
  };
  const getMethodColor = (method: string) => {;
    switch() {;
      case 'GET': return 'bg-green-50o0/20 text-green-40o0 border-green-40o0/30';
      case 'POST': return 'bg-blue-50o0/20 text-blue-40o0 border-blue-40o0/30'case 'PUT': return 'bg-yellow-50o0/20 text-yellow-40o0 border-yellow-40o0/30'case 'DELETE': return 'bg-red-50o0/20 text-red-40o0 border-red-40o0/30';
      defaul,;
  t: return 'bg-gray-50o0/20 text-gray-40o0 border-gray-40o0/30';
    };
  };
  // Update, category, counts;
  React.useEffect(() => {
    categories.forEach() {
        const section = apiSections.find(s => s.id === cat.id);
        cat.count = section ? section.apis.length : 0;
      };
    }),;
    categories[0].count = allApis.length,;
  }, []),;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="API Documentation - Zion, Tech, Group";
        description="Comprehensive, API, documentation, endpoints, authenticationand, integration, guides for, Zion, Tech Group services.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50o0/20, border, border-indigo-40o0/30 rounded-full text-indigo-40o0 text-sm font-medium mb-6">;
              <Code2 className="w-4 h-4" />;
              Developer APIs;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              API Documentation &;
              <span className="block bg-gradient-to-r from-indigo-40o0 via-purple-50o0 to-pink-60o0 bg-clip-text text-transparent">;
                Integration Guides;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Build, powerful, applications with, our, comprehensive API suite.;
              From, AI, services to, cloud, infrastructureeverything you, need, to integrate, Zion, Tech Group solutions.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <div className="flex items-center gap-2 text-gray-40o0">;
                <Code2 className="w-5 h-5" />;
                <span>{allApis.length} API Endpoints</span>;
              </div>;
              <div className="flex items-center gap-2 text-gray-40o0">;
                <Code className="w-5 h-5" />;
                <span>Multiple SDKs</span>;
              </div>;
              <div className="flex items-center gap-2 text-gray-40o0">;
                <Shield className="w-5 h-5" />;
                <span>Secure & Reliable</span>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">;
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-50o0/10 rounded-full blur-3xl"></div>;
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-50o0/10 rounded-full blur-3xl"></div>;
        </div>;
      </section>;
      {/* Search, and, Filter Section */}
      <section className="py-12 border-b border-slate-70o0/50">;
        <div className="container-responsive">;
          <div className="flex flex-col lg: flex-row gap-6 items-center justify-between">;
            {/* Search */}
            <div className="relative flex-1 max-w-md">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-40o0" />;
              <input;
                type="text";
                placeholder="Search APIs...";
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-70o0/50, border, border-slate-60o0/50 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:border-indigo-40o0 focu,;
    s:ring-2 focu,;
  s:ring-indigo-40o0/20 transition-all duration-20o0";
              />;
            </div>;
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">;
              {categories.map((category) => (;
                <button;
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg, border, transition-all duration-20o0 ${
                    selectedCategory === category.id;
                      ? 'bg-indigo-40o0/20 border-indigo-40o0/40 text-indigo-40o0';
                      : 'bg-slate-70o0/50 border-slate-60o0/50 text-gray-30o0 hover: bg-slate-60o0/50 hove,;
  r:border-indigo-40o0/30';
                  }`}
                >;
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>;
                </button>;
              ))}
            </div>;
          </div>;
        </div>;
      </section>;
      {/* API Content */}
      <section className="py-16">;
        <div className="container-responsive">;
          {searchQuery ? (;
            // Search Results;
            <div>;
              <div className="mb-8">;
                <h2 className="text-2xl font-bold text-white mb-2">;
                  Search, Results, for "{searchQuery}";
                </h2>;
                <p className="text-gray-40o0">;
                  Found {filteredApis.length} APIs;
                </p>;
              </div>;
              <div className="space-y-4">;
                {filteredApis.map((apiindex) => (;
                  <motion.div;
                    key={`${api.sectionId}-${index}`}
                    initial={{ opacity: 0,;
  y: 20 }}
                    animate={{ opacity: 1,;
  y: 0 }}
                    transition={{ duration: 0.3dela,;
  y: index * 0.1 }}
                    className="group bg-slate-80o0/30, border, border-slate-70o0/30 rounded-xl p-6 hover: border-slate-60o0/50 transition-all duration-30o0 hove,;
  r:bg-slate-80o0/50";
                  >;
                    <div className="flex items-start justify-between">;
                      <div className="flex-1">;
                        <div className="flex items-center gap-3 mb-2">;
                          <span className="inline-block px-3 py-1 bg-slate-70o0/50 text-indigo-40o0 text-xs font-medium rounded-full">;
                            {api.section}
                          </span>;
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(api.status)}`}>;
                            {api.status}
                          </span>;
                          {api.featured && (;
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-50o0/20 text-indigo-40o0 text-xs rounded-full">;
                              <Star className="w-3 h-3" />;
                              Featured;
                            </span>;
                          )}
                        </div>;
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover: text-indigo-40o0 transition-colors">;
                          {api.name}
                        </h3>;
                        <p className="text-gray-40o0 text-sm mb-3">;
                          {api.description}
                        </p>;
                        <div className="flex items-center gap-4 text-sm text-gray-50o0">;
                          <span className="flex items-center gap-1">;
                            <Code className="w-4 h-4" />;
                            {api.endpoint}
                          </span>;
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getMethodColor(api.method)}`}>;
                            {api.method}
                          </span>;
                          <span className="flex items-center gap-1">;
                            <FileText className="w-4 h-4" />;
                            v{api.version}
                          </span>;
                        </div>;
                      </div>;
                      <div className="flex-shrink-0 ml-4">;
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50o0/20, border, border-indigo-40o0/30 text-indigo-40o0 text-sm font-medium rounded-lg hover:bg-indigo-50o0/30 transition-all duration-30o0">;
                          View Docs;
                          <ArrowRight className="w-4 h-4" />;
                        </button>;
                      </div>;
                    </div>;
                  </motion.div>;
                ))}
              </div>;
              {filteredApis.length === 0 && (;
                <div className="text-center py-12">;
                  <Search className="w-16 h-16 text-gray-40o0 mx-auto mb-4" />;
                  <p className="text-gray-40o0 text-lg">No, APIs, found matching, your, search.</p>;
                  <p className="text-gray-50o0 text-sm mt-2">Try, different, keywords or, browse, by category.</p>;
                </div>;
              )}
            </div>;
          ) : (;
            // Category-based, API, Documentation;
            <div className="space-y-8">;
              {filteredSections.map((sectionsectionIndex) => (;
                <motion.div;
                  key={section.id}
                  initial={{ opacity: 0,;
  y: 20 }}
                  animate={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: sectionIndex * 0.1 }}
                  className="bg-slate-80o0/30, border, border-slate-70o0/30 rounded-2xl overflow-hidden";
                >;
                  {/* Section Header */};
                  <button;
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left hover: bg-slate-80o0/50 transition-colors duration-20o0";
                  >;
                    <div className="flex items-center justify-between">;
                      <div className="flex items-center gap-4">;
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>;
                          <section.icon className="w-6 h-6 text-white" />;
                        </div>;
                        <div>;
                          <h2 className="text-2xl font-bold text-white">{section.title}</h2>;
                          <p className="text-gray-40o0 text-sm">;
                            {section.apis.length} APIs • {section.description}
                          </p>;
                        </div>;
                      </div>;
                      {expandedSections.includes(section.id) ? (;
                        <ChevronDown className="w-6 h-6 text-gray-40o0" />;
                      ) : (;
                        <ChevronRight className="w-6 h-6 text-gray-40o0" />;
                      )}
                    </div>;
                  </button>;
                  {/* Section Content */}
                  {expandedSections.includes(section.id) && (;
                    <div className="border-t border-slate-70o0/30">;
                      <div className="grid grid-cols-1 lg: grid-cols-2 gap-4 p-6">;
                        {section.apis.map((apiapiIndex) => (;
                          <motion.div;
                            key={api.endpoint}
                            initial={{ opacity: 0scal,;
  e: 0.95 }}
                            animate={{ opacity: 1scal,;
  e: 1 }}
                            transition={{ duration: 0.3dela,;
  y: apiIndex * 0.1 }}
                            className="group bg-slate-70o0/20, border, border-slate-60o0/20 rounded-xl p-4 hover: border-slate-50o0/40 hove,;
  r:bg-slate-70o0/30 transition-all duration-30o0";
                          >;
                            <div className="flex items-start justify-between mb-3">;
                              <div className="flex items-center gap-2">;
                                {api.featured && (;
                                  <Star className="w-4 h-4 text-yellow-40o0" />;
                                )}
                                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(api.status)}`}>;
                                  {api.status}
                                </span>;
                                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getMethodColor(api.method)}`}>;
                                  {api.method}
                                </span>;
                              </div>;
                              <span className="text-xs text-gray-50o0">v{api.version}</span>;
                            </div>;
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-40o0 transition-colors">;
                              {api.name}
                            </h3>;
                            <p className="text-gray-40o0 text-sm mb-4 line-clamp-2">;
                              {api.description}
                            </p>;
                            <div className="mb-4">;
                              <code className="text-xs text-gray-30o0 bg-slate-80o0/50 px-2 py-1 rounded">;
                                {api.endpoint}
                              </code>;
                            </div>;
                            <div className="flex items-center justify-between">;
                              <div className="flex gap-2">;
                                {api.sdk && (;
                                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50o0/20 text-green-40o0 text-xs rounded-full">;
                                    <Package className="w-3 h-3" />;
                                    SDK;
                                  </span>;
                                )}
                                {api.examples && (;
                                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50o0/20 text-blue-40o0 text-xs rounded-full">;
                                    <Code className="w-3 h-3" />;
                                    Examples;
                                  </span>;
                                )}
                              </div>;
                              <button className="inline-flex items-center gap-2 text-indigo-40o0 hover: text-indigo-30o0 text-sm font-medium transition-colors">;
                                View Docs;
                                <ArrowRight className="w-4 h-4" />;
                              </button>;
                            </div>;
                          </motion.div>;
                        ))}
                      </div>;
                    </div>;
                  )}
                </motion.div>;
              ))}
            </div>;
          )}
        </div>;
      </section>;
      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container-responsive">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">Quick Actions</h2>;
            <p className="text-gray-40o0">Get, started, quickly with, these, popular resources</p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
    g:grid-cols-4 gap-6">;
            {[;
              { nam,;
  e: 'API Playground', icon: Terminalcolo,;
    r: 'from-green-50o0 to-emerald-50o0'hre,;
  f: '/api-playground' };
              { name: 'SDK Downloads', icon: Downloadcolo,;
    r: 'from-blue-50o0 to-cyan-50o0'hre,;
  f: '/sdk-downloads' };
              { name: 'Code Examples', icon: Codecolo,;
    r: 'from-purple-50o0 to-pink-50o0'hre,;
  f: '/code-examples' },;
              { name: 'Rate Limits'icon: Settingscolo,;
    r: 'from-orange-50o0 to-red-50o0'hre,;
  f: '/rate-limits' }
          ,  ].map((actionindex) => (;
              <motion.a;
                key={action.name}
                href={action.href}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 text-center hover: border-indigo-40o0/50 transition-all duration-30o0 hove,;
  r:bg-slate-80o0/70";
              >;
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-30o0`}>;
                  <action.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-40o0 transition-colors">;
                  {action.name}
                </h3>;
              </motion.a>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20">;
        <div className="container-responsive text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready, to, Start Building?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Get, your, API keys, explore, our, interactive playground, and, start, integrating;
              Zion, Tech, Group services, into, your applications today.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-50o0 to-purple-60o0 hover:from-indigo-60o0 hove,;
    r:to-purple-70o0 text-white font-medium rounded-lg transition-all duration-30o0, transform, hover:scale-10o5">;
                Get, API, Keys;
              </button>;
              <button className="px-8 py-4 bg-slate-80o0/50, border, border-slate-60o0 text-white font-medium rounded-lg hove,;
  r: bg-slate-70o0/50 transition-all duration-30o0">;
                Try, API, Playground;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, ApiDocs;
;