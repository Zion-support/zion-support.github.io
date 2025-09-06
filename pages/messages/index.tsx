import type { NextPage } from 'next';
import Head from 'next/head';
import EmptyState from '../../components/ui/EmptyState';
<<<<<<< HEAD

const Messages: NextPage = () => {
  return (
    <div className='space-y-6 pb-16'>
=======
const Messages: NextPage = () => {
  return (
    <div className="space-y-6 pb-16">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
      <Head>
        <title>Messages - Zion</title>
      </Head>

<<<<<<< HEAD
      <h1 className='text-2xl font-semibold'>Messages</h1>

      <EmptyState
        title='No messages yet'
        description='Start a conversation by requesting a quote or responding to an existing one.'
=======
      <h1 className="text-2xl font-semibold">Messages</h1>

      <EmptyState
        title="No messages yet"
        description="Start a conversation by requesting a quote or responding to an existing one."
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
        icon={<span>📫</span>}
        primaryAction={{ label: 'Explore talent', href: '/talent' }}
        secondaryAction={{ label: 'Browse services', href: '/services' }}
      />
    </div>
<<<<<<< HEAD
  );
};

export default Messages;
=======
  )
};

export default Messages;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
