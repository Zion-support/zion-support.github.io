import React from 'react';

interface SelectProps {
  children: React.ReactNode;
}

interface SelectTriggerProps {
  children: React.ReactNode;
}

interface SelectContentProps {
  children: React.ReactNode;
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

interface SelectValueProps {
  placeholder?: string;
}

interface TabsProps {
  children: React.ReactNode;
  defaultValue?: string;
  className?: string;
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

export function Select({ children }: SelectProps) {
  return <div className="select-wrapper">{children}</div>;
}

export function SelectTrigger({ children }: SelectTriggerProps) {
  return <div className="select-trigger">{children}</div>;
}

export function SelectContent({ children }: SelectContentProps) {
  return <div className="select-content">{children}</div>;
}

export function SelectItem({ value, children }: SelectItemProps) {
  return <div className="select-item" data-value={value}>{children}</div>;
}

export function SelectValue({ placeholder }: SelectValueProps) {
  return <div className="select-value">{placeholder}</div>;
}

export function Tabs({ children, defaultValue, className }: TabsProps) {
  return <div className={`tabs ${className || ''}`}>{children}</div>;
}

export function TabsList({ children, className }: TabsListProps) {
  return <div className={`tabs-list ${className || ''}`}>{children}</div>;
}

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  return <div className={`tabs-trigger ${className || ''}`} data-value={value}>{children}</div>;
}

export function TabsContent({ value, children, className }: TabsContentProps) {
  return <div className={`tabs-content ${className || ''}`} data-value={value}>{children}</div>;
}