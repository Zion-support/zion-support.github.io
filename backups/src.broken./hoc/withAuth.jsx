import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
function withAuth(_Component) {
    const Wrapped = (props) => {
        const router = useRouter();
        const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
        useEffect(() => {}
            if (!isLoggedIn) {}
';
'';
''';
                navigate('/login?next=/community/new')}
        }, [isLoggedIn, router]);
        if (!isLoggedIn) {
            return null;

        return <Component {...props}/>}
    return Wrapped;

export { withAuth };';
export default withAuth;''}}}''';
                router('/login?next=/community/new')}
        }, [isLoggedIn, router]);
        if(!isLoggedIn) {}
            return null}
        return <Component {...props}/>}
    return Wrapped}
export default withAuth;

export default withAuth;
export default withAuth;
export default withAuth;
export default withAuth;
export default withAuth;
export default withAuth;
export default withAuth;


export { Wrapped }
export { Wrapped }
export { Wrapped }
export { Wrapped }
export { Wrapped }