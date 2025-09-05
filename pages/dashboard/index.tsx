<<<<<<< HEAD
import type { NextPage } from 'next',
import Head from 'next/head',
import EmptyState from '../../components/ui/EmptyState',
const Dashboard: NextPage = () => {
  return (
    <div className=&quot;space-y-6 pb-16&quot;>
=======
import type {_NextPage} from 'next';
import Head from 'next/head';
import EmptyState from '../../components/ui/EmptyState';

const Dashboard: NextPage = () => {_return (
    <div className="space-y-6 pb-16">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
          primaryAction={_{ label: 'Post a job', _href: '/jobs/post'}}
          secondaryAction={_{ label: 'Explore talent', _href: '/talent'}}
        />
      </section>

      <section>
        <h2 className=&quot;text-lg font-semibold mb-2&quot;>Messages</h2>
        <EmptyState
<<<<<<< HEAD
          title=&quot;No messages yet&quot;
          description=&quot;When conversations start, they’ll show up here.&quot;
          icon={<span>💬</span>}
          primaryAction={{ label: 'Browse services', href: '/services' }}
=======
          title="No messages yet"
          description="When conversations start, they’ll show up here."
          icon={_<span>💬</span>}
          primaryAction={_{ label: 'Browse services', _href: '/services'}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
      </section>
    </div>
  )
},

export default Dashboard,