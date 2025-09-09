import React from 'react';
import Head from 'next/head';

  return (
    <>
      <Head>
        <title>Zion Tech Group - Innovative IT Solutions & AI Services</title>
        <meta name="description" content="Leading provider of AI-powered IT solutions, cloud migration, and digital transformation services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Innovative IT Solutions & AI Services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">AI Services</h3>
                <p className="text-sm text-blue-200">
                  Advanced AI-powered solutions for modern businesses
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Cloud Solutions</h3>
                <p className="text-sm text-blue-200">
                  Scalable cloud infrastructure and migration services
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-2">Digital Transformation</h3>
                <p className="text-sm text-blue-200">
                  Complete digital transformation strategies and implementation
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const IndexPage: React.FC<HomePageProps> = (props) => {
  const router = useRouter();
  const showDebug = router.query.debug === 'true';
  const showButton = process.env.NODE_ENV === 'development' || showDebug;

  return (
    <>
      {props.hasError && (
        <div className="container mx-auto px-4 py-4">
          <ErrorBanner msg={props.errorMessage || "Failed to load home page."} />
        </div>
      )}
      <Home />
      {showButton && <ErrorTestButton />}
    </>
  );
};

export default IndexPage;
