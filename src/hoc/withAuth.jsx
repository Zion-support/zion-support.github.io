import { useEffect } from 'react';
<<<<<<< HEAD
;
import { useSelector } from 'react-redux';
function withAuth(Component) {
    const Wrapped = (props) => {
        const router = useRouter();
        const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
        useEffect(() => {
            if (!isLoggedIn) {
<<<<<<< HEAD
                navigate('/login?next=/community/new');

=======
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function withAuth(Component) {
    const Wrapped = (props) => {
        const router = useNavigate();
        const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
        useEffect(() => {
            if (!isLoggedIn) {
                navigate('/login?next=/community/new');
            }
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
        }, [isLoggedIn, router]);
        if (!isLoggedIn) {
            return null;

        return <Component {...props}/>;
    };
    return Wrapped;

export default withAuth;
}}}
=======
<<<<<<< HEAD
                router.push('/login?next=/community/new')}
=======
                router('/login?next=/community/new');
            }
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
        }, [isLoggedIn, router]);
        if (!isLoggedIn) {
            return null}
        return <Component {...props}/>};
    return Wrapped}
export default withAuth;

export default withAuth;
export default withAuth;
export default withAuth;
export default withAuth;
export default withAuth;
export default withAuth;
export default withAuth;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
