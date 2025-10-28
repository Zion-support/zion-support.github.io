import ErrorBoundary from '../components/ErrorBoundary'

export const metadata = {
  title: 'Legal Document Manager - Zion Tech Group',
  description: 'Professional legal-document-manager services and solutions by Zion Tech Group.',
  keywords: 'legal-document-manager, technology, services, Zion Tech Group',
  openGraph: {
    title: 'Legal Document Manager - Zion Tech Group',
    description: 'Professional legal-document-manager services and solutions by Zion Tech Group.',
    type: 'website',
  },
};

function LegalDocumentManagerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Legal Document Manager
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Professional services by Zion Tech Group.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
          <p className="text-gray-300">
            This service is currently under development. Contact us to learn more about our upcoming services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <ErrorBoundary>
      <LegalDocumentManagerPage {...props} />
    </ErrorBoundary>
  );
}