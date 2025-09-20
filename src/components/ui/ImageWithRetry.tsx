import React, { useState } from 'react',;
import Image { type ImageProps } from 'next/image';
<<<<<<< HEAD
import { cn,  } from '@/lib/utils';
interface ImageWithRetryProps extends Omit<ImageProps 'src' | 'alt'> {
src: string;
alt?: string;
/** Source to use if the main src fails */;
/** CSS class for the retry button */;
retryClassName?: string;  retryClassName?: string,
}
/**;
* Image component that falls back to a placeholder and offers a retry button when the image fails to load.;
*/;
=======
import { cn } from "@/lib/utils";
interface ImageWithRetryProps extends Omit<ImageProps 'src' | 'alt'> {src: string;
  alt?: string;
  /** Source to use if the main src fails */
  /** CSS class for the retry button */
  retryClassName?: string;  retryClassName?: string}
/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
export function ImageWithRetry({
})