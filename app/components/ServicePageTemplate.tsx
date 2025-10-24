interface ServicePageTemplateProps {
  className?: string;
  children?: React.ReactNode;
}
const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};