

interface AIToolCardProps {
  className?: string;
  children?: React.ReactNode;
}

const AIToolCard: React.FC<AIToolCardProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

AIToolCard.displayName = 'AIToolCard';

export default AIToolCard;