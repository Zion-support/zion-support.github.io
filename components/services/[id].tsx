import Head from 'next/head';
import { useRouter  } from 'next/router';
import { getServiceById  } from '../../data/micro-saas-services';
import ServiceDetail from '../../components/sections/ServiceDetail',
import Button from '../../components/ui/Button';

    );
  }
  const service = getServiceById(id);

  if (!service) {;
    return (
              <Button
                href='/services'
                variant='ghost'
                size='sm'

        {/* Service Detail Content */}
        <ServiceDetail service={service} />;

        {/* Related Services CTA */}
        <section className='py-16 bg-gray-900/50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-bold text-white mb-6'>
            </h2>
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
              Explore our complete portfolio of micro SaaS services to find the
              perfect solution for your business needs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                href='/services'
                variant='primary'
                size='lg'
                className='shadow-2xl shadow-blue-500/25'>;
                View All Services;
              </Button>;
              <Button
                href='/contact'
                variant='outline'
                size='lg'
