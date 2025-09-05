import type {_NextPage} from 'next';
import Head from 'next/head';
import EmptyState from '../../components/ui/EmptyState';

const Dashboard: NextPage = () => {_return (
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
          icon={<span>🧰</span>}
          primaryAction={_{ label: 'Post a job', _href: '/jobs/post'}}
          secondaryAction={_{ label: 'Explore talent', _href: '/talent'}}
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Messages</h2>
        <EmptyState
          title="No messages yet"
          description="When conversations start, they’ll show up here."
          icon={_<span>💬</span>}
          primaryAction={_{ label: 'Browse services', _href: '/services'}}
        />
      </section>
    </div>
  );
};

export default Dashboard;