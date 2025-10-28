<<<<<<< HEAD


interface SEOEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'seoenhancer ' + className}>
      {children || <p>SEOEnhancer component</p>}
    </div>
  );
};
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc

interface Props {
  // Add props here
}

export default function SEOEnhancer(_props: Props) {
  return (
    <div>
      {/* SEOEnhancer component content */}
    </div>
  );
}