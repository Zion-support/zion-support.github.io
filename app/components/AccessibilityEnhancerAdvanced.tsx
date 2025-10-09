'use client';
import React, { useEffect, useState, useCallback, useRef } from 'react';

interface AccessibilityEnhancerAdvancedProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableSkipLinks?: boolean;
  enableARIALabels?: boolean;
  enableReducedMotion?: boolean;
  enableColorBlindSupport?: boolean;
  enableVoiceControl?: boolean;
  enableScreenMagnification?: boolean;
  enableTextToSpeech?: boolean;
  enableKeyboardShortcuts?: boolean;
  enableFocusTrapping?: boolean;
  enableAnnouncements?: boolean;
  enableLiveRegions?: boolean;
  enableLandmarkNavigation?: boolean;
  enableHeadingNavigation?: boolean;
  enableFormValidation?: boolean;
  enableErrorAnnouncements?: boolean;
  enableSuccessAnnouncements?: boolean;
  enableLoadingAnnouncements?: boolean;
  enableCustomAnnouncements?: boolean;
  debug?: boolean;
}

const AccessibilityEnhancerAdvanced: React.FC<AccessibilityEnhancerAdvancedProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReaderSupport = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableSkipLinks = true,
  enableARIALabels = true,
  enableReducedMotion = true,
  enableColorBlindSupport = true,
  enableVoiceControl = true,
  enableScreenMagnification = true,
  enableTextToSpeech = true,
  enableKeyboardShortcuts = true,
  enableFocusTrapping = true,
  enableAnnouncements = true,
  enableLiveRegions = true,
  enableLandmarkNavigation = true,
  enableHeadingNavigation = true,
  enableFormValidation = true,
  enableErrorAnnouncements = true,
  enableSuccessAnnouncements = true,
  enableLoadingAnnouncements = true,
  enableCustomAnnouncements = true,
  debug = false
}) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<HTMLElement | null>(null);
  const [announcements, setAnnouncements] = useState<string[]>([]);
  const [isVoiceControlActive, setIsVoiceControlActive] = useState(false);
  const [isTextToSpeechActive, setIsTextToSpeechActive] = useState(false);
  const [currentLandmark, setCurrentLandmark] = useState<string>('');
  const [currentHeading, setCurrentHeading] = useState<string>('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSuccess, setFormSuccess] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  
  const liveRegionRef = useRef<HTMLDivElement>(null);
  const focusTrapRef = useRef<HTMLDivElement>(null);
  const speechSynthesis = useRef<SpeechSynthesis | null>(null);
  const speechUtterance = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize speech synthesis
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      speechSynthesis.current = window.speechSynthesis;
    }
  }, []);

  // Announce text to screen readers
  const announce = useCallback((text: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (!enableAnnouncements || !enableScreenReaderSupport) return;

    if (debug) {
      console.log(`[Accessibility] Announcement: ${text} (${priority})`);
    }

    // Add to announcements array
    setAnnouncements(prev => [...prev, text]);

    // Create live region if it doesn't exist
    if (!liveRegionRef.current) {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', priority);
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.style.position = 'absolute';
      liveRegion.style.left = '-10000px';
      liveRegion.style.width = '1px';
      liveRegion.style.height = '1px';
      liveRegion.style.overflow = 'hidden';
      document.body.appendChild(liveRegion);
      liveRegionRef.current = liveRegion;
    }

    // Update live region content
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = text;
    }

    // Text-to-speech if enabled
    if (enableTextToSpeech && speechSynthesis.current) {
      if (speechUtterance.current) {
        speechSynthesis.current.cancel();
      }
      
      speechUtterance.current = new SpeechSynthesisUtterance(text);
      speechUtterance.current.rate = 0.8;
      speechUtterance.current.pitch = 1;
      speechUtterance.current.volume = 0.8;
      
      speechSynthesis.current.speak(speechUtterance.current);
    }

    // Clear announcement after a delay
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(announcement => announcement !== text));
    }, 5000);
  }, [enableAnnouncements, enableScreenReaderSupport, enableTextToSpeech, debug]);

  // High contrast mode
  useEffect(() => {
    if (!enableHighContrast) return;

    const toggleHighContrast = () => {
      setIsHighContrast(prev => {
        const newState = !prev;
        document.documentElement.classList.toggle('high-contrast', newState);
        announce(`High contrast mode ${newState ? 'enabled' : 'disabled'}`);
        return newState;
      });
    };

    // Check for system preference
    if (window.matchMedia && window.matchMedia('(prefers-contrast: high)').matches) {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }

    // Add keyboard shortcut (Ctrl+Shift+H)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'H') {
        event.preventDefault();
        toggleHighContrast();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableHighContrast, announce]);

  // Reduced motion
  useEffect(() => {
    if (!enableReducedMotion) return;

    const checkReducedMotion = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsReducedMotion(prefersReducedMotion);
      
      if (prefersReducedMotion) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    checkReducedMotion();
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);
    
    return () => mediaQuery.removeEventListener('change', checkReducedMotion);
  }, [enableReducedMotion]);

  // Focus management
  useEffect(() => {
    if (!enableFocusManagement) return;

    const handleFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      setCurrentFocus(target);
      
      if (debug) {
        console.log('[Accessibility] Focus changed to:', target);
      }

      // Announce focus changes for screen readers
      if (enableScreenReaderSupport) {
        const role = target.getAttribute('role') || target.tagName.toLowerCase();
        const label = target.getAttribute('aria-label') || 
                     target.getAttribute('aria-labelledby') || 
                     target.textContent?.trim() || 
                     role;
        
        if (label) {
          announce(`Focused on ${label}`);
        }
      }
    };

    const handleBlur = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (debug) {
        console.log('[Accessibility] Focus lost from:', target);
      }
    };

    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);

    return () => {
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
    };
  }, [enableFocusManagement, enableScreenReaderSupport, announce, debug]);

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip links (Alt+S)
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        const skipLink = document.querySelector('[href="#main-content"]') as HTMLAnchorElement;
        if (skipLink) {
          skipLink.focus();
          skipLink.click();
          announce('Skipped to main content');
        }
      }

      // Landmark navigation (Alt+L)
      if (event.altKey && event.key === 'l' && enableLandmarkNavigation) {
        event.preventDefault();
        const landmarks = document.querySelectorAll('[role="main"], [role="navigation"], [role="banner"], [role="contentinfo"], [role="complementary"]');
        const currentIndex = Array.from(landmarks).indexOf(currentFocus || document.activeElement as HTMLElement);
        const nextIndex = (currentIndex + 1) % landmarks.length;
        const nextLandmark = landmarks[nextIndex] as HTMLElement;
        
        if (nextLandmark) {
          nextLandmark.focus();
          const role = nextLandmark.getAttribute('role') || 'landmark';
          announce(`Navigated to ${role}`);
        }
      }

      // Heading navigation (Alt+H)
      if (event.altKey && event.key === 'h' && enableHeadingNavigation) {
        event.preventDefault();
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const currentIndex = Array.from(headings).indexOf(currentFocus || document.activeElement as HTMLElement);
        const nextIndex = (currentIndex + 1) % headings.length;
        const nextHeading = headings[nextIndex] as HTMLElement;
        
        if (nextHeading) {
          nextHeading.focus();
          const level = nextHeading.tagName.charAt(1);
          const text = nextHeading.textContent?.trim() || 'heading';
          announce(`Level ${level} heading: ${text}`);
        }
      }

      // Escape key handling
      if (event.key === 'Escape') {
        // Close any open modals or dropdowns
        const modals = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
        modals.forEach(modal => {
          const closeButton = modal.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
          if (closeButton) {
            closeButton.focus();
            closeButton.click();
            announce('Modal closed');
          }
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation, enableLandmarkNavigation, enableHeadingNavigation, currentFocus, announce]);

  // Voice control
  useEffect(() => {
    if (!enableVoiceControl || !('webkitSpeechRecognition' in window)) return;

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsVoiceControlActive(true);
      announce('Voice control activated');
    };

    recognition.onend = () => {
      setIsVoiceControlActive(false);
      announce('Voice control deactivated');
    };

    recognition.onresult = (event: any) => {
      const command = event.results[0][0].transcript.toLowerCase();
      
      if (debug) {
        console.log('[Accessibility] Voice command:', command);
      }

      // Process voice commands
      if (command.includes('click') || command.includes('press')) {
        const focusedElement = document.activeElement as HTMLElement;
        if (focusedElement && (focusedElement.tagName === 'BUTTON' || focusedElement.tagName === 'A')) {
          focusedElement.click();
          announce('Element clicked');
        }
      } else if (command.includes('scroll down')) {
        window.scrollBy(0, 100);
        announce('Scrolled down');
      } else if (command.includes('scroll up')) {
        window.scrollBy(0, -100);
        announce('Scrolled up');
      } else if (command.includes('go to top')) {
        window.scrollTo(0, 0);
        announce('Scrolled to top');
      } else if (command.includes('go to bottom')) {
        window.scrollTo(0, document.body.scrollHeight);
        announce('Scrolled to bottom');
      }
    };

    // Activate voice control with Ctrl+Shift+V
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'V') {
        event.preventDefault();
        if (isVoiceControlActive) {
          recognition.stop();
        } else {
          recognition.start();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      recognition.stop();
    };
  }, [enableVoiceControl, isVoiceControlActive, announce, debug]);

  // Form validation
  useEffect(() => {
    if (!enableFormValidation) return;

    const validateForm = (form: HTMLFormElement) => {
      const errors: Record<string, string> = {};
      const success: Record<string, string> = {};

      // Validate required fields
      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        const input = field as HTMLInputElement;
        if (!input.value.trim()) {
          errors[input.name] = `${input.getAttribute('aria-label') || input.name} is required`;
        } else {
          success[input.name] = `${input.getAttribute('aria-label') || input.name} is valid`;
        }
      });

      // Validate email fields
      const emailFields = form.querySelectorAll('input[type="email"]');
      emailFields.forEach(field => {
        const input = field as HTMLInputElement;
        if (input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
          errors[input.name] = 'Please enter a valid email address';
        }
      });

      // Validate phone fields
      const phoneFields = form.querySelectorAll('input[type="tel"]');
      phoneFields.forEach(field => {
        const input = field as HTMLInputElement;
        if (input.value && !/^[\d\s\-\+\(\)]+$/.test(input.value)) {
          errors[input.name] = 'Please enter a valid phone number';
        }
      });

      setFormErrors(errors);
      setFormSuccess(success);

      // Announce validation results
      if (Object.keys(errors).length > 0) {
        const errorMessages = Object.values(errors).join(', ');
        announce(`Form validation errors: ${errorMessages}`, 'assertive');
      } else if (Object.keys(success).length > 0) {
        announce('Form validation successful');
      }

      return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      if (!validateForm(form)) {
        event.preventDefault();
      }
    };

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', handleSubmit);
    });

    return () => {
      forms.forEach(form => {
        form.removeEventListener('submit', handleSubmit);
      });
    };
  }, [enableFormValidation, announce]);

  // Loading announcements
  useEffect(() => {
    if (!enableLoadingAnnouncements) return;

    const handleLoadingStart = () => {
      setIsLoading(true);
      announce('Loading content, please wait');
    };

    const handleLoadingEnd = () => {
      setIsLoading(false);
      announce('Content loaded');
    };

    // Listen for loading events
    window.addEventListener('load', handleLoadingEnd);
    
    return () => {
      window.removeEventListener('load', handleLoadingEnd);
    };
  }, [enableLoadingAnnouncements, announce]);

  // Don't render anything visible
  return (
    <>
      {/* Live region for announcements */}
      <div
        ref={liveRegionRef}
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
      />
      
      {/* Focus trap for modals */}
      {enableFocusTrapping && (
        <div ref={focusTrapRef} className="focus-trap" />
      )}
    </>
  );
};

export default AccessibilityEnhancerAdvanced;