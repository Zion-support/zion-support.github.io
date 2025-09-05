<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { 
  Zap,
  Shield, 
  BarChart3, 
  Globe, 
  Users, 
  Lock, 
  TrendingUp, 
  Code, 
  Database, 
  Cloud,
  ArrowRight,
  Star,
  Check,
  ExternalLink
} from 'lucide-react',
=======
import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {_Zap, _Shield, _BarChart3, _Globe, _Users, _Lock, _TrendingUp, _Code, _Database, _Cloud, _ArrowRight, _Star, _Check, _ExternalLink} from 'lucide-react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function SaaSMarketplacePage() {_const _microSaasServices = [
    {
<<<<<<< HEAD
      name: 'Zapier',
      description: 'Automate workflows between 5000+ apps with no code required. Connect your favorite tools and automate repetitive tasks.',
      category: 'Automation',
      pricing: 'Free - $19.99/month',
      rating: 4.8,
      users: '2M+',
      icon: <Zap className=&quot;w-8 h-8 text-orange-400&quot; />,
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      features: [
        '5000+ app integrationsVisual workflow builderMulti-step automationsScheduled triggersError handlingTeam collaboration'
      ],
      website: 'https://zapier.com',
      useCase: 'Perfect for businesses looking to automate customer support, marketing, and sales processes.',
      pros: ['Easy to useExtensive integrationsReliableGreat support'],
      cons: ['Can get expensiveLimited customization']
    },
    {
      name: 'Notion',
      description: 'All-in-one workspace for notes, docs, projects, and team collaboration. Organize everything in one place.',
      category: 'Productivity',
      pricing: 'Free - $8/month',
      rating: 4.7,
      users: '20M+',
      icon: <Code className=&quot;w-8 h-8 text-gray-400&quot; />,
      color: 'bg-gradient-to-br from-gray-500 to-gray-700',
      features: [
        'Note-taking & docsProject managementTeam collaborationDatabase & tablesTemplates libraryAPI integration'
      ],
      website: 'https://notion.so',
      useCase: 'Ideal for teams that need a flexible workspace for documentation, project management, and knowledge sharing.',
      pros: ['Highly flexibleBeautiful interfaceGreat templatesFree tier'],
      cons: ['Learning curveLimited offline access']
    },
    {
      name: 'Stripe',
      description: 'Complete payment processing platform for online businesses. Accept payments, manage subscriptions, and handle compliance.',
      category: 'Payments',
      pricing: '2.9% + 30¢ per transaction',
      rating: 4.9,
      users: '1M+',
      icon: <Shield className=&quot;w-8 h-8 text-blue-400&quot; />,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      features: [
        'Global payment methodsSubscription billingFraud protectionCompliance toolsDeveloper-friendly APIAnalytics dashboard'
      ],
      website: 'https://stripe.com',
      useCase: 'Essential for any online business that needs to accept payments, especially SaaS companies and e-commerce.',
      pros: ['Developer-friendlyGlobal reachExcellent docsReliable'],
      cons: ['Higher fees than some alternativesComplex for beginners']
    },
    {
      name: 'Intercom',
      description: 'Customer messaging platform that helps businesses build better customer relationships through personalized, messenger-based experiences.',
      category: 'Customer Support',
      pricing: '$39 - $999/month',
      rating: 4.6,
      users: '25K+',
      icon: <Users className=&quot;w-8 h-8 text-green-400&quot; />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      features: [
        'Live chatCustomer messagingHelp deskUser onboardingAnalytics & reportingIntegration ecosystem'
      ],
      website: 'https://intercom.com',
      useCase: 'Perfect for SaaS companies and online businesses that want to provide excellent customer support and user engagement.',
      pros: ['Great UXPowerful featuresGood integrationsMobile apps'],
      cons: ['ExpensiveComplex pricingCan be overwhelming']
    },
    {
      name: 'Mixpanel',
      description: 'Product analytics platform that helps you understand how users interact with your product and make data-driven decisions.',
      category: 'Analytics',
      pricing: 'Free - $25/month',
      rating: 4.5,
      users: '26K+',
      icon: <BarChart3 className=&quot;w-8 h-8 text-purple-400&quot; />,
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      features: [
        'User behavior trackingFunnel analysisA/B testingReal-time dataCustom eventsMobile analytics'
      ],
      website: 'https://mixpanel.com',
      useCase: 'Essential for product teams that need to understand user behavior, optimize conversion funnels, and make data-driven decisions.',
      pros: ['Powerful analyticsReal-time dataGood documentationFlexible'],
      cons: ['Complex setupExpensive at scaleSteep learning curve']
    },
    {
      name: 'MongoDB Atlas',
      description: 'Fully managed cloud database service that offers the best of MongoDB with zero operational overhead.',
      category: 'Database',
      pricing: 'Free - $57/month',
      rating: 4.7,
      users: '35K+',
      icon: <Database className=&quot;w-8 h-8 text-green-400&quot; />,
      color: 'bg-gradient-to-br from-green-500 to-teal-600',
      features: [
        'Fully managed MongoDBGlobal clustersAuto-scalingBackup & recoverySecurity & complianceMonitoring & alerting'
      ],
      website: 'https://mongodb.com/atlas',
      useCase: 'Perfect for developers who want to use MongoDB without managing infrastructure, especially for modern web applications.',
      pros: ['Fully managedGlobal distributionAuto-scalingGood free tier'],
      cons: ['Can be expensiveVendor lock-inLimited customization']
    },
    {
      name: 'Vercel',
      description: 'Platform for deploying and hosting frontend applications with automatic scaling, global CDN, and zero configuration.',
      category: 'Hosting',
      pricing: 'Free - $20/month',
      rating: 4.8,
      users: '100K+',
      icon: <Cloud className=&quot;w-8 h-8 text-black&quot; />,
      color: 'bg-gradient-to-br from-gray-800 to-black',
      features: [
        'Zero-config deploymentGlobal CDNAutomatic scalingGit integrationPreview deploymentsEdge functions'
      ],
      website: 'https://vercel.com',
      useCase: 'Ideal for frontend developers and teams that want to deploy modern web applications quickly with excellent window.window.window.performance.',
      pros: ['Zero configExcellent performanceGreat DXFree tier'],
      cons: ['Limited backend featuresCan be expensive for high traffic']
    },
    {
      name: 'Linear',
      description: 'Issue tracking tool built for high-performance teams. Streamline your workflows and ship better products faster.',
      category: 'Project Management',
      pricing: 'Free - $8/month',
      rating: 4.9,
      users: '10K+',
      icon: <TrendingUp className=&quot;w-8 h-8 text-blue-400&quot; />,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      features: [
        'Issue trackingRoadmap planningTeam collaborationGit integrationAutomated workflowsMobile apps'
      ],
      website: 'https://linear.app',
      useCase: 'Perfect for software development teams that need a fast, intuitive issue tracking and project management tool.',
      pros: ['Lightning fastBeautiful designGreat keyboard shortcutsGit integration'],
      cons: ['Limited reportingNo time trackingSmaller ecosystem']
    }
  ],

  const categories = ['AllAutomationProductivityPaymentsCustomer SupportAnalyticsDatabaseHosting', 'Project Management'],
  const [selectedCategory, setSelectedCategory] = React.useState('All'),
