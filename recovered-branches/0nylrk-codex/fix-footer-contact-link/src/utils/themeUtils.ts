
<<<<<<< HEAD
<<<<<<< HEAD
export interface ThemeColors {;



export type ThemePreset = 'light' | 'dark' | 'neon' | 'corporate' | 'startup';
export interface ThemeColors {
export type ThemePreset = 'light' | 'dark' | 'neon' | 'corporate' | 'startup';

export interface ThemeColors {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export interface ThemeColors {;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  buttonColor: string
  cardBackground: string
}
// Define theme presets
export function getThemeColors(preset: ThemePreset, primaryColor: string): ThemeColors {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  switch (preset) {
    case 'dark':
      return {;
        primaryColor;
        backgroundColor: '#0f172a';
        textColor: '#e2e8f0';
        accentColor: primaryColor;
        buttonColor: primaryColor
        cardBackground: '#1e293b'}
    case 'neon':
      return {
        primaryColor;
        backgroundColor: '#030712';
        textColor: '#f8fafc';
        accentColor: '#00ffbb';
        buttonColor: primaryColor
        cardBackground: '#0f172a'}
    case 'corporate':
      return {
        primaryColor;
        backgroundColor: '#f8fafc';
        textColor: '#334155';
        accentColor: primaryColor;
        buttonColor: primaryColor
        cardBackground: '#ffffff'}
    case 'startup':
      return {
        primaryColor;
        backgroundColor: '#16181d';
        textColor: '#fafafa';
        accentColor: '#ff7f50';
        buttonColor: primaryColor
        cardBackground: '#1e2127'}
    case 'light':
    default: return {
        primaryColor;
        backgroundColor: '#ffffff';
        textColor: '#0f172a';
        accentColor: primaryColor;
        buttonColor: primaryColor
        cardBackground: '#f8fafc'}
  }
}
<<<<<<< HEAD
// Apply theme colors to document CSS variables
export function applyThemeColors(colors: ThemeColors) {
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export type ThemePreset = 'light' | 'dark' | 'neon' | 'corporate' | 'startup';
;
export interface ThemeColors {
  primary_color: string;
  background_color: string;
  text_color: string;
  accent_color: string;
  button_color: string,
  card_background: string;
}
// Define theme presets;
export function getThemeColors (preset: ThemePreset, primary_color: string): ThemeColors {
  const root = document.documentElement
  const root = document.documentElement,;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
<<<<<<< HEAD
  switch (preset) {
    case 'dark':;
      return {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const root = document && document.documentElement,
  root && root.style.setProperty('--primary-color', colors && colors.primaryColor);
  root && root.style.setProperty('--background-color', colors && colors.backgroundColor);
  root && root.style.setProperty('--text-color', colors && colors.textColor);
  root && root.style.setProperty('--accent-color', colors && colors.accentColor);
  root && root.style.setProperty('--button-color', colors && colors.buttonColor);
  root && root.style.setProperty('--card-background', colors && colors.cardBackground);
<<<<<<< HEAD
  // Set background and text colors on body
  document && document.body.style && style.backgroundColor = colors && colors.backgroundColor;
  document && document.body.style && style.color = colors && colors.textColor


<<<<<<< HEAD
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  
  // Set background and text colors on body
  document && document.body.style && style.backgroundColor = colors && colors.backgroundColor;
  document && document.body.style && style.color = colors && colors.textColor
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type ThemePreset = 'light' | 'dark' | 'neon' | 'corporate' | 'startup',;
export interface ThemeColors {;
  primaryColor: string,;
  backgroundColor: string,;
  textColor: string,;
  accentColor: string,;
  buttonColor: string,;
  cardBackground: string;
<<<<<<< HEAD
<<<<<<< HEAD
}
;
// Define theme presets;
export function getThemeColors(preset: ThemePreset, primaryColor: string): ThemeColors {;
  switch (preset) {;
    case 'dark':;
      return {;
        primaryColor,;
        backgroundColor: '#0f172a',;
        textColor: '#e2e8f0',;
        accentColor: primaryColor,;
        buttonColor: primaryColor,;
        cardBackground: '#1e293b'},;
    case 'neon':;
      return {;
        primaryColor,;
        backgroundColor: '#030712',;
        textColor: '#f8fafc',;
        accentColor: '#00ffbb',;
        buttonColor: primaryColor,;
        cardBackground: '#0f172a'},;
    case 'corporate':;
      return {;
        primaryColor,;
        backgroundColor: '#f8fafc',;
        textColor: '#334155',;
        accentColor: primaryColor,;
        buttonColor: primaryColor,;
        cardBackground: '#ffffff'},;
    case 'startup':;
      return {;
        primaryColor,;
        backgroundColor: '#16181d',;
        textColor: '#fafafa',;
        accentColor: '#ff7f50',;
        buttonColor: primaryColor,;
        cardBackground: '#1e2127'},;
    case 'light':;
    default:;
      return {;
        primaryColor,;
        backgroundColor: '#ffffff',;
        textColor: '#0f172a',;
        accentColor: primaryColor,;
        buttonColor: primaryColor,;
        cardBackground: '#f8fafc'}
  }
}
;
// Apply theme colors to document CSS variables;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function applyThemeColors(colors: ThemeColors) {;
  const root = document.documentElement,;
  root.style.setProperty('--primary-color', colors.primaryColor),;
  root.style.setProperty('--background-color', colors.backgroundColor),;
  root.style.setProperty('--text-color', colors.textColor),;
  root.style.setProperty('--accent-color', colors.accentColor),;
  root.style.setProperty('--button-color', colors.buttonColor),;
  root.style.setProperty('--card-background', colors.cardBackground),;
  // Set background and text colors on body;
  document.body.style.backgroundColor = colors.backgroundColor;
  document.body.style.color = colors.textColor;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


}
;
  // Set background and text colors on body;
  document.body.style.background_color = colors.background_color;
  document.body.style.color = colors.text_color;
}
<<<<<<< HEAD

export type ThemePreset = 'light' | 'dark' | 'neon' | 'corporate' | 'startup',;
;
export interface ThemeColors {;
  primaryColor:string,;
  backgroundColor:string,;
  textColor:string,;
  accentColor:string,;
  buttonColor:string,;
  cardBackground:string;
}
;
// Define theme presets;
export function getThemeColors(preset:ThemePreset, primaryColor:string):ThemeColors {;
  switch (preset) {;
    case 'dark':;
      return {;
        primaryColor,;
        backgroundColor:'#0f172a',;
        textColor:'#e2e8f0',;
        accentColor:primaryColor,;
        buttonColor:primaryColor,;
        cardBackground:'#1e293b'},;
    case 'neon':;
      return {;
        primaryColor,;
        backgroundColor:'#030712',;
        textColor:'#f8fafc',;
        accentColor:'#00ffbb',;
        buttonColor:primaryColor,;
        cardBackground:'#0f172a'},;
    case 'corporate':;
      return {;
        primaryColor,;
        backgroundColor:'#f8fafc',;
        textColor:'#334155',;
        accentColor:primaryColor,;
        buttonColor:primaryColor,;
        cardBackground:'#ffffff'},;
    case 'startup':;
      return {;
        primaryColor,;
        backgroundColor:'#16181d',;
        textColor:'#fafafa',;
        accentColor:'#ff7f50',;
        buttonColor:primaryColor,;
        cardBackground:'#1e2127'},;
    case 'light':;
    default:;
      return {;
        primaryColor,;
        backgroundColor:'#ffffff',;
        textColor:'#0f172a',;
        accentColor:primaryColor,;
        buttonColor:primaryColor,;
        cardBackground:'#f8fafc'},;
  }
}
;
// Apply theme colors to document CSS variables;
export function applyThemeColors(colors:ThemeColors) {;
  const root = document.documentElement,;
  root.style.setProperty('--primary-color', colors.primaryColor),;
  root.style.setProperty('--background-color', colors.backgroundColor),;
  root.style.setProperty('--text-color', colors.textColor),;
  root.style.setProperty('--accent-color', colors.accentColor),;
  root.style.setProperty('--button-color', colors.buttonColor),;
  root.style.setProperty('--card-background', colors.cardBackground),;
  ;
  // Set background and text colors on body;
  document.body.style.backgroundColor = colors.backgroundColor,;
  document.body.style.color = colors.textColor,;
}  
}
}
;
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
