import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="skip-link"
      data-skip-link
    >
      Skip to main content
    </a>
  );
};