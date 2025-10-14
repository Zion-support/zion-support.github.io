import {Browser Routeras Router, Routes, Route, Helmet Provider }from 'react-router-dom'; import Home Page from './page'; function App ( ){return (<Helmet Provider> <Router> <div className="App"> <Routes> <Routepat h="/"element= {<Home Page /> }/> <Routepat h="*"element= {<Home Page /> }/> </Routes> 
          </div> </Router> </Helmet Provider> );
};

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
    </HelmetProvider>
  );
}

export default App;
