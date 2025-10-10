import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('♿ Starting accessibility enhancements...');

// Create accessibility improvements for the main HTML file
const indexPath = path.join(__dirname, '../dist/index.html');
if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Add accessibility improvements
  const accessibilityScript = `
    <script></scrip>
      // Accessibility enhancements
      (function() {
        'use strict';
        
        // Skip to main content functionality
        function addSkipLink() {
          const skipLink = document.createElement('a');
          skipLink.href = '#main-content';
          skipLink.textContent = 'Skip to main content';
          skipLink.className = 'skip-link';
          skipLink.style.cssText = \`
            position: absolute;
            top: -40 px;
            left: 6 px;
            background: #000;
            color: #fff;
            padding: 8 px;
            text-decoration: none;
            z-index: 1000;
            border-radius: 4 px;
            transition: top 0.3 s;
          \`;
          skipLink.addEventListener('focus', function() {
            this.style.top = '6 px';
          });
          skipLink.addEventListener('blur', function() {
            this.style.top = '-40 px';
          });
          document.body.insertBefore(skipLink, document.body.firstChild);
        }
        
        // High contrast mode toggle
        function addHighContrastToggle() {
          const toggle = document.createElement('button');
          toggle.textContent = 'High Contrast';
          toggle.className = 'accessibility-toggle';
          toggle.style.cssText = \`
            position: fixed;
            top: 10 px;
            right: 10 px;
            z-index: 1000;
            background: #000;
            color: #fff;
            border: 2 px solid #fff;
            padding: 8 px 16 px;
            border-radius: 4 px;
            cursor: pointer;
            font-size: 14 px;
          \`;
          toggle.addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
            this.textContent = document.body.classList.contains('high-contrast') ? 'Normal Contrast' : 'High Contrast';
          });
          document.body.appendChild(toggle);
        }
        
        // Font size controls
        function addFontSizeControls() {
          const controls = document.createElement('div');
          controls.className = 'font-size-controls';
          controls.style.cssText = \`
            position: fixed;
            top: 50 px;
            right: 10 px;
            z-index: 1000;
            background: #000;
            color: #fff;
            padding: 10 px;
            border-radius: 4 px;
            display: flex;
            flex-direction: column;
            gap: 5 px;
          \`;
          
          const increaseBtn = document.createElement('button');
          increaseBtn.textContent = 'A+';
          increaseBtn.addEventListener('click', () => {
            const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
            document.documentElement.style.fontSize = (currentSize + 2) + 'px';
          });
          
          const decreaseBtn = document.createElement('button');
          decreaseBtn.textContent = 'A-';
          decreaseBtn.addEventListener('click', () => {
            const currentSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
            document.documentElement.style.fontSize = Math.max(currentSize - 2, 12) + 'px';
          });
          
          const resetBtn = document.createElement('button');
          resetBtn.textContent = 'Reset';
          resetBtn.addEventListener('click', () => {
            document.documentElement.style.fontSize = '16 px';
          });
          
          controls.appendChild(increaseBtn);
          controls.appendChild(decreaseBtn);
          controls.appendChild(resetBtn);
          document.body.appendChild(controls);
        }
        
        // Focus management for modals and dropdowns
        function enhanceFocusManagement() {
          // Trap focus in modals
          document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
              const modal = document.querySelector('.modal:not([style*="display: none"])');
              if (modal) {
                const focusableElements = modal.querySelectorAll(
                  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
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
            }
            
            // Close modals with Escape key
            if (e.key === 'Escape') {
              const modal = document.querySelector('.modal:not([style*="display: none"])');
              if (modal) {
                const closeBtn = modal.querySelector('[aria-label="Close"], .close-btn');
                if (closeBtn) closeBtn.click();
              }
            }
          });
        }
        
        // Add ARIA labels to interactive elements
        function addAriaLabels() {
          // Add aria-labels to buttons without text
          const iconButtons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
          iconButtons.forEach(button => {
            const icon = button.querySelector('svg, i');
            if (icon) {
              const iconName = icon.getAttribute('class') || icon.tagName.toLowerCase();
              button.setAttribute('aria-label', \`\${iconName} button\`);
            }
          });
          
          // Add role="button" to clickable divs
          const clickableDivs = document.querySelectorAll('div[onclick], div[class*="cursor-pointer"]');
          clickableDivs.forEach(div => {
            if (!div.getAttribute('role')) {
              div.setAttribute('role', 'button');
              div.setAttribute('tabindex', '0');
            }
          });
          
          // Add aria-expanded to collapsible elements
          const collapsibles = document.querySelectorAll('[class*="dropdown"], [class*="collapse"]');
          collapsibles.forEach(element => {
            if (!element.getAttribute('aria-expanded')) {
              element.setAttribute('aria-expanded', 'false');
            }
          });
        }
        
        // Announce page changes to screen readers
        function addLiveRegion() {
          const liveRegion = document.createElement('div');
          liveRegion.setAttribute('aria-live', 'polite');
          liveRegion.setAttribute('aria-atomic', 'true');
          liveRegion.className = 'sr-only';
          liveRegion.style.cssText = \`
            position: absolute;
            width: 1 px;
            height: 1 px;
            padding: 0;
            margin: -1 px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          \`;
          document.body.appendChild(liveRegion);
          
          // Announce navigation changes
          const originalPushState = history.pushState;
          history.pushState = function() {
            originalPushState.apply(history, arguments);
            liveRegion.textContent = 'Page navigation complete';
          };
        }
        
        // Initialize accessibility features
        document.addEventListener('DOMContentLoaded', function() {
          addSkipLink();
          addHighContrastToggle();
          addFontSizeControls();
          enhanceFocusManagement();
          addAriaLabels();
          addLiveRegion();
        });
        
        // Add high contrast styles
        const highContrastStyles = \`
          .high-contrast {
            filter: contrast(150%) brightness(120%);
          }
          .high-contrast * {
            border-color: currentColor !important;
          }
          .high-contrast button,
          .high-contrast a {
            border: 2 px solid currentColor !important;
          }
        \`;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = highContrastStyles;
        document.head.appendChild(styleSheet);
      })();
    </script>
  `;
  
  // Insert accessibility script before closing body tag
  indexContent = indexContent.replace('</body>', `${accessibilityScript}</body>`);
  
  fs.writeFileSync(indexPath, indexContent);
  console.log('✅ Enhanced accessibility features');
}

