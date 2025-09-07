import React from 'react';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD:src-disabled/pages.disabled/payment-canceled.tsx
import { useRouter } from 'next/router'; // Changed from useNavigate'
import React from 'react','
import { Button } from '@/components/ui/button','
import { useRouter } from 'next/router', // Changed from useNavigate'
import { XCircle } from 'lucide-react''
export default function PaymentCanceled() {
  const router = useRouter(), // Changed from navigate
export default function PaymentCanceled() {
  const router = useRouter(); // Changed from navigate
  return (
    <div className="flex flex-1 bg-zion-blue items-center justify-center p-4">"
        <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">"
          <div className="inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center">"
            <XCircle className="h-6 w-6 text-red-600" />"
          </div>
        <h1 className="text-2xl font-bold text-white mb-2">Payment Canceled</h1>"
        <p className="text-zion-slate-light mb-6">"
          Your payment process was canceled. No charges have been made to your account.
        </p>
        <div className="flex flex-col space-y-3">"
          <Button
            onClick={() => router.push('/payments')} // Changed to router.push'
            className="bg-zion-purple hover:bg-zion-purple-dark text-white""
          >
            Try Again
          </Button>
          <Button
            variant="outline";
            onClick={() => router.push('/dashboard')} // Changed to router.push;
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white';',
export default function PaymentCanceled() {;
  return (
    <div className='flex flex-1 bg-zion-blue items-center justify-center p-4'>'
      <div className='max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center'>'
        <div className='inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center'>'
          <XCircle className='h-6 w-6 text-red-600' />'
        </div>
        <h1 className='text-2xl font-bold text-white mb-2'>Payment Canceled</h1>'
        <p className='text-zion-slate-light mb-6'>'
          Your payment process was canceled. No charges have been made to your
          account.
        </p>
        <div className='flex flex-col space-y-3'>'
          <Button
            onClick={() => router.push('/payments')} // Changed to router.push'
            className='bg-zion-purple hover:bg-zion-purple-dark text-white''
=======


<<<<<<< HEAD
import { useRouter } from 'next/router'; // Changed from useNavigate

import React from 'react'
import { Button } from '@/components/ui/button'
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router'; // Changed from useNavigate
ursor/fix-website-loading-errors-and-merge-6662
=======
import { useRouter } from 'next/router'; // Changed from useNavigate

import React from 'react',
import { Button } from '@/components/ui/button',
import { useRouter } from 'next/router', // Changed from useNavigate
import { XCircle } from 'lucide-react'

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React from 'react',
import { Button } from '@/components/ui/button',
import { useRouter } from 'next/router', // Changed from useNavigate
import { XCircle } from 'lucide-react'




import { XCircle } from 'lucide-react'
import { useRouter } from 'next/router', // Changed from useNavigate
export default function PaymentCanceled() {
  const router = useRouter(), // Changed from navigate
<<<<<<< HEAD
  
=======


import React from 'react';
import { Button } from '@/components/ui/button';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/payment-canceled.tsx
import { useRouter } from 'next/router'; // Changed from useNavigate
origin/cursor/automate-test-improve-and-merge-code-2533


import { XCircle } from 'lucide-react'





origin/cursor/automate-test-improve-and-merge-code-2533
import { useRouter } from 'next/router', // Changed from useNavigate
export default function PaymentCanceled() {
<<<<<<< HEAD:src-disabled/pages.disabled/payment-canceled.tsx
=======
  const router = useRouter(); // Changed from navigate
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  

  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/payment-canceled.tsx
  return (
ursor/fix-website-loading-errors-and-merge-6662
    <div className="flex flex-1 bg-zion-blue items-center justify-center p-4">
        <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">
          <div className="inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center">
            <XCircle className="h-6 w-6 text-red-600" />
          </div>
<<<<<<< HEAD:src-disabled/pages.disabled/payment-canceled.tsx
=======
        <h1 className="text-2xl font-bold text-white mb-2">Payment Canceled</h1>
        <p className="text-zion-slate-light mb-6">
          Your payment process was canceled. No charges have been made to your account.
        </p>
        
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/payment-canceled.tsx
        <h1 className="text-2xl font-bold text-white mb-2">Payment Canceled</h1>
        <p className="text-zion-slate-light mb-6">
          Your payment process was canceled. No charges have been made to your account.
        </p>
<<<<<<< HEAD:src-disabled/pages.disabled/payment-canceled.tsx
=======
        
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/payment-canceled.tsx


        <div className="flex flex-col space-y-3">
          <Button
            onClick={() => router.push('/payments')} // Changed to router.push
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Try Again
          </Button>
<<<<<<< HEAD:src-disabled/pages.disabled/payment-canceled.tsx
=======
<<<<<<< HEAD
          <Button
            variant="outline"
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
export default function PaymentCanceled() {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/payment-canceled.tsx
          <Button 
            variant="outline";
            onClick={() => router.push('/dashboard')} // Changed to router.push;
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white';
export default function PaymentCanceled() {;
<<<<<<< HEAD:src-disabled/pages.disabled/payment-canceled.tsx
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const router = useRouter(); // Changed from navigate
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/payment-canceled.tsx
  return (
    <div className='flex flex-1 bg-zion-blue items-center justify-center p-4'>
      <div className='max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center'>
        <div className='inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center'>
          <XCircle className='h-6 w-6 text-red-600' />
        </div>
        <h1 className='text-2xl font-bold text-white mb-2'>Payment Canceled</h1>
        <p className='text-zion-slate-light mb-6'>
          Your payment process was canceled. No charges have been made to your
          account.
        </p>
        <div className='flex flex-col space-y-3'>
          <Button
            onClick={() => router.push('/payments')} // Changed to router.push
            className='bg-zion-purple hover:bg-zion-purple-dark text-white'
          >
            Try Again
          </Button>
          <Button
            variant='outline''
            onClick={() => router.push('/dashboard')} // Changed to router.push'
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'          >',
            Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white""
        <h1 className="text-2xl font-bold text-white mb-2">Payment Canceled</h1>"
        <p className="text-zion-slate-light mb-6">"
          Your payment process was canceled. No charges have been made to your account.
        </p>
        <div className="flex flex-col space-y-3">"
          <Button
            onClick={() => router.push('/payments')} // Changed to router.push'
            className="bg-zion-purple hover:bg-zion-purple-dark text-white""
          >
            Try Again
          </Button>
          <Button
            variant="outline""
            onClick={() => router.push('/dashboard')} // Changed to router.push'
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"",
            variant='outline'
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'          >
          <Button 
            variant="outline"
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"


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
import { useRouter } from 'next/router'; // Changed from useNavigate;
import { XCircle } from 'lucide-react';

import React from 'react',
import { Button } from '@/components/ui/button',

export default function PaymentCanceled() {
  return (
    <div className="flex flex-1 bg-zion-blue items-center justify-center p-4">
        <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">
          <div className="inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center">
            <XCircle className="h-6 w-6 text-red-600" />
          </div>
        <h1 className="text-2xl font-bold text-white mb-2">Payment Canceled</h1>
        <p className="text-zion-slate-light mb-6">
          Your payment process was canceled. No charges have been made to your account.
        </p>
        <div className="flex flex-col space-y-3">
          <Button
            onClick={() => router.push('/payments')} // Changed to router.push
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
<<<<<<< HEAD:src-disabled/pages.disabled/payment-canceled.tsx
            Try Again
          </Button>
          <Button 
            variant="outline"
            onClick={() => router.push('/dashboard')} // Changed to router.push
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"


          >
          >
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/payment-canceled.tsx
            Return to Dashboard
          </Button>
        </div>
        </div>
      </div>
<<<<<<< HEAD:src-disabled/pages.disabled/payment-canceled.tsx
;
}
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            Return to Dashboard
          </Button>
        </div>
      </div>
=======
    </div>
  );            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
          >
          </Button>
        </div>
  )
import React from 'react',;
      </div>
  )
      </div>
  )
}
;
}
<<<<<<< HEAD
  )
import React from 'react',;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/payment-canceled.tsx
  )
import React from 'react',;
import { useRouter } from 'next/router', // Changed from useNavigate;
export default function PaymentCanceled() {;
  const router = useRouter(), // Changed from navigate;
  return (;
<<<<<<< HEAD:src-disabled/pages.disabled/payment-canceled.tsx

  return (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/payment-canceled.tsx
    <div className="flex flex-1 bg-zion-blue items-center justify-center p-4">;
        <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">;
          <div className="inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center">;
            <XCircle className="h-6 w-6 text-red-600" />;
          </div>;
        <h1 className="text-2xl font-bold text-white mb-2">Payment Canceled</h1>;
        <p className="text-zion-slate-light mb-6">;
          Your payment process was canceled. No charges have been made to your account.;
        </p>;
        <div className="flex flex-col space-y-3">;
<<<<<<< HEAD
=======
          <Button
            onClick={(,) => router && router.push('/payments')} // Changed to router && router.push;
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
          >;
            Try Again;
          </Button>;
          <Button
            variant="outline""
            onClick={() => router && router.push('/dashboard')} // Changed to router && router.push;
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white';',
export default function PaymentCanceled() {;
  const router = useRouter(); // Changed from navigate;
  return (
    <div className='flex flex-1 bg-zion-blue items-center justify-center p-4'>;
      <div className='max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center'>;
        <div className='inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center'>;
          <XCircle className='h-6 w-6 text-red-600' />;
        </div>;
        <h1 className='text-2xl font-bold text-white mb-2'>Payment Canceled</h1>;
        <p className='text-zion-slate-light mb-6'>;
          Your payment process was canceled. No charges have been made to your;
          account.;
        </p>;
        <div className='flex flex-col space-y-3'>;
          <Button
            onClick={() => router && router.push('/payments')} // Changed to router && router.push;
            className='bg-zion-purple hover:bg-zion-purple-dark text-white';
          >;
            Try Again;
          </Button>;
          <Button
            variant='outline''
            onClick={() => router && router.push('/dashboard')} // Changed to router && router.push;
            className='border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white'          >;',
import { Button } from '@/components / ui / button';
import { use_router } from 'next / router'; // Changed from use_navigate;
import { use_router } from 'next / router', // Changed from use_navigate;
export default /**
 * PaymentCanceled - Function description
 */
function PaymentCanceled() {
  const router = use_router (), // Changed from navigate;
  return (
    <div className="flex flex - 1 bg - zion - blue items - center justify - center p - 4">;
        <div className="max - w-md w - full bg - zion - blue - dark rounded - xl p - 8 border border - zion - blue - light shadow - lg text - center">;
          <div className="inline - flex h - 12 w - 12 rounded - full bg - red - 100 mb - 4 items - center justify - center">;
            <XCircle className="h - 6 w - 6 text - red - 600" />;
          </div>;
        <h1 className="text - 2xl font - bold text - white mb - 2">Payment Canceled</h1>;
        <p className="text - zion - slate - light mb - 6">;
          Your payment process was canceled. No charges have been made to your account.;
        </p>;
        <div className="flex flex - col space - y-3">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <Button;
            onClick={() => router.push('/payments')} // Changed to router.push;
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
<<<<<<< HEAD:src-disabled/pages.disabled/payment-canceled.tsx

        <h1 className="text-2xl font-bold text-white mb-2">Payment Canceled</h1>;

        <p className="text-zion-slate-light mb-6">;
          Your payment process was canceled. No charges have been made to your account.;
        </p>;

        <div className="flex flex-col space-y-3">;
          <Button;
            on_click={(, ) => router.push ('/payments')} // Changed to router.push;
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/payment-canceled.tsx
          >;
            Try Again;
          </Button>;
          <Button;
            variant="outline";
<<<<<<< HEAD
            onClick={() => router.push('/dashboard')} // Changed to router.push;
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
=======
            on_click={() => router.push ('/dashboard')} // Changed to router.push;
            className='border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white';',
export default /**
 * PaymentCanceled - Function description
 */
function PaymentCanceled() {
  const router = use_router (); // Changed from navigate;
  return (
    <div className='flex flex - 1 bg - zion - blue items - center justify - center p - 4'>;
      <div className='max - w-md w - full bg - zion - blue - dark rounded - xl p - 8 border border - zion - blue - light shadow - lg text - center'>;
        <div className='inline - flex h - 12 w - 12 rounded - full bg - red - 100 mb - 4 items - center justify - center'>;
          <XCircle className='h - 6 w - 6 text - red - 600' />;
        </div>;
        <h1 className='text - 2xl font - bold text - white mb - 2'>Payment Canceled</h1>;
        <p className='text - zion - slate - light mb - 6'>;
          Your payment process was canceled. No charges have been made to your;
          account.;
        </p>;
        <div className='flex flex - col space - y-3'>;
          <Button;
            on_click={() => router.push ('/payments')} // Changed to router.push;
            className='bg - zion - purple hover:bg - zion - purple - dark text - white';
          >;
            Try Again;
          </Button>;
          <Button;
            variant='outline';
            on_click={() => router.push ('/dashboard')} // Changed to router.push;
            className='border - zion - blue - light text - zion - slate - light hover:bg - zion - blue - light hover:text - white'          >;',
            Return to Dashboard;
          </Button>;
        </div>;
      </div>;
    </div>);            className="border - zion - blue - light text - zion - slate - light hover: bg - zion - blue - light hover:text - white";
<<<<<<< HEAD:src-disabled/pages.disabled/payment-canceled.tsx
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/payment-canceled.tsx
          >;
            Return to Dashboard;
          </Button>;
        </div>;
<<<<<<< HEAD:src-disabled/pages.disabled/payment-canceled.tsx
=======
<<<<<<< HEAD
        </div>;
      </div>;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/payment-canceled.tsx
        </div>
      </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
      </div>);
      </div>);
}
<<<<<<< HEAD:src-disabled/pages.disabled/payment-canceled.tsx
;
}}}}
            onClick={() => router.push('/dashboard')} // Changed to router.push;
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
          >;
            Return to Dashboard;
          </Button>;
        </div>;
        </div>;
      </div>;
  );
}
;
</div>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/payment-canceled.tsx
