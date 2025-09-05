<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { 
  Rocket,
  DollarSign, 
  Users, 
  BarChart3, 
  Mail, 
  Calendar, 
  Shield, 
  Globe,
  ArrowRight,
  Star,
  Check,
  ExternalLink,
  TrendingUp,
  Zap,
  Target,
  Lightbulb,
  BookOpen
} from 'lucide-react',
=======
import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {_Rocket, _DollarSign, _Users, _BarChart3, _Mail, _Calendar, _Shield, _Globe, _ArrowRight, _Star, _Check, _ExternalLink, _TrendingUp, _Zap, _Target, _Lightbulb, _BookOpen} from 'lucide-react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function StartupToolsPage() {_const _startupTools = [
    {
<<<<<<< HEAD
      name: 'HubSpot',
      description: 'All-in-one inbound marketing, sales, and customer service platform designed to help businesses grow better.',
      category: 'Marketing & Sales',
      pricing: 'Free - $45/month',
      rating: 4.7,
      users: '135K+',
      icon: <Target className=&quot;w-8 h-8 text-orange-400&quot; />,
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      features: [
        'CRM systemEmail marketingLead generationAnalytics & reportingMarketing automationFree tier available'
      ],
      website: 'https://hubspot.com',
      useCase: 'Perfect for startups that want to implement inbound marketing strategies and manage customer relationships effectively.',
      pros: ['Free tierAll-in-one solutionGreat for beginnersExcellent support'],
      cons: ['Can get expensiveComplex for small teamsLimited customization'],
      bestFor: 'B2B startups, SaaS companies, marketing teams'
    },
    {
      name: 'Mailchimp',
      description: 'Email marketing platform that helps businesses create, send, and track email campaigns with ease.',
      category: 'Email Marketing',
      pricing: 'Free - $59/month',
      rating: 4.5,
      users: '12M+',
      icon: <Mail className=&quot;w-8 h-8 text-yellow-400&quot; />,
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      features: [
        'Email templatesAutomation workflowsA/B testingAnalytics & reportingIntegration ecosystemFree tier available'
      ],
      website: 'https://mailchimp.com',
      useCase: 'Ideal for startups that need to build email lists, nurture leads, and communicate with customers.',
      pros: ['Free tierEasy to useGood templatesAffordable'],
      cons: ['Limited free featuresBasic automationCan be expensive'],
      bestFor: 'E-commerce, content creators, small businesses'
    },
    {
      name: 'Calendly',
      description: 'Scheduling automation platform that eliminates the back-and-forth of scheduling meetings and calls.',
      category: 'Productivity',
      pricing: 'Free - $12/month',
      rating: 4.8,
      users: '10M+',
      icon: <Calendar className=&quot;w-8 h-8 text-blue-400&quot; />,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      features: [
        'Automated schedulingCalendar integrationCustom booking pagesTeam schedulingAnalytics & reportingFree tier available'
      ],
      website: 'https://calendly.com',
      useCase: 'Essential for startups that need to schedule sales calls, investor meetings, and team collaborations efficiently.',
      pros: ['Free tierEasy integrationProfessional appearanceTime-saving'],
      cons: ['Limited free featuresBasic customizationCan be expensive'],
      bestFor: 'Sales teams, consultants, remote teams'
    },
    {
      name: 'Canva',
      description: 'Graphic design platform that makes it easy to create professional designs without design skills.',
      category: 'Design',
      pricing: 'Free - $12.99/month',
      rating: 4.6,
      users: '100M+',
      icon: <Lightbulb className=&quot;w-8 h-8 text-blue-400&quot; />,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      features: [
        'Design templatesStock photos & iconsBrand kitTeam collaborationSocial media formatsFree tier available'
      ],
      website: 'https://canva.com',
      useCase: 'Perfect for startups that need to create marketing materials, social media content, and presentations.',
      pros: ['Free tierEasy to useGreat templatesAffordable'],
      cons: ['Limited customizationWatermark on freeBasic features'],
      bestFor: 'Marketing teams, content creators, small businesses'
    },
    {
      name: 'Buffer',
      description: 'Social media management platform that helps businesses schedule posts, analyze performance, and manage multiple accounts.',
      category: 'Social Media',
      pricing: 'Free - $15/month',
      rating: 4.4,
      users: '140K+',
      icon: <Globe className=&quot;w-8 h-8 text-green-400&quot; />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      features: [
        'Social media schedulingAnalytics & reportingTeam collaborationContent calendarMultiple platformsFree tier available'
      ],
      website: 'https://buffer.com',
      useCase: 'Ideal for startups that want to maintain a consistent social media presence and grow their audience.',
      pros: ['Free tierEasy to useGood analyticsAffordable'],
      cons: ['Limited free featuresBasic schedulingLimited platforms'],
      bestFor: 'Social media managers, small businesses, content creators'
    },
    {
      name: 'Notion',
      description: 'All-in-one workspace for notes, docs, projects, and team collaboration. Organize everything in one place.',
      category: 'Productivity',
      pricing: 'Free - $8/month',
      rating: 4.7,
      users: '20M+',
      icon: <Zap className=&quot;w-8 h-8 text-gray-400&quot; />,
      color: 'bg-gradient-to-br from-gray-500 to-gray-700',
      features: [
        'Note-taking & docsProject managementTeam collaborationDatabase & tablesTemplates libraryAPI integration'
      ],
      website: 'https://notion.so',
      useCase: 'Perfect for startup teams that need a flexible workspace for documentation, project management, and knowledge sharing.',
      pros: ['Highly flexibleBeautiful interfaceGreat templatesFree tier'],
      cons: ['Learning curveLimited offline accessCan be overwhelming'],
      bestFor: 'Remote teams, project managers, knowledge workers'
    },
    {
      name: 'Stripe',
      description: 'Complete payment processing platform for online businesses. Accept payments, manage subscriptions, and handle compliance.',
      category: 'Payments',
      pricing: '2.9% + 30¢ per transaction',
      rating: 4.9,
      users: '1M+',
      icon: <DollarSign className=&quot;w-8 h-8 text-blue-400&quot; />,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      features: [
        'Global payment methodsSubscription billingFraud protectionCompliance toolsDeveloper-friendly APIAnalytics dashboard'
      ],
      website: 'https://stripe.com',
      useCase: 'Essential for any startup that needs to accept payments, especially SaaS companies and e-commerce businesses.',
      pros: ['Developer-friendlyGlobal reachExcellent docsReliable'],
      cons: ['Higher fees than some alternativesComplex for beginnersStrict requirements'],
      bestFor: 'SaaS companies, e-commerce, online businesses'
    },
    {
      name: 'Intercom',
      description: 'Customer messaging platform that helps businesses build better customer relationships through personalized experiences.',
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
      useCase: 'Perfect for SaaS startups and online businesses that want to provide excellent customer support and user engagement.',
      pros: ['Great UXPowerful featuresGood integrationsMobile apps'],
      cons: ['ExpensiveComplex pricingCan be overwhelming'],
      bestFor: 'SaaS companies, online businesses, customer support teams'
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
      cons: ['Complex setupExpensive at scaleSteep learning curve'],
      bestFor: 'Product teams, growth hackers, data analysts'
    },
    {
      name: 'Vercel',
      description: 'Platform for deploying and hosting frontend applications with automatic scaling, global CDN, and zero configuration.',
      category: 'Development',
      pricing: 'Free - $20/month',
      rating: 4.8,
      users: '100K+',
      icon: <Rocket className=&quot;w-8 h-8 text-black&quot; />,
      color: 'bg-gradient-to-br from-gray-800 to-black',
      features: [
        'Zero-config deploymentGlobal CDNAutomatic scalingGit integrationPreview deploymentsEdge functions'
      ],
      website: 'https://vercel.com',
      useCase: 'Ideal for startup development teams that want to deploy modern web applications quickly with excellent window.window.window.performance.',
      pros: ['Zero configExcellent performanceGreat DXFree tier'],
      cons: ['Limited backend featuresCan be expensive for high trafficVendor lock-in'],
      bestFor: 'Frontend developers, startup teams, modern web apps'
    }
  ],

  const categories = ['AllMarketing & SalesEmail MarketingProductivityDesignSocial MediaPaymentsCustomer Support', 'AnalyticsDevelopment'],
  const [selectedCategory, setSelectedCategory] = React.useState('All'),
