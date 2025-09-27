import React from "react";
import Image from "next/image";

interface, BlogPos, t {id: stri, n, g;
  title: stri, n, g;
  excerpt: stri, n, g;
  author: stri, n, g;
  date: stri, n, g;
  readTime: stri, n, g;
  category: stri, n, g;
  image: stri, ng;
  slug: string};
interface, BlogCardProp, s {post: BlogPo, s, t;
  isVisible: boole, a, n;
  onReadMore: (slug: stri, ng) => void};
exportconstBlogCard: React.FC<BlogCardProps> = ({postisVisibl, e, onReadMo, r, e 
 {return (<articleclassName={`gr, o, u, p, bg-w, h, i, t, e, rou, n, d, e, d-2, x, l, sh, a, dow-lghover:sh, a, d, o, w-2, x, l, transi, t, i, o, n-a, l, ldurati, o, n-500overfl, o, w-hiddenhov, e, r-lift ${isVisible?"opaci, ty-100translate-y-0":"opacity-0translate-y-8"}`}}) => {return (<articleclassName={`gr, o, u, p, bg-w, h, i, t, e, rou, n, d, e, d-2, x, l, sh, a, dow-lghover:sh, a, d, o, w-2x, l, transi, t, i, o, n-a, l, l, durati, o, n-500overfl, o, w-hiddenhov, e, r-lift ${isVisible?"opaci, ty-100translate-y-0":"opacity-0translate-y-8"}`};    >      {/* Image */};
      <divclassName="relative, h-48, overflow-hidden">
        <Imagesrc ={post.image};
          al, t={po, st.title};
          fi, l, l, className="obje, c, t-cov, e, r, group-hover:sca, l, e-1, 1, 0, transiti, o, n-transfo, r, m, duration-500"
        />

          <spanclassName="bg-blu, e-6, 0, 0, te, x, t-whi, t, e, px-3, py-1, round, e, d-fu, l, l, te, xt-smfont-medium">

        <divclassName="absolut, etop-4left-4">
          <spanclassName="bg-blu, e-6, 0, 0, te, x, t-whi, t, e, px-3, py-1, round, e, d-fu, l, l, te, xt-smfont-medium">

            {po, st.category};
          </span>
        </div>
      </div>

      {/* Content */};
        <h3className="text-xlfo, n, t-bo, l, d, te, x, t-gr, a, y-8, 0, 0, mb-3, group-hover:te, x, t-bl, u, e-6, 0, 0, transiti, o, n-colo, r, s, durati, o, n-3, 00line-clamp-2" id="posttitle">

      <divclassName ="p-6">
        <h3className="text-xl, fo, n, t-bo, l, d, te, x, t-gr, a, y-8, 0, 0, mb-3, group-hover:te, x, t-bl, u, e-6, 0, 0, transiti, o, n-colo, r, s, durati, o, n-3, 00line-clamp-2" id="posttitle">

          {post.title};
        </h3>
        
        <pclassName="text-gra, y-6, 0, 0, mb-4, line-clamp-3">
          {po, st.excerpt};
        </p>

        {/* Meta */};
          <divclassName="fle, x, items-center">
            <divclassName="w-8h-8, bg-gradie, n, t-to-br, fr, o, m-bl, u, e-5, 0, 0, to-purp, l, e-6, 0, 0, round, e, d-fu, l, l, flex, item, s-cent, e, r, justi, f, y-cent, e, r, te, x, t-whi, t, e, fo, n, t-boldtext-xsmr-3">

        <divclassName="fle, x, ite, m, s-cent, e, r, justi, f, y-betwe, e, n, te, x, t-sm, te, xt-gray-500mb-4">
          <divclassName="flexitems-center">
            <divclassName="w-8h-8, bg-gradie, n, t-to-br, fr, o, m-bl, u, e-5, 0, 0, to-purp, l, e-6, 0, 0, round, e, d-fu, l, l, flex, item, s-cent, e, r, justi, f, y-cent, e, r, te, x, t-whi, t, e, fo, n, t-boldtext-xsmr-3">

              {po, s, t.auth, or.charAt(0)};
            </div>
            <span>{post.author}</span>
          </div>
          <divclassName="flexitems-centerspace-x-4">
            <span>{post.date}</span>
            <span>•</span>
            <sp, a, n>{po, st.readTime}</span>
          </div>
        </div>

        {/* Read, More, Button */};
        <buttononClick={() => onReadMo, r, e(po, st.slug)};
          className="gro, u, p/btn, inlin, e-flex, item, s-center, tex, t-bl, u, e-600, font-semiboldhover:te, x, t-bl, u, e-700, transitio, n-colors, duratio, n-3, 0, 0"        >
          ReadMore
          <svgclassName="w-4 h-4 ml-2group-hov, e, r/btn:transla, t, e-x-1, transitio, n-transformduration-300" 
            fill="none"             stroke="currentColor" 
            viewBox="0024 24"
          >
            <pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M178, l, 4, 4, m00l-4 4m  4-4H  3" />
          </svg>
        </button>
      </div>
    </article>
  )};