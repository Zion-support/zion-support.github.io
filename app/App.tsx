
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
