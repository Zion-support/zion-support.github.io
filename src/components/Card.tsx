import React from 'react';

interface CardProps {

  title?: string;
  description?: string;
  className?: string;
  onClick?: () => void;
}

<<<<<<< HEAD
const Card: React.FC<CardProps> = ({ title, description, className = '', children }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${className}`}>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      {children}
    </div>
  );
}
=======
const Card: React.FC<CardProps> = ({ 
  children, 
  title, 
  description, 
  className = '', 
  onClick 
}) => {
  return (
<<<<<<< HEAD
    <div 
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${className}`}
      onClick={onClick}
    >
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
=======
<<<<<<< HEAD
    <div 
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      onClick={onClick}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      )}
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>
      )}

      {children}
    </div>
  );
};

<<<<<<< HEAD
export default Card;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default Card;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </motion.div>
  );
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-54a3
=======
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
export default Card;
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
