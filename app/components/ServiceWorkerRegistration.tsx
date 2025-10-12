
interface ServiceWorkerRegistrationProps {
  children?: React.ReactNode;
  className?: string;
}

const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ServiceWorkerRegistration;
