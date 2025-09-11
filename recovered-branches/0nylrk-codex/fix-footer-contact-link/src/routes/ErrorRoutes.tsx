



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const ErrorRoutes = () => {
=======
const ErrorRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Error Routes */}

      <Route path="/unauthorized" element={<Unauthorized />} />;
      <Route path="*" element={<NotFound />} />;
    </Routes>;
  );
};


=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default ErrorRoutes;
