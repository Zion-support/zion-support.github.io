<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { 
  Search,
  Filter, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Star,
  Check,
  X,
  ArrowRight,
  ExternalLink,
  Zap,
  Brain,
  Globe,
  Rocket
} from 'lucide-react',

export default function ToolComparisonPage() {
  const [searchTerm, setSearchTerm] = React.useState(''),
  const [selectedCategory, setSelectedCategory] = React.useState('All'),
  const [sortBy, setSortBy] = React.useState('rating'),
=======
import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {_Search, _Filter, _TrendingUp, _DollarSign, _Users, _Star, _Check, _X, _ArrowRight, _ExternalLink, _Zap, _Brain, _Globe, _Rocket} from 'lucide-react';

export default function ToolComparisonPage() {_const [searchTerm, _setSearchTerm] = React.useState('');
  const [selectedCategory, _setSelectedCategory] = React.useState('All');
  const [sortBy, _setSortBy] = React.useState('rating');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _allTools = [
    // AI Tools
    {
<<<<<<< HEAD
      name: 'ChatGPT',
      category: 'AI Assistant',
      pricing: 'Free - $20/month',
      rating: 4.8,
      users: '100M+',
      bestFor: 'Content creators, developers, researchers',
      pros: ['Powerful capabilitiesEasy to useRegular updatesGood free tier'],
      cons: ['Sometimes inaccurateLimited contextPrivacy concerns'],
      website: 'https://chat.openai.com',
      icon: <Brain className=&quot;w-6 h-6&quot; />,
      color: 'text-green-400'
    },
    {
      name: 'Midjourney',
      category: 'AI Art',
      pricing: '$10 - $30/month',
      rating: 4.7,
      users: '1M+',
      bestFor: 'Designers, marketers, content creators',
      pros: ['High-quality outputCreative controlCommercial rightsActive community'],
      cons: ['Discord-only interfaceLimited customizationMonthly subscription'],
      website: 'https://midjourney.com',
      icon: <Zap className=&quot;w-6 h-6&quot; />,
      color: 'text-purple-400'
    },
    {
      name: 'Jasper',
      category: 'AI Writing',
      pricing: '$39 - $125/month',
      rating: 4.6,
      users: '100K+',
      bestFor: 'Marketing teams, content creators, businesses',
      pros: ['Specialized for marketingBrand voice trainingSEO optimizationTeam features'],
      cons: ['ExpensiveLimited free trialCan be repetitive'],
      website: 'https://jasper.ai',
      icon: <Brain className=&quot;w-6 h-6&quot; />,
      color: 'text-blue-400'
    },
    // SaaS Tools
    {
      name: 'Zapier',
      category: 'Automation',
      pricing: 'Free - $19.99/month',
      rating: 4.8,
      users: '2M+',
      bestFor: 'Businesses looking to automate workflows',
      pros: ['Easy to useExtensive integrationsReliableGreat support'],
      cons: ['Can get expensiveLimited customization'],
      website: 'https://zapier.com',
      icon: <Zap className=&quot;w-6 h-6&quot; />,
      color: 'text-orange-400'
    },
    {
      name: 'Notion',
      category: 'Productivity',
      pricing: 'Free - $8/month',
      rating: 4.7,
      users: '20M+',
      bestFor: 'Teams that need flexible workspace',
      pros: ['Highly flexibleBeautiful interfaceGreat templatesFree tier'],
      cons: ['Learning curveLimited offline accessCan be overwhelming'],
      website: 'https://notion.so',
      icon: <Globe className=&quot;w-6 h-6&quot; />,
      color: 'text-gray-400'
    },
    {
      name: 'Stripe',
      category: 'Payments',
      pricing: '2.9% + 30¢ per transaction',
      rating: 4.9,
      users: '1M+',
      bestFor: 'Online businesses, SaaS companies, e-commerce',
      pros: ['Developer-friendlyGlobal reachExcellent docsReliable'],
      cons: ['Higher fees than some alternativesComplex for beginnersStrict requirements'],
      website: 'https://stripe.com',
      icon: <DollarSign className=&quot;w-6 h-6&quot; />,
      color: 'text-blue-400'
    },
    // Startup Tools
    {
      name: 'HubSpot',
      category: 'Marketing & Sales',
      pricing: 'Free - $45/month',
      rating: 4.7,
      users: '135K+',
      bestFor: 'B2B startups, SaaS companies, marketing teams',
      pros: ['Free tierAll-in-one solutionGreat for beginnersExcellent support'],
      cons: ['Can get expensiveComplex for small teamsLimited customization'],
      website: 'https://hubspot.com',
      icon: <TrendingUp className=&quot;w-6 h-6&quot; />,
      color: 'text-orange-400'
    },
    {
      name: 'Mailchimp',
      category: 'Email Marketing',
      pricing: 'Free - $59/month',
      rating: 4.5,
      users: '12M+',
      bestFor: 'E-commerce, content creators, small businesses',
      pros: ['Free tierEasy to useGood templatesAffordable'],
      cons: ['Limited free featuresBasic automationCan be expensive'],
      website: 'https://mailchimp.com',
      icon: <Users className=&quot;w-6 h-6&quot; />,
      color: 'text-yellow-400'
    },
    {
      name: 'Calendly',
      category: 'Productivity',
      pricing: 'Free - $12/month',
      rating: 4.8,
      users: '10M+',
      bestFor: 'Sales teams, consultants, remote teams',
      pros: ['Free tierEasy integrationProfessional appearanceTime-saving'],
      cons: ['Limited free featuresBasic customizationCan be expensive'],
      website: 'https://calendly.com',
      icon: <Globe className=&quot;w-6 h-6&quot; />,
      color: 'text-blue-400'
    }
  ],

  const categories = ['AllAI AssistantAI ArtAI WritingAutomationProductivityPaymentsMarketing & Sales', 'Email Marketing'],
=======
      name: 'ChatGPT', _category: 'AI Assistant', _pricing: 'Free - $20/month', _rating: 4.8, _users: '100M+', _bestFor: 'Content creators, _developers, _researchers', _pros: ['Powerful capabilities', _'Easy to use', _'Regular updates', _'Good free tier'], _cons: ['Sometimes inaccurate', _'Limited context', _'Privacy concerns'], _website: 'https://chat.openai.com', _icon: <Brain className="w-6 h-6" />, _color: 'text-green-400'},
    {_name: 'Midjourney', _category: 'AI Art', _pricing: '$10 - $30/month', _rating: 4.7, _users: '1M+', _bestFor: 'Designers, _marketers, _content creators', _pros: ['High-quality output', _'Creative control', _'Commercial rights', _'Active community'], _cons: ['Discord-only interface', _'Limited customization', _'Monthly subscription'], _website: 'https://midjourney.com', _icon: <Zap className="w-6 h-6" />, _color: 'text-purple-400'},
    {_name: 'Jasper', _category: 'AI Writing', _pricing: '$39 - $125/month', _rating: 4.6, _users: '100K+', _bestFor: 'Marketing teams, _content creators, _businesses', _pros: ['Specialized for marketing', _'Brand voice training', _'SEO optimization', _'Team features'], _cons: ['Expensive', _'Limited free trial', _'Can be repetitive'], _website: 'https://jasper.ai', _icon: <Brain className="w-6 h-6" />, _color: 'text-blue-400'},
    // SaaS Tools
    {_name: 'Zapier', _category: 'Automation', _pricing: 'Free - $19.99/month', _rating: 4.8, _users: '2M+', _bestFor: 'Businesses looking to automate workflows', _pros: ['Easy to use', _'Extensive integrations', _'Reliable', _'Great support'], _cons: ['Can get expensive', _'Limited customization'], _website: 'https://zapier.com', _icon: <Zap className="w-6 h-6" />, _color: 'text-orange-400'},
    {_name: 'Notion', _category: 'Productivity', _pricing: 'Free - $8/month', _rating: 4.7, _users: '20M+', _bestFor: 'Teams that need flexible workspace', _pros: ['Highly flexible', _'Beautiful interface', _'Great templates', _'Free tier'], _cons: ['Learning curve', _'Limited offline access', _'Can be overwhelming'], _website: 'https://notion.so', _icon: <Globe className="w-6 h-6" />, _color: 'text-gray-400'},
    {_name: 'Stripe', _category: 'Payments', _pricing: '2.9% + 30¢ per transaction', _rating: 4.9, _users: '1M+', _bestFor: 'Online businesses, _SaaS companies, _e-commerce', _pros: ['Developer-friendly', _'Global reach', _'Excellent docs', _'Reliable'], _cons: ['Higher fees than some alternatives', _'Complex for beginners', _'Strict requirements'], _website: 'https://stripe.com', _icon: <DollarSign className="w-6 h-6" />, _color: 'text-blue-400'},
    // Startup Tools
    {_name: 'HubSpot', _category: 'Marketing & Sales', _pricing: 'Free - $45/month', _rating: 4.7, _users: '135K+', _bestFor: 'B2B startups, _SaaS companies, _marketing teams', _pros: ['Free tier', _'All-in-one solution', _'Great for beginners', _'Excellent support'], _cons: ['Can get expensive', _'Complex for small teams', _'Limited customization'], _website: 'https://hubspot.com', _icon: <TrendingUp className="w-6 h-6" />, _color: 'text-orange-400'},
    {_name: 'Mailchimp', _category: 'Email Marketing', _pricing: 'Free - $59/month', _rating: 4.5, _users: '12M+', _bestFor: 'E-commerce, _content creators, _small businesses', _pros: ['Free tier', _'Easy to use', _'Good templates', _'Affordable'], _cons: ['Limited free features', _'Basic automation', _'Can be expensive'], _website: 'https://mailchimp.com', _icon: <Users className="w-6 h-6" />, _color: 'text-yellow-400'},
    {_name: 'Calendly', _category: 'Productivity', _pricing: 'Free - $12/month', _rating: 4.8, _users: '10M+', _bestFor: 'Sales teams, _consultants, _remote teams', _pros: ['Free tier', _'Easy integration', _'Professional appearance', _'Time-saving'], _cons: ['Limited free features', _'Basic customization', _'Can be expensive'], _website: 'https://calendly.com', _icon: <Globe className="w-6 h-6" />, _color: 'text-blue-400'}
  ];

  const _categories = ['All', 'AI Assistant', 'AI Art', 'AI Writing', 'Automation', 'Productivity', 'Payments', 'Marketing & Sales', 'Email Marketing'];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredTools = allTools.filter(tool => {_const _matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
<<<<<<< HEAD
                         tool.bestFor.toLowerCase().includes(searchTerm.toLowerCase()),
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory,
    return matchesSearch && matchesCategory
  }),
