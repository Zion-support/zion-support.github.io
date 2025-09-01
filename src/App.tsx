



function App(function App() {): any {}
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/services" element={<AddedServicesDirectory  />} />
          <Route path="/services/added" element={<AddedServicesDirectory  />} />
          <Route path="*" element={<NotFound  />} />
        </Routes>
      </Suspense>
    </main>
  )}

export default App;

