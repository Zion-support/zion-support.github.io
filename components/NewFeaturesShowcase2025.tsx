import React from 'react';
import Link from 'next/link';
ArrowRightSparklesZapShieldBrainRocketStarCheckCircle

export default function NewFeaturesShowcase2025() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Content Generation',
      description: 'Automatically create engaging content using advanced AI models trained on industry best practices.',
      benefits: ['10x faster content creation'SEO-optimized output'Multi-language support'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Real-Time Analytics Dashboard',
      description: 'Monitor content performance with live analytics and AI-driven insights for optimization.',
      benefits: ['Live performance metrics'Predictive analytics'Automated recommendations'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Advanced Security & Compliance',
      description: 'Enterprise-grade security with automated compliance monitoring and threat detection.',
      benefits: ['SOC 2 compliance'End-to-end encryption'Automated threat detection'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Rocket,
      title: 'Automated Workflow Optimization',
      description: 'Streamline operations with intelligent automation that adapts to your business needs.',
      benefits: ['95% process automation'Self-healing systems'Continuous optimization'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '500+'label: 'New Features'icon: Sparkles },
    { number: '99.9%'label: 'Uptime'icon: Shield },
    { number: '50K+'label: 'Active Users'icon: Star },
    { number: '24/7'label: 'Support'icon: CheckCircle }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            NEW FEATURES 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary New Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest innovations that are transforming how businesses operatecreate contentand engage with their audiences.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((statindex) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((featureindex) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-start mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                {feature.benefits.map((benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Experience the Future Today
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Try our interactive demo to see how these revolutionary features can transform your business operations and content strategy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Real-time content generation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Live analytics dashboard</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Automated workflow optimization</span>
                </div>
              </div>
            </div>
            <div className="bg-black/20 rounded-xl p-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">Interactive Demo</h4>
                <p className="text-gray-300 text-sm mb-6">
                  Experience our AI-powered features in action
                </p>
                <Link
                  href="/demo"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  Launch Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands of companies already leveraging these revolutionary features to achieve unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}