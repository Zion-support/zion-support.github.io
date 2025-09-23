import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user data
    const loadUser = async () => {
      try {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock user data
        setUser({
          id: 1,
          displayName: 'John Doe',
          email: 'john.doe@example.com',
          avatar: null
        });
      } catch (error) {
        // // console.error('Error loading user:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  if (isLoading) {
    return (
      <>
        <SEO title="Profile - Zion Tech Group" description="View and manage your profile." />
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <SEO title="Profile - Zion Tech Group" description="View and manage your profile." />
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center justify-center">
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-8 max-w-md text-center">
                <h1 className="text-2xl font-bold text-white mb-4">Please log in</h1>
                <p className="text-gray-300 mb-6">You need to be logged in to view your profile.</p>
                <button
                  onClick={() => navigate('/login?redirect=/profile')}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Go to Login
                </button>
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
      <SEO title="Profile - Zion Tech Group" description="View and manage your profile." />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-8">My Profile</h1>
          
          <div className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-4xl font-bold text-white mb-4 mx-auto md:mx-0">
                  {user.displayName ? user.displayName.split(' ').map(name => name[0]).join('') : user.email?.charAt(0)}
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-white mb-2">{user.displayName || "User"}</h2>
                <p className="text-gray-300 mb-6">{user.email}</p>
                
                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Account Information</h3>
                    <div className="space-y-2 text-gray-300">
                      <p><span className="font-medium">Member since:</span> January 2024</p>
                      <p><span className="font-medium">Last login:</span> Today</p>
                      <p><span className="font-medium">Status:</span> <span className="text-green-400">Active</span></p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Quick Actions</h3>
                    <div className="flex flex-wrap gap-3">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        Edit Profile
                      </button>
                      <button className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors">
                        Change Password
                      </button>
                      <button className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors">
                        Notification Settings
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    onClick={logout}
                    className="px-6 py-3 border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-colors rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}