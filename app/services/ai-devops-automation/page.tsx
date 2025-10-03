import { Link } from 'react-router-dom';


export default function AIDevOpsAutomation() {
  const features = [
    {
      title: 'Intelligent CI/CD Pipelines',
      description: 'AI-powered continuous integration and deployment with automatic testing, code analysis, and deployment optimization.',
      icon: '🚀',
      benefits: ['50% faster deployments', 'Zero-downtime releases', 'Automated rollbacks']
    },
    {
      title: 'Predictive Monitoring',
      description: 'AI-driven monitoring that predicts issues before they occur and automatically resolves common problems.',
      icon: '🔮',
      benefits: ['Proactive issue detection', '99.9% uptime', 'Automated remediation']
    },
    {
      title: 'Smart Infrastructure Scaling',
      description: 'Automatically scale your infrastructure based on demand patterns and performance metrics.',
      icon: '📈',
      benefits: ['Cost optimization', 'Performance optimization', 'Auto-scaling']
    },
    {
      title: 'Security Automation',
      description: 'Automated security scanning, vulnerability assessment, and compliance monitoring.',
      icon: '🛡️',
      benefits: ['Continuous security', 'Compliance automation', 'Threat detection']
    },
    {
      title: 'Performance Optimization',
      description: 'AI-powered performance analysis and optimization recommendations for your applications.',
      icon: '⚡',
      benefits: ['Performance insights', 'Optimization suggestions', 'Resource efficiency']
    },
    {
      title: 'Disaster Recovery',
      description: 'Automated backup, disaster recovery, and business continuity planning.',
      icon: '🔄',
      benefits: ['Automated backups', 'Fast recovery', 'Business continuity']
    }
  ];

  const pricingPlans = [
    {
      name: 'Startup',
      price: '$199',
      period: '/month',
      description: 'Perfect for startups and small teams',
      features: [
        'Up to 5 applications',
        'Basic CI/CD automation',
        'Standard monitoring',
        'Email support',
        'Basic security scanning',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing companies and development teams',
      features: [
        'Up to 25 applications',
        'Advanced CI/CD automation',
        'Predictive monitoring',
        'Priority support',
        'Advanced security',
        'Performance optimization',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,499',
      period: '/month',
      description: 'For large enterprises and complex infrastructures',
      features: [
        'Unlimited applications',
        'Custom AI models',
        'Dedicated account manager',
        '24/7 support',
        'White-label options',
        'Custom integrations',
        'Advanced security',
        'Compliance reporting'
      ],
      popular: false
    }
  ];

  const successMetrics = [
    { metric: '50%', description: 'Faster deployment times' },
    { metric: '99.9%', description: 'System uptime achieved' },
    { metric: '70%', description: 'Reduction in manual tasks' },
    { metric: '40%', description: 'Cost savings on infrastructure' }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'Tech Startup',
      content: 'Our deployment times went from 2 hours to 20 minutes. The AI monitoring has prevented 3 major outages before they could impact our users.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      company: 'E-commerce Platform',
      content: 'The predictive monitoring is incredible. We\'ve eliminated 90% of our downtime issues and our team can focus on building features instead of fighting fires.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'Financial Services',
      content: 'The security automation gives us peace of mind. We\'re always compliant and our security posture has improved dramatically.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">AI DevOps Automation Platform</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Revolutionize your DevOps with AI-powered automation, intelligent monitoring, and predictive maintenance. 
            Accelerate deployments, reduce downtime, and optimize performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#pricing" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Pricing
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg text-gray-600">See the impact AI can have on your DevOps operations</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">{item.metric}</div>
                <div className="text-gray-700">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced AI Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to automate and optimize your DevOps operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-indigo-600 flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your DevOps needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white p-8 rounded-xl shadow-lg border-2 transition-all hover:shadow-xl ${
                plan.popular ? 'border-indigo-500 transform scale-105' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    {plan.price}<span className="text-lg text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-indigo-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how teams are transforming their DevOps with AI automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Your DevOps?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of teams already using AI to transform their DevOps operations. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </Link>
            <Link href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Call +1 302 464 0950
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}