<<<<<<< HEAD
import type { NextPage } from 'next',
import Head from 'next/head',
import EmptyState from '../../components/ui/EmptyState',
const Dashboard: NextPage = () => {
  return (
    <div className=&quot;space-y-6 pb-16&quot;>
      <Head>
        <title>Dashboard - Zion</title>
      </Head>

      <h1 className=&quot;text-2xl font-semibold&quot;>Dashboard</h1>

      <section>
        <h2 className=&quot;text-lg font-semibold mb-2&quot;>My Jobs</h2>
        <EmptyState
          title=&quot;No jobs yet&quot;
          description=&quot;Post your first job to get quotes from top talent.&quot;
          icon={<span>🧰</span>}
          primaryAction={{ label: 'Post a job', href: '/jobs/post' }}
          secondaryAction={{ label: 'Explore talent', href: '/talent' }}
        />
      </section>

      <section>
        <h2 className=&quot;text-lg font-semibold mb-2&quot;>Messages</h2>
        <EmptyState
          title=&quot;No messages yet&quot;
          description=&quot;When conversations start, they’ll show up here.&quot;
=======
import type { NextPage } from 'next',;
import Head from 'next/head',;
import EmptyState from '../../components/ui/EmptyState',;
const Dashboard: NextPage = () => {;
  return (;
    <div className="space-y-6 pb-16">;
      <Head>;
        <title>Dashboard - Zion</title>;
      </Head>;
      <h1 className="text-2xl font-semibold">Dashboard</h1>;
      <section>;
        <h2 className="text-lg font-semibold mb-2">My Jobs</h2>;
        <EmptyState;
          title="No jobs yet";
          description="Post your first job to get quotes from top talent.";
          icon={<span>🧰</span>}
          primaryAction={{ label: 'Post a job', href: '/jobs/post' }}
          secondaryAction={{ label: 'Explore talent', href: '/talent' }}
        />;
      </section>;
      <section>;
        <h2 className="text-lg font-semibold mb-2">Messages</h2>;
        <EmptyState;
          title="No messages yet";
          description="When conversations start, they’ll show up here.";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          icon={<span>💬</span>}
          primaryAction={{ label: 'Browse services', href: '/services' }}
        />;
      </section>;
    </div>;
  );
},;
export default Dashboard;