// Accessibility improvements to implement
// 1. Add ARIA labels to interactive elements
// Example JSX:
// <button aria-label="Close dialog">×</button>
// <input aria-describedby="email-help" type="email" />
// <div id="email-help">Enter your email address</div>

// 2. Implement focus management
const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  });
};

// 3. Add live regions for dynamic content
// Example JSX:
// <div aria-live="polite" aria-atomic="true" className="sr-only">
//   {announcement}
// </div>

// 4. Ensure proper heading hierarchy
// Example JSX:
// <h1>Main Page Title</h1>
// <h2>Section Title</h2>
// <h3>Subsection Title</h3>

// 5. Add skip links
// Example JSX:
// <a href="#main-content" className="skip-link">Skip to main content</a>

// 6. Ensure sufficient color contrast
// Use tools like WebAIM Contrast Checker

// 7. Add keyboard navigation support
// Example JSX:
// <div role="menu" aria-label="Main menu">
//   <button role="menuitem" tabIndex="0">Item 1</button>
//   <button role="menuitem" tabIndex="0">Item 2</button>
// </div>

// 8. Provide alternative text for images
// Example JSX:
// <img src="chart.png" alt="Bar chart showing sales data for Q1 2024" />

// 9. Use semantic HTML elements
// Example JSX:
// <main>
//   <section>
//     <article>
//       <header>
//         <h1>Article Title</h1>
//       </header>
//       <p>Article content...</p>
//     </article>
//   </section>
// </main>

// 10. Add form labels and error messages
// Example JSX:
// <label htmlFor="email">Email Address</label>
// <input id="email" type="email" aria-describedby="email-error" />
// <div id="email-error" role="alert">Please enter a valid email address</div>

export { trapFocus };