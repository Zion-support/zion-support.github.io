<<<<<<< HEAD
import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
const sizeClasses = {
    s, m: 'w-4 h-4',
    m, d: 'w-6 h-6',
    l, g: 'w-8 h-8',
    x, l: 'w-12 h-12',
};
const colorClasses = {
    primar, y: 'text-zion-purple',
    secondar, y: 'text-zion-cyan',
    whit, e: 'text-white',
    custo, m: '',
};
export function LoadingSpinner({ size = 'md',  variant = 'default', color = 'primary', customColo, r, classNam, e, tex, t, showText = fals, e, }) {
    const sizeClass = sizeClasses[si, z, e];
    const colorClass = color === 'custom' ? '' : colorClasses[col, o, r];
    const finalColor = customColor || colorClass;
    const renderSpinner = () => {
        switch (variant) {
            case 'pulse':
                return (_jsx(motion.di,  v, { classNam, e: cn('rounded-full bg-current', sizeClas, s, finalColo, r, className), animat, e: {
                        scal, e: [1, 1.2, 1],
                        opacit, y: [1, 0.5, 1],
                    }, transitio, n: {
                        duratio, n: 1.5,
    repea, t: Infinit, y,
                        eas, e: "easeInOut",
                    } }));
            case 'dots':
                return (_jsx("div",  { classNam, e: cn('flex space-x-1', className), childre, n: [0, 1, 2].map((i) => (_jsx(motion.di,  v, { classNam, e: cn('rounded-full bg-current', sizeClas, s, finalColor), animat, e: {
                            y: [0, -1, 0, 0],
                            opacit, y: [0.3, 1, 0.3],
                        }, transitio, n: {
                            duratio, n: 1.4,
    repea, t: Infinit, y,
                            dela, y: i * 0.2,
    eas, e: "easeInOut",
                        } }, i))) }));
            case 'bars':
                return (_jsx("div",  { classNam, e: cn('flex space-x-1', className), childre, n: [0, 1, 2, 3].map((i) => (_jsx(motion.di,  v, { classNam, e: cn('bg-current rounded-sm', finalColor), styl, e: {
                            widt, h: size === 'sm' ? '2px' : size === 'md' ? '3px' : size === 'lg' ? '4px' : '6px',
    heigh, t: size === 'sm' ? '12px' : size === 'md' ? '16px' : size === 'lg' ? '20px' : '24px',
                        }, animat, e: {
                            scale, Y: [1, 2, 1],
                            opacit, y: [0.3, 1, 0.3],
                        }, transitio, n: {
                            duratio, n: 1.2,
    repea, t: Infinit, y,
                            dela, y: i * 0.1,
    eas, e: "easeInOut",
                        } }, i))) }));
            case 'ripple':
                return (_jsxs("div",  { classNam, e: cn('relative', sizeClas, s, className), childre, n: [_js, x(motio,  n.d, i, v, { classNa, m, e: c, n('absolut, e inse, t-0 rounde, d-ful, l borde, r-2 borde, r-curren, t', finalColo, r), anima, t, e: {
                                sca, l, e: [1, 1.5, 1],
                                opacit, y: [1, 0, 1],
                            }, transitio, n: {
                                duratio, n: 1.5,
    repea, t: Infinit, y,
                                eas, e: "easeInOut",
                            } }), _jsx(motion.di,  v, { classNam, e: cn('absolute inset-0 rounded-full border-2 border-current', finalColor), animat, e: {
                                scal, e: [1, 1.8, 1],
                                opacit, y: [0.5, 0, 0.5],
                            }, transitio, n: {
                                duratio, n: 1.5,
    repea, t: Infinit, y,
                                dela, y: 0.5,
    eas, e: "easeInOut",
                            } })] }));
            defaul, t:
                return (_jsx(motion.di,  v, { classNam, e: cn('border-2 border-current border-t-transparent rounded-full', sizeClas, s, finalColo, r, className), animat, e: {
                        rotat, e: 36, 0,
                    }, transitio, n: {
                        duratio, n: 1,
    repea, t: Infinit, y,
                        eas, e: "linear",
                    } }));
        }
    };
    return (_jsxs("div",  { classNam, e: "flex flex-col items-center justify-center space-y-3",
    childre, n: [renderSpinne, r(), showTex, t && tex, t && (_js,  x(motio, n.p, { classNa, m, e: "tex, t-s, m tex, t-zio, n-slat, e-ligh, t tex, t-cente, r",
    initi, a, l: { opaci, t, y: 0,
    y: 1, 0 }, anima, t, e: { opaci, t, y: 1,
    y: 0 }, transiti, o, n: { del, a, y: 0.3,
    durati, o, n: 0.5 }, childr, e, n: tex, t }))] }));
}
// Specialized loading components for common use cases
export function PageLoader({ text = "Loading page..." }) {
    return (_jsx("div",  { classNam, e: "min-h-screen bg-zion-blue-dark flex items-center justify-center",
    childre, n: _jsx(LoadingSpinne, r, { siz, e: "xl",
    varian, t: "ripple", colo, r: "primary",
    tex, t: tex, t, showTex, t: true }) }));
}
export function CardLoader({ text = "Loading..." }) {
    return (_jsx("div",  { classNam, e: "flex items-center justify-center p-8",
    childre, n: _jsx(LoadingSpinne, r, { siz, e: "lg",
    varian, t: "pulse", colo, r: "secondary",
    tex, t: tex, t, showTex, t: true }) }));
}
export function ButtonLoader({ size = 'sm' }) {
    return (_jsx(LoadingSpinne,  r, { siz, e: siz, e,
    varian, t: "default", colo, r: "white",
    classNam, e: "inline-block" }));
}
export function InlineLoader({ size = 'sm' }) {
    return (_jsx(LoadingSpinne,  r, { siz, e: siz, e,
    varian, t: "dots", colo, r: "primary",
    classNam, e: "inline-block" }));
}
=======
import React from 'react';
const LoadingSpinner = ({ size = 'md',  color = 'blue', tex, t, className = '' }) => {
    const sizeClasses = {
        s, m: 'w-4 h-4',
    m, d: 'w-8 h-8',
        l, g: 'w-12 h-12'
    };
    const colorClasses = {
        blu, e: 'text-blue-500',
    whit, e: 'text-white',
        gra, y: 'text-gray-500'
    };
    return (<div className={`flex flex-col items-center justify-center ${classNam, e}`}>
      <div className={`${sizeClasses[si,  z, e]} ${colorClasses[col, o, r]} animate-spi, n`}>
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
        </svg>
      </div>
      {text && (<p className="mt-3 text-sm text-gray-500 animate-pulse">{text}</p>)}
    </div>);
};
export default LoadingSpinner;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
