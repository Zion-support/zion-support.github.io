import React from "react";

interface PWARegistrationProps {
  className?: string;
  children?: React.ReactNode;
}

const PWARegistration: React.FC<PWARegistrationProps> = ({
  className = "",
  children,
}) => {
  return (
    <div data-testid="waregistration" className={className}>
      {children || <div>PWARegistration Component</div>}
    </div>
  );
};

export default PWARegistration;
