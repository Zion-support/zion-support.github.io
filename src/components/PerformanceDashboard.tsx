
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'in-progress': return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'planned': return <TrendingUp className="h-4 w-4 text-blue-500" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-500" />
      case 'performance': return <Zap className="h-4 w-4" />;
      case 'security': return <Shield className="h-4 w-4" />;
      case 'ux': return <Search className="h-4 w-4" />;
      case 'build': return <TrendingUp className="h-4 w-4" />;
      default: return <CheckCircle className="h-4 w-4" />

export default PerformanceDashboard, 
