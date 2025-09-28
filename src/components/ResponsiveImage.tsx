import React from "react";
import LazyImage from "./LazyImage";
import {
  imageOptimizer,
  ImageOptimizationOptions,
} from "../utils/imageOptimization";

interface ResponsiveImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  src: string;
  alt: string;
  optimizationOptions?: ImageOptimizationOptions;
  breakpoints?: number[];
  fallbackSrc?: string;
  className?: string;
  aspectRatio?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  optimizationOptions = {},
  breakpoints = [320, 640, 768, 1024, 1280, 1920],
  fallbackSrc,
  className = "",
  aspectRatio,
  ...props
}) => {
  // Generate responsive sources
  const responsiveSources = imageOptimizer.generateResponsiveSources(
    src,
    optimizationOptions,
  );

  // Generate srcSet for different breakpoints
  const srcSet = responsiveSources
    .map(({ src: optimizedSrc, width }) => `${optimizedSrc} ${width}w`)
    .join(", ");

  // Generate sizes attribute for responsive loading
  const sizes = breakpoints
    .map((bp, index) => {
      if (index === 0) return `(max-width: ${bp}px) ${bp}px`;
      if (index === breakpoints.length - 1)
        return `(min-width: ${breakpoints[index - 1]}px) ${bp}px`;
      return `(min-width: ${breakpoints[index - 1]}px) and (max-width: ${bp}px) ${bp}px`;
    })
    .join(", ");

  const { onLoad, onError, ...restProps } = props;

  return (
    <LazyImage
      {...restProps}
      src={src}
      alt={alt}
      optimizationOptions={optimizationOptions}
      fallbackSrc={fallbackSrc}
      className={`responsive-image ${className}`}
      srcSet={srcSet}
      sizes={sizes}
      onLoad={
        onLoad
          ? () => onLoad({} as React.SyntheticEvent<HTMLImageElement>)
          : undefined
      }
      onError={
        onError
          ? () => onError({} as React.SyntheticEvent<HTMLImageElement>)
          : undefined
      }
      style={{
        ...restProps.style,
        aspectRatio:
          aspectRatio ||
          (optimizationOptions.width && optimizationOptions.height
            ? `${optimizationOptions.width}/${optimizationOptions.height}`
            : undefined),
      }}
    />
  );
};

export default ResponsiveImage;
