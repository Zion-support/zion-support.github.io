
interface Service {
  category: string;
icon: React.ComponentType<{ className?: string
}>;
  color: string;
  items: string[];
  description?: string}

interface ServicesOverviewProps extends React.PropsWithChildren<{}> {

  services: Service[]}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ services }) => {

  return ()
    <section className="py-20 bg-gradient-to-b from-zion-slate-dark/30 via-zion-slate-dark/20 to-zion-slate-dark/30" role="region" aria-labelledby="services-heading">"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div"
          className="text-center mb-16"
          initial = {

  { opacity: 0,
  y: 30

}}
          whileInView = {

  { opacity: 1,
  y: 0

}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
"
          <div className="inline-flex items-center mb-4 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full">"
            <Sparkles className="w-4 h-4 text-zion-cyan mr-2"  />"
            <span className="text-zion-cyan text-sm font-medium">Innovation First</span>
