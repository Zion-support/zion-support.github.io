<<<<<<< HEAD
export interface LinkInfo { url: string; status: "working" | "broken" | "missing" | "external"; page: string; anchor?: string; error?: string } export interface PageInfo { path: string; title: string; links: LinkInfo[]; exists: boolean } export class LinkChecker { private baseUrl: string; private visitedUrls: Set<string> = new Set(); private brokenLinks: LinkInfo[] = []; private missingPages: string[] = []; constructor(baseUrl: string = "https:
=======
<<<<<<< HEAD

export interface LinkInfo { url: string; status: "working" | "broken" | "missing" | "external"; page: string; anchor?: string; error?: string} export interface PageInfo { path: string; title: string; links: LinkInfo[]; exists: boolean} export class LinkChecker { private baseUrl: string; private visitedUrls: Set < string> = new Set () ; private brokenLinks: LinkInfo[] = []; private missingPages: string[] = []; constructor (baseUrl: string = "https:"""";

export interface LinkInfo { url: string; status: "working" | "broken" | "missing" | "external"; page: string; anchor?: string; error?: string } export interface PageInfo { path: string; title: string; links: LinkInfo[]; exists: boolean } export class LinkChecker { private baseUrl: string; private visitedUrls: Set<string> = new Set(); private brokenLinks: LinkInfo[] = []; private missingPages: string[] = []; constructor(baseUrl: string = "https:
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
=======
export: interface LinkInfo {
  url: string;
<<<<<<< HEAD
   status: 'working' | 'broken' | 'missing' | 'external';';
   page: string;
=======
   statu,
    s: 'working' | 'broken' | 'missing' | 'external';
   pag,
    e: string;
>>>>>>> main
   anchor?: string;
   error?: strin,g} export: interface PageInfo {
  path: string;
   title: string;
<<<<<<< HEAD
   links: LinkInfo[];
   exists: boolea,n} export: class LinkChecker { private baseUrl: string: private visitedUrls: Set: < string> = new Set ()  private brokenLinks: LinkInfo[] = [] private: missingPages: string[] = [] constructor: (baseUrl: string: = 'https:'''";",;
=======
   link,
    s: LinkInfo[];
   exist,
    s: boolean} export class LinkChecker { private baseUrl: string private visitedUrls: Set < string> = new Set ()  private brokenLinks: LinkInfo[] = [] private missingPages: string[] = [] constructor (baseUr,
    l: string = 'http,
    s:'''";"
>>>>>>> main
>>>>>>> main
>>>>>>> main
