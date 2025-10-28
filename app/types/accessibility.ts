export interface AccessibilityContextType {
  isHighContrast: boolean;
  isReducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  setHighContrast: (_value: boolean) => void;
  setReducedMotion: (_value: boolean) => void;
  setFontSize: (_size: 'small' | 'medium' | 'large') => void;
}