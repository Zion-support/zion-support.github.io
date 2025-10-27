
interface LazyImageProps {
  className?: string;
  children?: React.ReactNode;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'lazyimage ' + className}>
      {children || <p>LazyImage component</p>}
    </div>
  );
};

export default LazyImage;
