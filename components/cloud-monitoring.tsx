class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
  Activity,
  BarChart3,
  AlertTriangle,
  Clock,
  Database,
  Globe,
  Lock,
  Shield,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Server,
  Cloud,
  Eye,
  Bell,
  Settings,;
  Code,;
} from 'lucide-react';
export default function CloudMonitoringPage() {
  const features = [
export default function CloudMonitoringPage() {
  const features = [
    {
      icon: <Activity className='w-8 h-8 text-white' />
      description: "description",
    color: 'bg-gradient-to-br from-green-500 to-emerald-600'
      gradient: 'from-green-400 to-emerald-500'
    }
    {
      icon: <BarChart3 className='w-8 h-8 text-white' />
      title: 'Advanced Analytics'
      description:
        'Deep insights into performance metrics, resource utilization, and business intelligence.'
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
      gradient: 'from-blue-400 to-cyan-500'
    }
    {
      icon: <AlertTriangle className='w-8 h-8 text-white' />
      title: 'Smart Alerting'
      description:
        'AI-powered anomaly detection and intelligent alerting to prevent issues before they impact users.'
      color: 'bg-gradient-to-br from-red-500 to-pink-600'
      gradient: 'from-red-400 to-pink-500'
    }
    {
      icon: <Database className='w-8 h-8 text-white' />
      title: 'Multi-Cloud Support'
      description:
        'Monitor AWS, Azure, Google Cloud, and on-premises infrastructure from a single dashboard.'
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
      gradient: 'from-purple-400 to-indigo-500'
    }
    {
      icon: <Shield className='w-8 h-8 text-white' />
      title: 'Security Monitoring'
      description:
        'Comprehensive security monitoring with threat detection, compliance reporting, and audit trails.'
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600'
      gradient: 'from-yellow-400 to-orange-500'
    }
    {
      icon: <Zap className='w-8 h-8 text-white' />
      title: 'Auto-scaling'
      description:
        'Intelligent auto-scaling based on real-time metrics and predictive analytics.',
      color: 'bg-gradient-to-br from-teal-500 to-blue-600',
      gradient: 'from-teal-400 to-blue-500',
    },;
  ];
  const monitoringCapabilities = [
    {
      category: 'Infrastructure'
      icon: <Server className='w-6 h-6 text-blue-400' />
      metrics: [
        'CPU Usage'
        'Memory Utilization'
        'Disk I/O'
        'Network Performance'
        'Container Metrics'
      ]
    }
    {
      category: 'Applications'
      icon: <Code className='w-6 h-6 text-green-400' />
      metrics: [
        'Response Time'
        'Error Rates'
        'Throughput'
        'User Experience'
        'API Performance'
      ]
    }
    {
      category: 'Databases'
      icon: <Database className='w-6 h-6 text-purple-400' />
      metrics: [
        'Query Performance'
        'Connection Pool'
        'Index Usage'
        'Replication Lag'
        'Storage Growth'
      ]
    }
    {
      category: 'Security'
      icon: <Shield className='w-6 h-6 text-red-400' />
      metrics: [
        'Threat Detection'
        'Access Logs'
        'Vulnerability Scans'
        'Compliance Status'
        'Audit Trails'
      ]
    },  ];      icon: <Shield className="w-6 h-6 text-red-400" />
      metrics: ['Threat DetectionAccess LogsVulnerability ScansCompliance StatusAudit Trails']
    }
      icon: <Activity className='w-8 h-8 text-white' />,
  ];
export default function CloudMonitoringPage() {
  const features = [
    {
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
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
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
      benefits: [;
        'Regulatory compliance',
        'Fraud detection',
        'Risk management',
        'Customer trust',
      ],
    },  ];      benefits: ['Regulatory compliance_fraud detection_risk management_customer trust'];
    }
  ];
