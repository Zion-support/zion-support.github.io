<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
import { useState, useEffect } from "react";
import { X } from "lucide-react";
export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState($2);
  const [isClosed, setIsClosed] = useState($2);
  useEffect(() => {
    const handleScroll = $2;
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function FloatingCTA() {

  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

<<<<<<< HEAD

import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
export function FloatingCTA() {;
export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
import { useState, useEffect } from "react",

import { X } from "lucide-react",
export function FloatingCTA() {}

  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),

<<<<<<< HEAD
=======

<<<<<<< HEAD
  useEffect(() => {;

    };
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px

      } else {;
        setIsVisible(false);

    };
<<<<<<< HEAD
"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    window && window.addEventListener("scroll", handleScroll);
    return () => {;"
      window && window.removeEventListener("scroll", handleScroll);
    };
<<<<<<< HEAD
=======
  }, [isClosed]);
<<<<<<< HEAD
  const handleClose = () => {;
  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px
      const scrollPosition = window.scrollY,
>>>>>>> merged-prs-20250907-203621
      const threshold = 600, // Show CTA after scrolling 600px

      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
<<<<<<< HEAD
    },

    window.addEventListener($2);
    return () => {
=======
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [isClosed]);
  const handleClose = () => {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  }, [isClosed]);
  const handleClose = () => {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    setIsClosed(true);
    setIsVisible(false);
  }
  if (!isVisible) return null;

<<<<<<< HEAD
=======
  return (

    setIsVisible(false);
  }
  if (!isVisible) return null;

  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    },
"
    window.addEventListener("scroll", handleScroll),
    return () => {"
>>>>>>> merged-prs-20250907-203621
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isClosed]),

<<<<<<< HEAD
  const handleClose = () => {
    setIsClosed($2);
=======
  const handleClose = () => {}
    setIsClosed(true),
>>>>>>> merged-prs-20250907-203621
    setIsVisible(false)
  },

  if (!isVisible) return null,
<<<<<<< HEAD
=======

<<<<<<< HEAD
  return ("
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">"
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">"
        <div className="mr-4">"
          <p className="text-white font-medium">Ready to explore Zion?</p>"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">
        <div className="mr-4">
          <p className="text-white font-medium">Ready to explore Zion?</p>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  )
<<<<<<< HEAD
=======
  );
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  )
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { useState, useEffect } from "react",;
import { X } from "lucide-react",;
;
export function FloatingCTA() {;
  const [isVisible, setIsVisible] = useState(false),;
  const [isClosed, setIsClosed] = useState(false),;
;
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

  return (
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">;
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">;
        <div className="mr-4">;
          <p className="text-white font-medium">Ready to explore Zion?</p>;
<<<<<<< HEAD
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
=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <X className="w-5 h-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
=======
  );

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD

}
;

  ); export function FloatingCTA () {};
  const [isVisible, setIsVisible] = useState (false);
const [isClosed, setIsClosed] = useState (false);
useEffect ( () => {}
  const handleScroll = () => {}
  const scrollPosition = window.scrollY;
const threshold = 600, //Show CTA after scrolling 600px if (scrollPosition > threshold && !isClosed) {}
  setIsVisible (true) 
}else {}
  setIsVisible (false) 
>>>>>>> merged-prs-20250907-203621
}
};
}, [isClosed]);"

return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link to="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>) 
});
}
;
=======
}
;

<<<<<<< HEAD
  ); export function FloatingCTA () {
  const [isVisible, setIsVisible] = useState (false);
const [isClosed, setIsClosed] = useState (false);
useEffect ( () => {
  const handleScroll = () => {
  const scrollPosition = window.scrollY;
const threshold = 600, //Show CTA after scrolling 600px if (scrollPosition > threshold && !isClosed) {
  setIsVisible (true) 
}else {
  setIsVisible (false) 
}
};
}, [isClosed]);
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link to="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>) 
}
  );
}
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
