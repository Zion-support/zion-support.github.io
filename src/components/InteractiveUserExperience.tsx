<<<<<<< HEAD
import {

<<<<<<< HEAD
import { Badge } from './ui / badge';
import { Button } from './ui / button';
import { Card, CardContent, CardHeader, CardTitle } from './ui / card';
import { Progress } from './ui / progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui / tabs';
=======
>>>>>>> main

  User,
  Settings,
  Palette,
  Eye,
  MousePointer,
  Smartphone,
  Monitor,
  Zap,
  Heart,
  Star,
  MessageCircle,
  TrendingUp,
  Accessibility,
  Languages,
  ShoppingCart,
  Activity} from 'lucide-react';

interface UserPreference {

  id: string;
  name: string;
  value: string | boolean | number;
  type: 'boolean' | 'string' | 'number' | 'select';
  options?: string[];
  category: 'appearance' | 'accessibility' | 'performance' | 'language';
  description: string}

=======
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
interface UserActivity {

  id: string;
  action: string;
  timestamp: Date;
  duration?: number;
  success: boolean;
  category: 'navigation' | 'interaction' | 'search' | 'purchase'}
interface AccessibilityFeature {

  id: string;
  name: string;
  enabled: boolean;
  description: string;
  impact: 'high' | 'medium' | 'low';
const InteractiveUserExperience: React.FC = () => {

  const [preferences, setPreferences] = useState<UserPreference[]>([]);
  const [userActivities, setUserActivities] = useState<UserActivity[]>([]);
  const [accessibilityFeatures, setAccessibilityFeatures] = useState<
    AccessibilityFeature[]
  >([]);
  const [activeTab, setActiveTab] = useState('preferences');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize sample data
  useEffect ( () => {

    const samplePreferences: UserPreference[] = [
      {

        id: '1',
        name: 'Theme',
        value: 'dark',
        type: 'select',
        options: ['light',dark',auto'],
        category: 'appearance',
        description: 'Choose your preferred color theme'},
      {

        id: '2',
        name: 'Font Size',
        value: 'medium',
        type: 'select',
        options: ['small',medium',large'],
        category: 'accessibility',
        description: 'Adjust text size for better readability'},
      {

        id: '3',
        name: 'Animations',
        value: true,
        type: 'boolean',
        category: 'performance',
        description: 'Enable or disable UI animations'},
      {

        id: '4',
        name: 'Language',
        value: 'en',
        type: 'select',
        options: ['en',es',fr',de'],
        category: 'language',
        description: 'Select your preferred language'},
    ];

    const sampleActivities: UserActivity[] = [
      {

        id: '1',
        action: 'Page Navigation',
        timestamp: new Date (Date.now () - 300000) ,
        duration: 2,
        success: true,
        category: 'navigation'},
      {

        id: '2',
        action: 'Form Submission',
        timestamp: new Date (Date.now () - 600000) ,
        duration: 15,
        success: true,
        category: 'interaction'},
      {

        id: '3',
        action: 'Search Query',
        timestamp: new Date (Date.now () - 900000) ,
        duration: 5,
        success: true,
        category: 'search'},
    ];

    const sampleAccessibility: AccessibilityFeature[] = [
      {

        id: '1',
        name: 'Screen Reader Support',
        enabled: true,
        description: 'Full compatibility with screen readers',
        impact: 'high'},
      {

        id: '2',
        name: 'Keyboard Navigation',
        enabled: true,
        description: 'Complete keyboard navigation support',
        impact: 'high'},
      {

        id: '3',
        name: 'High Contrast Mode',
        enabled: false,
        description: 'Enhanced contrast for better visibility',
        impact: 'medium'},
      {

        id: '4',
        name: 'Voice Commands',
        enabled: false,
        description: 'Control the app with voice commands',
        impact: 'low'},
    ];

    setPreferences(samplePreferences);
    setUserActivities(sampleActivities);
    setAccessibilityFeatures(sampleAccessibility);
    setIsLoading(false)}, [])}, [])}, [])},
    []
  )}, []);

  
      case 'accessibility':"
        return <Accessibility className="w-4 h-4"  />;
      case 'performance':"
        return <Zap className="w-4 h-4"  />;
      case 'language':"
        return <Languages className="w-4 h-4"  />;
      default:"
        return <Settings className="w-4 h-4"  />}
  };

  
      case 'interaction':"
        return <User className="w-4 h-4"  />;
      case 'search':"
        return <Eye className="w-4 h-4"  />;
      case 'purchase':"
        return <ShoppingCart className="w-4 h-4"  />;
      default:"
        return <Activity className="w-4 h-4"  />}
  };

  
      case 'medium':'
        return 'bg-yellow-500';
      case 'low':'
        return 'bg-blue-500';
      default:'
        return 'bg-gray-500'}  };

  if (isLoading) {

    return ("
      <div className="flex items-center justify-center min-h-[400px]">"
        <div className="text-center">"
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>"
          <p className="text-gray-600">Loading user experience settings...</p>
        </div>
      </div>) }
  return ("
    <div className="space-y-6">
      {/* Header */}"
      <div className="flex items-center gap-3">"
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">"
          <User className="w-6 h-6 text-white"  />        </div>
        <div>"
          <h2 className="text-2xl font-bold">Interactive User Experience</h2>"
          <p className="text-gray-600">
            Customize and monitor your app experience
          </p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>"
        <TabsList className="grid w-full grid-cols-3">"
          <TabsTrigger value="preferences">Preferences</TabsTrigger>"
          <TabsTrigger value="activities">User Activities</TabsTrigger>"
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
        </TabsList>

        {/* Preferences Tab */}"
        <TabsContent value="preferences" className="space-y-4">"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {preferences.map(pref => (
              <Card key={pref.id}>
                <CardHeader>"
                  <CardTitle className="flex items-center gap-2 text-lg">
                    {getCategoryIcon(pref.category)}
                    {pref.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>"
                  <p className="text-sm text-gray-600 mb-4">
                    {pref.description}
                  </p>

                  {pref.type === 'boolean' && (
                    <Button'
                      variant={pref.value ? 'default' : 'outline'}
                      onClick={() => updatePreference(pref.id, !pref.value)}"
                      className="w-full"
                    >
                      {pref.value ? 'Enabled' : 'Disabled'}
                    </Button>
                  )}

                  {pref.type === 'select' && pref.options && (
                    <select
                      value={pref.value as string}
                      onChange={e => updatePreference(pref.id, e.target.value)}"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      {pref.options.map(option => (
                        <option key={option} value={option}>
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </option>
                      ))}
                    </select>
                  )}

                  {pref.type === 'number' && (
                    <input"
                      type="number"
                      value={pref.value as number}
                      onChange={e =>
                        updatePreference(pref.id, Number(e.target.value))
                      }"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  )}
                </CardContent>
              </Card>) ) }
          </div>
        </TabsContent>

        {/* Activities Tab */}"
        <TabsContent value="activities" className="space-y-4">
          <Card>
            <CardHeader>"
              <CardTitle className="flex items-center gap-2">"
                <TrendingUp className="w-5 h-5"  />                Recent User Activities
              </CardTitle>
            </CardHeader>
            <CardContent>"
              <div className="space-y-3">
                {userActivities.map(activity => (
                  <div
                    key={activity.id}"
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >"
                    <div className="flex items-center gap-3">
                      {getActivityIcon(activity.category)}
                      <div>"
                        <p className="font-medium">{activity.action}</p>"
                        <p className="text-sm text-gray-500">
                          {activity.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>"
                    <div className="text-right">
                      <Badge'
                        variant={activity.success ? 'default' : 'destructive'}
                      >
                        {activity.success ? 'Success' : 'Failed'}
                      </Badge>
                      {activity.duration && ("
                        <p className="text-sm text-gray-500 mt-1">
                          {activity.duration}s
                        </p>) }
                    </div>
                  </div>) ) }
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Accessibility Tab */}"
        <TabsContent value="accessibility" className="space-y-4">"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accessibilityFeatures.map(feature => (
              <Card key={feature.id}>
                <CardHeader>"
                  <CardTitle className="flex items-center gap-2">"
                    <Accessibility className="w-5 h-5"  />                    {feature.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>"
                  <p className="text-sm text-gray-600 mb-4">
                    {feature.description}
                  </p>
"
                  <div className="flex items-center justify-between mb-3">"
                    <span className="text-sm font-medium">Status:</span>
                    <Button'
                      variant={feature.enabled ? 'default' : 'outline'}"
                      size="sm"
                      onClick={() => toggleAccessibilityFeature(feature.id)}
                    >
                      {feature.enabled ? 'Enabled' : 'Disabled'}
                    </Button>
                  </div>
"
                  <div className="flex items-center gap-2">"
                    <span className="text-sm font-medium">Impact:</span>
                    <Badge className={getImpactColor(feature.impact)}>
                      {feature.impact.toUpperCase()}
                    </Badge>
                  </div>
                </CardContent>
              </Card>) ) }
          </div>
        </TabsContent>
      </Tabs>
    </div>) };
export { InteractiveUserExperience };
'"