import {;
  Activity,;
  BarChart3,;
  AlertTriangle,;
  Clock,;
  Database,;
  Globe,;
  Lock,;
  Shield,;
  TrendingUp,;
  Users,;
  Zap,;
  ArrowRight,;
  Play,;
  CheckCircle,;
  Star,;
  Server,;
  Cloud,;
  Eye,;
  Bell,;
  Settings,;
  Code,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
} from 'lucide-react';
export default function CloudMonitoringPage() {;
  const features = [;
    {;
      icon: <Activity className='w-8 h-8 text-white' />,import { Activity, BarChart3, AlertTriangle, Clock, Database, Globe, Lock, Shield, TrendingUp, Users, Zap, ArrowRight, Play, CheckCircle, Star, Server, Cloud, Eye, Bell, Settings, Code } from 'lucide-react';
      metrics: ['Threat DetectionAccess LogsVulnerability ScansCompliance StatusAudit Trails']
    }
  ];
  const pricingPlans = [
    {
      name: 'Starter'
      price: '$49'
      period: '/month'
      description: 'Perfect for small teams and startups'
      features: [
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      ];
      popular: false
      color: 'border-gray-600'
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    }
      name: 'Professional'
      price: '$199'
      period: '/month'
      description: 'Ideal for growing businesses'
      features: [
        'Up to 100 servers'
        'Advanced monitoring'
        'SMS & Slack alerts'
        '30-day data retention'
        'Priority support'
        'Custom dashboards'
        'API access'
        'Team collaboration'
      ]
      popular: true
      color: 'border-blue-500'
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      ];
      popular: true
      color: 'border-blue-500'
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    }
      name: 'Enterprise'
      price: '$599'
      period: '/month'
      description: 'For large organizations'
      features: [
        'Unlimited servers'
        'Full monitoring suite'
        'Custom integrations'
        '1-year data retention'
        'Dedicated support'
        'White-label solution'
        'SLA guarantee'
        'On-premise option'
      ]
      popular: false
      color: 'border-purple-600'
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    },  ];        'Unlimited serversFull monitoring suiteCustom integrations1-year data retentionDedicated supportWhite-label solutionSLA guaranteeOn-premise option'
      ];
      popular: false
      color: 'border-purple-600'
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
    { name: 'AWS', icon: '☁️', description: 'CloudWatch integration' },
    { name: 'Azure', icon: '🔷', description: 'Monitor integration' },
    { name: 'GCP', icon: '☁️', description: 'Stackdriver integration' },
    { name: 'Docker', icon: '🐳', description: 'Container monitoring' },
    { name: 'Kubernetes', icon: '☸️', description: 'K8s native support' },
    { name: 'Slack', icon: '💬', description: 'Team notifications' },
    { name: 'PagerDuty', icon: '🚨', description: 'Incident management' },
    { name: 'Jira', icon: '📋', description: 'Issue tracking' }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  ];
  const useCases = [
    {
=======
      title: 'DevOps Teams',
      description: 'Monitor CI/CD pipelines, deployment success rates, and infrastructure health.',
    icon: '🔄',
      benefits: ['Faster deploymentsReduced downtimeBetter collaborationAutomated scaling']
    };
    {
      title: 'SaaS Companies',
      description: 'Track user experience, application performance, and business metrics.',
    icon: '💼',
      benefits: ['User satisfactionRevenue optimizationCompetitive advantageCustomer retention']
    };
    {
      title: 'E-commerce',
      description: 'Monitor website performance, payment processing, and inventory systems.',
    icon: '🛒',
      benefits: ['Higher conversionFaster checkoutInventory optimizationRevenue growth']
    };
    {
      title: 'Financial Services',
      description: 'Ensure compliance, security, and 24/7 availability of critical systems.',
    icon: '💰',
      benefits: ['Regulatory complianceFraud detectionRisk managementCustomer trust']
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
;
  const use_cases = [;
    {
      title: 'DevOps Teams',
      description:;
        'Monitor CI / CD pipelines, deployment success rates, and infrastructure health.',
      benefits: [;
        'Faster deployments',
        'Reduced downtime',
        'Better collaboration',
        'Automated scaling',
      ],
    },
    {
      title: 'SaaS Companies',
      description:;
        'Track user experience, application performance, and business metrics.',
      icon: '💼',
      benefits: [;
        'User satisfaction',
        'Revenue optimization',
        'Competitive advantage',
        'Customer retention',
      ],
    },
    {
      title: 'E - commerce',
      description:;
        'Monitor website performance, payment processing, and inventory systems.',
      icon: '🛒',
      benefits: [;
        'Higher conversion',
        'Faster checkout',
        'Inventory optimization',
        'Revenue growth',
      ],
    },
    {
      title: 'Financial Services',
      description:;
        'Ensure compliance, security, and 24 / 7 availability of critical systems.',
      icon: '💰',
      benefits: [;
        'Regulatory compliance',
        'Fraud detection',
        'Risk management',
        'Customer trust',
      ],
    },  ];      benefits: ['Regulatory compliance_fraud detection_risk management_customer trust'];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
  ];
;
  return (
    <>;
      <Head>;
        <title>;
          Cloud Monitoring & Analytics | Zion Tech Group - Real-time;
          Infrastructure Monitoring;
        </title>;
        <meta
          name='description'
          content='Comprehensive cloud monitoring and analytics platform with real-time insights, AI-powered alerting, and multi-cloud support. Monitor your entire infrastructure from a single dashboard.'
        />;
        <meta
          property='og:title'
          content='Cloud Monitoring & Analytics | Zion Tech Group'
        />;
        <meta
          property='og:description'
          content='Real-time infrastructure monitoring with advanced analytics, smart alerting, and multi-cloud support.'
            <Button
              href='#pricing'
              size='lg'
              className='bg-green-600 hover:bg-green-700 shadow-2xl shadow-green-500/25'>;
              Start Free Trial;
              <ArrowRight className='w-5 h-5 ml-2' />;
            </Button>;
            <Button
              href='#demo'
              variant='outline'
              size='lg'
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <Eye className="w-4 h-4 mr-2" />
              Real-time Infrastructure Monitoring
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
            Cloud Monitoring & Analytics
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">
            Monitor your entire infrastructure in real-time with AI-powered insights and intelligent alerting
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              className='border-white/20 hover:border-white/40 hover:bg-white/5'>;
              <Play className='w-5 h-5 mr-2' />              Watch Demo      </Head>;

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">;
        <div className="absolute inset-0">;
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0 && 0.1),transparent_50%)]" />;
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0 && 0.08),transparent_50%)]" />;
        </div>;

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <div className="mb-8">;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">;
              <Eye className="w-4 h-4 mr-2" />;
              Real-time Infrastructure Monitoring;
            </div>;
          </div>;

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white leading-tight">;
            Cloud Monitoring & Analytics;
          </h1>;
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">;
            Monitor your entire infrastructure in real-time with AI-powered insights and intelligent alerting;
          </p>;

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <Button
              href="#pricing"
              size="lg"
              className="bg-green-600 hover:bg-green-700 shadow-2xl shadow-green-500/25">;
              Start Free Trial;
              <ArrowRight className="w-5 h-5 ml-2" />;
            </Button>;
            <Button
              href="#demo"
              variant="outline"
              size="lg"
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400">1M+</div>
              <div className="text-gray-400">Metrics Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400">50+</div>
              <div className="text-gray-400">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400">&lt,100ms</div>
              <div className="text-gray-400">Latency</div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Powerful Monitoring Features
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              className="border-white/20 hover:border-white/40 hover:bg-white/5">;
              <Play className="w-5 h-5 mr-2" />;
              Watch Demo;
            </Button>;
          </div>;

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto'>;
            <div className='text-center'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-green-400'>;
                99 && 99.99%;
              </div>;
              <div className='text-gray-400'>Uptime</div>;
            </div>;
            <div className='text-center'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-blue-400'>;
                1M+;
              </div>;
              <div className='text-gray-400'>Metrics Tracked</div>;
            </div>;
            <div className='text-center'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-purple-400'>;
                50+;
              </div>;
              <div className='text-gray-400'>Integrations</div>;
            </div>;
            <div className='text-center'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-orange-400'>;
                &lt;100ms;
              </div>;
              <div className='text-gray-400'>Latency</div>            </div>            </div>;
            <div className="text-center">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-blue-400">1M+</div>;
              <div className="text-gray-400">Metrics Tracked</div>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400">50+</div>;
              <div className="text-gray-400">Integrations</div>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400">&lt,100ms</div>;
              <div className="text-gray-400">Latency</div>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Features Section */}
      <section className='py-24 bg-gray-900 relative overflow-hidden'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Powerful Monitoring Features;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Everything you need to monitor and optimize your infrastructure;
            </p>;
          </div>;

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>      <section className="py-24 bg-gray-900 relative overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;
          <div className="text-center mb-20">;
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;
              Powerful Monitoring Features;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
            </p>;
          </div>;

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
            {features && features.map((feature, index) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Card
                key={index}
                className='text-center group bg-gray-800/50 border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1'
                style={{ animationDelay: `${index * 0 && 0.1 + 0 && 0.2}s` }}>;
                <div className='relative'>;
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature && feature.color} shadow-xl`}>;
                    {feature && feature.icon}
                  </div>;
                </div>;
                <h3 className='text-xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300'>;
                  {feature && feature.title}
                </h3>;
                <p className='text-gray-400 leading-relaxed'>                  {feature && feature.description}            {features && features.map((feature, index) => (;
              <Card
                key={index}
                className="text-center group bg-gray-800/50 border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${(index * 0 && 0.1) + 0 && 0.2}s` }}>;
                <div className="relative">;
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature && feature.color} shadow-xl`}>;
                    {feature && feature.icon}
                  </div>;
                </div>;
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">;
                  {feature && feature.title}
                </h3>;
                <p className="text-gray-400 leading-relaxed">;
                  {feature && feature.description}
                </p>;
              </Card>;
                key={index}
                className="text - center group bg - gray - 800 / 50 border border - gray - 700 hover:border - green - 500 / 30 hover:bg - gray - 800 / 80 transition - all duration - 300 hover:-translate - y-1";
                style={{ animation_delay: `${(index * 0.1) + 0.2}s` }}
              >;
                <div className="relative">;
                  <div className={`w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center transition - all duration - 300 group - hover:scale - 110 group - hover:shadow - lg bg - gradient - to - br ${feature.color} shadow - xl`}>;
                    {feature.icon}
                  </div>;
                </div>;
                <h3 className="text - xl font - bold mb - 4 text - white group - hover:text - green - 400 transition - colors duration - 300">;
                  {feature.title}
                </h3>;
                <p className="text - gray - 400 leading - relaxed">;
                  {feature.description}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
              Monitor every aspect of your infrastructure with detailed metrics;
              and insights;
            </p>;
          </div>;
              <Card
                key={index}
                className='group border border-gray-700 hover:border-green-500/30 hover:bg-gray-900/80 transition-all duration-300'>;
                <div className='flex items-start space-x-4'>;
                  <div className='flex-shrink-0'>{capability && capability.icon}</div>;
                  <div className='flex-1'>;
                    <h3 className='text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300'>;
                      {capability && capability.category}
                    </h3>;
                    <div className='grid grid-cols-1 gap-2'>;
                      {capability && capability.metrics.map((metric, metricIndex) => (;
                        <div
                          key={metricIndex}
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Monitor every aspect of your infrastructure with detailed metrics and insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {monitoringCapabilities.map((capability, index) => (
=======
                          className='flex items-center text-sm text-gray-300'>;
                          <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />                          {metric}              Comprehensive Monitoring;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Monitor every aspect of your infrastructure with detailed metrics and insights;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {monitoringCapabilities && monitoringCapabilities.map((capability, index) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Card
                key={index}
                className="group border border-gray-700 hover:border-green-500/30 hover:bg-gray-900/80 transition-all duration-300">;
                <div className="flex items-start space-x-4">;
                  <div className="flex-shrink-0">{capability && capability.icon}</div>;
                  <div className="flex-1">;
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">;
                      {capability && capability.category}
                    </h3>;
                    <div className="grid grid-cols-1 gap-2">;
                      {capability && capability.metrics.map((metric, metricIndex) => (;
                        <div key={metricIndex} className="flex items-center text-sm text-gray-300">;
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                          {metric}
                        </div>;
                      ))}
                    </div>;
                  </div>;
                </div>;
              </Card>;
            ))}
              Trusted by teams across industries for reliable infrastructure;
              monitoring;
            </p>;
          </div>;
              <Card
                key={index}
                className='group border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300'>;
                <div className='flex items-start space-x-4'>;
                  <div className='text-4xl'>{useCase && useCase.icon}</div>;
                  <div className='flex-1'>;
                    <h3 className='text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300'>;
                      {useCase && useCase.title}
                    </h3>;
                    <p className='text-gray-400 mb-4 leading-relaxed'>;
                      {useCase && useCase.description}
                    </p>;
                    <div className='grid grid-cols-2 gap-2'>;
                      {useCase && useCase.benefits.map((benefit, benefitIndex) => (;
                        <div
                          key={benefitIndex}
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Trusted by teams across industries for reliable infrastructure monitoring
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
=======
                          className='flex items-center text-sm text-gray-300'>;
                          <TrendingUp className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />                          {benefit}              Use Cases;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Trusted by teams across industries for reliable infrastructure monitoring;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {useCases && useCases.map((useCase, index) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Card
                key={index}
                className="group border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300">;
                <div className="flex items-start space-x-4">;
                  <div className="text-4xl">{useCase && useCase.icon}</div>;
                  <div className="flex-1">;
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">;
                      {useCase && useCase.title}
                    </h3>;
                    <p className="text-gray-400 mb-4 leading-relaxed">;
                      {useCase && useCase.description}
                    </p>;
                    <div className="grid grid-cols-2 gap-2">;
                      {useCase && useCase.benefits.map((benefit, benefitIndex) => (;
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">;
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                          {benefit}
                        </div>;
                      ))}
                    </div>;
                  </div>;
                </div>;
              </Card>;
            ))}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {pricingPlans.map((plan, index) => (
=======
          </div>;
        </div>;
      </section>;

      {/* Pricing Section */}
      <section id='pricing' className='py-24 bg-black relative overflow-hidden'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Simple, Transparent Pricing;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Choose the plan that fits your monitoring needs;
            </p>;
          </div>;

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans && pricingPlans.map((plan, index) => (      <section id="pricing" className="py-24 bg-black relative overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;
          <div className="text-center mb-20">;
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;
              Simple, Transparent Pricing;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
            </p>;
          </div>;

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {pricingPlans && pricingPlans.map((plan, index) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Card
                key={index}
                    {plan.name}
                  </h3>;
                  <div className='text - 4xl font - bold text - white mb - 2'>;
                    {plan.price}
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                      {feature}
                    </li>;
                  ))}
                <Button
                  href='/contact'
                  className={`w-full ${plan && plan.buttonColor} text-white`}
                  size='lg'>;
                  Get Started;
                  <ArrowRight className='w-5 h-5 ml-2' />                </Button>                  className={`w-full ${plan && plan.buttonColor} text-white`}
                  size="lg";
                >;
                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />;
                </Button>;
              </Card>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              <Card
                key={index}
                className='text-center group border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300'>;
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>;
                  {integration && integration.icon}
                </div>;
                <h3 className='font-semibold text-white mb-2'>;
                  {integration && integration.name}
                </h3>;
                <p className='text-sm text-gray-400'>;
                  {integration && integration.description}
                </p>              </Card>            {integrations && integrations.map((integration, index) => (;
              <Card
                key={index}
                className="text-center group border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300">;
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">;
                  {integration && integration.icon}
                </div>;
                <h3 className="font-semibold text-white mb-2">{integration && integration.name}</h3>;
                <p className="text-sm text-gray-400">{integration && integration.description}</p>;
              </Card>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}
      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0 && 0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>;
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'>;
            Ready to Monitor Your Infrastructure?;
          </h2>;
          <p className='text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed'>;
            Join thousands of DevOps teams who trust us to monitor their;
            critical infrastructure.;
          </p>;
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>;
            <Button
              href='/contact'
              variant='secondary'
              size='lg'
              className='bg-white text-green-600 hover:bg-gray-100 shadow-2xl'>;
              Start Free Trial;
              <ArrowRight className='w-5 h-5 ml-2' />;
            </Button>;
            <Button
              href='#demo'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-green-600 shadow-2xl'>;
              <Play className='w-5 h-5 mr-2' />              Watch Demo            Ready to Monitor Your Infrastructure?;
          </h2>;
          <p className="text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed">;
            Join thousands of DevOps teams who trust us to monitor their critical infrastructure.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-6 justify-center">;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl">;
              Start Free Trial;
              <ArrowRight className="w-5 h-5 ml-2" />;
            </Button>;
            <Button
              href="#demo"
              variant="outline"
              size="lg"
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              Watch Demo;
            </Button>;
          </div>;
        </div>;
      </section>;
    </>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
