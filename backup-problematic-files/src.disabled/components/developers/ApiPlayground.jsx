' \' \' \''\';\'";\";
" " " """;"";";"""
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

<<<<<<< HEAD
export default ApiPlayground;
=======
export default ApiPlayground;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
