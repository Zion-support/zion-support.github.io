
import { NewsletterForm } from "@/components/NewsletterForm",
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react",
import { Link } from "react-router-dom",

import { NewsletterForm } from "@/components/NewsletterForm";
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsletterForm } from "@/components/NewsletterForm",
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react",
import { Link } from "react-router-dom",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
export function Footer() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light pt-12 pb-8">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
          <div>;
            <div className="mb-4">;
              <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">;
                ZION;
              </span>;
            </div>;
            <p className="text-zion-slate mb-4 max-w-xs">;
              The world's first free marketplace dedicated to high-tech and;
              artificial intelligence.;
            </p>;
            <div className="flex space-x-4">;
              <a
                href="https://twitter && twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate hover:text-zion-cyan transition-colors">;
                <Twitter className="h-5 w-5" />;
              </a>;
              <a
                href="https://www && www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate hover:text-zion-cyan transition-colors">;
                <Linkedin className="h-5 w-5" />;
              </a>;
              <a
                href="https://www && www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate hover:text-zion-cyan transition-colors">;
                <Facebook className="h-5 w-5" />;
              </a>;
              <a
                href="https://instagram && instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate hover:text-zion-cyan transition-colors">;
                <Instagram className="h-5 w-5" />;
              </a>;
              <a
                href="https://github && github.com"
                target="_blank"
                rel="noopener noreferrer"

                className="text-zion-slate hover:text-zion-cyan transition-colors">;
                <Github className="h-5 w-5" />;
              </a>;
            </div>;
          </div>;

          <div>;
            <h3 className="text-white font-semibold mb-4 text-lg">;
              Marketplace;
            </h3>;
            <ul className="space-y-2">;
              <li>;

                <Link
                  to="/marketplace"
                  className="text-zion-slate hover:text-zion-cyan transition-colors">;

                  Products;
                </Link>;
              </li>;
              <li>;

                <Link;
                  to="/services";
                  className="text - zion - slate hover:text - zion - cyan transition - colors";
                >;

                  Services;
                </Link>;
              </li>;
              <li>;

                <Link;
                  to="/talent";
                  className="text - zion - slate hover:text - zion - cyan transition - colors";
                >;

                  Talent;
                </Link>;
              </li>;
              <li>;

                <Link;
                  to="/equipment";
                  className="text - zion - slate hover:text - zion - cyan transition - colors";
                >;

                  Equipment;
                </Link>;
              </li>;
              <li>;

                <Link;
                  to="/categories";
                  className="text - zion - slate hover:text - zion - cyan transition - colors";
                >;

                  Categories;
                </Link>;
              </li>;
              <li>;

                  className="text-zion-slate hover:text-zion-cyan transition-colors">;

    </footer>;
  );
}
