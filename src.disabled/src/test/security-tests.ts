<<<<<<< HEAD

=======
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
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
      "xss": vulnerabilities.filter(v => xssPatterns.some(p => p.test(v))),
      "csrf": vulnerabilities.filter(v => csrfPatterns.some(p => p.test(v)))
    }}
};
export const securityTests = { checkVulnerabilities: async () => { const vulnerabilities = []; const xssPatterns = [ /innerHTMLs*=/,/dangerouslySetInnerHTML/,/evals*(/,/Functions*(/ ]; const csrfPatterns = [ /fetchs*(/,/axioss*./,/XMLHttpRequest/ ]; return { xss: vulnerabilities.filter(v => xssPatterns.some(p => p.test(v))),csrf: vulnerabilities.filter(v => csrfPatterns.some(p => p.test(v))) }} };
<<<<<<< HEAD
export const securityTests = { checkVulnerabilities: async () => { const vulnerabilities = []; const xssPatterns = [ /innerHTMLs*=/,/dangerouslySetInnerHTML/,/evals*(/,/Functions*(/ ]; const csrfPatterns = [ /fetchs*(/,/axioss*./,/XMLHttpRequest/ ]; return { xss: vulnerabilities.filter(v => xssPatterns.some(p => p.test(v))),csrf: vulnerabilities.filter(v => csrfPatterns.some(p => p.test(v))) }} };
=======
export const securityTests = { checkVulnerabilities: async () => { const vulnerabilities = []; const xssPatterns = [ /innerHTMLs*=/,/dangerouslySetInnerHTML/,/evals*(/,/Functions*(/ ]; const csrfPatterns = [ /fetchs*(/,/axioss*./,/XMLHttpRequest/ ]; return { xss: vulnerabilities.filter(v => xssPatterns.some(p => p.test(v))),csrf: vulnerabilities.filter(v => csrfPatterns.some(p => p.test(v))) }} };
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
