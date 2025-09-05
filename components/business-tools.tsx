import React from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { ExternalLink, Check, Star, Zap, Users, Globe, BarChart3, Bot, Cloud, Lock, Database, Code, Palette, Search, Mail, Calendar, CreditCard, FileText, Video, Music, Image, Globe2, Smartphone, Monitor, Server, Cpu, HardDrive, Brain, Target, TrendingUp, Shield, Rocket, Briefcase, Cog, Lightbulb, ChartBar, Clock, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react',
export default function BusinessToolsPage() {_const _businessTools = [
    {
      category: 'Project Management', _tools: [
        {
          name: 'Notion',
          description: 'All-in-one workspace for notes, docs, projects, and team collaboration.',
          features: ['TemplatesDatabase viewsReal-time editingIntegrationsTeam spaces'],
          pricing: 'Free - $8/month',
          website: 'https://notion.so',
          icon: <FileText className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-gray-800 to-black',
          popular: true
        },
        {
          name: 'Asana',
          description: 'Work management platform for teams to organize, track, and manage their work.',
          features: ['Task managementProject timelinesTeam collaborationWorkflow automationReporting'],
          pricing: 'Free - $10.99/month',
          website: 'https://asana.com',
          icon: <CheckCircle className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-pink-500 to-red-600'
        },
        {
          name: 'Monday.com',
          description: 'Visual project management platform with customizable workflows and automation.',
          features: ['Visual boardsAutomationTime trackingIntegrationsAnalytics'],
          pricing: '$8/month - $16/month',
          website: 'https://monday.com',
          icon: <Calendar className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-red-500 to-pink-600'
        }      ]
    },
    {_category: 'Communication & Collaboration', _tools: [
        {
          name: 'Slack',
          description: 'Team communication platform for modern businesses with channels and integrations.',
          features: ['ChannelsDirect messagesFile sharingIntegrationsSearch'],
          pricing: 'Free - $7.25/month',
          website: 'https://slack.com',
          icon: <MessageSquare className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-purple-500 to-pink-600',
          popular: true
        },
        {
          name: 'Microsoft Teams',
          description: 'Unified communication platform with chat, video meetings, and file collaboration.',
          features: ['ChatVideo meetingsFile sharingOffice integrationSecurity'],
          pricing: 'Free - $6/month',
          website: 'https://teams.microsoft.com',
          icon: <Users className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
        },
        {
          name: 'Zoom',
          description: 'Video conferencing platform for meetings, webinars, and team collaboration.',
          features: ['HD videoScreen sharingRecordingWebinarsBreakout rooms'],
          pricing: 'Free - $14.99/month',
          website: 'https://zoom.us',
          icon: <Video className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
        }      ]
    },
    {_category: 'Marketing & Sales', _tools: [
        {
          name: 'HubSpot',
          description: 'All-in-one inbound marketing, sales, and customer service platform.',
          features: ['CRMEmail marketingLead generationAnalyticsAutomation'],
          pricing: 'Free - $45/month',
          website: 'https://hubspot.com',
          icon: <Target className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-orange-500 to-red-600',
          popular: true
        },
        {
          name: 'Mailchimp',
          description: 'Email marketing platform for growing businesses and creators.',
          features: ['Email templatesAutomationAnalyticsAudience segmentationA/B testing'],
          pricing: 'Free - $13/month',
          website: 'https://mailchimp.com',
          icon: <Mail className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-yellow-500 to-orange-600'
        },
        {
          name: 'Salesforce',
          description: 'Customer relationship management platform for sales, service, and marketing.',
          features: ['Sales CRMService cloudMarketing automationAnalyticsAppExchange'],
          pricing: '$25/month - $300/month',
          website: 'https://salesforce.com',
          icon: <TrendingUp className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
        }      ]
    },
    {_category: 'Finance & Accounting', _tools: [
        {
          name: 'QuickBooks',
          description: 'Small business accounting software for invoicing, expenses, and financial reporting.',
          features: ['InvoicingExpense trackingFinancial reportsTax preparationBank integration'],
          pricing: '$30/month - $200/month',
          website: 'https://quickbooks.intuit.com',
          icon: <CreditCard className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-green-500 to-emerald-600',
          popular: true
        },
        {
          name: 'Stripe',
          description: 'Payment processing platform for internet businesses.',
          features: ['Global paymentsSubscription billingFraud preventionDeveloper APIsAnalytics'],
          pricing: '2.9% + 30¢ per transaction',
          website: 'https://stripe.com',
          icon: <CreditCard className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-purple-500 to-blue-600'
        },
        {
          name: 'Xero',
          description: 'Cloud-based accounting software for small businesses and accountants.',
          features: ['Bank reconciliationInvoicingExpense claimsMulti-currencyPayroll'],
          pricing: '$13/month - $70/month',
          website: 'https://xero.com',
          icon: <ChartBar className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
        }      ]
    },
    {_category: 'Design & Creative', _tools: [
        {
          name: 'Figma',
          description: 'Collaborative interface design tool for teams building digital products.',
          features: ['Real-time collaborationDesign systemsPrototypingDeveloper handoffPlugins'],
          pricing: 'Free - $12/month',
          website: 'https://figma.com',
          icon: <Palette className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-purple-500 to-pink-600',
          popular: true
        },
        {
          name: 'Canva',
          description: 'Create professional designs with drag-and-drop simplicity.',
          features: ['Templates libraryStock photosBrand kitTeam collaborationVideo editing'],
          pricing: 'Free - $12.99/month',
          website: 'https://canva.com',
          icon: <Image className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
        },
        {
          name: 'Adobe Creative Cloud',
          description: 'Complete creative software suite for design, photography, and video.',
          features: ['PhotoshopIllustratorInDesignPremiere ProAfter Effects'],
          pricing: '$52.99/month',
          website: 'https://adobe.com/creativecloud',
          icon: <Palette className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-orange-500 to-red-600'
        }      ]
    },
    {_category: 'Analytics & Business Intelligence', _tools: [
        {
          name: 'Google Analytics',
          description: 'Free web analytics service that tracks and reports website traffic.',
          features: ['Real-time dataAudience insightsConversion trackingE-commerceGoals'],
          pricing: 'Free',
          website: 'https://analytics.google.com',
          icon: <BarChart3 className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-blue-500 to-green-600',
          popular: true
        },
        {
          name: 'Tableau',
          description: 'Data visualization and business intelligence platform for analytics.',
          features: ['Interactive dashboardsData blendingReal-time analyticsMobile supportCollaboration'],
          pricing: '$70/month - $35/month',
          website: 'https://tableau.com',
          icon: <ChartBar className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
        },
        {
          name: 'Mixpanel',
          description: 'Product analytics platform for understanding user behavior and product usage.',
          features: ['Event trackingFunnel analysisCohort analysisA/B testingReal-time data'],
          pricing: 'Free - $25/month',
          website: 'https://mixpanel.com',
          icon: <TrendingUp className=&quot;w-6 h-6&quot; />,
          color: 'bg-gradient-to-br from-purple-500 to-pink-600'
        }      ]
    }
  ],

  const businessInsights = [
    {
      title: 'Remote Work Tools',
      description: 'Essential tools for distributed teams and hybrid work environments.',
      trend: '📈 Growing Demand',
      color: 'text-green-400'
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Business tools leveraging AI for automation and intelligent insights.',
      trend: '🚀 High Growth',
      color: 'text-blue-400'
    },
    {
      title: 'Cloud-Native Platforms',
      description: 'Business applications built for scalability and global accessibility.',
      trend: '☁️ Mainstream',
      color: 'text-cyan-400'
    },
    {
      title: 'Security & Compliance',
      description: 'Tools ensuring data protection and regulatory compliance.',
      trend: '🔒 Critical',
      color: 'text-orange-400'
    }
  ],

  const productivityTips = [
    {
      title: 'Start with Free Tiers',
      description: 'Most tools offer free versions to test before committing to paid plans.',
      icon: <CheckCircle className=&quot;w-6 h-6 text-green-400&quot; />
    },
    {
      title: 'Focus on Integration',
      description: 'Choose tools that work well together to avoid data silos and manual work.',
      icon: <Cog className=&quot;w-6 h-6 text-blue-400&quot; />
    },
    {
      title: 'Measure ROI',
      description: 'Track how each tool improves your team\'s productivity and business outcomes.',
      icon: <ChartBar className=&quot;w-6 h-6 text-purple-400&quot; />
    },
    {
              title: 'Train Your Team',
        description: 'Invest in proper training to maximize the value of your chosen tools.',
        icon: <Users className=&quot;w-6 h-6 text-orange-400&quot; />
    }
  ],
  return (
    <>
      <Head>
        <title>Business Tools & Productivity - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Essential business tools for project management, communication, marketing, finance, and productivity. Real pricing and features for growing businesses.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Business Tools & Productivity - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Comprehensive business tools directory with pricing and features.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative section-padding bg-gradient-cursor overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-grid opacity-10&quot; />        
        <div className=&quot;relative z-10 container-cursor text-center&quot;>
          <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6&quot;>
            <span className=&quot;w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse&quot; />
            Business Solutions
          </div>
          <h1 className=&quot;text-responsive-xl font-black mb-8 gradient-text text-shadow-lg&quot;>
            Essential Business Tools & Productivity
          </h1>
          <p className=&quot;text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed&quot;>
            Discover the most powerful business tools that successful companies use to manage projects, 
            communicate effectively, market their products, and grow their operations. Real pricing and features.
          </p>
        </div>
      </section>

      {/* Business Insights */}
      <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>              Business Tool Trends & Insights
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Stay ahead of the curve with our analysis of the business tools landscape and emerging opportunities.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            {businessInsights.map((insight, index) => (
              <Card
                key={index}
                className=&quot;card-hover border-gradient-blue text-center&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{insight.title}</h3>
                <p className=&quot;text-gray-400 text-sm mb-4 leading-relaxed&quot;>{insight.description}</p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${insight.color} bg-gray-800/50`}>
                  {insight.trend}                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Tools */}
      <section className=&quot;section-padding bg-gradient-cursor&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>              Essential Business Tools
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Hand-picked business tools that deliver real value for your organization. Each tool has been evaluated 
              for features, pricing, and business impact.
            </p>
          </div>

          {businessTools.map((category, categoryIndex) => (
            <div key={categoryIndex} className=&quot;mb-20&quot;>
              <div className=&quot;text-center mb-12&quot;>
                <h3 className=&quot;text-3xl font-bold text-white mb-4&quot;>{category.category}</h3>
                <div className=&quot;w-24 h-1 bg-gradient-to-r from-cursor-blue to-purple-500 mx-auto rounded-full&quot; />
              </div>

              <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8&quot;>
                {category.tools.map((tool, toolIndex) => (                  <Card
                    key={toolIndex}
                    className={_`card-hover border-gradient-blue group ${tool.popular ? 'ring-2 ring-cursor-blue/50' : ''}`}
                    style={_{ animationDelay: `${(categoryIndex * 0.2) + (toolIndex * 0.1)}s` }}
                  >
                    {tool.popular && (
                      <div className=&quot;absolute -top-3 left-1/2 transform -translate-x-1/2&quot;>
                        <div className=&quot;inline-flex items-center px-3 py-1 rounded-full bg-cursor-blue text-white text-xs font-medium&quot;>
                          <Star className=&quot;w-3 h-3 mr-1&quot; />                          Popular Choice
                        </div>
                      </div>
                    )}

                    <div className=&quot;text-center mb-6&quot;>
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        {tool.icon}
                      </div>
                      <h4 className=&quot;text-xl font-bold text-white mb-2&quot;>{tool.name}</h4>
                      <p className=&quot;text-gray-400 text-sm leading-relaxed&quot;>{tool.description}</p>
                    </div>

                    <div className=&quot;mb-6&quot;>
                      <div className=&quot;text-center mb-4&quot;>
                        <span className=&quot;text-2xl font-bold text-cursor-blue&quot;>{tool.pricing}</span>
                      </div>
                      <ul className=&quot;space-y-2&quot;>
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className=&quot;flex items-center text-gray-300 text-sm&quot;>
                            <Check className=&quot;w-4 h-4 text-cursor-blue mr-3 flex-shrink-0&quot; />
                            {feature}                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      href={tool.website}
                      variant=&quot;primary&quot;
                      size=&quot;sm&quot;
                      className=&quot;w-full group-hover:scale-105 transition-transform duration-300&quot;                      external
                    >
                      Visit Website
                      <ExternalLink className=&quot;w-4 h-4 ml-2&quot; />
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Productivity Tips */}
      <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>              Productivity Tips & Best Practices
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Maximize the value of your business tools with these proven strategies and best practices.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            {productivityTips.map((tip, index) => (
              <Card
                key={index}
                className=&quot;card-hover border-gradient-blue text-center&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;flex justify-center mb-4&quot;>
                  {tip.icon}
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{tip.title}</h3>
                <p className=&quot;text-gray-400 text-sm leading-relaxed&quot;>{tip.description}</p>              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;section-padding bg-gradient-to-r from-cursor-blue to-purple-600 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10&quot; />
        <div className=&quot;container-cursor text-center relative z-10&quot;>
          <h2 className=&quot;text-responsive-lg font-bold text-white mb-8&quot;>            Ready to Transform Your Business Operations?
          </h2>
          <p className=&quot;text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            These business tools can streamline your operations, improve team collaboration, and drive growth. 
            Start with the essentials and build your tech stack strategically.
          </p>
          <div className="flex flex-col sm: flex-row gap-6 justify-center">            <Button
              href=&quot;/micro-saas&quot;
              variant=&quot;secondary&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl&quot;
            >
              Explore Micro SaaS
            </Button>
            <Button
              href=&quot;/contact&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl&quot;
            >
              Get Business Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}