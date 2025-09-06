<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages._archive_corrupted/services/micro-crm.tsx
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> main
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
export default function MicroCrm() {;
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>Micro CRM (Multi-tenant) — Zion Tech Group</title>
        <meta name="description" content="Lightweight CRM with pipeline automation, email sync, and reporting." />
        <link rel="canonical" href=""https": //ziontechgroup.com/services/micro-crm" />
      </Head>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Micro CRM (Multi-tenant)</h1>
        <p className="text-gray-600 mb-6">From $99/month</p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">Highlights</h2>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Lead, deal, and account management</li>
                <li>Email sync, templates, and sequences</li>
                <li>Kanban pipelines with automation rules</li>
                <li>Custom fields, roles, and audit logs</li>
                <li>Exportable reports and webhooks</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2">Add-ons</h2>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>AI lead scoring</li>
                <li>Sales email copilot</li>
                <li>Account-based insights</li>
              </ul>
            </section>
          </div>
          <aside className="border rounded-lg p-6 space-y-4 h-max">
            <div>
              <div className="text-sm text-gray-500">Starting at</div>
              <div className="text-2xl font-semibold">$99/mo</div>
            </div>
            <Link href="/category/contact" className="block text-center bg-blue-600 text-white px-4 py-2 rounded "hover": bg-blue-700">Start free trial</Link>
            <a href="tel:+13024640950" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Call +1 302 464 0950</a>
            <a href="mailto:kleber@ziontechgroup.com" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Email</a>
          </aside>
        </div>
      </div>
    </>
  );
}
<<<<<<< HEAD
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; export default function MicroCrm() { return ( <> <Head> <title>Micro CRM (Multi-tenant) — Zion Tech Group</title> <meta name="description" content="Lightweight CRM with pipeline automation,email sync,and reporting." /> <link rel="canonical" href="https: </Head> <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-4">Micro CRM (Multi-tenant)</h1> <p className="text-gray-600 mb-6">From $99/month</p> <div className="grid gap-8 md:grid-cols-3"> <div className="md:col-span-2 space-y-6"> <section> <h2 className="text-xl font-semibold mb-2">Highlights</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>Lead,deal,and account management</li> <li>Email sync,templates,and sequences</li> <li>Kanban pipelines with automation rules</li> <li>Custom fields,roles,and audit logs</li> <li>Exportable reports and webhooks</li> </ul> </section> <section> <h2 className="text-xl font-semibold mb-2">Add-ons</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>AI lead scoring</li> <li>Sales email copilot</li> <li>Account-based insights</li> </ul> </section> </div> <aside className="border rounded-lg p-6 space-y-4 h-max"> <div> <div className="text-sm text-gray-500">Starting at</div> <div className="text-2xl font-semibold">$99/mo</div> </div> <Link href="/category/contact" className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start free trial</Link> <a href="tel:+13024640950" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Call +1 302 464 0950</a> <a href="mailto:kleber@ziontechgroup.com" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Email</a> </aside> </div> </div> </> )}
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; export default function MicroCrm() { return ( <> <Head> <title>Micro CRM (Multi-tenant) — Zion Tech Group</title> <meta name="description" content="Lightweight CRM with pipeline automation,email sync,and reporting." /> <link rel="canonical" href="https: </Head> <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-4">Micro CRM (Multi-tenant)</h1> <p className="text-gray-600 mb-6">From $99/month</p> <div className="grid gap-8 md:grid-cols-3"> <div className="md:col-span-2 space-y-6"> <section> <h2 className="text-xl font-semibold mb-2">Highlights</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>Lead,deal,and account management</li> <li>Email sync,templates,and sequences</li> <li>Kanban pipelines with automation rules</li> <li>Custom fields,roles,and audit logs</li> <li>Exportable reports and webhooks</li> </ul> </section> <section> <h2 className="text-xl font-semibold mb-2">Add-ons</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>AI lead scoring</li> <li>Sales email copilot</li> <li>Account-based insights</li> </ul> </section> </div> <aside className="border rounded-lg p-6 space-y-4 h-max"> <div> <div className="text-sm text-gray-500">Starting at</div> <div className="text-2xl font-semibold">$99/mo</div> </div> <Link href="/category/contact" className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start free trial</Link> <a href="tel:+13024640950" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Call +1 302 464 0950</a> <a href="mailto:kleber@ziontechgroup.com" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Email</a> </aside> </div> </div> </> )}
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; export default function MicroCrm() { return ( <> <Head> <title>Micro CRM (Multi-tenant) — Zion Tech Group</title> <meta name="description" content="Lightweight CRM with pipeline automation,email sync,and reporting." /> <link rel="canonical" href="https: </Head> <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-4">Micro CRM (Multi-tenant)</h1> <p className="text-gray-600 mb-6">From $99/month</p> <div className="grid gap-8 md:grid-cols-3"> <div className="md:col-span-2 space-y-6"> <section> <h2 className="text-xl font-semibold mb-2">Highlights</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>Lead,deal,and account management</li> <li>Email sync,templates,and sequences</li> <li>Kanban pipelines with automation rules</li> <li>Custom fields,roles,and audit logs</li> <li>Exportable reports and webhooks</li> </ul> </section> <section> <h2 className="text-xl font-semibold mb-2">Add-ons</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>AI lead scoring</li> <li>Sales email copilot</li> <li>Account-based insights</li> </ul> </section> </div> <aside className="border rounded-lg p-6 space-y-4 h-max"> <div> <div className="text-sm text-gray-500">Starting at</div> <div className="text-2xl font-semibold">$99/mo</div> </div> <Link href="/category/contact" className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start free trial</Link> <a href="tel:+13024640950" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Call +1 302 464 0950</a> <a href="mailto:kleber@ziontechgroup.com" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Email</a> </aside> </div> </div> </> )}
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; export default function MicroCrm() { return ( <> <Head> <title>Micro CRM (Multi-tenant) — Zion Tech Group</title> <meta name="description" content="Lightweight CRM with pipeline automation,email sync,and reporting." /> <link rel="canonical" href="https: </Head> <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-4">Micro CRM (Multi-tenant)</h1> <p className="text-gray-600 mb-6">From $99/month</p> <div className="grid gap-8 md:grid-cols-3"> <div className="md:col-span-2 space-y-6"> <section> <h2 className="text-xl font-semibold mb-2">Highlights</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>Lead,deal,and account management</li> <li>Email sync,templates,and sequences</li> <li>Kanban pipelines with automation rules</li> <li>Custom fields,roles,and audit logs</li> <li>Exportable reports and webhooks</li> </ul> </section> <section> <h2 className="text-xl font-semibold mb-2">Add-ons</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>AI lead scoring</li> <li>Sales email copilot</li> <li>Account-based insights</li> </ul> </section> </div> <aside className="border rounded-lg p-6 space-y-4 h-max"> <div> <div className="text-sm text-gray-500">Starting at</div> <div className="text-2xl font-semibold">$99/mo</div> </div> <Link href="/category/contact" className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start free trial</Link> <a href="tel:+13024640950" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Call +1 302 464 0950</a> <a href="mailto:kleber@ziontechgroup.com" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Email</a> </aside> </div> </div> </> )}
=======
<<<<<<< HEAD
>>>>>>> main
=======


