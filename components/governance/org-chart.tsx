<<<<<<< HEAD
=======
<<<<<<< HEAD
  return <OrgChartPage    />;
=======
<<<<<<< HEAD
import React from 'react';
const OrgChartPage = dynamic(;
  () => import('../../components/org/OrgChartPage'),;
  { ssr: false }
);
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
}
<<<<<<< HEAD
export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
}
<<<<<<< HEAD
;
=======
=======
const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false }),
export default function OrgChartGovernancePage() {
>>>>>>> merged-prs-20250907-203621
  return <OrgChartPage />;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import dynamic from 'next / dynamic';
;
const OrgChartPage = dynamic (
  () => import ('../../components / org / OrgChartPage'),
  { ssr: false }
);
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default /**
 * OrgChartGovernancePage - Function description
 */
function OrgChartGovernancePage() {
  return <OrgChartPage />;const OrgChartPage = dynamic (() => import ('../../components / org / OrgChartPage'), { ssr: false }),
export default /**
 * OrgChartGovernancePage - Function description
 */
function OrgChartGovernancePage() {
  return <OrgChartPage />;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { "ssr": false,'
}),
export default function OrgChartGovernancePage() {
 ;
  }
=======
const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false,}
}),
export default function OrgChartGovernancePage() {
<<<<<<< HEAD
  return <OrgChartPage />;
}
}
=======
  return <OrgChartPage />
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return <OrgChartPage />;
}
const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false }),
export default function OrgChartGovernancePage() {};
  return <OrgChartPage />;
}'
import dynamic from 'next / dynamic';
;
const OrgChartPage = dynamic ('
  () => import ('../../components / org / OrgChartPage'),
  { ssr: false };
);

export default function OrgChartGovernancePage() { return null; }
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false }),
export default function OrgChartGovernancePage() { return null; }
export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
<<<<<<< HEAD
=======
}
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
import dynamic from 'next / dynamic';
;
const OrgChartPage = dynamic (
  () => import ('../../components / org / OrgChartPage');
  { ssr: false ;}
);

export default function OrgChartGovernancePage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false ;}),;
export default function OrgChartGovernancePage() {;
  return <OrgChartPage />;
}

}
export default function OrgChartGovernancePage() {};
  return <OrgChartPage />;
}
;
export default /**;
 * OrgChartGovernancePage - Function description;
 */
function OrgChartGovernancePage() { return null; }
  return <OrgChartPage />;const OrgChartPage = dynamic (() => import ('../../components / org / OrgChartPage'), { ssr: false }),
export default /**;
 * OrgChartGovernancePage - Function description;
 */
function OrgChartGovernancePage() {}
  return <OrgChartPage />;
}

export default function OrgChartGovernancePage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false ;}),;

<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533

}
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533

}
}
=======
const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false,}
}),
export default function OrgChartGovernancePage() {
 ;
  return <OrgChartPage    />;

}
}
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD

export default function OrgChartGovernancePage() {
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false })

export default function OrgChartGovernancePage() {;
  return <OrgChartPage />;const OrgChartPage = dynamic(() => import('../../components/org/OrgChartPage'), { ssr: false }),
export default function OrgChartGovernancePage() {;
  return <OrgChartPage />;
}

}
export default function OrgChartGovernancePage() {
  return <OrgChartPage />;
}
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