=======
                         tool.bestFor.toLowerCase().includes(searchTerm.toLowerCase());
    const _matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _sortedTools = [...filteredTools].sort(_(a, _b) => {_switch (sortBy) {
      case 'rating':
        return b.rating - a.rating,
      case 'users':
<<<<<<< HEAD
        return parseInt(b.users.replace(/[^0-9]/g, '')) - parseInt(a.users.replace(/[^0-9]/g, '')),
      case 'name':
        return a.name.localeCompare(b.name),
      default: return 0
    }
  }),

  const getPricingColor = (pricing: string) => {
    if (pricing.includes('Free')) return 'text-green-400',
    if (pricing.includes('$')) return 'text-blue-400',
    return 'text-gray-400'
  },
=======
        return parseInt(b.users.replace(/[^0-9]/g, _'')) - parseInt(a.users.replace(/[^0-9]/g, _''));
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;}
  });

  const _getPricingColor = (_pricing: string) => {_if (pricing.includes('Free')) return 'text-green-400';
    if (pricing.includes('$')) return 'text-blue-400';
    return 'text-gray-400';};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <>
      <Head>
        <title>Tool Comparison - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Compare SaaS tools, AI services, and business solutions. Find the perfect tools for your business needs with our comprehensive comparison.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Tool Comparison - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Comprehensive comparison of SaaS tools and AI services to help you make informed decisions.&quot; />
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
              <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6 animate-scale-in&quot;>
                <Search className=&quot;w-4 h-4 mr-2&quot; />
                Smart Tool Selection
              </div>
            </div>
            
            <h1 className=&quot;text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight&quot;>
              Tool Comparison
            </h1>
            <p className=&quot;text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light&quot;>
              Compare SaaS tools, AI services, and business solutions. 
              Make informed decisions with our comprehensive analysis and expert insights.
            </p>

            <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center items-center mb-20&quot;>
              <Button
