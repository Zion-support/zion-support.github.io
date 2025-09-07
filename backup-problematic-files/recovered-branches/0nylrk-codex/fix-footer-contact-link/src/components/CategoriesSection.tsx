
import { GradientHeading } from "./GradientHeading",;""
import { Link } from "react-router-dom",;""
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react",;"
;
const categories = [;
  {;"
    title:"Services",;""
    description:"On-demand IT support, consulting, development, and more",;""
    icon:<Briefcase className="w-10 h-10" />,;"
"
    icon:<Users className="w-10 h-10" />,;"
    icon:<HardDrive className="w-10 h-10" />,;"
    icon:<Lightbulb className="w-10 h-10" />,;"
    <section className="py-20 bg-zion-blue">;"
</section>"
      <div className="container mx-auto px-4">;"
</div>"
          <div className="text-center mb-16">;"
</div>
            <GradientHeading>Explore Categories;"
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;"
</p>
            </p>;
          </div>;"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">;"
            <Link ;
              key={category.title} ;
              to={category.link} ;"
              className="group block";"
            >;
]"
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px]">;"
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <div className="text-white">;"
                  </div>;
                <h3 className="text-white text-xl font-bold mb-2">{category.title}</h3>;""
                <p className="text-zion-slate-light">{category.description}</p>;"
        <div className="mt-8">;"
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>;""
          <div className="flex flex-wrap justify-center gap-4">;"
                key={service.title}
                to={service.link}"
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300";"

        <div className="mt-12 flex justify-center">;"
          <Link ;"
            to="/categories" ;""
            className="text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors";"

    </section>;"
icon: <Briefcase className="w-10 h-10" />;"
icon: <Users className="w-10 h-10" />;"
icon: <HardDrive className="w-10 h-10" />;"
  return (<section className="py-20 bg-zion-blue" > <div className="container mx-auto px-4" > showTitle && (<div className="text-center mb-16" > <GradientHeading>Explore Categories </p> </div>)"
</section>
}</div> ) ) 
}</div> > {
}) ) "
}</div> </div> <div className="mt-12 flex justify-center" > <Link > View All Categories   </div> </div> </section>)""`;