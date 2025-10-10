'use client';

import React, { useState, useEffect } from 'react';

const DynamicContentShowcase: React.FC = () => {
  const [content, setContent] = useState<string[]>([]);

  useEffect(() => {
    // Simulate dynamic content loading
    const loadContent = async () => {
      const mockContent = [
        'AI-Powered Solutions',
        'Advanced Analytics',
        'Cloud Infrastructure',
        'Cybersecurity Services'
      ];
      setContent(mockContent);
    };

    loadContent();
  }, []);

  return (
    <div className="dynamic-content-showcase">
      <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
      <div className="space-y-2">
        {content.map((item, index) => (
          <div key={index} className="text-gray-300">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicContentShowcase;