import type { NextPage } from 'next';
import Head from 'next/head';
import EmptyState from '../../components/ui/EmptyState';
<<<<<<< HEAD
<<<<<<< HEAD
const Dashboard: NextPage;
=======
const Dashboard: NextPage = () => {
  return (
    <div className="space-y-6 pb-16">
      <Head>
        <title>Dashboard - Zion</title>
      </Head>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <section>
        <h2 className="text-lg font-semibold mb-2">My Jobs</h2>
        <EmptyState
          title="No jobs yet"
          description="Post your first job to get quotes from top talent."
=======

const Dashboard: NextPage = () => {
  return (
    <div className='space-y-6 pb-16'>
      <Head>
        <title>Dashboard - Zion</title>
      </Head>

      <h1 className='text-2xl font-semibold'>Dashboard</h1>

      <section>
        <h2 className='text-lg font-semibold mb-2'>My Jobs</h2>
        <EmptyState
          title='No jobs yet'
          description='Post your first job to get quotes from top talent.'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          icon={<span>🧰</span>}
          primaryAction={{ label: 'Post a job', href: '/jobs/post' }}
          secondaryAction={{ label: 'Explore talent', href: '/talent' }}
        />
      </section>
      <section>
<<<<<<< HEAD
        <h2 className="text-lg font-semibold mb-2">Messages</h2>
        <EmptyState
          title="No messages yet"
          description="When conversations start, they’ll show up here."
=======
        <h2 className='text-lg font-semibold mb-2'>Messages</h2>
        <EmptyState
          title='No messages yet'
          description='When conversations start, they’ll show up here.'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          icon={<span>💬</span>}
          primaryAction={{ label: 'Browse services', href: '/services' }}
        />
      </section>
    </div>
<<<<<<< HEAD
  )
}
export default Dashboard;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  );
};
}

export default Dashboard;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
