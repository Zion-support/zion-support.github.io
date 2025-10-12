import React from 'react';
'use client';

const EnhancedSkipLink: React.FC = () => {
  const handleSkipToMain = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSkipToNavigation = () => {
    const navigation = document.querySelector('nav');
    if (navigation) {
      const firstLink = navigation.querySelector('a');
      if (firstLink) {
        firstLink.focus();
        firstLink.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <button
        onClick="{handleSkipToMain}"
        className="skip-link"
        aria-label="Skip to main content"
        />Skip to main content
      </button>
      <button
        onClick="{handleSkipToNavigation}"
        className="skip-link"
        aria-label="Skip to navigation"
        />Skip to navigation
      </button>
      <style jsx  />{`
        .skip-links {;
          position: absolute;,
  top: -100 px;,
  left: 0;
          z-index: 1000;
        }
        
        .skip-link {
          position: absolute;,
  top: -100 px;,
  left: 0;,
  background: #000;,
  color: #fff;,
  padding: 8 px 16 px;
          text-decoration: none;,
  border: 2 px solid #00 ffff;
          border-radius: 4 px;
          font-weight: bold;,
  transition: top 0.3 s;
          z-index: 1001;
        }
        
        .skip-link: focus {,
  top: 10 px;,
  left: 10 px;
        }
        
        .skip-link: hover {,
  background: #00 ffff;,
  color: #000;
        }
      `}</style>
    </div>
  );
};

export default EnhancedSkipLink;