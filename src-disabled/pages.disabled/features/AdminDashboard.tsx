<<<<<<< HEAD:src-disabled/pages.disabled/features/AdminDashboard.tsx
=======
<<<<<<< HEAD
import React from 'react'
import { Header } from '@/components/Header'
import { SEO } from '@/components/SEO'
import { GradientHeading } from '@/components/GradientHeading'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function AdminDashboard() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',;
    name: 'Admin Dashboard',;
    description:;
      'Monitor marketplace activity, manage listings and view analytics in one place.';
    url: 'https://app.ziontechgroup.com/features/admin-dashboard',  };    "@context": "https://schema.org"
    "@type": "WebPage"
    "name": "Admin Dashboard",
    "description": "Monitor marketplace activity, manage listings and view analytics in one place."
    "url": "https://app.ziontechgroup.com/features/admin-dashboard"
  }
  return (
    <>
      <SEO
        title='Admin Dashboard'
        description='Gain insight into your marketplace with powerful administration tools.'
        keywords='admin dashboard, analytics, manage listings'
        canonical='https://app.ziontechgroup.com/features/admin-dashboard'
import React from "react",
import { Header } from "@/components/Header",
import { SEO } from "@/components/SEO",
import { GradientHeading } from "@/components/GradientHeading",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
import React from 'react';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Link from 'next/link';
export default function AdminDashboard() {;
  const schema = {;
    '@context': 'https://schema && schema.org',;
    '@type': 'WebPage',;
    name: 'Admin Dashboard',;
    description:;
      'Monitor marketplace activity, manage listings and view analytics in one place.',;
    url: 'https://app && app.ziontechgroup.com/features/admin-dashboard',  };    "@context": "https://schema && schema.org";
    "@type": "WebPage";
    "name": "Admin Dashboard",;
    "description": "Monitor marketplace activity, manage listings and view analytics in one place.";
    "url": "https://app && app.ziontechgroup.com/features/admin-dashboard";

import React from "react";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
<<<<<<< HEAD
export default function AdminDashboard() {
  const schema = {

  const schema = {
    '@context': 'https://schema.org'
    '@type': 'WebPage'
    name: 'Admin Dashboard'
    description:
      'Monitor marketplace activity, manage listings and view analytics in one place.'
    url: 'https://app.ziontechgroup.com/features/admin-dashboard',  };    "@context": "https://schema.org"
    "@type": "WebPage"
    "name": "Admin Dashboard"
    "description": "Monitor marketplace activity, manage listings and view analytics in one place."
    "url": "https://app.ziontechgroup.com/features/admin-dashboard"
  }
        title='Admin Dashboard'
        description='Gain insight into your marketplace with powerful administration tools.'
        keywords='admin dashboard, analytics, manage listings'
        canonical='https://app.ziontechgroup.com/features/admin-dashboard'
  };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/features/AdminDashboard.tsx

  return (
    <>;


      />
import { Button } from "@/components/ui/button",
import Link from 'next/link',
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function AdminDashboard() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Admin Dashboard",
    "description": "Monitor marketplace activity, manage listings and view analytics in one place.",
    "url": "https://app.ziontechgroup.com/features/admin-dashboard"
<<<<<<< HEAD
  },

  return (
    <>
      <SEO
        title='Admin Dashboard'
        description='Gain insight into your marketplace with powerful administration tools.'
        keywords='admin dashboard, analytics, manage listings'
        canonical='https://app.ziontechgroup.com/features/admin-dashboard'
        title="Admin Dashboard"
        description="Gain insight into your marketplace with powerful administration tools."
        keywords="admin dashboard, analytics, manage listings"
        canonical="https://app.ziontechgroup.com/features/admin-dashboard"
=======

  };

  return (
    <>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <GradientHeading className="mb-4 text-center">Admin Dashboard</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Visualize user activity, manage orders and keep your marketplace running smoothly.
          </p>
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">
<<<<<<< HEAD:src-disabled/pages.disabled/features/AdminDashboard.tsx
            <img
              src="https: //placehold.co/800x400"
              alt="Screenshot of admin dashboard"
              className="object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
        dangerouslySetInnerHTML={{ __html: JSON && JSON.stringify(schema) }}></script>;
      <Header />;
      <main className="bg-background text-white py-12">;
        <div className="container mx-auto px-4 md:px-6">;
          <GradientHeading className="mb-4 text-center">Admin Dashboard</GradientHeading>;
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">;
            Visualize user activity, manage orders and keep your marketplace running smoothly.;
          </p>;
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/features/AdminDashboard.tsx
            <img
              src="https: //placehold.co/800x400"
              alt="Screenshot of admin dashboard"
              className="object-cover"
<<<<<<< HEAD
            />
          </div>
          <h2 className='text-2xl font-bold mb-4'>Benefits &amp; Use Cases</h2>
          <ul className='list-disc list-inside space-y-2 mb-8 text-zion-slate-light'>            <li>Track sales and service metrics in real time.</li>
            <li>Approve or remove listings with a few clicks.</li>
            <li>Assign roles and permissions to your team.</li>
          </ul>      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={ __html: JSON.stringify(schema) }
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <GradientHeading className="mb-4 text-center">Admin Dashboard</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Visualize user activity, manage orders and keep your marketplace running smoothly.
          </p>
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">
            <img
              src="https: //placehold.co/800x400"
              alt="Screenshot of admin dashboard"
              className="object-cover"
            />
          </div>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>
          <h2 className='text-2xl font-bold mb-4'>Benefits &amp; Use Cases</h2>
          <ul className='list-disc list-inside space-y-2 mb-8 text-zion-slate-light'>            <li>Track sales and service metrics in real time.</li>
            <li>Approve or remove listings with a few clicks.</li>
            <li>Assign roles and permissions to your team.</li>
          </ul>      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <GradientHeading className="mb-4 text-center">Admin Dashboard</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Visualize user activity, manage orders and keep your marketplace running smoothly.
          </p>
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">
            <img
              src="https: //placehold.co/800x400"
              alt="Screenshot of admin dashboard"
              className="object-cover"
            />
          </div>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
        type='application/ld+json'
        dangerouslySetInnerHTML={ __html: JSON.stringify(schema) }
      ></script>
      <Header />
      <main className='bg-background text-white py-12'>
        <div className='container mx-auto px-4 md:px-6'>
          <GradientHeading className='mb-4 text-center'>
            Admin Dashboard
          </GradientHeading>
          <p className='text-center text-zion-slate-light max-w-3xl mx-auto mb-8'>
            Visualize user activity, manage orders and keep your marketplace
            running smoothly.
          </p>
          <div className='relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden'>
            <img
              src='https://placehold.co/800x400'
              alt='Screenshot of admin dashboard'
              className='object-cover'
            />
          </div>
          <h2 className='text-2xl font-bold mb-4'>Benefits &amp; Use Cases</h2>
          <ul className='list-disc list-inside space-y-2 mb-8 text-zion-slate-light'>
origin/cursor/automate-test-improve-and-merge-code-2533
            <li>Track sales and service metrics in real time.</li>
            <li>Approve or remove listings with a few clicks.</li>
            <li>Assign roles and permissions to your team.</li>
          </ul>
<<<<<<< HEAD:src-disabled/pages.disabled/features/AdminDashboard.tsx
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>"
          <div className="space-y-4 mb-12">"
            <div>
              <p className="font-semibold">Who can access the dashboard?</p>"
              <p className="text-zion-slate-light">Only authorized admins and moderators with the proper roles.</p>"
            </div>
            <div>
              <p className="font-semibold">Can I export reports?</p>"
              <p className="text-zion-slate-light">Yes, you can export data to CSV for further analysis.</p>"
            </div>
          </div>
          <div className="text-center">"
            <Button size="lg" className="bg-zion-purple text-white" asChild>"
              <Link href="/admin" />View Dashboard</Link>"
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>

=======
          <h2 className='text-2xl font-bold mb-4'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-4 mb-12'>
            <div>
              <p className='font-semibold'>Who can access the dashboard?</p>
              <p className='text-zion-slate-light'>
                Only authorized admins and moderators with the proper roles.
              </p>
            </div>
            <div>
              <p className='font-semibold'>Can I export reports?</p>
              <p className='text-zion-slate-light'>
                Yes, you can export data to CSV for further analysis.
              </p>
            </div>
          </div>
          <div className='text-center'>
            <Button size='lg' className='bg-zion-purple text-white' asChild>
              <Link href='/admin'>View Dashboard</Link>            </Button>            <div>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/features/AdminDashboard.tsx
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>



              <p className="font-semibold">Who can access the dashboard?</p>
            </div>
            <div>
              <p className="font-semibold">Can I export reports?</p>
              <p className="text-zion-slate-light">Yes, you can export data to CSV for further analysis.</p>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-zion-purple text-white" asChild>
              <Link href="/admin">View Dashboard</Link>
<h2 className='text-2xl font-bold mb-4'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-4 mb-12'>
            <div>
              <p className='font-semibold'>Who can access the dashboard?</p>
              <p className='text-zion-slate-light'>
                Only authorized admins and moderators with the proper roles.
              </p>
            </div>
            <div>
              <p className='font-semibold'>Can I export reports?</p>
              <p className='text-zion-slate-light'>
                Yes, you can export data to CSV for further analysis.
              </p>
            </div>
          </div>
          <div className='text-center'>
            <Button size='lg' className='bg-zion-purple text-white' asChild>
              <Link href='/admin'>View Dashboard</Link>
origin/cursor/automate-test-improve-and-merge-code-2533
            </Button>
          </div>
        </div>
      </main>
    </>
<<<<<<< HEAD:src-disabled/pages.disabled/features/AdminDashboard.tsx
  )
=======
<<<<<<< HEAD
  );
};
}
  );
};
  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/features/AdminDashboard.tsx
