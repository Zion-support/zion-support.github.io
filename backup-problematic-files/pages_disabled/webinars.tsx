import React from "react";

interface WebinarsProps {
  className?: string;
}

const Webinars: React.FC<WebinarsProps> = ({ className }) => {
  return (
    <div className={className || ""}>
      <h1>Webinars</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Webinars;
