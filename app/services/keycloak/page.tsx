import Link from 'next/link';

export const metadata = {
  title: 'Keycloak Identity and Access Management',
  description: 'Keycloak is an open source identity and access management solution for modern applications and services. It adds authentication to applications and secures them with minimum effort, so you dont have to deal with storing users, authenticating users, or managing users.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/keycloak',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Keycloak Identity and Access Management</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Keycloak is an open source identity and access management solution for modern applications and services. It adds authentication to applications and secures them with minimum effort, so you dont have to deal with storing users, authenticating users, or managing users.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://calendly.com/kleber-ziontechgroup/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              Book a Consultation
            </a>
            <Link href="/services" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Browse All Services
            </Link>
            <Link href="/contact" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Single Sign-On (SSO) for web applications and RESTful APIs with support for OpenID Connect, OAuth 2.0, and SAML 2.0</li>
            <li>User Federation: pluggable user storage via LDAP and Active Directory, or custom providers</li>
            <li>Identity Brokering: authenticate with external Identity Providers like Facebook, Google, or GitHub</li>
            <li>Social Login: enable login with Google, GitHub, Facebook, Twitter, and other social networks</li>
            <li>Admin Console: manage realms, roles, users, clients, and configure the server</li>
            <li>Account Management: allow users to manage their own account via a user-facing interface</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Eliminates need to build and maintain custom authentication and authorization systems</li>
            <li>Provides enterprise-grade security standards: OpenID Connect, OAuth 2.0, SAML 2.0</li>
            <li>Scales to handle millions of users with clustered and distributed deployment options</li>
            <li>Integrates with existing LDAP/AD infrastructure for seamless user federation</li>
            <li>Used by Red Hat, IBM, Thomson Reuters, and thousands of organizations worldwide</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (OSS, Apache 2.0)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">Free tier (community support)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Need a tailored rollout? Call{' '}
          <a href="tel:+13024640950" className="text-cyan-400 hover:underline">+1 302 464 0950</a>
          {' '}or email{' '}
          <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a>.
        </p>
      </section>
    </main>
  );
}
