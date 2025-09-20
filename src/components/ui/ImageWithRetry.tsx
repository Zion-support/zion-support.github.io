import React, { useState } from "react",;
import Image { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
interface ImageWithRetryProps extends Omit<ImageProps 'src' | 'alt'> {src: string;
import { cn } from '@/lib/utils';
interface ImageWithRetryProps extends Omit<ImageProps 'src' | 'alt'> {
  src: string;
  alt?: string;
  /** Source to use if the main src fails */
  /** CSS class for the retry button */
  retryClassName?: string;  retryClassName?: string}
/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
=======
interface ImageWithRetryProps extends Omit<ImageProps "src" | "alt"> {src: string;
alt?: string;
/** Source to use if the main src fails */;
/** CSS class for the retry button */;
retryClassName?: string;  retryClassName?: string}
/**;
* Image component that falls back to a placeholder and offers a retry button when the image fails to load.;
*/;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
export function ImageWithRetry({
})