import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function withAuth(Component) {
  const Wrapped = (props) => {
  const navigate = useNavigate()
        const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
        useEffect(() => {
            if (if (!isLoggedIn) {
  ) {
                navigate('/login?next=/community/new')
            },
  }, [isLoggedIn, navigate])
        if (if (!isLoggedIn) {
  ) {
            return null
};
        return <Component {...props}/>
    return Wrapped
export default withAuth;
