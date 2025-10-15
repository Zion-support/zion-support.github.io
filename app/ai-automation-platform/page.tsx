import { Helmet } from 'react-helmet-async';

const AIAutomationPlatformPage = () => {
  return (
    <>
      <Helmet>
        <title>AI Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced AI automation platform for streamlined business processes." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">AI Automation Platform</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI automation platform for streamlined business processes
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAutomationPlatformPage;
