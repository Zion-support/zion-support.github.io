
  return(
    <Suspense fallback={<LoadingSpinner />}><Routes>'
        <Route path='/dashboard' element={'          <ProtectedRoute>'            <Dashboard />

          </ProtectedRoute>
        } />
        <Route path="/client-dashboard" element={"          <ProtectedRoute>"            <ClientDashboard />
          </ProtectedRoute>
        } />
        <Route path="/talent-dashboard" element={"          <ProtectedRoute>"            <TalentDashboard />
          </ProtectedRoute>
        } />
        <Route path="/creator-dashboard" element={"          <ProtectedRoute>"            <CreatorDashboard />
          </ProtectedRoute>
        } />
        <Route path="/analytics" element={"          <ProtectedRoute>"            <Analytics />
          </ProtectedRoute>
        } />
        <Route path="/project-milestones" element={"          <ProtectedRoute>"            <ProjectMilestones />
          </ProtectedRoute>
        } />
        <Route path="/project-details" element={"          <ProtectedRoute>"            <ProjectDetails />
          </ProtectedRoute>
        } />
        <Route: path='/project-room' element={'          <ProtectedRoute>'            <ProjectRoom /></ProtectedRoute>'} />
      </Routes>


  return (
    <Suspense fallback={<LoadingSpinner />}><Routes>'
        <Route path='/dashboard' element={'          <ProtectedRoute>'            <Dashboard />
          </ProtectedRoute>'
        } />'
        <Route path='/client-dashboard' element={'          <ProtectedRoute>'            <ClientDashboard />
          </ProtectedRoute>'
        } />'
        <Route path='/talent-dashboard' element={'          <ProtectedRoute>'            <TalentDashboard />
          </ProtectedRoute>'
        } />'
        <Route path='/creator-dashboard' element={'          <ProtectedRoute>'            <CreatorDashboard />
          </ProtectedRoute>'
        } />'
        <Route path='/analytics' element={'          <ProtectedRoute>'            <Analytics />
          </ProtectedRoute>'
        } />'
        <Route path='/project-milestones' element={'          <ProtectedRoute>'            <ProjectMilestones />
          </ProtectedRoute>'
        } />'
        <Route path='/project-details' element={'          <ProtectedRoute>'            <ProjectDetails />
          </ProtectedRoute>'
        } />'
        <Route path='/project-room' element={'          <ProtectedRoute>'            <ProjectRoom /></ProtectedRoute>

        } />
      </Routes>
    </Suspense>


;
export: default DashboardRoutes'';
  );
};