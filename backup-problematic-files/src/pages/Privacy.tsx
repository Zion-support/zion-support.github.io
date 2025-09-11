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
import React from 'react'; const Privacy = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Privacy Policy </h1> <p className="text-xl text-gray-600"> How we collect,use,and protect your information. </p> </div> <div className="max-w-3xl mx-auto prose prose-lg"> <h2>Information We Collect</h2> <p>We collect information you provide directly to us,such as when you create an account,use our services,or contact us for support.</p> <h2>How We Use Your Information</h2> <p>We use the information we collect to provide,maintain,and improve our services,communicate with you,and ensure the security of our platform.</p> <h2>Information Sharing</h2> <p>We do not sell,trade,or otherwise transfer your personal information to third parties without your consent,except as described in this policy.</p> <h2>Data Security</h2> <p>We implement appropriate security measures to protect your personal information against unauthorized access,alteration,disclosure,or destruction.</p> </div> </div> </div> )}; export default Privacy;
import React from 'react'; const Privacy = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Privacy Policy </h1> <p className="text - xl text - gray - 600"> How we collect, use, and protect your information. </p> </div> <div className="max - w-3xl mx - auto prose prose - lg"> <h2 > Information We Collect</h2> <p > We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p> <h2 > How We Use Your Information</h2> <p > We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure the security of our platform.</p> <h2 > Information Sharing</h2> <p > We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p> <h2 > Data Security</h2> <p > We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p> </div> </div> </div> )} export default Privacy;