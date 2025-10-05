        position: absolute; top: -40px;
        left: 6px;
  background: #000;
        color: #fff;
  padding: 8px;
        text-decoration: none;
        z-index: 1000;
        transition: top0.3s;
      `;

         }
      });
    };

          document.body.classList.add('keyboard-navigation');
         }
      });

        document.body.classList.remove('keyboard-navigation');
      });
    };

    addSkipLinks();
    enhanceInteractiveElements();
    enhanceFocusManagement();

    });

    return () => {
      observer.disconnect();
    };
  }[]);

  return <>{children}</>;
};

exportdefaultAccessibilityEnhancer;
