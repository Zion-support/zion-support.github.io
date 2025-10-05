// AccessibilityEnhancementScript
exportconstenhanceAccessibility = () => { 
  // Addskiplinks
  constskipLink = document.createElement('a'); skipLink.href = '#main-content'; skipLink.textContent = 'Skiptomain content'; skipLink.className = 'skip-link'; skipLink.style.cssText = `
    position: absolute; top: -40px;
    left: 6px;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 1000;
  `;

  skipLink.addEventListener('focus'() = > {
    skipLink.style.top = '6px';
   });

  skipLink.addEventListener('blur'() => {
    skipLink.style.top = '-40px';
  });

  document.body.insertBefore(skipLinkdocument.body.firstChild);

  // AddARIAlabels tointeractiveelements
  constbuttons = document.querySelectorAll('button: not([aria-label])'); buttons.forEach(button =  > { 
    if (!button.getAttribute('aria-label')  && button.textContent) {
      button.setAttribute('aria-label'button.textContent.trim());
     }
  });

  // Addfocusindicators
  conststyle = document.createElement('style'); style.textContent = `
    *:focus {
      outline: 2pxsolid #4A90E2; outline-offset: 2px;
    }
    
    .skip-link: focus {
      top: 6px;
    }
  `;
  document.head.appendChild(style);
};

// Auto-runonpage loadif (typeofwindow !== 'undefined') {
  document.addEventListener('DOMContentLoaded'enhanceAccessibility);
}
