

<<<<<<< HEAD
<<<<<<< HEAD
export default function HelpCenterPage() {
  return (
    <>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React from "react";
import HelpCenter from "@/components/support/HelpCenter";
import {SEO} from "@/components/SEO";
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import HelpCenter from "@/components/support/HelpCenter";
import { SEO } from "@/components/SEO";
import HelpCenter from "@/components/support/HelpCenter",
import { SEO } from "@/components/SEO",
export default function HelpCenterPage() {
  return (
    <>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function HelpCenterPage() {;
  return (
    <>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <SEO
        title="Help Center | Zion AI Marketplace"
        description="Find answers to common questions about using the Zion AI Marketplace platform. Browse help articles or contact our support team."
        keywords="help center, support, FAQ, tutorial, guide, Zion AI Marketplace"
<<<<<<< HEAD
<<<<<<< HEAD
      />
      <HelpCenter />
    </>
  )
}
import React from "react",;
import HelpCenter from "@/components/support/HelpCenter",;
import { SEO } from "@/components/SEO";
export default function HelpCenterPage() {;
  return (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      />;
      <HelpCenter />;
    </>;
  );
}

<<<<<<< HEAD

=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from './react';
import HelpCenter from "@/components / support / HelpCenter";
import { SEO } from '@/components / SEO';
export default /**
 * HelpCenterPage - Function description
 */
function HelpCenterPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <>;
      <SEO;

import React from "react",;
import HelpCenter from "@/components/support/HelpCenter",;
import { SEO } from "@/components/SEO",;
;
export default function HelpCenterPage() {;
  return (;
    <>;
      <SEO ;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>;
      <SEO;
        title="Help Center | Zion AI Marketplace";
        description="Find answers to common questions about using the Zion AI Marketplace platform. Browse help articles or contact our support team.";
        keywords="help center, support, FAQ, tutorial, guide, Zion AI Marketplace";
      />;
      <HelpCenter />;
<<<<<<< HEAD
<<<<<<< HEAD

}
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    </>;
  ),;
} export default function HelpCenterPage () {
  return (<> <SEO title="Help Center | Zion AI Marketplace" description="Find answers to common questions about using the Zion AI Marketplace platform. Browse help articles or contact our support team." keywords="help center, support, FAQ, tutorial, guide, Zion AI Marketplace" /> <HelpCenter /> </>) 
}
    </>;
  );
}
;
<<<<<<< HEAD
}
;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    </>;
  );


}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
