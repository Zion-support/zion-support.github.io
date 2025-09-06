
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
    "k6/Gatling-compatible test runner"
    "SLO-aware latency reports"
    "Regression baselines per endpoint"
    "CI checks and PR annotations"
    "Synthetic traffic for staging"
  ];
export default function ApiPerformanceTestingPage() {
  const features = [
    "k6/Gatling-compatible test runner",
    "SLO-aware latency reports",
    "Regression baselines per endpoint",
    "CI checks and PR annotations",
    "Synthetic traffic for staging",
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
