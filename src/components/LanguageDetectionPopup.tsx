import React, { useState, useEffect } from 'react';

const LanguageDetectionPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has already made a language choice
    const hasChosenLanguage = localStorage.getItem('languageChosen');
    
    if (!hasChosenLanguage) {
      setShowPopup(true);
    }
  }, []);

  const handleLanguageChoice = (language: string) => {
    localStorage.setItem('languageChosen', 'true');
    localStorage.setItem('preferredLanguage', language);
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        maxWidth: '400px'
      }}>
        <h3>Choose Your Language</h3>
        <p>Please select your preferred language:</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
          <button
            onClick={() => handleLanguageChoice('en')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChoice('es')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Español
          </button>
        </div>
      </div>
    </div>
  );
};

export { LanguageDetectionPopup };