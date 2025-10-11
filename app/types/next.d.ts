// Type definitions for Next.js
export interface NextPageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface NextLayoutProps {
  children: React.ReactNode;
}

export interface NextMetadata {
  title: string;
  description: string;
  keywords?: string[];
}
