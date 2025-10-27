interface AIToolCardProps {
  className?: string;
  children?: React.ReactNode;
}

const AIToolCard = ({ className = '', children }: AIToolCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
};

AIToolCard.displayName = 'AIToolCard';

export default AIToolCard;