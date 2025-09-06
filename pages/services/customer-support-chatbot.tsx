import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
const CustomerSupportChatbot: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CustomerSupportChatbot - Zion Tech Solutions</title>
        <meta name="description" content="CustomerSupportChatbot service" />
      </Head>
      <main className="space-y-4">
        <h1>CustomerSupportChatbot</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton serviceId="customer-support-chatbot" defaultType="premium_support" />
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  )
}
export default CustomerSupportChatbot;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
