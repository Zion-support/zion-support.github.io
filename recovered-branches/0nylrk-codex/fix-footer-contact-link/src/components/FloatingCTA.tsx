<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD

<<<<<<< HEAD
import { Button } from "@/components/ui/button";"
import { Link } from "react-router-dom";
"
import { useState, useEffect } from "react";"
import { X } from "lucide-react";

export function FloatingCTA() {};
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);


<<<<<<< HEAD
import { useState, useEffect } from "react";
import { X } from "lucide-react";

  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
  useEffect(() => {

    const handleScroll = () => {
=======
=======
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function FloatingCTA() {

  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
import { useState, useEffect } from "react",
=======
"
import { Button } from "@/components/ui/button","
import { Link } from "react-router-dom","
import { useState, useEffect } from "react","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { X } from "lucide-react",
export function FloatingCTA() {}
=======
export function FloatingCTA() {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const [isVisible, setIsVisible] = useState(false),
  const [isClosed, setIsClosed] = useState(false),

<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
      if (scrollPosition > threshold && !isClosed) {        setIsVisible(true);
=======

;
;
        setIsVisible(true);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      } else {;
        setIsVisible(false);
<<<<<<< HEAD
<<<<<<< HEAD
      }

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

  useEffect(() => {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    };
"
    window && window.addEventListener("scroll", handleScroll);
    return () => {;"
      window && window.removeEventListener("scroll", handleScroll);
    };
<<<<<<< HEAD
=======
  }, [isClosed]);



<<<<<<< HEAD
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 600; // Show CTA after scrolling 600px
      const scrollPosition = window.scrollY,
      const threshold = 600, // Show CTA after scrolling 600px

      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }, [isClosed]);
  const handleClose = () => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    setIsClosed(true);
    setIsVisible(false);
  }
  if (!isVisible) return null;
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
      }    setIsClosed(true);
    setIsVisible(false);
  }
  if (!isVisible) return null;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  return (
=======
      }    setIsClosed(true);
