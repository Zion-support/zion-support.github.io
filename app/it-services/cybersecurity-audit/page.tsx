import Navigation from '../components/Navigation';


export const metadata = {
  title: 'Cybersecurity Audit | Zion Tech Group',
  description: 'Professional cybersecurity audit services by Zion Tech Group. Advanced AI and technology solutions.',
  keywords: 'cybersecurity audit, technology, services, AI, automation',
  openGraph: {
    title: 'Cybersecurity Audit | Zion Tech Group',
    description: 'Professional cybersecurity audit services by Zion Tech Group.',
    type: 'website',
  },
};
function CybersecurityauditPage() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Cybersecurity Audit
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Comprehensive cybersecurity audit services to protect your business
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CybersecurityauditPage;
