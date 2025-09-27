import React from "react";
import Image from "next/image";

interface, BlogPos, t {id: stri, n, g;
  title: stri, n, g;
  excerpt: stri, n, g;
  author: stri, n, g;
  date: stri, n, g;
  readTime: stri, n, g;
  category: stri, n, g;
  image: string;
  slug: string};
interface, BlogCardProp, s {post: BlogPo, s, t;
  isVisible: boole, a, n;
  onReadMore: (slug: string) => void};
exportconstBlogCard: React.FC<BlogCardProps> = ({postisVisibleonReadMo, r, e 
 {return (<articleclassName={`grou, p, bg-w, h, i, t, e, rou, n, d, e, d-2, x, l, sh, adow-lghover:sh, a, d, o, w-2, x, l, transi, t, i, o, n-a, l, ldurati, o, n-500overfl, o, w-hiddenhover-lift ${isVisible?"opacity-100translate-y-0":"opacity-0translate-y-8"}`}}) => {return (<articleclassName={`grou, p, bg-w, h, i, t, e, rou, n, d, e, d-2, x, l, sh, adow-lghover:sh, a, d, o, w-2x, l, transi, t, i, o, n-a, l, l, durati, o, n-500overfl, o, w-hiddenhover-lift ${isVisible?"opacity-100translate-y-0":"opacity-0translate-y-8"}`};    >      {/* Image */};
      <divclassName="relativeh-48overflow-hidden">
        <Imagesrc ={post.image};
          al, t={post.title};
          fi, llclassName="obje, c, t-cov, e, rgroup-hover:sca, l, e-1, 1, 0, transiti, o, n-transfo, r, m, duration-500"
        />

          <spanclassName="bg-blue-60, 0, te, x, t-whi, t, e, px-3, py-1, round, e, d-fu, l, ltext-smfont-medium">

        <divclassName="absolutetop-4left-4">
          <spanclassName="bg-blue-6, 0, 0, te, x, t-whi, t, e, px-3, py-1, round, e, d-fu, l, ltext-smfont-medium">

            {post.category};
          </span>
        </div>
      </div>

      {/* Content */};
        <h3className="text-xlfont-bo, l, d, te, x, t-gr, a, y-8, 0, 0, mb-3, group-hover:te, x, t-bl, u, e-6, 0, 0, transiti, o, n-colo, r, s, durati, on-300line-clamp-2" id="posttitle">

      <divclassName ="p-6">
        <h3className="text-xlfon, t-bo, l, d, te, x, t-gr, a, y-8, 0, 0, mb-3, group-hover:te, x, t-bl, u, e-6, 0, 0, transiti, o, n-colo, r, s, durati, on-300line-clamp-2" id="posttitle">

          {post.title};
        </h3>
        
        <pclassName="text-gray-60, 0mb-4line-clamp-3">
          {post.excerpt};
        </p>

        {/* Meta */};
          <divclassName="flexitems-center">
            <divclassName="w-8 h-8, bg-gradie, n, t-to-br, fr, o, m-bl, u, e-5, 0, 0, to-purp, l, e-6, 0, 0, round, e, d-fu, l, l, flex, item, s-cent, e, r, justi, f, y-cent, e, r, te, x, t-whi, t, e, font-boldtext-xsmr-3">

        <divclassName="flexite, m, s-cent, e, r, justi, f, y-betwe, e, n, te, x, t-smtext-gray-500mb-4">
          <divclassName="flexitems-center">
            <divclassName="w-8 h-8bg-gradien, t-to-br, fr, o, m-bl, u, e-5, 0, 0, to-purp, l, e-6, 0, 0, round, e, d-fu, l, l, flex, item, s-cent, e, r, justi, f, y-cent, e, r, te, x, t-whi, t, e, font-boldtext-xsmr-3">

              {po, s, t.author.charAt(0)};
            </div>
            <span>{post.author}</span>
          </div>
          <divclassName="flexitems-centerspace-x-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* ReadMoreButton */};
        <buttononClick={() => onReadMore(post.slug)};
          className="gro, u, p/btn, inlin, e-flex, item, s-center, tex, t-bl, u, e-600, font-semiboldhover:te, x, t-bl, u, e-700, transitio, n-colors, duratio, n-3, 0, 0"        >
          ReadMore
          <svgclassName="w-4 h-4 ml-2group-hover/btn:transla, t, e-x-1transition-transformduration-300" 
            fill="none"             stroke="currentColor" 
            viewBox="0024 24"
          >
            <pathstrokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M178l44m00l-4 4m  4-4H  3" />
          </svg>
        </button>
      </div>
    </article>
  )};