export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== &apos;undefined&apos;) { importFn()} };
import { lazy } from 'react';
import { lazy } from 'react';

>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
import { lazy } from 'react';

>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
export const dynamicImport = (importFn) => {
  return lazy(importFn);
};

export const createLazyComponent = (componentPath) => {
  return dynamicImport(() => import(componentPath));
};

export const preloadComponent = (importFn) => {
  if (typeof window !== 'undefined') {
    importFn();
  }
};
export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
export const dynamicImport = (importFn) => { return React.lazy(importFn)}; export const createLazyComponent = (componentPath) => { return dynamicImport(() => import(componentPath))}; export const preloadComponent = (importFn) => { if (typeof window !== 'undefined') { importFn()} };
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
