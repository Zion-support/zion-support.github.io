import React from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Zap;
  Shield;
  BarChart3;
  Globe;
  Users;
  Lock;
  TrendingUp;
  Code;
  Database;
import {
  return (
    <>
      <Head>
        <title>SaaS Marketplace - Zion Tech Group</title>
  return (
    <>
      <Head>
        <title>SaaS Marketplace - Zion Tech Group</title>
<meta
origin/cursor/automate-test-improve-and-merge-code-2533
          name='description'

          content='Discover the best micro SaaS services for your business. Curated selection of tools for automation, productivity, payments, and more.'

                className='animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5'
                style={{ animationDelay: '0.4s' ;}}
origin/cursor/automate-test-improve-and-merge-code-2533
              >
                Get Recommendations
              </Button>
            </div>
          </div>
          {/* Stats */}
          <div
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in'
            style={{ animationDelay: '0.6s' }}
          >
            <div className='text-center group'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300'>
                {microSaasServices.length}+
              </div>
              <div className='text-gray-400 text-sm'    />Curated Services</div>
            </div>
            <div className='text-center group'    />
              <div className='text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300'    />
                9
              </div>
              <div className='text-gray-400 text-sm'    />Categories</div>
            </div>
            <div className='text-center group'    />
              <div className='text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300'    />
                4.7+
              </div>
              <div className='text-gray-400 text-sm'    />Avg Rating</div>
            </div>
            <div className='text-center group'    />
              <div className='text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300'    />
                100K+
              </div>
              <div className='text-gray-400 text-sm'    />Total Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className='py-16 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center gap-4'>
            {categories.map(category => (              <button      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section id='services' className='py-24 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
              {selectedCategory === 'All'
                ? 'All Services'
                : `${selectedCategory} Services`}
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              {selectedCategory === 'All'
                ? 'Explore our curated selection of the best micro SaaS services for modern businesses.'
                : `Discover the best ${selectedCategory.toLowerCase()} tools to streamline your business operations.`}
            </p>
          </div>'
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {filteredServices.map((service, index) => (

                  <div className='relative'>
                    <div
                      {service.icon}
                    </div    />
                  </div>
                  <div className='flex-1'    />
                    <div className='flex items-center justify-between mb-2'    />
                      <h3 className='text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300'    />
                        {service.name}
                      </h3>
                      <div className='flex items-center space-x-2'    />
                        <Star className='w-4 h-4 text-yellow-400 fill-current'    />
                        <span className='text-sm text-gray-300'    />
                          {service.rating}
                        </span>
                      </div>
                    </div>'
                    <div className='flex items-center space-x-4 mb-3 text-sm text-gray-400'>'
                      <span className='px-2 py-1 bg-gray-800 rounded-full'>
                        {service.category}
                      </span>
                      <span>{service.users} users</span>'
                      <span className='text-green-400'>{service.pricing}</span>
                    </div>'
                    <p className='text-gray-400 leading-relaxed mb-4'>
                      {service.description}
                    </p>
                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'>
                        Key Features:
                      </h4>'
                      <div className='grid grid-cols-2 gap-2'>
                        {service.features
                          .slice(0, 4)

                      {service && service.icon}
                    </div>
                  </div>;'
                  <div className='flex-1'>;'
                    <div className='flex items-center justify-between mb-2'>;'
                      <h3 className='text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300'>
                        {service && service.name}
                      </h3>;'
                      <div className='flex items-center space-x-2'>;'
                        <Star className='w-4 h-4 text-yellow-400 fill-current' />;'
                        <span className='text-sm text-gray-300'>
                          {service && service.rating}
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center space-x-4 mb-3 text-sm text-gray-400'    />
                      <span className='px-2 py-1 bg-gray-800 rounded-full'    />
                        {service.category}
                      </span>
                      <span    />{service.users} users</span>
                      <span className='text-green-400'    />{service.pricing}</span>
                    </div>
                    <p className='text-gray-400 leading-relaxed mb-4'    />
                      {service.description}
                    </p>
                    <div className='mb-4'    />
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'    />
                        Key Features:
                      </h4>
                      <div className='grid grid-cols-2 gap-2'    />
                        {service.features;}
                          .slice(0, 4).map((feature, featureIndex) => (className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${service && service.color} shadow-xl group-hover: scale-110 transition-transform duration-300`}>

                      {service && service.ico,}

                    </div>
                  </div>
                  <div className='flex-1'    />
                    <div className='flex items-center justify-between mb-2'    />
                      <h3 className='text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300'    />
                        {service && service.name}
                      </h3>
                      <div className='flex items-center space-x-2'    />
                        <Star className='w-4 h-4 text-yellow-400 fill-current'    />
                        <span className='text-sm text-gray-300'    />
                          {service && service.rating}
                        </span>
                      </div>
                    </div>;<div className='flex items-center space-x-4 mb-3 text-sm text-gray-400'    />
                      <span className='px-2 py-1 bg-gray-800 rounded-full'    />
                        {service && service.category}
                      </span>
                      <span    />{service && service.users} users</span>
                      <span className='text-green-400'    />{service && service.pricing}</span>
                    </div>;<p className='text-gray-400 leading-relaxed mb-4'    />
                      {service && service.description}
                    </p>;<div className='mb-4'    />
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'    />
                        Key Features:
                      </h4>
                      <div className='grid grid-cols-2 gap-2'    />
                        {service && service.features;}
                          .slice(0, 4).map((feature, featureIndex) => (<div;}
                              key={featureIndex}
                              className='flex items-center text-sm text-gray-400'    />
                              <Check className='w-3 h-3 text-green-400 mr-2 flex-shrink-0'    />
                              {feature}
                            </div>
                          ))}

                        className='group-hover:border-blue-500 group-hover:text-blue-400'>
                        Visit Website;'
                        <ExternalLink className='w-4 h-4 ml-2' />
                      </Button>
'
                      <div className='text-right'>;'
                        <div className='text-xs text-gray-500 mb-1'>
                          Use Case:
                        </div>;'
                        <div className='text-sm text-gray-300 max-w-xs'>
                          {service && service.useCase}
                        </div>                      </div>                      ;"
                      <div className="text-right">;"
                        <div className="text-xs text-gray-500 mb-1">Use Case:</div>;"
                        <div className="text-sm text-gray-300 max-w-xs">{service && service.useCase}</div>
                    </div>
                  </div>
                </div>
              </Card>
                        className='group-hover:border-blue-500 group-hover:text-blue-400'
                      >
                        Visit Website
                        <ExternalLink className='w-4 h-4 ml-2' />
                      </Button>
                      <div className='text-right'    />
                        <div className='text-xs text-gray-500 mb-1'    />
                          Use Case:
                        </div>
                        <div className='text-sm text-gray-300 max-w-xs'    />
                          {service.useCase}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

            ),

          </div>
        </div>
      </section>;{/* CTA Section */}
      <section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden'    />
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0 && 0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10'    />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'    />
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'    />
          </h2>
          <p className='text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed'    />
                        </span>
                      </div>
                    </div>
                    <div className='flex items - center space - x-4 mb - 3 text - sm text - gray - 400'    />
                      <span className='px - 2 py - 1 bg - gray - 800 rounded - full'    />
                        {service.category}
                      </span>
                      <span    />{service.users} users</span>
                      <span className='text - green - 400'    />{service.pricing}</span>
                    </div>
                    <p className='text - gray - 400 leading - relaxed mb - 4'    />
                      {service.description}
                    </p>
                    <div className='mb - 4'    />
                      <h4 className='text - sm font - semibold text - gray - 300 mb - 2'    />
                        Key Features:
                      </h4>
                      <div className='grid grid - cols - 2 gap - 2'    />
                        {service.features;}
                          .slice (0, 4).map ((feature, feature_index) => (<div;}
                              key={feature_index}
                              className='flex items - center text - sm text - gray - 400'    />

                              <Check className='w - 3 h - 3 text - green - 400 mr - 2 flex - shrink - 0'    />
                              {feature}
                            </div>))}
                      </div>
                    </div>
                    <div className='flex items - center justify - between'    />
                      <Button
                        href={service.website}
                        variant='outline'
                        size='sm'
                        className='group - hover:border - blue - 500 group - hover:text - blue - 400'    />

                        Visit Website
                        <ExternalLink className='w - 4 h - 4 ml - 2'    />
                      </Button>
                      <div className='text - right'    />
                        <div className='text - xs text - gray - 500 mb - 1'    />
                          Use Case:
                        </div>
                        <div className='text - sm text - gray - 300 max - w-xs'    />
                          {service.use_case}

                    </div>
                  </div>
                </div>
              </Card>))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'>
          </h2>
          <p className='text - xl text - blue - 100 mb - 12 max - w-4xl mx - auto leading - relaxed'    />
            Our team of experts can help you select the perfect SaaS tools for
            your business needs. Get personalized recommendations and
            implementation support.
          </p>;{/* CTA Section */}
<section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden'    />
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10'    />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'    />
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'    />
          </h2>
          <p className='text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed'    />
            Our team of experts can help you select the perfect SaaS tools for
            your business needs. Get personalized recommendations and
            implementation support.
          </p>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'>
          </h2>'
          <p className='text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
            Our team of experts can help you select the perfect SaaS tools for
your business needs. Get personalized recommendations and
implementation support.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'    />
            <Button
href='/contact'
              variant='secondary'
              size='lg'
            <Button
href='/services'
              variant='outline'
              size='lg'
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
);
}
}
