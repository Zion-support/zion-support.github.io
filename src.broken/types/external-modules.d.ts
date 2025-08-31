declare module "cmdk";
declare module "@radix-ui/react-context-menu";
declare module "vaul";
declare module "@radix-ui/react-hover-card";
declare module "input-otp";
declare module "react-markdown";
declare module "@radix-ui/react-menubar";
declare module "@radix-ui/react-navigation-menu";
declare module "react-resizable-panels";
declare module "@radix-ui/react-toggle-group";
declare module "@radix-ui/react-toggle";
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;

declare module '@tanstack/react-query';
declare module 'react-day-picker' {
  export interface DateRange {
    from?: Date;
    to?: Date;

  // Minimal placeholder for the DayPicker component used in the app
  // The actual library provides full typings but we stub them here so the
  // TypeScript compiler can understand the imports without requiring the real
  // type definitions.
  // eslint-disable-next-line @typescript-eslint/no-explicit- export const DayPicker: ;}
declare module 'sonner';
declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    color?: string;
    size?: number | string;
    strokeWidth?: number | string;

  export type LucideIcon = FC<LucideProps>;
  export const Award: LucideIcon;
  export const Building: LucideIcon;
  export const Crown: LucideIcon;
  export const Download: LucideIcon;
  export const EyeOff: LucideIcon;
  export const Flag: LucideIcon;
  export const GripVertical: LucideIcon;
  export const Home: LucideIcon;
  export const Instagram: LucideIcon;
  export const Key: LucideIcon;
  export const LucideIcon: LucideIcon;
  export const Monitor: LucideIcon;
  export const Network: LucideIcon;
  export const MoreVertical: LucideIcon;
  export const PowerOff: LucideIcon;
  export const Quote: LucideIcon;
  export const RotateCcw: LucideIcon;
  export const Sun: LucideIcon;
  export const Twitter: LucideIcon;
  export const Users: LucideIcon;
  export const VolumeX: LucideIcon;
  export const Webhook: LucideIcon;
  export const XCircle: LucideIcon;
  export const Zap: LucideIcon;
  const icons: { [key: string]: LucideIcon };
  export default icons;

declare module 'child_process';
declare module 'date-fns';
declare module 'jspdf' {
  export const jsPDF: ;export default jsPDF;
}
declare module '@hookform/resolvers/zod';
declare module '@radix-ui/react-accordion';
declare module '@radix-ui/react-alert-dialog';
declare module '@radix-ui/react-aspect-ratio';
declare module '@radix-ui/react-avatar';
declare module '@radix-ui/react-checkbox';
declare module '@radix-ui/react-collapsible';
declare module '@radix-ui/react-dialog';
declare module '@radix-ui/react-dropdown-menu';
declare module '@radix-ui/react-label';
declare module '@radix-ui/react-popover';
declare module '@radix-ui/react-progress';
declare module '@radix-ui/react-radio-group';
declare module '@radix-ui/react-scroll-area';
declare module '@radix-ui/react-select';
declare module '@radix-ui/react-separator';
declare module '@radix-ui/react-slider';
declare module '@radix-ui/react-slot';
declare module '@radix-ui/react-switch';
declare module '@radix-ui/react-tabs';
declare module '@radix-ui/react-toast';
declare module '@radix-ui/react-tooltip';
declare module '@supabase/supabase-js';
declare module 'class-variance-authority' {
  export function cva(...inputs: []):  export type VariantProps<T extends (...args: ) => any> =  }
declare module 'clsx' {
  export type ClassValue = ;export default function clsx(...classes: ClassValue[]): string;
}
declare module 'embla-carousel-react';
declare module 'framer-motion';
declare module 'i18next';
declare module 'i18next-browser-languagedetector';
declare module 'react-helmet-async';
declare module 'react-hook-form' {
  import type { ComponentType, ReactElement, ReactNode } from 'react'
  // Minimal generic typings to satisfy local usage without full type defs
  export type FieldValues = Record<string, any>
  export type FieldPath<TFieldValues extends FieldValues> =
    keyof TFieldValues & string
  export type Control<TFieldValues extends FieldValues = FieldValues> =  export interface UseFormReturn<
    TFieldValues extends FieldValues = FieldValues,
  > {
    control: Control<TFieldValues>
    handleSubmit: any
    register: any
    formState: any;
    [key: string]: any;
  };
  export function useFormContext<;
    TFieldValues extends FieldValues = FieldValues,;
  >(): UseFormReturn<TFieldValues>;
};
declare module 'react-i18next';
declare module 'react-dom/client';
declare module 'react-dom';
declare module '@hello-pangea/dnd';
declare module 'react-redux';
declare module 'notistack';
declare module '@sentry/browser';
declare module 'semver';
declare module 'ws';
declare module 'recharts';
declare module 'next' {
  export type GetStaticPaths = ;export type GetStaticProps<P = , Q = any> = ;}
declare module 'next-themes';
declare module 'tailwind-merge';
}}}}}}}}}}}}}