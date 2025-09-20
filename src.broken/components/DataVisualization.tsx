
export default function Page() {
interface DataVisualizationProps extends React.PropsWithChildren<{}> {

  title?: string;
  showMetrics?: boolean;
  showCharts?: boolean;
  showActions?: boolean}

export const DataVisualization: React.FC<DataVisualizationProps> = ({

title:  "Data Analytics Dashboard",;
  showMetrics = true,;
  showCharts = true,;
  showActions = true}) => {;
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(false);
      icon: <DollarSign className="w-5 h-5"  />,
      color: 'text-green-400'
      icon: <Users className="w-5 h-5"  />,
      color: 'text-blue-400'
      icon: <Target className="w-5 h-5"  />,
      color: 'text-yellow-400'
