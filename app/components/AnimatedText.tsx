<<<<<<< HEAD
import React from 'react';;';";"
import SEOHead from './components/SEOHead';";"

<<<<<<< HEAD
const ComponentsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";";"
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div  className ="text-center">";"
          <h1  className ="text-4xl font-bold mb-4">Components</h1>";"
          <p  className ="text-gray-300">Professional solutions coming soon...</p>;";"
        </div>
      </div>
    </>
  )
}

export default ComponentsPage;'";'";"
=======
import React, { useState } from 'react";";";";
import React, { useState, useEffect } from "react;";";";";
import React from 'react';";";";";
import SEOHead from './components/SEOHead";

<<<<<<< HEAD
const ComponentsPage: React.FC  =  () => {";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Components</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
const AnimatedText: React.FC<AnimatedTextProps> = ({};)"
  text, className = "", delay = 0, speed = 100}) => {};"
  const [displayedText, setDisplayedText] = useState("");
=======
import React, { useState } from 'react';";
import React, { useState, useEffect } from "react";";
=======
import React, { useState } from 'react';
import React, { useState, useEffect } from "react";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04

import React from 'react'";
import SEOHead from './components/SEOHead';
;

const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group";
        description="Professional components solutions for modern businesses";
      />";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div: className ="text-center">";
          <h1: className ="text-4xl font-bold mb-4">Components</h1>";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>";
        </div>;
      </div>;
    </>;
  ),
};

const AnimatedText: React.FC<AnimatedTextProps> = ({};)
<<<<<<< HEAD
  text, className = "", delay = 0, speed = 100}) => {};";
  const [displayedText, setDisplayedText] = useState("");";
>>>>>>> main
=======
  text, className = ", delay = 0, speed = 100}) => {}";
  const [displayedText, setDisplayedText] = useState(")";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {};
    if ($1) {};
  // If body
<<<<<<< HEAD
};
      const timeout = setTimeout(() => {};
        setDisplayedText((prev) => prev + text[
    currentIndex
  
  ]);
=======
}
      const timeout  = setTimeout(() => {};
        setDisplayedText((prev) => prev + text[currentIndex]);
>>>>>>> main
        setCurrentIndex((prev) => prev + 1);
      }, delay + speed);
      return () => clearTimeout(timeout);
    };
    return undefined
<<<<<<< HEAD
  }, [
    currentIndex, text, delay, speed
  
  ])
  return <span className={className}>{displayedText}</span>";
},";";
      export default AnimatedText";";";
;"
export default ComponentsPage;'";'";";";";
"
=======
  }, [currentIndex, text, delay, speed])
  return <span: className ={className}>{displayedText}</span>
},
      export default AnimatedText

;
<<<<<<< HEAD
export default ComponentsPage;'";'";";";
>>>>>>> main
>>>>>>> main
=======
export default ComponentsPage'"'";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
