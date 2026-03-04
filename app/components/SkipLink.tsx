import React from 'react';

const SkipLink: React.FC = () => (
  <>
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
    <a href="#site-navigation" className="skip-link skip-link-secondary">
      Skip to navigation
    </a>
    <style>{`
      .skip-link {
        position: absolute;
        left: 12px;
        top: -64px;
        z-index: 1000;
        border-radius: 0 0 8px 8px;
        background: #0f172a;
        color: #ffffff;
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        padding: 12px 16px;
        text-decoration: none;
        transition: top 0.2s ease-in-out;
      }

      .skip-link:focus {
        top: 0;
        outline: 2px solid #c084fc;
        outline-offset: 2px;
      }

      .skip-link-secondary {
        left: 190px;
      }
    `}</style>
  </>
);

export default SkipLink;
