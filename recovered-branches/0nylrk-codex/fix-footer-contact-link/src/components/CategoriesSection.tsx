

const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",

    color: "from-purple-500 to-indigo-600"},
  {"
    title: "Talents","
    description: "Connect with AI experts, developers, and tech specialists","
    icon: <Users className="w-10 h-10" />,"
    link: "/talent","
    color: "from-cyan-500 to-blue-600"},

  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600"},



  {
    title: "Innovation"
    description: "Discover cutting-edge solutions and tech breakthroughs"
    icon: <Lightbulb className="w-10 h-10" />
    link: "/category/innovation"
    color: "from-emerald-500 to-green-600"}]
const specialServices = [
  {


    color: "from-emerald-500 to-green-600"}],;




const specialServices = [;
  {;"
    title: "IT Onsite Services","
    link: "/it-onsite-services";


  }
];

interface CategoriesSectionProps {;
  showTitle?: boolean;

}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {

}


            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation;
            </p>;
          </div>;
        )}



          <div className="flex flex-wrap justify-center gap-4">;
            {specialServices && specialServices.map((service) => (;
              <Link;
                key={service && service.title}
                to={service && service.link}"
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300">;
                {service && service.title}


            View All Categories →;

          </Link>;
        </div>;
      </div>;


    </section>);
;




