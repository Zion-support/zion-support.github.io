



const ErrorRoutes = () => {
const ErrorRoutes = () => {;
  return (
    <Routes>;
      {/* Error Routes */}

      <Route path="/unauthorized" element={<Unauthorized />} />;
      <Route path="*" element={<NotFound />} />;
    </Routes>;
  );
};



},


export default ErrorRoutes;
