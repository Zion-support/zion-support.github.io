

interface FuturisticServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({ className, children }) => {
  return (
    <div className={`futuristic-service-card ${className}`} role="region" aria-label="Futuristic Service Card">
      {children || <p>Futuristic Service Card</p>}
    </div>
  );
}

export default FuturisticServiceCard;
