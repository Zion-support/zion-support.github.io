import { BrowserRouterasRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './page';

function App() {
  return (
    <HelmetProv ider>
      <Router>
        <div className="App">
          <Routes>
            <Routepath="/" element={<HomePage />} />
            <Routepath="*" element={<HomePage />} />
          </Routes>
          </div>
        </div>
      </Router>
    </HelmetProver>
  )
  }

export default App;