import dynamic from 'next/dynamic';
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
const EnhancedPerformanceMonitor = dynamic(
  () => import('./EnhancedPerformanceMonitor'),
  {
    loading: () => <p>Loading...</p>,
  }
);
<<<<<<< HEAD

=======
export default EnhancedPerformanceMonitor;
