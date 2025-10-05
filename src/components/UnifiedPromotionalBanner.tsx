import React from 'react';
import { Link } from 'react-router-dom';
import { SparklesZapRocketStarArrowRight, } from 'lucide-react';
exportinterfaceFeaturedItem { 
  title: string;
  category: string;
  link: string;
  metrics ?  : string;
 }
exportinterfaceUnifiedPromotionalBannerProps { 
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
  date ?  : string;
 }
constUnifiedPromotionalBanner: React.FC<UnifiedPromotionalBannerProps> = ({
  variant = 'default'
  title
  description
  ctaText
  ctaLink
  theme = 'gradient'
  featuredItems = []
  showCount =  3
  className = ''
  icon = 'sparkles'
  animated = true
  badge
  date
}) => {
  // Themeconfigurationsconst themeClasses = {
    blue: 'from-blue-500/10to-blue-600/10border-blue-500/30'
    purple: 'from-purple-500/10to-purple-600/10border-purple-500/30'
    green: 'from-green-500/10to-green-600/10border-green-500/30'
    orange: 'from-orange-500/10to-orange-600/10border-orange-500/30'
    red: 'from-red-500/10to-red-600/10border-red-500/30'
    cyan: 'from-cyan-500/10to-cyan-600/10border-cyan-500/30'
    gradient: 'from-blue-500/10via-purple-500/10to-pink-500/10border-purple-500/30'
  }; constbuttonThemes = {
    blue: 'from-blue-500to-blue-600hover:from-blue-600hover:to-blue-700'
    purple: 'from-purple-500to-purple-600hover:from-purple-600hover:to-purple-700'
    green: 'from-green-500to-green-600hover:from-green-600hover:to-green-700'
    orange: 'from-orange-500to-orange-600hover:from-orange-600hover:to-orange-700'
    red: 'from-red-500to-red-600hover:from-red-600hover:to-red-700'
    cyan: 'from-cyan-500to-cyan-600hover:from-cyan-600hover:to-cyan-700'
    gradient: 'from-purple-500via-pink-500to-blue-500hover:from-purple-600hover:via-pink-600hover:to-blue-600'
  };
  // Iconselectionconst IconComponent = {
    sparkles: Sparkles
    zap: Zap
    rocket: Rocket
    star: Star
    none: null
  }[icon];
  // Variant-specificstylesconst variantClasses = {
    default: 'py-8 px-6'
    premium: 'py-12px-8'
    hero: 'py-16px-10'
    compact: 'py-6px-4'
    mega: 'py-20px-12'
  }; constvisibleItems = featuredItems.slice(0showCount); return (
    <divclassName = { `
        bg-gradient-to-r ${themeClasses[theme] }borderrounded-xl 
        ${variantClasses[variant]} 
        ${ animated  ? 'transition-allduration-300hover: shadow-2xlhover:scale-[1.01]'  : '' }
        ${className}
      `}
    >
      {/* HeaderSection */}
      <divclassName = 'max-w-7xlmx-auto'>
        {/* BadgeandDate */}
        {  (badge || date) && (
          <divclassName = 'flexitems-centergap-3mb-4'>
            {badge && (
              <spanclassName='inline-flexitems-centergap-2px-4py-2rounded-fullbg-white/10backdrop-blur-smborderborder-white/20text-smfont-semibold'>
                {IconComponent  && <IconComponentclassName='w-4 h-4' / >   }
                {badge}
              </span>
            )}
            {  date  && (
              <spanclassName = 'text-smtext-gray-300font-medium' > {date  }</span>
            )}
          </div > )}
        {/* Title */}
        <h2className = { `
          font-extraboldmb-4bg-gradient-to-rfrom-whitevia-blue-100to-purple-100bg-clip-texttext-transparent
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
        <pclassName = { `text-gray-200mb-6 ${
            variant === 'hero' || variant === 'mega'
              ? 'text-lgmd: text-xl'
              : variant === 'compact'
                 ? 'text-sm'
                : 'text-basemd : text-lg'
           }
        `}
        >
          {description}
        </p>
        {/* FeaturedItems */}
        {   visibleItems.length   > 0  && (
          <divclassName = {`gridgap-4mb-6 ${
              variant === 'mega'
                ? 'md: grid-cols-3'
                : variant === 'hero' || variant === 'premium'
                   ? 'md:grid-cols-2'
                  : 'md : grid-cols-1'
               }
          `}
          >
            { visibleItems.map((itemindex) = > (
              <Linkkey = { index  }to={ item.link } className='groupbg-white/5backdrop-blur-smhover: bg-white/10borderborder-white/10rounded-lgp-4transition-allduration-300hover:scale-105hover:shadow-lg'
              >
                <divclassName='flexitems-startgap-3'>
                  <divclassName='flex-shrink-0 w-8 h-8rounded-fullbg-gradient-to-brfrom-purple-500to-pink-500flexitems-centerjustify-centertext-whitefont-boldtext-sm'>
                    {index + 1}
                  </div>
                  <divclassName = 'flex-1min-w-0'>
                    <divclassName='text-xsfont-semiboldtext-purple-300mb-1'>
                      {item.category}
                    </div>
                    <divclassName='text-smfont-boldtext-whitemb-1group-hover: text-purple-300transition-colorsline-clamp-2'>
                      {item.title}
                    </div>
                    {  item.metrics  && (
                      <divclassName = 'text-xstext-gray-400' > {item.metrics  }
                      </div>
                    )}
                  </div>
                  <ArrowRight,className = 'flex-shrink-0 w-5 h-5text-purple-400opacity-0group-hover: opacity-100transition-opacity' />
                </div>
              </Link>
            ))}
          </div>
        )}
        {/* CTAButton */}
        <divclassName = 'flexflex-wrapitems-centergap-4' > <Linkto = { ctaLink }className={ `
              inline-flexitems-centergap-2px-8py-4rounded-lgfont-boldtext-whitebg-gradient-to-r ${buttonThemes[theme] } transformtransition-allduration-300hover: scale-105hover:shadow-xl
              ${ 
                variant === 'compact'
                  ? 'px-6py-3text-sm'
                  : variant === 'hero' || variant === 'mega'
                     ? 'px-10py-5text-lg'
                     : 'text-base'
               }
            `}
           > {ctaText}
            <ArrowRight,className = { `${variant === 'compact'  ? 'w-4 h-4'  : 'w-5 h-5' }`}
            />
          </Link>
          {  featuredItems.length  > showCount  && (
            <Linkto = { ctaLink   }className = 'text-purple-300hover: text-purple-200font-semiboldtransition-colorstext-sm'
            >
              +{featuredItems.length - showCount} morebreakthrough
              { featuredItems.length - showCount !== 1  ? 's'  : '' }
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
exportdefaultUnifiedPromotionalBanner;
