import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Page Not Found | Zion Tech Group',
  description: 'The page you are looking for could not be found. Return to the Zion Tech Group homepage to continue exploring our AI solutions.',
};

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-slate-950 px-6 py-16 text-center text-slate-100">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">Error 404</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
      <p className="max-w-xl text-base text-slate-300">
        Sorry, we couldn&apos;t find the page you were looking for. It may have been moved or no longer exists.
      </p>
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Go back home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Contact support
        </Link>
      </div>
    </div>
  );
}