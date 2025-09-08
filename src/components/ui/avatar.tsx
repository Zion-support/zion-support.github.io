import React from 'react';
import { cn } from '@/lib/utils';
import React from "react"
import { cn } from "@/lib/utils"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const AvatarImage: React.FC<AvatarImageProps> = ({
  className,
  src,
  alt,
  ...props
}) => {
  return (
    <img
      className={cn('aspect-square h-full w-full', className)}
      src={src}
      alt={alt}
      {...props}
    />
  );
};

};
