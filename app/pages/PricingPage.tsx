
import { Helmet } from "react-helmet-async";

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta
          name="description"
          content="Transparentpricing for our AI and IT solutions"
        />
        <meta name="keywords" content="pricing,plans, cost, subscription" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-autopx-4 py-16">
          <div className="text-center">
            <h1 className="text-4 xlfont-bold text-white mb-8">Pricing</h1>
            <div className="text-gray-400">
              <p>Pricing information coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PricingPage;
