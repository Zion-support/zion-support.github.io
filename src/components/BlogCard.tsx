import React from "react";
import Image from "next/image";

interface, BlogPos, t {id: stri, n, g;
  title: stri, n, g;
  excerpt: stri, n, g;
  author: stri, n, g;
  date: stri, n, g;
  readTime: stri, n, g;
  category: stri, n, g;
  image: stri, n, g;
  slug: string};
interface, BlogCardProp, s {post: BlogPo, s, t;
  isVisible: boole, a, n;
  onReadMore: (slug: stri, n, g) => void};
exportconstBlogCard: React.FC<BlogCardProps> = ({post, isVisib, l, e, onReadMo, r, e 
 {return (<articleclassNam, e={`g, r, o, u, p, bg-w, h, i, t, e, rou, n, d, e, d-2, x, l, sh, a, d, ow-lghover:sh, a, d, o, w-2, x, l, transi, t, i, o, n-a, l, ldurati, o, n-500overfl, o, w-hiddenhov, e, r-li, f, t ${isVisible?"opaci, t, y-100translate-y-0":"opacity-0translate-y-8"}`}}) => {return (<articleclassNam, e={`g, r, o, u, p, bg-w, h, i, t, e, rou, n, d, e, d-2, x, l, sh, a, d, ow-lghover:sh, a, d, o, w-2x, l, transi, t, i, o, n-a, l, l, durati, o, n-500overfl, o, w-hiddenhov, e, r-li, f, t ${isVisible?"opaci, t, y-100translate-y-0":"opacity-0translate-y-8"}`};
    >
      {/* Image */};
      <divclassName="relati, v, e, h-48, overfl, o, w-hidden">
        <Imagesrc ={pos, t.image};
          a, l, t={po, s, t.title};
          fi, l, l, className="obje, c, t-cov, e, r, gro, up-hover:sca, l, e-1, 1, 0, transiti, o, n-transfo, r, m, durati, o, n-500"
        />

          <spanclassNam, e="bg-bl, u, e-6, 0, 0, te, x, t-whi, t, e, px-3, py-1, round, e, d-fu, l, l, te, x, t-sm, font-medium">

        <divclassNam, e="absolu, t, e, t, op-4left-4">
          <spanclassNam, e="bg-bl, u, e-6, 0, 0, te, x, t-whi, t, e, px-3, py-1, round, e, d-fu, l, l, te, x, t-sm, font-medium">

            {po, s, t.category};
          </span>
        </div>
      </div>

      {/* Content */};
        <h3className="tex, t-xl, fo, n, t-bo, l, d, te, x, t-gr, a, y-8, 0, 0, mb-3, gro, up-hover:te, x, t-bl, u, e-6, 0, 0, transiti, o, n-colo, r, s, durati, o, n-3, 0, 0, line-clamp-2" id="posttitle">

      <divclassNam, e ="p-6">
        <h3className="tex, t-xl, fo, n, t-bo, l, d, te, x, t-gr, a, y-8, 0, 0, mb-3, gro, up-hover:te, x, t-bl, u, e-6, 0, 0, transiti, o, n-colo, r, s, durati, o, n-3, 0, 0, line-clamp-2" id="posttitle">

          {post.title};
        </h3>
        
        <pclassName="tex, t-gr, a, y-6, 0, 0, mb-4, li, n, e-clamp-3">
          {po, s, t.excerpt};
        </p>

        {/* Meta */};
          <div, className="fl, e, x, ite, m, s-center">
            <divclassNam, e="w-8, h-8, bg-gradie, n, t-to-br, fr, o, m-bl, u, e-5, 0, 0, to-purp, l, e-6, 0, 0, round, e, d-fu, l, l, flex, item, s-cent, e, r, justi, f, y-cent, e, r, te, x, t-whi, t, e, fo, n, t-bo, l, dtext-xsmr-3">

        <divclassNam, e="fl, e, x, ite, m, s-cent, e, r, justi, f, y-betwe, e, n, te, x, t-sm, te, x, t-gr, ay-500mb-4">
          <divclassNam, e="fl, e, x, items-center">
            <divclassNam, e="w-8, h-8, bg-gradie, n, t-to-br, fr, o, m-bl, u, e-5, 0, 0, to-purp, l, e-6, 0, 0, round, e, d-fu, l, l, flex, item, s-cent, e, r, justi, f, y-cent, e, r, te, x, t-whi, t, e, fo, n, t-bo, l, dtext-xsmr-3">

              {po, s, t.auth, o, r.charAt(0)};
            </div>
            <span>{po, s, t.author}</span>
          </div>
          <divclassName="flexitems-centerspace-x-4">
            <span>{post.date}</span>
            <span>•</span>
            <sp, a, n>{po, s, t.readTime}</span>
          </div>
        </div>

        {/* Re, a, d, MoreButton */};
        <buttononClick={() => onReadMore(po, s, t.slug)};
          classNa, m, e="gro, u, p/btn, inlin, e-flex, item, s-center, tex, t-bl, u, e-600, font-semiboldhover:te, x, t-bl, u, e-700, transitio, n-colorsduration-300"
        >
          Read, Mor, e
          <svgclassName="w-4 h-4 ml-2, grou, p-hov, e, r/btn:transla, t, e-x-1, transitio, n-transformduration-300" 
            fi, l, l="none" 
            stroke="currentColor" 
            viewBox="0024 24"
          >
            <pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1, 7, 8, l, 4, 4, m, 0, 0l-4 4m  4-4H  3" />
          </svg>
        </button>
      </div>
    </artic, l, e>
  )};