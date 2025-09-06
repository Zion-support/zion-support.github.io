
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
const React from "react"; const QuantumComputing = () => { return ( <div> <h1>QuantumComputing</h1> <p>Component placeholder</p> 