import dynamic from 'next/dynamic';
const MainSidebar = dynamic(() => import('./MainSidebar'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD

=======
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
export default MainSidebar;
