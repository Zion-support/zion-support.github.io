import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import {_Brain, _MessageSquare, _Image, _Video, _FileText, _BarChart3, _Users, _Zap, _ArrowRight, _Star, _Check, _ExternalLink, _TrendingUp, _Shield, _Globe} from 'lucide-react';

export default function AIBusinessToolsPage() {_const _aiTools = [
    {
      name: 'ChatGPT', _description: 'Advanced AI language model that can help with writing, _analysis, _coding, _and creative tasks. Perfect for content creation and problem-solving.', _category: 'AI Assistant', _pricing: 'Free - $20/month', _rating: 4.8, _users: '100M+', _icon: <Brain className="w-8 h-8 text-green-400" />, _color: 'bg-gradient-to-br from-green-500 to-emerald-600', _features: [
        'Natural language processing', _'Code generation & debugging', _'Content creation', _'Data analysis', _'Creative writing', _'Multi-language support'
      ], _website: 'https://chat.openai.com', _useCase: 'Ideal for writers, _developers, _researchers, _and anyone who needs AI assistance with complex tasks.', _pros: ['Powerful capabilities', _'Easy to use', _'Regular updates', _'Good free tier'], _cons: ['Sometimes inaccurate', _'Limited context', _'Privacy concerns'], _bestFor: 'Content creators, _developers, _researchers'},
    {_name: 'Midjourney', _description: 'AI-powered image generation tool that creates stunning artwork, _illustrations, _and designs from text descriptions.', _category: 'AI Art', _pricing: '$10 - $30/month', _rating: 4.7, _users: '1M+', _icon: <Image className="w-8 h-8 text-purple-400" />, _color: 'bg-gradient-to-br from-purple-500 to-pink-600', _features: [
        'Text-to-image generation', _'High-resolution output', _'Artistic styles', _'Commercial usage rights', _'Community features', _'Discord integration'
      ], _website: 'https://midjourney.com', _useCase: 'Perfect for designers, _marketers, _content creators, _and businesses needing custom visual content.', _pros: ['High-quality output', _'Creative control', _'Commercial rights', _'Active community'], _cons: ['Discord-only interface', _'Limited customization', _'Monthly subscription'], _bestFor: 'Designers, _marketers, _content creators'},
    {_name: 'Jasper', _description: 'AI writing assistant that helps create marketing copy, _blog posts, _social media content, _and more.', _category: 'AI Writing', _pricing: '$39 - $125/month', _rating: 4.6, _users: '100K+', _icon: <FileText className="w-8 h-8 text-blue-400" />, _color: 'bg-gradient-to-br from-blue-500 to-indigo-600', _features: [
        'Marketing copy generation', _'Blog post writing', _'Social media content', _'SEO optimization', _'Brand voice training', _'Team collaboration'
      ], _website: 'https://jasper.ai', _useCase: 'Essential for marketing teams, _content creators, _and businesses that need high-quality written content at scale.', _pros: ['Specialized for marketing', _'Brand voice training', _'SEO optimization', _'Team features'], _cons: ['Expensive', _'Limited free trial', _'Can be repetitive'], _bestFor: 'Marketing teams, _content creators, _businesses'},
    {_name: 'Synthesia', _description: 'AI video generation platform that creates professional videos with AI avatars and voice synthesis.', _category: 'AI Video', _pricing: '$30 - $89/month', _rating: 4.5, _users: '50K+', _icon: <Video className="w-8 h-8 text-red-400" />, _color: 'bg-gradient-to-br from-red-500 to-pink-600', _features: [
        'AI avatar generation', _'Text-to-speech', _'Video templates', _'Multi-language support', _'Custom branding', _'API access'
      ], _website: 'https://synthesia.io', _useCase: 'Perfect for creating training videos, _marketing content, _and presentations without hiring actors or video crews.', _pros: ['Professional quality', _'Multiple languages', _'Custom avatars', _'Easy to use'], _cons: ['Limited avatar options', _'Expensive', _'Subscription required'], _bestFor: 'Training departments, _marketers, _educators'},
    {_name: 'Copy.ai', _description: 'AI copywriting tool that generates marketing copy, _product descriptions, _and creative content for businesses.', _category: 'AI Copywriting', _pricing: 'Free - $49/month', _rating: 4.4, _users: '200K+', _icon: <MessageSquare className="w-8 h-8 text-orange-400" />, _color: 'bg-gradient-to-br from-orange-500 to-red-600', _features: [
        'Marketing copy generation', _'Product descriptions', _'Social media posts', _'Email campaigns', _'Blog content', _'Free tier available'
      ], _website: 'https://copy.ai', _useCase: 'Great for small businesses, _entrepreneurs, _and marketers who need quality copy without hiring writers.', _pros: ['Free tier', _'Easy to use', _'Good templates', _'Affordable'], _cons: ['Limited customization', _'Quality varies', _'Basic features'], _bestFor: 'Small businesses, _entrepreneurs, _marketers'},
    {_name: 'Grammarly', _description: 'AI-powered writing assistant that checks grammar, _spelling, _tone, _and style to improve your writing.', _category: 'AI Writing', _pricing: 'Free - $12/month', _rating: 4.7, _users: '30M+', _icon: <Check className="w-8 h-8 text-green-400" />, _color: 'bg-gradient-to-br from-green-500 to-teal-600', _features: [
        'Grammar & spelling check', _'Tone analysis', _'Style suggestions', _'Plagiarism detection', _'Browser extension', _'Mobile apps'
      ], _website: 'https://grammarly.com', _useCase: 'Essential for anyone who writes professionally, _including students, _professionals, _and content creators.', _pros: ['Excellent accuracy', _'Multiple platforms', _'Free tier', _'User-friendly'], _cons: ['Limited free features', _'Privacy concerns', _'Can be overzealous'], _bestFor: 'Students, _professionals, _content creators'},
    {_name: 'Lumen5', _description: 'AI video maker that transforms text content into engaging videos for social media and marketing.', _category: 'AI Video', _pricing: 'Free - $79/month', _rating: 4.3, _users: '100K+', _icon: <Video className="w-8 h-8 text-blue-400" />, _color: 'bg-gradient-to-br from-blue-500 to-cyan-600', _features: [
        'Text-to-video conversion', _'Video templates', _'Music library', _'Brand customization', _'Social media formats', _'Free tier available'
      ], _website: 'https://lumen5.com', _useCase: 'Perfect for marketers, _social media managers, _and businesses that want to create video content from existing text.', _pros: ['Free tier', _'Easy to use', _'Good templates', _'Affordable'], _cons: ['Limited customization', _'Basic features', _'Watermark on free'], _bestFor: 'Marketers, _social media managers, _small businesses'},
    {_name: 'Surfer SEO', _description: 'AI-powered SEO tool that helps optimize content for search engines using data-driven insights.', _category: 'AI SEO', _pricing: '$59 - $199/month', _rating: 4.6, _users: '25K+', _icon: <TrendingUp className="w-8 h-8 text-green-400" />, _color: 'bg-gradient-to-br from-green-500 to-emerald-600', _features: [
        'Content optimization', _'Keyword research', _'Competitor analysis', _'SERP analysis', _'Content editor', _'Rank tracking'
      ], _website: 'https://surferseo.com', _useCase: 'Essential for content marketers, _SEO specialists, _and businesses that want to improve their search rankings.', _pros: ['Data-driven insights', _'Content optimization', _'Competitor analysis', _'Good support'], _cons: ['Expensive', _'Complex interface', _'Steep learning curve'], _bestFor: 'SEO specialists, _content marketers, _businesses'}
  ];

  const _categories = ['All', 'AI Assistant', 'AI Art', 'AI Writing', 'AI Video', 'AI Copywriting', 'AI SEO'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const _filteredTools = selectedCategory === 'All' 
    ? aiTools 
    : aiTools.filter(tool => tool.category === selectedCategory);

  return (
    <>
      <Head>
        <title>AI Business Tools - Zion Tech Group</title>
        <meta name="description" content="Discover the best AI-powered business tools for automation, content creation, and productivity. Expert-curated selection of AI SaaS services." />
        <meta property="og:title" content="AI Business Tools - Zion Tech Group" />
        <meta property="og:description" content="Expert-curated selection of AI-powered business tools and SaaS services." />
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6 animate-scale-in">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Business Solutions
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight">
              AI Business Tools
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
              Transform your business with cutting-edge AI tools. 
              Expert-curated selection of the best AI-powered SaaS services for modern enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button
                href="#tools"
                size="lg"
                className="animate-scale-in shadow-2xl shadow-green-500/25 hover:shadow-green-500/40"
                style={_{ animationDelay: '0.2s'}}
              >
                Explore AI Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5"
                style={_{ animationDelay: '0.4s'}}
              >
                Get AI Consultation
              </Button>
            </div>
          </div>

          {_/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={_{ animationDelay: '0.6s'}}>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">
                {_aiTools.length}+
              </div>
              <div className="text-gray-400 text-sm">AI Tools</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                7
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                4.6+
              </div>
              <div className="text-gray-400 text-sm">Avg Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">
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
                    ? 'bg-green-600 text-white shadow-lg'
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
              {_selectedCategory === 'All' ? 'All AI Tools' : `${selectedCategory} Tools`}
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {_selectedCategory === 'All' 
                ? 'Discover the most powerful AI tools that are transforming how businesses operate and create content.'
                : `Explore the best ${selectedCategory.toLowerCase()} tools to enhance your business capabilities.`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_filteredTools.map(_(tool, _index) => (
              <Card
                key={index}
                className="group border border-gray-800 hover:border-green-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1"
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
                      <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
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
                        className="group-hover:border-green-500 group-hover:text-green-400"
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

      {_/* AI Benefits Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Why Choose AI Tools?
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              AI-powered tools are revolutionizing how businesses operate, create content, and serve customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">10x Productivity</h3>
              <p className="text-gray-400">
                AI tools can automate repetitive tasks, generate content, and provide insights that would take humans hours or days to complete.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Data-Driven Decisions</h3>
              <p className="text-gray-400">
                AI analytics provide deep insights into customer behavior, market trends, and business performance for better decision-making.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Enhanced Customer Experience</h3>
              <p className="text-gray-400">
                AI-powered chatbots, personalization, and automation create seamless, personalized experiences for your customers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Our AI experts can help you identify the right tools, implement them effectively, and maximize their impact on your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl"
            >
              Get AI Strategy Session
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/saas-marketplace"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 shadow-2xl"
            >
              Explore More Tools
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}