=======
      name: 'Zapier', _description: 'Automate workflows between 5000+ apps with no code required. Connect your favorite tools and automate repetitive tasks.', _category: 'Automation', _pricing: 'Free - $19.99/month', _rating: 4.8, _users: '2M+', _icon: <Zap className="w-8 h-8 text-orange-400" />, _color: 'bg-gradient-to-br from-orange-500 to-red-600', _features: [
        '5000+ app integrations', _'Visual workflow builder', _'Multi-step automations', _'Scheduled triggers', _'Error handling', _'Team collaboration'
      ], _website: 'https://zapier.com', _useCase: 'Perfect for businesses looking to automate customer support, _marketing, _and sales processes.', _pros: ['Easy to use', _'Extensive integrations', _'Reliable', _'Great support'], _cons: ['Can get expensive', _'Limited customization']},
    {_name: 'Notion', _description: 'All-in-one workspace for notes, _docs, _projects, _and team collaboration. Organize everything in one place.', _category: 'Productivity', _pricing: 'Free - $8/month', _rating: 4.7, _users: '20M+', _icon: <Code className="w-8 h-8 text-gray-400" />, _color: 'bg-gradient-to-br from-gray-500 to-gray-700', _features: [
        'Note-taking & docs', _'Project management', _'Team collaboration', _'Database & tables', _'Templates library', _'API integration'
      ], _website: 'https://notion.so', _useCase: 'Ideal for teams that need a flexible workspace for documentation, _project management, _and knowledge sharing.', _pros: ['Highly flexible', _'Beautiful interface', _'Great templates', _'Free tier'], _cons: ['Learning curve', _'Limited offline access']},
    {_name: 'Stripe', _description: 'Complete payment processing platform for online businesses. Accept payments, _manage subscriptions, _and handle compliance.', _category: 'Payments', _pricing: '2.9% + 30¢ per transaction', _rating: 4.9, _users: '1M+', _icon: <Shield className="w-8 h-8 text-blue-400" />, _color: 'bg-gradient-to-br from-blue-500 to-indigo-600', _features: [
        'Global payment methods', _'Subscription billing', _'Fraud protection', _'Compliance tools', _'Developer-friendly API', _'Analytics dashboard'
      ], _website: 'https://stripe.com', _useCase: 'Essential for any online business that needs to accept payments, _especially SaaS companies and e-commerce.', _pros: ['Developer-friendly', _'Global reach', _'Excellent docs', _'Reliable'], _cons: ['Higher fees than some alternatives', _'Complex for beginners']},
    {_name: 'Intercom', _description: 'Customer messaging platform that helps businesses build better customer relationships through personalized, _messenger-based experiences.', _category: 'Customer Support', _pricing: '$39 - $999/month', _rating: 4.6, _users: '25K+', _icon: <Users className="w-8 h-8 text-green-400" />, _color: 'bg-gradient-to-br from-green-500 to-emerald-600', _features: [
        'Live chat', _'Customer messaging', _'Help desk', _'User onboarding', _'Analytics & reporting', _'Integration ecosystem'
      ], _website: 'https://intercom.com', _useCase: 'Perfect for SaaS companies and online businesses that want to provide excellent customer support and user engagement.', _pros: ['Great UX', _'Powerful features', _'Good integrations', _'Mobile apps'], _cons: ['Expensive', _'Complex pricing', _'Can be overwhelming']},
    {_name: 'Mixpanel', _description: 'Product analytics platform that helps you understand how users interact with your product and make data-driven decisions.', _category: 'Analytics', _pricing: 'Free - $25/month', _rating: 4.5, _users: '26K+', _icon: <BarChart3 className="w-8 h-8 text-purple-400" />, _color: 'bg-gradient-to-br from-purple-500 to-pink-600', _features: [
        'User behavior tracking', _'Funnel analysis', _'A/B testing', _'Real-time data', _'Custom events', _'Mobile analytics'
      ], _website: 'https://mixpanel.com', _useCase: 'Essential for product teams that need to understand user behavior, _optimize conversion funnels, _and make data-driven decisions.', _pros: ['Powerful analytics', _'Real-time data', _'Good documentation', _'Flexible'], _cons: ['Complex setup', _'Expensive at scale', _'Steep learning curve']},
    {_name: 'MongoDB Atlas', _description: 'Fully managed cloud database service that offers the best of MongoDB with zero operational overhead.', _category: 'Database', _pricing: 'Free - $57/month', _rating: 4.7, _users: '35K+', _icon: <Database className="w-8 h-8 text-green-400" />, _color: 'bg-gradient-to-br from-green-500 to-teal-600', _features: [
        'Fully managed MongoDB', _'Global clusters', _'Auto-scaling', _'Backup & recovery', _'Security & compliance', _'Monitoring & alerting'
      ], _website: 'https://mongodb.com/atlas', _useCase: 'Perfect for developers who want to use MongoDB without managing infrastructure, _especially for modern web applications.', _pros: ['Fully managed', _'Global distribution', _'Auto-scaling', _'Good free tier'], _cons: ['Can be expensive', _'Vendor lock-in', _'Limited customization']},
    {_name: 'Vercel', _description: 'Platform for deploying and hosting frontend applications with automatic scaling, _global CDN, _and zero configuration.', _category: 'Hosting', _pricing: 'Free - $20/month', _rating: 4.8, _users: '100K+', _icon: <Cloud className="w-8 h-8 text-black" />, _color: 'bg-gradient-to-br from-gray-800 to-black', _features: [
        'Zero-config deployment', _'Global CDN', _'Automatic scaling', _'Git integration', _'Preview deployments', _'Edge functions'
      ], _website: 'https://vercel.com', _useCase: 'Ideal for frontend developers and teams that want to deploy modern web applications quickly with excellent performance.', _pros: ['Zero config', _'Excellent performance', _'Great DX', _'Free tier'], _cons: ['Limited backend features', _'Can be expensive for high traffic']},
    {_name: 'Linear', _description: 'Issue tracking tool built for high-performance teams. Streamline your workflows and ship better products faster.', _category: 'Project Management', _pricing: 'Free - $8/month', _rating: 4.9, _users: '10K+', _icon: <TrendingUp className="w-8 h-8 text-blue-400" />, _color: 'bg-gradient-to-br from-blue-500 to-cyan-600', _features: [
        'Issue tracking', _'Roadmap planning', _'Team collaboration', _'Git integration', _'Automated workflows', _'Mobile apps'
      ], _website: 'https://linear.app', _useCase: 'Perfect for software development teams that need a fast, _intuitive issue tracking and project management tool.', _pros: ['Lightning fast', _'Beautiful design', _'Great keyboard shortcuts', _'Git integration'], _cons: ['Limited reporting', _'No time tracking', _'Smaller ecosystem']}
  ];

  const _categories = ['All', 'Automation', 'Productivity', 'Payments', 'Customer Support', 'Analytics', 'Database', 'Hosting', 'Project Management'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory),

  return (
    <>
      <Head>
        <title>SaaS Marketplace - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Discover the best micro SaaS services for your business. Curated selection of tools for automation, productivity, payments, and more.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;SaaS Marketplace - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Curated selection of the best micro SaaS services for modern businesses.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

<<<<<<< HEAD
      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-black&quot;>
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.06),transparent_50%)]&quot; />
=======
      {_/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.06),transparent_50%)]" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>

        <div className=&quot;absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20&quot; />

        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <div className=&quot;mb-20 animate-fade-in&quot;>
            <div className=&quot;mb-8&quot;>
              <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-scale-in&quot;>
                <Globe className=&quot;w-4 h-4 mr-2&quot; />
                Curated SaaS Solutions
              </div>
            </div>
            
            <h1 className=&quot;text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight&quot;>
              SaaS Marketplace
            </h1>
            <p className=&quot;text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light&quot;>
              Discover the best micro SaaS services that power modern businesses. 
              Hand-picked tools for automation, productivity, and growth.
            </p>

            <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center items-center mb-20&quot;>
              <Button
