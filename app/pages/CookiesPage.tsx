import { Helmet } from "react-helmet-async";

export default function CookiesPage() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta
          name="description"
          content="Cookie Policy for Zion Tech Group website."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Information about how we use cookies on our website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
