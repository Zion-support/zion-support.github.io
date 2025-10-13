
<<<<<<< HEAD
interface LazyImageProps {
  src: string;
  alt: string;
import { lazy } from 'react';

interface LazyimageProps {
=======
  src: string;
  alt: string;
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f
  className?: string;
  children?: React.ReactNode;
}

export default function Lazyimage({ className = '', children, ...props }: LazyimageProps) {
}