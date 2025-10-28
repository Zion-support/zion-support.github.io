import Navigation from '../components/Navigation';


export const metadata = {
  title: 'Ecommerce Analytics Pro | Zion Tech Group',
  description: 'Professional ecommerce analytics pro services by Zion Tech Group. Advanced AI and technology solutions.',
  keywords: 'ecommerce analytics pro, technology, services, AI, automation',
  openGraph: {
    title: 'Ecommerce Analytics Pro | Zion Tech Group',
    description: 'Professional ecommerce analytics pro services by Zion Tech Group.',
    type: 'website',
  },
};
function EcommerceanalyticsproPage() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              E-commerce Analytics Pro
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Advanced analytics solutions for e-commerce businesses powered by AI
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EcommerceanalyticsproPage;
