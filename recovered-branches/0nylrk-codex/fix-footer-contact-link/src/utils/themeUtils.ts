


export type ThemePreset = 'light' | 'dark' | 'neon' | 'corporate' | 'startup';
export interface ThemeColors {
export type ThemePreset = 'light' | 'dark' | 'neon' | 'corporate' | 'startup';

export interface ThemeColors {;
=======
=======
export interface ThemeColors {;


=======
// Define theme presets;
export function getThemeColors (preset: ThemePreset, primary_color: string): ThemeColors {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  switch (preset) {
    case 'dark':;
      return {


  const root = document.documentElement,;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  root.style.setProperty('--primary-color', colors.primaryColor);
  root.style.setProperty('--background-color', colors.backgroundColor);
  root.style.setProperty('--text-color', colors.textColor);
  root.style.setProperty('--accent-color', colors.accentColor);
  root.style.setProperty('--button-color', colors.buttonColor);
  root.style.setProperty('--card-background', colors.cardBackground);
  // Set background and text colors on body
  document.body.style.backgroundColor = colors.backgroundColor;

  document.body.style.color = colors.textColor
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const root = document && document.documentElement,
  root && root.style.setProperty('--primary-color', colors && colors.primaryColor);
  root && root.style.setProperty('--background-color', colors && colors.backgroundColor);
  root && root.style.setProperty('--text-color', colors && colors.textColor);
  root && root.style.setProperty('--accent-color', colors && colors.accentColor);
  root && root.style.setProperty('--button-color', colors && colors.buttonColor);
  root && root.style.setProperty('--card-background', colors && colors.cardBackground);


=======export type ThemePreset = 'light' | 'dark' | 'neon' | 'corporate' | 'startup',;
export interface ThemeColors {;
  primaryColor: string,;
  backgroundColor: string,;
  textColor: string,;
  accentColor: string,;
  buttonColor: string,;
  cardBackground: string;
}=======
        primary_color;
        background_color: '#0f172a';
        text_color: '#e2e8f0';
        accent_color: primary_color;
        button_color: primary_color,
        card_background: '#1e293b'}
    case 'neon':;
      return {
        primary_color;
        background_color: '#030712';
        text_color: '#f8fafc';
        accent_color: '#00ffbb';
        button_color: primary_color,
        card_background: '#0f172a'}
    case 'corporate':;
      return {
        primary_color;
        background_color: '#f8fafc';
        text_color: '#334155';
        accent_color: primary_color;
        button_color: primary_color,
        card_background: '#ffffff'}
    case 'startup':;
      return {
        primary_color;
        background_color: '#16181d';
        text_color: '#fafafa';
        accent_color: '#ff7f50';
        button_color: primary_color,
        card_background: '#1e2127'}
    case 'light':;
    default: return {
        primary_color;
        background_color: '#ffffff';
        text_color: '#0f172a';
        accent_color: primary_color;
        button_color: primary_color,
        card_background: '#f8fafc'}
  }
}
// Apply theme colors to document CSS variables;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


}
;
  // Set background and text colors on body;
  document.body.style.background_color = colors.background_color;
  document.body.style.color = colors.text_color;
}


};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
