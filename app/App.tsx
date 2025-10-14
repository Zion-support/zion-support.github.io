import {Browser Routeras Router, Routes, Route, Helmet Provider }from 'react-router-dom'; import Home Page from './page'; function App ( ){return (<Helmet Provider> <Router> <div className="App"> <Routes> <Routepat h="/"element= {<Home Page /> }/> <Routepat h="*"element= {<Home Page /> }/> </Routes> 
          </div> </Router> </Helmet Provider> );
};

export default App;