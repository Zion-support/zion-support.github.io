import type { NextPage } from 'next';
import Head from 'next/head';
import EmptyState from '../../components/ui/EmptyState';
<<<<<<< HEAD
<<<<<<< HEAD

const Dashboard: NextPage = () => {
  return (
    <div className='space-y-6 pb-16'>
=======
const Dashboard: NextPage = () => {
  return (
    <div className="space-y-6 pb-16">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const Dashboard: NextPage = () => {
  return (
    <div className="space-y-6 pb-16">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <Head>
        <title>Dashboard - Zion</title>
      </Head>

<<<<<<< HEAD
<<<<<<< HEAD
      <h1 className='text-2xl font-semibold'>Dashboard</h1>
=======
      <h1 className="text-2xl font-semibold">Dashboard</h1>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

      <section>
        <h2 className="text-lg font-semibold mb-2">My Jobs</h2>
        <EmptyState
<<<<<<< HEAD
          title='No jobs yet'
          description='Post your first job to get quotes from top talent.'
=======
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <section>
        <h2 className="text-lg font-semibold mb-2">My Jobs</h2>
        <EmptyState
          title="No jobs yet"
          description="Post your first job to get quotes from top talent."
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          title="No jobs yet"
          description="Post your first job to get quotes from top talent."
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          icon={<span>🧰</span>}
          primaryAction={{ label: 'Post a job', href: '/jobs/post' }}
          secondaryAction={{ label: 'Explore talent', href: '/talent' }}
        />
      </section>

      <section>
<<<<<<< HEAD
<<<<<<< HEAD
        <h2 className='text-lg font-semibold mb-2'>Messages</h2>
        <EmptyState
          title='No messages yet'
          description='When conversations start, they’ll show up here.'
=======
        <h2 className="text-lg font-semibold mb-2">Messages</h2>
        <EmptyState
          title="No messages yet"
          description="When conversations start, they’ll show up here."
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <h2 className="text-lg font-semibold mb-2">Messages</h2>
        <EmptyState
          title="No messages yet"
          description="When conversations start, they’ll show up here."
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          icon={<span>💬</span>}
          primaryAction={{ label: 'Browse services', href: '/services' }}
        />
      </section>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default Dashboard;
=======
  )
};

export default Dashboard;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default Dashboard;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
