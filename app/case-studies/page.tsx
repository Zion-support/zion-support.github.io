import { Helmet } from "react-helmet-async";

export default function CaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful case studies and client success stories." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-gray-300">Coming Soon</p>
        </div>
      </div>
    </>
  );
}