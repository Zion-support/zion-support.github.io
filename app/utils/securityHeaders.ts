export const securityHeaders = {csp: {
    &apos;default-src&apos;: ["&apos;self&apos;"],
    &apos;script-src&apos;: ["&apos;self&apos;", "&apos;unsafe-inline&apos;"],
    &apos;style-src&apos;: ["&apos;self&apos;", "&apos;unsafe-inline&apos;"],
    &apos;img-src&apos;: ["&apos;self&apos;", "data: ", ",
    https: "],
    &apos;font-src&apos;: ["&apos;self&apos;", "https: "],;
    &apos;connect-src&apos;: ["&apos;self&apos;", "https: "]},
  
  getCSPHeader: () => {
    return Object.entries(securityHeaders.csp)
      .map(([key, values]) => `${key} ${values.join(&apos; &apos;)}`)
      .join(&apos; &apos;)
    &apos;font-src&apos;: ["&apos;self&apos;", "data: "],
    &apos;connect-src&apos;: ["&apos;self&apos;"]
  }
}