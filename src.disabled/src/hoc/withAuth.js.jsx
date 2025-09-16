<<<<<<< HEAD
const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"
import { useEffect } from \'react\'; import { useRouter } from \'next/router\'; import { useSelector } from \'react-redux\'; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push(\'/login?next=/community/new\')}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {...props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;
const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"
import { useEffect } from \'react\'; import { useRouter } from \'next/router\'; import { useSelector } from \'react-redux\'; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push(\'/login?next=/community/new\')}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {...props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;
const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"
<<<<<<< HEAD
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
import { useEffect } from \'react\'; import { useRouter } from \'next/router\'; import { useSelector } from \'react-redux\'; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state && state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router && router.push(\'/login?next=/community/new\')}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {...props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;

const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state && state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router && router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"

=======
import { useEffect } from \'react\'; import { useRouter } from \'next/router\'; import { useSelector } from \'react-redux\'; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push(\'/login?next=/community/new\')}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {...props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;
const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"
=======
import { useEffect } from \'react\'; import { useRouter } from \'next/router\'; import { useSelector } from \'react-redux\'; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push(\'/login?next=/community/new\')}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {...props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;
const { useEffect } from "react"; import { useRouter } from "next/router"; import { useSelector } from "react-redux"; function withAuth(Component) {; const Wrapped = (props) => {; const router = useRouter(); const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); useEffect(() => {; if(!isLoggedIn) {; router.push("/login?next=/community/new")}},[isLoggedIn,router]); if(!isLoggedIn) {; return null}; return <Component {.props}/>}; return Wrapped}; export default withAuth; export default withAuth; export default withAuth;''"
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>>>>>>> origin/merged-prs
