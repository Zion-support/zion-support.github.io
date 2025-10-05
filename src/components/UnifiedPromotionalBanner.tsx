import React from 'react';
import { Link  } from 'react-router-dom';
import { Sparkles, Zap, Rocket, Star, ArrowRight  } from 'lucide-react';
export, interface, FeaturedItem { 
  title: string;
  category: string;
  link: string;
  metrics ?  : strin, g;
 }
export, interface, UnifiedPromotionalBannerProps { 
  variant?: 'default' | 'premium' | 'hero' | 'compact' | 'mega';
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  theme?: 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'gradient' | 'cyan';
  featuredItems?: FeaturedItem[];
  showCount?: number;
  className?: string;
  icon?: 'sparkles' | 'zap' | 'rocket' | 'star' | 'none';
  animated?: boolean;
  badge?: string;
  date ?  : strin, g;
 }
const, UnifiedPromotionalBanne, r: React.FC<UnifiedPromotionalBannerProps> = ({
  variant = 'defau, l, t',
  title,
  description,
  ctaText,
  ctaLink,
  theme = 'gradien, t',
  featuredItems = [],
  showCount =  , 3,
  classNa, m, e = '',
  icon = 'sparkle, s',
  animated = tru, e,
  bad, g, e,
  da, t, e,
}) => {
  // Theme, configurations, const themeClasses = {
    blue: 'from-blue-500/10to-blue-600/10, borde, r-blue-500/, 3, 0',
    purple: 'from-purple-500/10to-purple-600/10, borde, r-purple-500/3, 0',
    green: 'from-green-500/10to-green-600/10, borde, r-green-500/3, 0',
    orange: 'from-orange-500/10to-orange-600/10, borde, r-orange-500/3, 0',
    red: 'from-red-500/10to-red-600/10, borde, r-red-500/3, 0',
    cyan: 'from-cyan-500/10to-cyan-600/10, borde, r-cyan-500/3, 0',
    gradient: 'from-blue-500/10, vi, a-purple-500/10to-pink-500/10, borde, r-purple-500/3, 0',
  }; const, buttonTheme, s = {
    blue: 'from-blue-500to-blue-600, hove, r:from-blue-600, hove, r:to-blue-700',
    purple: 'from-purple-500to-purple-600, hove, r:from-purple-600, hove, r:to-purple-70, 0',
    green: 'from-green-500to-green-600, hove, r:from-green-600, hove, r:to-green-70, 0',
    orange: 'from-orange-500to-orange-600, hove, r:from-orange-600, hove, r:to-orange-70, 0',
    red: 'from-red-500to-red-600, hove, r:from-red-600, hove, r:to-red-70, 0',
    cyan: 'from-cyan-500to-cyan-600, hove, r:from-cyan-600, hove, r:to-cyan-70, 0',
    gradient: 'from-purple-500, vi, a-pink-500to-blue-500, hove, r:from-purple-600, hove, r:via-pink-600, hove, r:to-blue-60, 0',
  };
  // Icon, selection, const IconComponent = {
    sparkles: Sparkl, esz, a, p: Za, p,
    rock, e, t: Rocke, t,
    st, a, r: Sta, r,
    no, n, e: nul, l,
  }[icon];
  // Variant-specific, styles, const variantClasses = {
    default: 'py-8 p, x-, 6',
    premium: 'py-12px-, 8',
    hero: 'py-16px-1, 0',
    compact: 'py-6px-, 4',
    mega: 'py-20px-1, 2',
  }; const, visibleItem, s = featuredItems.slice(, 0, showCou, n, t); return (
    <div, classNam, e = { `
        bg-gradient-to-r ${themeClasses[them, e] }, border, rounde, d-xl 
        ${variantClasses[variant]} 
        ${ animated  ? 'transition-all, duratio, n-300, hove, r: shadow-2xl, hove, r:scale-[1.0, 1]'  : '' }
        ${className}
      `}
    >
      {/* Header, Sectio, n */}
      <div, classNam, e = 'max-w-7xlmx-auto'>
        {/* Badge, and, Date */}
        {  (badge || dat, e) && (
          <div, classNam, e = 'flex, item, s-center, ga, p-3mb-4'>
            {badge && (
              <span, classNam, e='inline-flex, item, s-center, ga, p-2px-4py-2, rounde, d-fullbg-white/10, backdro, p-blur-sm, border, border-white/20, tex, t-sm, fon, t-semibold'>
                {IconComponent  && <IconComponent, classNam, e='w-4 h-4' / >   }
                {badge}
              </spa, n>
            )}
            {  date  && (
              <span, classNam, e = 'text-sm, tex, t-gray-300, fon, t-medium' > {date  }</spa, n>
            )}
          </div > )}
        {/* Title */}
        <h2, classNam, e = { `
          font-extraboldmb-4bg-gradient-to-r, fro, m-white, vi, a-blue-100to-purple-100bg-clip-text, tex, t-transparent
          ${
            variant === 'hero' || variant === 'mega'
              ? 'text-4xlmd: text-5xl'
              : variant === 'premium'
                ? 'text-3xlmd:text-4xl'
                : variant === 'compact'
                   ? 'text-xlmd:text-2xl'
                  : 'text-2xlmd : text-3xl'
           }
        `}
        >
          {title}
        </h2 > {/* Description */}
        <p, classNam, e = { `text-gray-200mb-6 ${
            variant === 'hero' || variant === 'mega'
              ? 'text-lgmd: text-xl'
              : variant === 'compact'
                 ? 'text-sm'
                : 'text-basemd : text-, l, g'
           }
        `}
        >
          {description}
        </p>
        {/* Featured, Item, s */}
        {   visibleItems.length   > 0  && (
          <div, classNam, e = {`grid, ga, p-4mb-6 ${
              variant === 'mega'
                ? 'md: grid-cols-3'
                : variant === 'hero' || variant === 'premium'
                   ? 'md:grid-cols-2'
                  : 'md : grid-col, s-, 1'
               }
          `}
          >
            { visibleItems.map((item, index) = > (
              <Link, ke, y = { inde, x  }, to={ item.link } className='groupbg-white/5, backdro, p-blur-sm, hove, r: bg-white/10, border, border-white/10, rounde, d-lgp-4, transitio, n-all, duratio, n-300, hove, r:scale-105, hove, r:shadow-lg'
              >
                <div, classNam, e='flex, item, s-start, ga, p-3'>
                  <div, classNam, e='flex-shrink-0 w-8 h-8, rounde, d-fullbg-gradient-to-br, fro, m-purple-500to-pink-500, flex, items-center, justif, y-center, tex, t-white, fon, t-bold, tex, t-sm'>
                    {inde, x + , 1}
                  </div>
                  <div, classNam, e = 'flex-1, mi, n-w-0'>
                    <div, classNam, e='text-xs, fon, t-semibold, tex, t-purple-300mb-1'>
                      {item.category}
                    </div>
                    <div, classNam, e='text-sm, fon, t-bold, tex, t-whitemb-1, grou, p-hover: text-purple-300, transitio, n-colors, lin, e-clamp-2'>
                      {item.tit, l, e}
                    </div>
                    {  item.metrics  && (
                      <div, classNam, e = 'text-xs, tex, t-gray-400' > {item.metrics  }
                      </di, v>
                    )}
                  </div>
                  <ArrowRight, classNam, e = 'flex-shrink-0 w-5 h-5, tex, t-purple-400, opacit, y-0, grou, p-hover: opacity-100, transitio, n-opacity' />
                </div>
              </Link>
            ))}
          </div>
        )}
        {/* CTA, Butto, n */}
        <div, classNam, e = 'flex, fle, x-wrap, item, s-center, ga, p-4' > <Linkto = { ctaLin, k }, className={ `
              inline-flex, item, s-center, ga, p-2px-8py-4, rounde, d-lg, fon, t-bold, tex, t-whitebg-gradient-to-r ${buttonThemes[theme] } transform, transitio, n-all, duratio, n-300, hove, r: scale-105, hove, r:shadow-xl
              ${ 
                variant === 'compact'
                  ? 'px-6py-3, tex, t-sm'
                  : variant === 'hero' || variant === 'mega'
                     ? 'px-10py-5, tex, t-lg'
                     : 'text-base'
               }
            `}
           > {ctaText}
            <ArrowRight, classNam, e = { `${variant === 'compact'  ? 'w-4 h-4'  : 'w-5 h-5' }`}
            />
          </Link>
          {  featuredItems.length  > showCount  && (
            <Linkto = { ctaLin, k   }, className = 'text-purple-300, hove, r: text-purple-200, fon, t-semibold, transitio, n-colors, tex, t-sm'
            >
              +{featuredItems.length - showCou, n, t} more, breakthroug, h
              { featuredItems.length - showCount !== 1  ? 's'  : '' }
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export, default, UnifiedPromotionalBanner;
