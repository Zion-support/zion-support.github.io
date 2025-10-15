
import {  Helmet  } from '"react-helmet-async";'

const ItSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive IT solutions including infrastructure management, cybersecurity, cloud solutions, and system integration services."
        />
        <meta
          name="keywords"
          content="IT solutions, infrastructure management, cybersecurity, cloud solutions, system integration, Zion Tech Group"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">IT Solutions</h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive IT solutions for your business needs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItSolutionsPage;

