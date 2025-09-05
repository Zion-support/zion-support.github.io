
export type ThemePreset = 'light' | 'dark' | 'neon' | 'corporate' | 'startup',

<<<<<<< HEAD
export interface ThemeColors {
  primaryColor: string,
  backgroundColor: string,
  textColor: string,
  accentColor: string,
  buttonColor: string,
  cardBackground: string
}
=======
export interface ThemeColors {_primaryColor: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  buttonColor: string;
  cardBackground: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Define theme presets
export function getThemeColors(_preset: ThemePreset, _primaryColor: string): ThemeColors {_switch (preset) {
    case 'dark':
      return {
<<<<<<< HEAD
        primaryColor,
        backgroundColor: '#0f172a',
        textColor: '#e2e8f0',
        accentColor: primaryColor,
        buttonColor: primaryColor,
        cardBackground: '#1e293b'},
    case 'neon':
      return {
        primaryColor,
        backgroundColor: '#030712',
        textColor: '#f8fafc',
        accentColor: '#00ffbb',
        buttonColor: primaryColor,
        cardBackground: '#0f172a'},
    case 'corporate':
      return {
        primaryColor,
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        accentColor: primaryColor,
        buttonColor: primaryColor,
        cardBackground: '#ffffff'},
    case 'startup':
      return {
        primaryColor,
        backgroundColor: '#16181d',
        textColor: '#fafafa',
        accentColor: '#ff7f50',
        buttonColor: primaryColor,
        cardBackground: '#1e2127'},
    case 'light':
    default: return {
        primaryColor,
        backgroundColor: '#ffffff',
        textColor: '#0f172a',
        accentColor: primaryColor,
        buttonColor: primaryColor,
        cardBackground: '#f8fafc'}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

// Apply theme colors to document CSS variables
<<<<<<< HEAD
export function applyThemeColors(colors: ThemeColors) {
  const root = document.documentElement,
  root.style.setProperty('--primary-color', colors.primaryColor),
  root.style.setProperty('--background-color', colors.backgroundColor),
  root.style.setProperty('--text-color', colors.textColor),
  root.style.setProperty('--accent-color', colors.accentColor),
  root.style.setProperty('--button-color', colors.buttonColor),
  root.style.setProperty('--card-background', colors.cardBackground),
  
  // Set background and text colors on body
  document.body.style.backgroundColor = colors.backgroundColor,
  document.body.style.color = colors.textColor
}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
