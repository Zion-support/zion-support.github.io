import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageDetectionPopup = () => {
  const { language, changeLanguage, isLanguageDetected } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show language detection popup if user hasn't set a preference
    const hasLanguagePreference = localStorage.getItem('preferred-language');
    if (!hasLanguagePreference && isLanguageDetected) {
      setShowPopup(true);
    }
  }, [isLanguageDetected]);

  const handleLanguageSelect = (selectedLanguage) => {
    changeLanguage(selectedLanguage);
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md mx-4">
        <h2 className="text-xl font-bold mb-4">Select Your Language</h2>
        <p className="text-gray-600 mb-4">
          We detected your language preference. Would you like to use this language?
        </p>
        
        <div className="flex space-x-3 mb-4">
          <button
            onClick={() => handleLanguageSelect(language)}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Yes, use {language === 'en' ? 'English' : language === 'es' ? 'Spanish' : language}
          </button>
          <button
            onClick={() => setShowPopup(false)}
            className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
          >
            Not now
          </button>
        </div>

        <div className="text-sm text-gray-500">
          You can change this later in settings.
        </div>
      </div>
    </div>
  );
};

export default LanguageDetectionPopup;