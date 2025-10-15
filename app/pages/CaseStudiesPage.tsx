import SEOHead from '../components/SEOHead';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Case Studies - Zion Tech Group"
        description="Success stories and client testimonials"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;