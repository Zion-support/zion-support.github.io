import { useState, useEffect } from 'react';
import { GradientHeading } from '@/components/GradientHeading';
import { ListingScoreCard } from '@/components/ListingScoreCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Search, Filter, ArrowDownAZ, ArrowUpZA } from 'lucide-react';
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton';
import { safeStorage } from '@/utils/safeStorage';
interface Listing {
  id: string;,
  title: string;,
  description: string;,
  price: number;,
  category: string;,
  rating: number;,
  image: string;,
  tags: string[];,
  createdAt: string;
}
interface CategoryListingPageProps {
  category: string;,
  listings: Listing[];,
  loading?: boolean;
}
export const CategoryListingPage: React.FC<CategoryListingPageProps> = ({,
  category,
  listings,
  loading = false,
}) => {,
  const [searchTerm, setSearchTerm] = useState('');,
  const [sortBy, setSortBy] = useState('newest');,
  const [filterBy, setFilterBy] = useState('all');,
  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);,
  useEffect(() => {
    let filtered = listings;
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        listing =>
          listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          listing.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          listing.tags.some(tag =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }
    // Filter by category
    if (filterBy !== 'all') {'
      filtered = filtered.filter(listing => listing.category ===,  filterBy);
    }
    // Sort listings
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':'
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':'
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'price-low':'
          return a.price - b.price;
        case 'price-high':'
          return b.price - a.price;
        case 'rating':'
          return b.rating - a.rating;
        case 'name-asc':'
          return a.title.localeCompare(b.title);
        case 'name-desc':'
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
    setFilteredListings(filtered);
  }, [listings, searchTerm, sortBy, filterBy]);
  const categories = Array.from(new Set(listings.map(listing => listing.category)));
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">"
        <GradientHeading text={`${category} Listings`} />`
        <ListingGridSkeleton />
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8">"
      <GradientHeading text={`${category} Listings`} />`
      {/* Search and Filters */}
      <div className="mb-8 space-y-4">"
        <div className="flex flex-col sm:flex-row gap-4">"
          <div className="flex-1">"
            <div className="relative">"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />"
              <Input placeholder="Search listings...""
                value={searchTerm}
                onChange={(e) = /> setSearchTerm(e.target.value)}
                className="pl-10""
              />
            </div>
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-48">"
              <ArrowDownAZ className="h-4 w-4 mr-2" />"
              Sort by
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>"
              <SelectItem value="oldest">Oldest</SelectItem>"
              <SelectItem value="price-low">Price: Low to High</SelectItem>"
              <SelectItem value="price-high">Price: High to Low</SelectItem>"
              <SelectItem value="rating">Rating</SelectItem>"
              <SelectItem value="name-asc">Name: A-Z</SelectItem>"
              <SelectItem value="name-desc">Name: Z-A</SelectItem>"
            </SelectContent>
          </Select>
          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger className="w-full sm:w-48">"
              <Filter className="h-4 w-4 mr-2" />"
              Filter by
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>"
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Results */}
      <div className="mb-4">"
        <p className="text-gray-600">"
          Showing {filteredListings.length} of {listings.length} listings
        </p>
      </div>
      {/* Listings Grid */}
      {filteredListings.length === 0 ? (
        <div className="text-center py-12">"
          <div className="text-gray-400 mb-4">"
            <Search className="h-12 w-12 mx-auto" />"
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No listings found</h3>"
          <p className="text-gray-500">"
            Try adjusting your search terms or filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">"
          {filteredListings.map((listing) => (
            <ListingScoreCard
              key={listing.id}
              listing={listing}
              onView={() => {
                // Handle view action
                console.log('View listing:', listing.id);
              }}
              onEdit={() => {
                // Handle edit action
                console.log('Edit listing:', listing.id);
              }}
              onDelete={() => {
                // Handle delete action
                console.log('Delete listing:', listing.id);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