<<<<<<< HEAD
                href=&quot;#services&quot;
                size=&quot;lg&quot;
                className=&quot;animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40&quot;
                style={{ animationDelay: '0.2s' }}
=======
                href="#services"
                size="lg"
                className="animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40"
                style={_{ animationDelay: '0.2s'}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Explore Services
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </Button>
              <Button
<<<<<<< HEAD
                href=&quot;/contact&quot;
                variant=&quot;outline&quot;
                size=&quot;lg&quot;
                className=&quot;animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5&quot;
                style={{ animationDelay: '0.4s' }}
=======
                href="/contact"
                variant="outline"
                size="lg"
                className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5"
                style={_{ animationDelay: '0.4s'}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Get Recommendations
              </Button>
            </div>
          </div>

<<<<<<< HEAD
          {/* Stats */}
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in&quot; style={{ animationDelay: '0.6s' }}>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300&quot;>
                {microSaasServices.length}+
=======
          {_/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={_{ animationDelay: '0.6s'}}>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                {_microSaasServices.length}+
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Curated Services</div>
            </div>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300&quot;>
                9
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Categories</div>
            </div>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300&quot;>
                4.7+
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Avg Rating</div>
            </div>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300&quot;>
                100K+
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Total Users</div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Category Filter */}
      <section className=&quot;py-16 bg-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
            {categories.map((category) => (
              <button
=======
      {_/* Category Filter */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {_categories.map(_(category) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                key={category}
                onClick={_() => setSelectedCategory(category)}
                className={_`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                {_category}
              </button>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid */}
      <section id=&quot;services&quot; className=&quot;py-24 bg-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
              {selectedCategory === 'All' ? 'All Services' : `${selectedCategory} Services`}
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              {selectedCategory === 'All' 
=======
      {_/* Services Grid */}
      <section id="services" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              {_selectedCategory === 'All' ? 'All Services' : `${selectedCategory} Services`}
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {_selectedCategory === 'All' 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ? 'Explore our curated selection of the best micro SaaS services for modern businesses.'
                : `Discover the best ${selectedCategory.toLowerCase()} tools to streamline your business operations.`
              }
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {filteredServices.map((service, index) => (
              <Card
                key={index}
                className=&quot;group border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;flex items-start space-x-6&quot;>
                  <div className=&quot;relative&quot;>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${service.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                  <div className=&quot;flex-1&quot;>
                    <div className=&quot;flex items-center justify-between mb-2&quot;>
                      <h3 className=&quot;text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300&quot;>
                        {service.name}
                      </h3>
                      <div className=&quot;flex items-center space-x-2&quot;>
                        <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                        <span className=&quot;text-sm text-gray-300&quot;>{service.rating}</span>
                      </div>
                    </div>
                    
                    <div className=&quot;flex items-center space-x-4 mb-3 text-sm text-gray-400&quot;>
                      <span className=&quot;px-2 py-1 bg-gray-800 rounded-full&quot;>{service.category}</span>
                      <span>{service.users} users</span>
                      <span className=&quot;text-green-400&quot;>{service.pricing}</span>
                    </div>

                    <p className=&quot;text-gray-400 leading-relaxed mb-4&quot;>
                      {service.description}
                    </p>

                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-gray-300 mb-2&quot;>Key Features:</h4>
                      <div className=&quot;grid grid-cols-2 gap-2&quot;>
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className=&quot;flex items-center text-sm text-gray-400&quot;>
                            <Check className=&quot;w-3 h-3 text-green-400 mr-2 flex-shrink-0&quot; />
                            {feature}
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_filteredServices.map(_(service, _index) => (
              <Card
                key={index}
                className="group border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={_`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${service.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {_service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {_service.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{_service.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                      <span className="px-2 py-1 bg-gray-800 rounded-full">{_service.category}</span>
                      <span>{_service.users} users</span>
                      <span className="text-green-400">{_service.pricing}</span>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-4">
                      {_service.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {_service.features.slice(0, _4).map(_(feature, _featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className=&quot;flex items-center justify-between&quot;>
                      <Button
<<<<<<< HEAD
                        href={service.website}
                        variant=&quot;outline&quot;
                        size=&quot;sm&quot;
                        className=&quot;group-hover:border-blue-500 group-hover:text-blue-400&quot;
=======
                        href={_service.website}
                        variant="outline"
                        size="sm"
                        className="group-hover:border-blue-500 group-hover:text-blue-400"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        Visit Website
                        <ExternalLink className=&quot;w-4 h-4 ml-2&quot; />
                      </Button>
                      
<<<<<<< HEAD
                      <div className=&quot;text-right&quot;>
                        <div className=&quot;text-xs text-gray-500 mb-1&quot;>Use Case:</div>
                        <div className=&quot;text-sm text-gray-300 max-w-xs&quot;>{service.useCase}</div>
=======
                      <div className="text-right">
                        <div className="text-xs text-gray-500 mb-1">Use Case:</div>
                        <div className="text-sm text-gray-300 max-w-xs">{_service.useCase}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
=======
      {_/* CTA Section */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size: 20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
=======
      <section className=&quot;py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10&quot; />
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10&quot;>
          <h2 className=&quot;text-4xl sm:text-5xl font-bold text-white mb-8&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            Need Help Choosing?
          </h2>
          <p className=&quot;text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            Our team of experts can help you select the perfect SaaS tools for your business needs. 
            Get personalized recommendations and implementation support.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
            <Button
              href=&quot;/contact&quot;
              variant=&quot;secondary&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-blue-600 hover:bg-gray-100 shadow-2xl&quot;
            >
              Get Expert Advice
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;/services&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl&quot;
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}