import SEOHead from '../components/SEOHead';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Services - Zion Tech Group"
        description="Comprehensive AI and IT services for modern businesses"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-300">Professional AI and IT solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;