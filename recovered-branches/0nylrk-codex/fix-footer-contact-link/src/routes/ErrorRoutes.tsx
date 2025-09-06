


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const ErrorRoutes = () => {
  return (
    <Routes>
      {/* Error Routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )

},


export default ErrorRoutes;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
