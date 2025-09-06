 // Minimal placeholder for the DayPicker component used in the app // The actual library provides full typings but we stub them here so the // TypeScript compiler can understand the imports without requiring the real // type definitions. // eslint-disable-next-line @typescript-eslint/no-explicit-any // Minimal generic typings to satisfy local usage without full type defs export type FieldValues = Record<string any> export type FieldPath<TFieldValues extends FieldValues> = keyof TFieldValues & string export type Control<TFieldValues extends FieldValues = FieldValues> = any export interface UseFormReturn< control?: Control<TFieldValues> rules?: unknown defaultValue?: unknown render: (props: unknown) => ReactElement 
}export const Controller: ComponentType<ControllerProps<any any>> export interface FormProviderProps< export const FormProvider: ComponentType<FormProviderProps<any>> export function useFormContext< TFieldValues extends FieldValues = FieldValues> () : UseFormReturn<TFieldValues> 
}declare module 'react-i18next';
declare module 'react-dom/client';
declare module 'react-dom';
declare module 'react-beautiful-dnd';
declare module 'react-redux';
declare module 'semver';
declare module 'ws';
declare module 'recharts';
declare module 'next-themes';
declare module 'tailwind-merge';
