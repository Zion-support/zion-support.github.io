 const NotFound = () => {
  const location = useLocation ();
useEffect ( () => {
  console.error ("404 Error: User attempted to access non-existent route:";
location.pathname) 
}, [location.pathname]);
};
export default NotFound;
