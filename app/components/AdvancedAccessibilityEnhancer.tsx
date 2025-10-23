'use client';
import React, {useEffect, useState, useCallback} from 'react';

interface AdvancedAccessibilityEnhancerProp s {enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableARIALabels?: boolean;
  enableSkipLinks?: boolean;
  enableColorContrast?: boolean;
  enableMotionReduction?: boolean;
  enableFontScaling?: boolean;
  enableVoiceNavigation?: boolean;}

constAdvancedAccessibilityEnhancer: React.FC<AdvancedAccessibilityEnhancerProp s>= ({enableKeyboardNavigation= true,
  enableScreenReader= true,
  enableHighContrast= true,
  enableFocusManagement= true,
  enableARIALabels= true,
  enableSkipLinks= true,
  enableColorContrast= true,
  enableMotionReduction= true,
  enableFontScaling= true,
  enableVoiceNavigation= true}) => {const [accessibilitySettingssetAccessibilitySettings] = useState({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'normal',
    screenReader: false,
    keyboardNavigation: false
 });

  // Detect user preferences
  useEffect(() => {if (type ofwindow=== 'undefined') return;

    // Check for reduced motionpreferenceconstprefersReducedMotion= windo w.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check for high contrastpreferenceconstprefersHighContrast= windo w.matchMedia('(prefers-contrast: high)').matches;

    // Check for color schemepreferenceconstprefersDarkScheme= windo w.matchMedia('(prefers-color-scheme: dark)').matchessetAccessibilitySettings(prev=> ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast
   }));

    // Listen for changes in userpreferencesconstmotionQuery= windo w.matchMedia('(prefers-reduced-motion: reduce)');
    constcontrastQuery= windo w.matchMedia('(prefers-contrast: high)');

    consthandleMotionChange= (e: MediaQueryListEvent) => {setAccessibilitySettings(prev=> ({ ...prev, reducedMotion: e.matches}));
    };

    consthandleContrastChange= (e: MediaQueryListEvent) => {setAccessibilitySettings(prev=> ({ ...prev, highContrast: e.matches}));
    };

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
   };
  }, []);

  // Apply accessibility styles
  useEffect(() => {if (type ofwindow=== 'undefined') return;

    constroot= do cument.do cumentElement;

    // Apply high contrast mode
    if (accessibilitySettings.highContrast) {
      root.class Lis t.add('high-contrast');
   } else {root.class Lis t.remove('high-contrast');
   }

    // Apply reduced motion
    if (accessibilitySettings.reducedMotion) {root.class Lis t.add('reduced-motion');
   } else {root.class Lis t.remove('reduced-motion');
   }

    // Apply font scaling
    root.style.setProperty('--font-scale', accessibilitySettings.fontSize=== 'large' ? '1.2' : '1');
  }, [accessibilitySettings]);

  // Keyboard navigationenhancementconstsetupKeyboardNavigation= useCallback(() => {if (type ofwindow=== 'undefined') return;

    consthandleKeyDown= (event: KeyboardEvent) => {
  
      // Skip to main content
      if (event.key=== 'Tab' && event.shiftKey && event.target=== do cument.body) {
        constskipLink= do cument.querySelector('[data-skip-link]') as HTMLElementif (skipLin k) {
          skipLink.focus();
          event.preventDefault();
       }
      }

      // Escape key to close modals/dropdo wns
      if (event.key=== 'Escape') {constactiveElement= do cument.activeElement as HTMLElementif(activeElement && activeElement.hasAttribute('data-close-on-escape')) {
          activeElement.click();
       }
      }

      // Arrow keys for menu navigation
      if (event.key=== 'ArrowDown' || event.key=== 'ArrowUp') {constmenu= do cument.querySelector('[role="menu"]') as HTMLElementif(menu && menu.contains(event.target as Node)) {
          event.preventDefault();
          constmenuItems=Array.from(menu.querySelectorAll('[role="menuitem"]')) as HTMLElement[];
          constcurrentIndex= menuItems.indexOf(event.target as HTMLElement);
          constnextIndex= event.key=== 'ArrowDown'
            ? (currentIndex + 1) % menuItems.length: currentIndex ===0? menuItems.length -1 : currentIndex - 1;
          menuItems[nextIndex]?.focus();
       }
      }
    };

    do cument.addEventListener('keydo wn', handleKeyDown);
    return () => do cument.removeEventListener('keydo wn', handleKeyDown);
  }, []);

  // Screen readerenhancementsconstsetupScreenReaderSupport= useCallback(() => {if (type ofwindow=== 'undefined') return;

    // Add live region for dynamic contentupdatesconstliveRegion= do cument.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className= 'sr-only';
    liveRegion.id= 'live-region';
    do cument.body.appendChild(liveRegion);

    // Announce pagechangesconstannouncePageChange= (message: string) => {
  
      constliveRegion= do cument.getElementById('live-region');
      if (liveRegio n) {
        liveRegion.textContent= message;
     }
    };

    // Listen for route changes (if using client-side routing)
    constoriginalPushState= history.pushState;
    constoriginalReplaceState= history.replaceState;

    history.pushState= function(...args) {originalPushState.apply(historyargs);
      announcePageChange('Page changed');
   };

    history.replaceState= function(...args) {originalReplaceState.apply(historyargs);
      announcePageChange('Page updated');
   };
  }, []);

  // FocusmanagementconstsetupFocusManagement= useCallback(() => {if (type ofwindow=== 'undefined') return;

    // Trap focus inmodalsconsttrapFocus= (element: HTMLElement) => {
  
      constfocusableElements= element.querySelectorAll(
        'button, [href], input, select, textarea,[tabindex]:not([tabindex="-1"])'
      )asNodeListOf<HTMLElemen t>;

      constfirstElement= focusableElements[0];
      constlastElement= focusableElements[focusableElements.length - 1];

      consthandleTabKey= (e: KeyboardEvent) => {
  
        if (e.key=== 'Tab') {
          if (e.shiftKey) {
            if (do cument.activeElement=== firstElement) {
              lastElement.focus();
              e.preventDefault();
           }
          } else {if (do cument.activeElement=== lastElement) {
              firstElement.focus();
              e.preventDefault();
           }
          }
        }
      };

      element.addEventListener('keydo wn', handleTabKey);
      firstElement?.focus();

      return () => element.removeEventListener('keydo wn', handleTabKey);
    };

    // Apply focus trap tomodalsconstmodals= document.querySelectorAll('[role="dialog"]');
    modals.forEach(modal=> {constcleanup= trapFocus(modal as HTMLElement);
      // Store cleanup function for later use
      (modal as any).__focusTrapCleanup= cleanup;

 }, []);

  // ARIA labelsenhancementconstenhanceARIALabels= useCallback(() => {if (type ofwindow=== 'undefined') return;

    // Add missing ARIA labels to interactiveelementsconstbuttons= do cument.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach((buttonindex) => {
  
      consttext= button.textContent?.trim();
      if (text && text.length > 0) {
        button.setAttribute('aria-label', text);
     } else {button.setAttribute('aria-label', `Button ${index+1}`);
      }

    // Add ARIA labels toimagesconstimages= do cument.querySelectorAll('img:not([alt])');
    images.forEach((imgindex) => {img.setAttribute('alt', `Image ${index+1}`);

    // Add ARIA labels to forminputsconstinputs= do cument.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    inputs.forEach((inputindex) => {constplaceholder= input.getAttribute('placeholder');
      constlabel= input.getAttribute('name');
      if (placeholde r) {
        input.setAttribute('aria-label', placeholder);
     } else if (labe l) {input.setAttribute('aria-label', label);
     } else {input.setAttribute('aria-label', `Input ${index+1}`);
      }

  }, []);

  // SkiplinksconstaddSkipLinks= useCallback(() => {if (type ofwindow=== 'undefined') return;

    constskipLinks= [
      { href: '#main-content', text: 'Skip to main content'},
      {href: '#navigation', text: 'Skip to navigation'},
      {href: '#footer', text: 'Skip to footer'}
    ];

    constskipLinksContainer= do cument.createElement('div');
    skipLinksContainer.className= 'skip-links';
    skipLinksContainer.setAttribute('aria-label', 'Skip links');

    skipLinks.forEach(({hreftext}) => {constlink= do cument.createElement('a');
      link.href= href;
      link.textContent= text;
      link.className= 'skip-link';
      link.setAttribute('data-skip-link', 'true');
      skipLinksContainer.appendChild(link);

    do cument.body.insertBefore(skipLinksContainer, do cument.body.firstChild);
 }, []);

  // Color contrastcheckingconstcheckColorContrast= useCallback(() => {if (type ofwindow=== 'undefined') return;

    constcheckElementContrast= (element: HTMLElement) => {
  
      conststyles= windo w.getComputedStyle(element);
      constbackgroundColor= styles.backgroundColor;
      constcolor= styles.color;

      // Simple contrast check (this would need a more sophisticated implementation)
      if (backgroundColor && color) {
        // Add visual indicator for low contrast elements
        element.setAttribute('data-contrast-checked', 'true');
     }
    };

    constelements= do cument.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
    elements.forEach(element=> checkElementContrast(element as HTMLElement));
  }, []);

  // Voice navigationsupportconstsetupVoiceNavigation= useCallback(() => {if (type ofwindow=== 'undefined' || !('webkitSpeechRecognition' in windo w)) return;

    constrecognition= new (windo w as any).webkitSpeechRecognition();
    recognition.continuous= false;
    recognition.interimResults= false;
    recognition.lang= 'en-US';

    recognition.onresult= (event: any) => {
  
      constcommand= event.results[0][0].transcript.toLowerCase();

      // Voice commands
      if (command.includes('go to home')) {
        windo w.location.href= '/';
     } else if (command.includes('go to about')) {windo w.location.href= '/about';
     } else if (command.includes('go to contact')) {windo w.location.href= '/contact';
     } else if (command.includes('go to services')) {windo w.location.href= '/services';
     } else if (command.includes('call phone')) {windo w.location.href= 'tel:+1302464095 0';
     } else if (command.includes('send email')) {windo w.location.href= 'mailto:kleber@ziontechgroup.com';
     }
    };

    // Add voice navigationbuttonconstvoiceButton= do cument.createElement('button');
    voiceButton.textContent= 'Voice Navigation';
    voiceButton.className= 'voice-navigation-button';
    voiceButton.setAttribute('aria-label', 'Start voice navigation');
    voiceButton.onclick= () => recognition.start();

    constheader= do cument.querySelector('header') || do cument.querySelector('nav');
    if (heade r) {header.appendChild(voiceButton);
   }
  }, []);

  // Initialize all accessibility features
  useEffect(() => {if (enableKeyboardNavigatio n) {
      setupKeyboardNavigation();
   }
    if (enableScreenReade r) {setupScreenReaderSupport();
   }
    if (enableFocusManagemen t) {setupFocusManagement();
   }
    if (enableARIALabel s) {enhanceARIALabels();
   }
    if (enableSkipLink s) {addSkipLinks();
   }
    if (enableColorContras t) {checkColorContrast();
   }
    if (enableVoiceNavigatio n) {setupVoiceNavigation();
   }
  }, [enableKeyboardNavigation, enableScreenReader, enableFocusManagement, enableARIALabels, enableSkipLinks, enableColorContrast, enableVoiceNavigation, setupKeyboardNavigation, setupScreenReaderSupport, setupFocusManagement, enhanceARIALabels, addSkipLinks, checkColorContrast, setupVoiceNavigation]);

  return nul l;
};

export default AdvancedAccessibilityEnhancer;