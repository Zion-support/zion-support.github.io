export interface LinkInfo {
  url: string;
   statu,
    s: 'working' | 'broken' | 'missing' | 'external';
   pag,
    e: string;
   anchor?: string;
   error?: string} export interface PageInfo {
  path: string;
   title: string;
   link,
    s: LinkInfo[];
   exist,
    s: boolean} export class LinkChecker { private baseUrl: string private visitedUrls: Set < string> = new Set ()  private brokenLinks: LinkInfo[] = [] private missingPages: string[] = [] constructor (baseUr,
    l: string = 'http,
    s:'''";"