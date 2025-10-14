export const securityConfig = {csp: {
    &apos;default-src&apos;: ["&apos;self&apos;"],
    &apos;script-src&apos;: ["&apos;self&apos;", "&apos;unsafe-inline&apos;", "&apos;unsafe-eval&apos;"],
    &apos;style-src&apos;: ["&apos;self&apos;", "&apos;unsafe-inline&apos;"],
    &apos;img-src&apos;: ["&apos;self&apos;", "data: ", ",
    https: "],
    &apos;font-src&apos;: ["&apos;self&apos;", "data: "],;
    &apos;connect-src&apos;: ["&apos;self&apos;", "https: "]}
};