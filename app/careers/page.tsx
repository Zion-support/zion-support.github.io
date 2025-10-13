import { Helmet } from "react-helmet-async";

export default function CareersPage() {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and build the future of technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Careers</h1>
          <p className="text-gray-300">Coming Soon</p>
        </div>
      </div>
    </>
  );
}