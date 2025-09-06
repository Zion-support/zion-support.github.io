
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
import React from \"react\"; export default function ExpensiveComponent() { const [data,setData] = useState([]); const [loading,setLoading] = useState(true); useEffect() => {} const [data,setData] = useState([]); const [loading,setLoading] = useState(true); useEffect() => {};},[]);,[]); const timer = setTimeout() => {}; { \"length\": \'10000\' },; (_,i) => Math && Math.sqrt(i) * Math && Math.PI * Math && Math.random(); ); setData(expensiveData); setLoading(false);},2000); return () => clearTimeout(timer);},[]); if(loading) {} return (); <div className=\"text-center p-8\"> <div className=\"animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4\"></div> <p className=\"text-zion-slate-light\">Computing expensive data...></div></div> 
import _React from "react"; export default function ExpensiveComponent() { const [data,setData] = useState([]); const [loading,setLoading] = useState(true); useEffect() => {} const [data,setData] = useState([]); const [loading,setLoading] = useState(true); useEffect() => {};},[]);,[]); const timer = setTimeout() => {}; { "length": '10000' },; (_,i) => Math && Math.sqrt(i) * Math && Math.PI * Math && Math.random(); ); setData(expensiveData); setLoading(false);},2000); return () => clearTimeout(timer);},[]); if(loading) {} return (); <div className="text-center p-8"> <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4"></div> <p className="text-zion-slate-light">Computing expensive data...></div></div> 