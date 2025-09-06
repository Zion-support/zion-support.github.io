
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import { useEffect } from \'react\';\''\'; import { useNavigate } from \'react-router-dom\';\''\'; import { useSelector } from \'react-redux\'; function withAuth(Component) {} return null} const Wrapped = (props) => {} const router = useNavigate(); const isLoggedIn = useSelector(state) => state && state.auth.isLoggedIn); useEffect() => {} if (!isLoggedIn) {} \'; \''; \''\'; navigate(\'/login?next=/community/new\');},[isLoggedIn,router]); if (!isLoggedIn) {} return null; return <Component {...props}/>;}; return Wrapped; export { withAuth };\'; export default withAuth;\'';}}\''\'; router(\'/login?next=/community/
const { useEffect } from "react";"""; import { useNavigate } from "react-router-dom";"""; import { useSelector } from "react-redux"; function withAuth(Component) {} return null} const Wrapped = (props) => {} const router = useNavigate(); const isLoggedIn = useSelector(state) => state && state.auth.isLoggedIn); useEffect() => {} if (!isLoggedIn) {} "; ""; """; navigate("/login?next=/community/new");},[isLoggedIn,router]); if (!isLoggedIn) {} return null; return <Component {.props}/>;}; return Wrapped; export { withAuth };"; export default withAuth;"";}}"""; router("/login?next=/community/new");},[isLoggedIn,router]); if(!isLoggedIn) {} return null} return 