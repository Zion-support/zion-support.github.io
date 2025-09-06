<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
<<<<<<< HEAD
=======
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react'
export default function MockCheckoutPage() {
  const router = useRouter();
  const { mock } = router && router.query;
  if (!mock) {;
    router && router.push('/checkout');
    return <div>Redirecting...</div>;
  }
  return (
    return <div>Redirecting...</div>
  }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useRouter  } from 'next/router';
=======
import { useRouter } from 'next/router';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { CheckCircle, ArrowRight } from 'lucide-react';
<<<<<<< HEAD

    router.push('/checkout');
    return <div>Redirecting...</div>;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
=======

import { useRouter } from 'next/router';


import Link from 'next/link';
import { Button } from '@/components/ui/button';


=======

export default function MockCheckoutPage(req, res) {
  try {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const router = useRouter();

  const { mock } = router && router.query;

  if (!mock) {;
    router && router.push('/checkout');

=======
<<<<<<< HEAD
export default function MockCheckoutPage() {;
  const router = useRouter();
  const { mock } = router.query;

  if (!mock) {
=======
export default function MockCheckoutPage(req, res) {
  try {
  const router = useRouter();
  const { mock } = router.query;
<<<<<<< HEAD
<<<<<<< HEAD
  if (!mock) {
    router.push('/checkout');
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return <div>Redirecting...</div>;

  }
  return (
<<<<<<< HEAD

    return <div>Redirecting...</div>
=======
    <div className='min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-8 px-4'>
      <div className='container mx-auto max-w-2xl'>
        <div className='bg-zion-blue-light/80 backdrop-blur-md rounded-lg border border-zion-cyan/20 p-8 text-center'>
          <CheckCircle className='h-16 w-16 text-green-400 mx-auto mb-4' />
          <h1 className='text-3xl font-bold text-white mb-4'>
            Mock Checkout Complete!
          </h1>
          <div className='bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6'>
            <p className='text-yellow-400 text-sm'>
              <strong>Development Mode:</strong> This is a mock checkout page
              shown when using dummy Stripe keys. In production, users would be
              redirected to the actual Stripe checkout flow.
            </p>
          </div>
          <div className='text-left bg-zion-blue/50 rounded-lg p-4 mb-6'>
            <h3 className='text-lg font-semibold text-white mb-2'>
              What happened:
            </h3>
            <ul className='text-zion-slate-light space-y-1 text-sm'>
=======
  if (!mock) {;
=======
  if (!mock) {;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    router.push('/checkout');
    return <div>Redirecting...</div>;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <div className='min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-8 px-4'>
      <div className='container mx-auto max-w-2xl'>
        <div className='bg-zion-blue-light/80 backdrop-blur-md rounded-lg border border-zion-cyan/20 p-8 text-center'>
          <CheckCircle className='h-16 w-16 text-green-400 mx-auto mb-4' />
          <h1 className='text-3xl font-bold text-white mb-4'>
            Mock Checkout Complete!
          </h1>
          <div className='bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6'>
            <p className='text-yellow-400 text-sm'>
              <strong>Development Mode:</strong> This is a mock checkout page
              shown when using dummy Stripe keys. In production, users would be
              redirected to the actual Stripe checkout flow.
            </p>
          </div>
          <div className='text-left bg-zion-blue/50 rounded-lg p-4 mb-6'>
            <h3 className='text-lg font-semibold text-white mb-2'>
              What happened:
            </h3>
            <ul className='text-zion-slate-light space-y-1 text-sm'>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-8 px-4&quot;>
      <div className=&quot;container mx-auto max-w-2xl&quot;>
        <div className=&quot;bg-zion-blue-light/80 backdrop-blur-md rounded-lg border border-zion-cyan/20 p-8 text-center&quot;>
          <CheckCircle className=&quot;h-16 w-16 text-green-400 mx-auto mb-4&quot; />
          
          <h1 className=&quot;text-3xl font-bold text-white mb-4&quot;>
            Mock Checkout Complete!
          </h1>
          
          <div className=&quot;bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6&quot;>
            <p className=&quot;text-yellow-400 text-sm&quot;>

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <strong>Development Mode:</strong> This is a mock checkout page shown when using dummy Stripe keys.
              In production, users would be redirected to the actual Stripe checkout flow.
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="text-left bg-zion-blue/50 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">What happened:</h3>
            <ul className="text-zion-slate-light space-y-1 text-sm">

              <li>• Checkout request received successfully</li>
              <li>• Mock session ID generated: cs_test_mock_session_id_{Date.now()}</li>
              <li>• Cart items would be processed</li>
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<div className="text-left bg-zion-blue/50 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">What happened:</h3>
            <ul className="text-zion-slate-light space-y-1 text-sm">
=======
          <div className="text-left bg-zion-blue/50 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">What happened:</h3>
            <ul className="text-zion-slate-light space-y-1 text-sm">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <li>• Checkout request received successfully</li>
              <li>• Mock session ID generated: cs_test_mock_session_id_{Date.now()}</li>
              <li>• Cart items would be processed</li>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <li>• Payment would be handled by Stripe</li>
              <li>• Order confirmation would be sent</li>
            </ul>
          </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======

          <div className="space-y-4">
            <div className="text-zion-slate-light text-sm">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <p>To test with real Stripe: </p>
              <ol className="list-decimal list-inside space-y-1 mt-2">
                <li>Configure real Stripe test keys in environment variables</li>
                <li>Set STRIPE_TEST_MODE=true for test environment</li>
                <li>Use test card: 4242 4242 4242 4242</li>
              </ol>
            </div>
<<<<<<< HEAD

=======
=======


=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
          <div className='space-y-4'>
            <div className='text-zion-slate-light text-sm'>
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <div className="space-y-4">
            <div className="text-zion-slate-light text-sm">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              <p>To test with real Stripe: </p>
              <ol className="list-decimal list-inside space-y-1 mt-2">
                <li>Configure real Stripe test keys in environment variables</li>
                <li>Set STRIPE_TEST_MODE=true for test environment</li>
                <li>Use test card: 4242 4242 4242 4242</li>
              </ol>
            </div>
<<<<<<< HEAD
<div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                asChild
                variant='outline'
                className='border-zion-cyan/30 text-zion-slate-light hover:bg-zion-cyan/10'
              >
                <Link href='/cart'>← Back to Cart</Link>
              </Button>
              <Button
                asChild
                className='bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue'
              >
                <Link href='/marketplace'>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <Button asChild variant="outline" className="border-zion-cyan/30 text-zion-slate-light hover:bg-zion-cyan/10">
                <Link href="/cart">
                  ← Back to Cart
                </Link>
              </Button>
              <Button asChild className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue">
                <Link href="/marketplace">
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  Continue Shopping
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  Continue Shopping
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
    <div className='min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-8 px-4'>;
      <div className='container mx-auto max-w-2xl'>;
        <div className='bg-zion-blue-light/80 backdrop-blur-md rounded-lg border border-zion-cyan/20 p-8 text-center'>;
          <CheckCircle className='h-16 w-16 text-green-400 mx-auto mb-4' />;


=======
<<<<<<< HEAD
<div className='min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-8 px-4'>;
      <div className='container mx-auto max-w-2xl'>;
        <div className='bg-zion-blue-light/80 backdrop-blur-md rounded-lg border border-zion-cyan/20 p-8 text-center'>;
          <CheckCircle className='h-16 w-16 text-green-400 mx-auto mb-4' />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <h1 className='text-3xl font-bold text-white mb-4'>;
=======


}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-8 px-4">;
      <div className="container mx-auto max-w-2xl">;
        <div className="bg-zion-blue-light/80 backdrop-blur-md rounded-lg border border-zion-cyan/20 p-8 text-center">;
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />;
          <h1 className="text-3xl font-bold text-white mb-4">;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            Mock Checkout Complete!;
          </h1>;
          <div className='bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6'>;
            <p className='text-yellow-400 text-sm'>;
              <strong>Development Mode:</strong> This is a mock checkout page;
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {use_router} from 'next / router';
import Link from 'next / link';
import { Button } from '@/components / ui / button';
import { CheckCircle, ArrowRight } from 'lucide-react';
export default /**
 * MockCheckoutPage - Function description
 */
function MockCheckoutPage() {
  const router = use_router ();
  const { mock } = router.query;
;
  // Check condition
if ( {) {
  $2
}
    router.push ('/checkout');
    return <div > Redirecting...</div>;
  }
  return (
    <div className='min - h-screen bg - gradient - to - br from - zion - blue to - zion - blue - dark py - 8 px - 4'>;
      <div className='container mx - auto max - w-2xl'>;
        <div className='bg - zion - blue - light / 80 backdrop - blur - md rounded - lg border border - zion - cyan / 20 p - 8 text - center'>;
          <CheckCircle className='h - 16 w - 16 text - green - 400 mx - auto mb - 4' />;
          <h1 className='text - 3xl font - bold text - white mb - 4'>;
            Mock Checkout Complete!;
          </h1>;
          <div className='bg - yellow - 500 / 10 border border - yellow - 500 / 30 rounded - lg p - 4 mb - 6'>;
            <p className='text - yellow - 400 text - sm'>;
              <strong > Development Mode:</strong> This is a mock checkout page;
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              shown when using dummy Stripe keys. In production, users would be;
              redirected to the actual Stripe checkout flow.;
            </p>;
          </div>;
<<<<<<< HEAD


=======
          <div className='text - left bg - zion - blue / 50 rounded - lg p - 4 mb - 6'>;
            <h3 className='text - lg font - semibold text - white mb - 2'>;
              What happened:;
            </h3>;
            <ul className='text - zion - slate - light space - y-1 text - sm'>;
              <li>• Checkout request received successfully</li>;
              <li>;
                • Mock session ID generated: cs_test_mock_session_id_;
                {Date.now ()}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </li>              <li>• Cart items would be processed</li>;
=======
<<<<<<< HEAD
);
<<<<<<< HEAD
=======

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-8 px-4">;
      <div className="container mx-auto max-w-2xl">;
        <div className="bg-zion-blue-light/80 backdrop-blur-md rounded-lg border border-zion-cyan/20 p-8 text-center">;
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />;
          <h1 className="text-3xl font-bold text-white mb-4">;
            Mock Checkout Complete!;
          </h1>;
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">;
            <p className="text-yellow-400 text-sm">;
              <strong>Development Mode:</strong> This is a mock checkout page shown when using dummy Stripe keys.;
              In production, users would be redirected to the actual Stripe checkout flow.;
            </p>;
          </div>;
          <div className="text-left bg-zion-blue/50 rounded-lg p-4 mb-6">;
            <h3 className="text-lg font-semibold text-white mb-2">What happened:</h3>;
            <ul className="text-zion-slate-light space-y-1 text-sm">;
              <li>• Checkout request received successfully</li>;
              <li>• Mock session ID generated: cs_test_mock_session_id_{Date.now()}</li>;
              <li>• Cart items would be processed</li>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <li>• Payment would be handled by Stripe</li>;
              <li>• Order confirmation would be sent</li>;
            </ul>;
          </div>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
          <div className='space - y-4'>;
            <div className='text - zion - slate - light text - sm'>;
              <p > To test with real Stripe: </p>;
              <ol className='list - decimal list - inside space - y-1 mt - 2'>;
                <li>;
                  Configure real Stripe test keys in environment variables;
                </li>                <li > Set STRIPE_TEST_MODE = true for test environment</li>;
                <li > Use test card: 4242 4242 4242 4242</li>;
              </ol>;
            </div>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Button;
                as_child;
                variant='outline';
                className='border - zion - cyan / 30 text - zion - slate - light hover:bg - zion - cyan / 10';
              >;
                <Link href='/cart'>← Back to Cart</Link>;
              </Button>;
              <Button;
                as_child;
                className='bg - zion - cyan hover:bg - zion - cyan / 90 text - zion - blue';
              >;
                <Link href='/marketplace'>;
                  Continue Shopping;
                  <ArrowRight className='h - 4 w - 4 ml - 2' />                </Link>;
=======
          <div className="space-y-4">;
            <div className="text-zion-slate-light text-sm">;
              <p>To test with real Stripe: </p>;
              <ol className="list-decimal list-inside space-y-1 mt-2">;
                <li>Configure real Stripe test keys in environment variables</li>;
                <li>Set STRIPE_TEST_MODE=true for test environment</li>;
                <li>Use test card: 4242 4242 4242 4242</li>;
              </ol>;
            </div>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Button asChild variant="outline" className="border-zion-cyan/30 text-zion-slate-light hover:bg-zion-cyan/10">;
                <Link href="/cart">;
                  ← Back to Cart;
                </Link>;
              </Button>;
              <Button asChild className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue">;
                <Link href="/marketplace">;
                  Continue Shopping;
                  <ArrowRight className="h-4 w-4 ml-2" />;
                </Link>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </Button>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;
  );
} ;

=======


=======
    </div>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
} ;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  )
} 
    </div>);
;
=======
    </div>;
  );
} ;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
