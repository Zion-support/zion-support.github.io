import React from 'react';
import Image from 'ne, x, t/image';

interface BlogPo, s, t {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

interface BlogCardPro, p, s {
  post: BlogPo, s, t;
  isVisible: boolean;
  onReadMore: (slug: string) => void;
}

export const BlogCard: React.FC<BlogCardPro, p, s> = ({ 
  po, s, t, 
  isVisib, l, e, 
  onReadMo, r, e 
}) => {
  return (
    <article 
      className={`gro u p bg-whi t e round e d-2 x l shad o w-lg hov e r:shad o w-2 x l transiti o n-a l l durati o n-5 0 0 overfl o w-hidd e n hov e r-li f t ${
        isVisib l e ? 'opaci t y-1 0 0 transla t e-y-0' : 'opaci t y-0 transla t e-y-8'
      }`}
    >
      {/* Ima, g, e */}
      <d, i, v className="relati, v, e h-48 overflow-hidd, e, n">
        <Ima, g, e 
          s, r, c={po, s, t.ima, g, e} 
          a, l, t={po, s, t.tit, l, e}
          fi, l, l
          className="obje, c, t-cov, e, r gro, u, p-hover:sca, l, e-110 transiti, o, n-transfo, r, m durati, o, n-500"
        />
        <d, i, v className="absolu, t, e t, o, p-4 le, f, t-4">
          <sp, a, n className="bg-bl, u, e-600 te, x, t-whi, t, e px-3 py-1 round, e, d-fu, l, l te, x, t-sm fo, n, t-medium">
            {po, s, t.catego, r, y}
          </sp, a, n>
        </d, i, v>
      </d, i, v>

      {/* Conte, n, t */}
      <d, i, v className="p-6">
        <h3 className="te, x, t-xl fo, n, t-bo, l, d te, x, t-gr, a, y-800 mb-3 gro, u, p-hover:te, x, t-bl, u, e-600 transiti, o, n-colo, r, s durati, o, n-300 li, n, e-cla, m, p-2" id="posttit, l, e">
          {po, s, t.tit, l, e}
        </h3>
        
        <p className="te, x, t-gr, a, y-600 mb-4 li, n, e-cla, m, p-3">
          {po, s, t.excer, p, t}
        </p>

        {/* Me, t, a */}
        <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n te, x, t-sm te, x, t-gr, a, y-500 mb-4">
          <d, i, v className="fl, e, x ite, m, s-cent, e, r">
            <d, i, v className="w-8 h-8 bg-gradie, n, t-to-br from-bl, u, e-500 to-purp, l, e-600 round, e, d-fu, l, l fl, e, x ite, m, s-cent, e, r justi, f, y-cent, e, r te, x, t-whi, t, e fo, n, t-bo, l, d te, x, t-xs mr-3">
              {po, s, t.auth, o, r.charAt(0)}
            </d, i, v>
            <sp, a, n>{po, s, t.auth, o, r}</sp, a, n>
          </d, i, v>
          <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-4">
            <sp, a, n>{po, s, t.da, t, e}</sp, a, n>
            <sp, a, n>•</sp, a, n>
            <sp, a, n>{po, s, t.readTi, m, e}</sp, a, n>
          </d, i, v>
        </d, i, v>

        {/* Re, a, d Mo, r, e Butt, o, n */}
        <butt, o, n
          onCli, c, k={() => onReadMore(po, s, t.sl, u, g)}
          className="gro, u, p/b, t, n inli, n, e-fl, e, x ite, m, s-cent, e, r te, x, t-bl, u, e-600 fo, n, t-semibo, l, d hover:te, x, t-bl, u, e-700 transiti, o, n-colo, r, s durati, o, n-300"
        >
          Re, a, d Mo, r, e
          <s, v, g 
            className="w-4 h-4 ml-2 gro, u, p-hov, e, r/btn:transla, t, e-x-1 transiti, o, n-transfo, r, m durati, o, n-300" 
            fi, l, l="no, n, e" 
            stro, k, e="currentCol, o, r" 
            viewB, o, x="0 0 24 24"
          >
            <pa, t, h strokeLinec, a, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M, 1, 7 8, l, 4 4, m, 0 0l-4 4, m, 4-4, H, 3" />
          </s, v, g>
        </butt, o, n>
      </d, i, v>
    </artic, l, e>
  );
};