import React from 'react';
import { Link } from 'react-router-dom';
import type { EnhancedPromotionalBanner as BannerType } from '../content/enhanced-promotional-banners';

interface EnhancedPromotionalBannerProps {
  banner: BannerType;
  className?: string;
}

const EnhancedPromotionalBanner: React.FC<EnhancedPromotionalBannerProps> = ({
  banner,
  className = ''
}) => {
  const variantStyles = {
    success: 'bg-gradient-to-r from-green-600 to-emerald-600',
    warning: 'bg-gradient-to-r from-yellow-600 to-orange-600',
    info: 'bg-gradient-to-r from-blue-600 to-indigo-600',
    error: 'bg-gradient-to-r from-red-600 to-pink-600'
    succe, s, s: 'bg-gradie, n, t-to-r, fro, m-gre, e, n-600, t, o-emera, l, d-6, 0, 0',
    warni, n, g: 'bg-gradie, n, t-to-r, fro, m-yell, o, w-600, t, o-oran, g, e-60, 0',
    in, f, o: 'bg-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-60, 0',
    err, o, r: 'bg-gradie, n, t-to-r, fro, m-r, e, d-600, t, o-pi, n, k-60, 0',
  }; retu, r, n (
    <div, classNam, e = { `${variantStyl, e, s[bann, e, r.vari, a, n, t] }, te, x, t-whit, e, p-4 ${classNa, m, e}`}
    >
      <div, classNam, e = 'container, m, x-auto, p, x-6'>
        <div, classNam, e='flex, item, s-center, justif, y-between, fle, x-wrap, ga, p-4'>
          <div, classNam, e='flex, item, s-center, ga, p-3, fle, x-1, mi, n-w-0'>
            {  bann, e, r.ic, o, n  && (
              <span, classNam, e='te, x, t-2xl, fle, x-shri, n, k-0' > {bann, e, r.ic, o, n  }</s, p, a, n>
            )}
            <div, classNam, e = 'fl, e, x-1, mi, n-w-0'>
              <h3, classNam, e='fo, n, t-bold, tex, t-lg'>{bann, e, r.title}</h3>
              <p, classNam, e='te, x, t-sm, opacit, y-90'>{bann, e, r.description}</p>
            {bann, e, r.cta, T, e, x, t}
            <ArrowRight, classNam, e = 'w-4 h-4' />
            {banner.ctaText}
          </Link>
        </div>
      </div>
    </div>