<<<<<<< HEAD
import React, { useEffect, useState } from 'react'; interface AccessibilitySettings { fontSize: 'small' | 'medium' | 'large'; highContrast: boolean; reducedMotion: boolean; screenReader boolean',';';';';
    ';';';';';
  } export const AccessibilityEnhancer: Reac t.FC = () => { const [settings, setSettings] = useState<AccessibilitySettings>({ fontSize: 'medium', highContrast: fals e, reducedMotion: fals e, screenReader: fals e }); const [isVisible, setIsVisible] = useState<any>(false); useEffect(() => {"';';';';
</any>';
</AccessibilitySettings>;';;';
=======
import React, { useEffect, useState } from 'react'; interface AccessibilitySettings { fontSize: 'small' | 'medium' | 'large'; highContrast: boolean; reducedMotion: boolean; screenReader boolean',';';
    ';';';
  } export const AccessibilityEnhancer: React.FC = () => { const [settings, setSettings] = useState<AccessibilitySettings>({ fontSize: 'medium', highContrast: fals e, reducedMotion: fals e, screenReader: fals e }); const [isVisible, setIsVisible] = useState<any>(false); useEffect(() => {"';';';';
</any>;
</AccessibilitySettings>;
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
