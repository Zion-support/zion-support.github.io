interface FuturisticCardEnhancedProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticCardEnhanced({ className = '', children }: FuturisticCardEnhancedProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