// Create accessibility statement
const accessibilityStatement = `# Accessibility Statement

## Our Commitment
Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.

## Conformance Status
This website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.

## Accessibility Features
- Skip to main content links
- High contrast mode toggle
- Font size controls
- Keyboard navigation support
- Screen reader compatibility
- ARIA labels and roles
- Focus management
- Alternative text for images

## Feedback
We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers:

- Phone: +1 (302) 464-0950
- Email: kleber@ziontechgroup.com
- Address: 364 E Main St STE 1008, Middletown, DE 19709

## Assessment Approach
We assessed the accessibility of our website through:
- Self-evaluation
- Automated testing tools
- Manual testing with assistive technologies
- User feedback

## Known Issues
We are aware of the following accessibility issues and are working to fix them:
- Some images may lack alternative text
- Some interactive elements may not have proper ARIA labels
- Color contrast may not meet WCAG standards in some areas

## Last Updated
This accessibility statement was last updated on ${new Date().toLocaleDateString()}.

## Contact Us
If you have any questions or concerns about our accessibility efforts, please contact us at kleber@ziontechgroup.com or call +1 (302) 464-0950.
`;

fs.writeFileSync(path.join(__dirname, '../dist/accessibility-statement.md'), accessibilityStatement);
console.log('✅ Created accessibility statement');

console.log('♿ Accessibility enhancements completed!');