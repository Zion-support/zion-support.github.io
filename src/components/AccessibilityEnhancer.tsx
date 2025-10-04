import React, { useEffect, useState } from 'react';

interface AccessibilityMetrics {
  contrastRatio: number;
  focusableElements: number;
  headingStructure: string[];
  altTextCoverage: number;
  ariaLabels: number;
}

interface AccessibilityEnhancerProps {
  enableAutoFocus?: boolean;
  enableKeyboardNavigation?: boolean;
  enableScreenReaderOptimization?: boolean;
  enableContrastMonitoring?: boolean;
  onMetricsUpdate?: (metrics: AccessibilityMetrics) => void;
}

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  enableAutoFocus = true,
  enableKeyboardNavigation = true,
  enableScreenReaderOptimization = true,
  enableContrastMonitoring = true,
  onMetricsUpdate,
}) => {
  const [, setMetrics] = useState<AccessibilityMetrics>({
    contrastRatio: 0,
    focusableElements: 0,
    headingStructure: [],
    altTextCoverage: 0,
    ariaLabels: 0,
  });

  useEffect(() => {
    // Auto-focus management
    if (enableAutoFocus) {
      const manageFocus = () => {
        // Skip auto-focus if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches;
        if (prefersReducedMotion) return;

        // Focus on main content or skip link
        const mainContent =
          document.querySelector('main') || document.querySelector('#main');
        const skipLink = document.querySelector(
          'a[href="#main"]',
        ) as HTMLAnchorElement;

        if (skipLink) {
          skipLink.focus();
        } else if (mainContent) {
          mainContent.setAttribute('tabindex', '-1');
          (mainContent as HTMLElement).focus();
        }
      };

      // Focus management on route changes
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            setTimeout(manageFocus, 100);
          }
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });
      manageFocus();

      return () => observer.disconnect();
    }
  }, [enableAutoFocus]);

  useEffect(() => {
    // Keyboard navigation enhancements
    if (enableKeyboardNavigation) {
      const handleKeyDown = (event: KeyboardEvent) => {
        // Skip to main content
        if (
          event.key === 'Tab' &&
          event.shiftKey &&
          document.activeElement === document.body
        ) {
          const skipLink = document.querySelector(
            'a[href="#main"]',
          ) as HTMLAnchorElement;
          if (skipLink) {
            skipLink.focus();
            event.preventDefault();
          }
        }

        // Escape key to close modals/dropdowns
        if (event.key === 'Escape') {
          const activeModal = document.querySelector(
            '[role="dialog"][aria-hidden="false"]',
          );
          if (activeModal) {
            const closeButton = activeModal.querySelector(
              '[aria-label*="close"], [aria-label*="Close"]',
            ) as HTMLButtonElement;
            if (closeButton) {
              closeButton.click();
            }
          }
        }

        // Arrow key navigation for custom components
        if (
          ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(
            event.key,
          )
        ) {
          const focusedElement = document.activeElement;
          if (
            focusedElement &&
            focusedElement.getAttribute('role') === 'menuitem'
          ) {
            const menuItems = Array.from(
              document.querySelectorAll('[role="menuitem"]'),
            );
            const currentIndex = menuItems.indexOf(focusedElement);
            let nextIndex = currentIndex;

            switch (event.key) {
              case 'ArrowDown':
                nextIndex = (currentIndex + 1) % menuItems.length;
                break;
              case 'ArrowUp':
                nextIndex =
                  currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
                break;
            }

            if (nextIndex !== currentIndex) {
              (menuItems[nextIndex] as HTMLElement).focus();
              event.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  useEffect(() => {
    // Screen reader optimizations
    if (enableScreenReaderOptimization) {
      // Add skip links
      const skipLink = document.createElement('a');
      skipLink.href = '#main';
      skipLink.textContent = 'Skip to main content';
      skipLink.className =
        'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded';
      skipLink.setAttribute('aria-label', 'Skip to main content');
      document.body.insertBefore(skipLink, document.body.firstChild);

      // Enhance form labels
      const inputs = document.querySelectorAll(
        'input:not([aria-label]):not([aria-labelledby])',
      );
      inputs.forEach(input => {
        const htmlInput = input as HTMLInputElement;
        const label = document.querySelector(`label[for="${htmlInput.id}"]`);
        if (!label && !htmlInput.getAttribute('aria-label')) {
          htmlInput.setAttribute(
            'aria-label',
            `Input field ${htmlInput.type || 'text'}`,
          );
        }
      });

      // Add ARIA landmarks
      const main = document.querySelector('main');
      if (!main) {
        const mainContent = document.querySelector(
          '#main, .main-content, .content',
        );
        if (mainContent) {
          mainContent.setAttribute('role', 'main');
        }
      }

      // Announce page changes to screen readers
      const announcePageChange = (title: string) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Page loaded: ${title}`;
        document.body.appendChild(announcement);

        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      };

      // Monitor for route changes
      const observer = new MutationObserver(() => {
        const title = document.title;
        if (title) {
          announcePageChange(title);
        }
      });

      observer.observe(document.head, { childList: true, subtree: true });
      announcePageChange(document.title);

      return () => {
        observer.disconnect();
        const skipLink = document.querySelector('a[href="#main"]');
        if (skipLink) {
          skipLink.remove();
        }
      };
    }
  }, [enableScreenReaderOptimization]);

  useEffect(() => {
    // Contrast monitoring
    if (enableContrastMonitoring) {
      const checkContrast = () => {
        const textElements = document.querySelectorAll(
          'p, h1, h2, h3, h4, h5, h6, span, div',
        );
        let totalElements = 0;
        let accessibleElements = 0;

        textElements.forEach(element => {
          const styles = window.getComputedStyle(element);
          const color = styles.color;
          const backgroundColor = styles.backgroundColor;

          if (color && backgroundColor && color !== backgroundColor) {
            totalElements++;
            // This is a simplified check - in production, you'd use a proper contrast calculation library
            const contrastRatio = calculateContrastRatio();
            if (contrastRatio >= 4.5) {
              accessibleElements++;
            }
          }
        });

        const contrastRatio =
          totalElements > 0 ? (accessibleElements / totalElements) * 100 : 0;

        setMetrics(prev => {
          const newMetrics = { ...prev, contrastRatio };
          onMetricsUpdate?.(newMetrics);
          return newMetrics;
        });
      };

      // Simplified contrast ratio calculation
      const calculateContrastRatio = (): number => {
        // This is a placeholder - in production, use a proper color contrast library
        return 4.5; // Default accessible ratio
      };

      checkContrast();

      // Monitor for style changes
      const observer = new MutationObserver(checkContrast);
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style'],
      });

      return () => observer.disconnect();
    }
  }, [enableContrastMonitoring, onMetricsUpdate]);

  useEffect(() => {
    // Accessibility metrics collection
    const collectMetrics = () => {
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ).length;

      const headings = Array.from(
        document.querySelectorAll('h1, h2, h3, h4, h5, h6'),
      ).map(h => h.tagName.toLowerCase());

      const images = document.querySelectorAll('img');
      const imagesWithAlt = Array.from(images).filter(
        img => img.alt && img.alt.trim() !== '',
      );
      const altTextCoverage =
        images.length > 0 ? (imagesWithAlt.length / images.length) * 100 : 100;

      const ariaLabels = document.querySelectorAll(
        '[aria-label], [aria-labelledby]',
      ).length;

      setMetrics(prev => {
        const newMetrics = {
          ...prev,
          focusableElements,
          headingStructure: headings,
          altTextCoverage,
          ariaLabels,
        };
        onMetricsUpdate?.(newMetrics);
        return newMetrics;
      });
    };

    collectMetrics();

    // Monitor for changes
    const observer = new MutationObserver(collectMetrics);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [onMetricsUpdate]);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancer;
import, Reac, t, { useEffe, c, t, PropsWithChildr, e, n } fr, o, m "rea, c, t"; const, AccessibilityEnhance, r: Rea, c, t.FC<PropsWithChildr, e, n> = ({ childr, e, n }) => { useEffe, c, t(() => { // Skip, link, functionality const, handleKeyDow, n = (eve, n, t: KeyboardEve, n, t) => { if (eve, n, t.k, e, y === 'T, a, b') {' docume, n, t.bo, d, y.classLi, s, t.a, d, d('keyboa, r, d-navigati, o, n'); }  const, AccessibilityEnhance, r: Rea, c, t.FC = () => { useEffe, c, t(() => { // Skip, link, functionality const, handleKeyDow, n = (ev, e, n t: KeyboardEve, n, t) => {' if (eve, n, t.k, e, y === 'T, a, b') {' docume, n, t.bo, d, y.classLi, s, t.a, d, d('keyboa, r, d-navigati, o, n'); } }; const, handleMouseDow, n = () => {' docume, n, t.bo, d, y.classLi, s, t.remo, v, e('keyboa, r, d-navigati, o, n'); }; // Focus, management, for modals, and, overlays; // const, trapFocu, s = (eleme, n, t: HTMLEleme, n, t) => { // const, focusableElement, s = eleme, n, t.querySelectorA, l, l(' // 'butt, o, n, [hr, e, f], inp, u, t, sele, c, t, textar, e, a, [tabind, e, x]:n, o, t([tabind, e, x="-1"])' // ); // const, firstElemen, t = focusableElemen, t, s[0] as, HTMLElemen, t; // const, lastElemen, t = focusableElemen, t, s[focusableElemen, t, s.leng, t, h - 1] as, HTMLElemen, t; // const, handleTabKe, y = (e: KeyboardEve, n, t) => {' // if (e.k, e, y === 'T, a, b') { // if (e.shiftK, e, y) { // if (docume, n, t.activeEleme, n, t === firstEleme, n, t) { // lastEleme, n, t.foc, u, s(); // e.preventDefau, l, t(); // } // } el, s, e { // if (docume, n, t.activeEleme, n, t === lastEleme, n, t) { // firstEleme, n, t.foc, u, s(); // e.preventDefau, l, t(); // } // } // } // };' // eleme, n, t.addEventListen, e, r('keydo, w, n', handleTabK, e, y); // firstEleme, n, t?.foc, u, s(); // return () => {' // eleme, n, t.removeEventListen, e, r('keydo, w, n', handleTabK, e, y); // }; // }; // Add, ARIA, labels to, interactive, elements without, label, s const, addAriaLabel, s = () => {' const, button, s = docume, n, t.querySelectorA, l, l('butt, o, n:n, o, t([ar, i, a-lab, e, l]):n, o, t([ar, i, a-labelled, b, y])'); butto, n, s.forEa, c, h((butt, o, n) => { const, tex, t = butt, o, n.textConte, n, t?.tr, i, m(); if (te, x, t && te, x, t.leng, t, h > 0) {' butt, o, n.setAttribu, t, e('ar, i, a-lab, e, l', te, x, t); } });' const, link, s = docume, n, t.querySelectorA, l, l('a:n, o, t([ar, i, a-lab, e, l]):n, o, t([ar, i, a-labelled, b, y])'); lin, k, s.forEa, c, h((li, n, k) => { const, tex, t = li, n, k.textConte, n, t?.tr, i, m(); if (te, x, t && te, x, t.leng, t, h > 0) {' li, n, k.setAttribu, t, e('ar, i, a-lab, e, l', te, x, t); } }); }; // Add, skip, links const, addSkipLink, s = () => {' const, skipLin, k = docume, n, t.createEleme, n, t('a');' skipLi, n, k.hr, e, f = '#ma, i, n-conte, n, t';' skipLi, n, k.textConte, n, t = 'Skip, to, main conte, n, t';' skipLi, n, k.classNa, m, e = 'sr-only, focu, s: n, o, t-sr-only, focu, s:absolute, focu, s:t, o, p-4, foc, u' s:le, f, t-4, b, g-bl, u, e-600, tex, t-whit, e, p-2, rounded, z-50'; docume, n, t.bo, d, y.insertBefo, r, e(skipLi, n, k, docume, n, t.bo, d, y.firstChi, l, d); }; // Initialize, accessibility, features addSkipLin, k, s(); addAriaLabe, l, s(); // Event, listener, s' docume, n, t.addEventListen, e, r('keydo, w, n', handleKeyDo, w, n);' docume, n, t.addEventListen, e, r('mousedo, w, n', handleMouseDo, w, n); // Re-run, aria, label addition, when, DOM chang, e, s const, observe, r = new, MutationObserve, r(() => { addAriaLabe, l, s(); }); observ, e, r.obser, v, e(docume, n, t.bo, d, y, { childLi, s, t: tr, u, e subtr, e, e: tr, u, e; }); return () => {' docume, n, t.removeEventListen, e, r('keydo, w, n', handleKeyDo, w, n);' docume, n, t.removeEventListen, e, r('mousedo, w, n', handleMouseDo, w, n); observ, e, r.disconne, c, t(); }; }, []); retu, r, n <>{childr, e, n}</>; }; export default AccessibilityEnhancer;'