<<<<<<< HEAD
                href=&quot;#comparison&quot;
                size=&quot;lg&quot;
                className=&quot;animate-scale-in shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40&quot;
                style={{ animationDelay: '0.2s' }}
=======
                href="#comparison"
                size="lg"
                className="animate-scale-in shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40"
                style={_{ animationDelay: '0.2s'}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Start Comparing
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
                Get Expert Advice
              </Button>
            </div>
          </div>

<<<<<<< HEAD
          {/* Stats */}
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in&quot; style={{ animationDelay: '0.6s' }}>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300&quot;>
                {allTools.length}+
=======
          {_/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={_{ animationDelay: '0.6s'}}>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                {_allTools.length}+
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Tools Analyzed</div>
            </div>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300&quot;>
                9
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Categories</div>
            </div>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300&quot;>
                4.7+
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Avg Rating</div>
            </div>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300&quot;>
                250M+
              </div>
              <div className=&quot;text-gray-400 text-sm&quot;>Total Users</div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Filters and Search */}
      <section className=&quot;py-16 bg-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between&quot;>
            {/* Search */}
            <div className=&quot;relative flex-1 max-w-md&quot;>
              <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search tools, categories, or use cases...&quot;
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=&quot;w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent&quot;
              />
            </div>

            {/* Category Filter */}
            <div className=&quot;flex flex-wrap gap-2&quot;>
              {categories.map((category) => (
                <button
=======
      {_/* Filters and Search */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {_/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tools, categories, or use cases..."
                value={_searchTerm}
                onChange={_(_e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {_/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {_categories.map(_(category) => (_<button
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  key={category}
                  onClick={_() => setSelectedCategory(category)}
                  className={_`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                >
                  {_category}
                </button>
              ))}
            </div>

<<<<<<< HEAD
            {/* Sort */}
            <div className=&quot;flex items-center space-x-2&quot;>
              <Filter className=&quot;w-5 h-5 text-gray-400&quot; />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className=&quot;bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500&quot;
=======
            {_/* Sort */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={_sortBy}
                onChange={_(_e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <option value=&quot;rating&quot;>Sort by Rating</option>
                <option value=&quot;users&quot;>Sort by Users</option>
                <option value=&quot;name&quot;>Sort by Name</option>
              </select>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Comparison Table */}
      <section id=&quot;comparison&quot; className=&quot;py-24 bg-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
=======
      {_/* Comparison Table */}
      <section id="comparison" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Tool Comparison
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Compare features, pricing, and user ratings to find the perfect tools for your business needs.
            </p>
          </div>

          <div className=&quot;overflow-x-auto&quot;>
            <table className=&quot;w-full&quot;>
              <thead>
                <tr className=&quot;border-b border-gray-800&quot;>
                  <th className=&quot;text-left py-4 px-6 text-gray-300 font-medium&quot;>Tool</th>
                  <th className=&quot;text-left py-4 px-6 text-gray-300 font-medium&quot;>Category</th>
                  <th className=&quot;text-left py-4 px-6 text-gray-300 font-medium&quot;>Pricing</th>
                  <th className=&quot;text-left py-4 px-6 text-gray-300 font-medium&quot;>Rating</th>
                  <th className=&quot;text-left py-4 px-6 text-gray-300 font-medium&quot;>Users</th>
                  <th className=&quot;text-left py-4 px-6 text-gray-300 font-medium&quot;>Best For</th>
                  <th className=&quot;text-left py-4 px-6 text-gray-300 font-medium&quot;>Actions</th>
                </tr>
              </thead>
              <tbody>
<<<<<<< HEAD
                {sortedTools.map((tool, index) => (
                  <tr key={index} className=&quot;border-b border-gray-800/50 hover:bg-gray-900/50 transition-colors duration-200&quot;>
                    <td className=&quot;py-4 px-6&quot;>
                      <div className=&quot;flex items-center space-x-3&quot;>
                        <div className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center ${tool.color}`}>
                          {tool.icon}
                        </div>
                        <div>
                          <div className=&quot;font-semibold text-white&quot;>{tool.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className=&quot;py-4 px-6&quot;>
                      <span className=&quot;px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300&quot;>
                        {tool.category}
                      </span>
                    </td>
                    <td className=&quot;py-4 px-6&quot;>
                      <span className={`font-medium ${getPricingColor(tool.pricing)}`}>
                        {tool.pricing}
                      </span>
                    </td>
                    <td className=&quot;py-4 px-6&quot;>
                      <div className=&quot;flex items-center space-x-1&quot;>
                        <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                        <span className=&quot;text-white&quot;>{tool.rating}</span>
                      </div>
                    </td>
                    <td className=&quot;py-4 px-6 text-gray-300&quot;>{tool.users}</td>
                    <td className=&quot;py-4 px-6&quot;>
                      <div className=&quot;max-w-xs text-sm text-gray-400&quot;>{tool.bestFor}</div>
=======
                {_sortedTools.map(_(tool, _index) => (
                  <tr key={index} className="border-b border-gray-800/50 hover:bg-gray-900/50 transition-colors duration-200">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className={_`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center ${tool.color}`}>
                          {_tool.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{_tool.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                        {_tool.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={_`font-medium ${getPricingColor(tool.pricing)}`}>
                        {_tool.pricing}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white">{_tool.rating}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-300">{_tool.users}</td>
                    <td className="py-4 px-6">
                      <div className="max-w-xs text-sm text-gray-400">{_tool.bestFor}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </td>
                    <td className=&quot;py-4 px-6&quot;>
                      <div className=&quot;flex space-x-2&quot;>
                        <Button
<<<<<<< HEAD
                          href={tool.website}
                          variant=&quot;outline&quot;
                          size=&quot;sm&quot;
                          className=&quot;text-xs&quot;
=======
                          href={_tool.website}
                          variant="outline"
                          size="sm"
                          className="text-xs"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        >
                          Visit
                          <ExternalLink className=&quot;w-3 h-3 ml-1&quot; />
                        </Button>
                        <Button
<<<<<<< HEAD
                          href={`/tool-details/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                          variant=&quot;ghost&quot;
                          size=&quot;sm&quot;
                          className=&quot;text-xs&quot;
=======
                          href={_`/tool-details/${tool.name.toLowerCase().replace(/\s+/g, _'-')}`}
                          variant="ghost"
                          size="sm"
                          className="text-xs"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        >
                          Details
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

<<<<<<< HEAD
          {sortedTools.length === 0 && (
            <div className=&quot;text-center py-20&quot;>
              <Search className=&quot;w-16 h-16 text-gray-600 mx-auto mb-4&quot; />
              <h3 className=&quot;text-xl font-semibold text-gray-400 mb-2&quot;>No tools found</h3>
              <p className=&quot;text-gray-500&quot;>Try adjusting your search criteria or category filter.</p>
=======
          {_sortedTools.length === 0 && (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No tools found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or category filter.</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          )}
        </div>
      </section>

<<<<<<< HEAD
      {/* Detailed Comparison Cards */}
      <section className=&quot;py-24 bg-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
=======
      {_/* Detailed Comparison Cards */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Detailed Analysis
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Deep dive into each tool's pros, cons, and use cases to make the best decision for your business.
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {sortedTools.slice(0, 6).map((tool, index) => (
              <Card
                key={index}
                className=&quot;group border border-gray-800 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;flex items-start space-x-4 mb-4&quot;>
                  <div className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center ${tool.color}`}>
                    {tool.icon}
                  </div>
                  <div className=&quot;flex-1&quot;>
                    <h3 className=&quot;text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300&quot;>
                      {tool.name}
                    </h3>
                    <div className=&quot;flex items-center space-x-4 text-sm text-gray-400&quot;>
                      <span className=&quot;px-2 py-1 bg-gray-800 rounded-full&quot;>{tool.category}</span>
                      <div className=&quot;flex items-center space-x-1&quot;>
                        <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                        <span>{tool.rating}</span>
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_sortedTools.slice(0, _6).map(_(tool, _index) => (
              <Card
                key={index}
                className="group border border-gray-800 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={_`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center ${tool.color}`}>
                    {_tool.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {_tool.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="px-2 py-1 bg-gray-800 rounded-full">{_tool.category}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{_tool.rating}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </div>
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

                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4 mb-4&quot;>
                  <div>
                    <h4 className=&quot;text-sm font-semibold text-green-400 mb-2 flex items-center&quot;>
                      <Check className=&quot;w-4 h-4 mr-1&quot; />
                      Pros
                    </h4>
<<<<<<< HEAD
                    <ul className=&quot;space-y-1&quot;>
                      {tool.pros.slice(0, 3).map((pro, proIndex) => (
                        <li key={proIndex} className=&quot;text-xs text-gray-400 flex items-start&quot;>
                          <span className=&quot;w-1 h-1 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0&quot; />
                          {pro}
=======
                    <ul className="space-y-1">
                      {_tool.pros.slice(0, _3).map(_(pro, _proIndex) => (
                        <li key={proIndex} className="text-xs text-gray-400 flex items-start">
                          <span className="w-1 h-1 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                          {_pro}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className=&quot;text-sm font-semibold text-red-400 mb-2 flex items-center&quot;>
                      <X className=&quot;w-4 h-4 mr-1&quot; />
                      Cons
                    </h4>
<<<<<<< HEAD
                    <ul className=&quot;space-y-1&quot;>
                      {tool.cons.slice(0, 3).map((con, conIndex) => (
                        <li key={conIndex} className=&quot;text-xs text-gray-400 flex items-start&quot;>
                          <span className=&quot;w-1 h-1 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0&quot; />
                          {con}
=======
                    <ul className="space-y-1">
                      {_tool.cons.slice(0, _3).map(_(con, _conIndex) => (
                        <li key={conIndex} className="text-xs text-gray-400 flex items-start">
                          <span className="w-1 h-1 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                          {_con}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

<<<<<<< HEAD
                <div className=&quot;flex items-center justify-between&quot;>
                  <span className={`text-sm font-medium ${getPricingColor(tool.pricing)}`}>
                    {tool.pricing}
                  </span>
                  <Button
                    href={tool.website}
                    variant=&quot;outline&quot;
                    size=&quot;sm&quot;
                    className=&quot;group-hover:border-purple-500 group-hover:text-purple-400&quot;
=======
                <div className="flex items-center justify-between">
                  <span className={_`text-sm font-medium ${getPricingColor(tool.pricing)}`}>
                    {_tool.pricing}
                  </span>
                  <Button
                    href={_tool.website}
                    variant="outline"
                    size="sm"
                    className="group-hover:border-purple-500 group-hover:text-purple-400"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Visit Website
                    <ExternalLink className=&quot;w-4 h-4 ml-2&quot; />
                  </Button>
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
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size: 20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
=======
      <section className=&quot;py-24 bg-gradient-to-r from-purple-600 to-purple-700 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10&quot; />
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10&quot;>
          <h2 className=&quot;text-4xl sm:text-5xl font-bold text-white mb-8&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            Need Help Choosing?
          </h2>
          <p className=&quot;text-xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            Our experts can analyze your business needs and recommend the perfect combination of tools to accelerate your growth.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
            <Button
              href=&quot;/contact&quot;
              variant=&quot;secondary&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-purple-600 hover:bg-gray-100 shadow-2xl&quot;
            >
              Get Expert Consultation
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;/saas-marketplace&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-purple-600 shadow-2xl&quot;
            >
              Explore All Tools
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}