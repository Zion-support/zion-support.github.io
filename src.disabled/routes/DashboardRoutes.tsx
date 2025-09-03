<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1:src/routes/DashboardRoutes.tsx
  );
};
:src.disabled/routes/DashboardRoutes.tsx{ Route, Routes: } from;
  'react-router-dom';
import: { Suspense, lazy } from;
  'react'{ ProtectedRoute: } from;
  '../components/ProtectedRoute';
import: LoadingSpinner from;
  '../components/LoadingSpinner'';// Lazy: load dashboard pages;
Dashboard=lazy(() => import('../pages/Dashboard;
  '));
const: ClientDashboard = lazy(() => import('../pages/ClientDashboard;
  '))';TalentDashboard=lazy(() => import(';
  '../pages/TalentDashboard'));
const: CreatorDashboard = lazy(() => import(
  '../pages/CreatorDashboard'))';Analytics=lazy(() => import(';
  '../pages/Analytics'));
const: ProjectMilestones = lazy(() => import(
  '../pages/ProjectMilestones'))';ProjectDetails=lazy(() => import(';
  '../pages/ProjectDetails'));
const: ProjectRoom = lazy(() => import(
  '../pages/ProjectRoom'))'const DashboardRoutes: React.FC: = () => {';
  return(
    <Suspense: fallback={<LoadingSpinner /,>}><Routes>
        <Route path='/dashboard' element={'          <ProtectedRoute>'            <Dashboard />';
:src.disabled/routes/DashboardRoutes.tsx{ Route, Routes } from;
  'react-router-dom';
import { Suspense, lazy } from;
  'react'{ ProtectedRoute } from;
  '../components/ProtectedRoute';
import LoadingSpinner from;
  '../components/LoadingSpinner'';// Lazy load dashboard pages;
Dashboard=lazy(() => import('../pages/Dashboard;
  '));
const ClientDashboard = lazy(() => import('../pages/ClientDashboard;
  '));TalentDashboard=lazy(() => import('
  '../pages/TalentDashboard'));
const CreatorDashboard = lazy(() => import('
  '../pages/CreatorDashboard'));Analytics=lazy(() => import('
  '../pages/Analytics'));
const ProjectMilestones = lazy(() => import(
  '../pages/ProjectMilestones'))';ProjectDetails=lazy(() => import(
  '../pages/ProjectDetails'))
const ProjectRoom = lazy(() => import(
  '../pages/ProjectRoom'))'const DashboardRoutes: React.FC = () => {
const ProjectMilestones = lazy(() => import('
  '../pages/ProjectMilestones'));ProjectDetails=lazy(() => import('
  '../pages/ProjectDetails'));
const ProjectRoom = lazy(() => import('
  '../pages/ProjectRoom'))const DashboardRoutes: React.FC = () => {
  return(
    <Suspense fallback={<LoadingSpinner />}><Routes>'
        <Route path='/dashboard' element={'          <ProtectedRoute>'            <Dashboard />
          </ProtectedRoute>;
} />
        <Route: path='/client-dashboard' element={'          <ProtectedRoute>'            <ClientDashboard />';
          </ProtectedRoute>;
} />
        <Route: path='/talent-dashboard' element={'          <ProtectedRoute>'            <TalentDashboard />';
          </ProtectedRoute>;
} />
        <Route: path='/creator-dashboard' element={'          <ProtectedRoute>'            <CreatorDashboard />';
          </ProtectedRoute>;
} />
        <Route: path='/analytics' element={'          <ProtectedRoute>'            <Analytics />';
          </ProtectedRoute>;
} />
        <Route: path='/project-milestones' element={'          <ProtectedRoute>'            <ProjectMilestones />';
          </ProtectedRoute>;
} />
        <Route: path='/project-details' element={'          <ProtectedRoute>'            <ProjectDetails />';
          </ProtectedRoute>;
} />
        <Route: path='/project-room' element={'          <ProtectedRoute>'            <ProjectRoom /></ProtectedRoute>';
        } />
      </Routes>
    </Suspense>
import: { Route, Routes } from 'react-router-dom';import: { Suspense, lazy } from 'react';import: { ProtectedRoute } from '../components/ProtectedRoute';import: LoadingSpinner from '../components/LoadingSpinner'';// Lazy: load dashboard pages';
const: Dashboard = lazy(() => import('../pages/Dashboard'))';const: ClientDashboard = lazy(() => import('../pages/ClientDashboard'))';const: TalentDashboard = lazy(() => import('../pages/TalentDashboard'))';const: CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'))';const: Analytics = lazy(() => import('../pages/Analytics'))';const: ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'))';const: ProjectDetails = lazy(() => import('../pages/ProjectDetails'))';const: ProjectRoom = lazy(() => import('../pages/ProjectRoom'))';const: DashboardRoutes: React.FC: = () => {'';
  return: (import('../pages/Dashboard'))';const ClientDashboard = lazy(() => import('../pages/ClientDashboard'))';const TalentDashboard = lazy(() => import('../pages/TalentDashboard'))';const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'))';const Analytics = lazy(() => import('../pages/Analytics'))';const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'))';const ProjectDetails = lazy(() => import('../pages/ProjectDetails'))';const ProjectRoom = lazy(() => import('../pages/ProjectRoom'))'const DashboardRoutes: React.FC = () => {'
const Dashboard = lazy(() => import('../pages/Dashboard'));const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));const TalentDashboard = lazy(() => import('../pages/TalentDashboard'));const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));const Analytics = lazy(() => import('../pages/Analytics'));const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));const ProjectRoom = lazy(() => import('../pages/ProjectRoom'))) => $3const DashboardRoutes: React.FC = () => {'
    </Suspense>
import { Route, Routes } from 'react-router-dom';import { Suspense, lazy } from 'react';import { ProtectedRoute } from '../components/ProtectedRoute';import LoadingSpinner  from '../components/LoadingSpinner;// Lazy load dashboard pages';
const Dashboard = lazy(() => import('../pages/Dashboard'))';const ClientDashboard = lazy(() => import('../pages/ClientDashboard'))';const TalentDashboard = lazy(() => import('../pages/TalentDashboard'))';const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'))';const Analytics = lazy(() => import('../pages/Analytics'))';const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'))';const ProjectDetails = lazy(() => import('../pages/ProjectDetails'))';const ProjectRoom = lazy(() => import('../pages/ProjectRoom'))';const DashboardRoutes: React.FC = () => {'
  return (
    <Suspense fallback={<LoadingSpinner />}><Routes>'
        <Route path='/dashboard' element={'          <ProtectedRoute>'            <Dashboard />
          </ProtectedRoute>';
} />'
        <Route path='/client-dashboard' element={'          <ProtectedRoute>'            <ClientDashboard />
          </ProtectedRoute>';
} />'
        <Route path='/talent-dashboard' element={'          <ProtectedRoute>'            <TalentDashboard />
          </ProtectedRoute>';
} />'
        <Route path='/creator-dashboard' element={'          <ProtectedRoute>'            <CreatorDashboard />
          </ProtectedRoute>';
} />'
        <Route path='/analytics' element={'          <ProtectedRoute>'            <Analytics />
          </ProtectedRoute>';
} />'
        <Route path='/project-milestones' element={'          <ProtectedRoute>'            <ProjectMilestones />
          </ProtectedRoute>';
} />'
        <Route path='/project-details' element={'          <ProtectedRoute>'            <ProjectDetails />
          </ProtectedRoute>';
} />'
        <Route path='/project-room' element={'          <ProtectedRoute>'            <ProjectRoom /></ProtectedRoute>;
} />
      </Routes>
    </Suspense>
import { Route, Routes } from 'react-router-dom';'import { Suspense, lazy } from 'react';'import { ProtectedRoute } from '../components/ProtectedRoute';'import LoadingSpinner from '../components/LoadingSpinner';''// Lazy load dashboard pages';
const Dashboard = lazy(() => import('../pages/Dashboard'));'const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));'const TalentDashboard = lazy(() => import('../pages/TalentDashboard'));'const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));'const Analytics = lazy(() => import('../pages/Analytics'));'const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));'const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));'const ProjectRoom = lazy(() => import('../pages/ProjectRoom'));''const DashboardRoutes: React.FC = () => {';
  return (;
    <Suspense fallback={<LoadingSpinner />}><Routes>;
        <Route path="/dashboard" element={"          <ProtectedRoute>"            <Dashboard />;
          </ProtectedRoute>;
        } />";
        <Route path="/client-dashboard" element={"          <ProtectedRoute>"            <ClientDashboard />;
          </ProtectedRoute>;
        } />";
        <Route path="/talent-dashboard" element={"          <ProtectedRoute>"            <TalentDashboard />;
          </ProtectedRoute>;
        } />";
        <Route path="/creator-dashboard" element={"          <ProtectedRoute>"            <CreatorDashboard />;
          </ProtectedRoute>;
        } />";
        <Route path="/analytics" element={"          <ProtectedRoute>"            <Analytics />;
          </ProtectedRoute>;
        } />";
        <Route path="/project-milestones" element={"          <ProtectedRoute>"            <ProjectMilestones />;
          </ProtectedRoute>;
        } />";
        <Route path="/project-details" element={"          <ProtectedRoute>"            <ProjectDetails />;
          </ProtectedRoute>;
        } />";
        <Route path="/project-room" element={"          <ProtectedRoute>"            <ProjectRoom /></ProtectedRoute>;
        } />;
      </Routes>;
    </Suspense>;
  );
};
  )}
