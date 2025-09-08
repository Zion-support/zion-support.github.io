
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
import { useState, useEffect } from "react",

import { X } from "lucide-react",
export function FloatingCTA() {}

  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),


<<<<<<< HEAD


=======
  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px

      } else {;
        setIsVisible(false);

    };

"
>>>>>>> origin/cursor/delete-old-data-records-6bba
    window && window.addEventListener("scroll", handleScroll);
    return () => {;"
      window && window.removeEventListener("scroll", handleScroll);
    };
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

  }, [isClosed]);

    setIsClosed(true);
    setIsVisible(false);
  }
  if (!isVisible) return null;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (

    setIsVisible(false);
  }
  if (!isVisible) return null;

  return (

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    },
"
    window.addEventListener("scroll", handleScroll),
    return () => {"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isClosed]),

<<<<<<< HEAD

  const handleClose = () => {}
    setIsClosed(true),

=======
  const handleClose = () => {}
    setIsClosed(true),
>>>>>>> origin/cursor/delete-old-data-records-6bba
    setIsVisible(false)
  },

  if (!isVisible) return null,
<<<<<<< HEAD



=======
  return ("
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">"
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">"
        <div className="mr-4">"
          <p className="text-white font-medium">Ready to explore Zion?</p>"

  return ("
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">"
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">"
        <div className="mr-4">"
          <p className="text-white font-medium">Ready to explore Zion?</p>"
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>
        </div>"
        <div className="flex items-center gap-2">

            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap"
            asChild;
          >"
            <Link to="/signup">Register Now</Link>
          </Button>

            aria-label="Close"
          >"

            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
<<<<<<< HEAD

  );
}

=======

  )
  )
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { useState, useEffect } from "react",;
import { X } from "lucide-react",;
export function FloatingCTA() {;
  const [isVisible, setIsVisible] = useState(false),;
  const [isClosed, setIsClosed] = useState(false),;
  useEffect(() => {;
    const handleScroll = () => {;
      const scrollPosition = window.scrollY,;
      const threshold = 600, // Show CTA after scrolling 600px;
      if (scrollPosition > threshold && !isClosed) {;
        setIsVisible(true);
      } else {;
        setIsVisible(false);
      }
    },;
    window.addEventListener("scroll", handleScroll),;
    return () => {;
      window.removeEventListener("scroll", handleScroll);
    }
  }, [isClosed]),;
  const handleClose = () => {;
    setIsClosed(true),;
    setIsVisible(false);
  };
  if (!isVisible) return null;
  return (;

;
      if (scrollPosition > threshold && !isClosed) {;
        setIsVisible(true),;
      } else {;
        setIsVisible(false),;
      }
    },;
;
    window.addEventListener("scroll", handleScroll),;
    return () => {;
      window.removeEventListener("scroll", handleScroll),;
    },;
  }, [isClosed]),;
;
  const handleClose = () => {;
    setIsClosed(true),;
    setIsVisible(false),;
  },;
;
  if (!isVisible) return null,;
;
  return (;


  return (
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">;
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">;
        <div className="mr-4">;
          <p className="text-white font-medium">Ready to explore Zion?</p>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <p className="text-zion-slate-light text-sm">;
            Register today to access all features!;
          </p>;
        </div>;
        <div className="flex items-center gap-2">;
          <Button
            variant="default"
            size="sm"
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap"
            asChild>;
            <Link to="/signup">Register Now</Link>;
          </Button>;
          <button
            onClick={handleClose}
            className="text-zion-slate hover: text-white p-1"
            aria-label="Close">;

<<<<<<< HEAD
=======
<p className="text-zion-slate-light text-sm">Register today to access all features!</p>;
        </div>;
        <div className="flex items-center gap-2">;
          <Button ;
            variant="default" ;
            size="sm" ;
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>;
        </div>;
        <div className="flex items-center gap-2">;
          <Button;
            variant="default";
            size="sm";
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap";
            asChild;
          >;
            <Link to="/signup">Register Now</Link>;
          </Button>;
          <button;
            onClick={handleClose}
            className="text-zion-slate hover: text-white p-1";
            aria-label="Close";
          >;

>>>>>>> origin/cursor/delete-old-data-records-6bba
            <X className="w-5 h-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD

  );


=======
  );

>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Button  } from '@/components / ui / button';

    },
    },

)"
    window.addEventListener("scroll", handleScroll),"
    return () => {"
      window.removeEventListener("scroll", handleScroll)"
pr-12325

    }
  }, [isClosed]),
  const handleClose = (
    setIsClosed(true),
    setIsVisible(false)) => {
  return $3;}
}
  },
  if (!isVisible) return null,
  )
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { useState, useEffect } from "react",;
import { X } from "lucide-react",;          </button>;
        </div>;
      </div>;
    </div>;import { Button  } from '@/components / ui / button';
import { Link  } from './react-router-dom';
import { useState, useEffect  } from './react';

import { X  } from './lucide-react';
export /**;
 * FloatingCTA - Function description;
 */
function FloatingCTA() {}
  const [is_visible, setIsVisible] = useState (false);
  const [is_closed, setIsClosed] = useState (false);
;
  useEffect (() => {}
    const handle_scroll = () =>: any {}
      const scroll_position = window.scroll_y;
      const threshold = 600; // Show CTA after scrolling 600px;
      // Check condition;
if ( {) {}
  $2;
}
        setIsVisible (true);
      } else {}
        setIsVisible (false);
      }
    }
;"
    window.addEventListener ("scroll", handle_scroll);
    return () => {"
      window.removeEventListener ("scroll", handle_scroll);
    }
  }, [is_closed]);
;
  const handle_close = () =>: any {}
    setIsClosed (true);
    setIsVisible (false);
  }
;
  // Check condition;
if (return null) {}
  $2;
}

            as_child;
          >;"
            <Link to="/signup">Register Now</Link>;
          </Button>;
          <button;

          </button>;
        </div>;
      </div>;
    </div>);

}
<<<<<<< HEAD
;




=======
};
}, [isClosed]);"

return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link to="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>) 
});
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
