<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
import EmptyState from '../../components/ui/EmptyState';

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
          icon={<span>🧰</span>}
          primaryAction={{ label: 'Post a job', href: '/jobs/post' }}
          secondaryAction={{ label: 'Explore talent', href: '/talent' }}
        />
      </section>

      <section>
        <h2 className='text-lg font-semibold mb-2'>Messages</h2>
        <EmptyState
          title='No messages yet'
          description='When conversations start, they’ll show up here.'
          icon={<span>💬</span>}
          primaryAction={{ label: 'Browse services', href: '/services' }}
        />
      </section>
    </div>
  );
};

=======
 <Head> <title>Dashboard - Zion</title> </Head> <h1 className="text-2xl font-semibold" >Dashboard</h1> <section> <h2 className="text-lg font-semibold mb-2" >My Jobs</h2> <EmptyState title="No jobs yet" description="Post your first job to get quotes from top talent." icon= {
  <span>🧰</span> 
}primaryAction= {
  {
  label: 'Post a job', href: '/jobs/post' 
}
}secondaryAction= {
  {
  label: 'Explore talent', href: '/talent' 
}
}/> </section> <section> <h2 className="text-lg font-semibold mb-2" >Messages</h2> <EmptyState /> </section> </div>) 
};
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
export default Dashboard;
