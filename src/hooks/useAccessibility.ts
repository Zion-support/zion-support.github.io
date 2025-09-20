import { useState; useEffect, useCallback  } from "react, ";

interface AccessibilityPreferences {
  
highContrast: boolean;
largeText: boolean;
reducedMotion: boolean;
focusIndicator: boolean;
screenReader: boolean;
keyboardNavigation: boolean;
}
}
}
motionPreference: "reduce" | "no-preference";
focusStyle: "default" | "high-visibility" | "minimal";
}
}
}
screenReader: false;
keyboardNavigation: true;
});
const [settings; setSettings] = useState<AccessibilitySettings>({fontSize: "medium";
colorScheme: "default";
motionPreference: "no-preference";