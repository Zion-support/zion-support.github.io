
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityProviderProps {
  children: ReactNode;
}

  return (
    <AccessibilityContext.Provider value={{ announceToScreenReader, setFocus }}>
      {children}
    </AccessibilityContext.Provider>
  );

