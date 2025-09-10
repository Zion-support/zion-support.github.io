<<<<<<< HEAD
// Accessibility enhancements for Zion Tech Group;
const accessibilityEnhancements = {
  // Add ARIA labels to interactive elements;
  "addAriaLabels": () => {
  const buttons = document.querySelectorAll("button:not([aria-label])");
<<<<<<< HEAD
    buttons.forEach(button => {
  if (!button.getAttribute("aria-label")) {
  button.setAttribute("aria-label", button.textContent || "Button")}
    })},
=======
    buttons.forEach(button => {;
  if (!button.getAttribute("aria-label")) {;
  button.setAttribute("aria-label", button.textContent || "Button");,
}
    });,
},
>>>>>>> origin/automation-fixes
  // Add keyboard navigation support;
  "addKeyboardNavigation": () => {
  const focusableElements = document.querySelectorAll("a, button, input, textarea, select");
    focusableElements.forEach(element => {
  element.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
  e.preventDefault();
<<<<<<< HEAD
          element.click()}
      })})},
=======
          element.click();,
}
      });,
});,
},
>>>>>>> origin/automation-fixes
  // Add high contrast mode support;
  "addHighContrastMode": () => {
  const style = document.createElement("style");
    style.textContent = ";
      @media (prefers-contrast: high) {
  * {
  background-color: white !important;
          color: black !important;
<<<<<<< HEAD
          border-color: black !important}
      }
    ";
    document.head.appendChild(style)},
=======
          border-color: black !important;,
}
      }
    `;
    document.head.appendChild(style);,
},
>>>>>>> origin/automation-fixes
  // Initialize all enhancements;
  "init": () => {
  this.addAriaLabels();
    this.addKeyboardNavigation();
<<<<<<< HEAD
    this.addHighContrastMode()}
};
// Auto-initialize when DOM is ready;
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", accessibilityEnhancements.init)} else {
  accessibilityEnhancements.init()}
const accessibilityEnhancements = { addAriaLabels: () => { const buttons = document.querySelectorAll("button:not([aria-label])"); buttons.forEach(button => { if (!button.getAttribute("aria-label")) { button.setAttribute("aria-label",button.textContent || "Button")} })},; addKeyboardNavigation: () => { const focusableElements = document.querySelectorAll("a,button,input,textarea,select"); focusableElements.forEach(element => { element.addEventListener("keydown",(e) => { if (e.key === "Enter" || e.key === ) { e.preventDefault(); element.click()} })})},; addHighContrastMode: () => { const style = document.createElement("style"); style.textContent = `; @media (prefers-contrast: high) { * { background-color: white !important; color: black !important; border-color: black !important;,} } `; document.head.appendChild(style)},; init: () => { this.addAriaLabels(); this.addKeyboardNavigation(); this.addHighContrastMode()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",accessibilityEnhancements.init)} else { accessibilityEnhancements.init()}
const accessibilityEnhancements = { addAriaLabels: () => { const buttons = document.querySelectorAll("button:not([aria-label])"); buttons.forEach(button => { if (!button.getAttribute("aria-label")) { button.setAttribute("aria-label",button.textContent || "Button")} })},addKeyboardNavigation: () => { const focusableElements = document.querySelectorAll("a,button,input,textarea,select"); focusableElements.forEach(element => { element.addEventListener("keydown",(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); element.click()} })})},addHighContrastMode: () => { const style = document.createElement("style"); style.textContent = `; @media (prefers-contrast: high) { * { background-color: white !important; color: black !important; border-color: black !important,} } `; document.head.appendChild(style)},init: () => { this.addAriaLabels(); this.addKeyboardNavigation(); this.addHighContrastMode()} }; ; if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded",accessibilityEnhancements.init)} else { accessibilityEnhancements.init()}
=======
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
