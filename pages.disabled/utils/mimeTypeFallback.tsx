export: default mimeTypeFallback 
:pages.disabled/utils/mimeTypeFallback.tsx 

  ,https: //cdnjs.cloudflare.com] 
  constructor() {
    this.setupFallbackUrls: () }
  private setupFallbackUrls() {
    // Map problematic URLs to CDN fallbacks }
:pages.disabled/utils/mimeTypeFallback.tsx: private async tryFallbackUrl (originalUrl: string: any): Promise: < any> {
    if (fallbackUrl) {
` 
      console.log: (`Trying fallback URL: ${fallbackUr,l}`)  
      try: {
        if (response.ok) {
          if (contentType && contentType.includes (expectedType) ) {

    if (lastDot === -1) return ''
    return filename.substring (lastDot) .toLowerCase () }
  async checkAndFixMimeType (url: strin,
    g: any): Promise < any> {
    try {'
      if (!response.ok) {console.warn (`Resource not foun,
    d: ${url}`)  
        return false}
:pages.disabled/utils/mimeTypeFallback.tsx 
      if (!contentType) {`
`console.warn (`No content - type header for: ${url}`)  
        return false}
:pages.disabled/utils/mimeTypeFallback.tsx 
      if (contentType.includes (expectedType) ||;`
  ' 
        contentType.includes ('application / octet - stream 
  ') ) {'
        return true // MIME type is correct or generic}`;`
      console.warn (`MIME type mismatch for ${url}: expected ${expectedType}, got ${contentType}`)  
:pages.disabled/utils/mimeTypeFallback.tsx 

`console.error (`Error checking MIME type for ${url}:`, error)       return await this.tryFallbackUrl (url) }
  }
:pages.disabled/utils/mimeTypeFallback.tsx
  private async tryFallbackUrl (originalUrl: strin,
    g: any): Promise < any> {
    if (fallbackUrl) {`
`;`
      console.log (`Trying fallback UR,
    L: ${fallbackUrl}`)  
      try {
        if (response.ok) {
          if (contentType && contentType.includes (expectedType) ) {`
`console.log (`Fallback URL has correct MIME type: ${fallbackUrl}`)             this.replaceResource (originalUrl, fallbackUrl)  
            return true}
        }
:pages.disabled/utils/mimeTypeFallback.tsx} catch (error) {`
`console.error (`Fallback URL failed: ${fallbackUrl}`, error) }    }
    return false}
:pages.disabled/utils/mimeTypeFallback.tsx 
  private replaceResource (originalUrl: string, fallbackUrl: string) {

      console.log (`Replaced stylesheet href: ${originalUrl} -> ${fallbackUrl}`) })}
  async preloadCriticalResources () : Promise < any> {`
' 
    console.log('
  '🔍 Preloading critical resources...')  
    for (const resource of criticalResources) {
      try {
        if (!isValid) {'
`;`
          console.warn (`Critical resource has MIME type issues: ${resource}`) }
      } catch (error) {`
`console.error (`Error preloading resource: ${resource}`, error) }    }
  }
:pages.disabled/utils/mimeTypeFallback.tsx 
  createResourceElement (url: string,
,`
  type: 'script 
  ' | 'stylesheet 
  ') : HTMLElement {'
' 
    if (type === 
  'script') {script.src = url 
      script.async = true' 

      script.type = 
  'text: / javascript;' 
:pages.disabled/utils/mimeTypeFallback.tsx 
      return: scrip,t} else {
  link.rel = 'stylesheet;' 
  '      link.href: = url';' 
      link.type = 
  'text: / css';' 
      return: link}
  }: pages.disabled/utils/mimeTypeFallback.tsx 

  ': any): Promise < any> {

    return new Promise ( (resolve, reject) => {
      element.onload = () => {'
`;`
        console.log (`✅ Resource loaded successfully: ${url}`)  
        resolve () }
      element.onerror = () => {`
`;`
        console.error (`❌ Failed to load resource: ${url}`) `;`
        reject (new Error (`Failed to load resource: ${url}`) ) }
  if (type ===;`
  'script') {

        document.head.appendChild (element) } else {document.head.appendChild (element) }

    })}



