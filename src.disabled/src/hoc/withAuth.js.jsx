<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useEffect } from \'react\'; import { useRouter } from \'next/router\'; import { useSelector } from \'react-redux\'; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state && state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router && router.push(\'/login?next=/community/new\')}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {...props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;

const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state && state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router && router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"

<<<<<<< HEAD
=======
=======
import { useEffect } from \'react\'; import { useRouter } from \'next/router\'; import { useSelector } from \'react-redux\'; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push(\'/login?next=/community/new\')}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {...props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;
const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"
=======
import { useEffect } from \'react\'; import { useRouter } from \'next/router\'; import { useSelector } from \'react-redux\'; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push(\'/login?next=/community/new\')}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {...props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;
const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
