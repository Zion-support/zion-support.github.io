import React from 'react';
import Head from 'next/head';

const PricingPage: React.FC = () => {
  const contact = {
    phone: '+1-302-464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    site: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent, flexible pricing for AI, IT, and Micro SaaS services." />
      </Head>
      
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pricing</h1>
          <p className="text-gray-600 mb-10 max-w-3xl">
            We tailor solutions to your needs. Below are typical starting ranges observed in the market. Get a custom quote at any time.
          </p>
          {/* New 2026 Pricing Link */}
          <div className='mb-8 p-6 bg-gradient-to-r from-purple-800/60 to-pink-800/60 border border-purple-700/50 rounded-2xl max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              🚀 New for 2026: Revolutionary Services
            </h3>
            <p className='text-gray-300 mb-6'>
              Experience our cutting-edge AI consciousness simulation, quantum
              neural interfaces, and advanced cybersecurity solutions with
              comprehensive pricing and detailed comparisons.
            </p>
            <Button
              href='/comprehensive-pricing-2026'
              variant='primary'
              size='lg'
              className='bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/30'
            >
              <span className='flex items-center'>
                <Rocket className='mr-3 w-6 h-6' />                View 2026 Comprehensive Pricing
              </span>
            </Button>
          </div>
          {/* Billing Toggle */}
          <div className='flex items-center justify-center gap-4 mb-8'>
            <span
              className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === 'monthly' ? 'yearly' : 'monthly'
                )
              }
              className='relative inline-flex h-12 w-24 items-center rounded-full bg-slate-700/50 p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50'            >
              <span
                className={`inline-block h-10 w-10 transform rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-12' : 'translate-x-0'
                }`}
              />
            </button>
            <span
              className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}
            >
              Yearly
              <span className='ml-2 text-sm text-green-400'>Save 20%</span>            </span>
          </div>
        </div>
        {/* Pricing Tiers */}
        <div className='mb-20'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>            {pricingTiers.map((tier, index) => (
              <UltraFuturisticCard
                key={tier.name}
                variant={tier.variant}
                interactive={true}
                glowIntensity={tier.popular ? 'high' : 'medium'}
                className={`relative h-full ${tier.popular ? 'scale-105' : ''}`}>{tier.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center'>
                      <Star className='w-4 h-4 mr-2' />                      Most Popular
                    </span>
                  </div>
                )}
                <div className='text-center p-8'>
                  <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-6'>
                    {tier.icon}
                  </div>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {tier.name}
                  </h3>
                  <p className='text-gray-300 mb-6'>{tier.description}</p>
                  <div className='mb-6'>
                    <div className='flex items-baseline justify-center'>
                      <span className='text-5xl font-bold text-cyan-400'>
                        ${tier.price}
                      </span>
                      <span className='text-xl text-gray-400 ml-2'>
                        {tier.period}
                      </span>
                    </div>
                    {tier.savings && (
                      <div className='text-green-400 text-sm mt-2'>
                        {tier.savings}
                      </div>
                    )}
                  </div>
                  <ul className='text-left space-y-3 mb-8'>
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className='flex items-start'>
                        <Check className='w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0' />
                        <span className='text-gray-300'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={tier.name === 'Enterprise' ? '/contact' : '/services'}
                    variant={tier.ctaVariant}
                    size='lg'
                    className='w-full'
                  >
                    {tier.cta}
                    <ArrowRight className='ml-2 w-5 h-5' />                  </Button>
                </div>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>
        {/* Value Propositions */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>
            Why Choose Zion Tech Group?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>            {valuePropositions.map((proposition, index) => (
              <UltraFuturisticCard
                key={index}
                variant={index % 2 === 0 ? 'quantum' : 'holographic'}
                interactive={true}
                className='text-center p-6'
              >
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-4'>
                  {proposition.icon}
                </div>
                <h3 className='text-xl font-bold text-white mb-2'>
                  {proposition.title}
                </h3>
                <p className='text-gray-300 text-sm mb-4'>
                  {proposition.description}
                </p>
                <div className='text-3xl font-bold text-cyan-400 mb-2'>
                  {proposition.metric}
                </div>
                <div className='text-sm text-gray-400'>
                  {proposition.detail}
                </div>              </UltraFuturisticCard>
            ))}
          </div>
        </div>
        {/* Service Category Pricing Examples */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>
            Service Category Pricing
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {serviceCategoryPricing.map((category, index) => (
              <UltraFuturisticCard
                key={index}
                variant={
                  index % 3 === 0
                    ? 'quantum'
                    : index % 3 === 1
                      ? 'holographic'
                      : 'neural'
                }
                interactive={true}
                className='p-6'
              >
                <div className='flex items-center mb-4'>
                  <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mr-4'>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-white'>
                      {category.category}
                    </h3>
                    <div className='text-cyan-400 font-semibold'>
                      {category.startingPrice}
                    </div>
                  </div>
                </div>
                <ul className='space-y-2 mb-4'>
                  {category.services.map((service, idx) => (
                    <li
                      key={idx}
                      className='text-sm text-gray-300 flex items-center'
                    >
                      <Check className='w-4 h-4 text-green-400 mr-2' />                      {service}
                    </li>
                  ))}
                </ul>
                <Button
                  href='/services'
                  variant='secondary'
                  size='sm'
                  className='w-full'
                >
                  Explore Services
                  <ChevronRight className='ml-2 w-4 h-4' />                </Button>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>
        {/* Popular Services Pricing */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>
            Popular Services Pricing
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>            {popularServices.slice(0, 6).map((service, index) => (
              <UltraFuturisticCard
                key={service.id}
                variant={service.variant as any}
                interactive={true}
                className='p-6'
              >
                <div className='text-center mb-4'>
                  <div className='text-3xl mb-3'>{service.icon}</div>
                  <h3 className='text-lg font-bold text-white mb-2'>
                    {service.name}
                  </h3>
                  <div className='text-2xl font-bold text-cyan-400 mb-2'>
                    {service.price}
                  </div>
                  <div className='text-sm text-gray-400'>
                    {service.category}
                  </div>
                </div>
                <div className='mb-4'>
                  <div className='text-xs text-gray-400 mb-2'>
                    Key Features:
                  </div>
                  <ul className='text-xs text-gray-300 space-y-1'>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className='flex items-center'>
                        <Check className='w-3 h-3 text-green-400 mr-2' />                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  href={service.link}
                  variant='primary'
                  size='sm'
                  className='w-full'
                >
                  Learn More
                  <ExternalLink className='ml-2 w-4 h-4' />                </Button>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>
        {/* FAQ Section */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>
            Frequently Asked Questions
          </h2>
          <div className='max-w-4xl mx-auto space-y-4'>
            <UltraFuturisticCard variant='quantum' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                What's included in the free trial?
              </h3>
              <p className='text-gray-300'>
                All plans include a generous free trial period with full access
                to the selected services. No credit card required to start your
                trial.
              </p>
            </UltraFuturisticCard>
            <UltraFuturisticCard variant='holographic' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                Can I change my plan later?
              </h3>
              <p className='text-gray-300'>
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately, and we'll prorate any billing
                adjustments.
              </p>
            </UltraFuturisticCard>
            <UltraFuturisticCard variant='neural' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                What support is included?
              </h3>
              <p className='text-gray-300'>
                All plans include 24/7 support. Professional and Enterprise
                plans include priority support with dedicated account managers.
              </p>
            </UltraFuturisticCard>
            <UltraFuturisticCard variant='quantum' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                Is there a setup fee?
              </h3>
              <p className='text-gray-300'>
                No setup fees for any plan. All services are designed for
                instant deployment with our AI-powered setup wizards.
              </p>            </UltraFuturisticCard>
          </div>
        </div>
        {/* Contact Information */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>
            Get In Touch
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            <UltraFuturisticCard variant='quantum' className='text-center p-6'>
              <Phone className='w-12 h-12 text-cyan-400 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-white mb-3'>Phone</h3>
              <p className='text-cyan-400 text-lg font-semibold'>
                {contactInfo.mobile}
              </p>
              <p className='text-gray-400 text-sm mt-2'>Available 24/7</p>
            </UltraFuturisticCard>
            <UltraFuturisticCard
              variant='holographic'
              className='text-center p-6'
            >
              <Mail className='w-12 h-12 text-purple-400 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-white mb-3'>Email</h3>
              <p className='text-purple-400 text-lg font-semibold'>
                {contactInfo.email}
              </p>
              <p className='text-gray-400 text-sm mt-2'>
                Quick response guaranteed
              </p>
            </UltraFuturisticCard>
            <UltraFuturisticCard variant='neural' className='text-center p-6'>
              <MapPin className='w-12 h-12 text-green-400 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-white mb-3'>Address</h3>
              <p className='text-green-400 text-sm font-semibold leading-relaxed'>
                {contactInfo.address}
              </p>
              <p className='text-gray-400 text-sm mt-2'>Global operations</p>            </UltraFuturisticCard>
          </div>
        </div>
        {/* CTA Section */}
        <div className='text-center'>
          <UltraFuturisticCard
            variant='quantum-holographic-advanced'
            className='p-12'
          >
            <h2 className='text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Ready to Get Started?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Start your free trial today and experience the power of
              revolutionary AI & quantum computing services. No credit card
              required, instant setup, and full support included.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <Button
                href='/services'
                variant='primary'
                size='lg'
                className='text-lg px-8 py-4'
              >
                Start Free Trial
                <Play className='ml-2 w-5 h-5' />
              </Button>
              <Button
                href='/contact'
                variant='secondary'
                size='lg'
                className='text-lg px-8 py-4'
              >
                Contact Sales
                <MessageSquare className='ml-2 w-5 h-5' />
              </Button>
            </div>
            
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Micro SaaS</h3>
              <p className="text-gray-600 mb-4">Idea validation, build, payments, analytics, hosting.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Starter: $8,000–$25,000</li>
                <li>Growth: $30,000–$80,000</li>
                <li>Scale: $100,000+</li>
              </ul>
            </div>
            
            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-600 mb-4">AWS/GCP/Azure architecture, IaC, observability.</p>
              <ul className="text-gray-700 space-y-2 mb-4 list-disc list-inside">
                <li>Audit & Setup: $3,000–$12,000</li>
                <li>Migration: $10,000–$40,000</li>
                <li>Managed: from $2,000/mo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;