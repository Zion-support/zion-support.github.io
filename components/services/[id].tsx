<<<<<<< HEAD
import React from 'react',
=======
import React from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import Head from 'next/head';
import { useRouter  } from 'next/router';
import { getServiceById  } from '../../data/micro-saas-services';
import ServiceDetail from '../../components/sections/ServiceDetail',
import Button from '../../components/ui/Button';
<<<<<<< HEAD
import { ArrowLeft, ExternalLink } from 'lucide-react';
<<<<<<< HEAD
=======
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function ServiceDetailPage() {
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
<<<<<<< HEAD
import { ArrowLeft, ExternalLink } from 'lucide-react';
=======
import {ArrowLeft, ExternalLink} from 'lucide-react';
<<<<<<< HEAD

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function ServiceDetailPage() {

=======
<<<<<<< HEAD
export default function ServiceDetailPage() {;
=======

export default function ServiceDetailPage() {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const router = useRouter();
  const { id } = router.query;
<<<<<<< HEAD
  if (!id |typeof id !== 'string') {
=======

  if (!id || typeof id !== 'string') {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    return (
      <div className='min-h-screen bg-black flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-white mb-4'>
            Service Not Found
          </h1>
          <p className='text-gray-400 mb-6'>
            The requested service could not be found.
          </p>
          <Button href='/services' variant='primary'>
<<<<<<< HEAD
            <ArrowLeft className='w-4 h-4 mr-2' />            Back to Services      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-6">The requested service could not be found.</p>
          <Button href="/services" variant="primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
=======
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to Services
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          </Button>
        </div>
      </div>
    );
  }
<<<<<<< HEAD
  const service = getServiceById(id);
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
}

const service = getServiceById(id);

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  if (!service) {
    return (
      <div className='min-h-screen bg-black flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-white mb-4'>
            Service Not Found
          </h1>
          <p className='text-gray-400 mb-6'>
            The requested service "{id}" could not be found.
          </p>
          <Button href='/services' variant='primary'>
<<<<<<< HEAD
            <ArrowLeft className='w-4 h-4 mr-2' />            Back to Services
          </Button>
        </div>
      </div>
    );  }      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-6">The requested service "{id}" could not be found.</p>
          <Button href="/services" variant="primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
          </Button>
        </div>
      </div>
    );    )
=======
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to Services
          </Button>
        </div>
      </div>
    );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }
  return (
    <>
      <Head>
        <title>{service.name} | Zion Tech Group - Micro SaaS Services</title>
        <meta name='description' content={service.description} />
        <meta
          property='og:title'
          content={`${service.name} | Zion Tech Group`}
        />
        <meta property='og:description' content={service.description} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <div className='min-h-screen bg-black'>
        {/* Navigation */}
        <nav className='border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
              <Button
                href='/services'
                variant='ghost'
                size='sm'
                className='text-gray-400 hover:text-white'
              >
<<<<<<< HEAD
                <ArrowLeft className='w-4 h-4 mr-2' />                Back to Services
              </Button>
              <Button
                href={service.website}
                variant='primary'
                size='sm'
                icon={<ExternalLink className='w-4 h-4' />}              >      </Head>
      <div className="min-h-screen bg-black">
        {/* Navigation */}
        <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Button
                href="/services"
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
=======
                <ArrowLeft className='w-4 h-4 mr-2' />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                Back to Services
              </Button>
              <Button
                href={service.website}
                variant='primary'
                size='sm'
<<<<<<< HEAD
                icon={<ExternalLink className='w-4 h-4' />}                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-4 h-4" />}
=======
                icon={<ExternalLink className='w-4 h-4' />}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              >
                Visit Service
              </Button>
            </div>
          </div>
        </nav>
<<<<<<< HEAD
        {/* Service Detail Content */}
        <ServiceDetail service={service} />
=======

        {/* Service Detail Content */}
        <ServiceDetail service={service} />

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Related Services CTA */}
        <section className='py-16 bg-gray-900/50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-bold text-white mb-6'>
<<<<<<< HEAD
=======

              Looking for Something Else?
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
                className='shadow-2xl shadow-blue-500/25'              >
=======
                className='shadow-2xl shadow-blue-500/25'
              >
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                View All Services
              </Button>
              <Button
                href='/contact'
                variant='outline'
                size='lg'
<<<<<<< HEAD
                className='border-white/20 text-white hover:border-white/40'              >                href="/services"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-blue-500/25"
                View All Services
              </Button>
<<<<<<< HEAD
              <Button
                href='/contact'
                variant='outline'
                size='lg'
                className='border-white/20 text-white hover:border-white/40'                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:border-white/40"
=======
                className='border-white/20 text-white hover:border-white/40'
              >
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                Get Custom Solution
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
}
<<<<<<< HEAD
=======
              <Button
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
;
=======
              <Button
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
