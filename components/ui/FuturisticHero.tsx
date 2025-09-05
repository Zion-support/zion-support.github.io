<<<<<<< HEAD
import Link from 'next/link',
import AnimatedBackground from './AnimatedBackground',
export default function FuturisticHero() {
  return (
    <section className=&quot;relative py-20 sm:py-28&quot;>
      <AnimatedBackground />
      <div className=&quot;text-center max-w-4xl mx-auto&quot;>
        <h1 className=&quot;text-4xl sm:text-6xl font-extrabold tracking-tight&quot;>
          Build and Hire with Zion AI Marketplace
        </h1>
        <p className=&quot;mt-4 text-lg text-gray-600 dark:text-gray-300&quot;>
          Discover elite AI talent, launch projects faster, and grow your business.
        </p>
<<<<<<< HEAD
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/partners"><a className="px-5 py-3 rounded-lg bg-indigo-600 text-white shadow hover: bg-indigo-500">Become a Partner</a></Link>
          <Link href="/services"><a className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900">Explore Services</a></Link>
=======
        <div className=&quot;mt-8 flex items-center justify-center gap-3&quot;>
          <Link href=&quot;/partners&quot;><a className=&quot;px-5 py-3 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-500&quot;>Become a Partner</a></a>
          <Link href=&quot;/services&quot;><a className=&quot;px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900&quot;>Explore Services</a></a>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        </div>
        <div className=&quot;mt-10 mx-auto max-w-3xl p-6 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border border-gray-200 dark:border-gray-800 shadow&quot;>
          <p className=&quot;text-sm text-gray-700 dark:text-gray-300&quot;>
            Talent marketplace • Project accelerators • Secure contracts • Integrated AI toolchain
          </p>
        </div>
      </div>
    </section>
  )
=======
import Link from 'next/link',;
import AnimatedBackground from './AnimatedBackground';
export default function FuturisticHero() {;
  return (;
    <section className="relative py-20 sm:py-28">;
      <AnimatedBackground />;
      <div className="text-center max-w-4xl mx-auto">;
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">;
          Build and Hire with Zion AI Marketplace;
        </h1>;
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">;
          Discover elite AI talent, launch projects faster, and grow your business.;
        </p>;
        <div className="mt-8 flex items-center justify-center gap-3">;
          <Link href="/partners"><a className="px-5 py-3 rounded-lg bg-indigo-600 text-white shadow hover: bg-indigo-500">Become a Partner</a></Link>;
          <Link href="/services"><a className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900">Explore Services</a></Link>;
        </div>;
        <div className="mt-10 mx-auto max-w-3xl p-6 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border border-gray-200 dark:border-gray-800 shadow">;
          <p className="text-sm text-gray-700 dark:text-gray-300">;
            Talent marketplace • Project accelerators • Secure contracts • Integrated AI toolchain;
          </p>;
        </div>;
      </div>;
    </section>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}