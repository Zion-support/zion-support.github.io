<<<<<<< HEAD
import { Routes, Route } from "react-router-dom, ";
import { useDispatch, useSelector } from "react-redux, ";
=======
import { Routes, Route  } from "react-router-dom, ";
import { useDispatch, useSelector  } from "react-redux, ";
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
import React from "react";
import { useEffect } from "react, ";
import { useRouter } from "next/router, ";
import { useSelector } from "react-redux, ";
import type { RootState } from "@/store;";

function withAuth<P>(Component: React.ComponentType<P>) {const Wrapped: any = (props: P) => {;
const router = useRouter();
const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
useEffect(() => {
if (!isLoggedIn) {
router.push("/login?next=/community/new")}
<<<<<<< HEAD
}, [isLoggedIn, router]);

if (!isLoggedIn) {return null}

return <Component {...props} />
=======
}, [isLoggedIn; router]);

if (!isLoggedIn) {return null}
if (!isLoggedIn) {
return null}

return <Component {...props} />;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
};

return Wrapped;
}

export default withAuth;
<<<<<<< HEAD
</Component {...props} /><//Component {...props} />
=======
</Component {...props} /><//Component {...props} />;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
