import { BrowserRouterasRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home Page from './page'




function App() {
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