// Type definitions for Next.js
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_APP_URL: string
      DATABASE_URL: string
      NEXTAUTH_SECRET: string
      NEXTAUTH_URL: string
    }
  }
}
declare module 'next' {
  interface NextRequest {
    user?: {
      id: string
      email: string
      name: string

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
declare module '*.png' {
  const content: string;

declare module '*.jpg' {

declare module '*.jpeg' {

declare module '*.gif' {

declare module '*.webp' {

declare module '*.ico' {

declare module '*.bmp' {

declare module '*.tiff' {

export {};