=======
      name: 'HubSpot', _description: 'All-in-one inbound marketing, _sales, _and customer service platform designed to help businesses grow better.', _category: 'Marketing & Sales', _pricing: 'Free - $45/month', _rating: 4.7, _users: '135K+', _icon: <Target className="w-8 h-8 text-orange-400" />, _color: 'bg-gradient-to-br from-orange-500 to-red-600', _features: [
        'CRM system', _'Email marketing', _'Lead generation', _'Analytics & reporting', _'Marketing automation', _'Free tier available'
      ], _website: 'https://hubspot.com', _useCase: 'Perfect for startups that want to implement inbound marketing strategies and manage customer relationships effectively.', _pros: ['Free tier', _'All-in-one solution', _'Great for beginners', _'Excellent support'], _cons: ['Can get expensive', _'Complex for small teams', _'Limited customization'], _bestFor: 'B2B startups, _SaaS companies, _marketing teams'},
    {_name: 'Mailchimp', _description: 'Email marketing platform that helps businesses create, _send, _and track email campaigns with ease.', _category: 'Email Marketing', _pricing: 'Free - $59/month', _rating: 4.5, _users: '12M+', _icon: <Mail className="w-8 h-8 text-yellow-400" />, _color: 'bg-gradient-to-br from-yellow-500 to-orange-600', _features: [
        'Email templates', _'Automation workflows', _'A/B testing', _'Analytics & reporting', _'Integration ecosystem', _'Free tier available'
      ], _website: 'https://mailchimp.com', _useCase: 'Ideal for startups that need to build email lists, _nurture leads, _and communicate with customers.', _pros: ['Free tier', _'Easy to use', _'Good templates', _'Affordable'], _cons: ['Limited free features', _'Basic automation', _'Can be expensive'], _bestFor: 'E-commerce, _content creators, _small businesses'},
    {_name: 'Calendly', _description: 'Scheduling automation platform that eliminates the back-and-forth of scheduling meetings and calls.', _category: 'Productivity', _pricing: 'Free - $12/month', _rating: 4.8, _users: '10M+', _icon: <Calendar className="w-8 h-8 text-blue-400" />, _color: 'bg-gradient-to-br from-blue-500 to-indigo-600', _features: [
        'Automated scheduling', _'Calendar integration', _'Custom booking pages', _'Team scheduling', _'Analytics & reporting', _'Free tier available'
      ], _website: 'https://calendly.com', _useCase: 'Essential for startups that need to schedule sales calls, _investor meetings, _and team collaborations efficiently.', _pros: ['Free tier', _'Easy integration', _'Professional appearance', _'Time-saving'], _cons: ['Limited free features', _'Basic customization', _'Can be expensive'], _bestFor: 'Sales teams, _consultants, _remote teams'},
    {_name: 'Canva', _description: 'Graphic design platform that makes it easy to create professional designs without design skills.', _category: 'Design', _pricing: 'Free - $12.99/month', _rating: 4.6, _users: '100M+', _icon: <Lightbulb className="w-8 h-8 text-blue-400" />, _color: 'bg-gradient-to-br from-blue-500 to-cyan-600', _features: [
        'Design templates', _'Stock photos & icons', _'Brand kit', _'Team collaboration', _'Social media formats', _'Free tier available'
      ], _website: 'https://canva.com', _useCase: 'Perfect for startups that need to create marketing materials, _social media content, _and presentations.', _pros: ['Free tier', _'Easy to use', _'Great templates', _'Affordable'], _cons: ['Limited customization', _'Watermark on free', _'Basic features'], _bestFor: 'Marketing teams, _content creators, _small businesses'},
    {_name: 'Buffer', _description: 'Social media management platform that helps businesses schedule posts, _analyze performance, _and manage multiple accounts.', _category: 'Social Media', _pricing: 'Free - $15/month', _rating: 4.4, _users: '140K+', _icon: <Globe className="w-8 h-8 text-green-400" />, _color: 'bg-gradient-to-br from-green-500 to-emerald-600', _features: [
        'Social media scheduling', _'Analytics & reporting', _'Team collaboration', _'Content calendar', _'Multiple platforms', _'Free tier available'
      ], _website: 'https://buffer.com', _useCase: 'Ideal for startups that want to maintain a consistent social media presence and grow their audience.', _pros: ['Free tier', _'Easy to use', _'Good analytics', _'Affordable'], _cons: ['Limited free features', _'Basic scheduling', _'Limited platforms'], _bestFor: 'Social media managers, _small businesses, _content creators'},
    {_name: 'Notion', _description: 'All-in-one workspace for notes, _docs, _projects, _and team collaboration. Organize everything in one place.', _category: 'Productivity', _pricing: 'Free - $8/month', _rating: 4.7, _users: '20M+', _icon: <Zap className="w-8 h-8 text-gray-400" />, _color: 'bg-gradient-to-br from-gray-500 to-gray-700', _features: [
        'Note-taking & docs', _'Project management', _'Team collaboration', _'Database & tables', _'Templates library', _'API integration'
      ], _website: 'https://notion.so', _useCase: 'Perfect for startup teams that need a flexible workspace for documentation, _project management, _and knowledge sharing.', _pros: ['Highly flexible', _'Beautiful interface', _'Great templates', _'Free tier'], _cons: ['Learning curve', _'Limited offline access', _'Can be overwhelming'], _bestFor: 'Remote teams, _project managers, _knowledge workers'},
    {_name: 'Stripe', _description: 'Complete payment processing platform for online businesses. Accept payments, _manage subscriptions, _and handle compliance.', _category: 'Payments', _pricing: '2.9% + 30¢ per transaction', _rating: 4.9, _users: '1M+', _icon: <DollarSign className="w-8 h-8 text-blue-400" />, _color: 'bg-gradient-to-br from-blue-500 to-indigo-600', _features: [
        'Global payment methods', _'Subscription billing', _'Fraud protection', _'Compliance tools', _'Developer-friendly API', _'Analytics dashboard'
      ], _website: 'https://stripe.com', _useCase: 'Essential for any startup that needs to accept payments, _especially SaaS companies and e-commerce businesses.', _pros: ['Developer-friendly', _'Global reach', _'Excellent docs', _'Reliable'], _cons: ['Higher fees than some alternatives', _'Complex for beginners', _'Strict requirements'], _bestFor: 'SaaS companies, _e-commerce, _online businesses'},
    {_name: 'Intercom', _description: 'Customer messaging platform that helps businesses build better customer relationships through personalized experiences.', _category: 'Customer Support', _pricing: '$39 - $999/month', _rating: 4.6, _users: '25K+', _icon: <Users className="w-8 h-8 text-green-400" />, _color: 'bg-gradient-to-br from-green-500 to-emerald-600', _features: [
        'Live chat', _'Customer messaging', _'Help desk', _'User onboarding', _'Analytics & reporting', _'Integration ecosystem'
      ], _website: 'https://intercom.com', _useCase: 'Perfect for SaaS startups and online businesses that want to provide excellent customer support and user engagement.', _pros: ['Great UX', _'Powerful features', _'Good integrations', _'Mobile apps'], _cons: ['Expensive', _'Complex pricing', _'Can be overwhelming'], _bestFor: 'SaaS companies, _online businesses, _customer support teams'},
    {_name: 'Mixpanel', _description: 'Product analytics platform that helps you understand how users interact with your product and make data-driven decisions.', _category: 'Analytics', _pricing: 'Free - $25/month', _rating: 4.5, _users: '26K+', _icon: <BarChart3 className="w-8 h-8 text-purple-400" />, _color: 'bg-gradient-to-br from-purple-500 to-pink-600', _features: [
        'User behavior tracking', _'Funnel analysis', _'A/B testing', _'Real-time data', _'Custom events', _'Mobile analytics'
      ], _website: 'https://mixpanel.com', _useCase: 'Essential for product teams that need to understand user behavior, _optimize conversion funnels, _and make data-driven decisions.', _pros: ['Powerful analytics', _'Real-time data', _'Good documentation', _'Flexible'], _cons: ['Complex setup', _'Expensive at scale', _'Steep learning curve'], _bestFor: 'Product teams, _growth hackers, _data analysts'},
    {_name: 'Vercel', _description: 'Platform for deploying and hosting frontend applications with automatic scaling, _global CDN, _and zero configuration.', _category: 'Development', _pricing: 'Free - $20/month', _rating: 4.8, _users: '100K+', _icon: <Rocket className="w-8 h-8 text-black" />, _color: 'bg-gradient-to-br from-gray-800 to-black', _features: [
        'Zero-config deployment', _'Global CDN', _'Automatic scaling', _'Git integration', _'Preview deployments', _'Edge functions'
      ], _website: 'https://vercel.com', _useCase: 'Ideal for startup development teams that want to deploy modern web applications quickly with excellent performance.', _pros: ['Zero config', _'Excellent performance', _'Great DX', _'Free tier'], _cons: ['Limited backend features', _'Can be expensive for high traffic', _'Vendor lock-in'], _bestFor: 'Frontend developers, _startup teams, _modern web apps'}
  ];

  const _categories = ['All', 'Marketing & Sales', 'Email Marketing', 'Productivity', 'Design', 'Social Media', 'Payments', 'Customer Support', 'Analytics', 'Development'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredTools = selectedCategory === 'All' 
    ? startupTools 
    : startupTools.filter(tool => tool.category === selectedCategory),

  return (
    <>
      <Head>
        <title>Startup Tools & Resources - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Essential tools and resources for startups and entrepreneurs. Curated selection of SaaS services to help your business grow.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Startup Tools & Resources - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Essential tools and resources for startups and entrepreneurs to accelerate growth.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

<<<<<<< HEAD
      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-black&quot;>
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.06),transparent_50%)]&quot; />
=======
      {_/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.06),transparent_50%)]" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>

        <div className=&quot;absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20&quot; />

        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <div className=&quot;mb-20 animate-fade-in&quot;>
            <div className=&quot;mb-8&quot;>
              <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6 animate-scale-in&quot;>
                <Rocket className=&quot;w-4 h-4 mr-2&quot; />
                Startup Growth Tools
              </div>
            </div>
            
            <h1 className=&quot;text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight&quot;>
              Startup Tools & Resources
            </h1>
            <p className=&quot;text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light&quot;>
              Essential tools and resources to help your startup grow faster. 
              Expert-curated selection of SaaS services for entrepreneurs and growing businesses.
            </p>

            <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center items-center mb-20&quot;>
              <Button
