

import { Helmet } from "react-helmet-async";

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta
          name="description"
          content="Join Zion Tech Group and be part of the future of technology. Explore career opportunities in AI, IT solutions, and digital transformation."
        />
        <meta
          name="keywords"
          content="careers, jobs, technology careers, AI jobs, IT careers, software development, Zion Tech Group"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Be part of the future of technology at Zion Tech Group
          </p>
          <div className="text-center">
            <p className="text-gray-400">
              Career opportunities coming soon. Please check back later.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
