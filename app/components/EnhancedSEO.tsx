<<<<<<< HEAD


interface EnhancedSEOProps {
  className?: string;
  children?: React.ReactNode;
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ className, children }) => {
  return (
    <div className={className} role="region" aria-label="Enhanced SEO">
      {children || <p>Enhanced SEO</p>}
    </div>
  );
};

export default EnhancedSEO;