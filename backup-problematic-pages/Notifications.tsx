export default function Notifications() {
  return (
  return (
  return (
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Mock data - replace with actual API call,
const mockNotifications: Notification[] = [
      {
        id: '1',
type: 'message'
        title: 'New Message',
message: 'You have received a new message from John Doe'
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago,
read: false,
actionUrl: '/messaging'
      }
      {
        id: '2',
type: 'order'
        title: 'Order Update',
message: 'Your order #12345 has been shipped'
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago,
read: true,
actionUrl: '/orders'
      }
      {
        id: '3',
type: 'system'
        title: 'System Maintenance',
message: 'Scheduled maintenance will occur tonight at 2 AM'
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago,
read: false;
}
    ];
    setNotifications(mockNotifications);
    setLoading(false);
  }, []);
  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification read: true };
          : notification;
      );
    );
  }
  const markAllAsRead = () => {;
    setNotifications(prev =>;
      prev.map(notification => ({ ...notification read: true }));
    );
    toast({
      title: "Success",
description: "All notifications marked as read"
    });
  }
  const deleteNotification = (id: string) => {;
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }
  const unreadCount = notifications.filter(n => !n.read).length;
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            {[1 2, 3].map(i => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}origin/main
