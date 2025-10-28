

export const metadata = {
  title: 'Legal Document Manager | Zion Tech Group',
  description: 'AI-powered legal document management solutions',
  keywords: 'legal documents, AI, document management, legal tech',
  openGraph: {
    title: 'Legal Document Manager | Zion Tech Group',
    description: 'AI-powered legal document management solutions',
    type: 'website',
  },
};
function LegaldocumentmanagerPage() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Legal Document Manager
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              AI-powered legal document management solutions for modern law firms
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default function Wrapped(props: { [key: string]: unknown }) {
  return (
    <ErrorBoundary>
      <LegaldocumentmanagerPage {...props} />
    </ErrorBoundary>
  );
}
=======