=======


      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true);
      } else {;
        setIsVisible(false);
      }

    };

    window && window.addEventListener("scroll", handleScroll);
    return () => {;
      window && window.removeEventListener("scroll", handleScroll);
    };
  }, [isClosed]);

  const handleClose = () => {;

    setIsClosed(true);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    setIsVisible(false);
  }
  if (!isVisible) return null;

  return (
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    },
"
    window.addEventListener("scroll", handleScroll),
    return () => {"
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isClosed]),

  const handleClose = () => {}
    setIsClosed(true),
    setIsVisible(false)
  },

  if (!isVisible) return null,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  return ("
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">"
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">"
        <div className="mr-4">"
          <p className="text-white font-medium">Ready to explore Zion?</p>"
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>
        </div>"
        <div className="flex items-center gap-2">
<<<<<<< HEAD
          <Button
            variant="default"
            size="sm"
=======
          <Button "
            variant="default" "
            size="sm" "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap"
            asChild;
          >"
            <Link to="/signup">Register Now</Link>
          </Button>
<<<<<<< HEAD
          <button
            onClick={handleClose}
            className="text-zion-slate hover: text-white p-1"
=======
          <button;
            onClick={handleClose}"
            className="text-zion-slate hover: text-white p-1""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            aria-label="Close"
          >"
=======


  return (
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">
        <div className="mr-4">
          <p className="text-white font-medium">Ready to explore Zion?</p>
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="default" 
            size="sm" 
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap"
            asChild
          >
            <Link to="/signup">Register Now</Link>
          </Button>
          <button 
            onClick={handleClose}
            className="text-zion-slate hover: text-white p-1"
            aria-label="Close"
          >
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
<<<<<<< HEAD

=======
  )
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
import { Button } from "@/components/ui/button";""
import { Link } from "react-router-dom";""
import { useState, useEffect } from "react";""
import { X } from "lucide-react";"
export function FloatingCTA() {

  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  return (
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">;
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">;
        <div className="mr-4">;
          <p className="text-white font-medium">Ready to explore Zion?</p>;
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
            <X className="w-5 h-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
  );

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
=======

  )"
import { Button } from "@/components/ui/button",;"
import { Link } from "react-router-dom",;"
import { useState, useEffect } from "react",;"
import { X } from "lucide-react",;

export function FloatingCTA() { return null; }
      } else {;
        setIsVisible(false);
      }
    },;"
    window.addEventListener("scroll", handleScroll),;
    return () => {;"
      window.removeEventListener("scroll", handleScroll);
    }
  }, [isClosed]),;
  const handleClose = () => {;
    setIsClosed(true),;
    setIsVisible(false);
  };
  if (!isVisible) return null;
  return (;



  return (
"
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">;"
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">;"
        <div className="mr-4">;"
          <p className="text-white font-medium">Ready to explore Zion?</p>;
"
            <Link to="/signup">Register Now</Link>;
          </Button>;
          <button;
            onClick={handleClose}"
            className="text-zion-slate hover: text-white p-1";"
            aria-label="Close";
          >;
"
            <X className="w-5 h-5" />;
          </button>;
        </div>;
      </div>;
    </div>;



import { Button  } from '@/components / ui / button';'
import { Link  } from './react-router-dom';'
import { useState, useEffect  } from './react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
  return (
    <div className="fixed bottom - 6 left - 0 right - 0 mx - auto max - w-md px - 4 z - 50 animate - fade-in">;
      <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue p - 4 rounded - lg border border - zion - purple shadow - lg flex items - center justify-between">;
        <div className="mr-4">;
          <p className="text - white font-medium">Ready to explore Zion?</p>;
          <p className="text - zion - slate - light text-sm">;
            Register today to access all features!;
          </p>;
        </div>;
        <div className="flex items - center gap-2">;
          <Button;
            variant="default";
            size="sm";
<<<<<<< HEAD
<<<<<<< HEAD
            className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple whitespace-nowrap";
=======
  return ("
    <div className="fixed bottom - 6 left - 0 right - 0 mx - auto max - w-md px - 4 z - 50 animate - fade - in">;"
      <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue p - 4 rounded - lg border border - zion - purple shadow - lg flex items - center justify - between">;"
        <div className="mr - 4">;"
          <p className="text - white font - medium">Ready to explore Zion?</p>;"
          <p className="text - zion - slate - light text - sm">;
            Register today to access all features!;
          </p>;
        </div>;"
        <div className="flex items - center gap - 2">;
          <Button;"
            variant="default";"
            size="sm";"
            className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple whitespace - nowrap";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple whitespace - nowrap";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple whitespace-nowrap";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            as_child;
          >;"
            <Link to="/signup">Register Now</Link>;
          </Button>;
          <button;
<<<<<<< HEAD
            on_click={handle_close}
            className="text - zion - slate hover: text - white p-1";
            aria - label="Close";
          >;
<<<<<<< HEAD
<<<<<<< HEAD
            <X className="w - 5 h-5" />;
=======
            on_click={handle_close}"
            className="text - zion - slate hover: text - white p - 1";"
            aria - label="Close";
          >;"
            <X className="w - 5 h - 5" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <X className="w - 5 h - 5" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
            <X className="w - 5 h-5" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </button>;
        </div>;
      </div>;
    </div>);

<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
}
};
}, [isClosed]);"
=======
}
;
}
;

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link to="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>) 
}
  );
}
;
<<<<<<< HEAD


}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  if (!isVisible) return null,



  return ("
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">"
</div>"
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">"
        <div className="mr-4">"
          <p className="text-white font-medium">Ready to explore Zion?</p>""
          <p className="text-zion-slate-light text-sm">Register today to access all features!</p>"
        <div className="flex items-center gap-2">"
</div>
          <Button;"
            variant="default"""
            size="sm"""
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap""
            asChild;
          >
            <Link to="/signup">Register Now"
          <button;
            onClick={handleClose}"
            className="text-zion-slate hover: text-white p-1"""
            aria-label="Close""
</button>"
            <X className="w-5 h-5" />"

          </button>
    <div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in">;"
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between">;"
        <div className="mr-4">;"
          <p className="text-white font-medium">Ready to explore Zion?</p>;""
          <p className="text-zion-slate-light text-sm">;"
</p>
          </p>;
        </div>;"
        <div className="flex items-center gap-2">;"
            asChild>;
            <Link to="/signup">Register Now;"
          ;
            aria-label="Close">;"
            className="text-zion-slate hover: text-white p-1";""
            aria-label="Close";"
          >;
            <X className="w-5 h-5" />;"

          </button>;
        </div>;
    <div className="fixed bottom - 6 left - 0 right - 0 mx - auto max - w-md px - 4 z - 50 animate - fade - in">;"
      <div className="bg - gradient - to - r from - zion - blue - dark to - zion - blue p - 4 rounded - lg border border - zion - purple shadow - lg flex items - center justify - between">;"
        <div className="mr - 4">;"
          <p className="text - white font - medium">Ready to explore Zion?</p>;""
          <p className="text - zion - slate - light text - sm">;"
        <div className="flex items - center gap - 2">;"
            variant="default";""
            size="sm";""
            className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple whitespace - nowrap";"
            as_child;
            on_click={handle_close}"
            className="text - zion - slate hover: text - white p - 1";""
            aria - label="Close";"
            <X className="w - 5 h - 5" />;"

      </div>;)
    </div>);"
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link to="/signup" >Register Now  <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>)""
pr-12325
return (<div className="fixed bottom-6 left-0 right-0 mx-auto max-w-md px-4 z-50 animate-fade-in" > <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue p-4 rounded-lg border border-zion-purple shadow-lg flex items-center justify-between" > <div className="mr-4" > <p className="text-white font-medium" >Ready to explore Zion?</p> <p className="text-zion-slate-light text-sm" >Register today to access all features!</p> </div> <div className="flex items-center gap-2" > <Button variant="default" size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple whitespace-nowrap" asChild > <Link to="/signup" >Register Now</Link> </Button> <button aria-label="Close" w-5 h-5" /> </button> </div> </div> </div>)""

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
