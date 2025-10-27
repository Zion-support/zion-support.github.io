
interface SEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SEOOptimizer({ className, children }: SEOOptimizerProps) {
  return (
    <div className={`seo-optimizer ${className || ''}`}>
      {children}
    </div>
  );
}