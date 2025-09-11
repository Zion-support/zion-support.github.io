import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './ResponsiveImage.css';
const ResponsiveImage = ({ src, alt, width, height, className = '', loading = 'lazy', placeholder, sizes, srcSet, onLoad, onError, }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0.1,
        freezeOnceVisible: true,
    });
    const imgRef = useRef(null);
    useEffect(() => {
        if (isIntersecting && loading === 'lazy') {
            // Image is in viewport, start loading
            const img = imgRef.current;
            if (img && !isLoaded && !hasError) {
                img.src = src;
                if (srcSet)
                    img.srcset = srcSet;
                if (sizes)
                    img.sizes = sizes;
            }
        }
    }, [isIntersecting, loading, src, srcSet, sizes, isLoaded, hasError]);
    const handleLoad = () => {
        setIsLoaded(true);
        onLoad === null || onLoad === void 0 ? void 0 : onLoad();
    };
    const handleError = () => {
        setHasError(true);
        onError === null || onError === void 0 ? void 0 : onError();
    };
    const shouldLoad = loading === 'eager' || isIntersecting;
    return (_jsxs("div", { ref: ref, className: `responsive-image ${className} ${isLoaded ? 'responsive-image--loaded' : ''} ${hasError ? 'responsive-image--error' : ''}`, style: { width, height }, children: [placeholder && !isLoaded && !hasError && (_jsx("div", { className: 'responsive-image__placeholder', children: _jsx("img", { src: placeholder, alt: '', className: 'responsive-image__placeholder-img' }) })), shouldLoad && (_jsx("img", { ref: imgRef, src: loading === 'eager' ? src : undefined, srcSet: loading === 'eager' ? srcSet : undefined, sizes: loading === 'eager' ? sizes : undefined, alt: alt, width: width, height: height, className: 'responsive-image__img', onLoad: handleLoad, onError: handleError, loading: loading })), hasError && (_jsx("div", { className: 'responsive-image__error', children: _jsx("span", { children: "Failed to load image" }) }))] }));
};
export default ResponsiveImage;