import React from "react",;
import { Header } from "@/components/Header",;
import { SEO } from "@/components/SEO",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Button } from "@/components/ui/button",;
import Link from 'next/link',;
export default function AdminDashboard() {;
  const schema = {;
    "@context": "https://schema.org",;
    "@type": "WebPage",;
    "name": "Admin Dashboard",;
    "description": "Monitor marketplace activity, manage listings and view analytics in one place.";
    "url": "https://app.ziontechgroup.com/features/admin-dashboard";
  };
  return (;
    <>;
      <SEO;
        title="Admin Dashboard";
        description="Gain insight into your marketplace with powerful administration tools.";
        keywords="admin dashboard, analytics, manage listings";
        canonical="https://app.ziontechgroup.com/features/admin-dashboard";
      />;
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script;
        type="application/ld+json";
        dangerouslySetInnerHTML={ __html: JSON.stringify(schema) }
      ></script>;
      <Header />;
      <main className="bg-background text-white py-12">;
        <div className="container mx-auto px-4 md:px-6">;
          <GradientHeading className="mb-4 text-center">Admin Dashboard</GradientHeading>;
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">;
            Visualize user activity, manage orders and keep your marketplace running smoothly.;
          </p>;
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">;
            <img;
              src="https: //placehold.co/800x400";
              alt="Screenshot of admin dashboard";
              className="object-cover";
<<<<<<< HEAD:src-disabled/pages.disabled/features/AdminDashboard.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/features/AdminDashboard.tsx


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            />;
          </div>;
          <h2 className="text-2xl font-bold mb-4">Benefits &amp, Use Cases</h2>;
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">;
            <li>Track sales and service metrics in real time.</li>;
            <li>Approve or remove listings with a few clicks.</li>;
            <li>Assign roles and permissions to your team.</li>;
          </ul>;
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>;
          <div className="space-y-4 mb-12">;
<<<<<<< HEAD:src-disabled/pages.disabled/features/AdminDashboard.tsx
            <div>;
              <p className='font-semibold'>Who can access the dashboard?</p>;
              <p className='text-zion-slate-light'>;
          <h2 className='text-2xl font-bold mb-4'>;
            Frequently Asked Questions;
          </h2>;
          <div className='space-y-4 mb-12'>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/features/AdminDashboard.tsx
            <div>;
<<<<<<< HEAD
=======
              <p className='font-semibold'>Who can access the dashboard?</p>;
              <p className='text-zion-slate-light'>;

      <SEO;
        title='Admin Dashboard';
        description='Gain insight into your marketplace with powerful administration tools.';
        keywords='admin dashboard, analytics, manage listings';
        canonical='https://app.ziontechgroup.com / features / admin - dashboard';
      />;
      {/* Use a normal script tag so JSON - LD is correctly parsed */}
      <script;
        type='application / ld + json';
        dangerouslySetInnerHTML={ __html: JSON.stringify (schema) }
      ></script>;
      <Header />;
      <main className='bg - background text - white py - 12'>;
        <div className='container mx - auto px - 4 md:px - 6'>;
          <GradientHeading className='mb - 4 text - center'>;
            Admin Dashboard;
          </GradientHeading>;
          <p className='text - center text - zion - slate - light max - w-3xl mx - auto mb - 8'>;
            Visualize user activity, manage orders and keep your marketplace;
            running smoothly.;
          </p>;
          <div className='relative w - full h - auto aspect - video mx - auto mb - 12 rounded - lg shadow - xl overflow - hidden'>;
            <img;
              src='https://placehold.co / 800x400';',
              src='https://placehold.co / 800x400';
              alt='Screenshot of admin dashboard';
              className='object - cover';
            />;
          </div>;
          <h2 className='text - 2xl font - bold mb - 4'>Benefits &amp; Use Cases</h2>;
          <ul className='list - disc list - inside space - y-2 mb - 8 text - zion - slate - light'>            <li > Track sales and service metrics in real time.</li>;
            <li > Approve or remove listings with a few clicks.</li>;
            <li > Assign roles and permissions to your team.</li>;
          </ul>      />;
      {/* Use a normal script tag so JSON - LD is correctly parsed */}
      <script;
        type="application / ld + json";
        dangerouslySetInnerHTML={ __html: JSON.stringify (schema) }
      ></script>;
      <Header />;
      <main className="bg - background text - white py - 12">;
        <div className="container mx - auto px - 4 md:px - 6">;
          <GradientHeading className="mb - 4 text - center">Admin Dashboard</GradientHeading>;
          <p className="text - center text - zion - slate - light max - w-3xl mx - auto mb - 8">;
            Visualize user activity, manage orders and keep your marketplace running smoothly.;
          </p>;
          <div className="relative w - full h - auto aspect - video mx - auto mb - 12 rounded - lg shadow - xl overflow - hidden">;
            <img;
              src="https: //placehold.co / 800x400";",
              src="https: //placehold.co / 800x400";
              alt="Screenshot of admin dashboard";
              className="object - cover";
            />;
          </div>;
          <h2 className="text - 2xl font - bold mb - 4">Benefits &amp, Use Cases</h2>;
          <ul className="list - disc list - inside space - y-2 mb - 8 text - zion - slate - light">;
            <li > Track sales and service metrics in real time.</li>;
            <li > Approve or remove listings with a few clicks.</li>;
            <li > Assign roles and permissions to your team.</li>;
          </ul>;
          <h2 className='text - 2xl font - bold mb - 4'>;
            Frequently Asked Questions;
          </h2>;
          <div className='space - y-4 mb - 12'>;
            <div>;
              <p className='font - semibold'>Who can access the dashboard?</p>;
              <p className='text - zion - slate - light'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Only authorized admins and moderators with the proper roles.;
              </p>;
            </div>;
            <div>;


                Yes, you can export data to CSV for further analysis.;
              </p>;
            </div>;
          </div>;
              <Link href="/admin" />View Dashboard</Link>;
              <p className="font-semibold">Who can access the dashboard?</p>;
              <p className="text-zion-slate-light">Only authorized admins and moderators with the proper roles.</p>;
            </div>;
            <div>;
              <p className="font-semibold">Can I export reports?</p>;
              <p className="text-zion-slate-light">Yes, you can export data to CSV for further analysis.</p>;
            </div>;
          </div>;
          <div className="text-center">;
            <Button size="lg" className="bg-zion-purple text-white" asChild>;


<<<<<<< HEAD
              <p className="font-semibold">Who can access the dashboard?</p>;
              <p className="text-zion-slate-light">Only authorized admins and moderators with the proper roles.</p>;
            </div>;
            <div>;
              <p className="font-semibold">Can I export reports?</p>;
              <p className="text-zion-slate-light">Yes, you can export data to CSV for further analysis.</p>;
            </div>;
          </div>;
          <div className="text-center">;
            <Button size="lg" className="bg-zion-purple text-white" asChild>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Link href="/admin">View Dashboard</Link>;
            </Button>;
          </div>;
        </div>;
      </main>;
<<<<<<< HEAD
    </>;
  );
}
;
ursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
    </>);
}
  )
    </>;
  );
}
;

<<<<<<< HEAD:src-disabled/pages.disabled/features/AdminDashboard.tsx
  )
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
  )
=======
  )
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/features/AdminDashboard.tsx
