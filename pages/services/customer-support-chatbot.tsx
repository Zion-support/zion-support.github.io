import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import UseTokensButton from '../../components/tokens/UseTokensButton';
<<<<<<< HEAD
<<<<<<< HEAD
const CustomerSupportChatbot: NextPage;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const CustomerSupportChatbot: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CustomerSupportChatbot - Zion Tech Solutions</title>
<<<<<<< HEAD
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
        <meta name='description' content='CustomerSupportChatbot service' />
      </Head>

      <main className='space-y-4'>
        <h1>CustomerSupportChatbot</h1>
        <p>Service details coming soon...</p>
        <UseTokensButton
          serviceId='customer-support-chatbot'
          defaultType='premium_support'
        />
        <Link href='/services'>Back to Services</Link>
      </main>
    </div>
  );
};
}

export default CustomerSupportChatbot;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
