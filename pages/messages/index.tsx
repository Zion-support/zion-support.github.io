>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
const Messages: NextPage = () => {
  return (
    <div className="space-y-6 pb-16">
      <Head>
        <title>Messages - Zion</title>
      </Head>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      <h1 className="text-2xl font-semibold">Messages</h1>
      <EmptyState
        title="No messages yet"
        description="Start a conversation by requesting a quote or responding to an existing one."
        icon={<span>📫</span>}
        primaryAction={{ label: 'Explore talent', href: '/talent' }}
        secondaryAction={{ label: 'Browse services', href: '/services' }}
      />
    </div>
  )
}
export default Messages;
=======
import type { NextPage } from 'next',
import Head from 'next / head',
import EmptyState from '../../components / ui / EmptyState',
const Messages: NextPage = () => {
  return (
    <div className="space - y-6 pb - 16">;
      <Head>;
        <title > Messages - Zion</title>;
      </Head>;
      <h1 className="text - 2xl font - semibold">Messages</h1>;
      <EmptyState;
        title="No messages yet";
        description="Start a conversation by requesting a quote or responding to an existing one.";
        icon={<span>📫</span>}
        primary_action={{ label: 'Explore talent', href: '/talent' }}
        secondary_action={{ label: 'Browse services', href: '/services' }}
      />;
    </div>);
},
export default Messages,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
