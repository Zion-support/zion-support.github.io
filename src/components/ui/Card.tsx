import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
<<<<<<< HEAD
    <div className={`bg-white rounded-lg border shadow-sm ${className}`}>
=======
    <div className={`bg-white rounded-lg border shadow-sm ${className}` }>
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
  return (
<<<<<<< HEAD
    <div className={`p-6 pb-4 ${className}`}>
=======
    <div className={`p-6 pb-4 ${className}` }>
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return (
<<<<<<< HEAD
    <div className={`p-6 pt-0 ${className}`}>
=======
    <div className={`p-6 pt-0 ${className}` }>
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
      {children}
    </div>
  );
};

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => {
  return (
<<<<<<< HEAD
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>
=======
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}` }>
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
      {children}
    </h3>
  );
};

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = '' }) => {
  return (
<<<<<<< HEAD
    <p className={`text-sm text-gray-600 mt-1.5 ${className}`}>
=======
    <p className={`text-sm text-gray-600 mt-1.5 ${className}` }>
>>>>>>> 291faebb6647e51e1c10fe098bd4c47d2942e871
      {children}
    </p>
  );
};