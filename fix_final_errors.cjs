const fs = require('fs');

function fixAboutPage() {
  const content = `import { ErrorBoundary } from '@/components/ErrorBoundary'

export const metadata = {
  title: 'About Us | Zion Tech Group',
  description: 'Learn about Zion Tech Group - Leading provider of AI and IT solutions',
  keywords: 'about, company, AI solutions, IT services, technology',
  openGraph: {
    title: 'About Us | Zion Tech Group',
    description: 'Learn about Zion Tech Group - Leading provider of AI and IT solutions',
    type: 'website',
  },
};

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI solutions and IT services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Wrapped(props) {
  return (
    <ErrorBoundary>
      <AboutPage {...props} />
    </ErrorBoundary>
  );
}`;
  
  fs.writeFileSync('app/about/page.tsx', content);
  console.log('Fixed: app/about/page.tsx');
}

function fixOfflinePage() {
  const content = `import { ErrorBoundary } from '@/components/ErrorBoundary'

export const metadata = {
  title: 'Offline | Zion Tech Group',
  description: 'You are currently offline',
  keywords: 'offline, no internet',
  openGraph: {
    title: 'Offline | Zion Tech Group',
    description: 'You are currently offline',
    type: 'website',
  },
};

function OfflinePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          You're Offline
        </h1>
        <p className="text-xl text-gray-600">
          Please check your internet connection and try again.
        </p>
      </div>
    </div>
  );
}

export default function Wrapped(props) {
  return (
    <ErrorBoundary>
      <OfflinePage {...props} />
    </ErrorBoundary>
  );
}`;
  
  fs.writeFileSync('app/offline/page.tsx', content);
  console.log('Fixed: app/offline/page.tsx');
}

function fixMainPage() {
  const content = `import { ErrorBoundary } from '@/components/ErrorBoundary'
import Link from 'next/link'

export const metadata = {
  title: 'Zion Tech Group - Advanced AI & IT Solutions',
  description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords: 'AI solutions, cybersecurity, cloud computing, digital transformation, technology services',
  openGraph: {
    title: 'Zion Tech Group - Advanced AI & IT Solutions',
    description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.',
    type: 'website',
  },
};

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI & IT Solutions for the Future
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Wrapped(props) {
  return (
    <ErrorBoundary>
      <HomePage {...props} />
    </ErrorBoundary>
  );
}`;
  
  fs.writeFileSync('app/page.tsx', content);
  console.log('Fixed: app/page.tsx');
}

fixAboutPage();
fixOfflinePage();
fixMainPage();

console.log('Fixed all remaining files');
