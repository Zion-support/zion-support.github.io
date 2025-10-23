'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { CheckCircle, AlertTriangle, Settings, Eye, Volume2, Keyboard } from 'lucide-react';

interface AdvancedAccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableVoiceNavigation?: boolean;
  enableTextToSpeech?: boolean;
}

const AdvancedAccessibilityEnhancer: React.FC<AdvancedAccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableVoiceNavigation = false,
  enableTextToSpeech = false
}) => {
  const [accessibilityFeatures, setAccessibilityFeatures] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);

  const addFeature = useCallback((feature: string) => {
    setAccessibilityFeatures(prev => [...prev, feature]);
  }, []);

  useEffect(() => {
    if (enableKeyboardNavigation) {
      // Enhanced keyboard navigation
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
          const skipLink = document.querySelector('[data-skip-to-main]') as HTMLElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }

        // Escape key handling for modals
        if (event.key === 'Escape') {
          const modal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])') as HTMLElement;
          if (modal) {
            const closeButton = modal.querySelector('[data-close-modal]') as HTMLElement;
            if (closeButton) {
              closeButton.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      addFeature('Enhanced keyboard navigation');
      
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation, addFeature]);

  useEffect(() => {
    if (enableScreenReaderSupport) {
      // Enhanced screen reader support
      const enhanceScreenReaderSupport = () => {
        // Add ARIA landmarks
        const main = document.querySelector('main');
        if (main && !main.getAttribute('role')) {
          main.setAttribute('role', 'main');
        }

        // Add skip links
        if (!document.querySelector('[data-skip-to-main]')) {
          const skipLink = document.createElement('a');
          skipLink.href = '#main-content';
          skipLink.textContent = 'Skip to main content';
          skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
          skipLink.setAttribute('data-skip-to-main', 'true');
          document.body.insertBefore(skipLink, document.body.firstChild);
        }

        // Add live regions for dynamic content
        if (!document.querySelector('[aria-live]')) {
          const liveRegion = document.createElement('div');
          liveRegion.setAttribute('aria-live', 'polite');
          liveRegion.setAttribute('aria-atomic', 'true');
          liveRegion.className = 'sr-only';
          liveRegion.id = 'live-region';
          document.body.appendChild(liveRegion);
        }
      };

      enhanceScreenReaderSupport();
      addFeature('Enhanced screen reader support');
    }
  }, [enableScreenReaderSupport, addFeature]);

  useEffect(() => {
    if (enableHighContrast) {
      // High contrast mode
      const mediaQuery = window.matchMedia('(prefers-contrast: high)');
      
      const handleContrastChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('high-contrast');
        } else {
          document.documentElement.classList.remove('high-contrast');
        }
      };

      handleContrastChange(mediaQuery);
      mediaQuery.addEventListener('change', handleContrastChange);
      addFeature('High contrast mode support');

      return () => mediaQuery.removeEventListener('change', handleContrastChange);
    }
  }, [enableHighContrast, addFeature]);

  useEffect(() => {
    if (enableFocusManagement) {
      // Enhanced focus management
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      
      const trapFocus = (container: HTMLElement) => {
        const focusableContent = container.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0] as HTMLElement;
        const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

        container.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
              }
            }
          }
        });
      };

      // Apply focus trapping to modals
      const modals = document.querySelectorAll('[role="dialog"]');
      modals.forEach(modal => trapFocus(modal as HTMLElement));
      
      addFeature('Enhanced focus management');
    }
  }, [enableFocusManagement, addFeature]);

  useEffect(() => {
    if (enableVoiceNavigation) {
      // Voice navigation (basic implementation)
      const handleVoiceCommand = (event: SpeechRecognitionEvent) => {
        const command = event.results[0][0].transcript.toLowerCase();
        
        if (command.includes('skip to main')) {
          const main = document.querySelector('main');
          if (main) {
            main.focus();
          }
        } else if (command.includes('close modal')) {
          const modal = document.querySelector('[role="dialog"]:not([aria-hidden="true"])');
          if (modal) {
            const closeButton = modal.querySelector('[data-close-modal]') as HTMLElement;
            if (closeButton) {
              closeButton.click();
            }
          }
        }
      };

      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.onresult = handleVoiceCommand;
        recognition.start();
        
        addFeature('Voice navigation');
      }
    }
  }, [enableVoiceNavigation, addFeature]);

  useEffect(() => {
    if (enableTextToSpeech) {
      // Text-to-speech functionality
      const speakText = (text: string) => {
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.rate = 0.8;
          utterance.pitch = 1;
          speechSynthesis.speak(utterance);
        }
      };

      // Add speak buttons to important content
      const importantElements = document.querySelectorAll('h1, h2, h3, [data-speak]');
      importantElements.forEach(element => {
        if (!element.querySelector('[data-speak-button]')) {
          const speakButton = document.createElement('button');
          speakButton.textContent = '🔊';
          speakButton.className = 'ml-2 text-sm text-blue-400 hover:text-blue-300';
          speakButton.setAttribute('data-speak-button', 'true');
          speakButton.onclick = () => speakText(element.textContent || '');
          element.appendChild(speakButton);
        }
      });

      addFeature('Text-to-speech support');
    }
  }, [enableTextToSpeech, addFeature]);

  const toggleAccessibility = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <div className="flex items-center gap-2 mb-3">
        <Settings className="w-5 h-5 text-cyan-400" />
        <h3 className="font-semibold">Advanced Accessibility</h3>
        <button
          onClick={toggleAccessibility}
          className={`ml-auto px-2 py-1 rounded text-xs font-medium transition-colors ${
            isActive ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
          }`}
        >
          {isActive ? 'ON' : 'OFF'}
        </button>
      </div>
      
      <div className="space-y-2 mb-4">
        {accessibilityFeatures.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 text-sm">
          <Eye className="w-4 h-4" />
          Contrast
        </button>
        <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 text-sm">
          <Volume2 className="w-4 h-4" />
          Speech
        </button>
        <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 text-sm">
          <Keyboard className="w-4 h-4" />
          Keys
        </button>
      </div>
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;