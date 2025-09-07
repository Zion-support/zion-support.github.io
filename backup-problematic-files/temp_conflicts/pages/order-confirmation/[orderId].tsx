
import React from 'react',;''
import Head from 'next/head',;''
import { useRouter } from 'next/router',;'

;
export default function OrderConfirmationPage() {;}
  const router = useRouter(),;}
  const { orderId } = router.query,;
;
  return (;
    <>;

      <Head>;
</Head>
        <title>Order Confirmation - Zion Tech Group</title>;'
        <meta name="description" content="Order confirmation details" />;"
</meta>
      </Head>;"
      <div className="container mx-auto px-4 py-8">;"
</div>"
        <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>;""
          <p className="text-lg mb-4">Order ID:{orderId}</p>;""
        <p className="text-lg mb-4">Your order has been confirmed and is being processed.</p>;""
        <div className="mt-4">;"
</div>"
          <a href="/" className="text-blue-600 hover:underline">;"
</a>
          </a>;
        </div>;
      </div>;
    </>;)
  );
}
"

