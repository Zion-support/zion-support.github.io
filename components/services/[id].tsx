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
            Back to Services
          </Button>
        </div>
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
<<<<<<< HEAD
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getServiceById } from '../../data/micro-saas-services';
import ServiceDetail from '../../components/sections/ServiceDetail';
import Button from '../../components/ui/Button';
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
  if (!id || typeof id !== 'string') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
import React from 'react',
import React from 'react';
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react';
import Head from 'next/head';
=======
import Head from 'next/head';

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
import { useRouter  } from 'next/router';
import { getServiceById  } from '../../data/micro-saas-services';
import ServiceDetail from '../../components/sections/ServiceDetail';,
import Button from '../../components/ui/Button';
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
export default function ServiceDetailPage() {

export default function ServiceDetailPage() {;

export default function ServiceDetailPage() {

if (!id || typeof id !== 'string') {
    return (
      <div className='min-h-screen bg-black flex items-center justify-center'    />
        <div className='text-center'    />
          <h1 className='text-2xl font-bold text-white mb-4'    />
            Service Not Found;
          </h1>
          <p className='text-gray-400 mb-6'    />
            The requested service could not be found.
          </p>
          <Button href='/services' variant='primary'    />
            <ArrowLeft className='w-4 h-4 mr-2'    />
            Back to Services;
          </Button>
        </div>
      </div>}
    );}
  }

<<<<<<< HEAD
  if (!service) {;
    return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import Head from 'next/head';
import { useRouter  } from 'next/router';
import { getServiceById  } from '../../data/micro-saas-services';
import ServiceDetail from '../../components/sections/ServiceDetail',
import ServiceDetail from '../../components/sections/ServiceDetail';;
import Button from '../../components/ui/Button';
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import { ArrowLeft, ExternalLink } from 'lucide-react';
export default function ServiceDetailPage() {
  const router = useRouter($2);
  const { id } = router.query,
  
  if (!id || typeof id !== 'string') {
<<<<<<< HEAD
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
=======
if (!id || typeof id !== 'string') {
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import {ArrowLeft, ExternalLink} from 'lucide-react';


  const router = useRouter();
  const { id } = router.query;

<<<<<<< HEAD
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {ArrowLeft, ExternalLink} from 'lucide-react';

export default function ServiceDetailPage() {

<<<<<<< HEAD
=======
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

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function ServiceDetailPage() {;

export default function ServiceDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  if (!id |typeof id !== 'string') {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return (
<<<<<<< HEAD
      <div className='min-h-screen bg-black flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-white mb-4'>
            Service Not Found
          </h1>
          <p className='text-gray-400 mb-6'>
            The requested service could not be found.
          </p>
          <Button href='/services' variant='primary'>
            <ArrowLeft className='w-4 h-4 mr-2' />            Back to Services      <div className="min-h-screen bg-black flex items-center justify-center">
=======
      <div className="min-h-screen bg-black flex items-center justify-center">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-6">The requested service could not be found.</p>
          <Button href="/services" variant="primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
<<<<<<< HEAD
=======
<<<<<<< HEAD
          </Button>
        </div>
      </div>
=======
>>>>>>> merged-prs-20250907-203621
            Back to Services
          </Button>
        </div>
      </div>
<<<<<<< HEAD
    )
  }

  const service = getServiceById($2);
  if (!service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
=======
<<<<<<< HEAD
    )
  }

          content={`${service.name} | Zion Tech Group,`
} />;
        <meta property='"og": description' content={service.descriptio,'
} />;
        <meta name='"twitter":card' content='summary_large_image' />;'
      </Head>;
      <div className='min-h-screen bg-black'>;'
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    );
  }
  const service = getServiceById(id);
  if (!service) {;
    return (
<<<<<<< HEAD
      <div className='min-h-screen bg-black flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-white mb-4'>
            Service Not Found
          </h1>
          <p className='text-gray-400 mb-6'>
            The requested service "{id}" could not be found.
          </p>
          <Button href='/services' variant='primary'>
            <ArrowLeft className='w-4 h-4 mr-2' />            Back to Services
          </Button>
        </div>
      </div>
    );  }      <div className="min-h-screen bg-black flex items-center justify-center">
>>>>>>> merged-prs-20250907-203621
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-6">The requested service "{id}" could not be found.</p>
          <Button href="/services" variant="primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            Back to Services
          </Button>
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

<<<<<<< HEAD
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
=======
  return (
    <>
      <Head>
        <title>{service.name} | Zion Tech Group - Micro SaaS Services</title>
        <meta name="description" content={service.description} />
        <meta property="og:title" content={`${service.name} | Zion Tech Group`} />
        <meta property="og:description" content={service.description} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

=======
          </Button>
        </div>
      </div>
    );    )
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  return (
<<<<<<< HEAD
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
=======

          content={`${service && service.name} | Zion Tech Group`}
        />;
        <meta property='og:description' content={service && service.description} />;
        <meta name='twitter:card' content='summary_large_image' />;
      </Head>;

      <div className='min-h-screen bg-black'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Navigation */}
        <nav className='border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Button
                href='/services'
                variant='ghost'
              <Button'
                href='/services''
                variant='ghost''
                size='sm'
<<<<<<< HEAD
              <Button"
                href="/services""
                variant="ghost""
                size="sm""
                className="text-gray-400 hover:text-white"
              >"
                <ArrowLeft className="w-4 h-4 mr-2" />
                className='text-gray-400 hover:text-white'
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              >
                <ArrowLeft className='w-4 h-4 mr-2' />'
                Back to Services
              </Button>
<<<<<<< HEAD
              <Button,
href={service.websit
}
variant='primary';'
                size='sm';'
                icon={<ExternalLink className='w-4 h-4' />}'
              >;
=======
              <Button
                href={service.website}
variant='primary'
                size='sm'
                icon={<ExternalLink className='w-4 h-4' />}
                Back to Services;
              </Button>
              <Button;
                href={service.website}'
                variant='primary''
                size='sm''"
                icon={<ExternalLink className='w-4 h-4' />}                variant="primary""
                size="sm""
                icon={<ExternalLink className="w-4 h-4" />}
              >
              >
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                Visit Service;
=======
                className='text-gray-400 hover:text-white'
              >
                <ArrowLeft className='w-4 h-4 mr-2' />                Back to Services
              </Button>
              <Button
                href={service.website}
                variant='primary'
                size='sm'
<<<<<<< HEAD
                icon={<ExternalLink className='w-4 h-4' />}              >      </Head>
      <div className="min-h-screen bg-black">
=======


                icon={<ExternalLink className='w-4 h-4' />}              >      </Head>;

      <div className="min-h-screen bg-black">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Navigation */}
        <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Button
                href="/services"
                variant="ghost"
                size="sm"
<<<<<<< HEAD
                className="text-gray-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
              <Button
                href={service.website}
                variant='primary'
                size='sm'
                icon={<ExternalLink className='w-4 h-4' />}                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Visit Service
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </Button>
            </div>
        </nav>
<<<<<<< HEAD
        {/* Service Detail Content */}
        <ServiceDetail service={service} />
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        {/* Service Detail Content */}
        <ServiceDetail service={service} />;
<<<<<<< HEAD
        {/* Service Detail Content */}
        <ServiceDetail service={service} />;{/* Related Services CTA */}
        <section className='py-16 bg-gray-900/50'>;'
          <div className='max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 text-center'>;'
            <h2 className='text-3xl font-bold text-white mb-6'>;'
=======


        {/* Related Services CTA */}
        <section className='py-16 bg-gray-900/50'>
<<<<<<< HEAD
          <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>'
            <h2 className=text-3xl font-bold text-white mb-6>
            </h2>'
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto>
              Explore our complete portfolio of micro SaaS services to find the;
              perfect solution for your business needs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        {/* Related Services CTA */}
        <section className=py-16 bg-gray-900/50'>;'
          <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center>;'
            <h2 className='text-3xl font-bold text-white mb-6>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
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

=======
              <Button'
                href='/contact''
                variant='outline''
                size='lg'
        {/* Related Services CTA */}
<section className='py-16 bg-gray-900/50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-bold text-white mb-6'>
            </h2>'
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
              Explore our complete portfolio of micro SaaS services to find the;
              perfect solution for your business needs.
            </p>'
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
=======
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-bold text-white mb-6'>


              Looking for Something Else?

            </h2>
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
              Explore our complete portfolio of micro SaaS services to find the
              perfect solution for your business needs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Button
                href='/services'
                variant='primary'
                size='lg'
<<<<<<< HEAD
                className='shadow-2xl shadow-blue-500/25'
              >
=======
                className='shadow-2xl shadow-blue-500/25'>;
                View All Services;
              </Button>;
              <Button
                href='/contact'
                variant='outline'
                size='lg'

                className='border-white/20 text-white hover:border-white/40'              >                href="/services"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-blue-500/25"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                View All Services
              </Button>
              <Button,
href='/contact''
variant='outline';'
                size='lg''

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                className='border-white/20 text-white "hover":border-white/40''
              >
origin/cursor/automate-test-improve-and-merge-code-2533
                Get Custom Solution
<<<<<<< HEAD
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </Button>;
            </div>;
        </section>;
      </div>;
    </>;
  );

}
;
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
        </div>;
      </div>);  }      <div className="min - h-screen bg - black flex items-center justify-center">;
        <div className="text-center">;
          <h1 className="text - 2xl font - bold text-white mb-4">Service Not Found</h1>;
          <p className="text - gray-400 mb-6">The requested service "{id}" could not be found.</p>;
          <Button href="/services" variant="primary">;
            <ArrowLeft className="w - 4 h-4 mr-2" />;
          </Button>;
        </div>;
      </div>));
  }
  return (
    <>;
      <Head>;
        <title>{service.name} | Zion Tech Group - Micro SaaS Services</title>;'
        <meta name='description' content={service.description} />;
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

<<<<<<< HEAD
import {ArrowLeft, ExternalLink} from 'lucide-react';
=======

<<<<<<< HEAD
import {ArrowLeft, ExternalLink} from 'lucide-react;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
)}
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
<<<<<<< HEAD
      <div className='min-h-screen bg-black'>;
        {/* Navigation */}
    );
