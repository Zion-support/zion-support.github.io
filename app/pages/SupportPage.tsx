import React from 'react',
import { Helmet } from 'react-helmet-async',

const SupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SupportPage - Zion Tech Group</title>
        <meta name="description" content="SupportPage page for Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">SupportPage</h1>
          <p className="text-lg text-gray-300">
            This is the SupportPage page for Zion Tech Group.
          </p>
        </div>
      </div>
    </>
  );
}
export default SupportPage;
