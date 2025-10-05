import React from 'react';
import { Link } from 'react-router-dom';
importtype { EnhancedPromotionalBannerasBannerType } from '../content/enhanced-promotional-banners';
interfaceEnhancedPromotionalBannerProps { 
  banner: BannerType;
  className ?  : string;
 }
constEnhancedPromotionalBanner: React.FC<EnhancedPromotionalBannerProps> = ({
  banner
  className = ''
}) => {
  constvariantStyles = {
    success: 'bg-gradient-to-rfrom-green-600to-emerald-600'
    warning: 'bg-gradient-to-rfrom-yellow-600to-orange-600'
    info: 'bg-gradient-to-rfrom-blue-600to-indigo-600'
    error: 'bg-gradient-to-rfrom-red-600to-pink-600'
  }; return (
    <divclassName = { `${variantStyles[banner.variant] }text-whitep-4 ${className}`}
    >
      <divclassName = 'containermx-autopx-6'>
        <divclassName='flexitems-centerjustify-betweenflex-wrapgap-4'>
          <divclassName='flexitems-centergap-3flex-1min-w-0'>
            {  banner.icon  && (
              <spanclassName='text-2xlflex-shrink-0' > {banner.icon  }</span>
            )}
            <divclassName = 'flex-1min-w-0'>
              <h3className='font-boldtext-lg'>{banner.title}</h3>
              <pclassName='text-smopacity-90'>{banner.description}</p>
            </div>
          </div>
          <Linkto = { banner.ctaLink }className = 'bg-whitetext-gray-900px-6py-2rounded-lgfont-semiboldhover: bg-opacity-90transition-allflexitems-centergap-2flex-shrink-0'
          >
            {banner.ctaText}
            <ArrowRight,className = 'w-4 h-4' />
          </Link>
        </div>
      </div>
    </div>
  );
};
exportdefaultEnhancedPromotionalBanner;
