import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { notFound } from 'next/navigation';
import GeneratedServicePage, { type ServicePageData } from '@/components/GeneratedServicePage';

// Private data is read one page at a time at build time, never imported into
// the webpack graph or sent as a catalog to the browser.
const dataDirectory = path.join(process.cwd(), 'app', '_service-pages');
export const dynamicParams = false;

export async function generateStaticParams() {
  const files = await readdir(dataDirectory);
  return files.filter(name => /^[a-z0-9][a-z0-9-]*\.json$/.test(name))
    .sort().map(name => ({ slug: name.slice(0, -5) }));
}

async function readPage(slug: string): Promise<ServicePageData> {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) notFound();
  try {
    return JSON.parse(await readFile(path.join(dataDirectory, `${slug}.json`), 'utf8'));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') notFound();
    throw error;
  }
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  return (await readPage((await params).slug)).metadata;
}

export default async function ServicePage({ params }: PageProps) {
  return <GeneratedServicePage data={await readPage((await params).slug)} />;
}
