
import { Helmet } from 'react-helmet-async';
const MainPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet></Helmet>
        <title>Main - Zion Tech Group</title>
        <meta name="description" content="Professional main services by Zion Tech Group." />
        <meta name="keywords" content="main, AI solutions, IT services" />
      </Helmet>

            Main
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional main services designed to help your business grow and succeed.
          </p>
        </div>

  );
};

export default MainPage;