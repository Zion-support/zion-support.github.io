        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };
  
  return () => {
    container.removeEventListener('keydown', handleTabKey);
  };
};

  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
  
  return skipLink;
};

    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  
  return contrast >= 4.5; // WCAG AA standard
};

    }
    
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  
  document.head.appendChild(style);
};

export const initializeAccessibility = (): void => {
  addFocusIndicators();
  
  // Add skip link to main content
  const mainContent = document.querySelector('main');
  if (mainContent && !mainContent.id) {
    mainContent.id = 'main-content';
    const skipLink = createSkipLink('main-content');
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
  
  // Enhance all interactive elements
  const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
  interactiveElements.forEach((element) => {
    enhanceKeyboardNavigation(element as HTMLElement);
  });
