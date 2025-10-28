<<<<<<< HEAD


interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc

export default function SEOOptimizer({ className, children }: SEOOptimizerProps) {
  return (
    <div className={`seo-optimizer ${className || ''}`}>
      {children}
    </div>
  );
}