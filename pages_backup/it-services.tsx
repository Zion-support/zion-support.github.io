











className="bg - white p - 8 rounded - xl shadow - lg hover:shadow - xl transition - all duration - 300 group;








    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud infrastructure setup, management, and optimization services',
    icon: Cloud,
    features: ['AWS / Azure / GCP Setup', 'Server Management', 'Auto - scaling', 'Cost Optimization'],
    pricing: '$2, 000 - $10, 000 / month',
    category: 'Cloud Computing',
    popular: true,
    benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced security', '24 / 7 monitoring'],
    market_price: '$5, 000 / month',
    link: '/contact';
  },
  {






    link: '/contact'




    link: '/contact'




];





  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')


import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
export default function ITServices(req, res) {
  try {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');


        <meta
          name='description'
          content='Explore our 100+ comprehensive IT services including cloud computing, cybersecurity, DevOps, blockchain solutions, and quantum computing consulting.'
        />;
        <meta
          name='keywords'
          content='IT services, cloud computing, cybersecurity, DevOps, blockchain, quantum computing, enterprise solutions, infrastructure'



        />;
        <meta name='viewport' content='width=device-width, initial-scale=1 && 1.0' />;
        <meta name='robots' content='index, follow' />;
        <link rel='canonical' href={`${contact && contact.site}/it-services`} />;
      </Head>;
      <ErrorBoundary level='page'>;
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>;


          {/* Hero Section */}
          <section className='py-20 px-4 text-center' role='banner'>;
            <div className='max-w-4xl mx-auto'>;
              <h1                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >;
                IT Services;
              </h1>;
              <p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>;
                100+ Comprehensive IT Solutions;
              </p>;
              <p


                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>;
                Transform your business with our enterprise-grade IT services.;
                From cloud infrastructure to quantum computing, we provide;
                cutting-edge technology solutions that scale with your business;
                and drive innovation.              </p>;
            </div>;
          </section>;




          {/* Category Filter */}
          <section className='py-8 px-4'>;
            <div className='max-w-6xl mx-auto'>;
              <div className='flex flex-wrap justify-center gap-4 mb-8'>;
                {categories && categories.map(category => (                  <button
                    key={category && category.id}
                    onClick={() => setSelectedCategory(category && category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${;
                      selectedCategory === category && category.id;
                        ? 'bg-green-600 text-white';
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700';

                    }`}
                  >;
                    {category && category.name} ({category && category.count});
                  </button>;
                ))}



                {filteredServices.map((service, index) => (
                  <div                    key={service.id}
                    className={`p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {service.popular && (
                      <div className='absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full'>
                        Popular
                      </div>











                      />;
                    </svg>;
                  </div>;
                  <h3 className='text-xl font-bold mb-2'>Cloud Platforms</h3>;
                  <p className='text-slate-400'>;
                    AWS, Azure, GCP, and hybrid cloud solutions;
                  </p>;
                </div>;

                <div className='text-center'>;
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>;










                <a

























  );

}

          </section>

          {/* Category Filter */}
          </section>

          {/* Category Filter */}
          <section className='py-8 px-4'>
            <div className='max-w-6xl mx-auto'>
              <div className='flex flex-wrap justify-center gap-4 mb-8'>
                {categories.map(category => (
ursor/integrate-build-improve-and-re-verify-8f7d

                  <Link
                    href={service.link}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our IT solutions are tailored for various industries and business requirements.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
                Ready to Enhance Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can improve your business operations and security.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button







