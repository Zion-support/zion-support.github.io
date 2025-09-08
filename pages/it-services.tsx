import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ITServices() {
  const contact = {
    phone: '+1-302-464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    site: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud DevOps, cybersecurity, data engineering, and more. Expert solutions for your technology needs." />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>
      <ErrorBoundary level='page'>
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>
          {/* Hero Section */}
          <section className='py-20 px-4 text-center' role='banner'>
            <div className='max-w-4xl mx-auto'>
              <h1                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                IT Services
              </h1>
              <p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                100+ Comprehensive IT Solutions
              </p>
              <p
                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Transform your business with our enterprise-grade IT services.
                From cloud infrastructure to quantum computing, we provide
                cutting-edge technology solutions that scale with your business
                and drive innovation.              </p>
            </div>
          </section>
          {/* Category Filter */}
          <section className='py-8 px-4'>
            <div className='max-w-6xl mx-auto'>
              <div className='flex flex-wrap justify-center gap-4 mb-8'>
                {categories.map(category => (                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}>{category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>
          {/* Services Grid */}
          <section className='py-16 px-4' role='main'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredServices.map((service, index) => (
                  <div                    key={service.id}
                    className={`p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}>{service.popular && (
                      <div className='absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full'>
                        Popular
                      </div>
                    )}
                    <h3 className='text-xl font-bold mb-3'>{service.name}</h3>
                    <p className='text-slate-300 mb-4 text-sm'>
                      {service.description}
                    </p>
                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-green-400 mb-2'>
                        Key Features:
                      </h4>
                      <ul className='text-slate-400 text-sm space-y-1'>
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='flex items-center'>
                            <span className='w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0'></span>                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-blue-400 mb-2'>
                        Benefits:
                      </h4>
                      <div className='flex flex-wrap gap-1'>
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'
                          >                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-2xl font-bold text-green-400'>
                        {service.price}
                      </span>
                      <span className='text-xs text-slate-500 capitalize'>
                        {service.category.replace('-', ' ')}
                      </span>
                    </div>
                    <button className='w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors'>                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Technology Stack Section */}
          <section className='py-16 px-4 bg-slate-900/40'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                Our Technology Stack
              </h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 15a4 4 0 004 4M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Cloud Platforms</h3>
                  <p className='text-slate-400'>
                    AWS, Azure, GCP, and hybrid cloud solutions
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Security</h3>
                  <p className='text-slate-400'>
                    Zero-trust architecture and advanced threat protection
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>DevOps</h3>
                  <p className='text-slate-400'>
                    CI/CD pipelines and infrastructure automation
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Blockchain</h3>
                  <p className='text-slate-400'>
                    Smart contracts and decentralized applications
                  </p>                </div>
              </div>
            </div>
          </section>
          {/* CTA Section */}
          <section className='py-16 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className='text-lg text-slate-300 mb-8'>
                Contact our IT experts to discuss how our comprehensive
                technology solutions can modernize your infrastructure and
                accelerate your digital transformation.
              </p>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <Link
                  href='/contact'
                  className='px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors'
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                  className='px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'
                >
                  Call {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className='px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors'                >
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold mb-4">Our IT Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive IT solutions designed to enhance your business operations and security.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
whileHover={{ y: -5 }} ">
                  <div className="flex items-center justify-between mb-4">
                  <div className="text-green-600 group-hover:text-emerald-600 transition-colors">
                  <IconComponent className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
<h4 className="font-semibold text-gray-900 mb-2 text-sm">Key "Features": </h4>
                  <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-600">
<CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                  <span className="text-sm font-semibold text-green-600">{service.pricing}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                  >
                    <span>Get Quote</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>
      {/* Technologies Section */}
      <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technologies We Work With</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver robust IT solutions.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our IT services can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Contact Us
              </Link>
              <Link href="/request-quote" className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}