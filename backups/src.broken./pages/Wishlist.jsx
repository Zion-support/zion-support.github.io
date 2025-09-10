import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, MapPin, Clock, ShoppingCart, MessageCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function WishlistPage() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading favorites
    const loadFavorites = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock favorites data
        setFavorites([
          {
            id: 1,
            title: "AI-Powered Analytics Dashboard",
            description: "Advanced analytics dashboard with machine learning insights",
            price: 299,
            priceType: 'one-time',
            type: 'product',
            image: null,
            rating: 4.8,
            location: "Remote",
            availability: "Available now"
          },
          {
            id: 2,
            title: "Senior Full-Stack Developer",
            description: "Experienced developer specializing in React and Node.js",
            price: 75,
            priceType: 'hourly',
            type: 'talent',
            image: null,
            rating: 4.9,
            location: "San Francisco, CA",
            availability: "Available for projects"
          }
        ]);
      } catch (error) {
        // // console.error('Error loading favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  const removeFromWishlist = (itemId) => {
    setFavorites(favorites.filter(item => item.id !== itemId));
  };

  const addToCart = (item) => {
    // Simulate adding to cart
    // // console.log('Adding to cart:', item);
    alert('Item added to cart!');
  };

  if (loading) {
    return (
      <>
        <SEO title="Wishlist - Zion Tech Group" description="Save and organize your favorite items and services" />
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-300">Loading...</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO title="Wishlist - Zion Tech Group" description="Save and organize your favorite items and services" />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">My Wishlist</h1>
            <p className="text-lg text-gray-300">
              Save and organize your favorite items and services
            </p>
          </div>

          {favorites.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">💝</div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Your wishlist is empty
              </h3>
              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                Start exploring our marketplace and save items you love to your wishlist
              </p>
              <button
                onClick={() => navigate('/marketplace')}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
              >
                Browse Marketplace
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favorites.map(item => (
                <div
                  key={item.id}
                  className="bg-slate-800/50 rounded-lg shadow-sm border border-blue-500/20 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {/* Item Image */}
                  <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-slate-400 text-4xl">
                        {item.type === 'talent' ? '👤' : '📦'}
                      </div>
                    )}
                  </div>

                  {/* Item Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-white text-lg line-clamp-2">
                        {item.title}
                      </h3>
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-red-400 hover:text-red-300 transition-colors ml-2"
                      >
                        <Heart className="w-5 h-5 fill-current" />
                      </button>
                    </div>

                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Item Details */}
                    <div className="space-y-2 mb-4">
                      {item.price && (
                        <div className="text-lg font-bold text-blue-400">
                          ${item.price}
                          {item.priceType === 'hourly' && (
                            <span className="text-sm text-gray-400">/hr</span>
                          )}
                        </div>
                      )}

                      {item.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-300">{item.rating}</span>
                        </div>
                      )}

                      {item.location && (
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      )}

                      {item.availability && (
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{item.availability}</span>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => addToCart(item)}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>

                      {item.type === 'talent' && (
                        <button className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors flex items-center gap-2">
                          <MessageCircle className="w-4 h-4" />
                          Message
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
