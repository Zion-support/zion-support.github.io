import FreeToolClient from '@/components/tools/FreeToolClient';

export const metadata = {
  title: 'Word & Character Counter',
  description: 'Count words, characters, and sentences.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/word-counter' },
};

export default function Page() {
  return (
    <FreeToolClient
      toolId="word-counter"
      title="Word & Character Counter"
      description="Count words, characters, and sentences."
    />
  );
}
