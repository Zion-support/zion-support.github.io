import React, { useState, useEffect, useCallback } from 'react';
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  User,
  Settings,
  Palette,
  Eye,
  MousePointer,
=======
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  User, 
  Settings, 
  Palette, 
  Eye, 
  MousePointer, 
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  Smartphone,
  Monitor,
  Zap,
  Heart,
  Star,
  MessageCircle,
  TrendingUp,
  Accessibility,
<<<<<<< HEAD
  Languages,
  ShoppingCart,
  Activity
} from 'lucide-react';

=======
  Languages
 } from 'lucide-react';
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
interface UserPreference {
  id: string;
  name: string;
  value: string | boolean | number;
  type: 'boolean' | 'string' | 'number' | 'select';
  options?: string[];
  category: 'appearance' | 'accessibility' | 'performance' | 'language';
<<<<<<< HEAD
  description: string;
}

=======
  description: string}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
interface UserActivity {
  id: string;
  action: string;
  timestamp: Date;
  duration?: number;
  success: boolean;
<<<<<<< HEAD
  category: 'navigation' | 'interaction' | 'search' | 'purchase';
}

=======
  category: 'navigation' | 'interaction' | 'search' | 'purchase'}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
interface AccessibilityFeature {
  id: string;
  name: string;
  enabled: boolean;
  description: string;
<<<<<<< HEAD
  impact: 'high' | 'medium' | 'low';
}

const InteractiveUserExperience: React.FC = () => {
  const [preferences, setPreferences] = useState<UserPreference[]>([]);
  const [userActivities, setUserActivities] = useState<UserActivity[]>([]);
  const [accessibilityFeatures, setAccessibilityFeatures] = useState<AccessibilityFeature[]>([]);
  const [activeTab, setActiveTab] = useState('preferences');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize sample data
=======
  impact: 'high' | 'medium' | 'low'}
