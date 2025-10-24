
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider></HelmetProvider></Helmet>
        <BrowserRouter>
          <div className="App">
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
