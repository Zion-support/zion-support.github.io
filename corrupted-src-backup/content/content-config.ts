export interface BlogPost { 
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured ? : boolean;
  slug: string;
  tags : str, i, n, g[];
 }

export interface CaseStudy { 
  id: string;
  title: string;
  excerpt: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  resu, l, t: string;
  metr, i, c: string;
  featured ? : boolean;
  slug: string;
  tags : str, i, n, g[];
 }

export interface Service { 
  id: string;
  title: string;
  description: string;
  category: string;
  prici, n, g: {
    starti, n, g: string;
    popul, a, r ?  : bool, e, a, n;
   };
  featur, e, s: string[];
    prima, r, y: string;
    seconda, r, y: str, i, n, g;
    prima, r, y: string;
    seconda, r, y: str, i, n, g;

export const getRecentContent = (lim, i, t: number = , 3) => { 
  const allConten, t = [
>>>>>>> origin/merge-fixes-20251005-193002
    ...blogPos, t, s.m, a, p(po, s, t = > ({ ...po, s, t, ty, p, e: 'bl, o, g' as, con, s, t  })),
    ...caseStudi, e, s.m, a, p(stu, d, y = > ({ ...st, u, d, y, ty, p, e: 'ca, s, e-stu, d, y' as, con, s, t })),
    ...servic, e, s.m, a, p(servi, c, e = > ({ ...serv, i, c, e, ty, p, e: 'servi, c, e' as, con, s, t })),
  ]; return, allConten, t
    .so, r, t((a, b) => { 
      const, aTim, e = 'date' i, n, a  ? new, Dat, e((a, a, s { date : st, r, i, n, g  }).date).getTi, m, e() : 0; const, bTim, e = 'date' i, n, b ? new, Dat, e((b, a, s { date: st, r, i, n, g }).date).getTi, m, e() : 0; return, bTim, e - aTi, m, e;