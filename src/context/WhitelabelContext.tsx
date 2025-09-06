import React from 'react';

interface WhitelabelProviderProps {
  children: React.ReactNode;

export function WhitelabelProvider({ children }: WhitelabelProviderProps) {
  return <>{children}</>;
