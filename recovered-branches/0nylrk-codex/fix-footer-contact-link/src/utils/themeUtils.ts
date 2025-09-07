export interface ThemeColors {;

export interface ThemeColors {;

export type ThemePreset = 'light' | 'dark' | 'neon' | 'corporate' | 'startup';
export interface ThemeColors {
export type ThemePreset = 'light' | 'dark' | 'neon' | 'corporate' | 'startup';

export interface ThemeColors {;
export interface ThemeColors {;
  primaryColor: string;


}
  // Set background and text colors on body;
  document.body.style.background_color = colors.background_color;
  document.body.style.color = colors.text_color;

  primaryColor:string,;
  backgroundColor:string,;
  textColor:string,;
  accentColor:string,;
  buttonColor:string,;
  cardBackground:string;
// Define theme presets;
export function getThemeColors(preset:ThemePreset, primaryColor:string):ThemeColors {;
  switch (preset) {;
      return {;
        primaryColor,;
        backgroundColor:'#0f172a',;
        textColor:'#e2e8f0',;
        accentColor:primaryColor,;
        buttonColor:primaryColor,;
        cardBackground:'#1e293b'},;
        backgroundColor:'#030712',;
        textColor:'#f8fafc',;
        accentColor:'#00ffbb',;
        cardBackground:'#0f172a'},;
        backgroundColor:'#f8fafc',;
        textColor:'#334155',;
        cardBackground:'#ffffff'},;
        backgroundColor:'#16181d',;
        textColor:'#fafafa',;
        accentColor:'#ff7f50',;
        cardBackground:'#1e2127'},;
    default:;
        backgroundColor:'#ffffff',;
        textColor:'#0f172a',;
        cardBackground:'#f8fafc'},;
// Apply theme colors to document CSS variables;
export function applyThemeColors(colors:ThemeColors) {;
  // Set background and text colors on body;
  document.body.style.backgroundColor = colors.backgroundColor,;
  document.body.style.color = colors.textColor,;
}  
}
}
;
}
;
pr-12325
