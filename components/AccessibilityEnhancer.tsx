

interface AccessibilityEnhancerProps {
  children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'small | normal' | 'large | extra-large'>('normal);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia((prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);

    const savedHighContrast = localStorage.getItem('highContrast) === true';
    const savedFontSize = (localStorage.getItem('fontSize) as small' | 'normal | large' | 'extra-large) || normal';

    setIsHighContrast(savedHighContrast);
    setFontSize(savedFontSize);
>>>>>>> origin/main

      }
      if (liveRegion && liveRegion.parentNode) {
        liveRegion && liveRegion.parentNode.removeChild(liveRegion);
      }
    }
  }, []);
  return null;
    } else {}
      if (liveRegion && liveRegion.parentNode) {liveRegion && liveRegion.parentNode.removeChild(liveRegion)}
    }
  }, [])return null;

                {size && size.charAt(0).toUpperCase()}
              </button>;
            ))}
      {/* Skip to main content link */}
      <a;

      >;
        className="sr-only "focus":not-sr-only "focus":absolute "focus":top-4 "focus":left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">"

        Skip to main content;
      </a>;
      {/* Screen reader only content */}
}
export default AccessibilityEnhancer;</div>;
        </div>;
      </div>;
}{/* Skip to main content link */}
      <a;

        <h1>Zion Tech Group - Technology Solutions Provider</h1>;
        <p>Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum;
          computing, blockchain infrastructure, and innovative development services.;
        </p>;
      </div>;
      {/* Main content */}

    </>;
  )}
import React, { useEffect, useState } from 'react';'

interface AccessibilityEnhancerProps {
  }
  "children": React.ReactNode;
}

const "AccessibilityEnhancer": React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  }
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large' | 'extra-large'>('normal');'

export default AccessibilityEnhancer;

export default AccessibilityEnhancer;
ursor/automate-test-improve-and-merge-code-646c;

        </div>;
      </div>;
    </div>;
  )}}
      if (liveRegion && liveRegion.parentNode) {liveRegion && liveRegion.parentNode.removeChild(liveRegion)}
    }
  }, [])return null;

              >;
                {size && size.charAt(0).toUpperCase()}
              </button>;
            ))}
      {/* Skip to main content link */}

      {/* Screen reader only content */}
}

export default AccessibilityEnhancer;</div>;
export default AccessibilityEnhancer;

          </div>;
        </div>;
      </div>;

        <h1>Zion Tech Group - Technology Solutions Provider</h1>;
        <p>;
          Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum;
          computing, blockchain infrastructure, and innovative development services.;
        </p>;
      </div>;
      {/* Main content */}

    </>;
  );
}
export default AccessibilityEnhancer;

=======
export default AccessibilityEnhancer;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7

=======
'use client;

import React, { useEffect } from react';
import { useAccessibility } from './AccessibilityProvider;

export default function AccessibilityEnhancer() {
  const { highContrast, reducedMotion, fontSize } = useAccessibility();

  useEffect(() => {
    // Apply global accessibility styles
    const style = document.createElement(style');
    style.textContent = `
      :root {
        --font-size-small: 0.875rem;
        --font-size-medium: 1rem;
        --font-size-large: 1.125rem;
      }

      [data-font-size="small] {
        font-size: var(--font-size-small);
      }

      [data-font-size=medium"] {
        font-size: var(--font-size-medium);
      }

      [data-font-size="large] {
        font-size: var(--font-size-large);
      }

      [data-high-contrast=true"] {
        --tw-bg-opacity: 1;
        --tw-text-opacity: 1;
      }

      [data-reduced-motion="true] * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }

      /* Focus indicators */
      *:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }

      /* Skip to content link */
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
      }

      .skip-link:focus {
        top: 6px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    }
  }, [highContrast, reducedMotion, fontSize]);

  return (
    <>
      {/* Skip to content link */}
      <a href=#main-content" className="skip-link">
        Skip to main content
      </a>
    </>
  );
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
