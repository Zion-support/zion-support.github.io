<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useEffect } from \'react\'; import { useRouter } from \'next/router\'; import { useSelector } from \'react-redux\'; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state && state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router && router.push(\'/login?next=/community/new\')}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {...props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"
'
import { useEffect } from \'react\'; import { useRouter } from \'next/router\'; import { useSelector } from \'react-redux\'; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push(\'/login?next=/community/new\')}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {...props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;'"
const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"
import { useEffect } from \'react\'; import { useRouter } from \'next/router\'; import { useSelector } from \'react-redux\'; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push(\'/login?next=/community/new\')}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {...props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;
const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
