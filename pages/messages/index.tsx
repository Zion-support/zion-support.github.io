<<<<<<< HEAD
import type { NextPage } from 'next',;
import Head from 'next/head',;
import EmptyState from '../../components/ui/EmptyState',;
;
const Messages:NextPage = () => {;
  return (;
    <div className="space-y-6 pb-16">;
      <Head>;
        <title>Messages - Zion</title>;
      </Head>;
;
      <h1 className="text-2xl font-semibold">Messages</h1>;
;
      <EmptyState;
        title="No messages yet";
        description="Start a conversation by requesting a quote or responding to an existing one.";
        icon={<span>📫</span>}
        primaryAction={{ label:'Explore talent', href:'/talent' }}
        secondaryAction={{ label:'Browse services', href:'/services' }}
      />;
    </div>;
  ),;
},;
;
=======
import type { NextPage } from 'next',
import Head from 'next/head',
import EmptyState from '../../components/ui/EmptyState',
const Messages: NextPage = () => {
  return (
    <div className=&quot;space-y-6 pb-16&quot;>      <Head>
        <title>Messages - Zion</title>
      </Head>

      <h1 className=&quot;text-2xl font-semibold&quot;>Messages</h1>

      <EmptyState
        title=&quot;No messages yet&quot;
        description=&quot;Start a conversation by requesting a quote or responding to an existing one.&quot;
        icon={<span>📫</span>}
        primaryAction={_{ label: 'Explore talent', _href: '/talent'}}
        secondaryAction={_{ label: 'Browse services', _href: '/services'}}
      />
    </div>
  )
},

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export default Messages,