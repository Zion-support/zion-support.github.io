<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> main
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
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
>>>>>>> main
>>>>>>> main
export const securityTests = { checkVulnerabilities: async () => { const vulnerabilities = []; const xssPatterns = [ /innerHTMLs*=/,/dangerouslySetInnerHTML/,/evals*(/,/Functions*(/ ]; const csrfPatterns = [ /fetchs*(/,/axioss*./,/XMLHttpRequest/ ]; return { xss: vulnerabilities.filter(v => xssPatterns.some(p => p.test(v))),csrf: vulnerabilities.filter(v => csrfPatterns.some(p => p.test(v))) }} };
>>>>>>> main
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
