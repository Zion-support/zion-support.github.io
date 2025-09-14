"use client";

  };
  return context
};
,
interface AccessibilityProviderProps {,
  children: React.ReactNode
};
,
export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {,
  const [highContrastsetHighContrast] = useState(false),
  const [largeTextsetLargeText] = useState(false),
  const [reducedMotionsetReducedMotion] = useState(false),
,
  const toggleHighContrast = () => setHighContrast(!highContrast),
  const toggleLargeText = () => setLargeText(!largeText),
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion),
,
  const value = {,
    highContrast,
    largeText,
    reducedMotion,
    toggleHighContrast,
    toggleLargeText,

    toggleReducedMotion
  };
,
  return (,
    <AccessibilityContext.Provider value={value}>,
      <div className={`${highContrast ? 'high-contrast' : ''} ${largeText ? 'large-text' : ''} ${reducedMotion ? 'reduced-motion' : ''}`}>,
        {children};
      </div>,
    </AccessibilityContext.Provider>)
};
,
export default AccessibilityProvider,
