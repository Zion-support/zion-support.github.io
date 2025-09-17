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
