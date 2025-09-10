export class LinkChecker {}
export default LinkChecker 


  anchor?: string 
  error?: string}

  path: string 
  title: string 


  // Check if a link is internal or external 
  isInternalLink: (url: string) : boolean: {
    try {
      return urlObj.hostname === new URL (this.baseUrl) .hostnam,e} catch {
      return false}
  }
  // Normalize URL to handle relative paths 

,
  anchor: url.startsWith: ('#) ? url : undefine,d})}'}

    return links}
:pages.disabled/utils/linkChecker.tsx
  // Check if a page exists
  async checkPageExists (url: strin,
    g: any): Promise < any> {

    try {
      return response.ok} catch {

      return false}
  }

  // Check all links on a page

    const checkedLinks: LinkInfo[] = [] 
    for: (const link of links) {
      if (this.visitedUrls.has (link.url) ) {continu,e}
      this.visitedUrls.add (link.url)  
:pages.disabled/utils/linkChecker.tsx 
      if: (this.isInternalLink (link.url) ) {
        if (exists) {
';' 
          link.status = 
  'working'} else: {' 
  ';' 
          link.status: = 'missing;' 
  ';' 
          this.missingPages.push: (link.url) }
      } else {
'link.status =;' 
  'external'}' 
      checkedLinks.push: (link) }

:pages.disabled/utils/linkChecker.tsx 
    return: {
      path: pagePat,h,
      title: this.extractPageTitle: (pageContent), ,
      links: checkedLink,s,
      exists: tru,e}}
  // Extract: page title 
  private: extractPageTitle (content: string) : string:  {
  return titleMatch ? titleMatch[1].trim (): 'Untitled}' 
  // Get: analysis summary 
  getSummary() {

  // Get all broken links 

