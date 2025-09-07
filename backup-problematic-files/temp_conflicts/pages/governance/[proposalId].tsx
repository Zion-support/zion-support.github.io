
import React from 'react',;''
import Head from 'next/head',;''
import { useRouter } from 'next/router',;'

;
export default function ProposalDetailPage() {;}
  const router = useRouter(),;}
  const { proposalId } = router.query,;
;
  return (;
    <>;

      <Head>;
</Head>
        <title>Proposal Details - Zion Tech Group</title>;'
        <meta name="description" content="View proposal details and vote" />;"
</meta>
      </Head>;"
      <div className="container mx-auto px-4 py-8">;"
</div>"
        <h1 className="text-3xl font-bold mb-6">Proposal Details</h1>;""
          <p className="text-lg mb-4">Proposal ID:{proposalId}</p>;""
        <p className="text-lg mb-4">Review the proposal details and cast your vote.</p>;""
        <div className="mt-4">;"
</div>"
          <a href="/governance" className="text-blue-600 hover:underline">;"
</a>
          </a>;
        </div>;
      </div>;
    </>;)
  );
}
"

