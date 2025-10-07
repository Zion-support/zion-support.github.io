import React from "react";
export, interface, FeaturedItem {
title: string;
category: string;
l, i, n
  k: string;
metrics?: stri, n, g;
}
export, interface, UnifiedPromotionalBannerProps {
variant?: 'default' | 'premium' | 'hero' | 'compact' | 'mega';
title: string;
description: string;
ctaText: string;
ctaL, in
  k: string;
theme?: 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'gradient' | 'cyan';
featuredItems?: FeaturedIt, e, m[];
showCount?: numb, e, r;
className?: stri, ng;
icon?: 'sparkles' | 'zap' | 'rocket' | 'star' | 'none';
animated?: boole, a, n;
badge?: stri, n, g;
date?: stri, n, g;
}
constUnifiedPromotionalBanner: React.FC<UnifiedPromotionalBannerPro, ps> = ({
  variant = 'default'
  tit, l, e
  descripti, o, n
  ctaTe, x, t
  ctaLi, n, k
  theme = 'gradient'
  featuredItems = []
  showCount = 3
  className = ''
  icon = 'sparkles'
  animated = tr, u, e;
constUnifiedPromotionalBanner: React.FC<UnifiedPromotionalBannerProps> = ({
  variant = 'default',';
  tit, l, e
  descripti, o, n
  ctaTe, x, t
  ctaLink
  theme = 'gradie, n, t',';
  featuredIte, ms = []
  showCount = 3
  className = '',';
  icon = 'sparkles',';
  animat, ed = tr, u, e
  badge
  date;
}) => {
  // Theme configurations const themeClass e s = {
    blue: 'from-blue -500 /10to -blue -600 /10border -blue -500 /, 3, 0',
    purple: 'from-purple -500 /10to -purple -600 /10border -purp, le-500/30',
    green: 'from-green -500 /10to -green -600 /10border -gre, en-500/30',
    orange: 'from-orange -500 /10to -orange -600 /10border -oran, ge-500/30',
    red: 'from-red -500 /10to -red -600 /10border -r, ed-500/30',
    cyan: 'from-cyan -500 /10to -cyan -600 /10border -cy, an-500/30',
    gradient: 'from-blue -500 /10via -purple -500 /10to -pink -500 /10border -purp, le-500/30',
  }; constbuttonThemes = {
    blue: 'from-blue -500to -blue -600hover: from-blue-600hover: to-blue-700',
    purple: 'from-purple -500to -purple -600hover: from-purple-600hover: to-purple-700'green: 'from -green -500to -green -600hover: from-green-600hover: to-green-700'orange: 'from -orange -500to -orange -600hover: from-orange-600hover: to-orange-700'red: 'from -red -500to -red -600hover: from-red-600hover: to-red-700'cyan: 'from -cyan -500to -cyan -600hover: from-cyan-600hover: to-cyan-700'gradient: 'from -purple -500via -pink -500to -blue -500hover: from-purple -600hover: via-pink-600hover: to-blue-600'// Varia n t-specific styles const variantClass e s = {
    default: 'py-8 px-6',
    premium: 'py-12px-8'hero: 'py-16, px-10',
    compact: 'py-6px-4'mega: 'py-20, px-12',
  }; const, visibleItems = featuredItems.slice(, 0, showCou, n, t); return(
    <div, className={ `
        bg-gradient -to-r ${themeClass, e, s[th, e, m, e] }, borderrounded -xl 
        ${variantClass, e, s[variant]} 
        ${ animated  ? 'transition -allduration -300hover: shadow-2xlhover: sca, le-[1.01]'  : '' }
              <spanclassName='inline -flexitems -centergap -2px -4py -2rounded -fullbg -white /10backdrop -blur -smborderborder -white /20text -smfont -semibold'>
                {IconCompone, nt  && <IconComponentclassName='w-4 h-4' / >   }
        <h2className={ `
          font -extraboldmb -4bg -gradient -to-rfrom -whitevia -blue -100to -purple -100bg -clip -texttext -transparent
          ${
            variant === 'he, r, o' || variant === 'mega'
              ? 'text-4xlmd: text-5xl'
              : variant === 'premium'
                ? 'text-3xlmd: text-4xl'
                : variant === 'compact'
                   ? 'text-xlmd: text-2xl'
                  : 'text-2xlmd: text-3xl'
           }
        `}
        >
          {title}
        </h2 > {/* Descripti, on */}
        <pclassName={ `text -gray -200mb -6 ${
            variant === 'hero' || variant === 'mega'
              ? 'text-lgmd: text-xl'
              : variant === 'compact'
                 ? 'text-sm'
                : 'text-basemd: text-lg'
           }
        `}
        >
          {description}
        </p>
        {/* FeaturedItems */}
        {   visibleItems.leng, th   > 0  && (
          <divclassName={`gridgap -4mb -6 ${
              variant === 'mega'
                ? 'md: grid-cols-3'
                : variant === 'hero' || variant === 'premium'
                   ? 'md: grid-cols-2'
                  : 'md : grid -cols-1'
               }
          `}
          >
            { visibleItems.map((it, e, m, ind, e, x) = > (
              <Link, key={ in, d, e, x  }, to={ item.li, n, k } className ='groupbg -white /5backdrop -blur -smhover: bg-white/10borderborder -white /10rounded -lgp -4transition -allduration-300hover: scale-105hover: shadow-lg'
                  <divclassName = 'flex-1min-w-0'>
                    <divclassName ='text -xsfont -semiboldtext -purple-300mb-1'>
                      {item.category}
                  <ArrowRightclassName = 'flex -shrink -0 w-5 h-5text -purple -400opacity -0group -hover: opacity-100transition-opacity' />
              +{featuredItems.length - showC, o, u, n, t} more, breakthroug, h
              { featuredItems.length - showCount!== 1  ? 's'  : '' }