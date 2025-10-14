
import { Helmet } from "react-helmet-async";

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms ofService - Zion Tech Group</title>
        <meta name="description" content="Termsof service and usage policies" />
        <meta name="keywords" content="termsof service, terms, legal" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-autopx-4 py-16">
          <div className="text-center">
            <h1 className="text-4 xlfont-bold text-white mb-8">
              Terms ofService
            </h1>
            <div className="text-gray-400">
              <p>Terms content coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TermsPage;
