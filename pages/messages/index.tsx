import type { NextPage } from 'next';
import Head from 'next/head';
import EmptyState from '../../components/ui/EmptyState';
<<<<<<< HEAD
<<<<<<< HEAD
const Messages: NextPage;
=======
const Messages: NextPage = () => {
  return (
    <div className="space-y-6 pb-16">
      <Head>
        <title>Messages - Zion</title>
      </Head>
      <h1 className="text-2xl font-semibold">Messages</h1>
      <EmptyState
        title="No messages yet"
        description="Start a conversation by requesting a quote or responding to an existing one."
=======

const Messages: NextPage = () => {
  return (
    <div className='space-y-6 pb-16'>
      <Head>
        <title>Messages - Zion</title>
      </Head>

      <h1 className='text-2xl font-semibold'>Messages</h1>

      <EmptyState
        title='No messages yet'
        description='Start a conversation by requesting a quote or responding to an existing one.'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        icon={<span>📫</span>}
        primaryAction={{ label: 'Explore talent', href: '/talent' }}
        secondaryAction={{ label: 'Browse services', href: '/services' }}
      />
    </div>
<<<<<<< HEAD
  )
}
export default Messages;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  );
};
}

export default Messages;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
