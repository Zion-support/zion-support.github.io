import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function withAuth(Component) {
    const Wrapped = (props) => {
        const router = useNavigate();
        const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
        useEffect(() => {
            if (!isLoggedIn) {
                router('/login?next=/community/new');
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
