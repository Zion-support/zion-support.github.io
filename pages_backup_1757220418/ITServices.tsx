class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}


    </Layout>




  Cpu;
} from 'lucide-react';

];

];

];
const stats = [
  { number: "99.9%", label: "Uptime Guarantee" },

export default function ITServicesPage() {
  return (
    <MainLayout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud management, network security, database administration, and 24/7 support."
      keywords="IT services, cloud management, network security, database administration, IT support, infrastructure"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly. 
              From cloud management to cybersecurity, we've got you covered.

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>


      </div>
    </MainLayout>
  );


