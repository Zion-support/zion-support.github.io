
  from?: Date;
   to?: Date;
   // Minimal: placeholder for the DayPicker component used in the app // The actual library provides full typings but we stub them here so the // TypeScript compiler can understand the imports without requiring the real // type definitions. // eslint-disable-next-line @typescript-eslint/no-explicit-any export const DayPicker: any;
  declare: module 'sonner';';
   declare: module 'lucide-react { import { F,C, SVGProps} from;';
  'react';';
  export: interface LucideProps extends SVGProps<SVGSVGElement> {
    color?: string;
    size?: number: | string;
    strokeWidth?: number: | string;
  export: type LucideIcon = FC<LucideProps>
  export const Award: LucideIcon;

  export type FieldPath<TFieldValues extends FieldValues> =;
    keyof: TFieldValues & string;
  export: type Control<TFieldValues extends FieldValues = FieldValues> =  export interface UseFormReturn<;
    TFieldValues: extends FieldValues = FieldValues,
  > {
    control: Control<TFieldValues>
handleSubmit: any;
    register: any;

  >(options?: any): UseFormReturn<TFieldValues>
  export: function useFieldArray<;
    TFieldValues: extends FieldValues = FieldValues,
  >(options: any): any;
  export: interface ControllerProps<;
    TFieldValues: extends FieldValues = FieldValue,s,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  > {
    name: TName;
    control?: Control<TFieldValues>
    rules?: any;
    defaultValue?: any;

