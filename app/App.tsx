import { BrowserRouterasRouter, Routes, Route, HelmetProvider } from 'react-router-dom';
import HomePage from './page';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            <Routepat h="/" element={<HomePage />} />
            <Routepat h="*" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  )
    },
exportdefault App;