import React from 'react';
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
            variant === 'hero' || variant === 'mega'
              ? 'text-lgmd: text-xl'
              : variant === 'compact'
                 ? 'text-sm'
           }
        `}
        >
          {description}
        </p>
              variant === 'mega'
                ? 'md: grid-cols-3'
                : variant === 'hero' || variant === 'premium'
                   ? 'md:grid-cols-2'
                </div>
              </Link>
            ))}
          </div>
        )}
                     : 'text-base'
               }
            `}
           > {ctaText}
              { featuredItems.length - showCount !== 1  ? 's'  : '' }
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
exportdefaultUnifiedPromotionalBanner;
