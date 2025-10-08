module.exports = {
  "wcagCompliance": {
    "level": "AA",
    "guidelines": {
      "perceivable": true,
      "operable": true,
      "understandable": true,
      "robust": true
    }
  },
  "screenReaderOptimization": {
    "ariaLabels": true,
    "ariaDescribedby": true,
    "ariaLive": true,
    "roleAttributes": true,
    "landmarkRoles": true
  },
  "keyboardNavigation": {
    "tabOrder": true,
    "focusManagement": true,
    "skipLinks": true,
    "keyboardShortcuts": true,
    "focusIndicators": true
  },
  "colorContrast": {
    "ratio": "4.5:1",
    "largeText": "3:1",
    "enhanced": "7:1"
  },
  "motionPreferences": {
    "respectReducedMotion": true,
    "pauseAnimations": true,
    "reducedMotion": true
  },
  "altText": {
    "images": true,
    "icons": true,
    "decorative": "empty",
    "functional": "descriptive"
  },
  "timestamp": "2025-10-08T14:53:56.012Z"
};