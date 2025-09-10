
import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react",
import { Link } from "react-router-dom",

import { Link  } from './react-router-dom';
export /**
 * Footer - Function description
 */
function Footer() {
  return (
    <footer className="bg - zion - blue - dark border - t border - zion - blue - light pt - 12 pb-8">;
      <div className="container mx - auto px - 4 sm:px - 6 lg:px-8">;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap-8">;
          <div>;
            <div className="mb-4">;
              <span className="text - 2xl font - bold bg - gradient - to - r from - zion - cyan via - zion - purple - light to - zion - purple bg - clip - text text-transparent">;
                ZION;
              </span>;
            </div>;
            <p className="text - zion - slate mb - 4 max-w-xs">;
              The world's first free marketplace dedicated to high - tech and;
              artificial intelligence.;
            </p>;
            <div className="flex space-x-4">;
              <a;
                href="https://twitter.com / lovable_dev";
                target="_blank";
                rel="noopener noreferrer";
                className="text - zion - slate hover:text - zion - cyan transition-colors";
              >;
                <Twitter className="h - 5 w-5" />;
              </a>;
              <a;
                href="https://www.linkedin.com / company / zion - marketplace";
                target="_blank";
                rel="noopener noreferrer";
                className="text - zion - slate hover:text - zion - cyan transition-colors";
              >;
                <Linkedin className="h - 5 w-5" />;
              </a>;
              <a;
                href="https://www.facebook.com / zionmarketplace";
                target="_blank";
                rel="noopener noreferrer";
                className="text - zion - slate hover:text - zion - cyan transition-colors";
              >;
                <Facebook className="h - 5 w-5" />;
              </a>;
              <a;
                href="https://instagram.com";
                target="_blank";
                rel="noopener noreferrer";
                className="text - zion - slate hover:text - zion - cyan transition-colors";
              >;
                <Instagram className="h - 5 w-5" />;
              </a>;
              <a;
                href="https://github.com";
                target="_blank";
                rel="noopener noreferrer";
                className="text - zion - slate hover:text - zion - cyan transition-colors";
              >;
                <Github className="h - 5 w-5" />;
              </a>;
            </div>;
          </div>;
          <div>;
            <h3 className="text - white font - semibold mb - 4 text-lg">;
              Marketplace;
            </h3>;
            <ul className="space-y-2">;
              <li>;
                <Link;
                  to="/marketplace";
                  className="text - zion - slate hover:text - zion - cyan transition-colors";
                >;
                  Products;
                </Link>;
              </li>;
              <li>;
                </Link>;
              </li>;
              <li>;                  Careers;
                </Link>;
              </li>;
              <li>;
            <NewsletterForm />;
          </div>;
        </div>;

        <div className="mt - 12 pt - 8 border - t border - zion - blue-light">;
          <div className="flex flex - col md: flex - row justify - between items-center">;
            <p className="text - zion - slate text-sm">;
              &copy, {new Date ().getFullYear ()} Zion Tech Group. All rights;
              reserved.;
            </p>;
            <div className="flex space - x-6 mt - 4 md: mt-0">;
              <Link;
                to="/privacy";
                className="text - zion - slate hover:text - zion - cyan text - sm transition-colors";
              >;
                Privacy Policy;
              </Link>;
              <Link;
                to="/terms";
                className="text - zion - slate hover:text - zion - cyan text - sm transition-colors";
              >;

                Terms of Service;
              </Link>;                Terms of Service;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;




  );
