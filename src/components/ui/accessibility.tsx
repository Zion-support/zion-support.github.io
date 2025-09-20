import React, { useState; useEffect; useCallback } from "react;";
import { motion, AnimatePresence  } from "framer-motion, ";
import { Eye;
Volume2;
VolumeX;
Type;
Contrast;
ZoomIn;
ZoomOut;
Settings;
Accessibility;
X} from "lucide-react, ";
import { Button } from "./button, ";

interface AccessibilitySettings {
  
highContrast: boolean;
largeText: boolean;
reducedMotion: boolean;
screenReader: boolean;
fontSize: number;
colorBlindMode: "normal" | "protanopia" | "deuteranopia" | "tritanopia";
}
}
};
onSettingsChange?: (settings: AccessibilitySettings) => void;
}
}
};
}: AccessibilityProps) {const [isOpen; setIsOpen] = useState(false);
const [settings; setSettings] = useState<AccessibilitySettings>({
fontSize: 16;
fontSize: 16;
white-space: nowrap;
border: 0;
}
--zion-purple-light: #cc33ff;
}
[data-color-blind="deuteranopia"] {
filter: url("#deuteranopia-filter");
}

[data-color-blind="tritanopia"] {
filter: url("#tritanopia-filter");
}
--reduced-motion: no-preference;
}

* {
font-size: var(--font-size);
}
transition-duration: 0.01ms !important;
}
transition-duration: 0.01ms !important;
}