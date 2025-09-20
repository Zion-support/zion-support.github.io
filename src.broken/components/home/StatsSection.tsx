
interface Stat {
  number: string;
  label: string;
  description: string;
  avatar: string;
icon: React.ComponentType<{ className?: string
}>;
  color: string}

interface StatsSectionProps extends React.PropsWithChildren<{}> {

  stats: Stat[]}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {

  const [counts, setCounts] = useState<any>({});
