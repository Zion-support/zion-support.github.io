<<<<<<< HEAD
import type { NextPage } from 'next',
import Head from 'next/head',
import Link from 'next/link',
import UseTokensButton from '../../components/tokens/UseTokensButton',
const CustomerSupportChatbot: NextPage = () => {
  return (
=======
import type {_NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';

const CustomerSupportChatbot: NextPage = () => {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <div>
      <Head>
        <title>CustomerSupportChatbot - Zion Tech Solutions</title>
        <meta name=&quot;description&quot; content=&quot;CustomerSupportChatbot service&quot; />
      </Head>
      
      <main className=&quot;space-y-4&quot;>
        <h1>CustomerSupportChatbot</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId=&quot;customer-support-chatbot&quot; defaultType=&quot;premium_support&quot; />
        <Link href=&quot;/services&quot;>Back to Services</Link>
      </main>
    </div>
<<<<<<< HEAD
  )
},
=======
  );};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default CustomerSupportChatbot,