
interface SeoheadProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Seohead({ className = '', children, ...props }: SeoheadProps) {
  return (
    <div className={`seohead-component ${className}`} {...props}>
      {children}
    </div>
  );
}