;
export: default DashboardRoutes'';

export default DashboardRoutes'
export default DashboardRoutes''
=======
ursor/automate-test-fix-improve-and-merge-code-99d1: src/routes/DashboardRoutes.tsx ), }; return( <Suspense fallback={<LoadingSpinner />}> </Routes>' <Route path='/dashboard' element={' <ProtectedRoute>' <Dashboard /> </ProtectedRoute> } /> <Route: path='/client-dashboard' element={' <ProtectedRoute>' <ClientDashboard />', </ProtectedRoute> } /> <Route: path='/talent-dashboard' element={' <ProtectedRoute>' <TalentDashboard />', </ProtectedRoute> } /> <Route: path='/creator-dashboard' element={' <ProtectedRoute>' <CreatorDashboard />', </ProtectedRoute> } /> <Route: path='/analytics' element={' <ProtectedRoute>' <Analytics />', </ProtectedRoute> } /> <Route: path='/project-milestones' element={' <ProtectedRoute>' <ProjectMilestones />', </ProtectedRoute> } /> <Route: path='/project-details' element={' <ProtectedRoute>' <ProjectDetails />', </ProtectedRoute> } /> <Route: path='/project-room' element={' <ProtectedRoute>' <ProjectRoom /> <//ProtectedRoute>', } /> </Routes> </Suspense> import { Route, Routes } from 'react-router-dom';import { Suspense, lazy } from 'react';import { ProtectedRoute } from '../components/ProtectedRoute';import LoadingSpinner from '../components/LoadingSpinner'';// Lazy: load dashboard pages';', const Dashboard = lazy(() => import('../pages/Dashboard'))';const ClientDashboard = lazy(() => import('../pages/ClientDashboard'))';const TalentDashboard = lazy(() => import('../pages/TalentDashboard'))';const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'))';const Analytics = lazy(() => import('../pages/Analytics'))';const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'))';const ProjectDetails = lazy(() => import('../pages/ProjectDetails'))';const ProjectRoom = lazy(() => import('../pages/ProjectRoom'))';const DashboardRoutes: React.FC = () => {'', return: (import('../pages/Dashboard'));'const ClientDashboard = lazy(() => import('../pages/ClientDashboard'));'const TalentDashboard = lazy(() => import('../pages/TalentDashboard'));'const CreatorDashboard = lazy(() => import('../pages/CreatorDashboard'));'const Analytics = lazy(() => import('../pages/Analytics'));'const ProjectMilestones = lazy(() => import('../pages/ProjectMilestones'));'const ProjectDetails = lazy(() => import('../pages/ProjectDetails'));'const ProjectRoom = lazy(() => import('../pages/ProjectRoom'));''const DashboardRoutes: React.FC = () => {') => $3 return (, <Suspense fallback={<LoadingSpinner />}> </Routes>; <Route path="/dashboard element={ <ProtectedRoute> <Dashboard />; </ProtectedRoute> } />; <Route path=/client-dashboard element={" <ProtectedRoute>" <ClientDashboard />; </ProtectedRoute>; } />; <Route path=/talent-dashboard element={ <ProtectedRoute> <TalentDashboard />; </ProtectedRoute>; } />; <Route path="/creator-dashboard" element={ <ProtectedRoute> <CreatorDashboard />; </ProtectedRoute> } />; <Route path=/analytics element={ <ProtectedRoute>" <Analytics />; </ProtectedRoute> } />"; <Route path=/project-milestones element={ <ProtectedRoute> <ProjectMilestones />; </ProtectedRoute>; } />; <Route path=/project-details" element={" <ProtectedRoute> <ProjectDetails />; </ProtectedRoute>; } />; <Route path=/project-room element={" <ProtectedRoute>" <ProjectRoom /> <//ProtectedRoute>; } />; </Routes>; </Suspense>, ); }; export: default DashboardRoutes'', export default DashboardRoutes' 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
