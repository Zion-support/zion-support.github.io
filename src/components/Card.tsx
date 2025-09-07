import React from 'react';
<<<<<<< HEAD

interface CardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  onClick?: () => void;}
}
}


const Card: React.FC<CardProps> = ({
  children, 
  title, 
  description, 
  className = , 
  onClick 
}) => {
  return (
<<<<<<<< HEAD:src/components/Card.tsx
<<<<<<< HEAD
========
:src/components/Card.tsx
>>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/components/Card.tsx
    <motion.div 
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer ${className}`}
    <div 
<<<<<<< HEAD
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}
<<<<<<<< HEAD:src/components/Card.tsx
>>>>>>> pr-12243
      onClick={onClick}
    >
      {title && <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
=======
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer ${className}`}
========
pr-12243
    <motion.div
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer ${className}`}
pr-12325
    <motion.div
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer ${className}`}
:temp-disabled/src/components/Card.tsx
>>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/components/Card.tsx
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
:src/components/Card.tsx
      {title && <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
:temp-disabled/src/components/Card.tsx
      {title && (
        <h3 className="text-xl font-bold text-white mb-3">
          {title}
        </h3>
      )}
      
      {description && (
<<<<<<<< HEAD:src/components/Card.tsx
        <p className="text-gray-300 mb-4">
          {description}
        </p>
      )}
      
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
========
        <p className="text-gray-300 mb-4">{description}</p>
:src/components/Card.tsx
pr-12325
      )}

:temp-disabled/src/components/Card.tsx
>>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:temp-disabled/src/components/Card.tsx
=======
interface CardProps {
children: React.ReactNode;,
  title?: string;
  description?: string;
  className?: string;
  onClick?: () => void;
}
const Card: React.FC<CardProps> = ({ ,
  children,
  title,
  description,
  className = '', '
  onClick
}) => {
  return (
<div
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}`
      onClick={onClick}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>"
      )}
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>"
      )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      {children}
    </div>
  );
};
<<<<<<< HEAD

:src/components/Card.tsx
export default Card;
export default Card;
pr-12243
export default Card;`;
pr-12325

export default Card;

:temp-disabled/src/components/Card.tsx
=======
export default Card;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
