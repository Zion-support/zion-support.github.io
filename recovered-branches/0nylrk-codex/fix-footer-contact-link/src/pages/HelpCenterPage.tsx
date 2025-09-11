



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
      <SEO
        title="Help Center | Zion AI Marketplace"
        description="Find answers to common questions about using the Zion AI Marketplace platform. Browse help articles or contact our support team."
        keywords="help center, support, FAQ, tutorial, guide, Zion AI Marketplace"

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
    <>;
      <SEO;
        title="Help Center | Zion AI Marketplace";
        description="Find answers to common questions about using the Zion AI Marketplace platform. Browse help articles or contact our support team.";
        keywords="help center, support, FAQ, tutorial, guide, Zion AI Marketplace";
      />;
      <HelpCenter />;

    </>;
  );


}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
