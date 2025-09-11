


<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Button  } from '@/components/ui/button';
import { useNavigate  } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
export default function PaymentSuccess() {

  const navigate = useNavigate();

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
import {CheckCircle2} from 'lucide-react';
export default function PaymentSuccess() {;
  const navigate = useNavigate();
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react',
import { Button } from '@/components/ui/button',
import { useNavigate } from 'react-router-dom',
import { CheckCircle2 } from 'lucide-react',
export default function PaymentSuccess() {
  const navigate = useNavigate(),
<<<<<<< HEAD
<<<<<<< HEAD
  
  
  
=======

  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


          <Button
          <Button 
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          <Button 


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
import {CheckCircle2} from 'lucide-react';


<<<<<<< HEAD
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

import {Button} from '@/components/ui/button';
import {useNavigate} from 'react-router-dom';
import {CheckCircle2} from 'lucide-react';
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;
import { CheckCircle2 } from 'lucide-react',;

<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { useNavigate } from 'react-router-dom',;
import { CheckCircle2 } from 'lucide-react',;
;
export default function PaymentSuccess() {;
  const navigate = useNavigate(),;
  ;
  return (;
export default function PaymentSuccess() {;
  const navigate = useNavigate();
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function PaymentSuccess() {;
  const navigate = useNavigate();

  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4">;
      <div className="max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center">;
        <div className="inline-flex h-12 w-12 rounded-full bg-green-100 mb-4 items-center justify-center">;
          <CheckCircle2 className="h-6 w-6 text-green-600" />;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        <h1 className="text-2xl font-bold text-white mb-2">Payment Successful!</h1>;
        <p className="text-zion-slate-light mb-6">;
          Your payment has been processed successfully. You now have access to all the premium features.;
        </p>;
        <div className="flex flex-col space-y-3">;
        ;
        <h1 className="text-2xl font-bold text-white mb-2">Payment Successful!</h1>;
        ;
        <p className="text-zion-slate-light mb-6">;
          Your payment has been processed successfully. You now have access to all the premium features.;
        </p>;
        ;
        <div className="flex flex-col space-y-3">;
          <Button ;
          <Button;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <h1 className="text-2xl font-bold text-white mb-2">Payment Successful!</h1>;

        <p className="text-zion-slate-light mb-6">;
          Your payment has been processed successfully. You now have access to all the premium features.;
        </p>;

        <div className="flex flex-col space-y-3">;
          <Button
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            onClick={() => navigate('/dashboard')}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
          >;
            Go to Dashboard;
          </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
          ;
          <Button ;
            variant="outline";
            onClick={() => navigate('/')}
            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white";
          <Button;
            variant="outline";
            onClick={() => navigate('/')}
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >;
            Return to Home;
          </Button>;
        </div>;
      </div>;




<<<<<<< HEAD
<<<<<<< HEAD
}
    </div>);
}
    </div>);
}
    </div>;
  );}
 </div> <h1 className="text-2xl font-bold text-white mb-2" >Payment Successful!</h1> <p className="text-zion-slate-light mb-6" > Your payment has been processed successfully. You now have access to all the premium features. </p> <div className="flex flex-col space-y-3" > <Button onClick= {
  () => navigate ('/dashboard') 
}className="bg-zion-purple hover:bg-zion-purple-dark text-white" > Go to Dashboard </Button> <Button 
}
    </div>;
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
