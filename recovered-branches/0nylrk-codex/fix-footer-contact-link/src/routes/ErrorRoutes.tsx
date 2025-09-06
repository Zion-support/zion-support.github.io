<<<<<<< HEAD
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import Unauthorized from '@/pages/Unauthorized';

const ErrorRoutes = () => {
  return (
    <Routes>
      {/* Error Routes */}
      <Route path='/unauthorized' element={<Unauthorized />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
=======
 const ErrorRoutes = () => {
  return (<Routes> {
  /* Error Routes */ 
}<Route path="/unauthorized" element= {
  <Unauthorized /> 
}/> <Route path="*" element= {
  <NotFound /> 
}/> 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};
export default ErrorRoutes;
