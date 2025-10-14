  export interface NextPageProps {
  export default content;
// Next.js type definitions

declare module "next" {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

declare module "*.png" {
  const content: string;
}

declare module "*.jpg" {
  const content: string;
}

declare module "*.jpeg" {
  const content: string;
}

declare module "*.gif" {
  const content: string;
}

declare module "*.webp" {
  const content: string;
}
