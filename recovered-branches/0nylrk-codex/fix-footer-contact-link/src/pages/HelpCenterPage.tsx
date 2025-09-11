

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
    <>;
      <SEO;
        title="Help Center | Zion AI Marketplace";
        description="Find answers to common questions about using the Zion AI Marketplace platform. Browse help articles or contact our support team.";
        keywords="help center, support, FAQ, tutorial, guide, Zion AI Marketplace";
      />;
      <HelpCenter />;
}
;
=======
    </>;
  ),;
} export default function HelpCenterPage () {
  return (<> <SEO title="Help Center | Zion AI Marketplace" description="Find answers to common questions about using the Zion AI Marketplace platform. Browse help articles or contact our support team." keywords="help center, support, FAQ, tutorial, guide, Zion AI Marketplace" /> <HelpCenter /> </>) 
}
    </>;
  );
}
;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

    </>;
  );


}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
