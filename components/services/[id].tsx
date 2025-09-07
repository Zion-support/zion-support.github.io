<<<<<<< HEAD
import Head from 'next/head';'

import { useRouter  } from 'next/router';'
import { getServiceById  } from '../../data/micro-saas-services';'
import ServiceDetail from '../../components/sections/ServiceDetail','
import Button from '../../components/ui/Button';'

export default function ServiceDetailPage() {

}

export default function ServiceDetailPage() {;

}

export default function ServiceDetailPage() {

}

if (!id || typeof id !== 'string') {'
}
return (;
      <div className='min-h-screen bg-black flex items-center justify-center'>'
        <div className='text-center'>'
          <h1 className='text-2xl font-bold text-white mb-4'>'
            Service Not Found
          </h1>
          <p className='text-gray-400 mb-6'>'
            The requested service could not be found.
          </p>
          <Button href='/services' variant='primary'>'
            <ArrowLeft className='w-4 h-4 mr-2' />'
=======
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getServiceById } from '../../data/micro-saas-services';
import ServiceDetail from '../../components/sections/ServiceDetail';
import Button from '../../components/ui/Button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
export default function ServiceDetailPage() {
  const router = useRouter($2);
  const { id } = router.query,
  
  if (!id || typeof id !== 'string') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-6">The requested service could not be found.</p>
          <Button href="/services" variant="primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
            Back to Services
          </Button>
        </div>
      </div>
<<<<<<< HEAD
    );
  }
  const service = getServiceById(id);

const service = getServiceById(id);
  if (!service) {
}
return (;
<div className='min-h-screen bg-black flex items-center justify-center'>'
        <div className='text-center'>'
          <h1 className='text-2xl font-bold text-white mb-4'>'
            Service Not Found
          </h1>
          <p className='text-gray-400 mb-6'>'
            The requested service "{id}" could not be found."
          </p>
          <Button href='/services' variant='primary'>'
            <ArrowLeft className='w-4 h-4 mr-2' />'
=======
    )
  }

  const service = getServiceById($2);
  if (!service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-6">The requested service "{id}" could not be found.</p>
          <Button href="/services" variant="primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
            Back to Services
          </Button>
        </div>
      </div>
    )
  }
return (;
    <>
      <Head>
        <title>{service.name} | Zion Tech Group - Micro SaaS Services</title>
<meta name='description' content={service.description} />'
        <meta,
property='"og": title''

          content={`${service.name} | Zion Tech Group,`
} />;
        <meta property='"og": description' content={service.descriptio,'
} />;
        <meta name='"twitter":card' content='summary_large_image' />;'
      </Head>;
      <div className='min-h-screen bg-black'>;'
        {/* Navigation */}

        <nav className='border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50'>'
          <div className='max-w-7xl mx-auto px-4 "sm": px-6 "lg":px-8'>'
            <div className='flex items-center justify-between h-16'>'
              <Button,
href='/services''
variant='ghost';'
                size='sm''

                className='text-gray-400 "hover":text-white''
              >
                <ArrowLeft className='w-4 h-4 mr-2' />'
                Back to Services
              </Button>
              <Button,
href={service.websit
}
variant='primary';'
                size='sm';'
                icon={<ExternalLink className='w-4 h-4' />}'
              >;
                Visit Service;
              </Button>
            </div>
          </div>
        </nav>
        {/* Service Detail Content */}
        <ServiceDetail service={service} />

        {/* Service Detail Content */}
        <ServiceDetail service={service} />;
        {/* Service Detail Content */}
        <ServiceDetail service={service} />;{/* Related Services CTA */}
        <section className='py-16 bg-gray-900/50'>;'
          <div className='max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 text-center'>;'
            <h2 className='text-3xl font-bold text-white mb-6'>;'
            </h2>;
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>;'
              Explore our complete portfolio of micro SaaS services to find the;
              perfect solution for your business needs.;
            </p>;
            <div className='flex flex-col "sm":flex-row gap-4 justify-center'>;'
        {/* Related Services CTA */}
        <section className='py-16 bg-gray-900/50'>;'
          <div className='max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 text-center'>;'
            <h2 className='text-3xl font-bold text-white mb-6'>;'
            </h2>;
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>;'
              Explore our complete portfolio of micro SaaS services to find the;
              perfect solution for your business needs.;
            </p>;
            <div className='flex flex-col "sm":flex-row gap-4 justify-center'>;'
              <Button;
                href='/services';'
                variant='primary';'
                size='lg';'
                className='shadow-2xl shadow-blue-500/25'>;'
                View All Services;
              </Button>;
              <Button;
                href='/contact';'
                variant='outline';'
                size='lg';'
        {/* Related Services CTA */}

<section className='py-16 bg-gray-900/50'>'
          <div className='max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 text-center'>'
            <h2 className='text-3xl font-bold text-white mb-6'>'
            </h2>
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>'
              Explore our complete portfolio of micro SaaS services to find the,
perfect solution for your business needs.
            </p>
            <div className='flex flex-col "sm":flex-row gap-4 justify-center'>'
              <Button,
href='/services''
variant='primary';'
                size='lg''
                className='shadow-2xl shadow-blue-500/25''
              >
                View All Services
              </Button>
              <Button,
href='/contact''
variant='outline';'
                size='lg''

                className='border-white/20 text-white "hover":border-white/40''
              >
origin/cursor/automate-test-improve-and-merge-code-2533
                Get Custom Solution
=======
              <Button'
                href='/services''
                variant='primary''
                size='lg''
                className='shadow-2xl shadow-blue-500/25'              >
                View All Services;
              </Button>
              <Button'
                href='/contact''
                variant='outline''
                size='lg'
                Get Custom Solution;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              </Button>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  );

}
;
<<<<<<< HEAD
              <Button;
