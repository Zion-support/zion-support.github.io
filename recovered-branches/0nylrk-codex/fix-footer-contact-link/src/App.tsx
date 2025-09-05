 import {
  {
  {
  AuthRoutes;
DashboardRoutes;
MarketplaceRoutes;
TalentRoutes;
AdminRoutes;
MobileAppRoutes;
ContentRoutes;
ErrorRoutes;
EnterpriseRoutes;
CommunityRoutes;
DeveloperRoutes 
}from './routes';
const Home = React.lazy ( () => import ('./pages/Home') );
const AIMatcherPage = React.lazy ( () => import ('./pages/AIMatcher') );
const TalentDirectory = React.lazy ( () => import ('./pages/TalentDirectory') );
const TalentsPage = React.lazy ( () => import ('./pages/TalentsPage') );
const ServicesPage = React.lazy ( () => import ('./pages/ServicesPage') );
const EquipmentPage = React.lazy ( () => import ('./pages/EquipmentPage') );
const Analytics = React.lazy ( () => import ('./pages/Analytics') );
const MobileLaunchPage = React.lazy ( () => import ('./pages/MobileLaunchPage') );
const CommunityPage = React.lazy ( () => import ('./pages/CommunityPage') );
const Categories = React.lazy ( () => import ('./pages/Categories') );
const Login = React.lazy ( () => import ('./pages/Login') );
const Signup = React.lazy ( () => import ('./pages/Signup') );
const ITOnsiteServicesPage = React.lazy ( () => import ('./pages/ITOnsiteServicesPage') );
const OpenAppRedirect = React.lazy ( () => import ('./pages/OpenAppRedirect') );
const ContactPage = React.lazy ( () => import ('./pages/Contact') );
const baseRoutes = [ {
  path: '/', element: <Home /> 
};
{
  path: '/match', element: <AIMatcherPage /> 
};
{
  path: '/login', element: <Login /> 
};
{
  path: '/signup', element: <Signup /> 
};
{
  path: '/talent', element: <TalentDirectory /> 
};
{
  path: '/talents', element: <TalentsPage /> 
};
{
  path: '/services', element: <ServicesPage /> 
};
{
  path: '/it-onsite-services', element: <ITOnsiteServicesPage /> 
};
{
  path: '/categories', element: <Categories /> 
};
{
  path: '/equipment', element: <EquipmentPage /> 
};
{
  path: '/analytics', element: <Analytics /> 
};
{
  path: '/mobile-launch', element: <MobileLaunchPage /> 
};
{
  path: '/open-app', element: <OpenAppRedirect /> 
};
{
  path: '/community', element: <CommunityPage /> 
};
{
  path: '/contact', element: <ContactPage /> 
}];
const App = () => {
  return (<WhitelabelProvider> <ThemeProvider defaultTheme="dark" > <Suspense fallback= {
  <div className="p-4 text-center" >Loading...</div> 
}> baseRoutes.map ( ({
  path, element 
}) => (<Route key= {
  path 
}path= {
  path 
}element= {
  element 
}/>) ) 
}</Routes> </Suspense> <Toaster /> <SonnerToaster position="top-right" /> </ThemeProvider> </WhitelabelProvider>) 
};
export default App;
