import React from 'react';
import React from 'react';
import { Cookie, Settings } from "lucide-react";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  const handleSettings = () => {
    setShowSettings(!showSettings);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 p-4">
      <div className="max-w-6 xl mx-auto">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <Cookie className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                We use cookies
              </>
              <p >
                We use cookies to enhance your browsing experience, serve
                personalized content, and analyze our traffic. By clicking
                "Accept All", you consent to our use of cookies.
              </>
              {showSettings && (
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <h4 className="text-white font-semibold mb-3">
                    Cookie Preferences
                  </>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between">
                      <span className="text-gray-300">Essential Cookies</>
                      <input type="checkbox"
                        defaultChecked
                        disabled
                        className="rounded"
                      />
                    </>
                    <label className="flex items-center justify-between">
                      <span className="text-gray-300">Analytics Cookies</>
                      <input type="checkbox"
                        defaultChecked
                        className="rounded"
                      />
                    </>
                    <label className="flex items-center justify-between">
                      <span className="text-gray-300">Marketing Cookies</>
                      <input type="checkbox" className="rounded" />
                    </>
                  </>
                </>
              )}
            </>
          </>
          <div className="flex flex-col sm:flex-row gap-2 ml-4">
            <button onClick={handleSettings}
              className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </>
            <button onClick={handleReject}
              className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Reject All
            </>
            <button onClick={handleAccept}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Accept All
            </>
          </>
        </>
      </>
    </>
  );
};

export default CookieConsent;
