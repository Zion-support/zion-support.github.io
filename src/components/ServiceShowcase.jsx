import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, Zap, Shield, TrendingUp, Users } from 'lucide-react';
export function ServiceShowcase({ services }) {
    const getCategoryIcon = (category) => {
        switch (category) {
            case 'AI Services': return <Zap className="h-5 w-5"/>;
            case 'Security': return <Shield className="h-5 w-5"/>;
            case 'Analytics': return <TrendingUp className="h-5 w-5"/>;
            case 'Development': return <Users className="h-5 w-5"/>;
            default: return <Star className="h-5 w-5"/>;
        }
    };
    const getCategoryColor = (category) => {
        switch (category) {
            case 'AI Services': return 'from-purple-500 to-pink-500';
            case 'Security': return 'from-red-500 to-orange-500';
            case 'Analytics': return 'from-blue-500 to-cyan-500';
            case 'Development': return 'from-green-500 to-emerald-500';
            default: return 'from-gray-500 to-slate-500';
        }
    };
    return (<div className="py-12 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
            Featured Services
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Discover our cutting-edge solutions designed to transform your business with AI, security, and innovation
          </p>
        </div>

              {/* Hover Effect Overlay */}";
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />;
            </Card>;
          ))}
        </div>;
";
        <div className="text-center mt-12">;
          <div>Broken JSX</div>
            className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25">;
            View All Services;
          </Button>;
        </div>;
      </div>;
    </div>;
  )}
'"`