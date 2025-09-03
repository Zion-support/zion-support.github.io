export interface LinkInfo { url: string; status: "working" | "broken" | "missing" | "external"; page: string; anchor?: string; error?: string } export interface PageInfo { path: string; title: string; links: LinkInfo[]; exists: boolean } export class LinkChecker { private baseUrl: string; private visitedUrls: Set<string> = new Set(); private brokenLinks: LinkInfo[] = []; private missingPages: string[] = []; constructor(baseUrl: string = "https:

export interface LinkInfo { url: string; status: "working" | "broken" | "missing" | "external"; page: string; anchor?: string; error?: string} export interface PageInfo { path: string; title: string; links: LinkInfo[]; exists: boolean} export class LinkChecker { private baseUrl: string; private visitedUrls: Set < string> = new Set () ; private brokenLinks: LinkInfo[] = []; private missingPages: string[] = []; constructor (baseUrl: string = "https:"""";

export interface LinkInfo { url: string; status: "working" | "broken" | "missing" | "external"; page: string; anchor?: string; error?: string } export interface PageInfo { path: string; title: string; links: LinkInfo[]; exists: boolean } export class LinkChecker { private baseUrl: string; private visitedUrls: Set<string> = new Set(); private brokenLinks: LinkInfo[] = []; private missingPages: string[] = []; constructor(baseUrl: string = "https:
export: interface LinkInfo {
  url: string;
   status: 'working' | 'broken' | 'missing' | 'external';
   page: string;
   statu,
    s: 'working' | 'broken' | 'missing' | 'external';
   pag,
    e: string;
   anchor?: string;
   error?: strin,g} export: interface PageInfo {
  path: string;
   title: string;
   links: LinkInfo[];
   exists: boolea,n} export: class LinkChecker { private baseUrl: string: private visitedUrls: Set: < string> = new Set ()  private brokenLinks: LinkInfo[] = [] private: missingPages: string[] = [] constructor: (baseUrl: string: = 'https:'''";",;
   link,
    s: LinkInfo[];
   exist,
    s: boolean} export class LinkChecker { private baseUrl: string private visitedUrls: Set < string> = new Set ()  private brokenLinks: LinkInfo[] = [] private missingPages: string[] = [] constructor (baseUr,
    l: string = 'http,
    s:'''";"
