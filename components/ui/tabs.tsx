<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

interface TabsProps {
=======
import React from 'react'

export function Tabs({ children, defaultValue, value, onValueChange, className = '' }: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  children: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
<<<<<<< HEAD
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

interface TabsContentProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function Tabs({ children, defaultValue, value, onValueChange, className = '' }: TabsProps) {
=======
}) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const [activeTab, setActiveTab] = React.useState(defaultValue || '');

  const handleTabChange = (newValue: string) => {
    setActiveTab(newValue);
    onValueChange?.(newValue);
  };

  return (
<<<<<<< HEAD
    <div className={`tabs ${className}`}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            activeTab: value || activeTab, 
=======
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            activeTab, 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            onTabChange: handleTabChange 
          } as any);
        }
        return child;
      })}
    </div>
  );
}

<<<<<<< HEAD
export function TabsList({ children, className = '' }: TabsListProps) {
  return (
    <div className={`flex border-b border-gray-200 ${className}`}>
=======
export function TabsList({ children, className = '' }: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex space-x-1 ${className}`}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {children}
    </div>
  );
}

<<<<<<< HEAD
export function TabsTrigger({ children, value, className = '', activeTab, onTabChange }: TabsTriggerProps & { activeTab?: string; onTabChange?: (value: string) => void }) {
  const isActive = activeTab === value;
  
  return (
    <button
      onClick={() => onTabChange?.(value)}
      className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
        isActive
          ? 'border-blue-500 text-blue-600'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      } ${className}`}
=======
export function TabsTrigger({ children, value, className = '' }: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        className
      }`}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    >
      {children}
    </button>
  );
}

<<<<<<< HEAD
export function TabsContent({ children, value, className = '', activeTab }: TabsContentProps & { activeTab?: string }) {
  if (activeTab !== value) return null;
  
  return (
    <div className={`mt-4 ${className}`}>
=======
export function TabsContent({ children, value, className = '' }: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {children}
    </div>
  );
=======
import React from 'react'

export function Tabs({ children, defaultValue, value, onValueChange, className = '' }) {
  const [activeTab, setActiveTab] = React.useState(defaultValue || '')

  const handleTabChange = (newValue) => {
    setActiveTab(newValue)
    onValueChange?.(newValue)
  }

  return (
    <div className={`tabs ${className}`}>
      {React.Children.map(children, child => 
        React.cloneElement(child, { activeTab, onTabChange: handleTabChange })
      )}
    </div>
  )
}

export function TabsList({ children, className = '' }) {
  return (
    <div className={`tabs-list ${className}`}>
      {children}
    </div>
  )
}

export function TabsTrigger({ children, value, className = '', activeTab, onTabChange }) {
  const isActive = activeTab === value
  
  return (
    <button
      className={`tabs-trigger ${isActive ? 'active' : ''} ${className}`}
      onClick={() => onTabChange(value)}
    >
      {children}
    </button>
  )
}

export function TabsContent({ children, value, className = '', activeTab }) {
  if (activeTab !== value) return null
  
  return (
    <div className={`tabs-content ${className}`}>
      {children}
    </div>
  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}