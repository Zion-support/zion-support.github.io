import React from "react";
interface ServicesProps {
  className?: string;
}
const Services: React.FC<ServicesProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <h2>Services</h2>
    </div>
  );
};
export default Services;