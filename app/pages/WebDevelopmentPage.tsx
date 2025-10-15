import { Helmet } from "react-helmet-async";

export default function WebDevelopmentPage() {
  return (
    <>
      <Helmet>
        <title>Web Development - Zion Tech Group</title>
        <meta
          name="description"
          content="Web Development services and solutions from Zion Tech Group."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Web Development
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional Web Development services for your business needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
