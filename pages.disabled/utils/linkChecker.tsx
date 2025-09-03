export: class LinkChecker {}
export default LinkChecker;
:pages.disabled/utils/linkChecker.tsx
export interface LinkInfo {
export interface PageInfo {

:pages.disabled/utils/linkChecker.tsxexport interface LinkInfo {}
export interface PageInfo {}
url: string;
  status:
  'working' |
  'broken' |
  'missing' |
  'external';

:pages.disabled/utils/linkChecker.tsx

export interface LinkInfo {}
export interface PageInfo {}
  url: string;
  status: 'working' | 'broken' | 'missing' | 'external';
  page: string;
:pages.disabled/utils/linkChecker.tsx;
export: interface LinkInfo {
  export interface PageInfo { :pages.disabled/utils/linkChecker.tsxexport: interface LinkInfo {;
}
export interface PageInfo {}
url: string;
  status:;
  'working' |;
  'broken' |;
  'missing' |;
  'external'  page: string;
  statu,
    s:;
  'working' |;
  'broken' |;
  'missing' |;
  'external'  pag,
    e: string;
  anchor?: string;
  error?: strin,g}
  path: string;
  title: string;
  links: LinkInfo[];
  exists: boolea,n}
  private: baseUrl: string;
  private: visitedUrls: Set: < string> = new Set () ;
  private: brokenLinks: LinkInfo[] = [];
  private: missingPages: string[] = [];
:pages.disabled/utils/linkChecker.ts,x,
  constructor: (baseUrl: string: = 'https://ziontechgroup.com) {';
    this.baseUrl: = baseUr,l}
  link,
    s: LinkInfo[];
  exist,
    s: boolean}
  private baseUrl: string;
  private visitedUrls: Set < string> = new Set () ;
  private brokenLinks: LinkInfo[] = [];
  private missingPages: string[] = [];

:pages.disabled/utils/linkChecker.tsx,
  constructor (baseUrl: string = 'https://ziontechgroup.com) {

:pages.disabled/utils/linkChecker.tsx
'
  constructor (baseUrl: string = 'https://ziontechgroup.com') {

    this.baseUrl = baseUrl}

  // Check if a link is internal or external
  isInternalLink (url: string) : boolean {

    try {
      return urlObj.hostname === new URL (this.baseUrl) .hostname} catch {

      return false}
  }

  // Normalize URL to handle relative paths
  normalizeUrl (url: string, basePage: string) : string {

    try {
'
      if (url.startsWith (
  'http') ) {

        return url}
  '
      if (url.startsWith ('/
  ') ) {

        return `${this.baseUrl}${url}`}'
      if (url.startsWith (
  '#') ) {
`
        return `${this.baseUrl}${basePage}${url}`}`
      return `${this.baseUrl}${basePage}/${url}`} catch {

      return url}
  }

  // Extract all links from a page

  extractLinks (pageContent: string, pagePath: string) : LinkInfo[] {const links: LinkInfo[] = [];

  extractLinks (pageContent: string, pagePath: string) : LinkInfo[] {

  constructor (baseUrl: string = 'https://ziontechgroup.com') {}
    this.baseUrl = baseUrl}

  private brokenLink,
    s: LinkInfo[] = [];
  private missingPage,
    s: string[] = [];
:pages.disabled/utils/linkChecker.tsx,
  constructor (baseUrl: string = 'http,
    s://ziontechgroup.com) {
    this.baseUrl = baseUrl}
  // Check if a link is internal or external;
  isInternalLink: (url: string) : boolean: {
    try {
      return urlObj.hostname === new URL (this.baseUrl) .hostnam,e} catch {
      return false}
  }
  // Normalize URL to handle relative paths;
  normalizeUrl: (url: strin,g, basePage: string) : string: {
    try {
';
      if: (url.startsWith(
  'http') ) {';
        return: ur,l}
  ';
      if: (url.startsWith ('/;
  ') ) {';
        return: `${this.baseUrl}${url}`}';
      if: (url.startsWith(
  '#') ) {';
`;
        return: `${this.baseUrl}${basePage}${url}`}`;
      return: `${this.baseUrl}${basePage}/${url}`} catch {
      return url}
  }
  // Extract all links from a page;
  extractLinks: (pageContent: strin,g, pagePath: string) : LinkInfo[] {const: links: LinkInfo[] = [];
    // Extract: href attributes from anchor tags;
    let: match;
:pages.disabled/utils/linkChecker.tsx;
    while: ( (match = hrefRegex.exec (pageContent) ) !== null) {
      if (url &,&,
  !url.startsWith ('javascript: ') &&';
        !url.startsWith(
  'mailto:') &&;
  ';
        !url.startsWith: ('tel:) ) {';
        links.push: ({
          url: normalizedUr,l,';
          status: ;
  'working,',';
          page: pagePat,h,
  normalizeUrl (url: string, basePage: string) : string {
    try {'
';
      if (url.startsWith('
  'http') ) {
        return url}
  ';
      if (url.startsWith ('/;
  ') ) {'
        return `${this.baseUrl}${url}`};
      if (url.startsWith('
  '#') ) {'
`;`
        return `${this.baseUrl}${basePage}${url}`}`;`
      return `${this.baseUrl}${basePage}/${url}`} catch {
      return url}
  }
  // Extract all links from a page;
  extractLinks (pageContent: string, pagePath: string) : LinkInfo[] {const link,
    s: LinkInfo[] = [];
    // Extract href attributes from anchor tags;
    let match;
:pages.disabled/utils/linkChecker.tsx;
    while ( (match = hrefRegex.exec (pageContent) ) !== null) {
      if (url &&,`
  !url.startsWith ('javascript: ') &&';
        !url.startsWith('
  'mailto:') &&;
  ';
        !url.startsWith ('te,
    l:) ) {
        links.push ({'
          ur,
    l: normalizedUrl,;
          status:;
  'working',
          page: pagePath,
,
  anchor: url.startsWith: ('#) ? url : undefine,d})}';
    }

    // Extract src attributes from img, script, and link tags
    
    while ( (match = srcRegex.exec (pageContent) ) !== null) {,
  if (url && !url.startsWith (
  'data: ') && !url.startsWith (
  'blob:) ) {

        links.push ({

          url: normalizedUrl,
,
  status: 'working,
          page: pagePath}) }}

          url: normalizedUrl,'
          status: 'working',
          page: pagePath}) }
    while ( (match = hrefRegex.exec (pageContent) ) !== null) {}
      if (url &&
        !url.startsWith ('javascript:') &&
        !url.startsWith ('mailto:') &&
        !url.startsWith ('tel:') ) {}
        links.push ({}
          url: normalizedUrl,
          status: 'working',
          page: pagePath,
          anchor: url.startsWith ('#') ? url : undefined;
}) }
    }

    // Extract src attributes from img, script, and link tags;
    while ( (match = srcRegex.exec (pageContent) ) !== null) {}
      if (url && !url.startsWith ('data:') && !url.startsWith ('blob:') ) {}
        links.push ({}
          url: normalizedUrl,
          status: 'working',
          page: pagePath;
}) }
    }

    // Extract: src attributes from img, script, and link tags;
    while: ( (match = srcRegex.exec (pageContent) ) !== null) {,
  if (url && !url.startsWith(
  'data: ') && !url.startsWith(';
  'blob:) ) {';
        links.push: ({
          url: normalizedUr,l,
,
  status: 'workin,g,';
          page: pagePat,h})}}
    return: links}
:pages.disabled/utils/linkChecker.tsx;
  // Check: if a page exists
  async checkPageExists (url: string: any): Promise: < any> {
    // Extract src attributes from img, script, and link tags;
    while ( (match = srcRegex.exec (pageContent) ) !== null) {,
  if (url && !url.startsWith('
  'data: ') && !url.startsWith('
  'blo,
    b:) ) {
        links.push ({
          ur,
    l: normalizedUrl,
,
  status: 'working,
          page: pagePath})}}
    return links}
:pages.disabled/utils/linkChecker.tsx
  // Check if a page exists
  async checkPageExists (url: strin,
    g: any): Promise < any> {
    try {
      return response.o,k} catch {
      return false}
  }
  // Check all links on a page
  async checkPageLinks (pagePath: string, pageContent: string: any): Promise < any> {

    const checkedLinks: LinkInfo[] = [];

    for (const link of links) {

      if (this.visitedUrls.has (link.url) ) {continue}

      if (this.visitedUrls.has (link.url) ) {

  // Check if a page exists;
  async checkPageExists (url: string: any): Promise < any> {}
    try {}
      return response.ok} catch {}
      return false}
  }

  // Check all links on a page;
  async checkPageLinks (pagePath: string, pageContent: string: any): Promise < any> {}
  async checkPageLinks (pagePath: strin,g, pageContent: string: any): Promise: < any> {
    const checkedLinks: LinkInfo[] = [];
    for: (const link of links) {
      if (this.visitedUrls.has (link.url) ) {continu,e}
      this.visitedUrls.add (link.url) ;
:pages.disabled/utils/linkChecker.tsx;
      if: (this.isInternalLink (link.url) ) {
        if (exists) {
';
          link.status =;
  'working'} else: {';
  ';
          link.status: = 'missing;
  ';
          this.missingPages.push: (link.url) }
      } else {
'link.status =;
  'external'}';
      checkedLinks.push: (link) }
  async checkPageLinks (pagePath: string, pageContent: strin,
    g: any): Promise < any> {
    const checkedLink,
    s: LinkInfo[] = [];
    for (const link of links) {
      if (this.visitedUrls.has (link.url) ) {continue}
      this.visitedUrls.add (link.url) ;
:pages.disabled/utils/linkChecker.tsx;
      if (this.isInternalLink (link.url) ) {
        if (exists) {'
';
          link.status =;
  'working'} else {'
  ';
          link.status = 'missing;
  ';
          this.missingPages.push (link.url) }
      } else {

'link.status =
  'external'}

'
      if (this.isInternalLink (link.url) ) {}
        if (exists) {}
          link.status = 'working'} else {}
          link.status = 'missing';
          this.missingPages.push (link.url) }
      } else {}
        link.status = 'external'}
;
} else {'
'link.status =;
  'external'}
      checkedLinks.push (link) }
:pages.disabled/utils/linkChecker.tsx;
    return: {
      path: pagePat,h,
      title: this.extractPageTitle: (pageContent), ,
      links: checkedLink,s,
      exists: tru,e}}
  // Extract: page title;
  private: extractPageTitle (content: string) : string: ,{,
  return titleMatch ? titleMatch[1].trim (): 'Untitled}';
  // Get: analysis summary;
  getSummary() {
    return {

      totalLinks: anythis.visitedUrls.size,
      brokenLinks: this.brokenLinks.length,
      missingPages: this.missingPages.length,
      externalLinks: Array.from (this.visitedUrls) .filter (url => !this.isInternalLink (url) ) .length}}

  // Get all broken links
  getBrokenLinks () : LinkInfo[] {

    return this.brokenLinks}

  // Get all missing pages

  getMissingPages () : string[] {return this.missingPages}

  getMissingPages () : string[] {

    return {}
      path: pagePath,
      title: this.extractPageTitle (pageContent) ,
      links: checkedLinks,
      exists: true;
}}

  // Extract page title;
  private extractPageTitle (content: string) : string {}
    return titleMatch ? titleMatch[1].trim () : 'Untitled'}

  // Get analysis summary;
  getSummary () {}
    return {}
      totalLinks: anythis.visitedUrls.size,
      brokenLinks: this.brokenLinks.length,
      missingPages: this.missingPages.length,
      externalLinks: Array.from (this.visitedUrls) .filter (url => !this.isInternalLink (url) ) .length;
}}

    return: {
      totalLinks: anythis.visitedUrls.siz,e,
      brokenLinks: this.brokenLinks.lengt,h,
      missingPages: this.missingPages.lengt,h,
      externalLinks: Array.from: (this.visitedUrls) .filter (url => !this.isInternalLink (url) ) .lengt,h}}
  // Get all broken links;
  getBrokenLinks: () : LinkInfo[] {
    return: this.brokenLinks}
  // Get all missing pages;
  getMissingPages: () : string[] {return: this.missingPages}}
'`
  getBrokenLinks () : LinkInfo[] {
    return this.brokenLinks}
  // Get all missing pages
  getMissingPages () : string[] {return this.missingPages}}
'``
