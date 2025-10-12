import React from 'react';

interface NeonButtonProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  onClick?: () => void;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  className = '',
  title,
  description,
  onClick
}) => {
  return (
    <button
      className={`neon-button ${className}`}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NeonButton;
