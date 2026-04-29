import Head from 'next/head';
import Link from 'next/link';

const affiliates = [
  {
    name: 'OpenAI GPT-3 Free Tier',
    href: 'https://platform.openai.com',
    desc: 'Get up to $18 credit for free to experiment with GPT-3.',
  },
  {
    name: 'GitHub Student Developer Pack',
    href: 'https://education.github.com/pack',
    desc: '500+ free developer tools for students.',
  },
  {
    name: 'AWS Free Tier',
    href: 'https://aws.amazon.com/free/',
    desc: '12 months of free services including EC2, S3, Lambda, etc.',
  },
  {
    name: 'Google Cloud Free Tier',
    href: 'https://cloud.google.com/free',
    desc: 'Free credits and always‑free usage limits.',
  },
  {
    name: 'Microsoft Azure Free 12‑Month',
    href: 'https://azure.microsoft.com/free',
    desc: 'Free services and $200 credit for 30 days.',
  },
];

export default function AiAffiliate() {
  return (
    <main className="mx-auto max-w-4xl p-8">
      <Head>
        <title>Free SaaS Affiliates | Zion Tech Group</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Free SaaS Affiliate Opportunities</h1>
      <p className="mb-6 text-gray-300">
        Explore free tier offers from leading cloud and AI providers.
      </p>
      <ul className="space-y-4">
        {affiliates.map((a) => (
          <li key={a.name} className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
            <h2 className="text-xl font-semibold mb-1">{a.name}</h2>
            <p className="text-sm text-gray-400 mb-2">{a.desc}</p>
            <a
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500"
            >
              Learn more
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <Link href="/" className="text-sm text-purple-400 hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
