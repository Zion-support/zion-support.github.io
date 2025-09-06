
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import HelpCenter from "@/components/support/HelpCenter";
import {SEO} from "@/components/SEO";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
<<<<<<< HEAD
import HelpCenter from "@/components/support/HelpCenter";
import { SEO } from "@/components/SEO";
=======
import HelpCenter from "@/components/support/HelpCenter",
import { SEO } from "@/components/SEO",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function HelpCenterPage() {
  return (
    <>
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function HelpCenterPage() {
  return (
    <>
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
}

import React from "react";
import HelpCenter from "@/components/support/HelpCenter";
import {SEO} from "@/components/SEO";
export default function HelpCenterPage() {;
  return (
    <>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> main
      <SEO
        title="Help Center | Zion AI Marketplace"
        description="Find answers to common questions about using the Zion AI Marketplace platform. Browse help articles or contact our support team."
        keywords="help center, support, FAQ, tutorial, guide, Zion AI Marketplace"
<<<<<<< HEAD
      />
      <HelpCenter />
    </>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from "react",;
import HelpCenter from "@/components/support/HelpCenter",;
import { SEO } from "@/components/SEO";
export default function HelpCenterPage() {;
  return (;
=======

      />;
      <HelpCenter />;
    </>;
  );
}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import React from './react';
import HelpCenter from "@/components / support / HelpCenter";
import { SEO } from '@/components / SEO';
export default /**
 * HelpCenterPage - Function description
 */
function HelpCenterPage() {
  return (
>>>>>>> main
    <>;
      <SEO;
        title="Help Center | Zion AI Marketplace";
        description="Find answers to common questions about using the Zion AI Marketplace platform. Browse help articles or contact our support team.";
        keywords="help center, support, FAQ, tutorial, guide, Zion AI Marketplace";
      />;
      <HelpCenter />;
<<<<<<< HEAD
    </>;
  );
<<<<<<< HEAD
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

    </>;
  );


}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
