import { BrowserRouter as Router, Routes, Route } from &apos;react-router-dom&apos;;
import { HelmetProvider } from &apos;react-helmet-async&apos;;
import HomePage from &apos;./page&apos;;

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>;
  );
}

export default App;
