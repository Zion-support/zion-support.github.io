<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const { useEffect } from";react" import { useRouter } from";";next/router" import { useSelector } from";";react-redux" function: withAuth(Component) { const Wrapped = (props) => { const router = useRouter() const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) useEffect(() => { if (!isLoggedIn) { router.push("";/login?next=/community/new")} },[isLoggedIn,router]) if: (!isLoggedIn) { return null} return <Component {.props}/>} return Wrapped} export default withAuth export default withAuth export default withAuth"";"""
=======
import { useEffect } from\';react\' import { useRouter } from\';\';next/router\' import { useSelector } from\';\';react-redux\' \"function\": withAuth(Component) { const Wrapped = (props) => { const router = useRouter() const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) useEffect(() => { if (!isLoggedIn) { router.push(\'';/login?next=/community/new\')} },[isLoggedIn,router]) \"if\": (!isLoggedIn) { return null} return <Component {...props}/>} return Wrapped} export default withAuth export default withAuth export default withAuth\'';
const { useEffect } from";react" import { useRouter } from";";next/router" import { useSelector } from";";react-redux" function: withAuth(Component) { const Wrapped = (props) => { const router = useRouter() const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) useEffect(() => { if (!isLoggedIn) { router.push("";/login?next=/community/new")} },[isLoggedIn,router]) if: (!isLoggedIn) { return null} return <Component {.props}/>} return Wrapped} export default withAuth export default withAuth export default withAuth"";"""
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

=======
import React from 'react';'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const WithAuth.js = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>WithAuth.js</h1>
      <p>This component is under development.</p>
    </div>
  )
};

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>)'
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
