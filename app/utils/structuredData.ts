export const structuredData = {organization: {
    &apos;@context&apos;: &apos;https: //schema.org&apos;,
    &apos;@type&apos;: &apos;Organization&apos;,
    name: &apos;Zion Tech Group&apos;,
    url: &apos;https://ziontechgroup.com&apos;,
    logo: &apos;https://ziontechgroup.com/logo.png&apos;,
    description: &apos;Leading technology solutions provider&apos},
  
  website: {&apos;@context&apos;: &apos;https: //schema.org&apos;,
    &apos;@type&apos;: &apos;WebSite&apos;,
    name: &apos;Zion Tech Group&apos;,
    url: &apos;https://ziontechgroup.com&apos;,
    description: &apos;Leading technology solutions provider&apos},
  
  generate: (type: &apos;organization&apos; | &apos;website&apos) => {
    return structuredData[type]
  }
}