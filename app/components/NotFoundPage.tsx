interface NotFoundPageProps {
  className?: string;
  children?: React.ReactNode;
}
const NotFoundPage: React.FC<NotFoundPageProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};