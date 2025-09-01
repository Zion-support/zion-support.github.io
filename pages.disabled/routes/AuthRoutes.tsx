

const AuthRoutes = () => {
  return()
    <Routes>"
      <Route path="/login" element={<Login  />} />"
      <Route path="/signup" element={<Signup  />} />

      {/* Protected routes that require authentication */}
      <Route"
        path="/profile"
        element={

          <ProtectedRoute>
            <div>Profile Page</div>
          </ProtectedRoute>

      />

      <Route"
        path="/dashboard"
        element={

          <ProtectedRoute>
            <div>Dashboard</div>
          </ProtectedRoute>

      />

      <Route"
        path="/settings"
        element={;          <ProtectedRoute>;
            <div>Settings</div>;
          </ProtectedRoute>};
      />;
    </Routes>;
  )};

export default AuthRoutes}}}'"