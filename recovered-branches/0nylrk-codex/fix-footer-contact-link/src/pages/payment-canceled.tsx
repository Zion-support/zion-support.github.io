<<<<<<< HEAD



<<<<<<< HEAD
=======
import React from 'react';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Button  } from '@/components/ui/button';
import { useNavigate  } from 'react-router-dom';
import { XCircle } from 'lucide-react';
export default function PaymentCanceled() {


<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
import {XCircle} from 'lucide-react';
export default function PaymentCanceled() {;
  const navigate = useNavigate();
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
import {XCircle} from 'lucide-react';
export default function PaymentCanceled() {;
  const navigate = useNavigate();

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react',
import { Button } from '@/components/ui/button',
import { useNavigate } from 'react-router-dom',
import { XCircle } from 'lucide-react',
export default function PaymentCanceled() {
  const navigate = useNavigate(),
<<<<<<< HEAD
<<<<<<< HEAD

  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  
  
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4">
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
            onClick={() => navigate('/payments')}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Try Again
          </Button>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

          <Button 


<<<<<<< HEAD
=======
          <Button 


          <Button
          <Button 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            variant="outline"
            onClick={() => navigate('/dashboard')}
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
          >
            Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
import {XCircle} from 'lucide-react';


<<<<<<< HEAD
=======
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
import {XCircle} from 'lucide-react';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;
import { XCircle } from 'lucide-react',;
<<<<<<< HEAD

<<<<<<< HEAD
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
export default function PaymentCanceled() {;
  const navigate = useNavigate();
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4">;
      <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">;
        <div className="inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center">;
          <XCircle className="h-6 w-6 text-red-600" />;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <h1 className="text-2xl font-bold text-white mb-2">Payment Canceled</h1>;

        <p className="text-zion-slate-light mb-6">;
          Your payment process was canceled. No charges have been made to your account.;
        </p>;

        <div className="flex flex-col space-y-3">;
<<<<<<< HEAD
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
          <Button;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            onClick={() => navigate('/payments')}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
          >;
            Try Again;
          </Button>;
<<<<<<< HEAD
<<<<<<< HEAD

          <Button
            variant="outline"
            onClick={() => navigate('/dashboard')}
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
          ;
          <Button ;
            variant="outline";
            onClick={() => navigate('/dashboard')}
            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white";
          <Button;
            variant="outline";
            onClick={() => navigate('/dashboard')}
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          >;
            Return to Dashboard;
          </Button>;
        </div>;
      </div>;




<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}
    </div>);
}
    </div>);
}
    </div>;
  );}
 </div> <h1 className="text-2xl font-bold text-white mb-2" >Payment Canceled</h1> <p className="text-zion-slate-light mb-6" > Your payment process was canceled. No charges have been made to your account. </p> <div className="flex flex-col space-y-3" > <Button onClick= {
  () => navigate ('/payments') 
}className="bg-zion-purple hover:bg-zion-purple-dark text-white" > Try Again </Button> <Button 
}
    </div>;
  );
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
;
    </div>);
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
