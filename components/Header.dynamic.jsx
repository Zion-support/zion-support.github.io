import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./Header'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD

=======
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
export default Header;
