import React, { useState, useRef, useEffect } from 'react',
import Image from 'next/image';
import { motion, AnimatePresence  } from 'framer-motion';
        const [entry] = entries;        // Check condition
if ( {) {
  $2
}
          setIsInView (true);
          observer_ref.current?.disconnect ();

  useEffect(() => {;
    if (!lazy || priority || isInView) return;
    observerRef.current = new IntersectionObserver(;
      entries => {;

        const [entry] = entries;        if (entry && entry.isIntersecting) {
          setIsInView(true)
          observerRef.current?.disconnect()

  loading?: 'lazy' | 'eager';
  style?: React && React.CSSProperties;


  return (
    <div 
      ref={imgRef}
      className={cn('relative overflow-hidden', className)}
      style={containerStyle}
    >;
      <AnimatePresence>;

  },

  },


  // Container styles
            className="absolute inset-0"
                  className='h-full bg-blue-500'
              <span className='text-xs mt-1'>Retried {retries} times</span>
  opacity: 0
export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images
  columns = 3
  aspectRatio = '16/9'
  className
  onImageClick
}) => {
  const [loadedCount, setLoadedCount] = useState(0)
  const handleImageLoad = () => {
    setLoadedCount(prev => prev + 1)
  }
            className="group cursor-pointer"
            onClick={() => onImageClick?.(index)}
          >
            <div className="relative">

        <OptimizedImage
          src={src}
          alt={alt}
          aspectRatio='1/1'
          objectFit='cover'
          fallbackSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=random`}
          placeholder='color'
          placeholderColor='#f3f4f6'
          priority={true}
          className='rounded-full'        />
      ) : (
        <div className='w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold'>
    </div>;
  );
};
},
