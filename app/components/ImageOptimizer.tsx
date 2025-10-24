interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
export default function Imageoptimizer({ className = '', children, ...props }: ImageoptimizerProps) {
=======

export default function ImageOptimizer({ 
  src, 
  alt, 
  className = '', 
  lazy = true, 
  // quality = 80,
  // format = 'webp',
  // placeholder 
}: ImageOptimizerProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-04df
  return (
    <div className={`imageoptimizer-component ${className}`} {...props}>
      {children}
    </div>
  );
};