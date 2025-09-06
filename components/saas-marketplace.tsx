
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

import {

=======
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  Zap,
  Shield,
  BarChart3,
  Globe,
  Users,
  Lock,
  TrendingUp,
  Code,
  Database,
  Cloud,
  ArrowRight,
  Star,

  Zap;
  Shield
  BarChart3
  Globe
  Users
  Lock
  TrendingUp
  Code
  Database

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  Cloud;
  ArrowRight;
  Star;
  Check;
  ExternalLink

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    {
      name: 'Linear',
      description: 'Issue tracking tool built for high-performance teams. Streamline your workflows and ship better products faster.',
      category: 'Project Management',
      pricing: 'Free - $8/month',
      rating: 4.9,
      users: '10K+',
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      features: [

    }

=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  ];
  const categories = [;
    'All',;
    'Automation',;
    'Productivity',;
    'Payments',;
    'Customer Support',;
    'Analytics',;
    'Database',;
    'Hosting',;
    'Project Management',;
  ];

              <Button
                href='#services'
                size='lg'
                className='animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40'
                style={{ animationDelay: '0 && 0.2s' }}>;
                Explore Services;
                <ArrowRight className='w-5 h-5 ml-2' />;
              </Button>;
              <Button
                href='/contact'
                variant='outline'
                size='lg'
                className='animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5'                style={{ animationDelay: '0 && 0.4s' }}                href="/contact"
  const filteredServices = selectedCategory === 'All'
    ? microSaasServices
    : microSaasServices.filter(service => service.category === selectedCategory);
  return (
    <>
      <Head>
        <title>SaaS Marketplace - Zion Tech Group</title>
<meta name="description" content="Discover the best micro SaaS services for your business. Curated selection of tools for automation, productivity, payments, and more." />
        <meta property="og:title" content="SaaS Marketplace - Zion Tech Group" />
        <meta property="og:description" content="Curated selection of the best micro SaaS services for modern businesses." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.06),transparent_50%)]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-20 animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-scale-in">
                <Globe className="w-4 h-4 mr-2" />
                Curated SaaS Solutions
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight">
              SaaS Marketplace
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
              Discover the best micro SaaS services that power modern businesses.
              Hand-picked tools for automation, productivity, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button
                href="#services"
                size="lg"
                className="animate-scale-in shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40"
                style={{ animationDelay: '0.2s' }}
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact"

                variant="outline"
                size="lg"

              >
                Get Recommendations
              </Button>
            </div>
          </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                {microSaasServices.length}+
              </div>
              <div className='text-gray-400 text-sm'>Curated Services</div>
            </div>
            <div className='text-center group'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300'>
                9
              </div>
              <div className='text-gray-400 text-sm'>Categories</div>
            </div>
            <div className='text-center group'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300'>
                4.7+
              </div>
              <div className='text-gray-400 text-sm'>Avg Rating</div>
            </div>
            <div className='text-center group'>
              <div className='text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300'>
                100K+
              </div>
              <div className='text-gray-400 text-sm'>Total Users</div>            </div>                {microSaasServices.length}+
              </div>

              <div className="text-gray-400 text-sm">Curated Services</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">
                9
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                4.7+
              </div>
              <div className="text-gray-400 text-sm">Avg Rating</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                100K+
              </div>
              <div className="text-gray-400 text-sm">Total Users</div>
            </div>
          </div>
        </div>
      </section>

            </div>;
          </div>;
        </div>;
      </section>;


      {/* Category Filter */}
      <section className='py-16 bg-gray-900'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='flex flex-wrap justify-center gap-4'>;
            {categories && categories.map(category => (              <button      <section className="py-16 bg-gray-900">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex flex-wrap justify-center gap-4">;
            {categories && categories.map((category) => (;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${;
                  selectedCategory === category;
                    ? 'bg-blue-600 text-white shadow-lg';
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white';
                }`}
              >;
                {category}

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
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {filteredServices.map((service, index) => (
              <Card
                key={index}
                className='group border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='flex items-start space-x-6'>
                  <div className='relative'>
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${service.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center justify-between mb-2'>
                      <h3 className='text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300'>
                        {service.name}
                      </h3>
                      <div className='flex items-center space-x-2'>
                        <Star className='w-4 h-4 text-yellow-400 fill-current' />
                        <span className='text-sm text-gray-300'>
                          {service.rating}
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center space-x-4 mb-3 text-sm text-gray-400'>
                      <span className='px-2 py-1 bg-gray-800 rounded-full'>
                        {service.category}
                      </span>
                      <span>{service.users} users</span>
                      <span className='text-green-400'>{service.pricing}</span>
                    </div>
                    <p className='text-gray-400 leading-relaxed mb-4'>
                      {service.description}
                    </p>

                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'>
                        Key Features:
                      </h4>
                      <div className='grid grid-cols-2 gap-2'>
                        {service.features
                          .slice(0, 4)
                          .map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className='flex items-center text-sm text-gray-400'
                            >
                              <Check className='w-3 h-3 text-green-400 mr-2 flex-shrink-0' />
                              {feature}
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <Button
                        href={service.website}
                        variant='outline'
                        size='sm'
                        className='group-hover:border-blue-500 group-hover:text-blue-400'
                      >
                        Visit Website
                        <ExternalLink className='w-4 h-4 ml-2' />
                      </Button>
                      <div className='text-right'>
                        <div className='text-xs text-gray-500 mb-1'>
                          Use Case:
                        </div>
                        <div className='text-sm text-gray-300 max-w-xs'>
                          {service.useCase}
                        </div>                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 mb-1">Use Case:</div>
                        <div className="text-sm text-gray-300 max-w-xs">{service.useCase}</div>

                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Services Grid */}


            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              {selectedCategory === 'All'
                ? 'Explore our curated selection of the best micro SaaS services for modern businesses.'
                : `Discover the best ${selectedCategory.toLowerCase()} tools to streamline your business operations.`}
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {filteredServices.map((service, index) => (
=======
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>;
              {selectedCategory === 'All';
                ? 'Explore our curated selection of the best micro SaaS services for modern businesses.';
                : `Discover the best ${selectedCategory && selectedCategory.toLowerCase()} tools to streamline your business operations.`}
            </p>;
          </div>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;
            {filteredServices && filteredServices.map((service, index) => (;
              <Card
                key={index}
                className='group border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1'
                style={{ animationDelay: `${index * 0 && 0.1}s` }}>;
                <div className='flex items-start space-x-6'>;
                  <div className='relative'>;
                    <div

      {/* Category Filter */}
      <section className='py - 16 bg - gray - 900'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='flex flex - wrap justify - center gap - 4'>;
            {categories.map (category => (              <button      <section className="py - 16 bg - gray - 900">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="flex flex - wrap justify - center gap - 4">;
            {categories.map ((category) => (
                key={category}
                on_click={() => setSelectedCategory (category)}
                className={`px - 6 py - 3 rounded - full text - sm font - medium transition - all duration - 300 ${
                  selected_category === category;
                    ? 'bg - blue - 600 text - white shadow - lg';
                    : 'bg - gray - 800 text - gray - 300 hover:bg - gray - 700 hover:text - white';
                }`}
              >;
                {category}
              </button>))}
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section id='services' className='py - 24 bg - black'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='text - center mb - 20'>;
            <h2 className='text - 4xl sm:text - 5xl font - bold mb - 8 text - white leading - tight'>;
              {selected_category === 'All';
                ? 'All Services';
                : `${selected_category} Services`}
            <p className='text - xl text - gray - 400 max - w-4xl mx - auto leading - relaxed'>;
              {selected_category === 'All';
                ? 'Explore our curated selection of the best micro SaaS services for modern businesses.';
                : `Discover the best ${selected_category.toLowerCase ()} tools to streamline your business operations.`}
            </p>;
          </div>;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>;
            {filtered_services.map ((service, index) => (
              <Card;
                key={index}
                className='group border border - gray - 800 hover:border - blue - 500 / 30 hover:bg - gray - 900 / 80 transition - all duration - 300 hover:-translate - y-1';
                style={{ animation_delay: `${index * 0.1}s` }}
              >;
                <div className='flex items - start space - x-6'>;
                  <div className='relative'>;
                    <div;
                      className={`w - 20 h - 20 rounded - 2xl flex items - center justify - center text - 3xl bg - gradient - to - br ${service.color} shadow - xl group - hover:scale - 110 transition - transform duration - 300`}
                    >;

                      {service.icon}
                    </div>;
                  </div>;
                  <div className='flex - 1'>;
                    <div className='flex items - center justify - between mb - 2'>;
                      <h3 className='text - 2xl font - bold text - white group - hover:text - blue - 400 transition - colors duration - 300'>;
                        {service.name}
                      </h3>;
                      <div className='flex items - center space - x-2'>;
                        <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />;
                        <span className='text - sm text - gray - 300'>;
                          {service.rating}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'>
                        Key Features:
                      </h4>
                      <div className='grid grid-cols-2 gap-2'>
                        {service.features
                          .slice(0, 4)
                          .map((feature, featureIndex) => (
=======
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${service && service.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>;
                      {service && service.icon}
                    </div>;
                  </div>;
                  <div className='flex-1'>;
                    <div className='flex items-center justify-between mb-2'>;
                      <h3 className='text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300'>;
                        {service && service.name}
                      </h3>;
                      <div className='flex items-center space-x-2'>;
                        <Star className='w-4 h-4 text-yellow-400 fill-current' />;
                        <span className='text-sm text-gray-300'>;
                          {service && service.rating}
                        </span>;
                      </div>;
                    </div>;
                    <div className='flex items-center space-x-4 mb-3 text-sm text-gray-400'>;
                      <span className='px-2 py-1 bg-gray-800 rounded-full'>;
                        {service && service.category}
                      </span>;
                      <span>{service && service.users} users</span>;
                      <span className='text-green-400'>{service && service.pricing}</span>;
                    </div>;
                    <p className='text-gray-400 leading-relaxed mb-4'>;
                      {service && service.description}
                    </p>;
                    <div className='mb-4'>;
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'>;
                        Key Features:;
                      </h4>;
                      <div className='grid grid-cols-2 gap-2'>;
                        {service && service.features;
                          .slice(0, 4);
                          .map((feature, featureIndex) => (;
                            <div
                              key={featureIndex}
                              className='flex items-center text-sm text-gray-400'>;
                              <Check className='w-3 h-3 text-green-400 mr-2 flex-shrink-0' />;
                              {feature}
                            </div>;
                          ))}

                      </div>;
                    </div>;
                    <div className='flex items-center justify-between'>;

                      <Button
                        href={service && service.website}
                        variant='outline'
                        size='sm'


      {/* CTA Section */}


            Our team of experts can help you select the perfect SaaS tools for;
            your business needs. Get personalized recommendations and;
            implementation support.;
          </p>;





>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          </h2>
          <p className='text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed'>
            Our team of experts can help you select the perfect SaaS tools for
            your business needs. Get personalized recommendations and
            implementation support.
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <Button
              href='/contact'
              variant='secondary'
              size='lg'
              className='bg-white text-blue-600 hover:bg-gray-100 shadow-2xl'>;
              Get Expert Advice;
              <ArrowRight className='w-5 h-5 ml-2' />;
            </Button>;
            <Button
              href='/services'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl'            >              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl"

              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>

}
              View Our Services;
            </Button>;
          </div>;
        </div>;
      </section>;


=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </>);
=======
);
<<<<<<< HEAD
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
