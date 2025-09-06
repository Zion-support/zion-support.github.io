import React from 'react'
import Head from 'next/head'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
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
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

export default function SaaSMarketplacePage() {_const _microSaasServices = [
    {
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

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-black&quot;>
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.06),transparent_50%)]&quot; />
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
                href=&quot;#services&quot;
                size=&quot;lg&quot;
                className=&quot;animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40&quot;
                style={{ animationDelay: '0.2s' }}
              >
                Explore Services
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </Button>
              <Button
                href=&quot;/contact&quot;
                variant=&quot;outline&quot;
                size=&quot;lg&quot;
                className=&quot;animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5&quot;
                style={{ animationDelay: '0.4s' }}
              >
                Get Recommendations
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in&quot; style={{ animationDelay: '0.6s' }}>
            <div className=&quot;text-center group&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300&quot;>
                {microSaasServices.length}+
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

      {/* Category Filter */}
      <section className=&quot;py-16 bg-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
            {categories.map((category) => (
              <button
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

      {/* Services Grid */}
      <section id=&quot;services&quot; className=&quot;py-24 bg-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
              {selectedCategory === 'All' ? 'All Services' : `${selectedCategory} Services`}
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              {selectedCategory === 'All' 
                ? 'Explore our curated selection of the best micro SaaS services for modern businesses.'
                : `Discover the best ${selectedCategory.toLowerCase()} tools to streamline your business operations.`
              }
            </p>
          </div>

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
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className=&quot;flex items-center justify-between&quot;>
                      <Button
                        href={service.website}
                        variant=&quot;outline&quot;
                        size=&quot;sm&quot;
                        className=&quot;group-hover:border-blue-500 group-hover:text-blue-400&quot;
                      >
                        Visit Website
                        <ExternalLink className=&quot;w-4 h-4 ml-2&quot; />
                      </Button>
                      
                      <div className=&quot;text-right&quot;>
                        <div className=&quot;text-xs text-gray-500 mb-1&quot;>Use Case:</div>
                        <div className=&quot;text-sm text-gray-300 max-w-xs&quot;>{service.useCase}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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