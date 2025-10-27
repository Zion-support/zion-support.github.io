

interface SEOHeadProps {
  title?: string;
  description?: string;
  className?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, className }) => {
  return (
    <div className={className}>
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
    </div>
  );
};

export default SEOHead;