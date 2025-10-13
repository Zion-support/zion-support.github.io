
interface ResponsivetextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Responsivetext({ className = '', children, ...props }: ResponsivetextProps) {
  return (
    <div className={`responsivetext-component ${className}`} {...props}>
      {children}
    </div>
  );
}
