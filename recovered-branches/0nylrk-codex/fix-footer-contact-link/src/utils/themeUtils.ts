
export type ThemePreset = 'light' | 'dark' | 'neon' | 'corporate' | 'startup';

export interface ThemeColors {_primaryColor: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  buttonColor: string;
  cardBackground: string;}

// Define theme presets
export function getThemeColors(_preset: ThemePreset, _primaryColor: string): ThemeColors {_switch (preset) {
    case 'dark':
      return {
        primaryColor, _backgroundColor: '#0f172a', _textColor: '#e2e8f0', _accentColor: primaryColor, _buttonColor: primaryColor, _cardBackground: '#1e293b'};
    case 'neon':
      return {_primaryColor, _backgroundColor: '#030712', _textColor: '#f8fafc', _accentColor: '#00ffbb', _buttonColor: primaryColor, _cardBackground: '#0f172a'};
    case 'corporate':
      return {_primaryColor, _backgroundColor: '#f8fafc', _textColor: '#334155', _accentColor: primaryColor, _buttonColor: primaryColor, _cardBackground: '#ffffff'};
    case 'startup':
      return {_primaryColor, _backgroundColor: '#16181d', _textColor: '#fafafa', _accentColor: '#ff7f50', _buttonColor: primaryColor, _cardBackground: '#1e2127'};
    case 'light':
    default:
      return {_primaryColor, _backgroundColor: '#ffffff', _textColor: '#0f172a', _accentColor: primaryColor, _buttonColor: primaryColor, _cardBackground: '#f8fafc'};
  }
}

// Apply theme colors to document CSS variables
export function applyThemeColors(_colors: ThemeColors) {_const _root = document.documentElement;
  root.style.setProperty('--primary-color', _colors.primaryColor);
  root.style.setProperty('--background-color', _colors.backgroundColor);
  root.style.setProperty('--text-color', _colors.textColor);
  root.style.setProperty('--accent-color', _colors.accentColor);
  root.style.setProperty('--button-color', _colors.buttonColor);
  root.style.setProperty('--card-background', _colors.cardBackground);
  
  // Set background and text colors on body
  document.body.style.backgroundColor = colors.backgroundColor;
  document.body.style.color = colors.textColor;}
