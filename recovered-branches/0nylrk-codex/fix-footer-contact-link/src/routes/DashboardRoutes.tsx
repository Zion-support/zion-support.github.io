
const DashboardRoutes = () => {
const DashboardRoutes = () => {;
  return (
    <Routes>;
      {/* Dashboard Routes */}
      <Route

        path="/dashboard" 
        element={
          <ProtectedRoute>;
            <Dashboard />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/client-dashboard" 
        element={
          <ProtectedRoute>;
            <ClientDashboard />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/talent-dashboard" 

        element={
          <ProtectedRoute>;
            <TalentDashboard />;
          </ProtectedRoute>;
        }
          <ProtectedRoute>;
            <ProjectDetails />;
          </ProtectedRoute>;
        }
      />;
          <ProtectedRoute>;
            <ProjectRoom />;
          </ProtectedRoute>;
        }
      />;
          <ProtectedRoute>;
            <DeveloperPortal />;
          </ProtectedRoute>;
        }
          <ProtectedRoute>;
            <WalletPage />;
          </ProtectedRoute>;
        }
      />;
        element={
          <ProtectedRoute>;
            <ContractBuilder />;
          </ProtectedRoute>;