const InteractiveUserExperience: React.FC = () => {;
  const [preferences, setPreferences] = useState<UserPreference[]>([]);
  const [userActivities, setUserActivities] = useState<UserActivity[]>([]);
  const [accessibilityFeatures, setAccessibilityFeatures] = useState<AccessibilityFeature[]>([]);
  const [currentTheme, setCurrentTheme] = useState('light');
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState('normal');
  const [language, setLanguage] = useState('en');
  // Initialize user preferences
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  useEffect(() => {
    const samplePreferences: UserPreference[] = [
      {
        id: '1',
        name: 'Theme',
        value: 'dark',
        type: 'select',
        options: ['light', 'dark', 'auto'],
        category: 'appearance',
        description: 'Choose your preferred color theme'
      },
      {
        id: '2',
        name: 'Font Size',
        value: 'medium',
        type: 'select',
        options: ['small', 'medium', 'large'],
        category: 'accessibility',
        description: 'Adjust text size for better readability'
      },
      {
        id: '3',
        name: 'Animations',
        value: true,
        type: 'boolean',
        category: 'performance',
<<<<<<< HEAD
        description: 'Enable or disable UI animations'
      },
      {
        id: '4',
        name: 'Language',
        value: 'en',
        type: 'select',
        options: ['en', 'es', 'fr', 'de'],
        category: 'language',
        description: 'Select your preferred language'
      }
    ];

    const sampleActivities: UserActivity[] = [
      {
        id: '1',
        action: 'Page Navigation',
        timestamp: new Date(Date.now() - 300000),
        duration: 2,
        success: true,
        category: 'navigation'
      },
      {
        id: '2',
        action: 'Form Submission',
        timestamp: new Date(Date.now() - 600000),
        duration: 15,
        success: true,
        category: 'interaction'
      },
      {
        id: '3',
        action: 'Search Query',
        timestamp: new Date(Date.now() - 900000),
        duration: 5,
        success: true,
        category: 'search'
      }
    ];

    const sampleAccessibility: AccessibilityFeature[] = [
=======
        description: 'Automatically save your work'
    ];
    setPreferences(initialPreferences)}, []);
  // Initialize accessibility features
  useEffect(()  => {
    const features: AccessibilityFeature[] = [
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      {
        id: '1',
        name: 'Screen Reader Support',
        enabled: true,
        description: 'Full compatibility with screen readers',
        impact: 'high'
      },
      {
        id: '2',
        name: 'Keyboard Navigation',
        enabled: true,
        description: 'Complete keyboard navigation support',
        impact: 'high'
      },
      {
        id: '3',
        name: 'High Contrast Mode',
        enabled: false,
        description: 'Enhanced contrast for better visibility',
        impact: 'medium'
      },
      {
        id: '4',
        name: 'Voice Commands',
        enabled: false,
        description: 'Control the app with voice commands',
        impact: 'low'
<<<<<<< HEAD
      }
    ];

    setPreferences(samplePreferences);
    setUserActivities(sampleActivities);
    setAccessibilityFeatures(sampleAccessibility);
    setIsLoading(false);
  }, []);

  const updatePreference = useCallback((id: string, value: string | boolean | number) => {
    setPreferences(prev => 
      prev.map(pref => 
        pref.id === id ? { ...pref, value } : pref
      )
    );
  }, []);

  const toggleAccessibilityFeature = useCallback((id: string) => {
    setAccessibilityFeatures(prev => 
      prev.map(feature => 
        feature.id === id ? { ...feature, enabled: !feature.enabled } : feature
      )
    );
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'appearance': return <Palette className="w-4 h-4" />;
      case 'accessibility': return <Accessibility className="w-4 h-4" />;
      case 'performance': return <Zap className="w-4 h-4" />;
      case 'language': return <Languages className="w-4 h-4" />;
      default: return <Settings className="w-4 h-4" />;
    }
  };

  const getActivityIcon = (category: string) => {
    switch (category) {
      case 'navigation': return <MousePointer className="w-4 h-4" />;
      case 'interaction': return <User className="w-4 h-4" />;
      case 'search': return <Eye className="w-4 h-4" />;
      case 'purchase': return <ShoppingCart className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading user experience settings...</p>
        </div>
      </div>
    );
  }

=======
    ];
    setAccessibilityFeatures(features)}, []);
  // Simulate user activities
  useEffect(()  => {
    const activities: UserActivity[] = [
      {
        id: '1',
        action: 'Visited Services Page',
        timestamp: new Date(Date.now() - 300000),
        duration: 45,
        success: true,
        category: 'navigation'
      },
      {
        id: '2',
        action: 'Searched for AI Services',
        timestamp: new Date(Date.now() - 600000),
        duration: 12,
        success: true,
        category: 'search'
      },
      {
        id: '3',
        action: 'Contacted Support',
        timestamp: new Date(Date.now() - 900000),
        duration: 180,
        success: true,
        category: 'interaction'
      },
      {
        id: '4',
        action: 'Downloaded Whitepaper',
        timestamp: new Date(Date.now() - 1200000),
        duration: 8,
        success: true,
        category: 'interaction'
    ];
    setUserActivities(activities)}, []);
          break}
    }
  }, [preferences]);
  const toggleAccessibilityFeature = useCallback((id: string) => {;
    setAccessibilityFeatures(prev => prev.map(feature => ;
      feature.id === id ? { ...feature, enabled: !feature.enabled } : feature;
    ));
  }, []);
  const getActivityIcon = (category: UserActivity['category']) => {;
    switch (category) {;
      case 'navigation': return <MousePointer className="h-4 w-4" />;
      case 'interaction': return <User className="h-4 w-4" />;
      case 'search': return <Eye className="h-4 w-4" />;
      case 'purchase': return <Heart className="h-4 w-4" />;
      default: return <User className = "h-4 w-4" />};
  };
      default: return 'bg-gray-500'}
  };
  const getSuccessRate = () => {;
    const total = userActivities.length;
    const successful = userActivities.filter(activity => activity.success).length;
    return total > 0 ? (successful / total) * 100 : 0};
  const getAverageDuration = () => {;
    const activitiesWithDuration = userActivities.filter(activity => activity.duration);
    if (activitiesWithDuration.length === 0) return 0;
    const totalDuration = activitiesWithDuration.reduce((sum, activity) => ;
      sum + (activity.duration || 0), 0;
    );
    return totalDuration / activitiesWithDuration.length};
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Interactive User Experience</h2>
          <p className="text-gray-600">Customize and monitor your app experience</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="activities">User Activities</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
        </TabsList>
        {/* Preferences Tab */}
        <TabsContent value="preferences" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {preferences.map((pref) => (
              <Card key={pref.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    {getCategoryIcon(pref.category)}
                    {pref.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{pref.description}</p>
                  
                  {pref.type === 'boolean' && (
                    <Button
                      variant={pref.value ? 'default' : 'outline'}
                      onClick={() => updatePreference(pref.id, !pref.value)}
                      className="w-full"
                    >
                      {pref.value ? 'Enabled' : 'Disabled'}
                    </Button>
                  )}

                  {pref.type === 'select' && pref.options && (
                    <select
                      value={pref.value as string}
                      onChange={(e) => updatePreference(pref.id, e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      {pref.options.map((option) => (
                        <option key={option} value={option}>
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </option>
                      ))}
                    </select>
                  )}

                  {pref.type === 'number' && (
                    <input
                      type="number"
                      value={pref.value as number}
                      onChange={(e) => updatePreference(pref.id, Number(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Activities Tab */}
        <TabsContent value="activities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Recent User Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {userActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {getActivityIcon(activity.category)}
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-gray-500">
                          {activity.timestamp.toLocaleTimeString()}
                        </p>
<<<<<<< HEAD
=======
                        <Badge variant="outline">{preference.category}</Badge>
                      </div>
                      <div className="ml-4">
                        {preference.type === 'boolean' && (
                          <Button
                            variant={preference.value ? 'default' : 'outline'}
                            onClick = {
  () => updatePreference(preference.id,
  !preference.value)
}
                            size="sm"
                            {preference.value ? 'Enabled' : 'Disabled'}
                          </Button>
                        )}
                        {preference.type === 'select' && preference.options && (
                          <select
                            value={preference.value as string}
                            onChange = {
  (e) => updatePreference(preference.id,
  e.target.value)
}
                            className="border rounded px-3 py-2 text-sm"
                            {preference.options.map((option) => (
                              <option key={option} value={option}>
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                              </option>
                            ))}
                          </select>
                        )}
                        {preference.type === 'number' && (
                          <input
                            type="range"
                            min="12"
                            max="24"
                            value={preference.value as number}
                            onChange = {
  (e) => updatePreference(preference.id,
  parseInt(e.target.value))
}
                            className="w-24"
                          />
                        )}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={activity.success ? 'default' : 'destructive'}>
                        {activity.success ? 'Success' : 'Failed'}
                      </Badge>
                      {activity.duration && (
                        <p className="text-sm text-gray-500 mt-1">
                          {activity.duration}s
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Accessibility Tab */}
<<<<<<< HEAD
        <TabsContent value="accessibility" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accessibilityFeatures.map((feature) => (
              <Card key={feature.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Accessibility className="w-5 h-5" />
                    {feature.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Status:</span>
                    <Button
                      variant={feature.enabled ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => toggleAccessibilityFeature(feature.id)}
                    >
                      {feature.enabled ? 'Enabled' : 'Disabled'}
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Impact:</span>
                    <Badge className={getImpactColor(feature.impact)}>
                      {feature.impact.toUpperCase()}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { InteractiveUserExperience };
=======
        <TabsContent value="accessibility" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Accessibility className="h-5 w-5" />
                Accessibility Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accessibilityFeatures.map((feature) => (
                  <div key={feature.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{feature.name}</h4>
                          <Badge className={`${getImpactColor(feature.impact)} text-white`}>
                            {feature.impact}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {feature.description}
                        </p>
                      </div>
                      <Button
                        variant={feature.enabled ? 'default' : 'outline'}
                        onClick={() => toggleAccessibilityFeature(feature.id)}
                        size="sm"
                        className="ml-4"
                        {feature.enabled ? 'Enabled' : 'Disabled'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Device Compatibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Monitor className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-sm font-semibold">Desktop</div>
                  <div className="text-xs text-gray-600">Full Support</div>
                </div>
                <div className="text-center">
                  <Smartphone className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <div className="text-sm font-semibold">Mobile</div>
                  <div className="text-xs text-gray-600">Responsive</div>
                </div>
                <div className="text-center">
                  <Tablet className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <div className="text-sm font-semibold">Tablet</div>
                  <div className="text-xs text-gray-600">Optimized</div>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                  <div className="text-sm font-semibold">Touch</div>
                  <div className="text-xs text-gray-600">Enabled</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                User Activity Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    {userActivities.length}
                  </div>
                  <div className="text-sm text-gray-600">Total Actions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">
                    {getSuccessRate().toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">
                    {getAverageDuration().toFixed(0)}s
                  </div>
                  <div className="text-sm text-gray-600">Avg Duration</div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Recent Activities</h4>
                {userActivities.map((activity) => (
                  <div key={activity.id} className="border rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getActivityIcon(activity.category)}
                        <div>
                          <div className="font-medium">{activity.action}</div>
                          <div className="text-sm text-gray-600">
                            {activity.timestamp.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {activity.duration && (
                          <Badge variant="outline">
                            {activity.duration}s
                          </Badge>
                        )}
                        <Badge variant={activity.success ? 'default' : 'destructive'}>
                          {activity.success ? 'Success' : 'Failed'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Feedback Tab */}
        <TabsContent value="feedback" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                User Feedback & Ratings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-6 w-6 ${
                          star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-2xl font-bold">4.2/5.0</div>
                  <div className="text-sm text-gray-600">Based on 127 reviews</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">What users love:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Intuitive interface design</li>
                      <li>• Fast loading times</li>
                      <li>• Excellent accessibility features</li>
                      <li>• Responsive mobile experience</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Areas for improvement:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• More customization options</li>
                      <li>• Additional language support</li>
                      <li>• Enhanced search functionality</li>
                      <li>• Better offline capabilities</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center">
                  <Button className="flex items-center gap-2 mx-auto">
                    <MessageCircle className="h-4 w-4" />
                    Share Your Feedback
                  </Button>
                </div>
              </div>
            </CardContent>;
          </Card>;
        </TabsContent>;
      </Tabs>;
    </div>;
  );
};
// Add missing Tablet icon component
const Tablet: React.FC<{ className?: string }> = ({ className }) => (
  <svg className = {className} fill="none" stroke="currentColor" viewBox="0 0 24 24">;
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />;
  </svg>;
);
export default InteractiveUserExperience;}}}}}}}}}}}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
