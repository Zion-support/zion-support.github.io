
interface AboutPageProps {
  className?: string;
  children?: React.ReactNode;
}

const AboutPage: React.FC<AboutPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'aboutpage ' + className}>
      {children || <p>AboutPage component</p>}
    </div>
  );
};

export default AboutPage;