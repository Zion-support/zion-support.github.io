import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './src/index.css';
import UltimateTechBreakthrough2026 from './src/pages/UltimateTechBreakthrough2026';

export default function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="p-6">
              <h1 className="text-2xl font-bold">Zion Tech Group</h1>
              <p className="text-gray-600 mb-4">Home</p>
              <Link className="text-blue-600 underline" to="/pages/UltimateTechBreakthrough2026">Go to UltimateTechBreakthrough2026</Link>
            </div>
          }
        />
        <Route path="/pages/UltimateTechBreakthrough2026" element={<UltimateTechBreakthrough2026 />} />
      </Routes>
    </Router>
  );
}

