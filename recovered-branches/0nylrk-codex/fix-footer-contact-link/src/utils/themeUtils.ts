  switch (preset) {
    case 'dark':;
      return {
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
export /**
 * applyThemeColors - Function description
 */
function applyThemeColors() {
  const root = document.document_element,
  root.style.set_property ('--primary - color', colors.primary_color);
  root.style.set_property ('--background - color', colors.background_color);
  root.style.set_property ('--text - color', colors.text_color);
  root.style.set_property ('--accent - color', colors.accent_color);
  root.style.set_property ('--button - color', colors.button_color);
  root.style.set_property ('--card - background', colors.card_background);
;
  // Set background and text colors on body;
  document.body.style.background_color = colors.background_color;
  document.body.style.color = colors.text_color;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
