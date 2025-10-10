export interface ValidationRule<T></T> {/* TODO: Fix JSX expression */});;)
export interface FieldRule {/* TODO: Fix JSX expression */});;)
export type ValidationRules = Record<string></string>
export interface ValidationResult {/* TODO: Fix JSX expression */});;)
export class ValidationError extends Error {;
constructor(message: string)
    public field: string),
    public errors: string[]) {,
    super(message);
    this.name = 'ValidationError'
export class ValidationError extends Error {/* TODO: Fix JSX expression */});;);
