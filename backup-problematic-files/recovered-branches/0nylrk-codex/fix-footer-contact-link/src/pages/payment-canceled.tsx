<<<<<<< HEAD
import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
import {XCircle} from 'lucide-react';
export default function PaymentCanceled() {;
  const navigate = useNavigate();
  return (
=======

import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;
import { XCircle } from 'lucide-react',;
;
export default function PaymentCanceled() {;
  const navigate = useNavigate(),;
  ;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4">;
      <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">;
        <div className="inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center">;
          <XCircle className="h-6 w-6 text-red-600" />;
        </div>;
<<<<<<< HEAD
        <h1 className="text-2xl font-bold text-white mb-2">Payment Canceled</h1>;
        <p className="text-zion-slate-light mb-6">;
          Your payment process was canceled. No charges have been made to your account.;
        </p>;
        <div className="flex flex-col space-y-3">;
          <Button
=======
        ;
        <h1 className="text-2xl font-bold text-white mb-2">Payment Canceled</h1>;
        ;
        <p className="text-zion-slate-light mb-6">;
          Your payment process was canceled. No charges have been made to your account.;
        </p>;
        ;
        <div className="flex flex-col space-y-3">;
          <Button ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            onClick={() => navigate('/payments')}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
          >;
            Try Again;
          </Button>;
<<<<<<< HEAD
          <Button
            variant="outline"
            onClick={() => navigate('/dashboard')}
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
import React from 'react';
import {Button} from '@/components / ui / button';
import {use_navigate} from 'react-router-dom';
import {XCircle} from 'lucide-react';
export default /**
 * PaymentCanceled - Function description
 */
function PaymentCanceled() {
  const navigate = use_navigate ();
;
  return (
    <div className="min - h-screen bg - zion - blue flex flex - col items - center justify - center p - 4">;
      <div className="max - w-md w - full bg - zion - blue - dark rounded - xl p - 8 border border - zion - blue - light shadow - lg text - center">;
        <div className="inline - flex h - 12 w - 12 rounded - full bg - red - 100 mb - 4 items - center justify - center">;
          <XCircle className="h - 6 w - 6 text - red - 600" />;
        </div>;
        <h1 className="text - 2xl font - bold text - white mb - 2">Payment Canceled</h1>;
        <p className="text - zion - slate - light mb - 6">;
          Your payment process was canceled. No charges have been made to your account.;
        </p>;
        <div className="flex flex - col space - y-3">;
          <Button;
            on_click={() => navigate ('/payments')}
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";
          >;
            Try Again;
          </Button>;
          <Button;
            variant="outline";
            on_click={() => navigate ('/dashboard')}
            className="border - zion - blue - light text - zion - slate - light hover: bg - zion - blue - light hover:text - white";
=======
          ;
          <Button ;
            variant="outline";
            onClick={() => navigate('/dashboard')}
            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          >;
            Return to Dashboard;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
    </div>);
}
=======
    </div>;
  );}
 </div> <h1 className="text-2xl font-bold text-white mb-2" >Payment Canceled</h1> <p className="text-zion-slate-light mb-6" > Your payment process was canceled. No charges have been made to your account. </p> <div className="flex flex-col space-y-3" > <Button onClick= {
  () => navigate ('/payments') 
}className="bg-zion-purple hover:bg-zion-purple-dark text-white" > Try Again </Button> <Button 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
