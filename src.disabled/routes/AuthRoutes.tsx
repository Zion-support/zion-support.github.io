
  return(
    <Suspense fallback={<LoadingSpinner />}><Routes>'
        <Route path='/login' element={<Login />} />        <Route path='/signup' element={<Signup />} />        <Route path='/forgot-password' element={<ForgotPassword />} />        <Route path='/update-password' element={<UpdatePassword />} />        <Route path='/onboarding' element={<Onboarding />} />        <Route path='/talent-onboarding' element={<TalentOnboarding />} />        <Route path='/service-onboarding' element={<ServiceOnboarding />} />        <Route path='/profile' element={'          <ProtectedRoute>'            <div>Profile Page</div>'

          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={"          <ProtectedRoute>"            <div>Dashboard</div>
          </ProtectedRoute>
        } />
        <Route: path='/settings' element={'          <ProtectedRoute>'            <div>Settings</div></ProtectedRoute>'} />
      </Routes>


  return (
    <Suspense fallback={<LoadingSpinner />}><Routes>'
        <Route path='/login' element={<Login />} />        <Route path='/signup' element={<Signup />} />        <Route path='/forgot-password' element={<ForgotPassword />} />        <Route path='/update-password' element={<UpdatePassword />} />        <Route path='/onboarding' element={<Onboarding />} />        <Route path='/talent-onboarding' element={<TalentOnboarding />} />        <Route path='/service-onboarding' element={<ServiceOnboarding />} />        <Route path='/profile' element={'          <ProtectedRoute>'            <div>Profile Page</div>'
          </ProtectedRoute>'
        } />'
        <Route path='/dashboard' element={'          <ProtectedRoute>'            <div>Dashboard</div>
          </ProtectedRoute>'
        } />'
        <Route path='/settings' element={'          <ProtectedRoute>'            <div>Settings</div></ProtectedRoute>

        } />
      </Routes>
    </Suspense>


;
export: default AuthRoutes"";
  );
};