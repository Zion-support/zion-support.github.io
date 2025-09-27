import React from 'react';

interface CardProps {
  children: React.ReactNod.e;
  className?: string;
}

interface CardHeaderProps {
  children: React.ReactNod.e;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNod.e;
  className?: string;
}

interface CardTitleProps {
  children: React.ReactNod.e;
  className?: string;
}

interface CardDescriptionProps {
  children: React.ReactNod.e;
  className?: string;
}

export const Card: React.F.C<CardProps> = ({ childrenclassName = '' }) => {
  return (
    <div className={`bg-white rounded-lg border shadow-sm ${className}`}>      {children}    </div>
  );
};

export const CardHeader: React.F.C<CardHeaderProps> = ({ childrenclassName = '' }) => {
  return (
    <div className={`p-6 pb-4 ${className}`}>      {children}    </div>
  );
};

export const CardContent: React.F.C<CardContentProps> = ({ childrenclassName = '' }) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>      {children}    </div>
  );
};

export const CardTitle: React.F.C<CardTitleProps> = ({ childrenclassName = '' }) => {
  return (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>      {children}    </h3>
  );
};

export const CardDescription: React.F.C<CardDescriptionProps> = ({ childrenclassName = '' }) => {
  return (
    <p className={`text-sm text-gray-600 mt-1.5 ${className}`}>      {children}    </p>
  );
};