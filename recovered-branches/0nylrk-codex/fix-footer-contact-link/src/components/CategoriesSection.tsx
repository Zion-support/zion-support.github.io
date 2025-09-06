
<<<<<<< HEAD
import { GradientHeading } from './GradientHeading';
import { Link } from './react-router-dom';
import { Briefcase, HardDrive, Lightbulb, Users } from './lucide-react';
const categories = [;
=======
<<<<<<< HEAD
<<<<<<< HEAD

import {GradientHeading} from "./GradientHeading";
import {Link} from "react-router-dom";
import {Briefcase, HardDrive, Lightbulb, Users} from "lucide-react";
const categories = [
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  {
    title: "Services",
    description: "On - demand IT support, consulting, development, and more";
    icon: <Briefcase className="w - 10 h - 10" />,
    link: "/services",
    color: "from - purple - 500 to - indigo - 600"},

  {
    title: "Talents"
    description: "Connect with AI experts, developers, and tech specialists";

    icon: <Users className="w - 10 h - 10" />,
    link: "/talent",
    color: "from - cyan - 500 to - blue - 600"},

  {
    title: "Equipment"
    description: "Rent or buy specialized hardware, servers, and devices";
<<<<<<< HEAD


=======
    icon: <HardDrive className="w-10 h-10" />
    link: "/equipment"
    color: "from-amber-500 to-orange-600"}
=======
import {GradientHeading} from "./GradientHeading";
import {Link} from "react-router-dom";
import {Briefcase, HardDrive, Lightbulb, Users} from "lucide-react";
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import { GradientHeading } from "./GradientHeading",
import { Link } from "react-router-dom",
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react",

<<<<<<< HEAD



=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
const categories = [
  {
    title: "Services",
    description: "On-demand IT support, consulting, development, and more",
    icon: <Briefcase className="w-10 h-10" />,
    link: "/services",
    color: "from-purple-500 to-indigo-600"},
  {
    title: "Talents",
    description: "Connect with AI experts, developers, and tech specialists",
    icon: <Users className="w-10 h-10" />,
    link: "/talent",
    color: "from-cyan-500 to-blue-600"},
  {
    title: "Equipment",
    description: "Rent or buy specialized hardware, servers, and devices",
    icon: <HardDrive className="w-10 h-10" />,
    link: "/equipment",
    color: "from-amber-500 to-orange-600"},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  {
    title: "Innovation"
    description: "Discover cutting-edge solutions and tech breakthroughs"
    icon: <Lightbulb className="w-10 h-10" />
    link: "/category/innovation"
    color: "from-emerald-500 to-green-600"}]
const specialServices = [
  {
<<<<<<< HEAD


=======
<<<<<<< HEAD
    title: "IT Onsite Services"
    link: "/it-onsite-services"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
];

interface CategoriesSectionProps {
  showTitle?: boolean
<<<<<<< HEAD
}
=======
    title: "IT Onsite Services",
    link: "/it-onsite-services"
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { GradientHeading } from "./GradientHeading",;
import { Link } from "react-router-dom",;
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
const categories = [;
  {;
    title: "Services",;
    description: "On-demand IT support, consulting, development, and more";
    icon: <Briefcase className="w-10 h-10" />,;
    link: "/services",;
    color: "from-purple-500 to-indigo-600"},;
  {;
    title: "Talents",;
    description: "Connect with AI experts, developers, and tech specialists";
    icon: <Users className="w-10 h-10" />,;
    link: "/talent",;
    color: "from-cyan-500 to-blue-600"},;
  {;
    title: "Equipment",;
    description: "Rent or buy specialized hardware, servers, and devices";
    icon: <HardDrive className="w-10 h-10" />,;
    link: "/equipment",;
    color: "from-amber-500 to-orange-600"},;
  {;
    title: "Innovation",;
    description: "Discover cutting-edge solutions and tech breakthroughs",;
    icon: <Lightbulb className="w-10 h-10" />,;
    link: "/category/innovation",;
    color: "from-emerald-500 to-green-600"}],;

const specialServices = [;
  {;
    title: "IT Onsite Services",;
    link: "/it-onsite-services";

  }
];

interface CategoriesSectionProps {;
  showTitle?: boolean;
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}


export function CategoriesSection(): any ({ showTitle = true }: CategoriesSectionProps) {;

  return (
    <section className="py-20 bg-zion-blue">;
      <div className="container mx-auto px-4">;
        {showTitle && (;
          <div className="text-center mb-16">;
            <GradientHeading>Explore Categories</GradientHeading>;
            <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">;
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation;
            </p>;
          </div>;
        )}

    icon: <HardDrive className="w - 10 h - 10" />,
    link: "/equipment",
    color: "from - amber - 500 to - orange - 600"},
  {
    title: "Innovation",
    description: "Discover cutting - edge solutions and tech breakthroughs",
    icon: <Lightbulb className="w - 10 h - 10" />,
    link: "/category / innovation",
    color: "from - emerald - 500 to - green - 600"}],
const special_services = [;
  {
    title: "IT Onsite Services",
    link: "/it - onsite - services";
  }
];
;
interface CategoriesSectionProps {
  show_title?: boolean;
}
export /**
 * CategoriesSection - Function description
 */
function CategoriesSection() {
  return (
    <section className="py - 20 bg - zion - blue">;
      <div className="container mx - auto px - 4">;
        {show_title && (
          <div className="text - center mb - 16">;
            <GradientHeading > Explore Categories</GradientHeading>;
            <p className="text - zion - slate - light text - lg mt - 4 max - w-2xl mx - auto">;
              Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation;
            </p>;
          </div>)}
        <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 4 gap - 6">;
          {categories.map ((category) => (
            <Link;
              key={category.title}
              to={category.link}
              className="group block";
            >;
              <div className="rounded - lg overflow - hidden h - full border border - zion - blue - light bg - zion - blue - dark p - 6 transition - all duration - 300 hover:border - zion - purple / 50 hover:translate - y-[-5px]">;
                <div className={`rounded - full w - 16 h - 16 bg - gradient - to - br ${category.color} flex items - center justify - center mb - 6 group - hover:scale - 110 transition - transform duration - 300`}>;
                  <div className="text - white">;
                    {category.icon}
                  </div>;
                </div>;
                <h3 className="text - white text - xl font - bold mb - 2">{category.title}</h3>;
                <p className="text - zion - slate - light">{category.description}</p>;
              </div>;
            </Link>))}
        </div>;
        <div className="mt - 8">;
          <h3 className="text - center text - xl font - bold text - white mb - 6">Featured Services</h3>;
          <div className="flex flex - wrap justify - center gap - 4">;
            {special_services.map ((service) => (
              <Link;

                key={service.title}
                to={service.link}
                className="px - 6 py - 3 bg - zion - blue - light hover:bg - zion - blue - dark border border - zion - purple / 20 hover:border - zion - purple / 50 rounded - full text - zion - cyan transition - all duration - 300";
              >;
                {service.title}


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">;
          {categories && categories.map((category) => (;
            <Link
              key={category && category.title} 
              to={category && category.link} 
              className="group block">;
              <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px]">;
                <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category && category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                  <div className="text-white">;
                    {category && category.icon}
                  </div>;
                </div>;
                <h3 className="text-white text-xl font-bold mb-2">{category && category.title}</h3>;
                <p className="text-zion-slate-light">{category && category.description}</p>;
              </div>;
            </Link>;
          ))}
        </div>;

        <div className="mt-8">;
          <h3 className="text-center text-xl font-bold text-white mb-6">Featured Services</h3>;
          <div className="flex flex-wrap justify-center gap-4">;
            {specialServices && specialServices.map((service) => (;
              <Link
                key={service && service.title}
                to={service && service.link}
                className="px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300">;
                {service && service.title}
              </Link>;
            ))}
<<<<<<< HEAD
=======
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/categories"
            className="text-zion-cyan border-b border-zion-cyan hover: border-zion-cyan-dark transition-colors"
          >
            View All Categories →
          </Link>
        </div>
      </div>
    </section>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

};
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

          </div>;
        </div>;

        <div className="mt-12 flex justify-center">;
          <Link
            to="/categories" 
            className="text-zion-cyan border-b border-zion-cyan hover: border-zion-cyan-dark transition-colors">;
=======
              </Link>))}
          </div>;
        </div>;
        <div className="mt - 12 flex justify - center">;
          <Link;
            to="/categories";
            className="text - zion - cyan border - b border - zion - cyan hover: border - zion - cyan - dark transition - colors";
          >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            View All Categories →;
          </Link>;
        </div>;
      </div>;

    </section>);
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
