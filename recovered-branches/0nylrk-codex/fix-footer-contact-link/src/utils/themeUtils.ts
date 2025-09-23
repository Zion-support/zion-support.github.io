
export type ThemePreset = 'light' | 'dark' | 'neon' | 'corporate' | 'startup';

export interface ThemeColors {
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  buttonColor: string;
  cardBackground: string;
}

// Define theme presets
export function getThemeColors(preset: ThemePreset, primaryColor: string): ThemeColors {
