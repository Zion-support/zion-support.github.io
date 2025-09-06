
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { CheckCircle, ArrowRight } from 'lucide-react';

    router.push('/checkout');
    return <div>Redirecting...</div>;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  const router = useRouter();

  const { mock } = router && router.query;

  if (!mock) {;
    router && router.push('/checkout');

    return <div>Redirecting...</div>;

  }
  return (

    return <div>Redirecting...</div>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }

}

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-zion-blue-light/80 backdrop-blur-md rounded-lg border border-zion-cyan/20 p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-4">
            Mock Checkout Complete!
          </h1>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
            <p className="text-yellow-400 text-sm">

              <strong>Development Mode:</strong> This is a mock checkout page shown when using dummy Stripe keys.
              In production, users would be redirected to the actual Stripe checkout flow.
            </p>
          </div>

              <li>• Checkout request received successfully</li>
              <li>• Mock session ID generated: cs_test_mock_session_id_{Date.now()}</li>
              <li>• Cart items would be processed</li>
              <li>• Payment would be handled by Stripe</li>
              <li>• Order confirmation would be sent</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="text-zion-slate-light text-sm">

              <p>To test with real Stripe: </p>
              <ol className='list-decimal list-inside space-y-1 mt-2'>
                <li>
                  Configure real Stripe test keys in environment variables
                </li>                <li>Set STRIPE_TEST_MODE=true for test environment</li>
                <li>Use test card: 4242 4242 4242 4242</li>
              </ol>
            </div>


          <div className="space-y-4">
            <div className="text-zion-slate-light text-sm">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              <p>To test with real Stripe: </p>
              <ol className="list-decimal list-inside space-y-1 mt-2">
                <li>Configure real Stripe test keys in environment variables</li>
                <li>Set STRIPE_TEST_MODE=true for test environment</li>
                <li>Use test card: 4242 4242 4242 4242</li>
              </ol>
            </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              <Button asChild variant="outline" className="border-zion-cyan/30 text-zion-slate-light hover:bg-zion-cyan/10">
                <Link href="/cart">
                  ← Back to Cart
                </Link>
              </Button>
              <Button asChild className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue">
                <Link href="/marketplace">

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  Continue Shopping
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
            Mock Checkout Complete!;
          </h1>;
          <div className='bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6'>;
            <p className='text-yellow-400 text-sm'>;
              <strong>Development Mode:</strong> This is a mock checkout page;

              shown when using dummy Stripe keys. In production, users would be;
              redirected to the actual Stripe checkout flow.;
            </p>;
          </div>;


              </li>              <li>• Cart items would be processed</li>;
=======
);
              </Button>;
            </div>;
          </div>;
        </div>;
      </div>;
=======
} ;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
