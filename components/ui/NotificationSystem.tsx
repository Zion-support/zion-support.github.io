interface Notification {
  id: string;
cursor/website-audit-and-update-with-deployment-76dc
  type: 'success' | 'error' | 'warning' | 'info'
  className = ''
  const getNotificationStyles = (type: Notification['type'
      case 'success'
        return 'bg-green-50 border-green-200 text-green-800'
      case 'error'
        return 'bg-red-50 border-red-200 text-red-800'
      case 'warning'
        return 'bg-yellow-50 border-yellow-200 text-yellow-800'
      case 'info'
        return 'bg-blue-50 border-blue-200 text-blue-800'
        return 'bg-gray-50 border-gray-200 text-gray-800'
cursor/fix-lint-push-and-merge-to-main-f3c1
