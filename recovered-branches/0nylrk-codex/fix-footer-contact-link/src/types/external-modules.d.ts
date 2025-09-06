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

declare module '@tanstack/react-query';
declare module 'react-day-picker' {
  export interface DateRange {
    from?: Date;
    to?: Date
  }

  // Minimal placeholder for the DayPicker component used in the app
  // The actual library provides full typings but we stub them here so the
  // TypeScript compiler can understand the imports without requiring the real
  // type definitions.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const DayPicker: any
}
declare module 'sonner';
declare module 'lucide-react' {

  import { FC, SVGProps } from 'react';
  export type LucideProps = any;