;
  return (
              className='border-white/20 hover:border-white/40 hover:bg-white/5'>;
              <Play className='w-5 h-5 mr-2' />              Watch Demo      </Head>;
      {/* Hero Section */}
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
                key={index}
                className="text - center group bg - gray - 800 / 50 border border - gray - 700 hover:border - green - 500 / 30 hover:bg - gray - 800 / 80 transition - all duration-300 hover:-translate-y-1";
                style={{ animation_delay: `${(index * 0.1) + 0.2}s` }}
              >;
                <div className="relative">;
                  <div className={`w - 16 h - 16 mx - auto mb - 6 rounded - 2xl flex items - center justify - center transition - all duration - 300 group - hover:scale - 110 group - hover:shadow - lg bg - gradient - to - br ${feature.color} shadow - xl`}>;
                    {feature.icon}
                  </div>;
                </div>;
                <h3 className="text - xl font - bold mb - 4 text - white group - hover:text - green - 400 transition-colors duration-300">;
                  {feature.title}
                </h3>;
                <p className="text - gray-400 leading-relaxed">;
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Monitoring Capabilities */}
      <section className='py-24 bg-black relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
              Comprehensive Monitoring
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Monitor every aspect of your infrastructure with detailed metrics
              and insights
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {monitoringCapabilities.map((capability, index) => (
              Monitor every aspect of your infrastructure with detailed metrics;
              and insights;
            </p>;
          </div>;
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Monitor every aspect of your infrastructure with detailed metrics and insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {monitoringCapabilities.map((capability, index) => (
                          className='flex items-center text-sm text-gray-300'>;
                          <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />                          {metric}              Comprehensive Monitoring;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Monitor every aspect of your infrastructure with detailed metrics and insights;
            </p>;
          </div>;
              <Card
                key={index}
                          {metric}
                        </div>;
                      ))}
                    </div>;
                  </div>;
                </div>;
              </Card>;
            ))}
      {/* Use Cases Section */}
      <section className='py-24 bg-gray-900 relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
              Use Cases
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              Trusted by teams across industries for reliable infrastructure
              monitoring
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {useCases.map((useCase, index) => (
              Trusted by teams across industries for reliable infrastructure;
              monitoring;
            </p>;
          </div>;
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Trusted by teams across industries for reliable infrastructure monitoring
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
                          className='flex items-center text-sm text-gray-300'>;
                          <TrendingUp className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />                          {benefit}              Use Cases;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Trusted by teams across industries for reliable infrastructure monitoring;
            </p>;
          </div>;
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
      <section id="pricing" className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
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
              <Card
                key={index}
                    {plan.name}
                  </h3>;
                  <div className='text - 4xl font - bold text - white mb - 2'>;
                    {plan.price}
                <div className='text-center mb-8'>;
                  <h3 className='text-2xl font-bold text-white mb-2'>;
                    {plan && plan.name}
                  </h3>;
                  <div className='text-4xl font-bold text-white mb-2'>;
                    {plan && plan.price}
                    <span className='text-lg text-gray-400'>{plan && plan.period}</span>;
                  </div>;
                  <p className='text-gray-400'>{plan && plan.description}</p>;
                </div>;
                  </div>
                  <p className='text-gray-400'>{plan.description}</p>
                </div>
                <ul className='space-y-4 mb-8'>
                  {plan.features.map((feature, featureIndex) => (
                <ul className='space-y-4 mb-8'>;
                  {plan && plan.features.map((feature, featureIndex) => (;
                    <li
                      key={featureIndex}
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
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  className={`w-full ${plan.buttonColor} text-white`}
                  size="lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Card>
            ))}
      {/* Integrations Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
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
              Connect with your favorite tools and platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card
                key={index}
                className="text-center group border border-gray-700 hover:border-green-500/30 hover:bg-gray-800/80 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {integration.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-400">{integration.description}</p>
              </Card>
              </Card>
            ))}
          </div>
        </div>
      </section>
            ))}
          </div>
        </div>
      </section>
            ))}
      {/* CTA Section */}
      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'>
            Ready to Monitor Your Infrastructure?
          </h2>
          <p className='text-xl text-green-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
            Join thousands of DevOps teams who trust us to monitor their
            critical infrastructure.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
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
            <Button
              href='#demo'
              variant='outline'
              size='lg'
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
              Watch Demo;
            </Button>;
          </div>;
        </div>;
      </section>;
}
  );
}
    </>);
}