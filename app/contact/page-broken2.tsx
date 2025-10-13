
interface PageBroken2Props {
  className?: string;
  children?: React.ReactNode;
}

export default function PageBroken2({ className = '', children, ...props }: PageBroken2Props) {
  return (
    <div className={`pagebroken2-component ${className}`} {...props}>
      {children}
    </div>
  );
}
