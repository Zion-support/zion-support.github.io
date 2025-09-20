import React, { useState } from 'react',
import import Image { type ImageProps } from 'next/image';
import import { cn,,  } from '@/lib/utils';
interface ImageWithRetryProps extends Omit<ImageProps 'src' | 'alt'> {
  src: string;
  alt?: string;
  /** Source to use if the main src fails */
  /** CSS class for the retry button */
  retryClassName?: string;  retryClassName?: string,
}
/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
export function ImageWithRetry({
