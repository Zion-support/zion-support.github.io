import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageDetectionPopup = () => {
<<<<<<< HEAD
  return null; // Placeholder component
=======
  const { language, changeLanguage, isLanguageDetected, setIsLanguageDetected } = useLanguage();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if language has been detected before
    const hasDetectedLanguage = localStorage.getItem('languageDetected');
    if (!hasDetectedLanguage) {
      setShowPopup(true);
    }
  }, []);

  const handleLanguageSelect = (selectedLanguage) => {
    changeLanguage(selectedLanguage);
    setIsLanguageDetected(true);
    localStorage.setItem('languageDetected', 'true');
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md mx-4">
        <h3 className="text-lg font-semibold mb-4">Select Your Language</h3>
        <p className="text-gray-600 mb-4">Choose your preferred language for the best experience.</p>
        <div className="space-y-2">
          <button
            onClick={() => handleLanguageSelect('en')}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
          >
            English
          </button>
          <button
            onClick={() => handleLanguageSelect('es')}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
          >
            Español
          </button>
          <button
            onClick={() => handleLanguageSelect('fr')}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
          >
            Français
          </button>
        </div>
      </div>
    </div>
  );
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
};

export { LanguageDetectionPopup };
export default LanguageDetectionPopup;