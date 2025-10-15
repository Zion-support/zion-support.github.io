import SEOHead from '../components/SEOHead';

const LandingPageBuilderPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Landing Page Builder - Zion Tech Group"
        description="Professional landing page builder solutions for modern businesses"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Landing Page Builder</h1>
          <p className="text-gray-300">Professional solutions coming soon...</p>
        </div>
      </div>
    </>
  )
};

export default LandingPageBuilderPage;