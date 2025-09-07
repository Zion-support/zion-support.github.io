import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  title?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick,
  title,
  description,
  className = '',}
  onClick}
   }) => {



      onClick={onClick}
    >
      {title && <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );
};

export default Card;