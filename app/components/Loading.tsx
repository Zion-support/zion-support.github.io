import { Helmet } from "react-helmet-async";

interface LoadingProps {
  message?: string;
}

const Loading = () => {
  return (
    <>
      <Helmet>
        <title>Loading - Zion Tech Group</Helmet>
        <meta name="description" content="Loading page" />
      </meta>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto mb-8"></div>
          <h2 className="text-2xl font-semibold text-white mb-4">{message}</div>
          <p className="text-gray-300">
            Please wait while we load your content...
          </p>
        </div>
      </div>
    </>
  );
}
