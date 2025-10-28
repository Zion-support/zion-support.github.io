import { aboutMetadata } from './metadata';

export const dynamic = 'force-static';
export const metadata = aboutMetadata;

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}