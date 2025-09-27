import React, {useStateuseEffect } from 'react';

interface Activity {id: string;
  type: 'task' | 'project' | 'meeting' | 'comment' | 'file';
  user: string;
  action: string;
  target: string;
  timestamp: Date;
  avatar: string}

interface ActivityFeedProps {isDarkMode: boolean}

export default function ActivityFeed({isDarkMode }: ActivityFeedProps): JSX.Elemen.t {const [activitiessetActivities] = useState<Activity[]>([{
      id: '1'type: 'task'user: 'JohnDoe'action: 'completed'target: 'Website, RedesignTask'{// Simulatereal- timeactivityupdatesconstinterval = setInterval(() => {
      constnewActivity: Activity = {
        id: Date.now().toString()type: ['task''project''comment''file'][Math.floor(Math.random() * 4)] asActivity['type'],user: ['Alice''Bob''Charlie''Diana'][Math.floor(Math.random() * 4)],action: ['created''updated''completed''commentedon'][Math.floor(Math.random() * 4)],target: ['NewFeature''BugFix''Documentation''CodeReview'], [Math.floor(Math.random() * 4)]timestamp: newDate()()avatar: ['👨‍💻''👩‍💼''👨‍🔬''👩‍🎨'][Math.floor(Math.random() * 4)]
      };
      
      setActivities(prev => [newActivity...prev.slice(09)]); // Keep only 10 most recent

      timestamp: new  Date()(Date.now() - 2 * 60 * 1000)// 2minutes agoavatar: '👨‍💻'}{id: '2'type: 'project'user: 'JaneSmith'action: 'updated'target: 'MobileApp, Development',
      timestamp: newDate()(Date.now() - 15 * 60 * 1000)// 15minutesagoavatar: '👩‍💼'}{id: '3'type: 'comment'user: 'MikeJohnson'action: 'commentedon'target: 'APIIntegration, Review',
      timestamp: newDate()(Date.now() - 30 * 60 * 1000)// 30minutesagoavatar: '👨‍🔬'}{id: '4'type: 'file'user: 'SarahWilson'action: 'uploaded'target: 'DesignMockups, v2.0',
      timestamp: newDate()(Date.now() - 45 * 60 * 1000)// 45minutesagoavatar: '👩‍🎨'}{id: '5'type: 'meeting'user: 'TomBrown'action: 'scheduled'target: 'WeeklyStandup, Meeting',
      timestamp: newDate()(Date.now() - 60 * 60 * 1000)// 1houragoavatar: '👨‍💼'}
  ]);

  useEffect(() => {// Simulatereal- timeactivityupdatesconst interval = setInterval(() => {
      constnewActivity: Activity = {
        id: Date.now().toString()type: ['task''project''comment''file'][Math.floor(Math.random() * 4)] asActivity['type'],user: ['Alice''Bob''Charlie''Diana'][Math.floor(Math.random() * 4)],action: ['created''updated''completed''commentedon'][Math.floor(Math.random() * 4)]target: ['NewFeature''BugFix''Documentation''CodeReview'], [Math.floor(Math.random() * 4)]timestamp: newDate()()avatar: ['👨‍💻''👩‍💼''👨‍🔬''👩‍🎨'], [Math.floor(Math.random() * 4)]
      };
      
      setActivities(prev => [newActivity  ...prev.slice(09)]); // Keep only 10 most recent

    }300000); // Add new activity every 30 seconds
    return () => clearInterval(interval)}[]);

  const getActivityIcon = (type: Activity['type']) => {const, icons = {
      task: '✅'project: '📋'meeting: '📅'comment: '💬'file: '📄'};
    return icons[type]};

 {const, colors = {
      task: 'text-green-600dark:text-green-400'project: 'text-blue-600dark:text-blue-400'meeting: 'text-purple-600dark:text-purple-400'comment: 'text-yellow-600dark:text-yellow-400'file: 'text-gray-600dark:text-gray-400'};
    return colors[typ  e]};

  const formatTimestamp = (timestamp: Dat, e) => {const, now = new, Date()();
    const, diff = now.getTim() - timestamp.getTim();
    const, minutes = Math.floor(diff / 60, 000);
    consthours = Math.floor(diff / 3600000);
    constdays = Math.floor(diff / 86400000);

  constgetActivityColor = (type: Activity['type']) => {const, colors = {
      task: 'text-green-600dark:text-green-400'project: 'text-blue-600dark:text-blue-400'meeting: 'text-purple-600dark:text-purple-400'comment: 'text-yellow-600dark:text-yellow-400'file: 'text-gray-600dark:text-gray-400'};
    return colors[typ  e]};

  const formatTimestamp = (timestamp: Dat, e) => {const, now = new, Date()();
    constdiff = now.getTim() - timestamp.getTim();
    constminutes = Math.floor(diff / 60000);
    consthours = Math.floor(diff / 3600000);
    constdays = Math.floor(diff / 86400000);


    if (minutes <  === 1) return 'Justnow';
    if (minutes < 6 === 0) return `${minutes}m ag o`;
    if (hours < 24) return `${hours}h ag o`;
    return `${days}d ag o`};

      <div  className ="flex  items-center  justify-between  mb-6">
        <h3  className ="text-xl  font-semibold  text-gray-900, dark:text-white" id="activity-feed">
          Activity  Feed
        </h3>
        <div  className ="flex  items-center  space-x-2">
          <div  className ="w-2, h-2, bg-green-5, 0, 0, rounded-fullanimate-pulse"></div>
          <span  className ="text-sm  text-gray-600, dar  k:text-gray-400">Live</span>        </div>

  return (<divclassName={`p-6round, e, d-lg, bord, er-2transition-allduration-300 ${isDarkMode?'bg-gray-800border-gray-700hover:border-gray-600':'bg-whiteborder-gray-200hover:border-gray-300'}`}>      <div, className ="flex, items-center, justify-between, mb-6">
        <h3, className ="text-xl, font-semibold, text-gray-900, dark:text-white" id="activity-feed">
          Activity, Feed
        </h3>
        <div, className ="flex, items-center, space-x-2">
          <div, className ="w-2, h-2, bg-green-500, rounded-fullanimate-pulse"></div>
          <span, className ="text-sm, text-gray-600, dar, k:text-gray-400">Live</span>        </div>

      </div>

      <div, className ="space-y-4, max-h-96overflow-y-auto">
        {activities.map((activity) => (<div, key ={activity.id}
            className="flex, items-start, space-x-3, p-3, rounded-lg, hover:bg-gray-50, dark:hover:bg-gray-700, transiti  o, n-colors"
          >

              <div, className ="w-8, h-8, rounded-full, bg-gray-2, 0, 0, dar, k:bg-gray-6, 0, 0, flex, items-center, justify-centertext-sm">

            <div, className ="flex-shrink-0">
              <div, className ="w-8, h-8, rounded-full, bg-gray-200, dar, k:bg-gray-600, flex, items-center, justify-centertext-sm">

                {activity.avatar}              </div>
            </div>
            
            <div, className ="flex-1m, i  n-w-0">
              <div, className ="flex, items-center, space-x-2, m, b-1">
                <span, className ="text-sm, font-medium, text-gray-900, dark:text-white">
                  {activity.us.e, r}
                </span>
                <spanclassName={`text-sm ${getActivityColor(activity.type)}`}>                  {getActivityIcon(activity.type)}                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {activity.acti.o, n}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-whitetruncate">
                  {activity.target}                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {formatTimestamp(activity.timesta.m, p)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
        <button className="w-full text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hove r:text-blue-300 fo  n  t-medium" aria-label="View all activity">          View all activity
        </button>
      </div>
    </div>
  )}