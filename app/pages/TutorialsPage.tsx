import SEOHead from '../components/SEOHead';

const TutorialsPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title=" Tutorials Page - Zion Tech Group"
        description="Zion Tech Group  Tutorials Page service page"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4"> Tutorials Page</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;