<<<<<<< HEAD
<<<<<<< HEAD
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
import React from 'react';

=======

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import { useRouter  } from 'next/router';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { CheckCircle, ArrowRight } from 'lucide-react';
<<<<<<< HEAD
=======

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
import React from 'react';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { useRouter } from 'next/router';


import Link from 'next/link';
import { Button } from '@/components/ui/button';



export default function MockCheckoutPage(req, res) {
  try {
  const router = useRouter();

  const { mock } = router && router.query;

  if (!mock) {;
    router && router.push('/checkout');

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function MockCheckoutPage() {;
  const router = useRouter();
  const { mock } = router.query;

  if (!mock) {
export default function MockCheckoutPage(req, res) {
  try {
<<<<<<< HEAD
  const router = useRouter();
  const { mock } = router.query;
  if (!mock) {
    router.push('/checkout');
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const router = useRouter();

  const { mock } = router && router.query;

  if (!mock) {;
    router && router.push('/checkout');

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return <div>Redirecting...</div>;

  }
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  if (!mock) {;
=======
=======
  if (!mock) {;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!mock) {;
    router.push('/checkout');
    return <div>Redirecting...</div>;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
=======

    return <div>Redirecting...</div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }

=======
  }
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}
<<<<<<< HEAD
=======
=======

    return <div>Redirecting...</div>
  }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-zion-blue-light/80 backdrop-blur-md rounded-lg border border-zion-cyan/20 p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
<<<<<<< HEAD
          <h1 className="text-3xl font-bold text-white mb-4">
            Mock Checkout Complete!
          </h1>
=======
          
          <h1 className="text-3xl font-bold text-white mb-4">
            Mock Checkout Complete!
          </h1>
          
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
            <p className="text-yellow-400 text-sm">
              <strong>Development Mode:</strong> This is a mock checkout page shown when using dummy Stripe keys.
              In production, users would be redirected to the actual Stripe checkout flow.
            </p>
          </div>


<<<<<<< HEAD
<<<<<<< HEAD
<div className="text-left bg-zion-blue/50 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">What happened:</h3>
            <ul className="text-zion-slate-light space-y-1 text-sm">
          <div className="text-left bg-zion-blue/50 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">What happened:</h3>
            <ul className="text-zion-slate-light space-y-1 text-sm">
              <li>• Checkout request received successfully</li>
              <li>• Mock session ID generated: cs_test_mock_session_id_{Date.now()}</li>
              <li>• Cart items would be processed</li>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <li>• Payment would be handled by Stripe</li>
              <li>• Order confirmation would be sent</li>
            </ul>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          <div className="space-y-4">
            <div className="text-zion-slate-light text-sm">


=======
          <div className='space-y-4'>
            <div className='text-zion-slate-light text-sm'>
          <div className="space-y-4">
            <div className="text-zion-slate-light text-sm">
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <p>To test with real Stripe: </p>
              <ol className="list-decimal list-inside space-y-1 mt-2">
                <li>Configure real Stripe test keys in environment variables</li>
                <li>Set STRIPE_TEST_MODE=true for test environment</li>
                <li>Use test card: 4242 4242 4242 4242</li>
              </ol>
            </div>
<<<<<<< HEAD


<<<<<<< HEAD
          <div className='space-y-4'>
            <div className='text-zion-slate-light text-sm'>
          <div className="space-y-4">
            <div className="text-zion-slate-light text-sm">
              <p>To test with real Stripe: </p>
              <ol className="list-decimal list-inside space-y-1 mt-2">
                <li>Configure real Stripe test keys in environment variables</li>
                <li>Set STRIPE_TEST_MODE=true for test environment</li>
                <li>Use test card: 4242 4242 4242 4242</li>
              </ol>
            </div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="border-zion-cyan/30 text-zion-slate-light hover:bg-zion-cyan/10">
                <Link href="/cart">
                  ← Back to Cart
                </Link>
              </Button>
<<<<<<< HEAD
              <Button asChild className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue">
                <Link href="/marketplace">
<<<<<<< HEAD
                  Continue Shopping
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
=======
=======
              
              <Button asChild className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue">
                <Link href="/marketplace">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  Continue Shopping
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className='min-h-screen bg-gradient-to-br from-zion-blue to-zion-blue-dark py-8 px-4'>;
      <div className='container mx-auto max-w-2xl'>;
        <div className='bg-zion-blue-light/80 backdrop-blur-md rounded-lg border border-zion-cyan/20 p-8 text-center'>;
          <CheckCircle className='h-16 w-16 text-green-400 mx-auto mb-4' />;


<<<<<<< HEAD
<<<<<<< HEAD
=======
          <h1 className='text-3xl font-bold text-white mb-4'>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <h1 className='text-3xl font-bold text-white mb-4'>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


}

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            Mock Checkout Complete!;
          </h1>;
          <div className='bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6'>;
            <p className='text-yellow-400 text-sm'>;
              <strong>Development Mode:</strong> This is a mock checkout page;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            Mock Checkout Complete!;
          </h1>;

          <div className='bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6'>;
            <p className='text-yellow-400 text-sm'>;
              <strong>Development Mode:</strong> This is a mock checkout page;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              shown when using dummy Stripe keys. In production, users would be;
              redirected to the actual Stripe checkout flow.;
            </p>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='text - left bg - zion - blue / 50 rounded - lg p - 4 mb - 6'>;
            <h3 className='text - lg font - semibold text - white mb - 2'>;
              What happened:;
            </h3>;
            <ul className='text - zion - slate - light space - y-1 text - sm'>;
              <li>• Checkout request received successfully</li>;
              <li>;
                • Mock session ID generated: cs_test_mock_session_id_;
                {Date.now ()}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </li>              <li>• Cart items would be processed</li>;
);

}
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
=======


              </li>              <li>• Cart items would be processed</li>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <li>• Payment would be handled by Stripe</li>;
              <li>• Order confirmation would be sent</li>;
            </ul>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </Button>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD


<<<<<<< HEAD
    </div>);
;
} ;


  )
} 
    </div>);
;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </div>;
  );
} ;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
