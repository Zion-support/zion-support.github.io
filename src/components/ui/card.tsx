<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
import React from 'react';
<<<<<<< HEAD
=======
import * as React from "react";
import { cn } from "@/lib/utils";
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
import { cn } from '../../lib/utils';
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "rounded-lg border bg-card text-card-foreground shadow-sm",
=======
      'rounded-lg border bg-card text-card-foreground shadow-sm',
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
      className
    )}
    {...props}
  />
));
<<<<<<< HEAD
Card.displayName = "Card";

<<<<<<< HEAD
<<<<<<< HEAD
const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
=======
export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`rounded-lg border border-zion-blue-light bg-zion-blue-dark p-6 ${className}`}>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
      {children}
    </div>
  );
};
<<<<<<< HEAD
<<<<<<< HEAD

const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
=======

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======

export const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-0 ${className}`}>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
      {children}
    </div>
  );
};
<<<<<<< HEAD
<<<<<<< HEAD

const CardTitle: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
=======

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => {
  return (
    <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======

export const CardTitle: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <h3 className={`text-lg font-semibold leading-none tracking-tight text-white ${className}`}>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
      {children}
    </h3>
  );
};
<<<<<<< HEAD
<<<<<<< HEAD

const CardDescription: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <p className={`text-sm text-muted-foreground ${className}`}>
=======

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = '' }) => {
  return (
    <p className={`text-sm text-gray-600 ${className}`}>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
=======

export const CardDescription: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <p className={`text-sm text-zion-slate-light ${className}`}>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
      {children}
    </p>
  );
};
<<<<<<< HEAD
<<<<<<< HEAD

const CardContent: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
=======

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return (
    <div className={`px-6 py-4 ${className}`}>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
      {children}
    </div>
  );
};
<<<<<<< HEAD

const CardFooter: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex items-center p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
