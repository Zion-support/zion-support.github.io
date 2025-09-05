
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function PaymentSuccess() {
  const navigate = useNavigate();
  
  return (
    <div className=&quot;min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4&quot;>
      <div className=&quot;max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center&quot;>
        <div className=&quot;inline-flex h-12 w-12 rounded-full bg-green-100 mb-4 items-center justify-center&quot;>
          <CheckCircle2 className=&quot;h-6 w-6 text-green-600&quot; />
        </div>
        
        <h1 className=&quot;text-2xl font-bold text-white mb-2&quot;>Payment Successful!</h1>
        
        <p className=&quot;text-zion-slate-light mb-6&quot;>
          Your payment has been processed successfully. You now have access to all the premium features.
        </p>
        
        <div className=&quot;flex flex-col space-y-3&quot;>
          <Button 
            onClick={() => navigate('/dashboard')}
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
          >
            Go to Dashboard
          </Button>
          
          <Button 
            variant=&quot;outline&quot;
            onClick={() => navigate('/')}
            className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
