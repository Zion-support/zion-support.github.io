
interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    // Reduced motion
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }

      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }

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
