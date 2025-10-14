import { BrowserRouterasRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home Page from './page'

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3055
function App() {
=======
function App() { {
  return (
    <div>
    <Helmet Provider>
      <Router>
        <div className="App">
        
          <Routes>
            <Route path="/" element={<Home Page />} />
            <Route path="*" element={<Home Page />} />
          </Routes>
        </div>
      </Router>
    </Helmet Provider>
  )
  }
  )
export default App;;
