import dynamic from 'next/dynamic';
const EnhancedErrorBoundary = dynamic(() => import('./EnhancedErrorBoundary'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD

=======
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
export default EnhancedErrorBoundary;
