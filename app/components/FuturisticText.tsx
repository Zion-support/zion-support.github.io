interface FuturisticTextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticText({ className = '', children }: FuturisticTextProps) {
  return (
    <div className={`futuristic-text ${className}`}>
      {children}
    </div>
  );
}
