import dynamic from 'next/dynamic';
const EnhancedFooter = dynamic(() => import('./EnhancedFooter'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD

=======
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
export default EnhancedFooter;
