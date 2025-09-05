import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
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
} from 'lucide-react';

export default function StartupToolsPage() {
  const startupTools = [
    {
      name: 'HubSpot',
      description: 'All-in-one inbound marketing, sales, and customer service platform designed to help businesses grow better.',
      category: 'Marketing & Sales',
      pricing: 'Free - $45/month',
      rating: 4.7,
      users: '135K+',
      icon: <Target className=&quot;w-8 h-8 text-orange-400&quot; />,
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      features: [
        'CRM system',
        'Email marketing',
        'Lead generation',
        'Analytics & reporting',
        'Marketing automation',
        'Free tier available'
      ],
      website: 'https://hubspot.com',
      useCase: 'Perfect for startups that want to implement inbound marketing strategies and manage customer relationships effectively.',
      pros: ['Free tier', 'All-in-one solution', 'Great for beginners', 'Excellent support'],
      cons: ['Can get expensive', 'Complex for small teams', 'Limited customization'],
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
        'Email templates',
        'Automation workflows',
        'A/B testing',
        'Analytics & reporting',
        'Integration ecosystem',
        'Free tier available'
      ],
      website: 'https://mailchimp.com',
      useCase: 'Ideal for startups that need to build email lists, nurture leads, and communicate with customers.',
      pros: ['Free tier', 'Easy to use', 'Good templates', 'Affordable'],
      cons: ['Limited free features', 'Basic automation', 'Can be expensive'],
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
        'Automated scheduling',
        'Calendar integration',
        'Custom booking pages',
        'Team scheduling',
        'Analytics & reporting',
        'Free tier available'
      ],
      website: 'https://calendly.com',
      useCase: 'Essential for startups that need to schedule sales calls, investor meetings, and team collaborations efficiently.',
      pros: ['Free tier', 'Easy integration', 'Professional appearance', 'Time-saving'],
      cons: ['Limited free features', 'Basic customization', 'Can be expensive'],
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
        'Design templates',
        'Stock photos & icons',
        'Brand kit',
        'Team collaboration',
        'Social media formats',
        'Free tier available'
      ],
      website: 'https://canva.com',
      useCase: 'Perfect for startups that need to create marketing materials, social media content, and presentations.',
      pros: ['Free tier', 'Easy to use', 'Great templates', 'Affordable'],
      cons: ['Limited customization', 'Watermark on free', 'Basic features'],
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
        'Social media scheduling',
        'Analytics & reporting',
        'Team collaboration',
        'Content calendar',
        'Multiple platforms',
        'Free tier available'
      ],
      website: 'https://buffer.com',
      useCase: 'Ideal for startups that want to maintain a consistent social media presence and grow their audience.',
      pros: ['Free tier', 'Easy to use', 'Good analytics', 'Affordable'],
      cons: ['Limited free features', 'Basic scheduling', 'Limited platforms'],
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
        'Note-taking & docs',
        'Project management',
        'Team collaboration',
        'Database & tables',
        'Templates library',
        'API integration'
      ],
      website: 'https://notion.so',
      useCase: 'Perfect for startup teams that need a flexible workspace for documentation, project management, and knowledge sharing.',
      pros: ['Highly flexible', 'Beautiful interface', 'Great templates', 'Free tier'],
      cons: ['Learning curve', 'Limited offline access', 'Can be overwhelming'],
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
        'Global payment methods',
        'Subscription billing',
        'Fraud protection',
        'Compliance tools',
        'Developer-friendly API',
        'Analytics dashboard'
      ],
      website: 'https://stripe.com',
      useCase: 'Essential for any startup that needs to accept payments, especially SaaS companies and e-commerce businesses.',
      pros: ['Developer-friendly', 'Global reach', 'Excellent docs', 'Reliable'],
      cons: ['Higher fees than some alternatives', 'Complex for beginners', 'Strict requirements'],
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
        'Live chat',
        'Customer messaging',
        'Help desk',
        'User onboarding',
        'Analytics & reporting',
        'Integration ecosystem'
      ],
      website: 'https://intercom.com',
      useCase: 'Perfect for SaaS startups and online businesses that want to provide excellent customer support and user engagement.',
      pros: ['Great UX', 'Powerful features', 'Good integrations', 'Mobile apps'],
      cons: ['Expensive', 'Complex pricing', 'Can be overwhelming'],
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
        'User behavior tracking',
        'Funnel analysis',
        'A/B testing',
        'Real-time data',
        'Custom events',
        'Mobile analytics'
      ],
      website: 'https://mixpanel.com',
      useCase: 'Essential for product teams that need to understand user behavior, optimize conversion funnels, and make data-driven decisions.',
      pros: ['Powerful analytics', 'Real-time data', 'Good documentation', 'Flexible'],
      cons: ['Complex setup', 'Expensive at scale', 'Steep learning curve'],
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
        'Zero-config deployment',
        'Global CDN',
        'Automatic scaling',
        'Git integration',
        'Preview deployments',
        'Edge functions'
      ],
      website: 'https://vercel.com',
      useCase: 'Ideal for startup development teams that want to deploy modern web applications quickly with excellent performance.',
      pros: ['Zero config', 'Excellent performance', 'Great DX', 'Free tier'],
      cons: ['Limited backend features', 'Can be expensive for high traffic', 'Vendor lock-in'],
      bestFor: 'Frontend developers, startup teams, modern web apps'
    }
  ];

  const categories = ['All', 'Marketing & Sales', 'Email Marketing', 'Productivity', 'Design', 'Social Media', 'Payments', 'Customer Support', 'Analytics', 'Development'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredTools = selectedCategory === 'All' 
    ? startupTools 
    : startupTools.filter(tool => tool.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Startup Tools & Resources - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Essential tools and resources for startups and entrepreneurs. Curated selection of SaaS services to help your business grow.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Startup Tools & Resources - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Essential tools and resources for startups and entrepreneurs to accelerate growth.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-black&quot;>
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.06),transparent_50%)]&quot; />
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
                href=&quot;#tools&quot;
                size=&quot;lg&quot;
                className=&quot;animate-scale-in shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40&quot;
                style={{ animationDelay: '0.2s' }}
              >
                Explore Tools
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </Button>
              <Button
                href=&quot;/contact&quot;
                variant=&quot;outline&quot;
                size=&quot;lg&quot;
                className=&quot;animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5&quot;
                style={{ animationDelay: '0.4s' }}
              >
                Get Startup Advice
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in&quot; style={{ animationDelay: '0.6s' }}>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300&quot;>
                {startupTools.length}+
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

      {/* Category Filter */}
      <section className=&quot;py-16 bg-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id=&quot;tools&quot; className=&quot;py-24 bg-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
              {selectedCategory === 'All' ? 'All Startup Tools' : `${selectedCategory} Tools`}
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              {selectedCategory === 'All' 
                ? 'Discover the essential tools that successful startups use to grow and scale their businesses.'
                : `Explore the best ${selectedCategory.toLowerCase()} tools to accelerate your startup's growth.`
              }
            </p>
          </div>

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
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-gray-300 mb-2&quot;>Best For:</h4>
                      <p className=&quot;text-sm text-gray-400&quot;>{tool.bestFor}</p>
                    </div>

                    <div className=&quot;flex items-center justify-between&quot;>
                      <Button
                        href={tool.website}
                        variant=&quot;outline&quot;
                        size=&quot;sm&quot;
                        className=&quot;group-hover:border-orange-500 group-hover:text-orange-400&quot;
                      >
                        Visit Website
                        <ExternalLink className=&quot;w-4 h-4 ml-2&quot; />
                      </Button>
                      
                      <div className=&quot;text-right&quot;>
                        <div className=&quot;text-xs text-gray-500 mb-1&quot;>Use Case:</div>
                        <div className=&quot;text-sm text-gray-300 max-w-xs&quot;>{tool.useCase}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Resources Section */}
      <section className=&quot;py-24 bg-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
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

      {/* CTA Section */}
      <section className=&quot;py-24 bg-gradient-to-r from-orange-600 to-orange-700 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10&quot; />
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10&quot;>
          <h2 className=&quot;text-4xl sm:text-5xl font-bold text-white mb-8&quot;>
            Ready to Scale Your Startup?
          </h2>
          <p className=&quot;text-xl text-orange-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            Our startup experts can help you choose the right tools, implement growth strategies, and accelerate your business growth.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
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
  );
}