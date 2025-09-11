<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Security test configuration
export const securityTests = {
  // Check for common security vulnerabilities
  "checkVulnerabilities": async () => {
    const vulnerabilities = [];
    // Check for XSS vulnerabilities
    const xssPatterns = [/innerHTMLs*=/,
      /dangerouslySetInnerHTML/,
      /evals*(/,
      /Functions*(/
    ];
    // Check for CSRF vulnerabilities
    const csrfPatterns = [/fetchs*(/,
      /axioss*./,
      /XMLHttpRequest/
    ];
    return {
      "xss": vulnerabilities && vulnerabilities.filter(v => xssPatterns && xssPatterns.some(p => p && p.test(v))),
      "csrf": vulnerabilities && vulnerabilities.filter(v => csrfPatterns && csrfPatterns.some(p => p && p.test(v)))
    }}
};
<<<<<<< HEAD
export const securityTests = { checkVulnerabilities: async () => { const vulnerabilities = []; const xssPatterns = [ /innerHTMLs*=/,/dangerouslySetInnerHTML/,/evals*(/,/Functions*(/ ]; const csrfPatterns = [ /fetchs*(/,/axioss*./,/XMLHttpRequest/ ]; return { xss: vulnerabilities.filter(v => xssPatterns.some(p => p.test(v))),csrf: vulnerabilities.filter(v => csrfPatterns.some(p => p.test(v))) }} };
export const securityTests = { checkVulnerabilities: async () => { const vulnerabilities = []; const xssPatterns = [ /innerHTMLs*=/,/dangerouslySetInnerHTML/,/evals*(/,/Functions*(/ ]; const csrfPatterns = [ /fetchs*(/,/axioss*./,/XMLHttpRequest/ ]; return { xss: vulnerabilities && vulnerabilities.filter(v => xssPatterns && xssPatterns.some(p => p && p.test(v))),csrf: vulnerabilities && vulnerabilities.filter(v => csrfPatterns && csrfPatterns.some(p => p && p.test(v))) }} };
export const securityTests = { checkVulnerabilities: async () => { const vulnerabilities = []; const xssPatterns = [ /innerHTMLs*=/,/dangerouslySetInnerHTML/,/evals*(/,/Functions*(/ ]; const csrfPatterns = [ /fetchs*(/,/axioss*./,/XMLHttpRequest/ ]; return { xss: vulnerabilities && vulnerabilities.filter(v => xssPatterns && xssPatterns.some(p => p && p.test(v))),csrf: vulnerabilities && vulnerabilities.filter(v => csrfPatterns && csrfPatterns.some(p => p && p.test(v))) }} };
export const securityTests = { checkVulnerabilities: async () => { const vulnerabilities = []; const xssPatterns = [ /innerHTMLs*=/,/dangerouslySetInnerHTML/,/evals*(/,/Functions*(/ ]; const csrfPatterns = [ /fetchs*(/,/axioss*./,/XMLHttpRequest/ ]; return { xss: vulnerabilities && vulnerabilities.filter(v => xssPatterns && xssPatterns.some(p => p && p.test(v))),csrf: vulnerabilities && vulnerabilities.filter(v => csrfPatterns && csrfPatterns.some(p => p && p.test(v))) }} };
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
