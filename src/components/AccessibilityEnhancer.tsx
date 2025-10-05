importReact{ useEffect } from 'react';

interfaceAccessibilityEnhancerProps {
  children: React.ReactNode;
}

constAccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children
}) => { 
  useEffect(() => {
    // Addaccessibilityenhancements
    constaddSkipLinks = () => {
      constskipLink = document.createElement('a'); skipLink.href = '#main-content'; skipLink.textContent = 'Skiptomain content'; skipLink.className = 'skip-link'; skipLink.style.cssText = `
        position: absolute; top: -40px;
        left: 6px;
  background: #000;
        color: #fff;
  padding: 8px;
        text-decoration: none;
        z-index: 1000;
        transition: top0.3s;
      `;

      skipLink.addEventListener('focus'() = > {
        skipLink.style.top = '6px';
       });

      skipLink.addEventListener('blur'() => {
        skipLink.style.top = '-40px';
      });

      document.body.insertBefore(skipLinkdocument.body.firstChild);
    };

    // AddARIAlabels tointeractiveelements
    constenhanceInteractiveElements = () => {  
      constbuttons = document.querySelectorAll('button: not([aria-label])'); buttons.forEach(button = > {
        if (!button.getAttribute('aria-label')  && !button.textContent?.trim()) {
          button.setAttribute('aria-label''Button');
          }
      });

      constlinks = document.querySelectorAll('a: not([aria-label])'); links.forEach(link = > { 
        if (!link.getAttribute('aria-label')  && !link.textContent?.trim()) {
          link.setAttribute('aria-label''Link');
         }
      });
    };

    // Addfocusmanagement
    constenhanceFocusManagement = () => { 
      document.addEventListener('keydown'e = > {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
         }
      });

      document.addEventListener('mousedown'() => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    addSkipLinks();
    enhanceInteractiveElements();
    enhanceFocusManagement();

    // Re-runenhancementswhen DOMchangesconst observer = newMutationObserver(() => {
      enhanceInteractiveElements();
    });

    observer.observe(document.body{
      childList: true
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }[]);

  return <>{children}</>;
};

exportdefaultAccessibilityEnhancer;
