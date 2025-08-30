import { useEffect } from 'react';
;
import { useSelector } from 'react-redux';
function withAuth(Component) {
    const Wrapped = (props) => {
        const router = useRouter();
        const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
        useEffect(() => {
            if (!isLoggedIn) {
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