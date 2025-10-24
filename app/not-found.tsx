'use client'
import { { { Link from 'next/link'
import  Home ArrowLeft RefreshCw           } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900flex items-center justify-center">
        <div className="text-center">
        <span className="text-8xlfont-boldtext-whitemb-4">404</span>
        <h1 className="text-2xlfont-semiboldtext-whitemb-4">
            Page Not Found
          </h1>
        <p className="text-gray-300mb-8max-w-md">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
        </p>
        <div className="flex flex-colsm:flex-rowgap-4justify-center"></div>
          <Link
            href="/"
            className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-whitefont-mediumrounded-lgtransition-colors"
          ></Link>
            <Home className="w-5h-5mr-2" /></Home>
            Go Home
          </Link>,
          <button,
            onClick = {
() => window.history.back(;
        </div>;
        </div>);
        </div>
        </div>
};
            className="flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-whitefont-mediumrounded-lgtransition-colors"
          >
            <ArrowLeft className="w-5h-5mr-2" /></ArrowLeft>
            Go Back
          </button>,
          <button,
            onClick = {
() => window.location.reload();
};
            className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-whitefont-mediumrounded-lgtransition-colors"
          >
            <RefreshCw className="w-5h-5mr-2" /></RefreshCw>
            Refresh
          </button>
        </div>
      </div>
    </div>,
  );,
}