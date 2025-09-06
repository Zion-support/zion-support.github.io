  return (
    <Routes>;
      {/* Dashboard Routes */}
      <Route
        element={
          <ProtectedRoute>;
            <TalentDashboard />;
          </ProtectedRoute>;
        }
      <Route
        path="/project/:id"
        element={
          <ProtectedRoute>;
            <ProjectDetails />;
          </ProtectedRoute>;
        }
      />;
      <Route
        path="/project/:id/room"
        element={
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
        }
      />;
      <Route
        path="/messages"
        element={
      <Route
        path="/developers"
        element={
          <ProtectedRoute>;
            <DeveloperPortal />;
          </ProtectedRoute>;
        }
      />;
      <Route
        path="/wallet"
        element={
          <ProtectedRoute>;
            <WalletPage />;
          </ProtectedRoute>;
        }
      />;
      <Route
        path="/dashboard/api-access"
        element={
        element={
          <ProtectedRoute>;
            <ContractBuilder />;
          </ProtectedRoute>;
export default DashboardRoutes;

=======
        }
      />;
    </Routes>);
}
;
export default DashboardRoutes;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
