ursor/check-fix-push-and-merge-to-main-2926
interface AccessibilityEnhancerProps {
  enableSkipLinks?: boolean;
  enableFocusManagement?: boolean;
  enableScreenReaderSupport?: boolean;
  enableHighContrastSupport?: boolean;
ursor/check-fix-push-and-merge-to-main-2926
  enableSkipLinks = true,
  enableFocusManagement = true,
  enableScreenReaderSupport = true,
  enableHighContrastSupport = true,
ursor/check-fix-push-and-merge-to-main-2926
  liveRegion.id = 'live-region';
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
ursor/check-fix-push-and-merge-to-main-2926
export default AccessibilityEnhancer;