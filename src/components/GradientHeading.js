import React from 'react';

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
const GradientHeading = ({ level = 'h1', children, className = '', ...props }) => {
  const Tag = level;
  
  return (
    <Tag
      className={`bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

<<<<<<< HEAD
export { GradientHeading };
=======
export { GradientHeading };
=======
export function GradientHeading({ children, className = "" }) {
  return (
    <h1 className={`bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${className}`}>
      {children}
    </h1>
  );
}

export default GradientHeading;
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
