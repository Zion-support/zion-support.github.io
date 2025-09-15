import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageDetectionPopup = () => {
  const { isLanguageDetected, setIsLanguageDetected } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show popup if language hasn't been detected yet
    if (!isLanguageDetected) {
      setShow(true);
    }
  }, [isLanguageDetected]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md mx-4">
        <h3 className="text-lg font-semibold mb-4">Select Language</h3>
        <p className="text-gray-600 mb-4">Choose your preferred language for the best experience.</p>
        <div className="flex space-x-4">
          <button
            onClick={() => {
              setIsLanguageDetected(true);
              setShow(false);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            English
          </button>
          <button
            onClick={() => {
              setIsLanguageDetected(true);
              setShow(false);
            }}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Español
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageDetectionPopup;