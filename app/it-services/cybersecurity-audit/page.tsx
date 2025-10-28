  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cybersecurity Audit
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional cybersecurity audit services powered by advanced AI and technology.
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page - Zion Tech Group',
  description: 'Professional services and solutions by Zion Tech Group.',
  keywords: 'technology, services, solutions',
  openGraph: {
    title: 'Page - Zion Tech Group',
    description: 'Professional services and solutions by Zion Tech Group.',
    type: 'website',
  },
};

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Service Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional services and solutions tailored to your needs.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Transform your business with our cutting-edge cybersecurity audit solutions. 
              We provide comprehensive services to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}

  );
}

export default function Wrapped(props: any) {
  return (
    <ErrorBoundary>
      <CybersecurityAuditPage {...props} />
    </ErrorBoundary>
  );
}
export default Page;
