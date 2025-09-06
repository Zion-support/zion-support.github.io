import type { NextPage } from 'next';
import Head from 'next/head';
import EmptyState from '../../components/ui/EmptyState';

const Dashboard: NextPage = () => {
  return (
<<<<<<< HEAD
    <div className='space-y-6 pb-16'>      <Head>
=======
    <div className='space-y-6 pb-16'>
const Dashboard: NextPage = () => {
  return (
    <div className="space-y-6 pb-16">
const Dashboard: NextPage = () => {
  return (
    <div className="space-y-6 pb-16">
ursor/integrate-build-improve-and-re-verify-b76c
      <Head>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <title>Dashboard - Zion</title>
      </Head>

      <h1 className='text-2xl font-semibold'>Dashboard</h1>
<<<<<<< HEAD
=======
      <h1 className="text-2xl font-semibold">Dashboard</h1>
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      <section>
        <h2 className='text-lg font-semibold mb-2'>My Jobs</h2>
        <EmptyState
          title='No jobs yet'
<<<<<<< HEAD
          description='Post your first job to get quotes from top talent.'          icon={<span>🧰</span>}
=======
          description='Post your first job to get quotes from top talent.'
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <section>
        <h2 className="text-lg font-semibold mb-2">My Jobs</h2>
        <EmptyState
          title="No jobs yet"
          description="Post your first job to get quotes from top talent."
          title="No jobs yet"
          description="Post your first job to get quotes from top talent."
ursor/integrate-build-improve-and-re-verify-b76c
          icon={<span>🧰</span>}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          primaryAction={{ label: 'Post a job', href: '/jobs/post' }}
          secondaryAction={{ label: 'Explore talent', href: '/talent' }}
        />
      </section>

      <section>
        <h2 className='text-lg font-semibold mb-2'>Messages</h2>
        <EmptyState
          title='No messages yet'
<<<<<<< HEAD
          description='When conversations start, they’ll show up here.'          icon={<span>💬</span>}
=======
          description='When conversations start, they’ll show up here.'
        <h2 className="text-lg font-semibold mb-2">Messages</h2>
        <EmptyState
          title="No messages yet"
          description="When conversations start, they’ll show up here."
        <h2 className="text-lg font-semibold mb-2">Messages</h2>
        <EmptyState
          title="No messages yet"
          description="When conversations start, they’ll show up here."
ursor/integrate-build-improve-and-re-verify-b76c
          icon={<span>💬</span>}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          primaryAction={{ label: 'Browse services', href: '/services' }}
        />
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default Dashboard;
=======
export default Dashboard;
  )
};

export default Dashboard;
  )
};

export default Dashboard;
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
