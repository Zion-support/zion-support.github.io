import { useParams, Link } from "react-router-dom",
import { Header } from "@/components/header/Header",
import { Footer } from "@/components/Footer",
import { GradientHeading } from "@/components/GradientHeading",
import { ProductListingCard } from "@/components/ProductListingCard",
import { useState, useEffect } from "react",
import { Brain, PenLine, BarChart, Eye, Bot, Mic, Code, Briefcase } from "lucide-react",
import { MARKETPLACE_LISTINGS } from "@/data/listingData",
import { useNavigate } from "react-router-dom",

import { toast } from "@/hooks/use-toast";
export default function CategoryDetail() {};
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?: string }
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS);"
import { toast } from "@/hooks/use-toast",
export default function CategoryDetail() {};
  // Cast to specify the expected route param type since useParams may be untyped;
  const { slug } = useParams() as { slug?: string },
  const navigate = useNavigate(),
  const [isLoading, setIsLoading] = useState(true),
  const [listings, setListings] = useState(MARKETPLACE_LISTINGS),  }),




    ),;'
    // If we don't have real listings for this category, generate placeholder listings;
  }
;
  return (
    <>;
      <Header />;
      <div className="min - h-screen bg - zion-blue">;
        <div className="container mx - auto px - 4 py-12">;
          <div className="mb-4">;
            <Link to="/categories" className="text - zion - cyan hover:text - zion - cyan - light transition - colors inline - flex items-center">;
              ← Back to Categories;
            </Link>;
          </div>;
          <div className="text - center mb-12">;
            <div className="flex justify - center mb-6">;
              <div className="text - zion - cyan p - 4 bg - zion - blue - dark rounded-full">;
                {category.icon}
              </div>;
            </div>;
            <GradientHeading className="text - 4xl md:text - 5xl font - bold mb-4">;
              {category.title}
            </GradientHeading>;
            <p className="text - zion - slate - light text - lg max - w-3xl mx-auto">;
              {category.description}
          }
        }
      })
    }
  }
  },
  };
  },

  return (

                <ProductListingCard 

                  listing={listing}
                  onRequestQuote={handleRequestQuote}
                />