'
import Head from 'next / head';'
import {use_router} from 'next / router';'
import {getServiceById} from '../../data / micro - saas - services';'
import ServiceDetail from '../../components / sections / ServiceDetail';'
import Button from '../../components / ui / Button';'
import {ArrowLeft, ExternalLink} from 'lucide-react';
export default /**;
 * ServiceDetailPage - Function description;
=======
              <Button

import Head from 'next / head';
import {use_router} from 'next / router';
import {getServiceById} from '../../data / micro - saas - services';
import ServiceDetail from '../../components / sections / ServiceDetail';
import Button from '../../components / ui / Button';
export default /**
 * ServiceDetailPage - Function description
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
 */
function ServiceDetailPage() {}
  const router = use_router ();
  const { id } = router.query;
;
  // Check condition;
if ( {) {}
  $2;
}
    return ('
      <div className='min - h-screen bg - black flex items - center justify - center'>;'
        <div className='text - center'>;'
          <h1 className='text - 2xl font - bold text - white mb - 4'>;
            Service Not Found;
          </h1>;'
          <p className='text - gray - 400 mb - 6'>;
            The requested service could not be found.;
<<<<<<< HEAD
          </p>;
          <Button href='/services' variant='primary'>;
            <ArrowLeft className='w - 4 h - 4 mr - 2' />            Back to Services      <div className="min - h-screen bg - black flex items-center justify-center">;
        <div className="text-center">;
          <h1 className="text - 2xl font - bold text-white mb-4">Service Not Found</h1>;
          <p className="text - gray-400 mb-6">The requested service could not be found.</p>;
          <Button href="/services" variant="primary">;
            <ArrowLeft className="w - 4 h-4 mr-2" />;
=======
          </p>;'
          <Button href='/services' variant='primary'>;'"
            <ArrowLeft className='w - 4 h - 4 mr - 2' />            Back to Services      <div className="min - h-screen bg - black flex items - center justify - center">;"
        <div className="text - center">;"
          <h1 className="text - 2xl font - bold text - white mb - 4">Service Not Found</h1>;"
          <p className="text - gray - 400 mb - 6">The requested service could not be found.</p>;"
          <Button href="/services" variant="primary">;"
            <ArrowLeft className="w - 4 h - 4 mr - 2" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </Button>;
        </div>;
      </div>);
  }
  const service = getServiceById (id);
;
  // Check condition;
if ( {) {}
  $2;
}
    return ('
      <div className='min - h-screen bg - black flex items - center justify - center'>;'
        <div className='text - center'>;'
          <h1 className='text - 2xl font - bold text - white mb - 4'>;
            Service Not Found;
          </h1>;'
          <p className='text - gray - 400 mb - 6'>;"
            The requested service "{id}" could not be found.;
          </p>;'
          <Button href='/services' variant='primary'>;'
            <ArrowLeft className='w - 4 h - 4 mr - 2' />            Back to Services;
          </Button>;
<<<<<<< HEAD
        </div>;
      </div>);  }      <div className="min - h-screen bg - black flex items-center justify-center">;
        <div className="text-center">;
          <h1 className="text - 2xl font - bold text-white mb-4">Service Not Found</h1>;
          <p className="text - gray-400 mb-6">The requested service "{id}" could not be found.</p>;
          <Button href="/services" variant="primary">;
            <ArrowLeft className="w - 4 h-4 mr-2" />;
