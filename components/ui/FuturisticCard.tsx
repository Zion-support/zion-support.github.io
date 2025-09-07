<<<<<<< HEAD
import React from 'react';'

type Props = {import React from './react';'

}
=======
<<<<<<< HEAD
import { ReactNode } from 'react';
=======
import React from 'react';
<<<<<<< HEAD
type Props = $2;
  description: string,
  cta?: React.ReactNode
},

import { ReactNode } from 'react';

<<<<<<< HEAD
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
<<<<<<< HEAD


=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

type Props = {"title": string,"description": string;

}

<<<<<<< HEAD
import React from "react";
type Props = {;
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react";
type Props = {;
import React from './react';
type Props = {
<<<<<<< HEAD
  title: string,
=======
  title: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  description: string;
<<<<<<< HEAD
  cta?: React && React.ReactNode;
};
export default function FuturisticCard(): any ({ title, description, cta }: Props) {;
  return (
      </div>;
    </div>;
  );
=======

  cta?: React && React.ReactNode;
};


export default function FuturisticCard(): any ({ title, description, cta }: Props) {;
  return (
<<<<<<< HEAD

  );
=======
<<<<<<< HEAD
    <div className="futuristic-card">;
      <div className="futuristic-card-glow" />;
      <div className="relative z-10">;
        <h3 className="font-semibold text-gray-100">{title}</h3>;
        <p className="text-sm text-gray-300 mt-1">{description}</p>;
        {cta && <div className="mt-3">{cta}</div>}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
export default /**;
 * FuturisticCard - Function description;
 */
function FuturisticCard() {
  return (
    <div className="futuristic-card">;
      <div className="futuristic-card-glow" />;
      <div className="relative z-10">;
        <h3 className="font - semibold text-gray-100">{title}</h3>;
        <p className="text - sm text - gray-300 mt-1">{description}</p>;
        {cta && <div className="mt-3">{cta}</div>}
      </div>;
    </div>);
<<<<<<< HEAD
import React from "react;
type Props = {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from './react';
type Props = {
  title: string,
  description: string;

  cta?: React && React.ReactNode;
};

<<<<<<< HEAD

export default function FuturisticCard(): any ({ title, description, cta }: Props) {;
=======
function FuturisticCard() {}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (

  );
function FuturisticCard() {}
  return ("
    <div className="futuristic - card">;"
      <div className="futuristic - card - glow" />;"
      <div className="relative z - 10">;"
        <h3 className="font - semibold text - gray - 100">{title}</h3>;"
        <p className="text - sm text - gray - 300 mt - 1">{description}</p>;"
        {cta && <div className="mt - 3">{cta}</div>}
      </div>;
    </div>);
'"
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621

interface FuturisticCardProps {
  children: ReactNode;
  className?: string;
}
=======
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

type Props = {import React from './react';
>>>>>>> origin/chore/fix-lint-and-merge

type Props = {title: string,description: string;

export default /**;
 * FuturisticCard - Function description;
 */;
<<<<<<< HEAD
function FuturisticCard() {return (<div className=\"futuristic-card\" />;"
      <div className=\"futuristic-card-glow\" />;}"
      <div className=\"relative z-10\" />;}"
        <h3 className=\"font - semibold text-gray-100\" />{title}</h3>;"
        <p className=\"text - sm text - gray-300 mt-1\" />{description}</p>;"
        {cta && <div className=\"mt-3\" />{cta}</div>}
=======
<<<<<<< HEAD
      <div className=\futuristic-card-glow\ />;}"
      <div className=\"relative z-10\ />;}
        <h3 className=\"font - semibold text-gray-100\" />{title}</h3>;
        <p className=\text - sm text - gray-300 mt-1\" />{description}</p>;"
        {cta && <div className=\mt-3\ />{cta}</div>}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>;
    </div>)"
import React from "react";
type Props = {
  title: string;
  description: string;
  cta?: React.ReactNode;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default function FuturisticCard({ title, description, cta }: Props) {
  return (
    <div className="futuristic-card">
      <div className="futuristic-card-glow" />
      <div className="relative z-10">
        <h3 className="font-semibold text-gray-100">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">{description}</p>
        {cta && <div className="mt-3">{cta}</div>}
=======

<<<<<<< HEAD
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </div>
  )
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
function FuturisticCard() {return (<div className=\"futuristic-card\"    />;"
      <div className=\"futuristic-card-glow\"    />;}"
      <div className=\"relative z-10\"    />;}"
        <h3 className=\"font - semibold text-gray-100\"    />{title}</h3>;"
        <p className=\"text - sm text - gray-300 mt-1\"    />{description}</p>;"
        {cta && <div className=\"mt-3\"    />{cta}</div>}
      </div>;
    </div>)"
>>>>>>> origin/chore/fix-lint-and-merge
=======

    <div className="futuristic-card">
      <div className="futuristic-card-glow" />
      <div className="relative z-10">
        <h3 className="font-semibold text-gray-100">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">{description}</p>
        {cta && <div className="mt-3">{cta}</div>}
      </div>
    </div>;
    </div>
  );
}
}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
