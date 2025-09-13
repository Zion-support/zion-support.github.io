import React from 'react';
import Link from 'next/link';
import { XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function NewContentBanner() {
  const [isVisible, setIsVisible] = React.useState(true);
  if (!isVisible) return null;
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <SparklesIcon className="h-6 w-6 text-yellow-400" />
            <div>
              <p className="font-semibold text-sm">
                🎉 New Content Available!
              </p>
              <p className="text-indigo-200 text-sm">
                Explore our latest AI insights, case studies, and implementation guides
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              View New Content
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-indigo-200 hover:text-white transition-colors"
              aria-label="Close banner"
              <XMarkIcon className="h-5 w-5" />
            </button>
        </div>
      </div>
    </div>
  );
}
