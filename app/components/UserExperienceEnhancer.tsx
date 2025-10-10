'use client';
import React, { useEffect, useState } from 'react';

const UserExperienceEnhancer: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Add smooth scrolling
    const style = document.createElement('style');
    style.textContent = `
      html { scroll-behavior: smooth; }
      * { box-sizing: border-box; }
    `;
    document.head.appendChild(style);

    // Add focus indicators
    const interactiveElements = document.querySelectorAll('button, a, input');
    interactiveElements.forEach((element) => {
      element.addEventListener('focus', () => {
        element.classList.add('focus-visible');
      });
      element.addEventListener('blur', () => {
        element.classList.remove('focus-visible');
      });
    });
  }, []);

  return null;
};

export default UserExperienceEnhancer;