<<<<<<< HEAD
                href=&quot;#tools&quot;
                size=&quot;lg&quot;
                className=&quot;animate-scale-in shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40&quot;
                style={{ animationDelay: '0.2s' }}
=======
                href="#tools"
                size="lg"
                className="animate-scale-in shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40"
                style={_{ animationDelay: '0.2s'}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Explore Tools
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
                Get Startup Advice
              </Button>
            </div>
          </div>

<<<<<<< HEAD
          {/* Stats */}
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in&quot; style={{ animationDelay: '0.6s' }}>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300&quot;>
                {startupTools.length}+
=======
          {_/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={_{ animationDelay: '0.6s'}}>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                {_startupTools.length}+
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Essential Tools</div>
            </div>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300&quot;>
                10
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Categories</div>
            </div>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300&quot;>
                4.6+
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Avg Rating</div>
            </div>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300&quot;>
                130M+
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
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                {_category}
              </button>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Tools Grid */}
      <section id=&quot;tools&quot; className=&quot;py-24 bg-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
              {selectedCategory === 'All' ? 'All Startup Tools' : `${selectedCategory} Tools`}
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              {selectedCategory === 'All' 
=======
      {_/* Tools Grid */}
      <section id="tools" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              {_selectedCategory === 'All' ? 'All Startup Tools' : `${selectedCategory} Tools`}
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {_selectedCategory === 'All' 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ? 'Discover the essential tools that successful startups use to grow and scale their businesses.'
                : `Explore the best ${selectedCategory.toLowerCase()} tools to accelerate your startup's growth.`
              }
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {filteredTools.map((tool, index) => (
              <Card
                key={index}
                className=&quot;group border border-gray-800 hover:border-orange-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;flex items-start space-x-6&quot;>
                  <div className=&quot;relative&quot;>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {tool.icon}
                    </div>
                  </div>
                  <div className=&quot;flex-1&quot;>
                    <div className=&quot;flex items-center justify-between mb-2&quot;>
                      <h3 className=&quot;text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300&quot;>
                        {tool.name}
                      </h3>
                      <div className=&quot;flex items-center space-x-2&quot;>
                        <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                        <span className=&quot;text-sm text-gray-300&quot;>{tool.rating}</span>
                      </div>
                    </div>
                    
                    <div className=&quot;flex items-center space-x-4 mb-3 text-sm text-gray-400&quot;>
                      <span className=&quot;px-2 py-1 bg-gray-800 rounded-full&quot;>{tool.category}</span>
                      <span>{tool.users} users</span>
                      <span className=&quot;text-green-400&quot;>{tool.pricing}</span>
                    </div>

                    <p className=&quot;text-gray-400 leading-relaxed mb-4&quot;>
                      {tool.description}
                    </p>

                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-gray-300 mb-2&quot;>Key Features:</h4>
                      <div className=&quot;grid grid-cols-2 gap-2&quot;>
                        {tool.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className=&quot;flex items-center text-sm text-gray-400&quot;>
                            <Check className=&quot;w-3 h-3 text-green-400 mr-2 flex-shrink-0&quot; />
                            {feature}
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_filteredTools.map(_(tool, _index) => (
              <Card
                key={index}
                className="group border border-gray-800 hover:border-orange-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={_`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {_tool.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                        {_tool.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{_tool.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                      <span className="px-2 py-1 bg-gray-800 rounded-full">{_tool.category}</span>
                      <span>{_tool.users} users</span>
                      <span className="text-green-400">{_tool.pricing}</span>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-4">
                      {_tool.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {_tool.features.slice(0, _4).map(_(feature, _featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                        ))}
                      </div>
                    </div>

<<<<<<< HEAD
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-gray-300 mb-2&quot;>Best For:</h4>
                      <p className=&quot;text-sm text-gray-400&quot;>{tool.bestFor}</p>
=======
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Best For:</h4>
                      <p className="text-sm text-gray-400">{_tool.bestFor}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>

                    <div className=&quot;flex items-center justify-between&quot;>
                      <Button
<<<<<<< HEAD
                        href={tool.website}
                        variant=&quot;outline&quot;
                        size=&quot;sm&quot;
                        className=&quot;group-hover:border-orange-500 group-hover:text-orange-400&quot;
=======
                        href={_tool.website}
                        variant="outline"
                        size="sm"
                        className="group-hover:border-orange-500 group-hover:text-orange-400"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        Visit Website
                        <ExternalLink className=&quot;w-4 h-4 ml-2&quot; />
                      </Button>
                      
<<<<<<< HEAD
                      <div className=&quot;text-right&quot;>
                        <div className=&quot;text-xs text-gray-500 mb-1&quot;>Use Case:</div>
                        <div className=&quot;text-sm text-gray-300 max-w-xs&quot;>{tool.useCase}</div>
=======
                      <div className="text-right">
                        <div className="text-xs text-gray-500 mb-1">Use Case:</div>
                        <div className="text-sm text-gray-300 max-w-xs">{_tool.useCase}</div>
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
      {/* Startup Resources Section */}
      <section className=&quot;py-24 bg-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
=======
      {_/* Startup Resources Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Additional Startup Resources
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Beyond tools, here are additional resources to help your startup succeed.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            <Card className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600&quot;>
                <Users className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold mb-4 text-white&quot;>Startup Communities</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Join startup communities like Y Combinator Startup School, Indie Hackers, and local startup meetups.
              </p>
              <Button href=&quot;https://www.startupschool.org&quot; variant=&quot;outline&quot; size=&quot;sm&quot;>
                Explore Communities
              </Button>
            </Card>

            <Card className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600&quot;>
                <BookOpen className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold mb-4 text-white&quot;>Educational Resources</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Access free courses from platforms like Coursera, edX, and startup-specific learning resources.
              </p>
              <Button href=&quot;https://www.coursera.org&quot; variant=&quot;outline&quot; size=&quot;sm&quot;>
                Start Learning
              </Button>
            </Card>

            <Card className=&quot;text-center&quot;>
              <div className=&quot;w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600&quot;>
                <TrendingUp className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold mb-4 text-white&quot;>Growth Strategies</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Learn proven growth strategies from successful entrepreneurs and growth hackers.
              </p>
              <Button href=&quot;/resources&quot; variant=&quot;outline&quot; size=&quot;sm&quot;>
                View Resources
              </Button>
            </Card>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className=&quot;py-24 bg-gradient-to-r from-orange-600 to-orange-700 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10&quot; />
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10&quot;>
          <h2 className=&quot;text-4xl sm:text-5xl font-bold text-white mb-8&quot;>
=======
      {_/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size: 20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Ready to Scale Your Startup?
          </h2>
          <p className=&quot;text-xl text-orange-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            Our startup experts can help you choose the right tools, implement growth strategies, and accelerate your business growth.
          </p>
<<<<<<< HEAD
          <div className="flex flex-col sm: flex-row gap-6 justify-center">
=======
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <Button
              href=&quot;/contact&quot;
              variant=&quot;secondary&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-orange-600 hover:bg-gray-100 shadow-2xl&quot;
            >
              Get Startup Consultation
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;/saas-marketplace&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-orange-600 shadow-2xl&quot;
            >
              Explore More Tools
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}