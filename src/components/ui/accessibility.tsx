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
