
interface EnhancedSEOProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedSEO({ className, children }: EnhancedSEOProps) {
  return (
    <div className={`enhancedseo-component ${className || ''}`}>
      {children}
    </div>
  );
}
