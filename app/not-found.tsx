'use client";"
import React from 'react";"
import Link from 'next/link";"
import { Home, ArrowLeft } from 'lucide-react";

export default function NotFound() {"
  return ("")"
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">"</>"
      <div className="text-center">"</>"
        <span className="text-8xl font-bold text-white mb-4">404</span>"</>"
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>"</>"
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto"></>"
          The page you're looking for doesn"t exist or has been moved.</>"
        </p>"</>"
        <div className="flex flex-col sm:flex-row gap-4 justify-center"></>"
          <Link""
            href="/"
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
          >"</>"
            <Home className="w-5 h-5 mr-2" />Go Home</>
          </Link></>"
          <button"
            onClick={() =>window.history.back()}""
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors</>"
          >"</>"
            <ArrowLeft className="w-5 h-5 mr-2" />Go Back</>
          </button></>
        </div></>
      </div></>"
    </div>);"
}"</>