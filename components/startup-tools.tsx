import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {_Rocket, _DollarSign, _Users, _BarChart3, _Mail, _Calendar, _Shield, _Globe, _ArrowRight, _Star, _Check, _ExternalLink, _TrendingUp, _Zap, _Target, _Lightbulb, _BookOpen} from 'lucide-react';

export default function StartupToolsPage() {_const _startupTools = [
    {
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

  const _filteredTools = selectedCategory === 'All' 
    ? startupTools 
    : startupTools.filter(tool => tool.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Startup Tools & Resources - Zion Tech Group</title>
        <meta name="description" content="Essential tools and resources for startups and entrepreneurs. Curated selection of SaaS services to help your business grow." />
        <meta property="og:title" content="Startup Tools & Resources - Zion Tech Group" />
        <meta property="og:description" content="Essential tools and resources for startups and entrepreneurs to accelerate growth." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {_/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.06),transparent_50%)]" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20 animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6 animate-scale-in">
                <Rocket className="w-4 h-4 mr-2" />
                Startup Growth Tools
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight">
              Startup Tools & Resources
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
              Essential tools and resources to help your startup grow faster. 
              Expert-curated selection of SaaS services for entrepreneurs and growing businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button
                href="#tools"
                size="lg"
                className="animate-scale-in shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40"
                style={_{ animationDelay: '0.2s'}}
              >
                Explore Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5"
                style={_{ animationDelay: '0.4s'}}
              >
                Get Startup Advice
              </Button>
            </div>
          </div>

          {_/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={_{ animationDelay: '0.6s'}}>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                {_startupTools.length}+
              </div>
              <div className="text-gray-400 text-sm">Essential Tools</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                10
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">
                4.6+
              </div>
              <div className="text-gray-400 text-sm">Avg Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                130M+
              </div>
              <div className="text-gray-400 text-sm">Total Users</div>
            </div>
          </div>
        </div>
      </section>

      {_/* Category Filter */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {_categories.map(_(category) => (_<button
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

      {_/* Tools Grid */}
      <section id="tools" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              {_selectedCategory === 'All' ? 'All Startup Tools' : `${selectedCategory} Tools`}
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {_selectedCategory === 'All' 
                ? 'Discover the essential tools that successful startups use to grow and scale their businesses.'
                : `Explore the best ${selectedCategory.toLowerCase()} tools to accelerate your startup's growth.`
              }
            </p>
          </div>

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
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Best For:</h4>
                      <p className="text-sm text-gray-400">{_tool.bestFor}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <Button
                        href={_tool.website}
                        variant="outline"
                        size="sm"
                        className="group-hover:border-orange-500 group-hover:text-orange-400"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      
                      <div className="text-right">
                        <div className="text-xs text-gray-500 mb-1">Use Case:</div>
                        <div className="text-sm text-gray-300 max-w-xs">{_tool.useCase}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {_/* Startup Resources Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Additional Startup Resources
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Beyond tools, here are additional resources to help your startup succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Startup Communities</h3>
              <p className="text-gray-400 mb-4">
                Join startup communities like Y Combinator Startup School, Indie Hackers, and local startup meetups.
              </p>
              <Button href="https://www.startupschool.org" variant="outline" size="sm">
                Explore Communities
              </Button>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Educational Resources</h3>
              <p className="text-gray-400 mb-4">
                Access free courses from platforms like Coursera, edX, and startup-specific learning resources.
              </p>
              <Button href="https://www.coursera.org" variant="outline" size="sm">
                Start Learning
              </Button>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Growth Strategies</h3>
              <p className="text-gray-400 mb-4">
                Learn proven growth strategies from successful entrepreneurs and growth hackers.
              </p>
              <Button href="/resources" variant="outline" size="sm">
                View Resources
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Scale Your Startup?
          </h2>
          <p className="text-xl text-orange-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Our startup experts can help you choose the right tools, implement growth strategies, and accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 shadow-2xl"
            >
              Get Startup Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/saas-marketplace"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-600 shadow-2xl"
            >
              Explore More Tools
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}