    };

    addAriaLabels();
    addFocusManagement();

    // Re-run on DOM changes
    const observer = new MutationObserver(() => {
      addAriaLabels();
      addFocusManagement();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

