'use client';
import React, { lazy, Suspense, ComponentType } from 'react';
interface DynamicOptions {
    loading?: () => React.ReactElement;
  }
interface DynamicOptions {}
  loading?: () => React.ReactElement;
  ssr?: boolean;}
}
export function dynamic<T extends ComponentType<unknown>>(</T></<<<T>importFunc</T>: () => Promise<{ default: T }>,
  options: DynamicOptions = {}
): ComponentType<unknown>{
