import React from 'react',
import Head from 'next/head',
import { useRouter } from 'next/router',
import { getServiceById } from '../../data/micro-saas-services',
import ServiceDetail from '../../components/sections/ServiceDetail',
import Button from '../../components/ui/Button',
import { ArrowLeft, ExternalLink } from 'lucide-react',

export default function ServiceDetailPage() {
  const router = useRouter(),
  const { id } = router.query,
  
  if (!id || typeof id !== 'string') {
    return (
      <div className=&quot;min-h-screen bg-black flex items-center justify-center&quot;>
        <div className=&quot;text-center&quot;>
          <h1 className=&quot;text-2xl font-bold text-white mb-4&quot;>Service Not Found</h1>
          <p className=&quot;text-gray-400 mb-6&quot;>The requested service could not be found.</p>
          <Button href=&quot;/services&quot; variant=&quot;primary&quot;>
            <ArrowLeft className=&quot;w-4 h-4 mr-2&quot; />            Back to Services
          </Button>
        </div>
      </div>
    )
  }

  const service = getServiceById(id),

  if (!service) {
    return (
      <div className=&quot;min-h-screen bg-black flex items-center justify-center&quot;>
        <div className=&quot;text-center&quot;>
          <h1 className=&quot;text-2xl font-bold text-white mb-4&quot;>Service Not Found</h1>
          <p className=&quot;text-gray-400 mb-6&quot;>The requested service &quot;{id}&quot; could not be found.</p>
          <Button href=&quot;/services&quot; variant=&quot;primary&quot;>
            <ArrowLeft className=&quot;w-4 h-4 mr-2&quot; />            Back to Services
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{service.name} | Zion Tech Group - Micro SaaS Services</title>
        <meta name=&quot;description&quot; content={service.description} />
        <meta property=&quot;og:title&quot; content={`${service.name} | Zion Tech Group`} />
        <meta property=&quot;og:description&quot; content={service.description} />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

      <div className=&quot;min-h-screen bg-black&quot;>
        {/* Navigation */}
        <nav className=&quot;border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;flex items-center justify-between h-16&quot;>              <Button
                href=&quot;/services&quot;
                variant=&quot;ghost&quot;
                size=&quot;sm&quot;
                className=&quot;text-gray-400 hover:text-white&quot;
              >
                <ArrowLeft className=&quot;w-4 h-4 mr-2&quot; />
                Back to Services
              </Button>
              <Button
                href={service.website}
                variant=&quot;primary&quot;
                size=&quot;sm&quot;
                icon={<ExternalLink className=&quot;w-4 h-4&quot; />}              >
                Visit Service
              </Button>
            </div>
          </div>
        </nav>

        {_/* Service Detail Content */}
        <ServiceDetail service={_service} />

        {/* Related Services CTA */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
        <section className=&quot;py-16 bg-gray-900/50&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
            <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>
              Looking for Something Else?
            </h2>
            <p className=&quot;text-gray-400 mb-8 max-w-2xl mx-auto&quot;>
              Explore our complete portfolio of micro SaaS services to find the perfect solution for your business needs.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button
                href=&quot;/services&quot;
                variant=&quot;primary&quot;
                size=&quot;lg&quot;
                className=&quot;shadow-2xl shadow-blue-500/25&quot;
              >
                View All Services
              </Button>
              <Button
                href=&quot;/contact&quot;
                variant=&quot;outline&quot;
                size=&quot;lg&quot;
                className=&quot;border-white/20 text-white hover:border-white/40&quot;
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