=======
      <div className='min-h-screen bg-black>;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
const service = getServiceById(id);
  if (!service) {
    return (
<div className='min-h-screen bg-black flex items-center justify-center'    />
        <div className='text-center'    />
          <h1 className='text-2xl font-bold text-white mb-4'    />
            Service Not Found;
          </h1>}
          <p className='text-gray-400 mb-6'    />}
            The requested service \"{id}\" could not be found.
          </p>
          <Button href='/services' variant='primary'    />
            <ArrowLeft className='w-4 h-4 mr-2'    />
            Back to Services;
          </Button>
        </div>
      </div>
);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
  return (
    <>
      <Head><title>{service.name} | Zion Tech Group - Micro SaaS Services</title>
<meta name='description' content={service.description}    />
        <meta;
property='og: title'

<<<<<<< HEAD
  if (!service) {;
=======
          content={`${service.name} | Zion Tech Group
}
           />;
        <meta property='og: description' content={service.descriptio}
}    />;
        <meta name='twitter:card' content='summary_large_image'    />;
      </Head>;
      <div className='min-h-screen bg-black'    />;
>>>>>>> origin/chore/fix-lint-and-merge
        {/* Navigation */}

<<<<<<< HEAD
  if (!service) {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <nav className='border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='flex items-center justify-between h-16'>;
                Back to Services;
              </Button>
              <Button;
                href='/services';
                variant='ghost';
                size='sm';
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
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
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
=======
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
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Service Detail Content */}
        <ServiceDetail service={service} />

        {/* Service Detail Content */}
        <ServiceDetail service={service} />

        {/* Related Services CTA */}
        <section className='py-16 bg-gray-900/50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-bold text-white mb-6'>

              Looking for Something Else?
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
                className='shadow-2xl shadow-blue-500/25'              >
                View All Services
              </Button>
              <Button
                href='/contact'
                variant='outline'
                size='lg'
                className='border-white/20 text-white hover:border-white/40'              >                href="/services"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-blue-500/25"
              >
                View All Services
              </Button>
              <Button
<<<<<<< HEAD
=======
<<<<<<< HEAD

                className='border-white/20 text-white hover:border-white/40'
              >
=======
href="/contact"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:border-white/40"
<<<<<<< HEAD
=======
<<<<<<< HEAD
              >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
}
=======

=======
<<<<<<< HEAD
        <nav className='border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50'    />
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'    />
            <div className='flex items-center justify-between h-16'    />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import Head from 'next / head';
import {use_router} from 'next / router';
import {getServiceById} from '../../data / micro - saas - services';
import ServiceDetail from '../../components / sections / ServiceDetail';
import Button from '../../components / ui / Button';
import {ArrowLeft, ExternalLink} from 'lucide-react';
export default /**
 * ServiceDetailPage - Function description
 */
function ServiceDetailPage() {
  const router = use_router ();
  const { id } = router.query;
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='min - h-screen bg - black flex items - center justify - center'>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <div className='text - center'>;
          <h1 className='text - 2xl font - bold text - white mb - 4'>;
            Service Not Found;
          </h1>;
          <p className='text - gray - 400 mb - 6'>;
            The requested service could not be found.;
          </p>;
          <Button href='/services' variant='primary'>;
<<<<<<< HEAD
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
=======
            <ArrowLeft className='w - 4 h - 4 mr - 2' />            Back to Services      <div className="min - h-screen bg - black flex items - center justify - center">;
        <div className="text - center">;
          <h1 className="text - 2xl font - bold text - white mb - 4">Service Not Found</h1>;
          <p className="text - gray - 400 mb - 6">The requested service could not be found.</p>;
          <Button href="/services" variant="primary">;
            <ArrowLeft className="w - 4 h - 4 mr - 2" />;
          </Button>;
        </div>;
      </div>);
  }
  const service = getServiceById (id);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='min - h-screen bg - black flex items - center justify - center'>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
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
=======
      </div>);  }      <div className="min - h-screen bg - black flex items - center justify - center">;
        <div className="text - center">;
          <h1 className="text - 2xl font - bold text - white mb - 4">Service Not Found</h1>;
          <p className="text - gray - 400 mb - 6">The requested service "{id}" could not be found.</p>;
          <Button href="/services" variant="primary">;
            <ArrowLeft className="w - 4 h - 4 mr - 2" />;
          </Button>;
        </div>;
      </div>));
  }
  return (
    <>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
              <Button;
                href='/services';
                variant='ghost';
                size='sm';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Button;
href='/services'
                variant='ghost'
                size='sm'

                className='text-gray-400 hover:text-white'
                  />
                <ArrowLeft className='w-4 h-4 mr-2'    />
                Back to Services;
              </Button>
              <Button;
href={service.websit}
>>>>>>> origin/chore/fix-lint-and-merge
}
variant='primary';
                size='sm';
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
                icon={<ExternalLink className='w-4 h-4' />}
=======
                icon={<ExternalLink className='w - 4 h - 4' />}                variant="primary";
                size="sm";
                icon={<ExternalLink className="w-4 h-4" />}
                icon={<ExternalLink className='w-4 h-4' />}
=======
                icon={<ExternalLink className='w-4 h-4'    />}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              >;
                Visit Service;
              </Button>;
            </div>;
        </nav>;
        {/* Service Detail Content */}
<<<<<<< HEAD
        <ServiceDetail service={service} />;
<<<<<<< HEAD
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
=======
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
        <ServiceDetail service={service}    />;
        {/* Service Detail Content */}
        <ServiceDetail service={service}    />;{/* Related Services CTA */}
        <section className='py-16 bg-gray-900/50'    />;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'    />;
            <h2 className='text-3xl font-bold text-white mb-6'    />;
            </h2>;
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'    />;
              Explore our complete portfolio of micro SaaS services to find the;
              perfect solution for your business needs.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'    />;
>>>>>>> origin/chore/fix-lint-and-merge
        {/* Related Services CTA */}
        <section className='py-16 bg-gray-900/50'    />;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'    />;
            <h2 className='text-3xl font-bold text-white mb-6'    />;
            </h2>;
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'    />;
              Explore our complete portfolio of micro SaaS services to find the;
              perfect solution for your business needs.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'    />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <Button;
                href='/services';
                variant='primary';
                size='lg';
<<<<<<< HEAD
                className='shadow - 2xl shadow - blue - 500 / 25'              >;
                View All Services;
              </Button>;
              <Button;
                href='/contact';
                variant='outline';
                size='lg';
                className='border - white / 20 text - white hover:border - white / 40'              >                href="/services";
                variant="primary";
                size="lg";
                className="shadow - 2xl shadow-blue-500 / 25";
href='/services'
                variant='primary'
                size='lg'
                className='shadow-2xl shadow-blue-500/25'
               />
=======
<<<<<<< HEAD
                className='shadow - 2xl shadow - blue - 500 / 25'              >;
=======
                className='shadow-2xl shadow-blue-500/25'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                View All Services;
              </Button>;
              <Button;
                href='/contact';
                variant='outline';
                size='lg';
<<<<<<< HEAD
                className='border - white / 20 text - white hover:border - white / 40'              >                href="/services";
                variant="primary";
                size="lg";
                className="shadow - 2xl shadow-blue-500 / 25";
                href='/contact';
                variant='outline';
                size='lg';
                className='border - white / 20 text - white hover:border - white / 40'                href="/contact";
                variant="outline";
                size="lg";
                className="border - white / 20 text-white hover:border-white / 40";
=======
        {/* Related Services CTA */}

<section className='py-16 bg-gray-900/50'    />
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'    />
            <h2 className='text-3xl font-bold text-white mb-6'    />
            </h2>
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'    />
              Explore our complete portfolio of micro SaaS services to find the;
perfect solution for your business needs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'    />
              <Button;
>>>>>>> origin/chore/fix-lint-and-merge
href='/services'
                variant='primary'
                size='lg'
                className='shadow-2xl shadow-blue-500/25'
<<<<<<< HEAD
                View All Services;
              </Button>;

href='/services
                variant=primary'
                size='lg
                className=shadow-2xl shadow-blue-500/25'
               />
=======
                  />
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                View All Services;
              </Button>
              <Button;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                href='/contact';
                variant='outline';
                size='lg';
                className='border - white / 20 text - white hover:border - white / 40'                href="/contact";
                variant="outline";
                size="lg";
                className="border - white / 20 text-white hover:border-white / 40";
<<<<<<< HEAD
=======
=======
href='/contact'
                variant='outline'
                size='lg'

                className='border-white/20 text-white hover:border-white/40'
                  />
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                Get Custom Solution;
              </Button>;
            </div>;
        </section>;
      </div>;
<<<<<<< HEAD
    </>);
<<<<<<< HEAD
=======
}
<<<<<<< HEAD
'"`
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}
    </>)}
>>>>>>> merged-prs-20250907-203621
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:border-white/40"
              >
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                Get Custom Solution
              </Button>
            </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
  )
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

"
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <h2 className='text-3xl font-bold text-white mb-6'>
            </h2>'
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
              Explore our complete portfolio of micro SaaS services to find the
              perfect solution for your business needs.
            </p>'
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>

              </Button>
            </div>
<<<<<<< HEAD
=======
          </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        </section>
      </div>
    </>
  );
}

"
<<<<<<< HEAD
=======
"
=======
    <   />;

  );

}

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
  );
}
              <Button
;
              <Button
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
