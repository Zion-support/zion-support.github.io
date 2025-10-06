/**
 * Content Manager Utility
 * Centralized content management and caching for improved performanc e
 */

export interface BlogPost { 
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime ?  : num, b, e, r;
 }

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  clie, n, t: string;
  industry: string;
  results: string[];
  featured: bool, e, a, n;
}

/**
 * Content cache to minimize file system rea d s
 */
class ContentCach, e { 
  private, blogCach, e: M, a, p<str, i, n, g, BlogPo, s, t> = new, Ma, p();
  private, caseStudyCach, e: M, a, p<str, i, n, g, CaseStu, d, y > = new, Ma, p();
  private, lastUpdat, e: number = 0; private, readonly, CACHE_TTL = 5 * 60 * 10, 0, 0; // 5 minutes isCacheVali d(): boolean {
    return, Dat, e.n, o, w() - th, i, s.lastUpdate < th, i, s.CACHE_, T, T, L;
   }

  setBlogPos, t, s(pos, t, s: BlogPo, s, t[]): vo, i, d { 