
interface SEOHeadWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOHeadWrapper = ({ 
  className = '', 
  children 
}: SEOHeadWrapperProps) => {
  return (
    <div className={'seoheadwrapper ' + className}>
      {children || <p>SEOHeadWrapper component</p>}
    </div>
  );
};

export default SEOHeadWrapper;