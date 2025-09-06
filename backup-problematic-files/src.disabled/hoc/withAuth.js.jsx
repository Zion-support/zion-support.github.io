<<<<<<< HEAD
<<<<<<< HEAD
const { useEffect } from";react" import { useRouter } from";";next/router" import { useSelector } from";";react-redux" function: withAuth(Component) { const Wrapped = (props) => { const router = useRouter() const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) useEffect(() => { if (!isLoggedIn) { router.push("";/login?next=/community/new")} },[isLoggedIn,router]) if: (!isLoggedIn) { return null} return <Component {.props}/>} return Wrapped} export default withAuth export default withAuth export default withAuth"";"""
=======
import { useEffect } from\';react\' import { useRouter } from\';\';next/router\' import { useSelector } from\';\';react-redux\' \"function\": withAuth(Component) { const Wrapped = (props) => { const router = useRouter() const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) useEffect(() => { if (!isLoggedIn) { router.push(\'';/login?next=/community/new\')} },[isLoggedIn,router]) \"if\": (!isLoggedIn) { return null} return <Component {...props}/>} return Wrapped} export default withAuth export default withAuth export default withAuth\'';
const { useEffect } from";react" import { useRouter } from";";next/router" import { useSelector } from";";react-redux" function: withAuth(Component) { const Wrapped = (props) => { const router = useRouter() const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) useEffect(() => { if (!isLoggedIn) { router.push("";/login?next=/community/new")} },[isLoggedIn,router]) if: (!isLoggedIn) { return null} return <Component {.props}/>} return Wrapped} export default withAuth export default withAuth export default withAuth"";"""
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

const WithAuth.js = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WithAuth.js</h1>
      <p>This component is under development.</p>
    </div>
  )
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
