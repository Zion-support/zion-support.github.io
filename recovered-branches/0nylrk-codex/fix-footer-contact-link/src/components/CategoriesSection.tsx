    color: "from-amber-500 to-orange-600"},  }
];

interface CategoriesSectionProps {
  showTitle?: boolean

  {
    title: "Talents"
    description: "Connect with AI experts, developers, and tech specialists";
    icon: <Users className="w - 10 h-10" />,
    link: "/talent",
    color: "from - cyan - 500 to - blue - 600"},
  {
    title: "Equipment"
    description: "Rent or buy specialized hardware, servers, and devices";
const categories = [;
  {;
    title: "Services",,
  description: "On-demand IT support, consulting, development, and more";
    title: "IT Onsite Services",
    link: "/it-onsite-services"
import { GradientHeading } from "./GradientHeading",;
import { Link } from "react-router-dom",;
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react",;

const categories = [;
  {;
    title: "Services",,
  description: "On-demand IT support, consulting, development, and more";    icon: <Briefcase className="w-10 h-10" />,;
    link: "/services",;
    color: "from-purple-500 to-indigo-600"},;
  {;
    title: "Talents",,
  description: "Connect with AI experts, developers, and tech specialists";    icon: <Users className="w-10 h-10" />,;
    link: "/talent",;
    color: "from-cyan-500 to-blue-600"},;
  {;
    title: "Equipment",,
  description: "Rent or buy specialized hardware, servers, and devices";    icon: <HardDrive className="w-10 h-10" />,;
    link: "/equipment",;
    color: "from-amber-500 to-orange-600"},;
  {;
    title: "Innovation",,
  description: "Discover cutting-edge solutions and tech breakthroughs",;
    icon: <Lightbulb className="w-10 h-10" />,;
    link: "/category/innovation",;
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
  return (                key={service.title}
                to={service.link}
                className="px - 6 py - 3 bg - zion - blue - light hover:bg - zion - blue - dark border border - zion - purple / 20 hover:border - zion - purple / 50 rounded - full text - zion - cyan transition - all duration-300";
              >;
                {service.title}

        <div className="mt-8">;
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>;
          <div className="flex flex-wrap justify-center gap-4">;
            {specialServices && specialServices.map((service) => (;
              <Link;
                key={service && service.title}
                to={service && service.link}"
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300">;
                {service && service.title}
              </Link>;
            ))}
};
          </div>;
        </div>;

        <div className="mt-12 flex justify-center">;
          <Link
            to="/categories" 
            className="text-zion-cyan border-b border-zion-cyan hover: border-zion-cyan-dark transition-colors">;
              </Link>))}
          </div>;
        </div>;
        <div className="mt - 12 flex justify-center">;
          <Link;
            to="/categories";
            className="text - zion - cyan border - b border - zion - cyan hover: border - zion - cyan - dark transition-colors";;
  );
};