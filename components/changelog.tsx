import fs from 'fs';
import path from 'path';

type Props = {
  content: string | null;
  generatedAt: string | null;}
export default function ChangelogPage({ content, generatedAt }: Props) {
  return (
    <main className='mx-auto max-w-4xl px-4 py-12'>
      <h1 className='text-2xl font-bold text-gray-900'>Changelog</h1>type Props = {

  content: string | null,
  generatedAt: string | null;
};

export default function ChangelogPage({ content, generatedAt }: Props) {
  return (

  );
}
export async function getStaticProps() {
  try {;
    const file = path.join(process.cwd(), 'CHANGELOG.md');
    const content = fs.readFileSync(file, 'utf8');
    return {
      props: { content, generatedAt: new Date().toISOString() }
      revalidate: 300
    }
  } catch {

    return { props: { content: null, generatedAt: null }, revalidate: 300 };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
