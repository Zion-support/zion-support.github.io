import React from 'react';

interface ImprovedImageProps {
  children?: React.ReactNode;
}

const ImprovedImage: React.FC<ImprovedImageProps> = ({ children }) => {
  return (
    <div className="improvedimage">
      {children}
    </div>
  );
};

export default ImprovedImage;