
<<<<<<< HEAD
<<<<<<< HEAD
  if (!id || typeof id !== 'string') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
import React from 'react',
import React from 'react';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
import React from 'react';
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next/head';
import { useRouter  } from 'next/router';
import { getServiceById  } from '../../data/micro-saas-services';
import ServiceDetail from '../../components/sections/ServiceDetail',
import Button from '../../components/ui/Button';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
import { ArrowLeft, ExternalLink } from 'lucide-react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {ArrowLeft, ExternalLink} from 'lucide-react';


  const router = useRouter();
  const { id } = router.query;

<<<<<<< HEAD
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
=======
import {ArrowLeft, ExternalLink} from 'lucide-react';

export default function ServiceDetailPage() {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const router = useRouter();
  const { id } = router.query;
  if (!id |typeof id !== 'string') {
    return (
<<<<<<< HEAD
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
=======
      <div className="min-h-screen bg-black flex items-center justify-center">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-6">The requested service could not be found.</p>
          <Button href="/services" variant="primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
<<<<<<< HEAD
<<<<<<< HEAD
          </Button>
        </div>
      </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Back to Services
          </Button>
        </div>
      </div>

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
  }
  const service = getServiceById(id);
  if (!service) {;
    return (
<<<<<<< HEAD
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
=======


  }
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          content={`${service && service.name} | Zion Tech Group`}
        />;
        <meta property='og:description' content={service && service.description} />;
        <meta name='twitter:card' content='summary_large_image' />;
      </Head>;

      <div className='min-h-screen bg-black'>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                <ArrowLeft className='w-4 h-4 mr-2' />                Back to Services
              </Button>
              <Button
                href={service.website}
                variant='primary'
                size='sm'
<<<<<<< HEAD
<<<<<<< HEAD
                icon={<ExternalLink className='w-4 h-4' />}              >      </Head>
      <div className="min-h-screen bg-black">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


                icon={<ExternalLink className='w-4 h-4' />}              >      </Head>;

      <div className="min-h-screen bg-black">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Navigation */}
        <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Button
                href="/services"
                variant="ghost"
                size="sm"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              </Button>
            </div>
          </div>
        </nav>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
        {/* Service Detail Content */}
        <ServiceDetail service={service} />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        {/* Service Detail Content */}
        <ServiceDetail service={service} />;



<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Related Services CTA */}
        <section className='py-16 bg-gray-900/50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-bold text-white mb-6'>

<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              Looking for Something Else?

            </h2>
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
              Explore our complete portfolio of micro SaaS services to find the
              perfect solution for your business needs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                className='border-white/20 text-white hover:border-white/40'              >                href="/services"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-blue-500/25"
                View All Services
              </Button>
<<<<<<< HEAD

              <Button


<<<<<<< HEAD
=======
=======
              <Button


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Service Detail Content */}
        <ServiceDetail service={service} />
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
              <Button
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
                Get Custom Solution
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

}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        <div className='text - center'>;
          <h1 className='text - 2xl font - bold text - white mb - 4'>;
            Service Not Found;
          </h1>;
          <p className='text - gray - 400 mb - 6'>;
            The requested service could not be found.;
          </p>;
          <Button href='/services' variant='primary'>;
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
      <div className="min - h-screen bg - black">;
        {/* Navigation */}
        <nav className="border - b border - gray - 800 bg - black / 50 backdrop - blur - sm sticky top - 0 z - 50">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <div className="flex items - center justify - between h - 16">;
              <Button;
                href="/services";
                variant="ghost";
                size="sm";
                className="text - gray - 400 hover:text - white";
              >;
                <ArrowLeft className="w - 4 h - 4 mr - 2" />;
                Back to Services;
              </Button>;
              <Button;
                href={service.website}
                variant='primary';
                size='sm';
                icon={<ExternalLink className='w - 4 h - 4' />}                variant="primary";
                size="sm";
                icon={<ExternalLink className="w - 4 h - 4" />}
              >;
                Visit Service;
              </Button>;
            </div>;
          </div>;
        </nav>;
        {/* Service Detail Content */}
        <ServiceDetail service={service} />;
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
                className="shadow - 2xl shadow - blue - 500 / 25";
                View All Services;
              </Button>;
              <Button;
                href='/contact';
                variant='outline';
                size='lg';
                className='border - white / 20 text - white hover:border - white / 40'                href="/contact";
                variant="outline";
                size="lg";
                className="border - white / 20 text - white hover:border - white / 40";
                Get Custom Solution;
              </Button>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>);
}
<<<<<<< HEAD
<<<<<<< HEAD
                Get Custom Solution
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
              <Button
;
              <Button
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
