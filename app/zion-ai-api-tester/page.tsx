import Navigation from '../components/Navigation';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: 'Zion AI API Tester | Zion Tech Group',
  description: 'AI-powered API testing and validation tool',
  keywords: 'API testing, AI, validation, automation, testing tools',
  openGraph: {
    title: 'Zion AI API Tester | Zion Tech Group',
    description: 'AI-powered API testing and validation tool',
    type: 'website',
  },
};

function ZionaiapitesterPage() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI API Tester
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              AI-powered API testing and validation tool for better development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Wrapped(props: { [key: string]: unknown }) {
  return (
    <ErrorBoundary>
      <ZionaiapitesterPage {...props} />
    </ErrorBoundary>
  );
}
