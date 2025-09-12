// Accessibility enhancements for Zion Tech Group;
const accessibilityEnhancements = {
  // Add ARIA labels to interactive elements;
  "addAriaLabels": () => {
  const buttons = document.querySelectorAll("button:not([aria-label])");
    buttons.forEach(button => {
  if (!button.getAttribute("aria-label")) {
  button.setAttribute("aria-label", button.textContent || "Button")}
    })},
  // Add keyboard navigation support;
  "addKeyboardNavigation": () => {
  const focusableElements = document.querySelectorAll("a, button, input, textarea, select");
    focusableElements.forEach(element => {
  element.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
  e.preventDefault();
          element.click()}
      })})},
  // Add high contrast mode support;
  "addHighContrastMode": () => {
  const style = document.createElement("style");
    style.textContent = ";
      @media (prefers-contrast: high) {
  * {
  background-color: white !important;
          color: black !important;
          border-color: black !important}
      }
    ";
    document.head.appendChild(style)},
  // Initialize all enhancements;
  "init": () => {
  this.addAriaLabels();
    this.addKeyboardNavigation();
    this.addHighContrastMode()}
};
// Auto-initialize when DOM is ready;
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", accessibilityEnhancements.init)} else {
  accessibilityEnhancements.init()}
const accessibilityEnhancements = { addAriaLabels: () => { const buttons = document.querySelectorAll("button:not([aria-label])"); buttons.forEach(button => { if (!button.getAttribute("aria-label")) { button.setAttribute("aria-label",button.textContent || "Button")} })},; addKeyboardNavigation: () => { const focusableElements = document.querySelectorAll("a,button,input,textarea,select"); focusableElements.forEach(element => { element.addEventListener("keydown",(e) => { if (e.key === "Enter" || e.key === ) { e.preventDefault(); element.click()} })})},; addHighContrastMode: () => { const style = document.createElement("style"); style.textContent = `; @media (prefers-contrast: high) { * { background-color: white !important; color: black !important; border-color: black !important;,} } `; document.head.appendChild(style)},; init: () => { this.addAriaLabels(); this.addKeyboardNavigation(); this.addHighContrastMode()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",accessibilityEnhancements.init)} else { accessibilityEnhancements.init()}
>>>>>>> main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
const accessibilityEnhancements = { addAriaLabels: () => { const buttons = document.querySelectorAll("button:not([aria-label])"); buttons.forEach(button => { if (!button.getAttribute("aria-label")) { button.setAttribute("aria-label",button.textContent || "Button")} })},addKeyboardNavigation: () => { const focusableElements = document.querySelectorAll("a,button,input,textarea,select"); focusableElements.forEach(element => { element.addEventListener("keydown",(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); element.click()} })})},addHighContrastMode: () => { const style = document.createElement("style"); style.textContent = `; @media (prefers-contrast: high) { * { background-color: white !important; color: black !important; border-color: black !important,} } `; document.head.appendChild(style)},init: () => { this.addAriaLabels(); this.addKeyboardNavigation(); this.addHighContrastMode()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",accessibilityEnhancements.init)} else { accessibilityEnhancements.init()}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:public/accessibility.js
const accessibilityEnhancements = { addAriaLabels: () => { const buttons = document.querySelectorAll("button:not([aria-label])"); buttons.forEach(button => { if (!button.getAttribute("aria-label")) { button.setAttribute("aria-label",button.textContent || "Button")} })},addKeyboardNavigation: () => { const focusableElements = document.querySelectorAll("a,button,input,textarea,select"); focusableElements.forEach(element => { element.addEventListener("keydown",(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); element.click()} })})},addHighContrastMode: () => { const style = document.createElement("style"); style.textContent = `; @media (prefers-contrast: high) { * { background-color: white !important; color: black !important; border-color: black !important,} } `; document.head.appendChild(style)},init: () => { this.addAriaLabels(); this.addKeyboardNavigation(); this.addHighContrastMode()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",accessibilityEnhancements.init)} else { accessibilityEnhancements.init()}
