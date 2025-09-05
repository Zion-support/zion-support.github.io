<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { 
  Code,
  Database, 
  Globe, 
  Shield, 
  Zap, 
  Bot, 
  BarChart3, 
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  ExternalLink,
  Play,
  BookOpen,
  Github,
  Terminal
} from 'lucide-react',
=======
import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {_Code, _Database, _Globe, _Shield, _Zap, _Bot, _BarChart3, _Lock, _ArrowRight, _CheckCircle, _Star, _ExternalLink, _Play, _BookOpen, _Github, _Terminal} from 'lucide-react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function ApiToolsPage() {_const _apiTools = [
    {
<<<<<<< HEAD
      icon: <Code className=&quot;w-8 h-8 text-white&quot; />,
      title: 'CodeGen API - AI-Powered Code Generation',
      description: 'Generate production-ready code in multiple languages using natural language descriptions and AI.',
      features: [
        'Support for 20+ programming languagesReal-time code completion and suggestionsCustom code templates and patternsIntegration with popular IDEsCode review and optimization suggestions'
      ],
      pricing: {
        free: '100 requests/month',
        pro: '$49/month',
        enterprise: 'Custom'
      },
=======
      icon: <Code className="w-8 h-8 text-white" />, _title: 'CodeGen API - AI-Powered Code Generation', _description: 'Generate production-ready code in multiple languages using natural language descriptions and AI.', _features: [
        'Support for 20+ programming languages', _'Real-time code completion and suggestions', _'Custom code templates and patterns', _'Integration with popular IDEs', _'Code review and optimization suggestions'
      ], _pricing: {
        free: '100 requests/month', _pro: '$49/month', _enterprise: 'Custom'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      category: 'Development',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500',
      website: 'https://codegen.api',
      docs: 'https://docs.codegen.api',
      github: 'https://github.com/codegen-api',
      status: 'Live',
      users: '15,000+',
      rating: 4.8,
      responseTime: '<100ms'
    },
<<<<<<< HEAD
    {
      icon: <Database className=&quot;w-8 h-8 text-white&quot; />,
      title: 'DataSync API - Real-time Data Synchronization',
      description: 'Seamlessly sync data across multiple databases, applications, and cloud services in real-time.',
      features: [
        'Multi-database support (PostgreSQL, MySQL, MongoDB)Real-time change detection and propagationConflict resolution and data validationWebhook support for custom integrationsComprehensive audit logging and monitoring'
      ],
      pricing: {
        free: '1,000 syncs/month',
        pro: '$79/month',
        enterprise: 'Custom'
      },
=======
    {_icon: <Database className="w-8 h-8 text-white" />, _title: 'DataSync API - Real-time Data Synchronization', _description: 'Seamlessly sync data across multiple databases, _applications, _and cloud services in real-time.', _features: [
        'Multi-database support (PostgreSQL, _MySQL, _MongoDB)', _'Real-time change detection and propagation', _'Conflict resolution and data validation', _'Webhook support for custom integrations', _'Comprehensive audit logging and monitoring'
      ], _pricing: {
        free: '1, _000 syncs/month', _pro: '$79/month', _enterprise: 'Custom'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      category: 'Data',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500',
      website: 'https://datasync.api',
      docs: 'https://docs.datasync.api',
      github: 'https://github.com/datasync-api',
      status: 'Live',
      users: '8,500+',
      rating: 4.9,
      responseTime: '<50ms'
    },
<<<<<<< HEAD
    {
      icon: <Globe className=&quot;w-8 h-8 text-white&quot; />,
      title: 'GeoAPI - Advanced Geospatial Services',
      description: 'Comprehensive geolocation, mapping, and spatial analysis APIs for location-based applications.',
      features: [
        'Global geocoding and reverse geocodingReal-time traffic and routing optimizationGeofencing and location trackingMap visualization and customizationSpatial data analysis and clustering'
      ],
      pricing: {
        free: '10,000 requests/month',
        pro: '$99/month',
        enterprise: 'Custom'
      },
=======
    {_icon: <Globe className="w-8 h-8 text-white" />, _title: 'GeoAPI - Advanced Geospatial Services', _description: 'Comprehensive geolocation, _mapping, _and spatial analysis APIs for location-based applications.', _features: [
        'Global geocoding and reverse geocoding', _'Real-time traffic and routing optimization', _'Geofencing and location tracking', _'Map visualization and customization', _'Spatial data analysis and clustering'
      ], _pricing: {
        free: '10, _000 requests/month', _pro: '$99/month', _enterprise: 'Custom'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      category: 'Location',
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      gradient: 'from-purple-400 to-pink-500',
      website: 'https://geo.api',
      docs: 'https://docs.geo.api',
      github: 'https://github.com/geo-api',
      status: 'Live',
      users: '12,000+',
      rating: 4.7,
      responseTime: '<75ms'
    },
<<<<<<< HEAD
    {
      icon: <Shield className=&quot;w-8 h-8 text-white&quot; />,
      title: 'AuthGuard API - Enterprise Authentication',
      description: 'Secure, scalable authentication and authorization system with advanced security features.',
      features: [
        'Multi-factor authentication (MFA)OAuth 2.0 and OpenID Connect supportRole-based access control (RBAC)Advanced threat detection and preventionCompliance with SOC2, GDPR, and HIPAA'
      ],
      pricing: {
        free: '1,000 users/month',
        pro: '$149/month',
        enterprise: 'Custom'
      },
=======
    {_icon: <Shield className="w-8 h-8 text-white" />, _title: 'AuthGuard API - Enterprise Authentication', _description: 'Secure, _scalable authentication and authorization system with advanced security features.', _features: [
        'Multi-factor authentication (MFA)', _'OAuth 2.0 and OpenID Connect support', _'Role-based access control (RBAC)', _'Advanced threat detection and prevention', _'Compliance with SOC2, _GDPR, _and HIPAA'
      ], _pricing: {
        free: '1, _000 users/month', _pro: '$149/month', _enterprise: 'Custom'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      category: 'Security',
      color: 'bg-gradient-to-br from-red-500 to-orange-600',
      gradient: 'from-red-400 to-orange-500',
      website: 'https://authguard.api',
      docs: 'https://docs.authguard.api',
      github: 'https://github.com/authguard-api',
      status: 'Live',
      users: '6,800+',
      rating: 4.9,
      responseTime: '<25ms'
    },
<<<<<<< HEAD
    {
      icon: <Zap className=&quot;w-8 h-8 text-white&quot; />,
      title: 'WebhookHub - Intelligent Webhook Management',
      description: 'Reliable webhook delivery, retry logic, and event processing for modern applications.',
      features: [
        'Guaranteed webhook delivery with retry logicEvent filtering and transformationReal-time monitoring and analyticsCustom authentication and securityIntegration with popular platforms'
      ],
      pricing: {
        free: '5,000 webhooks/month',
        pro: '$39/month',
        enterprise: 'Custom'
      },
=======
    {_icon: <Zap className="w-8 h-8 text-white" />, _title: 'WebhookHub - Intelligent Webhook Management', _description: 'Reliable webhook delivery, _retry logic, _and event processing for modern applications.', _features: [
        'Guaranteed webhook delivery with retry logic', _'Event filtering and transformation', _'Real-time monitoring and analytics', _'Custom authentication and security', _'Integration with popular platforms'
      ], _pricing: {
        free: '5, _000 webhooks/month', _pro: '$39/month', _enterprise: 'Custom'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      category: 'Integration',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      gradient: 'from-yellow-400 to-orange-500',
      website: 'https://webhookhub.api',
      docs: 'https://docs.webhookhub.api',
      github: 'https://github.com/webhookhub-api',
      status: 'Live',
      users: '9,200+',
      rating: 4.8,
      responseTime: '<30ms'
    },
<<<<<<< HEAD
    {
      icon: <Bot className=&quot;w-8 h-8 text-white&quot; />,
      title: 'NLP API - Natural Language Processing',
      description: 'Advanced text analysis, sentiment detection, and language understanding capabilities.',
      features: [
        'Text classification and categorizationSentiment analysis and emotion detectionNamed entity recognition (NER)Language detection and translationCustom model training and fine-tuning'
      ],
      pricing: {
        free: '5,000 requests/month',
        pro: '$69/month',
        enterprise: 'Custom'
      },
=======
    {_icon: <Bot className="w-8 h-8 text-white" />, _title: 'NLP API - Natural Language Processing', _description: 'Advanced text analysis, _sentiment detection, _and language understanding capabilities.', _features: [
        'Text classification and categorization', _'Sentiment analysis and emotion detection', _'Named entity recognition (NER)', _'Language detection and translation', _'Custom model training and fine-tuning'
      ], _pricing: {
        free: '5, _000 requests/month', _pro: '$69/month', _enterprise: 'Custom'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      category: 'AI/ML',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      gradient: 'from-indigo-400 to-purple-500',
      website: 'https://nlp.api',
      docs: 'https://docs.nlp.api',
      github: 'https://github.com/nlp-api',
      status: 'Live',
      users: '11,500+',
      rating: 4.7,
      responseTime: '<200ms'
    },
<<<<<<< HEAD
    {
      icon: <BarChart3 className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Analytics API - Business Intelligence',
      description: 'Comprehensive analytics and reporting APIs for data-driven decision making.',
      features: [
        'Real-time data aggregation and analysisCustom dashboard creation and sharingAdvanced filtering and segmentationExport capabilities (CSV, JSON, PDF)Scheduled reports and alerts'
      ],
      pricing: {
        free: '10,000 events/month',
        pro: '$89/month',
        enterprise: 'Custom'
      },
=======
    {_icon: <BarChart3 className="w-8 h-8 text-white" />, _title: 'Analytics API - Business Intelligence', _description: 'Comprehensive analytics and reporting APIs for data-driven decision making.', _features: [
        'Real-time data aggregation and analysis', _'Custom dashboard creation and sharing', _'Advanced filtering and segmentation', _'Export capabilities (CSV, _JSON, _PDF)', _'Scheduled reports and alerts'
      ], _pricing: {
        free: '10, _000 events/month', _pro: '$89/month', _enterprise: 'Custom'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      category: 'Analytics',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500',
      website: 'https://analytics.api',
      docs: 'https://docs.analytics.api',
      github: 'https://github.com/analytics-api',
      status: 'Live',
      users: '7,800+',
      rating: 4.8,
      responseTime: '<150ms'
    },
<<<<<<< HEAD
    {
      icon: <Lock className=&quot;w-8 h-8 text-white&quot; />,
      title: 'EncryptAPI - Data Encryption Services',
      description: 'Enterprise-grade encryption, hashing, and cryptographic operations for secure applications.',
      features: [
        'AES-256 encryption and decryptionSecure key management and rotationDigital signatures and certificatesCompliance with FIPS 140-2 standardsHardware security module (HSM) support'
      ],
      pricing: {
        free: '1,000 operations/month',
        pro: '$119/month',
        enterprise: 'Custom'
      },
=======
    {_icon: <Lock className="w-8 h-8 text-white" />, _title: 'EncryptAPI - Data Encryption Services', _description: 'Enterprise-grade encryption, _hashing, _and cryptographic operations for secure applications.', _features: [
        'AES-256 encryption and decryption', _'Secure key management and rotation', _'Digital signatures and certificates', _'Compliance with FIPS 140-2 standards', _'Hardware security module (HSM) support'
      ], _pricing: {
        free: '1, _000 operations/month', _pro: '$119/month', _enterprise: 'Custom'},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      category: 'Security',
      color: 'bg-gradient-to-br from-gray-500 to-slate-600',
      gradient: 'from-gray-400 to-slate-500',
      website: 'https://encrypt.api',
      docs: 'https://docs.encrypt.api',
      github: 'https://github.com/encrypt-api',
      status: 'Live',
      users: '4,200+',
      rating: 4.9,
      responseTime: '<20ms'
    }
  ],

<<<<<<< HEAD
  const categories = ['AllDevelopmentDataLocationSecurityIntegrationAI/MLAnalytics'],
  const [selectedCategory, setSelectedCategory] = React.useState('All'),
=======
  const _categories = ['All', 'Development', 'Data', 'Location', 'Security', 'Integration', 'AI/ML', 'Analytics'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredTools = selectedCategory === 'All' 
    ? apiTools 
    : apiTools.filter(tool => tool.category === selectedCategory),

  return (
    <>
      <Head>
        <title>API Tools & Developer Services | Zion Tech Group - Powerful APIs for Modern Applications</title>
        <meta name=&quot;description&quot; content=&quot;Discover powerful APIs and developer tools for building modern applications. From AI-powered code generation to real-time data synchronization, we provide the building blocks you need.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;API Tools & Developer Services | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Powerful APIs and developer tools for modern applications. AI, security, analytics, and more.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

<<<<<<< HEAD
      {/* Hero Section */}
      <section className=&quot;relative py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]&quot; />
=======
      {_/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6&quot;>
            <Terminal className=&quot;w-4 h-4 mr-2&quot; />
            Developer-First API Solutions
          </div>
          <h1 className=&quot;text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white leading-tight&quot;>
            Powerful API Tools & Services
          </h1>
          <p className=&quot;text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed&quot;>
            Build faster, scale better, and deliver more with our comprehensive collection of developer APIs. Each tool is designed for performance, reliability, and ease of integration.
          </p>
          
<<<<<<< HEAD
          <div className=&quot;flex flex-wrap justify-center gap-4 mb-8&quot;>
            {categories.map((category) => (
              <button
=======
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {_categories.map(_(category) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                key={category}
                onClick={_() => setSelectedCategory(category)}
                className={_`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}
              >
                {_category}
              </button>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* API Tools Grid */}
      <section className=&quot;py-24 bg-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold mb-6 text-white&quot;>
              {selectedCategory === 'All' ? 'All API Tools' : `${selectedCategory} APIs`}
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              {filteredTools.length} APIs available. Each tool is production-ready with comprehensive documentation, SDKs, and support.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {filteredTools.map((tool, index) => (
              <Card
                key={index}
                className=&quot;group border border-gray-800 hover:border-indigo-500/30 transition-all duration-300&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;flex items-start space-x-6&quot;>
                  <div className=&quot;relative&quot;>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {tool.icon}
=======
      {_/* API Tools Grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              {_selectedCategory === 'All' ? 'All API Tools' : `${selectedCategory} APIs`}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {_filteredTools.length} APIs available. Each tool is production-ready with comprehensive documentation, SDKs, and support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_filteredTools.map(_(tool, _index) => (
              <Card
                key={index}
                className="group border border-gray-800 hover:border-indigo-500/30 transition-all duration-300"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={_`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {_tool.icon}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                    <div className={_`absolute -inset-2 bg-gradient-to-r from-transparent via-${tool.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  
<<<<<<< HEAD
                  <div className=&quot;flex-1&quot;>
                    <div className=&quot;flex items-center justify-between mb-3&quot;>
                      <h3 className=&quot;text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300&quot;>
                        {tool.title}
                      </h3>
                      <div className=&quot;flex items-center space-x-2&quot;>
                        <div className=&quot;flex items-center text-yellow-400&quot;>
                          <Star className=&quot;w-4 h-4 fill-current&quot; />
                          <span className=&quot;ml-1 text-sm font-medium&quot;>{tool.rating}</span>
                        </div>
                        <span className=&quot;px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium&quot;>
                          {tool.status}
=======
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                        {_tool.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm font-medium">{_tool.rating}</span>
                        </div>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium">
                          {_tool.status}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </span>
                      </div>
                    </div>
                    
<<<<<<< HEAD
                    <p className=&quot;text-gray-400 leading-relaxed mb-6&quot;>
                      {tool.description}
                    </p>
                    
                    <div className=&quot;grid grid-cols-3 gap-4 mb-6&quot;>
                      <div className=&quot;text-center p-3 bg-gray-800/50 rounded-lg&quot;>
                        <div className=&quot;text-lg font-bold text-indigo-400&quot;>{tool.users}</div>
                        <div className=&quot;text-xs text-gray-500&quot;>Users</div>
                      </div>
                      <div className=&quot;text-center p-3 bg-gray-800/50 rounded-lg&quot;>
                        <div className=&quot;text-lg font-bold text-green-400&quot;>{tool.responseTime}</div>
                        <div className=&quot;text-xs text-gray-500&quot;>Response</div>
                      </div>
                      <div className=&quot;text-center p-3 bg-gray-800/50 rounded-lg&quot;>
                        <div className=&quot;text-sm font-medium text-gray-300&quot;>Starting at</div>
                        <div className=&quot;text-lg font-bold text-green-400&quot;>{tool.pricing.free}</div>
                      </div>
                    </div>

                    <ul className=&quot;space-y-2 mb-6&quot;>
                      {tool.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className=&quot;flex items-center text-gray-300 text-sm&quot;>
                          <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 flex-shrink-0&quot; />
                          {feature}
=======
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {_tool.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-lg font-bold text-indigo-400">{_tool.users}</div>
                        <div className="text-xs text-gray-500">Users</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-lg font-bold text-green-400">{_tool.responseTime}</div>
                        <div className="text-xs text-gray-500">Response</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-sm font-medium text-gray-300">Starting at</div>
                        <div className="text-lg font-bold text-green-400">{_tool.pricing.free}</div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {_tool.features.slice(0, _3).map(_(feature, _featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </li>
                      ))}
                    </ul>

                    <div className=&quot;flex flex-wrap gap-3&quot;>
                      <Button
<<<<<<< HEAD
                        href={tool.website}
                        variant=&quot;primary&quot;
                        size=&quot;sm&quot;
                        className=&quot;bg-indigo-600 hover:bg-indigo-700&quot;
=======
                        href={_tool.website}
                        variant="primary"
                        size="sm"
                        className="bg-indigo-600 hover:bg-indigo-700"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        <ExternalLink className=&quot;w-4 h-4 mr-2&quot; />
                        Visit API
                      </Button>
                      <Button
<<<<<<< HEAD
                        href={tool.docs}
                        variant=&quot;outline&quot;
                        size=&quot;sm&quot;
                        className=&quot;border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-400&quot;
=======
                        href={_tool.docs}
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:border-indigo-500 hover:text-indigo-400"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        <BookOpen className=&quot;w-4 h-4 mr-2&quot; />
                        Documentation
                      </Button>
                      <Button
<<<<<<< HEAD
                        href={tool.github}
                        variant=&quot;ghost&quot;
                        size=&quot;sm&quot;
                        className=&quot;text-gray-400 hover:text-indigo-400&quot;
=======
                        href={_tool.github}
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-indigo-400"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        <Github className=&quot;w-4 h-4 mr-2&quot; />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Developer Resources */}
      <section className=&quot;py-24 bg-gray-800&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold mb-6 text-white&quot;>
=======
      {_/* Developer Resources */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Developer Resources
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Everything you need to get started and build amazing applications with our APIs.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            <Card className=&quot;text-center border border-gray-700 hover:border-indigo-500/30&quot;>
              <div className=&quot;w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6&quot;>
                <BookOpen className=&quot;w-8 h-8 text-indigo-400&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Comprehensive Documentation</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>
                Detailed API references, code examples, and integration guides for every service.
              </p>
              <Button href=&quot;/docs&quot; variant=&quot;outline&quot; size=&quot;sm&quot;>
                Explore Docs
                <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
              </Button>
            </Card>

            <Card className=&quot;text-center border border-gray-700 hover:border-indigo-500/30&quot;>
              <div className=&quot;w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6&quot;>
                <Play className=&quot;w-8 h-8 text-indigo-400&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Interactive Playground</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>
                Test APIs directly in your browser with our interactive testing environment.
              </p>
              <Button href=&quot;/playground&quot; variant=&quot;outline&quot; size=&quot;sm&quot;>
                Try Playground
                <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
              </Button>
            </Card>

            <Card className=&quot;text-center border border-gray-700 hover:border-indigo-500/30&quot;>
              <div className=&quot;w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6&quot;>
                <Github className=&quot;w-8 h-8 text-indigo-400&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Open Source SDKs</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>
                Official SDKs and client libraries for popular programming languages and frameworks.
              </p>
              <Button href=&quot;/sdk&quot; variant=&quot;outline&quot; size=&quot;sm&quot;>
                Browse SDKs
                <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
              </Button>
            </Card>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
=======
      {_/* CTA Section */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size: 20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
=======
      <section className=&quot;py-24 bg-gradient-to-r from-indigo-600 to-indigo-700 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10&quot; />
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10&quot;>
          <h2 className=&quot;text-4xl sm:text-5xl font-bold text-white mb-8&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            Ready to Build Something Amazing?
          </h2>
          <p className=&quot;text-xl text-indigo-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            Start integrating our APIs today and join thousands of developers building the future.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
            <Button
              href=&quot;/contact&quot;
              variant=&quot;secondary&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl&quot;
            >
              Get API Access
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;/docs&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-indigo-600 shadow-2xl&quot;
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}