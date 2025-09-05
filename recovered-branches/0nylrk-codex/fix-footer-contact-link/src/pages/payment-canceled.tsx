
import React from 'react',
import { Button } from '@/components/ui/button',
import { useNavigate } from 'react-router-dom',
import { XCircle } from 'lucide-react',
export default function PaymentCanceled() {
  const navigate = useNavigate(),
  
  return (
    <div className=&quot;min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4&quot;>
      <div className=&quot;max-w-md w-full bg-zion-blue-dark rounded-xl p-8 border border-zion-blue-light shadow-lg text-center&quot;>
        <div className=&quot;inline-flex h-12 w-12 rounded-full bg-red-100 mb-4 items-center justify-center&quot;>
          <XCircle className=&quot;h-6 w-6 text-red-600&quot; />
        </div>
        
        <h1 className=&quot;text-2xl font-bold text-white mb-2&quot;>Payment Canceled</h1>
        
        <p className=&quot;text-zion-slate-light mb-6&quot;>
          Your payment process was canceled. No charges have been made to your account.
        </p>
        
        <div className=&quot;flex flex-col space-y-3&quot;>
          <Button 
            onClick={() => navigate('/payments')}
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
          >
            Try Again
          </Button>
          
          <Button 
            variant=&quot;outline&quot;
            onClick={() => navigate('/dashboard')}
<<<<<<< HEAD
            className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
=======
            className=&quot;border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          >
            Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  )
}
