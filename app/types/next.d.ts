import React from 'react';

// Type definitions for Next.js
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_APP_URL: string;
      DATABASE_URL: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
    }
  }
}

// User interface
export interface User {
  id: string;
  email: string;
  name: string;
}

// SVG component type
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  const content: string;
  const content: string;
  const content: string;
  const content: string;
  const content: string;
  const content: string;
  const content: string;
  const content: string;