export class LinkChecker {}
export default LinkChecker;
:pages.disabled/utils/linkChecker.tsx;
export interface LinkInfo {
  export interface PageInfo { :pages.disabled/utils/linkChecker.tsxexport interface LinkInfo {
}
export interface PageInfo {}
url: string;
  statu,
    s:;
  'working' |;
  'broken' |;
  'missing' |;
  'external'  pag,
    e: string;
  anchor?: string;
  error?: string}
  path: string;
  title: string;
  link,
    s: LinkInfo[];
  exist,
    s: boolean}
  private baseUrl: string;
  private visitedUrls: Set < string> = new Set () ;
  private brokenLink,
    s: LinkInfo[] = [];
  private missingPage,
    s: string[] = [];
:pages.disabled/utils/linkChecker.tsx,
  constructor (baseUrl: string = 'http,
    s://ziontechgroup.com) {
    this.baseUrl = baseUrl}
  // Check if a link is internal or external;
  isInternalLink (url: string) : boolean {
    try {
      return urlObj.hostname === new URL (this.baseUrl) .hostname} catch {
      return false}
  }
  // Normalize URL to handle relative paths;
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
  anchor: url.startsWith ('#) ? url : undefined})}
    }
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
:pages.disabled/utils/linkChecker.tsx;
  // Check if a page exists
  async checkPageExists (url: strin,
    g: any): Promise < any> {
    try {
      return response.ok} catch {
      return false}
  }
  // Check all links on a page
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
      } else {'
'link.status =;
  'external'}
      checkedLinks.push (link) }
:pages.disabled/utils/linkChecker.tsx;
    return {
      path: pagePath,
      title: this.extractPageTitle (pageContent) ,
      links: checkedLinks,
      exists: true}}
  // Extract page title;
  private extractPageTitle (content: string) : string {,
  return titleMatch ? titleMatch[1].trim (): 'Untitled}
  // Get analysis summary;
  getSummary() {
    return {
      totalLinks: anythis.visitedUrls.size,
      brokenLinks: this.brokenLinks.length,
      missingPages: this.missingPages.length,
      externalLinks: Array.from (this.visitedUrls) .filter (url => !this.isInternalLink (url) ) .length}}
  // Get all broken links;
  getBrokenLinks () : LinkInfo[] {
    return this.brokenLinks}
  // Get all missing pages;
  getMissingPages () : string[] {return this.missingPages}}
'``