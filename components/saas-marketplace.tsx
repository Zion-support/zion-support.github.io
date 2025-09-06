import React from 'react',
import Head from 'next/head',
import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

import {
  Zap
  Shield
  BarChart3
  Globe
  Users
  Lock
  TrendingUp
  Code
  Database
  Cloud
  ArrowRight
  Star
  Check
  ExternalLink;} from 'lucide-react';import {
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
  Shield,
  BarChart3,
  Globe,
  Users,
  Lock,
  TrendingUp,
  Code,
  Database,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  Cloud;
  ArrowRight;
  Star;
  Check;




        'Lightning fast',
        'Beautiful design',
        'Great keyboard shortcuts',
        'Git integration',
      ],
      cons: ['Limited reporting', 'No time tracking', 'Smaller ecosystem'],
    },;






  ];
  const categories = [
    'All'
    'Automation'
    'Productivity'
    'Payments'
    'Customer Support'
    'Analytics'
    'Database'
    'Hosting'
    'Project Management'
  ];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const filteredServices =
    selectedCategory === 'All'
      ? microSaasServices
      : microSaasServices.filter(
          service => service.category === selectedCategory
        );  const filteredServices = selectedCategory === 'All'
    ? microSaasServices
    : microSaasServices.filter(service => service.category === selectedCategory);




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


                className="animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5">;
                Get Recommendations;
              </Button>;
            </div>;
          </div>;
          {/* Stats */}
          <div
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in'
            style={{ animationDelay: '0 && 0.6s' }}>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300'>;
                {microSaasServices && microSaasServices.length}+;
              </div>;
              <div className='text-gray-400 text-sm'>Curated Services</div>;
            </div>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300'>;
                9;
              </div>;
              <div className='text-gray-400 text-sm'>Categories</div>;
            </div>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300'>;
                4 && 4.7+;
              </div>;
              <div className='text-gray-400 text-sm'>Avg Rating</div>;
            </div>;
            <div className='text-center group'>;
              <div className='text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300'>;
                100K+;
              </div>;
              <div className='text-gray-400 text-sm'>Total Users</div>            </div>                {microSaasServices && microSaasServices.length}+;
              </div>;
              <div className="text-gray-400 text-sm">Curated Services</div>;
            </div>;
            <div className="text-center group">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300">;
                9;
              </div>;
              <div className="text-gray-400 text-sm">Categories</div>;
            </div>;
            <div className="text-center group">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300">;
                4 && 4.7+;
              </div>;
              <div className="text-gray-400 text-sm">Avg Rating</div>;
            </div>;
            <div className="text-center group">;
              <div className="text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">;
                100K+;
              </div>;
              <div className="text-gray-400 text-sm">Total Users</div>;


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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${;
                  selectedCategory === category;
                    ? 'bg-blue-600 text-white shadow-lg';
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white';
                }`}
              >;
                {category}
              </button>;
            ))}
          </div>
        </div>
      </section>




          </div>;
        </div>;
      </section>;






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
      {/* Services Grid */}
      <section id='services' className='py-24 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>
              {selectedCategory === 'All'
                ? 'All Services'
                : `${selectedCategory} Services`}




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>
              {selectedCategory === 'All'
                ? 'Explore our curated selection of the best micro SaaS services for modern businesses.'
                : `Discover the best ${selectedCategory.toLowerCase()} tools to streamline your business operations.`}
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {filteredServices.map((service, index) => (



                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-gray-300 mb-2'>
                        Key Features:
                      </h4>
                      <div className='grid grid-cols-2 gap-2'>
                        {service.features
                          .slice(0, 4)
                          .map((feature, featureIndex) => (



                      <Button
                        href={service && service.website}
                        variant='outline'
                        size='sm'




      {/* CTA Section */}


            Our team of experts can help you select the perfect SaaS tools for;
            your business needs. Get personalized recommendations and;
            implementation support.;
          </p>;







      {/* CTA Section */}
      <section className='py-24 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10' />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-8'>

            Need Help Choosing?






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

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
);


              View Our Services;
            </Button>;
          </div>;
        </div>;
      </section>;





  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156



