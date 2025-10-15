import { Helmet } from 'react-helmet-async';

export default function ProjectmanagementtoolPage() {
  return (
    <>
      <Helmet>
        <title>Project Management Tool - Zion Tech Group</title>
        <meta name="description" content="Project Management Tool services and solutions from Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Project Management Tool
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional project management tool services and solutions for your business needs.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-6 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}