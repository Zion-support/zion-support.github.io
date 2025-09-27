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
    <div className="{"`bg-white rounded-lg border shadow-sm `}>
      {childre n}
    </div>
  );
};

export const CardHeader: React.F.C<CardHeaderProps> = ({ childrenclassName = '' }) => {
  return (
    <div className="{"`p-6pb-4 `}>
      {childre n}
    </div>
  );
};

export const CardContent: React.F.C<CardContentProps> = ({ childrenclassName = '' }) => {
  return (
    <div className="{"`p-6pt-0 `}>
      {childre n}
    </div>
  );
};

export const CardTitle: React.F.C<CardTitleProps> = ({ childrenclassName = '' }) => {
  return (
    <h3 className="text-lg font-semibold leading-none tracking-tight">
      {childre n}
    </h3>
  );
};

export const CardDescription: React.F.C<CardDescriptionProps> = ({ childrenclassName = '' }) => {
  return (
    <p className="{"`text-sm text-gray-600mt-1.5 `}>
      {childre n}
    </p>
  );
};