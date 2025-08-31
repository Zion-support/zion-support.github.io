import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface UserPreference {
  id: string;
  name: string;
  value: string | boolean | number;
  type: 'boolean' | 'string' | 'number' | 'select';
  options?: string[];
  category: 'appearance' | 'accessibility' | 'performance' | 'language';
  description: string;
}

interface UserActivity {
  id: string;
  action: string;
  timestamp: Date;
  duration?: number;
  success: boolean;
  category: 'navigation' | 'interaction' | 'search' | 'purchase';
}

interface AccessibilityFeature {
  id: string;
  name: string;
  enabled: boolean;
  description: string;
  impact: 'high' | 'medium' | 'low';
}

const InteractiveUserExperience: React.FC = () => {
  const [preferences, setPreferences] = useState<UserPreference[]>([]);
  const [userActivities, setUserActivities] = useState<UserActivity[]>([]);
  const [accessibilityFeatures, setAccessibilityFeatures] = useState<AccessibilityFeature[]>([]);
  const [currentTheme, setCurrentTheme] = useState('light');
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState('normal');
  const [language, setLanguage] = useState('en');

  // Initialize user preferences
  useEffect(() => {
  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  };



}, []);, []);
  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  };


}, []);, []);
  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  };

}, []);, []);
  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);
    const initialPreferences: UserPreference[] = [
      {
        id: '1',
        name: 'Theme',
        value: 'light',
        type: 'select',
        options: ['light', 'dark', 'auto'],
        category: 'appearance',
        description: 'Choose your preferred color theme'
      },
      {
        id: '2',
        name: 'Font Size',
        value: 16,
        type: 'number',
        category: 'accessibility',
        description: 'Adjust text size for better readability'
      },
      {
        id: '3',
        name: 'High Contrast',
        value: false,
        type: 'boolean',
        category: 'accessibility',
        description: 'Enable high contrast mode for better visibility'
      },
      {
        id: '4',
        name: 'Reduced Motion',
        value: false,
        type: 'boolean',
        category: 'accessibility',
        description: 'Reduce animations for users with motion sensitivity'
      },
      {
        id: '5',
        name: 'Language',
        value: 'en',
        type: 'select',
        options: ['en', 'es', 'fr', 'de', 'zh'],
        category: 'language',
        description: 'Select your preferred language'
      },
      {
        id: '6',
        name: 'Auto-save',
        value: true,
        type: 'boolean',
        category: 'performance',
        description: 'Automatically save your work'
      }
    ];

    setPreferences(initialPreferences);

  // Initialize accessibility features
  useEffect(() => {
  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  };



}, []);, []);
  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  };


}, []);, []);
  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  };

}, []);, []);
  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);
    const features: AccessibilityFeature[] = [
      {
        id: '1',
        name: 'Screen Reader Support',
        enabled: true,
        description: 'Full compatibility with screen readers and assistive technologies',
        impact: 'high'
      },
      {
        id: '2',
        name: 'Keyboard Navigation',
        enabled: true,
        description: 'Complete keyboard accessibility for all interactive elements',
        impact: 'high'
      },
      {
        id: '3',
        name: 'Focus Indicators',
        enabled: true,
        description: 'Clear visual indicators for keyboard focus',
        impact: 'medium'
      },
      {
        id: '4',
        name: 'Color Blind Support',
        enabled: true,
        description: 'Alternative color schemes and patterns for color-blind users',
        impact: 'medium'
      },
      {
        id: '5',
        name: 'Voice Commands',
        enabled: false,
        description: 'Voice-activated navigation and controls',
        impact: 'low'
      }
    ];

    setAccessibilityFeatures(features);

  // Simulate user activities
  useEffect(() => {
  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  };



}, []);, []);
  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  };


}, []);, []);
  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  
  return () => {
    // Cleanup function
  };

}, []);, []);
  // TODO: Add dependencies if needed

  // TODO: Add dependencies if needed

  return () => {
    // Cleanup function
  };
}, []);, []);
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
      }
    ];

    setUserActivities(activities);

  const updatePreference = useCallback((id: string, value: string | boolean | number) => {
    setPreferences(prev => prev.map(pref => 
      pref.id === id ? { ...pref, value } : pref
    ));

    // Apply preference changes
    const preference = preferences.find(p => p.id === id);
    if (preference) {
      switch (preference.name) {
        case 'Theme':
          setCurrentTheme(value as string);
          document.documentElement.setAttribute('data-theme', value as string);
          break;
        case 'Font Size':
          setFontSize(value as number);
          document.documentElement.style.fontSize = `${value}px`;
          break;
        case 'High Contrast':
          setContrast(value as boolean ? 'high' : 'normal');
          document.documentElement.setAttribute('data-contrast', value as boolean ? 'high' : 'normal');
          break;
        case 'Language':
          setLanguage(value as string);
          // Here you would typically change the app language
          break;
      }
    }
  }, [preferences]);

  const toggleAccessibilityFeature = useCallback((id: string) => {
    setAccessibilityFeatures(prev => prev.map(feature => 
      feature.id === id ? { ...feature, enabled: !feature.enabled } : feature
    ));

  const getActivityIcon = (category: UserActivity['category']) => {
    switch (category) {
      case 'navigation': return <MousePointer className="h-4 w-4" />;
      case 'interaction': return <User className="h-4 w-4" />;
      case 'search': return <Eye className="h-4 w-4" />;
      case 'purchase': return <Heart className="h-4 w-4" />;
      default: return <User className="h-4 w-4" />;
    }
  };

  const getImpactColor = (impact: AccessibilityFeature['impact']) => {
    switch (impact) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getSuccessRate = () => {
    const total = userActivities.length;
    const successful = userActivities.filter(activity => activity.success).length;
    return total > 0 ? (successful / total) * 100 : 0;
  };

  const getAverageDuration = () => {
    const activitiesWithDuration = userActivities.filter(activity => activity.duration);
    if (activitiesWithDuration.length === 0) return 0;
    
    const totalDuration = activitiesWithDuration.reduce((sum, activity) => 
      sum + (activity.duration || 0), 0
    );
    return totalDuration / activitiesWithDuration.length;
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="preferences" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="preferences" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Preferences
          </TabsTrigger>
          <TabsTrigger value="accessibility" className="flex items-center gap-2">
            <Accessibility className="h-4 w-4" />
            Accessibility
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="feedback" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Feedback
          </TabsTrigger>
        </TabsList>

        {/* Preferences Tab */}
        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                User Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {preferences.map((preference) => (
                  <div key={preference.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{preference.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          {preference.description}
                        </p>
                        <Badge variant="outline">{preference.category}</Badge>
                      </div>
                      <div className="ml-4">
                        {preference.type === 'boolean' && (
                          <Button
                            variant={preference.value ? 'default' : 'outline'}
                            onClick={() => updatePreference(preference.id, !preference.value)}
                            size="sm"
                          >
                            {preference.value ? 'Enabled' : 'Disabled'}
                          </Button>
                        )}
                        {preference.type === 'select' && preference.options && (
                          <select
                            value={preference.value as string}
                            onChange={(e) => updatePreference(preference.id, e.target.value)}
                            className="border rounded px-3 py-2 text-sm"
                          >
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
                            onChange={(e) => updatePreference(preference.id, parseInt(e.target.value))}
                            className="w-24"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Accessibility Tab */}
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
                      >
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
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Add missing Tablet icon component
const Tablet: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

export default InteractiveUserExperience;