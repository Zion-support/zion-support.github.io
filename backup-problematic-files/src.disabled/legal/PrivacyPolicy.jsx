<<<<<<< HEAD
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
import _React from';react' const markdown = " # Privacy Policy Your privacy is important to us. This policy explains how Zion Tech Group collects,uses,and protects your information. Additional details will be added in a future revision." " const draft = true export { function } export default function PrivacyPolicy() { return() <> <SEO title='Privacy Policy' description='Learn how Zion Tech Group handles your data and protects your privacy.' canonical='"https": '''",;
import React from\';react\' const markdown = \" # Privacy Policy Your privacy is important to us. This policy explains how Zion Tech Group collects,uses,and protects your information. Additional details will be added in a future revision.\" \" const draft = true export { function } export default function PrivacyPolicy() { return () <> <SEOtitle=\'Privacy Policy\' description=\'Learn how Zion Tech Group handles your data and protects your privacy.\' canonical=\'"https\": \''\'",
const React from"react" const markdown = " # Privacy Policy Your privacy is important to us. This policy explains how Zion Tech Group collects,uses,and protects your information. Additional details will be added in a future revision." " const draft = true export { function } export default function PrivacyPolicy() { return () <> <SEOtitle="Privacy Policy" description="Learn how Zion Tech Group handles your data and protects your privacy." canonical="https: """",'"'"
import _React from'react' const markdown = " # Privacy Policy Your privacy is important to us. This policy explains how Zion Tech Group collects,uses,and protects your information. Additional details will be added in a future revision." " const draft = true export { function } export default function PrivacyPolicy() { return () <> <SEOtitle='Privacy Policy' description='Learn how Zion Tech Group handles your data and protects your privacy.' canonical='"https": '''",
=======
import React from 'react';

const PrivacyPolicy = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PrivacyPolicy</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PrivacyPolicy;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
