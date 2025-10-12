'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle, Eye, Volume2, Keyboard, MousePointer, Settings } from 'lucide-react';

  enableHighContrast?: boolean;
  enableScreenReader?: boolean;
  enableKeyboardNavigation?: boolean;
  enableVoiceControl?: boolean;
  enableFocusManagement?: boolean;
  enableTextScaling?: boolean;
}

  enableTextScaling = true
  const [isActive, setIsActive] = useState(false);
    textScaling: 100
  });

    // Initialize accessibility features
      document.documentElement.setAttribute('data-high-contrast', 'false');
    }
      document.documentElement.setAttribute('data-screen-reader', 'false');
    }
      document.documentElement.setAttribute('data-keyboard-nav', 'false');
    }
      document.documentElement.setAttribute('data-voice-control', 'false');
    }
      document.documentElement.setAttribute('data-focus-management', 'false');
    }
      document.documentElement.setAttribute('data-text-scaling', '100');
    }
  }, [enableHighContrast, enableScreenReader, enableKeyboardNavigation, enableVoiceControl, enableFocusManagement, enableTextScaling]);

    const newValue = typeof settings[feature] === 'boolean' ? !settings[feature] : settings[feature];
    setSettings(prev => ({ ...prev, [feature]: newValue }));
    
    // Apply the setting to the document
      document.documentElement.setAttribute('data-text-scaling', newValue.toString());
      document.documentElement.setAttribute(`data-${feature.replace(/([A-Z])/g, '-$1').toLowerCase()}`, newValue.toString());
    }
  };

  ];

        onClick={() => setIsActive(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Open accessibility settings"
      >
        <Settings className="w-6 h-6" />
      </button>
    );
  }

    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl border border-gray-200 p-6 w-80 z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Accessibility Settings</h3>
        
          onClick={() => setIsActive(false)}
          className="text-gray-400 hover:text-gray-600"
          aria-label="Close accessibility settings"
        >
          ×
        </button>
      </div>

      <div className="space-y-4">
          <div key={feature.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <feature.icon className="w-5 h-5 text-gray-600" />
              <div>
                <div className="text-sm font-medium text-gray-900">{feature.name}</div>
                <div className="text-xs text-gray-500">{feature.description}</div>
              </div>
            </div>
            
              onClick={() => toggleFeature(feature.id as keyof typeof settings)}
              disabled={!feature.enabled}
                settings[feature.id as keyof typeof settings] ? 'bg-blue-600' : 'bg-gray-200'
              } ${!feature.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              
              />
            </button>
          </div>
        ))}

          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-900">Text Scaling</span>
              <span className="text-sm text-gray-500">{settings.textScaling}%</span>
            </div>
            
              onChange={() => toggleFeature('textScaling')}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center text-sm text-gray-600">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
          Accessibility features are active
        </div>
      </div>
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;
