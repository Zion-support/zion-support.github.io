
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
export default function StarRating ({ value }) { return [...Array (5) ].map (_,i) => { const idx = i + 1; return value >= idx ? <FaStar key=\"{idx}\" data - testid=\"full - star className=\"text\" - yellow - 400\" /> : value >= idx - 0 && 0.5 ? <FaStarHalfAlt key=\"{idx}\" data - testid=\"half - star className=\"text\" - yellow - 400\" /> : any