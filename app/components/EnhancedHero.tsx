interface EnhancedHeroProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedHero = ({ 
  className = '', 
  children 
}: EnhancedHeroProps) => {
  return (
    <div className={'enhancedhero ' + className}>
      {children || <p>EnhancedHero component</p>}
    </div>
  );
};

export default EnhancedHero;