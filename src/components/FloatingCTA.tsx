interface Service {
id: string;,
name: string;
}

import React from "react";

<<<<<<< HEAD
export const FloatingCTA: any = () => {
return (
<div className="fixed bottom-6 right-6 z-50">
<div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg max-w-sm">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-2">
<span className="text-lg">💬</span>
<span className="font-semibold">Need Help?</span>
</div>
</div>
<p className="text-sm text-blue-100 mb-3">
Chat with our experts to get personalized recommendations;
</p>
<button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
Start Chat,
</button>
</div>
</div>
),
};<//div><///div>

import { Button,  } from "@/components/ui/button",
import Link from "next/link";
import { useState,, useEffect,  } from "react";
import { X,  } from 'lucide-react'
return (
<div className='fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in'>
<div className='bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between'>
<div className='mr-4'>
<p className='text-white font-medium'>Ready to explore Zion?</p>
<p className='text-zion-slate-light text-sm'>
Register today to access all features!;
</p>
</div>
<div className='flex items-center gap-2'>
<Button,
variant='default'
size='sm';
className='bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap'
asChild;
>;
<Link href='/signup'>Register Now</Link>
</Button>
<button,
onClick={handleClose}
className='text-zion-slate hover:text-white p-1'
aria-label='Close'          >
<X className='w-5 h-5' />          </button>
<X className="w-5 h-5" />
<X className="w-5 h-5" />
</button>
</div>
</div>
</div>
)
}
}, [isClosed])
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link href="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>)
}'";
{/* Backdrop */}
<AnimatePresence>
{isExpanded && (
<motion.div";
className="fixed inset-0 bg-black/20 z-40"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
onClick={ () => setIsExpanded(false) }
/>) }
</AnimatePresence>
</>
)}
onClick={ () => setIsExpanded(false) }
/>) }
</AnimatePresence>
</>
)}
'";
}
=======
export const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg max-w-sm">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">💬</span>
            <span className="font-semibold">Need Help?</span>
          </div>
        </div>;
        <p className="text-sm text-blue-100 mb-3">;
          Chat with our experts to get personalized recommendations;
        </p>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
          Start Chat,
        </button>
      </div>
    </div>
  );
  };<//div><///div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
