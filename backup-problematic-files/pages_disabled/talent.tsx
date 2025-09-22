import React from "react";

interface TalentProps {
  className?: string;
}

const Talent: React.FC<TalentProps> = ({ className }) => {
  return (
    <div className={className || ""}>
      <h1>Talent</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Talent;
