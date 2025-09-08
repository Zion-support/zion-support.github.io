import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
function withAuth(Component) {
    const Wrapped = (props) => {
        const router = useRouter();
        const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
        useEffect(() => {
            if (!isLoggedIn) {
                router.push('/login?next=/community/new');
            }
        }, [isLoggedIn, router]);
        if (!isLoggedIn) {
            return null;
        }
        return <Component {...props}/>;
    };
    return Wrapped;
}
export default withAuth;
