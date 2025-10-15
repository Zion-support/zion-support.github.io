import SEOHead from '../components/SEOHead';

const DocumentationPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Documentation - Zion Tech Group"
        description="Technical documentation and guides"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default DocumentationPage;