=======
        </div>;"
      </div>);  }      <div className="min - h-screen bg - black flex items - center justify - center">;"
        <div className="text - center">;"
          <h1 className="text - 2xl font - bold text - white mb - 4">Service Not Found</h1>;"
          <p className="text - gray - 400 mb - 6">The requested service "{id}" could not be found.</p>;"
          <Button href="/services" variant="primary">;"
            <ArrowLeft className="w - 4 h - 4 mr - 2" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </Button>;
        </div>;
      </div>));
  }
  return (
    <>;
      <Head>;
        <title>{service.name} | Zion Tech Group - Micro SaaS Services</title>;'
        <meta name='description' content={service.description} />;
<<<<<<< HEAD
        <meta;'
          property='og:title';
          content={`${service.name} | Zion Tech Group`}
        />;'
        <meta property='og:description' content={service.description} />;'
        <meta name='twitter:card' content='summary_large_image' />;
      </Head>;'
      <div className='min - h-screen bg - black'>;
        {/* Navigation */}'
        <nav className='border - b border - gray - 800 bg - black / 50 backdrop - blur - sm sticky top - 0 z - 50'>;'
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;'
            <div className='flex items - center justify - between h - 16'>;
              <Button;'
                href='/services';'
                variant='ghost';'
                size='sm';'
                className='text - gray - 400 hover:text - white';
              >;'
                <ArrowLeft className='w - 4 h - 4 mr - 2' />                Back to Services;
              </Button>;
              <Button;
<<<<<<< HEAD
                href={service.website}
                variant='primary';
                size='sm';
                icon={<ExternalLink className='w - 4 h - 4' />}              >      </Head>;
      <div className="min-h-screen bg-black">;
        {/* Navigation */}
        <nav className="border - b border - gray - 800 bg - black / 50 backdrop - blur - sm sticky top-0 z-50">;
          <div className="max - w-7xl mx - auto px - 4 sm:px-6 lg:px-8">;
            <div className="flex items - center justify-between h-16">;
              <Button;
                href="/services";
                variant="ghost";
                size="sm";
                className="text - gray-400 hover:text-white";
              >;
                <ArrowLeft className="w - 4 h-4 mr-2" />;
=======
        <meta;
property='og: title'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

import {ArrowLeft, ExternalLink} from 'lucide-react';
export default function ServiceDetailPage() {

  if (!id || typeof id !== 'string') {;

    return (
      <div className='min-h-screen bg-black flex items-center justify-center'>;
        <div className='text-center'>;
          <h1 className='text-2xl font-bold text-white mb-4'>;
            Service Not Found;
          </h1>;
          <p className='text-gray-400 mb-6'>;
            The requested service could not be found.;
          </p>;
          <Button href='/services' variant='primary'>;
            <ArrowLeft className='w-4 h-4 mr-2' />            Back to Services      <div className="min-h-screen bg-black flex items-center justify-center">;
        <div className="text-center">;
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>;
          <p className="text-gray-400 mb-6">The requested service could not be found.</p>;
          <Button href="/services" variant="primary">;
            <ArrowLeft className="w-4 h-4 mr-2" />;
          </Button>;
        </div>;
      </div>;
    )}
  const service  = getServiceById(id)if (!service) {return (if (!id || typeof id !== 'string') {return (<div className='min-h-screen bg-black flex items-center justify-center'>;
        <div className='text-center'>;
          <h1 className='text-2xl font-bold text-white mb-4'>;
            Service Not Found;
          </h1>;
          <p className='text-gray-400 mb-6'>;
            The requested service could not be found.;
          </p>;
          <Button href='/services' variant='primary'>;
            <ArrowLeft className='w-4 h-4 mr-2' />;
            Back to Services;
          </Button>;
        </div>;
      </div>;
    )}
  const service = getServiceById(id)if (!service) {return (<div className='min-h-screen bg-black flex items-center justify-center'>;
        <div className='text-center'>;
          <h1 className='text-2xl font-bold text-white mb-4'>;
            Service Not Found;
          </h1>;
          <p className='text-gray-400 mb-6'>;
            The requested service "{id}" could not be found.;
          </p>;
          <Button href='/services' variant='primary'>;
            <ArrowLeft className='w-4 h-4 mr-2' />;
            Back to Services;
          </Button>;
        </div>;
      </div>;
)}
  return (<>;
      <Head>;
        <title>{service.name} | Zion Tech Group - Micro SaaS Services</title>;
<meta name='description' content={service.description} />;
        <meta;
          property='og:title';
          content={`${service.name} | Zion Tech Group`}
        />;
<<<<<<< HEAD
        <meta property='og:description' content={service.description} />;
=======
        <meta property='og: description' content={service.descriptio;}
} />;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        <meta name='twitter:card' content='summary_large_image' />;
      </Head>;
      <div className='min-h-screen bg-black'>;
        {/* Navigation */}
    );
  }
  const service = getServiceById(id);

  if (!service) {;
    return (
              <Button
                href='/services'
                variant='ghost'
                size='sm'
        <meta name="description" content={service.description} />
        <meta property="og:title" content={`${service.name} | Zion Tech Group`} />
        <meta property="og:description" content={service.description} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

<<<<<<< HEAD
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
        <nav className='border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='flex items-center justify-between h-16'>;
=======
                className='text-gray-400 hover:text-white'
               />
                <ArrowLeft className='w-4 h-4 mr-2' />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                Back to Services;
              </Button>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              <Button;
                href='/services';
                variant='ghost';
                size='sm';
<<<<<<< HEAD
              <Button;
                href="/services";
                variant="ghost";
                size="sm";
                className="text-gray-400 hover:text-white";
              >;
                <ArrowLeft className="w-4 h-4 mr-2" />;
                className='text-gray-400 hover:text-white';
              >;
                <ArrowLeft className='w-4 h-4 mr-2' />;
                Back to Services;
              </Button>;
              <Button;
                Back to Services
              </Button>
              <Button
                href={service.website}
                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Visit Service
              </Button>
            </div>
          </div>
        </nav>

        {/* Service Detail Content */}
        <ServiceDetail service={service} />

        {/* Related Services CTA */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Looking for Something Else?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Explore our complete portfolio of micro SaaS services to find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/services"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-blue-500/25"
              >
                View All Services
              </Button>
              <Button

<<<<<<< HEAD
                className='border-white/20 text-white hover:border-white/40'
              >
                Get Custom Solution
<section className='py-16 bg-gray-900/50'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
            <h2 className='text-3xl font-bold text-white mb-6'>;
            </h2>;
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>;
              Explore our complete portfolio of micro SaaS services to find the;
              perfect solution for your business needs.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <Button;
                href='/services';
                variant='primary';
                size='lg';
                className='shadow-2xl shadow-blue-500/25';
              >;
                View All Services;
              </Button>;
              <Button;
href='/contact';
                variant='outline';
                size='lg';
                className='border-white/20 text-white hover:border-white/40';
              >;
                Get Custom Solution;
              </Button>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  );

}
  )}<Button;
import Head from 'next / head';
import { use_router } from 'next / router';
import { getServiceById } from '../../data / micro - saas - services';
import ServiceDetail from '../../components / sections / ServiceDetail';
import Button from '../../components / ui / Button';
export default /**;
 * ServiceDetailPage - Function description;
 */;
function ServiceDetailPage() {const router = use_router ()const { id }  = router.query;// Check condition;
if ( {) {$2;
}
    return (<div className='min - h-screen bg - black flex items - center justify - center'>;
        <div className='text - center'>;
          <h1 className='text - 2xl font - bold text - white mb - 4'>;
            Service Not Found;
          </h1>;
          <p className='text - gray - 400 mb - 6'>;
            The requested service could not be found.;
          </p>;
          <Button href='/services' variant='primary'>;
            <ArrowLeft className='w - 4 h - 4 mr - 2' />            Back to Services      <div className="min - h-screen bg - black flex items-center justify-center">;
        <div className="text-center">;
          <h1 className="text - 2xl font - bold text-white mb-4">Service Not Found</h1>;
          <p className="text - gray-400 mb-6">The requested service could not be found.</p>;
          <Button href="/services" variant="primary">;
            <ArrowLeft className="w - 4 h-4 mr-2" />;
          </Button>;
        </div>;
      </div>)}
  const service  = getServiceById (id)// Check condition;
if ( {) {$2;
}
    return (<div className='min - h-screen bg - black flex items - center justify - center'>;
        <div className='text - center'>;
          <h1 className='text - 2xl font - bold text - white mb - 4'>;
            Service Not Found;
          </h1>;
          <p className='text - gray - 400 mb - 6'>;
            The requested service "{id}" could not be found.;
          </p>;
          <Button href='/services' variant='primary'>;
            <ArrowLeft className='w - 4 h - 4 mr - 2' />            Back to Services;
          </Button>;
        </div>;
      </div>)}      <div className="min - h-screen bg - black flex items-center justify-center">;
        <div className="text-center">;
          <h1 className="text - 2xl font - bold text-white mb-4">Service Not Found</h1>;
          <p className="text - gray-400 mb-6">The requested service "{id}" could not be found.</p>;
          <Button href="/services" variant="primary">;
            <ArrowLeft className="w - 4 h-4 mr-2" />;
          </Button>;
        </div>;
      </div>))}
  return (<>;
      <Head>;
        <title>{service.name} | Zion Tech Group - Micro SaaS Services</title>;
        <meta name='description' content={service.description} />;
        <meta;
          property='og:title';
          content={`${service.name} | Zion Tech Group`}
        />;
        <meta property='og:description' content={service.description} />;
        <meta name='twitter:card' content='summary_large_image' />;
      </Head>;
      <div className='min - h-screen bg - black'>;
        {/* Navigation */}
        <nav className='border - b border - gray - 800 bg - black / 50 backdrop - blur - sm sticky top - 0 z - 50'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='flex items - center justify - between h - 16'>;
              <Button;
                href='/services';
                variant='ghost';
                size='sm';
                className='text - gray - 400 hover:text - white';
              >;
                <ArrowLeft className='w - 4 h - 4 mr - 2' />                Back to Services;
              </Button>;
              <Button;
                href={service.website}
                variant='primary';
                size='sm';
                icon={<ExternalLink className='w - 4 h - 4' />}              >      </Head>;
      <div className="min-h-screen bg-black">;
        {/* Navigation */}
        <nav className="border - b border - gray - 800 bg - black / 50 backdrop - blur - sm sticky top-0 z-50">;
          <div className="max - w-7xl mx - auto px - 4 sm:px-6 lg:px-8">;
            <div className="flex items - center justify-between h-16">;
              <Button;
                href="/services";
                variant="ghost";
                size="sm";
                className="text - gray-400 hover:text-white";
              >;
                <ArrowLeft className="w - 4 h-4 mr-2" />;
                Back to Services;
              </Button>;
              <Button;
                href={service.website}
                variant='primary';
                size='sm';
                icon={<ExternalLink className='w - 4 h - 4' />}                variant="primary";
                size="sm";
                icon={<ExternalLink className="w-4 h-4" />}
=======
<<<<<<< HEAD
                icon={<ExternalLink className='w - 4 h - 4' />}                variant="primary";
                size="sm";
                icon={<ExternalLink className="w-4 h-4" />}
=======
                href={service.website}'
                variant='primary';'
                size='sm';'
                icon={<ExternalLink className='w - 4 h - 4' />}              >      </Head>;"
      <div className="min - h-screen bg - black">;
        {/* Navigation */}"
        <nav className="border - b border - gray - 800 bg - black / 50 backdrop - blur - sm sticky top - 0 z - 50">;"
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;"
            <div className="flex items - center justify - between h - 16">;
              <Button;"
                href="/services";"
                variant="ghost";"
                size="sm";"
                className="text - gray - 400 hover:text - white";
              >;"
                <ArrowLeft className="w - 4 h - 4 mr - 2" />;
                Back to Services;
              </Button>;
              <Button;
                href={service.website}'
                variant='primary';'
                size='sm';'"
                icon={<ExternalLink className='w - 4 h - 4' />}                variant="primary";"
                size="sm";"
                icon={<ExternalLink className="w - 4 h - 4" />}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
                icon={<ExternalLink className='w-4 h-4' />}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              >;
                Visit Service;
              </Button>;
            </div>;
          </div>;
        </nav>;
        {/* Service Detail Content */}
        <ServiceDetail service={service} />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
        {/* Related Services CTA */}'
        <section className='py - 16 bg - gray - 900 / 50'>;'
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;'
            <h2 className='text - 3xl font - bold text - white mb - 6'>;
            </h2>;'
            <p className='text - gray - 400 mb - 8 max - w-2xl mx - auto'>;
              Explore our complete portfolio of micro SaaS services to find the;
              perfect solution for your business needs.;
            </p>;'
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Button;'
                href='/services';'
                variant='primary';'
                size='lg';'
                className='shadow - 2xl shadow - blue - 500 / 25'              >;
=======
        {/* Service Detail Content */}
        <ServiceDetail service={service} />;{/* Related Services CTA */}
        <section className='py-16 bg-gray-900/50' />;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center' />;
            <h2 className='text-3xl font-bold text-white mb-6' />;
            </h2>;
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto' />;
              Explore our complete portfolio of micro SaaS services to find the;
              perfect solution for your business needs.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center' />;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        {/* Related Services CTA */}
        <section className='py - 16 bg - gray - 900 / 50'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
            <h2 className='text - 3xl font - bold text - white mb - 6'>;
            </h2>;
            <p className='text - gray - 400 mb - 8 max - w-2xl mx - auto'>;
              Explore our complete portfolio of micro SaaS services to find the;
              perfect solution for your business needs.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Button;
                href='/services';
                variant='primary';
                size='lg';
<<<<<<< HEAD
                className='shadow - 2xl shadow - blue - 500 / 25'              >;
=======
                className='shadow-2xl shadow-blue-500/25' />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                View All Services;
              </Button>;
<<<<<<< HEAD
              <Button;
                href='/contact';
                variant='outline';
                size='lg';
<<<<<<< HEAD
                className='border - white / 20 text - white hover:border - white / 40'              >                href="/services";
                variant="primary";
                size="lg";
                className="shadow - 2xl shadow-blue-500 / 25";
=======
        {/* Related Services CTA */}

<section className='py-16 bg-gray-900/50' />
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center' />
            <h2 className='text-3xl font-bold text-white mb-6' />
            </h2>
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto' />
              Explore our complete portfolio of micro SaaS services to find the;
perfect solution for your business needs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center' />
              <Button;
<<<<<<< HEAD
                href='/contact';
                variant='outline';
                size='lg';
                className='border - white / 20 text - white hover:border - white / 40'                href="/contact";
                variant="outline";
                size="lg";
                className="border - white / 20 text-white hover:border-white / 40";
=======
              <Button;'
                href='/contact';'
                variant='outline';'
                size='lg';'"
                className='border - white / 20 text - white hover:border - white / 40'              >                href="/services";"
                variant="primary";"
                size="lg";"
                className="shadow - 2xl shadow - blue - 500 / 25";
                View All Services;
              </Button>;
              <Button;'
                href='/contact';'
                variant='outline';'
                size='lg';'"
                className='border - white / 20 text - white hover:border - white / 40'                href="/contact";"
                variant="outline";"
                size="lg";"
                className="border - white / 20 text - white hover:border - white / 40";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
href='/services'
                variant='primary'
                size='lg'
                className='shadow-2xl shadow-blue-500/25'
               />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                View All Services;
              </Button>;
              <Button;
<<<<<<< HEAD
                href='/contact';
                variant='outline';
                size='lg';
                className='border - white / 20 text - white hover:border - white / 40'                href="/contact";
                variant="outline";
                size="lg";
                className="border - white / 20 text-white hover:border-white / 40";
=======
href='/contact'
                variant='outline'
                size='lg'

                className='border-white/20 text-white hover:border-white/40'
               />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                Get Custom Solution;
              </Button>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>);
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
}
'"`
=======
    </>;

  );
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

}
    </>)}
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:border-white/40"
              >
                Get Custom Solution
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
=======
            <h2 className='text-3xl font-bold text-white mb-6'>
            </h2>'
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
              Explore our complete portfolio of micro SaaS services to find the
              perfect solution for your business needs.
            </p>'
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>

<<<<<<< HEAD
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
<<<<<<< HEAD

"
=======
Back to Services </Button> </div> </div> Back to Services </Button> </div> </div>) 
}return (<> <Head> <Button href="/services" variant="ghost" size="sm" className="text-gray-400 hover:text-white" > <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services </Button> <Button > Visit Service </Button> </div> </div> </nav> {
  /* Service Detail Content */ 
}<ServiceDetail service= {
  service 
}/> <section className="py-16 bg-gray-900/50"> <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"> <h2 className="text-3xl font-bold text-white mb-6"> text-gray-400 mb-8 max-w-2xl mx-auto"> Explore our complete portfolio of micro SaaS services to find the perfect solution for your business needs. </p> <div className=" flex flex-col sm:flex-row gap-4 justify-center"> <Button href=" /services"variant=" primary"size=" lg"className=" shadow-2xl shadow-blue-500/25"> View All Services </Button> <Button href=" /contact"variant=" outline"size=" lg"className=" border-white/20 text-white hover:border-white/40" > Get Custom Solution </Button> </div> </div> </section> </div> </>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
