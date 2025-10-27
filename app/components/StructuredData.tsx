
interface StructuredDataProps {
  className?: string;
  children?: React.ReactNode;
}

export default function StructuredData({ className, children }: StructuredDataProps) {
  return (
    <div className={`structureddata-component ${className || ''}`}>
      {children}
    </div>
  );
}
