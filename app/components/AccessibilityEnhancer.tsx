'use client';
import React, { useEffect, useState } from 'react';

const AccessibilityEnhancer = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // High contrast toggle
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'H') {
        event.preventDefault();
        setIsHighContrast(prev => {
          document.documentElement.classList.toggle('high-contrast', !prev);
          return !prev;
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const announce = (text) => {
    setAnnouncements(prev => [...prev, text]);
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(announcement => announcement !== text));
    }, 5000);
  };

  return (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        style={{
          position: 'absolute',
          left: '-10000px',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
      >
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>
    </>
  );
};

export default AccessibilityEnhancer;