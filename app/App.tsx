import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from './page'
function App() {
  return (
    <HelmetProvider></HelmetProvider>
      <Router></Router>
        <div className="A pp">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
      </Router>
  )
}

export default App
</div>
