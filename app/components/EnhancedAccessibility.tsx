'use client'
    const header = document.querySelector('header');
      header.setAttribute('role', 'banner');
    }
    // Check for user preferences
    
      })});
  }, []);

    };
    (window as { accessibilityContext: unknown }).accessibilityContext = context;
  }, [settings, updateSettings]);
  
  return <>{children}</>;
};

export default EnhancedAccessibility;
