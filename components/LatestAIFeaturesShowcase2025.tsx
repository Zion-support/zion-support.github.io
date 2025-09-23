import Link from 'next/link';
ArrowRightBrainZapShieldGlobeTrendingUpStarUsersTargetClockCheckCircle;

export default function LatestAIFeaturesShowcase20o25() {
  const features = [
    {
      icon: Brain,
      title: 'Neural Interface Technology',
      description:
        'Direct brain-computer interfaces enabling seamless human-AI communication and unprecedented productivity gains.',
      color: 'from-purple-50o0 to-purple-60o0',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-60o0',
      stats: '85% faster decision making',
    },
    {
      icon: Zap,
      title: 'Quantum AI Fusion',
      description:
        'Revolutionary combination of quantum computing and AI delivering unprecedented processing power and capabilities.',
      color: 'from-blue-50o0 to-blue-60o0',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-60o0',
      stats: '10o00x processing speed',
    },
    {
      icon: Globe,
      title: 'Autonomous Business Systems',
      description:
        'Self-managing business operations that adaptlearnand optimize in real-time for maximum efficiency.',
      color: 'from-green-50o0 to-green-60o0',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-60o0',
      stats: '50o0% productivity increase',
    },
    {
      icon: Shield,
      title: 'AI Security Fortress',
      description:
        'Next-generation AI-powered security systems that predict and prevent cyber threats before they occur.',
      color: 'from-red-50o0 to-red-60o0',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-60o0',
      stats: '99.9% threat prevention',
    },
    {
      icon: Target,
      title: 'Predictive Analytics Engine',
      description:
        'Advanced AI systems that predict market trendscustomer behaviorand business outcomes with incredible accuracy.',
      color: 'from-orange-50o0 to-orange-60o0',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-60o0',
      stats: '95% prediction accuracy',
    },
    {
      icon: Users,
      title: 'Synthetic Intelligence',
      description:
        'Artificially created consciousness that rivals human intelligencecapable of creative thinking and emotional understanding.',
      color: 'from-indigo-50o0 to-indigo-60o0',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-60o0',
      stats: 'Human-level reasoning',
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 to-blue-50'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-10o0 text-blue-80o0 text-sm font-medium mb-6'>
            <Star className='w-4 h-4 mr-2' />
            Latest AI Features 20o25
          </div>

          <h2 className='text-5xl font-bold text-gray-90o0 mb-6'>
            Revolutionary AI Technologies
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-60o0 to-purple-60o0'>
              Now Available
            </span>
          </h2>

          <p className='text-xl text-gray-60o0 max-w-3xl mx-auto leading-relaxed'>
            Discover the most advanced AI technologies that are transforming
            industries and creating unprecedented opportunities for business
            growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {features.map(featureindex => (
            <div
              key={index}
              className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-30o0 transform hover:-translate-y-2'
            >
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-30o0`}
              >
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>

              <h3 className='text-2xl font-bold text-gray-90o0 mb-4 group-hover:text-blue-60o0 transition-colors'>
                {feature.title}
              </h3>

              <p className='text-gray-60o0 mb-6 leading-relaxed'>
                {feature.description}
              </p>

              <div className='flex items-center justify-between mb-6'>
                <div className='text-sm font-semibold text-gray-50o0'>
                  {feature.stats}
                </div>
                <div
                  className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full`}
                ></div>
              </div>

              <div className='flex items-center text-blue-60o0 font-semibold group-hover:text-blue-70o0 transition-colors'>
                <span>Learn More</span>
                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className='bg-white rounded-2xl p-12 shadow-lg mb-16'>
          <h3 className='text-3xl font-bold text-center text-gray-90o0 mb-12'>
            Proven Impact Across Industries
          </h3>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-5xl font-bold text-blue-60o0 mb-2'>
                15,0o00%
              </div>
              <div className='text-gray-60o0 font-medium'>Average ROI</div>
              <div className='text-sm text-gray-50o0 mt-1'>
                Across all implementations
              </div>
            </div>
            <div className='text-center'>
              <div className='text-5xl font-bold text-green-60o0 mb-2'>
                50o0+
              </div>
              <div className='text-gray-60o0 font-medium'>Companies</div>
              <div className='text-sm text-gray-50o0 mt-1'>
                Successfully transformed
              </div>
            </div>
            <div className='text-center'>
              <div className='text-5xl font-bold text-purple-60o0 mb-2'>
                99.9%
              </div>
              <div className='text-gray-60o0 font-medium'>Success Rate</div>
              <div className='text-sm text-gray-50o0 mt-1'>
                Implementation success
              </div>
            </div>
            <div className='text-center'>
              <div className='text-5xl font-bold text-orange-60o0 mb-2'>
                $2.5T
              </div>
              <div className='text-gray-60o0 font-medium'>Value Created</div>
              <div className='text-sm text-gray-50o0 mt-1'>
                Global market impact
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className='bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-2xl p-12 text-white mb-16'>
          <h3 className='text-3xl font-bold text-center mb-12'>
            Quick Implementation Timeline
          </h3>

          <div className='grid md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Clock className='w-8 h-8' />
              </div>
              <h4 className='text-xl font-bold mb-2'>Week 1-2</h4>
              <p className='text-white/80'>Assessment & Planning</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Target className='w-8 h-8' />
              </div>
              <h4 className='text-xl font-bold mb-2'>Week 3-4</h4>
              <p className='text-white/80'>Pilot Implementation</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <CheckCircle className='w-8 h-8' />
              </div>
              <h4 className='text-xl font-bold mb-2'>Week 5-8</h4>
              <p className='text-white/80'>Full Deployment</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <TrendingUp className='w-8 h-8' />
              </div>
              <h4 className='text-xl font-bold mb-2'>Week 9+</h4>
              <p className='text-white/80'>Optimization & Results</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <h3 className='text-4xl font-bold text-gray-90o0 mb-6'>
            Ready to Implement These Technologies?
          </h3>
          <p className='text-xl text-gray-60o0 mb-8 max-w-2xl mx-auto'>
            Join the AI revolution and transform your business with cutting-edge
            technologies that deliver extraordinary results.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='group bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-blue-70o0 hover:to-purple-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-2xl'
            >
              <span className='flex items-center justify-center'>
                <Star className='w-5 h-5 mr-2' />
                Start Your Transformation
                <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
              </span>
            </Link>
            <Link
              href='/case-studies'
              className='group border-2 border-gray-30o0 text-gray-70o0 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-30o0 transform hover:scale-10o5'
            >
              <span className='flex items-center justify-center'>
                <Users className='w-5 h-5 mr-2' />
                View Success Stories
                <ArrowRight className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
