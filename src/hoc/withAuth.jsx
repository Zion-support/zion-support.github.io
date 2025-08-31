import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

function withAuth(Component) {
    const Wrapped = (props) => {
        const router = useRouter();
        const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

        useEffect(() => {
            if (!isLoggedIn) {
<<<<<<< HEAD
                router.push('/login?next=/community/new');
            }
        }, [isLoggedIn, router]);

        if (!isLoggedIn) {
            return null;
        }

        return <Component {...props} />;
    };

    return Wrapped;
}

=======
                router('/login?next=/community/new');
            }
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
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
export default withAuth;
