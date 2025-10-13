import React from 'react';
interface CookieConsentProps {
  className?: string;
  children?: React.ReactNode;
}

export default function CookieConsent({ className = '', children }: CookieConsentProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 p-4">
        <div className="flex items-start justify-between">
            <Cookie className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0">
              <h3 className="text-lg font-semibold text-white mb-2">
//                 We use cookies to enhance your browsing experience, serve
//                 personalized content, and analyze our traffic. By clicking
//                 "Accept All"bg-gray-800 rounded-lg p-4 mb-4"text-white font-semibold mb-3"space-y-3"flex items-center justify-between"text-gray-300"checkbox"rounded"flex items-center justify-between"text-gray-300"checkbox"rounded"flex items-center justify-between"text-gray-300"checkbox"rounded"flex flex-col sm:flex-row gap-2 ml-4"flex items-center px-4 py-2 text-gray-300 hover:text-white transition-colors"w-4 h-4 mr-2"px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
//             >
//               Accept All
</button>
</div>
</div>
</div>
</div>
  );
