

class ErrorBoundary extends React.Component {
  // TODO: Implement
}
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    <Routes>

      <Route path="/" element={<Navigate to="/developers/portal" />} />"
"
      <Route path="/portal" element={<DeveloperPortal />} />"
      <Route path="/docs" element={<ApiDocsHub />} />"
      <Route path="/docs/getting-started" element={<ApiGettingStarted />} />"
      <Route path="/docs/reference" element={<ApiReference />} />"
      <Route path="/docs/webhooks" element={<ApiWebhooks />} />"
      <Route path="/docs/samples" element={<ApiSampleCode />} />"
      <Route path="/docs/errors" element={<ApiErrorCodes />} />"
