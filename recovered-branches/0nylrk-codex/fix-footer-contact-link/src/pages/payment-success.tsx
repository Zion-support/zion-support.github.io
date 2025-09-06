
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Button  } from '@/components/ui/button';
import { useNavigate  } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
export default function PaymentSuccess() {

  const navigate = useNavigate();

=======
=======


>>>>>>> main
import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
import {CheckCircle2} from 'lucide-react';
export default function PaymentSuccess() {;
  const navigate = useNavigate();
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> main
=======
import React from 'react',
import { Button } from '@/components/ui/button',
import { useNavigate } from 'react-router-dom',
import { CheckCircle2 } from 'lucide-react',
export default function PaymentSuccess() {
  const navigate = useNavigate(),
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">
        <div className="inline-flex h-12 w-12 rounded-full bg-green-100 mb-4 items-center justify-center">
          <CheckCircle2 className="h-6 w-6 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Payment Successful!</h1>
        <p className="text-zion-slate-light mb-6">
          Your payment has been processed successfully. You now have access to all the premium features.
        </p>
        <div className="flex flex-col space-y-3">
          <Button
            onClick={() => navigate('/dashboard')}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Go to Dashboard
          </Button>
<<<<<<< HEAD
<<<<<<< HEAD
          <Button
=======
          <Button 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


          <Button 


>>>>>>> main
            variant="outline"
            onClick={() => navigate('/')}
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
import {CheckCircle2} from 'lucide-react';
=======


>>>>>>> main
=======
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;
import { CheckCircle2 } from 'lucide-react',;
<<<<<<< HEAD
export default function PaymentSuccess() {;
  const navigate = useNavigate();
  return (;
=======

export default function PaymentSuccess() {;
  const navigate = useNavigate();

  return (
>>>>>>> main
    <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4">;
      <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">;
        <div className="inline-flex h-12 w-12 rounded-full bg-green-100 mb-4 items-center justify-center">;
          <CheckCircle2 className="h-6 w-6 text-green-600" />;
        </div>;
<<<<<<< HEAD
        <h1 className="text-2xl font-bold text-white mb-2">Payment Successful!</h1>;
        <p className="text-zion-slate-light mb-6">;
          Your payment has been processed successfully. You now have access to all the premium features.;
        </p>;
        <div className="flex flex-col space-y-3">;
          <Button;
=======

        <h1 className="text-2xl font-bold text-white mb-2">Payment Successful!</h1>;

        <p className="text-zion-slate-light mb-6">;
          Your payment has been processed successfully. You now have access to all the premium features.;
        </p>;

        <div className="flex flex-col space-y-3">;
          <Button
>>>>>>> main
            onClick={() => navigate('/dashboard')}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
          >;
            Go to Dashboard;
          </Button>;
<<<<<<< HEAD
          <Button;
            variant="outline";
            onClick={() => navigate('/')}
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
=======

          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
=======
import React from 'react';
import {Button} from '@/components / ui / button';
import {use_navigate} from 'react-router-dom';
import {CheckCircle2} from 'lucide-react';
export default /**
 * PaymentSuccess - Function description
 */
function PaymentSuccess() {
  const navigate = use_navigate ();
;
  return (
    <div className="min - h-screen bg - zion - blue flex flex - col items - center justify - center p - 4">;
      <div className="max - w-md w - full bg - zion - blue - dark rounded - xl p - 8 border border - zion - blue - light shadow - lg text - center">;
        <div className="inline - flex h - 12 w - 12 rounded - full bg - green - 100 mb - 4 items - center justify - center">;
          <CheckCircle2 className="h - 6 w - 6 text - green - 600" />;
        </div>;
        <h1 className="text - 2xl font - bold text - white mb - 2">Payment Successful!</h1>;
        <p className="text - zion - slate - light mb - 6">;
          Your payment has been processed successfully. You now have access to all the premium features.;
        </p>;
        <div className="flex flex - col space - y-3">;
          <Button;
            on_click={() => navigate ('/dashboard')}
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";
          >;
            Go to Dashboard;
          </Button>;
          <Button;
            variant="outline";
            on_click={() => navigate ('/')}
            className="border - zion - blue - light text - zion - slate - light hover: bg - zion - blue - light hover:text - white";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
          >;
            Return to Home;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD
    </div>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