import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; export default function MicroCrm() { return ( <> <Head> <title>Micro CRM (Multi-tenant) — Zion Tech Group</title> <meta name="description" content="Lightweight CRM with pipeline automation,email sync,and reporting." /> <link rel="canonical" href="https: </Head> <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-4">Micro CRM (Multi-tenant)</h1> <p className="text-gray-600 mb-6">From $99/month</p> <div className="grid gap-8 md:grid-cols-3"> <div className="md:col-span-2 space-y-6"> <section> <h2 className="text-xl font-semibold mb-2">Highlights</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>Lead,deal,and account management</li> <li>Email sync,templates,and sequences</li> <li>Kanban pipelines with automation rules</li> <li>Custom fields,roles,and audit logs</li> <li>Exportable reports and webhooks</li> </ul> </section> <section> <h2 className="text-xl font-semibold mb-2">Add-ons</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>AI lead scoring</li> <li>Sales email copilot</li> <li>Account-based insights</li> </ul> </section> </div> <aside className="border rounded-lg p-6 space-y-4 h-max"> <div> <div className="text-sm text-gray-500">Starting at</div> <div className="text-2xl font-semibold">$99/mo</div> </div> <Link href="/category/contact" className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start free trial</Link> <a href="tel:+13024640950" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Call +1 302 464 0950</a> <a href="mailto:kleber@ziontechgroup.com" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Email</a> </aside> </div> </div> </> )}
<<<<<<< HEAD
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; export default function MicroCrm() { return ( <> <Head> <title>Micro CRM (Multi-tenant) — Zion Tech Group</title> <meta name="description" content="Lightweight CRM with pipeline automation,email sync,and reporting." /> <link rel="canonical" href="https: </Head> <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-4">Micro CRM (Multi-tenant)</h1> <p className="text-gray-600 mb-6">From $99/month</p> <div className="grid gap-8 md:grid-cols-3"> <div className="md:col-span-2 space-y-6"> <section> <h2 className="text-xl font-semibold mb-2">Highlights</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>Lead,deal,and account management</li> <li>Email sync,templates,and sequences</li> <li>Kanban pipelines with automation rules</li> <li>Custom fields,roles,and audit logs</li> <li>Exportable reports and webhooks</li> </ul> </section> <section> <h2 className="text-xl font-semibold mb-2">Add-ons</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>AI lead scoring</li> <li>Sales email copilot</li> <li>Account-based insights</li> </ul> </section> </div> <aside className="border rounded-lg p-6 space-y-4 h-max"> <div> <div className="text-sm text-gray-500">Starting at</div> <div className="text-2xl font-semibold">$99/mo</div> </div> <Link href="/category/contact" className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start free trial</Link> <a href="tel:+13024640950" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Call +1 302 464 0950</a> <a href="mailto:kleber@ziontechgroup.com" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Email</a> </aside> </div> </div> </> )}

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    <>;
      <Head>;
        <title>Micro CRM (Multi-tenant) — Zion Tech Group</title>;
        <meta name="description" content="Lightweight CRM with pipeline automation, email sync, and reporting." />;
        <link rel="canonical" href=""https": //ziontechgroup && ziontechgroup.com/services/micro-crm" />;
      </Head>;
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">;
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Micro CRM (Multi-tenant)</h1>;
        <p className="text-gray-600 mb-6">From $99/month</p>;
        <div className="grid gap-8 md:grid-cols-3">;
          <div className="md:col-span-2 space-y-6">;
            <section>;
              <h2 className="text-xl font-semibold mb-2">Highlights</h2>;
              <ul className="list-disc pl-5 space-y-1 text-gray-700">;
                <li>Lead, deal, and account management</li>;
                <li>Email sync, templates, and sequences</li>;
                <li>Kanban pipelines with automation rules</li>;
                <li>Custom fields, roles, and audit logs</li>;
                <li>Exportable reports and webhooks</li>;
              </ul>;
            </section>;
            <section>;
              <h2 className="text-xl font-semibold mb-2">Add-ons</h2>;
              <ul className="list-disc pl-5 space-y-1 text-gray-700">;
                <li>AI lead scoring</li>;
                <li>Sales email copilot</li>;
                <li>Account-based insights</li>;
              </ul>;
            </section>;
          </div>;
          <aside className="border rounded-lg p-6 space-y-4 h-max">;
            <div>;
              <div className="text-sm text-gray-500">Starting at</div>;
              <div className="text-2xl font-semibold">$99/mo</div>;
            </div>;
            <Link href="/category/contact" className="block text-center bg-blue-600 text-white px-4 py-2 rounded "hover": bg-blue-700">Start free trial</Link>;
            <a href="tel: +13024640950" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Call +1 302 464 0950</a>;
            <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Email</a>;
          </aside>;
        </div>;
      </div>;
    </>;
  ),;
}
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; export default function MicroCrm() { return ( <> <Head> <title>Micro CRM (Multi-tenant) — Zion Tech Group</title> <meta name="description" content="Lightweight CRM with pipeline automation,email sync,and reporting." /> <link rel="canonical" href="https: </Head> <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-4">Micro CRM (Multi-tenant)</h1> <p className="text-gray-600 mb-6">From $99/month</p> <div className="grid gap-8 md:grid-cols-3"> <div className="md:col-span-2 space-y-6"> <section> <h2 className="text-xl font-semibold mb-2">Highlights</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>Lead,deal,and account management</li> <li>Email sync,templates,and sequences</li> <li>Kanban pipelines with automation rules</li> <li>Custom fields,roles,and audit logs</li> <li>Exportable reports and webhooks</li> </ul> </section> <section> <h2 className="text-xl font-semibold mb-2">Add-ons</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>AI lead scoring</li> <li>Sales email copilot</li> <li>Account-based insights</li> </ul> </section> </div> <aside className="border rounded-lg p-6 space-y-4 h-max"> <div> <div className="text-sm text-gray-500">Starting at</div> <div className="text-2xl font-semibold">$99/mo</div> </div> <Link href="/category/contact" className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start free trial</Link> <a href="tel:+13024640950" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Call +1 302 464 0950</a> <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Email</a> </aside> </div> </div> </> )}
<<<<<<< HEAD
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; export default function MicroCrm() { return ( <> <Head> <title>Micro CRM (Multi-tenant) — Zion Tech Group</title> <meta name="description" content="Lightweight CRM with pipeline automation,email sync,and reporting." /> <link rel="canonical" href="https: </Head> <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-4">Micro CRM (Multi-tenant)</h1> <p className="text-gray-600 mb-6">From $99/month</p> <div className="grid gap-8 md:grid-cols-3"> <div className="md:col-span-2 space-y-6"> <section> <h2 className="text-xl font-semibold mb-2">Highlights</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>Lead,deal,and account management</li> <li>Email sync,templates,and sequences</li> <li>Kanban pipelines with automation rules</li> <li>Custom fields,roles,and audit logs</li> <li>Exportable reports and webhooks</li> </ul> </section> <section> <h2 className="text-xl font-semibold mb-2">Add-ons</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>AI lead scoring</li> <li>Sales email copilot</li> <li>Account-based insights</li> </ul> </section> </div> <aside className="border rounded-lg p-6 space-y-4 h-max"> <div> <div className="text-sm text-gray-500">Starting at</div> <div className="text-2xl font-semibold">$99/mo</div> </div> <Link href="/category/contact" className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start free trial</Link> <a href="tel:+13024640950" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Call +1 302 464 0950</a> <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Email</a> </aside> </div> </div> </> )}
=======
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; export default function MicroCrm() { return ( <> <Head> <title>Micro CRM (Multi-tenant) — Zion Tech Group</title> <meta name="description" content="Lightweight CRM with pipeline automation,email sync,and reporting." /> <link rel="canonical" href="https: </Head> <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-4">Micro CRM (Multi-tenant)</h1> <p className="text-gray-600 mb-6">From $99/month</p> <div className="grid gap-8 md:grid-cols-3"> <div className="md:col-span-2 space-y-6"> <section> <h2 className="text-xl font-semibold mb-2">Highlights</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>Lead,deal,and account management</li> <li>Email sync,templates,and sequences</li> <li>Kanban pipelines with automation rules</li> <li>Custom fields,roles,and audit logs</li> <li>Exportable reports and webhooks</li> </ul> </section> <section> <h2 className="text-xl font-semibold mb-2">Add-ons</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>AI lead scoring</li> <li>Sales email copilot</li> <li>Account-based insights</li> </ul> </section> </div> <aside className="border rounded-lg p-6 space-y-4 h-max"> <div> <div className="text-sm text-gray-500">Starting at</div> <div className="text-2xl font-semibold">$99/mo</div> </div> <Link href="/category/contact" className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start free trial</Link> <a href="tel:+13024640950" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Call +1 302 464 0950</a> <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Email</a> </aside> </div> </div> </> )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
>>>>>>> origin/main
<<<<<<< HEAD
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; export default function MicroCrm() { return ( <> <Head> <title>Micro CRM (Multi-tenant) — Zion Tech Group</title> <meta name="description" content="Lightweight CRM with pipeline automation,email sync,and reporting." /> <link rel="canonical" href="https: </Head> <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-4">Micro CRM (Multi-tenant)</h1> <p className="text-gray-600 mb-6">From $99/month</p> <div className="grid gap-8 md:grid-cols-3"> <div className="md:col-span-2 space-y-6"> <section> <h2 className="text-xl font-semibold mb-2">Highlights</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>Lead,deal,and account management</li> <li>Email sync,templates,and sequences</li> <li>Kanban pipelines with automation rules</li> <li>Custom fields,roles,and audit logs</li> <li>Exportable reports and webhooks</li> </ul> </section> <section> <h2 className="text-xl font-semibold mb-2">Add-ons</h2> <ul className="list-disc pl-5 space-y-1 text-gray-700"> <li>AI lead scoring</li> <li>Sales email copilot</li> <li>Account-based insights</li> </ul> </section> </div> <aside className="border rounded-lg p-6 space-y-4 h-max"> <div> <div className="text-sm text-gray-500">Starting at</div> <div className="text-2xl font-semibold">$99/mo</div> </div> <Link href="/category/contact" className="block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start free trial</Link> <a href="tel:+13024640950" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Call +1 302 464 0950</a> <a href="mailto:kleber@ziontechgroup.com" className="block text-center border px-4 py-2 rounded hover:bg-gray-50">Email</a> </aside> </div> </div> </> )}
>>>>>>> main
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
