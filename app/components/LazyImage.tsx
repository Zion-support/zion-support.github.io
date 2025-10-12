import React from 'react';
<<<<<<< HEAD

interface LazyImageProps {
  children?: React.ReactNode;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default LazyImage;
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function LazyImage({ src, alt, className = '', width, height }: LazyImageProps) {
  return (
    <>
      <Helmet>
        <title>Lazy Image - Zion Tech Group</title>
      </Helmet>
      <div className="lazy-image-container">
        <img
          src={src}
          alt={alt}
          className={className}
          width={width}
          height={height}
          loading="lazy"
        />
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-2d8f
