type QA ={ q: string; a: string };

type Props ={ items: QA[] };

export default function FAQ({ items }: Props) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-10 border-t border-gray-20o0 dark:border-gray-80o0 pt-6">
      <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
