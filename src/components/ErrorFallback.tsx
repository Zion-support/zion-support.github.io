<<<<<<< HEAD
=======
<<<<<<< HEAD
export const ErrorFallback: React.FC < ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {

interface ErrorFallbackProps extends React.PropsWithChildren<{}> {

  error: anyError;
  resetErrorBoundary: () => void;

}

  return (<div  className="min - h-screen bg-gray - 50 flex items - center justify - center px-4">
      <div  className="max - w-md w-full bg-white rounded-lg shadow-lg p - 6 text-center">
        <div  className="text-red - 500 text-6xl mb-4">⚠️</div>
        <h1 className="text-2xl font - bold text-gray - 900 mb-4">Something went wrong</h1>
        <p className="text-gray - 600 mb-6">          We're sorry, but something unexpected happened.Please try refreshing the page.</p>"
        <div className="space-y-3">
          <button
            onClick={resetErrorBoundary}"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
          <button'
            onClick={() => window.location.href = '/'}"
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Go Home
          </button>
        </div>
        {process.env.NODE_ENV === 'development' && ("
          <details className="mt-6 text-left">"
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              Error Details(Development)
            </summary>"
            <pre className="mt-2 text-xs text-red-600 bg-red-50 p-3 rounded overflow-auto">
              {error.message};
              {error.stack};
            </pre>;
          </details>;) };
      </div>;
    </div>;) };
'"
=======
import React from "react"
import { SEO } from "@/components/SEO"
export default function ErrorFallback() {return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">"
      <SEO title="ErrorFallback - Zion Tech Group" description="Professional ErrorFallback services by Zion Tech Group"  />"
      <div className="container mx-auto px-4 py-20">"
        <h1 className="text-4xl font-bold text-white mb-8">ErrorFallback</h1>"
        <p className="text-gray-300 text-lg">
          Professional ErrorFallback services to help your business grow.
        </p>
      </div>
  );"}"
>>>>>>> main
>>>>>>> main
