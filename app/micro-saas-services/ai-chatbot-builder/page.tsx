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

function AIChatbotBuilder() {
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default AIChatbotBuilder;
