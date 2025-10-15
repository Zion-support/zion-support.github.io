import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  [key: string]: unknown;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = "",
  ...props
}) => {
  return (
    <span className={`icon ${className}`} {...props}>
      {name}
    </span>
  );
};

export default Icon;