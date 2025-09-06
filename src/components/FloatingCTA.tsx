<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

=======

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X } from 'lucide-react';
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
export function FloatingCTA() {

  const [ isVisible, setIsVisible ] = useState(false),
  const [ isClosed, setIsClosed ] = useState(false),


  useEffect((,) => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px

      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };  }, [isClosed]);

  const handleClose = () => {
    setIsClosed(true);
    setIsVisible(false);  };
=======
      window.removeEventListener("scroll", handleScroll)
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [isClosed]);

  const handleClose = () => {
    setIsClosed(true);
<<<<<<< HEAD
    setIsVisible(false);
=======
    setIsVisible(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  if (!isVisible) return null;


  return (
    <div className='fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in'>
      <div className='bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between'>
        <div className='mr-4'>
          <p className='text-white font-medium'>Ready to explore Zion?</p>
          <p className='text-zion-slate-light text-sm'>
            Register today to access all features!
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <Button
            variant='default'
            size='sm'
            className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap'
            asChild
          >
            <Link href='/signup'>Register Now</Link>
          </Button>
<<<<<<< HEAD
          <button
            onClick={handleClose}
            className='text-zion-slate hover:text-white p-1'
            aria-label='Close'
=======
          <button 
            onClick = {handleClose,}
            className="text-zion-slate hover: text-white p-1"
            aria-label="Close"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
          >
            <X className='w-5 h-5' />          </button>
=======
            <X className="w-5 h-5" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </div>
      </div>
    </div>
  );

};
}, [isClosed]);
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link href="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>) ;
}'"
=======
}
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
