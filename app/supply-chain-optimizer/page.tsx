import Navigation from '../components/Navigation';
import ErrorBoundary from '../components/ErrorBoundary';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Supply Chain Optimizer | Zion Tech Group',
  description: 'AI-powered supply chain optimization solutions',
  keywords: 'supply chain, AI, optimization, logistics',
  openGraph: {
    title: 'Supply Chain Optimizer | Zion Tech Group',
    description: 'AI-powered supply chain optimization solutions',
    type: 'website',
  }};
export default function Page() {
  return (
    <ErrorBoundary>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Supply Chain Optimizer
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Optimize your supply chain with AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </ErrorBoundary>
  );
}
