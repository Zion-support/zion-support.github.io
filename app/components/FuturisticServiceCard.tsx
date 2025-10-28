
interface FuturisticServiceCardProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({ className = '', children }) => {
  return (
    <div className={`futuristic-service-card ${className}`}>
      {children}
    </div>
  );
};

FuturisticServiceCard.displayName = 'FuturisticServiceCard';

export default FuturisticServiceCard;
