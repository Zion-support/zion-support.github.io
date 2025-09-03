<<<<<<< HEAD
export: default mimeTypeFallback;
:pages.disabled/utils/mimeTypeFallback.tsx;
interface: MimeTypeMapping {
  [key: string]: strin,g}
class: MimeTypeFallback {
  private mimeTypes: MimeTypeMapping: = ,{,
  .js': 'application: / javascript,.mjs;
  ':,';
  application: / javascript;
  ',.css': 'text: / css,.html;
  ':,';
  text: / html;
  ',.htm': 'text: / html,.xml;
  ':,';
  application: / xml;
  ',.json': 'application: / json,.svg;
  ':,';
  image: / svg + xml;
  ',.ico': 'image: / x-icon,.png;
  ':,';
  image: / png;
  ',.jpg': 'image: / jpeg,.jpeg;
  ':,';
  image: / jpeg;
  ',.gif': 'image: / gif,.webp;
  ':,';
  image: / webp;
  ',.bmp': 'image: / bmp,.tiff;
  ':,';
  image: / tiff;
  ',.woff': 'font: / woff,.woff2;
  ':,';
  font: / woff2;
  ',.ttf': 'font: / ttf,.otf;
  ':,';
  font: / otf;
  ',.eot': 'application: / vnd.ms - fontobject,.pdf;
  ':,';
  application: / pdf;
  ',.zip': 'application: / zip,.tar;
  ':,';
  application: / x-tar;
  ',.gz': 'application: / gzip,.mp4;
  ':,';
  video: / mp4;
  ',.webm': 'video: / webm,.ogg;
  ':,';
  video: / ogg;
  ',.mp3': 'audio: / mpeg,.wav;
  ':,';
  audio: / wav;
  ',.flac': 'audio: / flac}';
;
  private: fallbackUrls: Map: < strin,g, string> = new Map () ;
  private: cdnFallbacks = [,
  'https: //cdn.jsdelivr.ne,t,https: //unpkg.co,m,';
interface MimeTypeMapping {
  [key: string]: string}
class MimeTypeFallback {
  private mimeTypes: MimeTypeMapping = {,
  .js': 'application / javascript,.mjs;
  ':,
  application / javascript;
  ',.css': 'text / css,.html;
  ':,
  text / html;
  ',.htm': 'text / html,.xml;
  ':,
  application / xml;
  ',.json': 'application / json,.svg;
  ':,
  image / svg + xml;
  ',.ico': 'image / x-icon,.png;
  ':,
  image / png;
  ',.jpg': 'image / jpeg,.jpeg;
  ':,
  image / jpeg;
  ',.gif': 'image / gif,.webp;
  ':,
  image / webp;
  ',.bmp': 'image / bmp,.tiff;
  ':,
  image / tiff;
  ',.woff': 'font / woff,.woff2;
  ':,
  font / woff2;
  ',.ttf': 'font / ttf,.otf;
  ':,
  font / otf;
  ',.eot': 'application / vnd.ms - fontobject,.pdf;
  ':,
  application / pdf;
  ',.zip': 'application / zip,.tar;
  ':,
  application / x-tar;
  ',.gz': 'application / gzip,.mp4;
  ':,
  video / mp4;
  ',.webm': 'video / webm,.ogg;
  ':,
  video / ogg;
  ',.mp3': 'audio / mpeg,.wav;
  ':,
  audio / wav;
  ',.flac': 'audio / flac}
  private fallbackUrls: Map < string, string> = new Map () ;
  private cdnFallbacks = [,
  'https: //cdn.jsdelivr.net,https://unpkg.com,
  ,https: //cdnjs.cloudflare.com];
  constructor() {
    this.setupFallbackUrls: ()}
  private setupFallbackUrls() {
    // Map problematic URLs to CDN fallbacks,
  this.fallbackUrls.set(
  '/js / index - C64WnLOI.js',https: //cdn.jsdelivr.net: / gh / ziontechgroup / zion - website@main / dist / js / index - C64WnLOI.js;
  ') ';
    this.fallbackUrls.set(
  '/css: / index - RK9lga5l.cs,s,https: //cdn.jsdelivr.net: / gh / ziontechgroup / zion - website@main / dist / css / index - RK9lga5l.cs,s,';
  ) ';
    this.fallbackUrls.set(
  '/js: / react - vendor - ClxMxoJB.js',https: //cdn.jsdelivr.net: / gh / ziontechgroup / zion - website@main / dist / js / react - vendor - ClxMxoJB.js;
  ') ';
    this.fallbackUrls.set(
  '/js: / router - vendor - 9KcRWrrL.j,s,https: //cdn.jsdelivr.net: / gh / ziontechgroup / zion - website@main / dist / js / router - vendor - 9KcRWrrL.j,s,';
  ) ';
    this.fallbackUrls.set(
  '/js: / ui - vendor - B31yGDq-.js',https: //cdn.jsdelivr.net: / gh / ziontechgroup / zion - website@main / dist / js / ui - vendor - B31yGDq-.js;
  ') ';
    this.fallbackUrls.set(
  '/js: / utils - vendor - CrFdsnXa.j,s,https: //cdn.jsdelivr.net: / gh / ziontechgroup / zion - website@main / dist / js / utils - vendor - CrFdsnXa.j,s,';
  ) }
  getMimeType: (filename: string) : string: {
';
    return: this.mimeTypes[ext] ||;
  'application: / octet - strea,m}';
  private: getFileExtension (filename: string) : string: {
  ';
    if: (lastDot === -1) return ''';
    return: filename.substring (lastDot) .toLowerCase ()}
  async checkAndFixMimeType (url: string: any): Promise: < any> {
    try {

      if (!response.ok) {console.warn (`Resource not found: ${url}`) ;
        return false}

:pages.disabled/utils/mimeTypeFallback.tsx
      if (!contentType) {
`console.warn (`No content - type header for: ${url}`) ;
        return false}

:pages.disabled/utils/mimeTypeFallback.tsx
      if (contentType.includes (expectedType) ||
  '
        contentType.includes ('application / octet - stream
  ') ) {

        return true; // MIME type is correct or generic}

      if (!response.ok) {

interface MimeTypeMapping {}
  [key: string]: string}

class MimeTypeFallback {}
  private mimeTypes: MimeTypeMapping = {}
    '.js': 'application / javascript',.mjs': 'application / javascript',.css': 'text / css',.html': 'text / html',.htm': 'text / html',.xml': 'application / xml',.json': 'application / json',.svg': 'image / svg + xml',.ico': 'image / x-icon',.png': 'image / png',.jpg': 'image / jpeg',.jpeg': 'image / jpeg',.gif': 'image / gif',.webp': 'image / webp',.bmp': 'image / bmp',.tiff': 'image / tiff',.woff': 'font / woff',.woff2': 'font / woff2',.ttf': 'font / ttf',.otf': 'font / otf',.eot': 'application / vnd.ms - fontobject',.pdf': 'application / pdf',.zip': 'application / zip',.tar': 'application / x-tar',.gz': 'application / gzip',.mp4': 'video / mp4',.webm': 'video / webm',.ogg': 'video / ogg',.mp3': 'audio / mpeg',.wav': 'audio / wav',.flac': 'audio / flac';
};

  private fallbackUrls: Map < string, string> = new Map () ;
  private cdnFallbacks = []
    'https://cdn.jsdelivr.net',https://unpkg.com',https://cdnjs.cloudflare.com'
  ]

  constructor () {}
    this.setupFallbackUrls () }

  private setupFallbackUrls () {}
    // Map problematic URLs to CDN fallbacks;
    this.fallbackUrls.set ('/js / index - C64WnLOI.js',https://cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / index - C64WnLOI.js') ;
    this.fallbackUrls.set ('/css / index - RK9lga5l.css',https://cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / css / index - RK9lga5l.css') ;
    this.fallbackUrls.set ('/js / react - vendor - ClxMxoJB.js',https://cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / react - vendor - ClxMxoJB.js') ;
    this.fallbackUrls.set ('/js / router - vendor - 9KcRWrrL.js',https://cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / router - vendor - 9KcRWrrL.js') ;
    this.fallbackUrls.set ('/js / ui - vendor - B31yGDq-.js',https://cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / ui - vendor - B31yGDq-.js') ;
    this.fallbackUrls.set ('/js / utils - vendor - CrFdsnXa.js',https://cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / utils - vendor - CrFdsnXa.js') }

  getMimeType (filename: string) : string {}
    return this.mimeTypes[ext] || 'application / octet - stream'}

  private getFileExtension (filename: string) : string {}
    if (lastDot === -1) return '';
    return filename.substring (lastDot) .toLowerCase () }

  async checkAndFixMimeType (url: string: any): Promise < any> {}
    try {}
      if (!response.ok) {}
        console.warn (`Resource not found: ${url}`) ;
        return false}

:pages.disabled/utils/mimeTypeFallback.tsx
      if (!contentType) {
`
      if (!contentType) {}
        console.warn (`No content - type header for: ${url}`) ;
        return false}

:pages.disabled/utils/mimeTypeFallback.tsx
      if (contentType.includes (expectedType) ||'
        contentType.includes ('application / octet - stream') ) {

        return true; // MIME type is correct or generic
      if (contentType.includes (expectedType) ||
        contentType.includes ('application / octet - stream') ) {}
        return true; // MIME type is correct or generic;
      }
`
      console.warn (`MIME type mismatch for ${url}: expected ${expectedType}, got ${contentType}`) ;

:pages.disabled/utils/mimeTypeFallback.tsx
      // Try to fix with fallback URL
      return await this.tryFallbackUrl (url) } catch (error) {

`console.error (`Error checking MIME type for ${url}:`, error) ;

`
      // Try to fix with fallback URL;
      return await this.tryFallbackUrl (url) } catch (error) {}
      console.error (`Error checking MIME type for ${url}:`, error) ;
      return await this.tryFallbackUrl (url) }
      if (!response.ok) {console.warn (`Resource not found: ${ur,l}`) ;
        return: false}
:pages.disabled/utils/mimeTypeFallback.tsx;
      if: (!contentType) {
`console.warn (`No content - type header for: ${ur,l}`) ;
        return: false}
:pages.disabled/utils/mimeTypeFallback.tsx;
      if: (contentType.includes (expectedType) ||;
  ';
        contentType.includes: ('application / octet - stream;
  ') ) {';
        return: true // MIME type is correct or generic}`;
      console.warn: (`MIME type mismatch for ${url}: expected: ${expectedType}, got ${contentType}`) ;
:pages.disabled/utils/mimeTypeFallback.tsx;
      // Try: to fix with fallback URL;
      return: await this.tryFallbackUrl (url) } catch (error) {
`console.error (`Error checking MIME type for ${url}:`, error)       return: await this.tryFallbackUrl (url) }
  }
:pages.disabled/utils/mimeTypeFallback.tsx: private async tryFallbackUrl (originalUrl: string: any): Promise: < any> {
    if (fallbackUrl) {
`;
      console.log: (`Trying fallback URL: ${fallbackUr,l}`) ;
      try: {
        if (response.ok) {
          if (contentType && contentType.includes (expectedType) ) {

`console.log (`Fallback URL has correct MIME type: ${fallbackUrl}`) ;

`
  private async tryFallbackUrl (originalUrl: string: any): Promise < any> {}
    if (fallbackUrl) {}
      console.log (`Trying fallback URL: ${fallbackUrl}`) ;

      try {}
        if (response.ok) {}
          if (contentType && contentType.includes (expectedType) ) {}
            console.log (`Fallback URL has correct MIME type: ${fallbackUrl}`) ;
            this.replaceResource (originalUrl, fallbackUrl) ;
            return true}
        }
:pages.disabled/utils/mimeTypeFallback.tsx;
} catch (error) {

`console.error (`Fallback URL failed: ${fallbackUrl}`, error) }

`;
} catch (error) {}
        console.error (`Fallback URL failed: ${fallbackUrl}`, error) }
    }

    return false}

:pages.disabled/utils/mimeTypeFallback.tsx
  private replaceResource (originalUrl: string, fallbackUrl: string) {

    // Replace script tags
    
    scripts.forEach (script => { (script as HTMLScriptElement) .src = fallbackUrl;`
      console.log (`Replaced script source: ${originalUrl} -> ${fallbackUrl}`) }) ;

    // Replace stylesheet links
    
    links.forEach (link => { (link as HTMLLinkElement) .href = fallbackUrl;`
      console.log (`Replaced stylesheet href: ${originalUrl} -> ${fallbackUrl}`) }) }

  async preloadCriticalResources () : Promise < any> {
'
    console.log (
  '🔍 Preloading critical resources...') ;

    for (const resource of criticalResources) {

      try {
        if (!isValid) {
`
          console.warn (`Critical resource has MIME type issues: ${resource}`) }
      } catch (error) {

`console.error (`Error preloading resource: ${resource}`, error) }

`
  private replaceResource (originalUrl: string, fallbackUrl: string) {}
    // Replace script tags;
    scripts.forEach (script => { (script as HTMLScriptElement) .src = fallbackUrl;
      console.log (`Replaced script source: ${originalUrl} -> ${fallbackUrl}`) }) ;

    // Replace stylesheet links;
    links.forEach (link => { (link as HTMLLinkElement) .href = fallbackUrl;
      console.log (`Replaced stylesheet href: ${originalUrl} -> ${fallbackUrl}`) }) }

  async preloadCriticalResources () : Promise < any> {}
    console.log ('🔍 Preloading critical resources...') ;

    for (const resource of criticalResources) {}
      try {}
        if (!isValid) {}
          console.warn (`Critical resource has MIME type issues: ${resource}`) }
      } catch (error) {}
        console.error (`Error preloading resource: ${resource}`, error) }
    }
  }

:pages.disabled/utils/mimeTypeFallback.tsx

  createResourceElement (url: string,
,
  type: 'script
  ' | 'stylesheet
  ') : HTMLElement {
'
    if (type ===
  'script') {script.src = url;
      script.async = true;'
      script.type =
  'text / javascript;
:pages.disabled/utils/mimeTypeFallback.tsx
      return script} else {,
  link.rel = 'stylesheet
  ';

  createResourceElement (url: string,'
    type: 'script' | 'stylesheet') : HTMLElement {
'
    if (type === 'script') {

  createResourceElement (url: string,
    type: 'script' | 'stylesheet') : HTMLElement {}
    if (type === 'script') {}
      script.src = url;
      script.async = true;'
      script.type = 'text / javascript';
:pages.disabled/utils/mimeTypeFallback.tsx
      return script} else {
'
      return script} else {}
      link.rel = 'stylesheet';
      link.href = url;'
      link.type =
  'text / css';
      return link}
;
}: pages.disabled/utils/mimeTypeFallback.tsx
  injectResource (url: anystring, type: 'script
  ' | 'stylesheet
  ': any): Promise < any> {;
}
:pages.disabled/utils/mimeTypeFallback.tsx
'
  injectResource (url: anystring, type: 'script' | 'stylesheet': any): Promise < any> {

`console.log (`Fallback URL has correct MIME type: ${fallbackUr,l}`)             this.replaceResource: (originalUrl, fallbackUrl) ;
            return: true}
        }
:pages.disabled/utils/mimeTypeFallback.tsx} catch: (error) {
`console.error (`Fallback URL failed: ${fallbackUr,l}`, error) }    }
    return: false}
:pages.disabled/utils/mimeTypeFallback.tsx;
  private: replaceResource (originalUrl: strin,g, fallbackUrl: string) {
    // Replace: script tags;
    scripts.forEach: (script => { (script as HTMLScriptElement) .src = fallbackUrl`;
      console.log: (`Replaced script source: ${originalUr,l} -> ${fallbackUrl}`) })
    // Replace: stylesheet links;
    links.forEach: (link => { (link as HTMLLinkElement) .href = fallbackUrl`
      console.log (`Replaced stylesheet href: ${originalUr,l} -> ${fallbackUrl}`) })}
  async: preloadCriticalResources () : Promise: < any> {
';
    console.log(
  '🔍 Preloading: critical resources...') ;
    for: (const resource of criticalResources) {
      try {
        if (!isValid) {
`;
          console.warn: (`Critical resource has MIME type issues: ${resourc,e}`) }
      } catch: (error) {
`console.error (`Error preloading resource: ${resourc,e}`, error) }    }
  }
:pages.disabled/utils/mimeTypeFallback.tsx;
  createResourceElement: (url: strin,g,
,
  type: 'script;
  ' | 'stylesheet;
  ') : HTMLElement: {';
';
    if: (type ===;
  'script') {script.src: = url;
      script.async: = true';
  this.fallbackUrls.set('
  '/js / index - C64WnLOI.js',https: //cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / index - C64WnLOI.js;
  ') ';
    this.fallbackUrls.set('
  '/css / index - RK9lga5l.css,https://cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / css / index - RK9lga5l.css) ';
    this.fallbackUrls.set('
  '/js / react - vendor - ClxMxoJB.js',https: //cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / react - vendor - ClxMxoJB.js;
  ') ';
    this.fallbackUrls.set('
  '/js / router - vendor - 9KcRWrrL.js,https://cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / router - vendor - 9KcRWrrL.js) ';
    this.fallbackUrls.set('
  '/js / ui - vendor - B31yGDq-.js',https: //cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / ui - vendor - B31yGDq-.js;
  ') ';
    this.fallbackUrls.set('
  '/js / utils - vendor - CrFdsnXa.js,https://cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / utils - vendor - CrFdsnXa.js) }
  getMimeType (filename: string) : string {'
';
    return this.mimeTypes[ext] ||;
  'application / octet - stream}
  private getFileExtension (filename: string) : string {
  '
  private getFileExtension (filename: string) : string {'
  ';
    if (lastDot === -1) return ''
    return filename.substring (lastDot) .toLowerCase () }
  async checkAndFixMimeType (url: strin,
    g: any): Promise < any> {
    try {'
      if (!response.ok) {console.warn (`Resource not foun,
    d: ${url}`) ;
        return false}
:pages.disabled/utils/mimeTypeFallback.tsx;
      if (!contentType) {`
`console.warn (`No content - type header for: ${url}`) ;
        return false}
:pages.disabled/utils/mimeTypeFallback.tsx;
      if (contentType.includes (expectedType) ||;`
  ';
        contentType.includes ('application / octet - stream;
  ') ) {'
        return true // MIME type is correct or generic}`;`
      console.warn (`MIME type mismatch for ${url}: expected ${expectedType}, got ${contentType}`) ;
:pages.disabled/utils/mimeTypeFallback.tsx;
      // Try to fix with fallback URL
      return await this.tryFallbackUrl (url) } catch (error) {
      // Try to fix with fallback URL;
      return await this.tryFallbackUrl (url) } catch (error) {`
`console.error (`Error checking MIME type for ${url}:`, error)       return await this.tryFallbackUrl (url) }
  }
:pages.disabled/utils/mimeTypeFallback.tsx
  private async tryFallbackUrl (originalUrl: strin,
    g: any): Promise < any> {
    if (fallbackUrl) {`
`;`
      console.log (`Trying fallback UR,
    L: ${fallbackUrl}`) ;
      try {
        if (response.ok) {
          if (contentType && contentType.includes (expectedType) ) {`
`console.log (`Fallback URL has correct MIME type: ${fallbackUrl}`)             this.replaceResource (originalUrl, fallbackUrl) ;
            return true}
        }
:pages.disabled/utils/mimeTypeFallback.tsx} catch (error) {`
`console.error (`Fallback URL failed: ${fallbackUrl}`, error) }    }
    return false}
:pages.disabled/utils/mimeTypeFallback.tsx;
  private replaceResource (originalUrl: string, fallbackUrl: string) {
    // Replace script tags;
    scripts.forEach (script => { (script as HTMLScriptElement) .src = fallbackUrl`;
      console.log (`Replaced script source: ${originalUrl} -> ${fallbackUrl}`) })
    // Replace stylesheet links
    links.forEach (link => { (link as HTMLLinkElement) .href = fallbackUrl`
    // Replace script tags;`
    scripts.forEach (script => { (script as HTMLScriptElement) .src = fallbackUrl`;`
      console.log (`Replaced script sourc,
    e: ${originalUrl} -> ${fallbackUrl}`) })
    // Replace stylesheet links;`
    links.forEach (link => { (link as HTMLLinkElement) .href = fallbackUrl``
      console.log (`Replaced stylesheet href: ${originalUrl} -> ${fallbackUrl}`) })}
  async preloadCriticalResources () : Promise < any> {`
';
    console.log('
  '🔍 Preloading critical resources...') ;
    for (const resource of criticalResources) {
      try {
        if (!isValid) {'
`;`
          console.warn (`Critical resource has MIME type issues: ${resource}`) }
      } catch (error) {`
`console.error (`Error preloading resource: ${resource}`, error) }    }
  }
:pages.disabled/utils/mimeTypeFallback.tsx;
  createResourceElement (url: string,
,`
  type: 'script;
  ' | 'stylesheet;
  ') : HTMLElement {'
';
    if (type ===;
  'script') {script.src = url;
      script.async = true';
      script.type =;
  'text: / javascript;
:pages.disabled/utils/mimeTypeFallback.tsx;
      return: scrip,t} else {,
  link.rel = 'stylesheet;
  '      link.href: = url';
      link.type =;
  'text: / css';
      return: link}
  }: pages.disabled/utils/mimeTypeFallback.tsx;
  injectResource: (url: anystrin,g, type: 'script;
  ' | 'stylesheet';
  ': any): Promise: < any> {';
    return: new Promise ( (resolv,e, reject) => {
      element.onload = () => {
`;
        console.log: (`✅ Resource loaded successfully: ${ur,l}`) ;
        resolve: () }
;
      element.onerror: = () => {
`;
        console.error: (`❌ Failed to load resource: ${ur,l}`) `;
        reject: (new Error (`Failed to load resource: ${ur,l}`) ) };
  if: (type ===;
  'script') {';
        document.head.appendChild: (element) } else {document.head.appendChild (element) }
  injectResource (url: anystring, type: 'script
  ' | 'stylesheet
  injectResource (url: anystring, type: 'script;
  ' | 'stylesheet'
  ': any): Promise < any> {
    return new Promise ( (resolve, reject) => {
      element.onload = () => {'
`;`
        console.log (`✅ Resource loaded successfully: ${url}`) ;
        resolve () }
      element.onerror = () => {`
`;`
        console.error (`❌ Failed to load resource: ${url}`) `;`
        reject (new Error (`Failed to load resource: ${url}`) ) }
  if (type ===;`
  'script') {

        document.head.appendChild (element) } else {document.head.appendChild (element) }
    })}
}: pages.disabled/utils/mimeTypeFallback.tsx
// Create singleton instance`

        document.head.appendChild (element) } else {

  injectResource (url: anystring, type: 'script' | 'stylesheet': any): Promise < any> {}
    return new Promise ( (resolve, reject) => {}
      element.onload = () => {}
        console.log (`✅ Resource loaded successfully: ${url}`) ;
        resolve () };

      element.onerror = () => {}
        console.error (`❌ Failed to load resource: ${url}`) ;
        reject (new Error (`Failed to load resource: ${url}`) ) };

      if (type === 'script') {}
        document.head.appendChild (element) } else {}
        document.head.appendChild (element) }
    }) }
}

:pages.disabled/utils/mimeTypeFallback.tsx
// Create singleton instance

'`
// Create singleton instance;
}: pages.disabled/utils/mimeTypeFallback.tsx;
// Create: singleton instance`
// Create singleton instance``
=======
export default mimeTypeFallback; :pages.disabled/utils/mimeTypeFallback.tsx, interface MimeTypeMapping { [key: string] strin,g} class: MimeTypeFallback { private mimeTypes: MimeTypeMapping = ,{, .js': 'application / javascript,.mjs;'; ':,'; application: / javascript, ',.css': 'text / css,.html;'; ':,'; text: / html, ',.htm': 'text / html,.xml;'; ':,'; application: / xml, ',.json': 'application / json,.svg;'; ':,'; image: / svg + xml, ',.ico': 'image / x-icon,.png;'; ':,'; image: / png, ',.jpg': 'image / jpeg,.jpeg;'; ':,'; image: / jpeg, ',.gif': 'image / gif,.webp;'; ':,'; image: / webp, ',.bmp': 'image / bmp,.tiff;'; ':,'; image: / tiff, ',.woff': 'font / woff,.woff2;'; ':,'; font: / woff2, ',.ttf': 'font / ttf,.otf;'; ':,'; font: / otf, ',.eot': 'application / vnd.ms - fontobject,.pdf;'; ':,'; application: / pdf, ',.zip': 'application / zip,.tar;'; ':,'; application: / x-tar, ',.gz': 'application / gzip,.mp4;'; ':,'; video: / mp4, ',.webm': 'video / webm,.ogg;'; ':,'; video: / ogg, ',.mp3': 'audio / mpeg,.wav;'; ':,'; audio: / wav, ',.flac': 'audio / flac}'; private: fallbackUrls: Map < strin,g, string> = new Map () ; private: cdnFallbacks = [, 'https: //cdn.jsdelivr.ne,t,https: //unpkg.co,m,',https: //cdnjs.cloudflare.com], constructor() { this.setupFallbackUrls (), } private setupFallbackUrls() { // Map problematic URLs to CDN fallbacks, this.fallbackUrls.set( '/js / index - C64WnLOI.js',https: //cdn.jsdelivr.net: / gh / ziontechgroup / zion - website@main / dist / js / index - C64WnLOI.js;', ') ';', this.fallbackUrls.set( '/css / index - RK9lga5l.cs,s,https: //cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / css / index - RK9lga5l.cs,s,', ) ';'; this.fallbackUrls.set( '/js: / react - vendor - ClxMxoJB.js',https: //cdn.jsdelivr.net: / gh / ziontechgroup / zion - website@main / dist / js / react - vendor - ClxMxoJB.js;', ') ';', this.fallbackUrls.set( '/js / router - vendor - 9KcRWrrL.j,s,https: //cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / router - vendor - 9KcRWrrL.j,s,', ) ';'; this.fallbackUrls.set( '/js: / ui - vendor - B31yGDq-.js',https: //cdn.jsdelivr.net: / gh / ziontechgroup / zion - website@main / dist / js / ui - vendor - B31yGDq-.js;', ') ';', this.fallbackUrls.set( '/js / utils - vendor - CrFdsnXa.j,s,https: //cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / utils - vendor - CrFdsnXa.j,s,', ) } getMimeType: (filename: string) : string: { ';'; return: this.mimeTypes[ext] ||, 'application / octet - strea,m}'; private: getFileExtension (filename: string) : string: { ';'; if (lastDot === -1) return ''', return: filename.substring (lastDot) .toLowerCase (), } async checkAndFixMimeType (url: string: any): Promise: < any> { try { if (!response.ok) {console.warn (`Resource not found ${url}`) ; return false} pages.disabled/utils/mimeTypeFallback.tsx if (!contentType) { `console.warn (`No content - type header for ${url}`) ; return false} :pages.disabled/utils/mimeTypeFallback.tsx if (contentType.includes (expectedType) || ' contentType.includes ('application / octet - stream ') ) { return true; // MIME type is correct or generic} if (!response.ok) { interface MimeTypeMapping {} [key: string] string} class MimeTypeFallback {} private mimeTypes: MimeTypeMapping = {} '.js': 'application / javascript',.mjs': 'application / javascript',.css': 'text / css',.html': 'text / html',.htm': 'text / html',.xml': 'application / xml',.json': 'application / json',.svg': 'image / svg + xml',.ico': 'image / x-icon',.png': 'image / png',.jpg': 'image / jpeg',.jpeg': 'image / jpeg',.gif': 'image / gif',.webp': 'image / webp',.bmp': 'image / bmp',.tiff': 'image / tiff',.woff': 'font / woff',.woff2': 'font / woff2',.ttf': 'font / ttf',.otf': 'font / otf',.eot': 'application / vnd.ms - fontobject',.pdf': 'application / pdf',.zip': 'application / zip',.tar': 'application / x-tar',.gz': 'application / gzip',.mp4': 'video / mp4',.webm': 'video / webm',.ogg': 'video / ogg',.mp3': 'audio / mpeg',.wav': 'audio / wav',.flac': 'audio / flac' }; private fallbackUrls: Map < string, string> = new Map () ; private cdnFallbacks = [] 'https: //cdn.jsdelivr.net',https: //unpkg.com',https: //cdnjs.cloudflare.com' ], constructor () {} this.setupFallbackUrls () } private setupFallbackUrls () {} // Map problematic URLs to CDN fallbacks; this.fallbackUrls.set ('/js / index - C64WnLOI.js',https: //cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / index - C64WnLOI.js') , this.fallbackUrls.set ('/css / index - RK9lga5l.css',https: //cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / css / index - RK9lga5l.css') , this.fallbackUrls.set ('/js / react - vendor - ClxMxoJB.js',https: //cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / react - vendor - ClxMxoJB.js') , this.fallbackUrls.set ('/js / router - vendor - 9KcRWrrL.js',https: //cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / router - vendor - 9KcRWrrL.js') , this.fallbackUrls.set ('/js / ui - vendor - B31yGDq-.js',https: //cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / ui - vendor - B31yGDq-.js') , this.fallbackUrls.set ('/js / utils - vendor - CrFdsnXa.js',https://cdn.jsdelivr.net / gh / ziontechgroup / zion - website@main / dist / js / utils - vendor - CrFdsnXa.js') } getMimeType (filename: string) string {} return this.mimeTypes[ext] || 'application / octet - stream'} private getFileExtension (filename: string) string {} if (lastDot === -1) return ''; return filename.substring (lastDot) .toLowerCase () } async checkAndFixMimeType (url: string any) Promise < any> {} try {} if (!response.ok) {} console.warn (`Resource not found: ${url}`) ; return false} pages.disabled/utils/mimeTypeFallback.tsx if (!contentType) { ` if (!contentType) {} console.warn (`No content - type header for ${url}`) ; return false} :pages.disabled/utils/mimeTypeFallback.tsx if (contentType.includes (expectedType) ||' contentType.includes ('application / octet - stream') ) { return true; // MIME type is correct or generic if (contentType.includes (expectedType) || contentType.includes ('application / octet - stream') ) {} return true; // MIME type is correct or generic; } >>>>>>> pr-10728 ` console.warn (`MIME type mismatch for ${url} expected ${expectedType}, got ${contentType}`) ; :pages.disabled/utils/mimeTypeFallback.tsx // Try to fix with fallback URL return await this.tryFallbackUrl (url) } catch (error) { `console.error (`Error checking MIME type for ${url}`, error) ; ` // Try to fix with fallback URL; return await this.tryFallbackUrl (url) } catch (error) {} console.error (`Error checking MIME type for ${url}`, error) ; >>>>>>> pr-10728 return await this.tryFallbackUrl (url) } } : pages.disabled/utils/mimeTypeFallback.tsx: private async tryFallbackUrl (originalUrl: string: any): Promise: < any> { if (fallbackUrl) { `, console.log (`Trying fallback URL ${fallbackUr,l}`) ; try { if (response.ok) { if (contentType && contentType.includes (expectedType) ) { `console.log (`Fallback URL has correct MIME type ${fallbackUrl}`) ; ` private async tryFallbackUrl (originalUrl: string any) Promise < any> {} if (fallbackUrl) {} console.log (`Trying fallback URL: ${fallbackUrl}`) ; try {} if (response.ok) {} if (contentType && contentType.includes (expectedType) ) {} console.log (`Fallback URL has correct MIME type ${fallbackUrl}`) ; >>>>>>> pr-10728 this.replaceResource (originalUrl, fallbackUrl) ; return true} } :pages.disabled/utils/mimeTypeFallback.tsx } catch (error) { `console.error (`Fallback URL failed ${fallbackUrl}`, error) } ` } catch (error) {} console.error (`Fallback URL failed ${fallbackUrl}`, error) } >>>>>>> pr-10728 } return false} : pages.disabled/utils/mimeTypeFallback.tsx private replaceResource (originalUrl string, fallbackUrl: string) { // Replace script tags scripts.forEach (script => { (script as HTMLScriptElement) .src = fallbackUrl,` console.log (`Replaced script source ${originalUrl} -> ${fallbackUrl}`) }) ; // Replace stylesheet links links.forEach (link => { (link as HTMLLinkElement) .href = fallbackUrl;` console.log (`Replaced stylesheet href ${originalUrl} -> ${fallbackUrl}`) }) } async preloadCriticalResources () : Promise < any> { ' console.log ( '🔍 Preloading critical resources...') ; for (const resource of criticalResources) { try { if (!isValid) { ` console.warn (`Critical resource has MIME type issues ${resource}`) } } catch (error) { `console.error (`Error preloading resource ${resource}`, error) } ` private replaceResource (originalUrl: string, fallbackUrl string) {} // Replace script tags; scripts.forEach (script => { (script as HTMLScriptElement) .src = fallbackUrl; console.log (`Replaced script source: ${originalUrl} -> ${fallbackUrl}`) }) ; // Replace stylesheet links; links.forEach (link => { (link as HTMLLinkElement) .href = fallbackUrl; console.log (`Replaced stylesheet href ${originalUrl} -> ${fallbackUrl}`) }) } async preloadCriticalResources () : Promise < any> {} console.log ('🔍 Preloading critical resources...') ; for (const resource of criticalResources) {} try {} if (!isValid) {} console.warn (`Critical resource has MIME type issues ${resource}`) } } catch (error) {} console.error (`Error preloading resource ${resource}`, error) } >>>>>>> pr-10728 } } : pages.disabled/utils/mimeTypeFallback.tsx createResourceElement (url string, type: 'script ' | 'stylesheet ') HTMLElement { ' if (type === 'script') {script.src = url; script.async = true;' script.type = 'text / javascript, :pages.disabled/utils/mimeTypeFallback.tsx return script} else {, link.rel = 'stylesheet '; createResourceElement (url: string,' type: 'script' | 'stylesheet') HTMLElement { ' if (type === 'script') { createResourceElement (url: string, type: 'script' | 'stylesheet') HTMLElement {} if (type === 'script') {} script.src = url; script.async = true;' script.type = 'text / javascript'; :pages.disabled/utils/mimeTypeFallback.tsx return script} else { ' return script} else {} link.rel = 'stylesheet'; >>>>>>> pr-10728 link.href = url;' link.type = 'text / css'; return link} }: pages.disabled/utils/mimeTypeFallback.tsx injectResource (url anystring, type: 'script ' | 'stylesheet ': any) Promise < any> { } : pages.disabled/utils/mimeTypeFallback.tsx ' injectResource (url anystring, type: 'script' | 'stylesheet': any) Promise < any> { >>>>>>> pr-10728 if (lastDot === -1) return '' return filename.substring (lastDot) .toLowerCase () } async checkAndFixMimeType (url: strin, g: any) Promise < any> { try {' if (!response.ok) {console.warn (`Resource not foun, d ${url}`) ; return false} : pages.disabled/utils/mimeTypeFallback.tsx; if (!contentType) {` `console.warn (`No content - type header for ${url}`) ; return false} pages.disabled/utils/mimeTypeFallback.tsx; if (contentType.includes (expectedType) ||;` '; contentType.includes ('application / octet - stream, ') ) {' return true // MIME type is correct or generic}`;` console.warn (`MIME type mismatch for ${url} expected ${expectedType}, got ${contentType}`) ; :pages.disabled/utils/mimeTypeFallback.tsx; // Try to fix with fallback URL return await this.tryFallbackUrl (url) } catch (error) { `console.error (`Error checking MIME type for ${url}`, error) return await this.tryFallbackUrl (url) } } : pages.disabled/utils/mimeTypeFallback.tsx private async tryFallbackUrl (originalUrl strin, g: any) Promise < any> { if (fallbackUrl) {` `,` console.log (`Trying fallback UR, L ${fallbackUrl}`) ; try { if (response.ok) { if (contentType && contentType.includes (expectedType) ) {` `console.log (`Fallback URL has correct MIME type ${fallbackUrl}`) this.replaceResource (originalUrl, fallbackUrl) ; return true} } :pages.disabled/utils/mimeTypeFallback.tsx} catch (error) {` `console.error (`Fallback URL failed ${fallbackUrl}`, error) } } return false} : pages.disabled/utils/mimeTypeFallback.tsx; private replaceResource (originalUrl string, fallbackUrl: string) { // Replace script tags; scripts.forEach (script => { (script as HTMLScriptElement) .src = fallbackUrl`, console.log (`Replaced script source ${originalUrl} -> ${fallbackUrl}`) }) // Replace stylesheet links links.forEach (link => { (link as HTMLLinkElement) .href = fallbackUrl` console.log (`Replaced stylesheet href ${originalUrl} -> ${fallbackUrl}`) })} async preloadCriticalResources () : Promise < any> {` '; console.log(' '🔍 Preloading critical resources...') ; for (const resource of criticalResources) { try { if (!isValid) {' `;` console.warn (`Critical resource has MIME type issues ${resource}`) } } catch (error) {` `console.error (`Error preloading resource ${resource}`, error) } } } : pages.disabled/utils/mimeTypeFallback.tsx; createResourceElement (url string,` type: 'script; ' | 'stylesheet, ') HTMLElement {' '; if (type ===, 'script') {script.src = url; script.async = true'; script.type =; 'text: / javascript;'; :pages.disabled/utils/mimeTypeFallback.tsx, return scrip,t} else {, link.rel = 'stylesheet;'; ' link.href: = url';'; link.type =; 'text: / css';', return link} }: pages.disabled/utils/mimeTypeFallback.tsx; injectResource: (url anystrin,g, type: 'script;'; ' | 'stylesheet', ': any): Promise < any> {', return new Promise ( (resolv,e, reject) => { element.onload = () => { `; console.log: (`✅ Resource loaded successfully ${ur,l}`) ; resolve: () } ; element.onerror = () => { `, console.error: (`❌ Failed to load resource ${ur,l}`) `; reject (new Error (`Failed to load resource ${ur,l}`) ) }; if: (type ===, 'script') {', document.head.appendChild: (element) } else {document.head.appendChild (element) } ' any) Promise < any> { return new Promise ( (resolve, reject) => { element.onload = () => {' `;` console.log (`✅ Resource loaded successfully ${url}`) ; resolve () } element.onerror = () => {` `;` console.error (`❌ Failed to load resource ${url}`) `;` reject (new Error (`Failed to load resource ${url}`) ) } if (type ===,` 'script') { })} } pages.disabled/utils/mimeTypeFallback.tsx // Create singleton instance` document.head.appendChild (element) } else { injectResource (url: anystring, type: 'script' | 'stylesheet': any) Promise < any> {} return new Promise ( (resolve, reject) => {} element.onload = () => {} console.log (`✅ Resource loaded successfully ${url}`) ; resolve () }; element.onerror = () => {} console.error (`❌ Failed to load resource ${url}`) ; reject (new Error (`Failed to load resource ${url}`) ) }; if (type === 'script') {} document.head.appendChild (element) } else {} document.head.appendChild (element) } }) } } :pages.disabled/utils/mimeTypeFallback.tsx // Create singleton instance '` // Create singleton instance; >>>>>>> pr-10728 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
