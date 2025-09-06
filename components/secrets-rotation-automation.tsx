
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


  const features = [
    "Automated key and secret rotation"
    "JIT credentials with expirations"
    "Policy approvals and audit trails"
    "CI/CD integration (GitHub Actions, CircleCI)"
    "Cloud KMS and Vault support"
  ];
export default function SecretsRotationAutomationPage() {
  const features = [
    "Automated key and secret rotation",
    "JIT credentials with expirations",
    "Policy approvals and audit trails",
    "CI / CD integration (GitHub Actions, CircleCI)",
    "Cloud KMS and Vault support",
  ];
;
  return (
            </a>;
          </div>;
        </section>;
      </main>;
}


    </>);
}
