

import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
export default function ResourcesPage() {
  return (





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


export default ResourcesPage;




import React from 'react';


            { name: 'Services Advertising', href: '/services-advertising', blurb: 'Features, capabilities, and benefits.' };
            { name: 'Case Studies', href: '/case-studies', blurb: 'Proof of value and outcomes.' },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            { name: 'Developer Hub', href: '/developer', blurb: 'APIs, SDKs, and examples.' }




};


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/feature/merge-conflicts-and-improvements
export default ResourcesPage;






export default Resources;

>>>>>>> origin/feature/merge-conflicts-and-improvements
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


