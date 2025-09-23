
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  switch (preset) {
    case 'dark':
      return {
        primaryColor,
        backgroundColor: '#0f172a',
        textColor: '#e2e8f0',
        accentColor: primaryColor,
        buttonColor: primaryColor,
<<<<<<< HEAD
        cardBackground: '#1e293b',
      };
=======
        cardBackground: '#1e293b'};
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    case 'neon':
      return {
        primaryColor,
        backgroundColor: '#030712',
        textColor: '#f8fafc',
        accentColor: '#00ffbb',
        buttonColor: primaryColor,
<<<<<<< HEAD
        cardBackground: '#0f172a',
      };
=======
        cardBackground: '#0f172a'};
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    case 'corporate':
      return {
        primaryColor,
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        accentColor: primaryColor,
        buttonColor: primaryColor,
<<<<<<< HEAD
        cardBackground: '#ffffff',
      };
=======
        cardBackground: '#ffffff'};
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    case 'startup':
      return {
        primaryColor,
        backgroundColor: '#16181d',
        textColor: '#fafafa',
        accentColor: '#ff7f50',
        buttonColor: primaryColor,
<<<<<<< HEAD
        cardBackground: '#1e2127',
      };
=======
        cardBackground: '#1e2127'};
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
    case 'light':
    default:
      return {
        primaryColor,
        backgroundColor: '#ffffff',
        textColor: '#0f172a',
        accentColor: primaryColor,
        buttonColor: primaryColor,
<<<<<<< HEAD
        cardBackground: '#f8fafc',
      };
=======
        cardBackground: '#f8fafc'};
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  }
}

// Apply theme colors to document CSS variables
export function applyThemeColors(colors: ThemeColors) {
  const root = document.documentElement;
  root.style.setProperty('--primary-color', colors.primaryColor);
  root.style.setProperty('--background-color', colors.backgroundColor);
  root.style.setProperty('--text-color', colors.textColor);
  root.style.setProperty('--accent-color', colors.accentColor);
  root.style.setProperty('--button-color', colors.buttonColor);
  root.style.setProperty('--card-background', colors.cardBackground);
  
  // Set background and text colors on body
  document.body.style.backgroundColor = colors.backgroundColor;
  document.body.style.color = colors.textColor;
}
