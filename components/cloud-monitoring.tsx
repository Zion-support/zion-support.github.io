import React from 'react'
import Head from 'next/head'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { Activity, BarChart3, AlertTriangle, Clock, Database, Globe, Lock, Shield, TrendingUp, Users, Zap, ArrowRight, Play, CheckCircle, Star, Server, Cloud, Eye, Bell, Settings, Code } from 'lucide-react',
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

export default function CloudMonitoringPage() {_const _features = [
    {
      icon: <Activity className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Real-time Monitoring',
      description: 'Monitor your entire infrastructure in real-time with sub-second latency and instant alerting.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500'},
    {
      icon: <BarChart3 className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Advanced Analytics',
      description: 'Deep insights into performance metrics, resource utilization, and business intelligence.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      gradient: 'from-blue-400 to-cyan-500'},
    {
      icon: <AlertTriangle className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Smart Alerting',
      description: 'AI-powered anomaly detection and intelligent alerting to prevent issues before they impact users.',
      color: 'bg-gradient-to-br from-red-500 to-pink-600',
      gradient: 'from-red-400 to-pink-500'},
    {
      icon: <Database className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Multi-Cloud Support',
      description: 'Monitor AWS, Azure, Google Cloud, and on-premises infrastructure from a single dashboard.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      gradient: 'from-purple-400 to-indigo-500'},
    {
      icon: <Shield className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Security Monitoring',
      description: 'Comprehensive security monitoring with threat detection, compliance reporting, and audit trails.',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      gradient: 'from-yellow-400 to-orange-500'},
    {
      icon: <Zap className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Auto-scaling',
      description: 'Intelligent auto-scaling based on real-time metrics and predictive analytics.',
      color: 'bg-gradient-to-br from-teal-500 to-blue-600',
      gradient: 'from-teal-400 to-blue-500'}],

  const monitoringCapabilities = [
    {
      category: 'Infrastructure',
    }
  ],

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 10 serversBasic monitoringEmail alerts7-day data retentionCommunity supportMobile app access'
      ],
      popular: false,
      color: 'border-gray-600',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100 serversAdvanced monitoringSMS & Slack alerts30-day data retentionPriority supportCustom dashboardsAPI accessTeam collaboration'
      ],
      popular: true,
      color: 'border-blue-500',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited serversFull monitoring suiteCustom integrations1-year data retentionDedicated supportWhite-label solutionSLA guaranteeOn-premise option'
      ],
      popular: false,
      color: 'border-purple-600',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ],

  const integrations = [
    { name: 'AWS', icon: '☁️', description: 'CloudWatch integration' },
    { name: 'Azure', icon: '🔷', description: 'Monitor integration' },
    { name: 'GCP', icon: '☁️', description: 'Stackdriver integration' },
    { name: 'Docker', icon: '🐳', description: 'Container monitoring' },
    { name: 'Kubernetes', icon: '☸️', description: 'K8s native support' },
    { name: 'Slack', icon: '💬', description: 'Team notifications' },
    { name: 'PagerDuty', icon: '🚨', description: 'Incident management' },
    { name: 'Jira', icon: '📋', description: 'Issue tracking' }
  ],

  const useCases = [
    {
      title: 'DevOps Teams',
      description: 'Monitor CI/CD pipelines, deployment success rates, and infrastructure health.',
      icon: '🔄',
      benefits: ['Faster deploymentsReduced downtimeBetter collaborationAutomated scaling']
    },
    {
      title: 'SaaS Companies',
      description: 'Track user experience, application performance, and business metrics.',
      icon: '💼',
      benefits: ['User satisfactionRevenue optimizationCompetitive advantageCustomer retention']
    },
    {
      title: 'E-commerce',
      description: 'Monitor website performance, payment processing, and inventory systems.',
      icon: '🛒',
      benefits: ['Higher conversionFaster checkoutInventory optimizationRevenue growth']
    },
    {
      title: 'Financial Services',
      description: 'Ensure compliance, security, and 24/7 availability of critical systems.',
      icon: '💰',
      benefits: ['Regulatory complianceFraud detectionRisk managementCustomer trust']
    }
  ],

  const _pricingPlans = [
    {_name: 'Starter', _price: '$49', _period: '/month', _description: 'Perfect for small teams and startups', _features: [
        'Up to 10 servers', _'Basic monitoring', _'Email alerts', _'7-day data retention', _'Community support', _'Mobile app access'
      ], _popular: false, _color: 'border-gray-600', _buttonColor: 'bg-gray-600 hover:bg-gray-700'},
    {_name: 'Professional', _price: '$199', _period: '/month', _description: 'Ideal for growing businesses', _features: [
        'Up to 100 servers', _'Advanced monitoring', _'SMS & Slack alerts', _'30-day data retention', _'Priority support', _'Custom dashboards', _'API access', _'Team collaboration'
      ], _popular: true, _color: 'border-blue-500', _buttonColor: 'bg-blue-600 hover:bg-blue-700'},
    {_name: 'Enterprise', _price: '$599', _period: '/month', _description: 'For large organizations', _features: [
        'Unlimited servers', _'Full monitoring suite', _'Custom integrations', _'1-year data retention', _'Dedicated support', _'White-label solution', _'SLA guarantee', _'On-premise option'
      ], _popular: false, _color: 'border-purple-600', _buttonColor: 'bg-purple-600 hover:bg-purple-700'}
  ];

  const _integrations = [
    {_name: 'AWS', _icon: '☁️', _description: 'CloudWatch integration'},
    {_name: 'Azure', _icon: '🔷', _description: 'Monitor integration'},
    {_name: 'GCP', _icon: '☁️', _description: 'Stackdriver integration'},
    {_name: 'Docker', _icon: '🐳', _description: 'Container monitoring'},
    {_name: 'Kubernetes', _icon: '☸️', _description: 'K8s native support'},
    {_name: 'Slack', _icon: '💬', _description: 'Team notifications'},
    {_name: 'PagerDuty', _icon: '🚨', _description: 'Incident management'},
    {_name: 'Jira', _icon: '📋', _description: 'Issue tracking'}
  ];

  const _useCases = [
    {_title: 'DevOps Teams', _description: 'Monitor CI/CD pipelines, _deployment success rates, _and infrastructure health.', _icon: '🔄', _benefits: ['Faster deployments', _'Reduced downtime', _'Better collaboration', _'Automated scaling']},
    {_title: 'SaaS Companies', _description: 'Track user experience, _application performance, _and business metrics.', _icon: '💼', _benefits: ['User satisfaction', _'Revenue optimization', _'Competitive advantage', _'Customer retention']},
    {_title: 'E-commerce', _description: 'Monitor website performance, _payment processing, _and inventory systems.', _icon: '🛒', _benefits: ['Higher conversion', _'Faster checkout', _'Inventory optimization', _'Revenue growth']},
    {_title: 'Financial Services', _description: 'Ensure compliance, _security, _and 24/7 availability of critical systems.', _icon: '💰', _benefits: ['Regulatory compliance', _'Fraud detection', _'Risk management', _'Customer trust']}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <>
      <Head>
        <title>Cloud Monitoring & Analytics | Zion Tech Group - Real-time Infrastructure Monitoring</title>
        <meta name=&quot;description&quot; content=&quot;Comprehensive cloud monitoring and analytics platform with real-time insights, AI-powered alerting, and multi-cloud support. Monitor your entire infrastructure from a single dashboard.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Cloud Monitoring & Analytics | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Real-time infrastructure monitoring with advanced analytics, smart alerting, and multi-cloud support.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative min-h-screen flex items-center justify-center overflow-hidden bg-black&quot;>
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]&quot; />
          <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]&quot; />
        </div>
        
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <div className=&quot;mb-8&quot;>
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6&quot;>
              <Eye className=&quot;w-4 h-4 mr-2&quot; />
              Real-time Infrastructure Monitoring
            </div>
          </div>
          
          <h1 className=&quot;text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight&quot;>
            Cloud Monitoring & Analytics
          </h1>
          <p className=&quot;text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed&quot;>
            Monitor your entire infrastructure in real-time with AI-powered insights and intelligent alerting
          </p>

          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center items-center mb-20&quot;>
            <Button
              href=&quot;#pricing&quot;
              size=&quot;lg&quot;
              className=&quot;bg-green-600 hover:bg-green-700 shadow-2xl shadow-green-500/25&quot;
            >
              Start Free Trial
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;#demo&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white/20 hover:border-white/40 hover:bg-white/5&quot;
            >
              <Play className=&quot;w-5 h-5 mr-2&quot; />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-blue-400&quot;>1M+</div>
              <div className=&quot;text-gray-400&quot;>Metrics Tracked</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold mb-3 text-purple-400&quot;>50+</div>
              <div className=&quot;text-gray-400&quot;>Integrations</div>
            </div>
            <div className="text-center">
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-24 bg-gray-900 relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
              Powerful Monitoring Features
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Everything you need to monitor and optimize your infrastructure
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {features.map((feature, index) => (
              <Card
                key={index}
                className=&quot;text-center group bg-gray-800/50 border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1&quot;
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className=&quot;relative&quot;>
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature.color} shadow-xl`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className=&quot;text-xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300&quot;>
                  {feature.title}
                </h3>
                <p className=&quot;text-gray-400 leading-relaxed&quot;>
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Capabilities */}
      <section className=&quot;py-24 bg-black relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
              Comprehensive Monitoring
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Monitor every aspect of your infrastructure with detailed metrics and insights
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {monitoringCapabilities.map((capability, index) => (
              <Card
                key={index}
                className=&quot;group border border-gray-700 hover:border-green-500/30 hover:bg-gray-900/80 transition-all duration-300&quot;
              >
                <div className=&quot;flex items-start space-x-4&quot;>
                  <div className=&quot;flex-shrink-0&quot;>{capability.icon}</div>
                  <div className=&quot;flex-1&quot;>
                    <h3 className=&quot;text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300&quot;>
                      {capability.category}
                    </h3>
                    <div className=&quot;grid grid-cols-1 gap-2&quot;>
                      {capability.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                          <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 flex-shrink-0&quot; />
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className=&quot;py-24 bg-gray-900 relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
              Use Cases
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Trusted by teams across industries for reliable infrastructure monitoring
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className=&quot;group border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300&quot;
              >
                <div className=&quot;flex items-start space-x-4&quot;>
                  <div className=&quot;text-4xl&quot;>{useCase.icon}</div>
                  <div className=&quot;flex-1&quot;>
                    <h3 className=&quot;text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300&quot;>
                      {useCase.title}
                    </h3>
                    <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                      {useCase.description}
                    </p>
                    <div className=&quot;grid grid-cols-2 gap-2&quot;>
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                          <TrendingUp className=&quot;w-4 h-4 text-green-400 mr-2 flex-shrink-0&quot; />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id=&quot;pricing&quot; className=&quot;py-24 bg-black relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
              Simple, Transparent Pricing
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Choose the plan that fits your monitoring needs
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={_`relative group ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''} border ${_plan.color} hover:border-green-500/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                    <span className=&quot;bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold&quot;>
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className=&quot;text-center mb-8&quot;>
                  <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                  <div className=&quot;text-4xl font-bold text-white mb-2&quot;>
                    {plan.price}<span className=&quot;text-lg text-gray-400&quot;>{plan.period}</span>
                  </div>
                  <p className=&quot;text-gray-400&quot;>{plan.description}</p>
                </div>

                <ul className=&quot;space-y-4 mb-8&quot;>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href=&quot;/contact&quot;
                  className={`w-full ${plan.buttonColor} text-white`}
                  size=&quot;lg&quot;
                >
                  Get Started
                  <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className=&quot;py-24 bg-gray-900 relative overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight&quot;>
              Seamless Integrations
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Connect with your favorite tools and platforms
            </p>
          </div>

          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6&quot;>
            {integrations.map((integration, index) => (
              <Card
                key={index}
                className=&quot;text-center group border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300&quot;
              >
                <div className=&quot;text-4xl mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
                  {integration.icon}
                </div>
                <h3 className=&quot;font-semibold text-white mb-2&quot;>{integration.name}</h3>
                <p className=&quot;text-sm text-gray-400&quot;>{integration.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
            Ready to Monitor Your Infrastructure?
          </h2>
          <p className=&quot;text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            Join thousands of DevOps teams who trust us to monitor their critical infrastructure.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
            <Button
              href=&quot;/contact&quot;
              variant=&quot;secondary&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-green-600 hover:bg-gray-100 shadow-2xl&quot;
            >
              Start Free Trial
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;#demo&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-green-600 shadow-2xl&quot;
            >
              <Play className=&quot;w-5 h-5 mr-2&quot; />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}