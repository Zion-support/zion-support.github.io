
export const AccessibilityPanel = (props: any) => {
    const [settings, setSettings] = useState({
        highContrast: false,
        fontSize: 100,
        colorBlindness: 'none',
        reducedMotion: false,
        screenReader: false,
        keyboardNavigation: false,
        focusIndicator: true
    }
    );
    
    const [accessibilityScore, setAccessibilityScore] = useState(85);
    const [activeTab, setActiveTab] = useState('general');
;
    useEffect(() => {;
        // Load saved settings from localStorage;
        const savedSettings = localStorage.getItem('accessibility-settings');
        if (savedSettings) {;
            try {;
                const parsed = JSON.parse(savedSettings);
                setSettings(prev => ({ ...prev, ...parsed }));
            } catch (error) {console.error('Failed to parse accessibility "settings":', error);}