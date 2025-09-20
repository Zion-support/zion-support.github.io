import React from 'react';

interface TabsProps {
  children: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const Tabs = ({ children, defaultValue, value, onValueChange }: TabsProps) => {
  return <div className="tabs">{children}</div>;
};

export const TabsList = ({ children, className = "" }: TabsListProps) => {
  return <div className={`tabs-list ${className}`}>{children}</div>;
};

export const TabsTrigger = ({ value, children, className = "" }: TabsTriggerProps) => {
  return <button className={`tabs-trigger ${className}`} data-value={value}>{children}</button>;
};

export const TabsContent = ({ value, children, className = "" }: TabsContentProps) => {
  return <div className={`tabs-content ${className}`} data-value={value}>{children}</div>;
};
