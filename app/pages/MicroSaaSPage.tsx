
import { Helmet } from "react-helmet-async";

const MicroSaaSPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro Saa S Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Innovativemicro Saa S solutions for modern businesses"
        />
        <meta
          name="keywords"
          content="microsaas, saas solutions, software as a service"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-autopx-4 py-16">
          <div className="text-center">
            <h1 className="text-4 xlfont-bold text-white mb-8">
              Micro Saa S Solutions
            </h1>
            <div className="text-gray-400">
              <p>Micro Saa S solutions coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MicroSaaSPage;
