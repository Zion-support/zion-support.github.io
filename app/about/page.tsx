import ErrorBoundary from '../components/ErrorBoundary'

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

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <ErrorBoundary>
      <AboutPage {...props} />
    </ErrorBoundary>
  );
}